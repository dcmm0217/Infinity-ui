import { defineComponent as s, ref as i, openBlock as c, createElementBlock as d, normalizeClass as p, normalizeStyle as n, createElementVNode as l, renderSlot as f } from "vue";
const y = s({ name: "in-button" }), b = /* @__PURE__ */ s({
  ...y,
  props: {
    type: {
      type: String,
      default: "primary"
    },
    shape: {
      //按钮形状round/圆角、circle/圆、square/正方形
      type: String,
      default: ""
    },
    status: {
      //按钮状态normal/success/warning/danger/primary
      type: String,
      default: "normal"
    },
    size: {
      //ss/s/m/l
      type: String,
      default: "m"
    },
    long: {
      type: Boolean,
      default: !1
    },
    loading: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean
    }
  },
  setup(e) {
    const r = e, a = i(["", ""]), u = (t) => {
      switch (t) {
        case "round":
          return ["200px", "auto"];
        case "circle":
          return ["200px", "0"];
        case "square":
          return ["auto", "0"];
        default:
          return ["auto", "auto"];
      }
    }, o = (t) => {
      switch (t) {
        case "primary":
          return "pcolor";
        case "success":
          return "success";
        case "warning":
          return "warning";
        case "danger":
          return "danger";
        default:
          return r.type == "primary" ? "pcolor" : "fcolor";
      }
    };
    return a.value = u(r.shape), (t, g) => (c(), d("div", {
      class: p(["in-button", [e.type, e.size, o(e.status), { disabled: e.disabled }, { loading: e.loading }]]),
      style: n({ width: e.long ? "100%" : "auto" })
    }, [
      l("div", {
        class: "in-button-bg",
        style: n({ borderRadius: a.value[0] })
      }, null, 4),
      l("p", {
        class: "in-buton-name",
        style: n({ padding: a.value[1] })
      }, [
        f(t.$slots, "default", {}, void 0, !0)
      ], 4)
    ], 6));
  }
});
export {
  b as default
};
