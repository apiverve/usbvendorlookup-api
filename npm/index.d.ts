declare module '@apiverve/usbvendorlookup' {
  export interface usbvendorlookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface usbvendorlookupResponse {
    status: string;
    error: string | null;
    data: USBVendorLookupData;
    code?: number;
  }


  interface USBVendorLookupData {
      vendorID:  string;
      productID: string;
      found:     boolean;
      vendor:    string;
      product:   string;
  }

  export default class usbvendorlookupWrapper {
    constructor(options: usbvendorlookupOptions);

    execute(callback: (error: any, data: usbvendorlookupResponse | null) => void): Promise<usbvendorlookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: usbvendorlookupResponse | null) => void): Promise<usbvendorlookupResponse>;
    execute(query?: Record<string, any>): Promise<usbvendorlookupResponse>;
  }
}
