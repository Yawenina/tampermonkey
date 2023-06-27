import { SLSBtn } from './components/sls';

import 'uno.css';

export function Panel() {
  return (
    <div class="flex  border-b-solid border-b border-#EDEDED">
      <div class="w-97px bg-#fafafa flex justify-center items-center font-bold ">SLS日志</div>
      <td class="flex-1 py-5 px-3">
        <SLSBtn />
      </td>
    </div>
  );
}
