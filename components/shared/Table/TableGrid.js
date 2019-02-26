import React from 'react';

const TableGrid = (props) => {
  return (
    <div className="table-wrap mt-5 table-responsive ">
      <table className="table table-bordered data-table-grid" summary="">
        <thead>
          <tr>
            <th scope="col">活動</th> {/* Used to be: 種類*/}
            <th scope="col">課程說明</th>
            <th scope="col">對象</th>
            <th scope="col">執行日</th>
            <th scope="col">申請時間</th>
          </tr>
        </thead>
        <tbody>
          {props.rowsData ? (
            props.rowsData.map((rowData) => (
              <tr key={rowData.ID}>
                <th className="date" scope="row">
                  <a href="">{rowData.Title1}</a>
                </th>
                <td>{rowData.Title2}</td>
                <td>{rowData.Title3}</td>
                <td>{rowData.Title4}</td>
                <td>{rowData.Title5}</td>
              </tr>
            ))
          ) : (
            <tr>
              <th className="date" scope="row">
                <a href="">Loading...</a>
              </th>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
              <td>Loading...</td>
            </tr>
          )}

          {/* 
          Use as an Example 
          <tr>
            <th className="date" scope="row">
              <a href="/environment-edu/outdoor-teaching">戶外教學</a>
            </th>
            <td>多樣化的戶外教學課程</td>
            <td>國中、小學生以班級為單位提出申請 (以40人為上限)</td>
            <td>週一~週五</td>
            <td>需於執行日 30日前申請 </td>
          </tr>
          <tr>
            <th className="date" scope="row">
              <a href="/environment-edu/themed-activities">主題活動</a>
            </th>
            <td />
            <td />
            <td />
            <td />
          </tr>
          <tr>
            <th className="date" scope="row">
              <a href="/environment-edu/school-promotion">到校推廣</a>
            </th>
            <td>多樣化的戶外教學課程 到校進行壽山的 環境教育推廣</td>
            <td>國中、小學教師</td>
            <td>學期間週三</td>
            <td> 需於執行日 30日前申請</td>
          </tr>
          <tr>
            <th className="date" scope="row">
              <a href="/environment-edu/professional-studies">專業研習</a>
            </th>
            <td>各類主題之專業成長研習</td>
            <td>政府機關、團體、學校教師 (以35人為上限)</td>
            <td>學期間週三 或週六、日</td>
            <td>個人研習： 依活動簡章公告 團體申請： 執行日30日前申請</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default TableGrid;
