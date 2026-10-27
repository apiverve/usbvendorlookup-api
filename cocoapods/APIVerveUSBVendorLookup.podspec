Pod::Spec.new do |s|
  s.name             = 'APIVerveUSBVendorLookup'
  s.version          = '1.2.3'
  s.summary          = 'USB Vendor Lookup allows you to identify USB device manufacturers and products by their vendor ID and product ID.'
  s.description      = <<-'DESC'
USB Vendor Lookup allows you to identify USB device manufacturers and products by their vendor ID and product ID. It uses the Linux USB ID Repository, which contains thousands of USB vendor and product identifiers.

This iOS/macOS SDK provides a convenient way to access the USB Vendor Lookup from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/usbvendorlookup?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/usbvendorlookup-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveUSBVendorLookup/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
