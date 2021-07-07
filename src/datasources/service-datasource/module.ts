import { DataSourcePlugin } from '@grafana/data';
import { DataSource } from './datasource';
import { MyQuery, MyDataSourceOptions } from './types';
import { ConfigEditor } from './ConfigEditor';
import { QueryEditor } from './QueryEditor';

export const plugin = new DataSourcePlugin<DataSource, MyQuery, MyDataSourceOptions>(DataSource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(QueryEditor);
