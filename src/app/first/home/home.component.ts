import { Component, OnInit, Inject } from '@angular/core';
import { HomeService } from './home.service'

import { ResponseEntity } from '../../_core/response-entity';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  //最近15天分析数据 图表区域 配置
  Last15DaysAnalysisTaskOptinos;

  //最近15天评价数据 图表区域 配置
  Last15DaysAssessmentTaskOptions;

  //用户登录次数统计区域 参数配置
  userLoginCount: any = { rows: [], columns: [], status: "before", message: "" };

  //加氢任务区域配置
  jqTask: any = {
    rows: [],
    columns: [
      { title: '任务ID', name: 'identity', className: ['w80'] },
      { title: '任务名称', name: 'name', className: [''] },
      { title: '任务类型', name: 'tasktype', className: ['text-success', ''] },
      { title: '进度', name: 'process', className: ['text-warning', 'w80'] }
    ],
    config: {
      paging: true,
      filtering: { filterString: '' },
      className: ['table-striped', 'table-bordered']
    },
    status: "before",
    message: ""
  };

  //构造
  constructor( @Inject('HomeService') private service: HomeService) {
    this.service.getJqTask().subscribe(res => this.setJQTASK(res));
    this.service.getUserLoginCount().subscribe(res => this.setUserLoginCount(res));
    this.service.getLast15DaysAnalysisTask().subscribe(res => this.setLast15DaysAnalysisTask(res));
    this.service.getLast15DaysAssessmentTask().subscribe(res => this.setLast15DaysAssessmentTask(res));
  }

  ngOnInit() {

  }

  //设置最近15天分析任务数据
  setLast15DaysAnalysisTask(res: any) {
    this.Last15DaysAnalysisTaskOptinos = res;
  }

  //设置最近15天评价任务数据
  setLast15DaysAssessmentTask(res: any) {
    this.Last15DaysAssessmentTaskOptions = res;
  }

  //设置用户统计区域数据
  setUserLoginCount(res: ResponseEntity) {
    if (!res.success) {
      this.userLoginCount = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
      var columns = [
        { "field": "IDENTITY", "title": "编号" },
        { "field": "NAME" },
        { "field": "TOTAL" }
      ];
      this.userLoginCount = Object.assign(this.userLoginCount, { status: "success", rows: res.data, columns: columns });
    }
    else {
      this.userLoginCount = { status: "message", message: "无数据展示" };
    }
  }

  //设置加氢任务数据
  setJQTASK(res: ResponseEntity) {
    if (!res.success) {
      this.jqTask = { status: "message", message: res.message };
    }
    if (res.data.length > 0) {
      this.jqTask = Object.assign(this.jqTask, { status: "success", rows: res.data });
      //console.log(this.jqTask)
    }
    else {
      this.jqTask = { status: "message", message: "无数据展示" };
    }
  }

}
