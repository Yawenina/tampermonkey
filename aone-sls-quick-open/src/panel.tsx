import { SLSBtn } from "./components/sls";

export function Panel() {
  return (
    <div class="panel panel-default box clearfix">
      <div class="panel-heading no-bordered">
        <h3 class="panel-title ">
          <b> 😎 油猴快捷工具 </b>
        </h3>
      </div>
      <div class="panel-body panel-body-wrap">
        <table class="table table-vstriped info-table" id="dev-info-form">
          <tbody>
            <tr>
              <td style="width:15%">SLS日志</td>
              <td class="code-url-td">
                <SLSBtn />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
