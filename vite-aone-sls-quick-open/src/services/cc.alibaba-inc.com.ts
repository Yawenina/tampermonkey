import { BRADGE_REQUEST } from "@/bradge";

export function createCCService(
  request: ReturnType<typeof BRADGE_REQUEST.createRequest>
) {
  return {
    // @ts-ignore
    async getMyManaged(appName = document.title.replace("概述", "").trim()) {
      const { data = [] } = await request({
        url: "https://cc.alibaba-inc.com/apis/v2/resourcebaseline/resource/list",
        method: "POST",
        data: {
          conditions: [
            {},
            {
              fieldIdentifier: "own_app",
              name: "归属应用",
              description: "归属应用",
              type: "AoneApp",
              format: "multiList",
              className: "string",
              defaultValue: null,
              options: null,
              position: 12,
              dependencyFieldIdentifier: null,
              required: false,
              value: [
                {
                  label: appName,
                  value: appName,
                },
              ],
            },
            {
              fieldIdentifier: "resource_type",
              value: [
                {
                  label: "ALIYUN_SLS_LOGSTORE",
                  value: "ALIYUN_SLS_LOGSTORE",
                },
              ],
            },
          ],
          pageIndex: 1,
          pageSize: 200,
          viewIdentifier: "public_my_managed",
        },
      });
      return data;
    },
    async getAliyunPath({ resourceLocation }) {
      const { data } = await request({
        url: `https://cc.alibaba-inc.com/apis/v2/resourcebaseline/resourceurl/default/${resourceLocation}?resourceName=${resourceLocation}&resourceGroupName=default`,
      });
      return data;
    },
  };
}
