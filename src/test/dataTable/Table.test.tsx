import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import Table from "../../dataTable/Table";
import DataTableTestData from '../DataTableTestData';

window.IntersectionObserver = jest.fn().mockImplementation(() => {
    return {observe: () => void {}};
});
let container: HTMLDivElement | null;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container!);
  container = null;
});

test("renders table", () => {
    const columns = DataTableTestData.Columns;
    const rows = DataTableTestData.Rows;
    act(() => {
        ReactDOM.createRoot(container!).render(<Table rows={rows} columns={columns} selectable={false} loading={false} />)
    });

    const mainDiv = container?.querySelector("div");
    expect(mainDiv).toBeDefined();
});

test("renders headers", () => {
    const columns = DataTableTestData.Columns;
    const rows = DataTableTestData.Rows;
    act(() => {
        ReactDOM.createRoot(container!).render(<Table rows={rows} columns={columns} selectable={false} loading={false} />)
    });

    const header = container?.querySelector("thead");
    expect(header).toBeDefined();
    const trs = header?.querySelector("tr");
    expect(trs).toBeDefined();
    const ths = trs?.querySelectorAll("th");
    expect(ths?.length).toEqual(columns.length);
});

test("Width can be set for specified column", () => {
    const columns = DataTableTestData.Columns;
    columns[0].width = "5px";
    const rows = DataTableTestData.Rows;
    act(() => {
        ReactDOM.createRoot(container!).render(<Table rows={rows} columns={columns} selectable={false} loading={false} />)
    });

    const header = container?.querySelector("thead");
    const trs = header?.querySelector("tr");
    const ths = trs?.querySelectorAll("th");
    expect(ths?.[0]?.style.width).toBe("5px");
});

test("Numeric fields are right aligned", () => {
    const columns = DataTableTestData.Columns;
    columns[0].numeric = true;
    const rows = DataTableTestData.Rows;
    act(() => {
        ReactDOM.createRoot(container!).render(<Table rows={rows} columns={columns} selectable={false} loading={false} />)
    });

    const trs = container?.querySelectorAll("tr");
    const tds = trs?.[2]?.querySelectorAll("td");
    expect(tds?.[0].className).toBe("cell-right-aligned");
});

test("renders selectAll checkbox for selectable table", () => {
    const columns = DataTableTestData.Columns;
    const rows = DataTableTestData.Rows;
    act(() => {
        ReactDOM.createRoot(container!).render(<Table rows={rows} columns={columns} selectable={true} loading={false} />)
    });

    const header = container?.querySelector("thead");
    expect(header).toBeDefined();
    const trs = header?.querySelector("tr");
    expect(trs).toBeDefined();
    const ths = trs?.querySelectorAll("th");
    expect(ths?.length).toEqual(columns.length + 1);
});

test("renders all rows", () => {
    const columns = DataTableTestData.Columns;
    const rows = DataTableTestData.Rows;
    act(() => {
        ReactDOM.createRoot(container!).render(<Table rows={rows} columns={columns} selectable={false} loading={false} />)
    });

    const trs = container?.querySelectorAll("tr");
    expect(trs?.length).toEqual(rows.length + 1);
});

test("onRowClick works for clicked row with right arguments", () => {
    const columns = DataTableTestData.Columns;
    const rows = DataTableTestData.Rows;
    const onRowClick = jest.fn();
    act(() => {
        ReactDOM.createRoot(container!).render(<Table onRowClick={onRowClick} rows={rows} columns={columns} selectable={false} loading={false} />)
    });

    const trs = container?.querySelectorAll("tr");
    trs?.[2].click();

    expect(onRowClick.mock.calls.length).toEqual(1);
    expect(onRowClick.mock.calls[0][0]).toBe(rows[1]);
    expect(onRowClick.mock.calls[0][1]).toBe(1);
});
