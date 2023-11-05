* less-loader配置，在处理less文件需要exclude *.module.less的文件，否则出现报错：
```
import API from "!../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js";
                    ^
Unrecognised input
```

* 在同构样式时服务端只需要生成hash类名，不需要配置 MiniCssExtractPlugin，客户端负责打包抽离css即可，服务端只负责引入样式文件。