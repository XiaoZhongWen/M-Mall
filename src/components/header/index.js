/*
 * @Author: 肖仲文 xiaozhongwen@mye.hk
 * @Date: 2023-03-31 15:03:15
 * @LastEditors: 肖仲文 xiaozhongwen@mye.hk
 * @LastEditTime: 2023-03-31 15:58:18
 * @FilePath: /M-Mall/src/components/header/index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./header.css";

const CHANGE_CLASS_NAME = "header-transition";
const INIT_STATE = "init";
const CHANGE_STATE = "change";

class Header {
  constructor(el, critical_point, scrollContainer, eventEl = scrollContainer) {
    this.el = el;
    this.critical_point = critical_point;
    this.scrollContainer = scrollContainer;
    this.eventEl = eventEl;
    this.state = INIT_STATE;

    this.bindEvent();
  }

  bindEvent() {
    this.eventEl.addEventListener(
      "scroll",
      () => {
        if (
          this.state !== CHANGE_STATE &&
          this.scrollContainer.scrollTop > this.critical_point
        ) {
          this.state = CHANGE_STATE;
          this.el.classList.add(CHANGE_CLASS_NAME);
        } else if (
          this.state !== INIT_STATE &&
          this.scrollContainer.scrollTop <= this.critical_point
        ) {
          this.state = INIT_STATE;
          this.el.classList.remove(CHANGE_CLASS_NAME);
        }
      },
      false
    );
  }
}

export default Header;
