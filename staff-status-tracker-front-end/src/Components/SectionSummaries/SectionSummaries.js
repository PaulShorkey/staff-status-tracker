import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';

export default function SectionSummaries() {
  return (
    <div style={{ height: 250, width: '100%' }}>
      <DataGrid
        columns={[{ field: 'shop' }, { field: 'color' }, {field: 'blurb'}]}
        rows={[
          {
            id: 1,
            username: '@MaterialUI',
            age: 20,
          },
        ]}
        rows={[
          {
            id: 2,
            username: '@MaterialUI',
            age: 20,
          },
        ]}
        rows={[
          {
            id: 3,
            username: '@MaterialUI',
            age: 20,
          },
        ]}
      />
    </div>
  );
}