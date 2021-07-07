import {
  DataQueryRequest,
  DataQueryResponse,
  DataSourceApi,
  DataSourceInstanceSettings,
} from "@grafana/data";

import { MyQuery, MyDataSourceOptions } from "./types";

export class DataSource extends DataSourceApi<MyQuery, MyDataSourceOptions> {
  constructor(
    instanceSettings: DataSourceInstanceSettings<MyDataSourceOptions>
  ) {
    super(instanceSettings);
  }

  async query(options: DataQueryRequest<MyQuery>): Promise<DataQueryResponse> {
    console.info("executing query for service data source...");
    return {
      data: ["service1-api", "service2-api", "service3-api"],
    };
  }

  async testDatasource() {
    // Implement a health check for your data source.
    return {
      status: "success",
      message: "Success",
    };
  }
}
