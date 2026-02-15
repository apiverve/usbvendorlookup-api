using System;
using System.Collections.Generic;
using System.Text;
using Newtonsoft.Json;

namespace APIVerve.API.USBVendorLookup
{
    /// <summary>
    /// Query options for the USB Vendor Lookup API
    /// </summary>
    public class USBVendorLookupQueryOptions
    {
        /// <summary>
        /// The USB vendor ID in 4-digit hex format (e.g., 05AC for Apple)
        /// </summary>
        [JsonProperty("vendorid")]
        public string Vendorid { get; set; }

        /// <summary>
        /// The USB product ID in 4-digit hex format (optional)
        /// </summary>
        [JsonProperty("productid")]
        public string Productid { get; set; }
    }
}
