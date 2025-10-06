document.addEventListener("DOMContentLoaded", () => {
  let e,
    t,
    s = !1;
  new GraphModal();
  const n = document.querySelector(".container"),
    c = document.querySelector("#small"),
    o = document.querySelector("#middle"),
    a = document.querySelector("#big"),
    l = document.querySelector(".timer"),
    i = document.querySelector(".restart"),
    d = document.querySelector(".restart__icon"),
    r = document.querySelector(".modal");
  r.addEventListener("click", (e) => {
    e.target === r &&
      (u(), m(), r.classList.remove("lose"), r.classList.remove("win"));
  }),
    c.addEventListener("click", (e) => {
      (t = 8), f(t);
    }),
    o.addEventListener("click", (e) => {
      (t = 10), f(t);
    }),
    a.addEventListener("click", (e) => {
      (t = 12), f(t);
    }),
    i.addEventListener("click", (e) => {
      n.querySelector(".checked") &&
        (u(),
        d.classList.add("_rotated"),
        r.classList.remove("lose"),
        r.classList.remove("win"),
        m(),
        f(t),
        setTimeout(() => {
          d.classList.remove("_rotated");
        }, 500));
    });
  const m = () => {
      s = !1;
      const e = document.querySelector(".field"),
        t = document.querySelector("#result");
      for (; e.firstChild; ) e.firstChild.remove();
      (t.style.opacity = "0"), n.style.setProperty("--size", null);
    },
    u = () => {
      l.classList.remove("_active"), l.classList.remove("_paused");
    },
    L = () => l.classList.add("_paused"),
    y = (e) => (e < 10 ? "0" + e : e),
    f = (t) => {
      const c = document.querySelector(".field"),
        o = document.querySelector("#flags"),
        a = document.querySelector("#result");
      n.style.setProperty("--size", 40 * t + 20 + "px");
      let i = 0,
        d = [],
        f = !1;
      switch (t) {
        case 8:
          e = 10;
          break;
        case 10:
          e = 20;
          break;
        case 12:
          e = 30;
          break;
      }
      (() => {
        o.textContent = e;
        const n = Array(t * t).fill("valid");
        for (let e = 0, o = t * t; e < o; e++) {
          const t = document.createElement("li");
          t.setAttribute("id", e),
            t.classList.add("field__square"),
            t.classList.add(n[e]),
            c.appendChild(t),
            d.push(t),
            t.addEventListener("click", (e) => {
              if (!s) {
                let e = h(t);
                for (const t of e) {
                  document.getElementById(`${t}`).classList.add("bomb");
                }
                a();
              }
              g(t);
            }),
            (t.oncontextmenu = (e) => {
              e.preventDefault(), b(t);
            });
        }
        const a = () => {
          for (let e = 0, s = d.length; e < s; e++) {
            let s = 0;
            const n = e % t == 0,
              c = e % t == t - 1;
            d[e].classList.contains("valid") &&
              (e > 0 && !n && d[e - 1].classList.contains("bomb") && s++,
              e > t - 1 && !c && d[e + 1 - t].classList.contains("bomb") && s++,
              e > t && d[e - t].classList.contains("bomb") && s++,
              e > t + 1 && !n && d[e - 1 - t].classList.contains("bomb") && s++,
              e < t * t - 2 && !c && d[e + 1].classList.contains("bomb") && s++,
              e < t * t - t &&
                !n &&
                d[e - 1 + t].classList.contains("bomb") &&
                s++,
              e < t * t - t - 2 &&
                !c &&
                d[e + 1 + t].classList.contains("bomb") &&
                s++,
              e < t * t - t - 3 && d[e + t].classList.contains("bomb") && s++,
              (d[e].dataset.total = s));
          }
          s = !0;
        };
      })();
      const b = (t) => {
          f ||
            (!t.classList.contains("checked") &&
              i < e &&
              (t.classList.contains("flag")
                ? (t.classList.remove("flag"),
                  (t.textContent = ""),
                  i--,
                  (o.textContent = e - i))
                : (t.classList.add("flag"),
                  (t.innerHTML = "🚩"),
                  i++,
                  (o.textContent = e - i),
                  I())));
        },
        g = (e) => {
          l.classList.contains("_active") ||
            (() => {
              l.classList.add("_active");
              const e = document.querySelector("#min"),
                t = document.querySelector("#sec");
              let s = 0,
                n = 1,
                c = 0,
                o = 0;
              setInterval(() => {
                l.classList.contains("_active")
                  ? l.classList.contains("_paused")
                    ? c < 60
                      ? c++
                      : ((c -= 60), o++)
                    : (n < 60
                        ? (t.textContent = y(n + c))
                        : ((n -= 60),
                          s++,
                          (t.textContent = y(n + c)),
                          (e.textContent = y(s + o))),
                      n++)
                  : ((s = 0),
                    (n = 0),
                    (c = 0),
                    (o = 0),
                    "00" == !t.textContent &&
                      "00" == !e.textContent &&
                      ((t.textContent = "00"), (e.textContent = "00")));
              }, 1e3);
            })();
          let t = e.id;
          if (
            !f &&
            !e.classList.contains("checked") &&
            !e.classList.contains("flag")
          ) {
            if (e.classList.contains("bomb")) k(e);
            else {
              let s = e.dataset.total;
              if (0 != s)
                return (
                  e.classList.add("checked"),
                  1 == s && e.classList.add("one"),
                  2 == s && e.classList.add("two"),
                  3 == s && e.classList.add("three"),
                  4 == s && e.classList.add("four"),
                  void (e.innerHTML = s)
                );
              p(e, t);
            }
            e.classList.add("checked");
          }
        },
        v = (e, t, s) => {
          let n = Math.floor(Math.random() * (t - e + 1)) + e;
          return n === s ? v(e, t) : n;
        },
        h = (s) => {
          let n = new Set(),
            c = parseInt(s.id);
          for (; n.size < e; ) n.add(v(0, t * t - 1, c));
          return n;
        },
        p = (e, s) => {
          const n = s % t == 0,
            c = s % t == t - 1;
          setTimeout(() => {
            if (s > 0 && !n) {
              const e = d[parseInt(s) - 1].id,
                t = document.getElementById(e);
              g(t);
            }
            if (s > t - 1 && !c) {
              const e = d[parseInt(s) + 1 - t].id,
                n = document.getElementById(e);
              g(n);
            }
            if (s > t) {
              const e = d[parseInt(s) - t].id,
                n = document.getElementById(e);
              g(n);
            }
            if (s > t + 1 && !n) {
              const e = d[parseInt(s) - 1 - t].id,
                n = document.getElementById(e);
              g(n);
            }
            if (s < d.lentgth - 1 && !c) {
              const e = d[parseInt(s) + 1].id,
                t = document.getElementById(e);
              g(t);
            }
            if (s < d.lentgth - t && !n) {
              const e = d[parseInt(s) - 1 + t].id,
                n = document.getElementById(e);
              g(n);
            }
            if (s < d.lentgth - t - 2 && !c) {
              const e = d[parseInt(s) + 1 + t].id,
                n = document.getElementById(e);
              g(n);
            }
            if (s < d.lentgth - t - 1) {
              const e = d[parseInt(s) + t].id,
                n = document.getElementById(e);
              g(n);
            }
          }, 20);
        },
        k = (e) => {
          r.classList.add("lose"),
            (a.style.color = "red"),
            (a.innerHTML = "BOOM!"),
            (a.style.opacity = "1"),
            (f = !0),
            L(),
            d.forEach((e) => {
              e.classList.contains("bomb") &&
                ((e.innerHTML = "💣"),
                e.classList.remove("bomb"),
                e.classList.add("checked"));
            });
        },
        I = () => {
          let t = 0;
          for (let s = 0, n = d.length; s < n; s++)
            d[s].classList.contains("flag") &&
              d[s].classList.contains("bomb") &&
              t++,
              t === e &&
                (r.classList.add("win"),
                (a.style.color = "green"),
                (a.innerHTML = "คุณเป็นผู้ชนะ!"),
                (a.style.opacity = "1"),
                (f = !0));
          L();
        };
      document.onkeydown = (e) => (
        (e = e || window.event).shiftKey &&
          65 == e.keyCode &&
          (() => {
            const e = document.querySelectorAll(".bomb");
            for (let t = 0, s = e.length; t < s; t++)
              e[t].classList.toggle("_opened");
          })(),
        e.shiftKey && 80 == e.keyCode && l.classList.toggle("_paused"),
        27 == e.keyCode &&
          (u(), m(), r.classList.remove("lose"), r.classList.remove("win")),
        !0
      );
    };
});
