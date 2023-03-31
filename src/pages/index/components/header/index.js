/*
 * @Author: 肖仲文 xiaozhongwen@mye.hk
 * @Date: 2023-03-31 15:04:36
 * @LastEditors: 肖仲文 xiaozhongwen@mye.hk
 * @LastEditTime: 2023-03-31 16:13:15
 * @FilePath: /M-Mall/src/pages/index/components/header/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Header from "components/header";
import "components/searchbox";

const scrollContainer = document.getElementById("index-page");
const headerEl = scrollContainer.querySelector(".header");

new Header(headerEl, 0, scrollContainer);
