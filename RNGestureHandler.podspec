require "json"

new_arch_enabled = ENV['RCT_NEW_ARCH_ENABLED'] == '1'
apple_platform = new_arch_enabled ? '11.0' : '9.0'

Pod::Spec.new do |s|
  # NPM package specification
  package = JSON.parse(File.read(File.join(File.dirname(__FILE__), "package.json")))

  s.name         = "RNGestureHandler"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = "https://github.com/software-mansion/react-native-gesture-handler"
  s.license      = "MIT"
  s.author       = { package["author"]["name"] => package["author"]["email"] }
  s.source       = { :git => "https://github.com/software-mansion/react-native-gesture-handler", :tag => "#{s.version}" }
  if new_arch_enabled
    s.source_files = ["apple/**/*.{h,m,mm}", "common/cpp/**/*.{cpp,h}"]
  else
    s.source_files = ["apple/**/*.{h,m,mm}"]
  end
  s.requires_arc = true
  s.platforms       = { ios: apple_platform, tvos: apple_platform, osx: '10.15' }

  if defined?(install_modules_dependencies()) != nil
    install_modules_dependencies(s);
  else
    if new_arch_enabled
      folly_compiler_flags = '-DFOLLY_NO_CONFIG -DFOLLY_MOBILE=1 -DFOLLY_USE_LIBCPP=1 -Wno-comma -Wno-shorten-64-to-32'
  
      s.pod_target_xcconfig = {
        'HEADER_SEARCH_PATHS' => '"$(PODS_ROOT)/boost" "$(PODS_ROOT)/boost-for-react-native" "$(PODS_ROOT)/RCT-Folly"',
        'CLANG_CXX_LANGUAGE_STANDARD' => 'c++17',
      }
      s.compiler_flags  = folly_compiler_flags + ' -DRCT_NEW_ARCH_ENABLED'
  
      s.dependency "React"
      s.dependency "React-RCTFabric" # This is for fabric component
      s.dependency "React-Codegen"
      s.dependency "RCT-Folly"
      s.dependency "RCTRequired"
      s.dependency "RCTTypeSafety"
      s.dependency "ReactCommon/turbomodule/core"
    else
      s.dependency "React-Core"
    end
  end
end
