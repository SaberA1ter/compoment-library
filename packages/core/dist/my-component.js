import { computed as u, defineComponent as c, openBlock as i, createElementBlock as m, normalizeClass as p, unref as a, renderSlot as f } from "vue";
const d = "mc", y = "Mc", _ = (e) => u(() => {
  const t = `${d}-${e}`;
  return {
    defaultName: t,
    types: {
      isPrimary: `${t}-primary`,
      isDefault: `${t}`
    }
  };
}), k = c({
  name: `${y}Button`
}), n = /* @__PURE__ */ c({
  ...k,
  props: {
    type: null
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = e, s = _("button"), l = (o) => {
      t("click", o);
    };
    return (o, x) => (i(), m("button", {
      class: p([a(s).defaultName, {
        [a(s).types.isPrimary]: r.type === "primary",
        [a(s).types.isDefault]: r.type !== "primary"
      }]),
      onClick: l
    }, [
      f(o.$slots, "default")
    ], 2));
  }
});
n.install = (e) => {
  e.component(n.name, n);
};
const $ = (e) => {
  e.use(n);
}, P = (e) => {
  e.use($);
};
export {
  n as Button,
  P as default
};
