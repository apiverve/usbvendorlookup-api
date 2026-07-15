declare module '@apiverve/usbvendorlookup' {
  export interface usbvendorlookupOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface usbvendorlookupResponse {
    status: string;
    error: string | null;
    data: USBVendorLookupData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface USBVendorLookupData {
      vendorID:  null | string;
      productID: null | string;
      found:     boolean | null;
      vendor:    null | string;
      product:   null | string;
  }

  export default class usbvendorlookupWrapper {
    constructor(options: usbvendorlookupOptions);

    execute(callback: (error: any, data: usbvendorlookupResponse | null) => void): Promise<usbvendorlookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: usbvendorlookupResponse | null) => void): Promise<usbvendorlookupResponse>;
    execute(query?: Record<string, any>): Promise<usbvendorlookupResponse>;
  }
}
