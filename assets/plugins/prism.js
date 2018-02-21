var _self = typeof window != "undefined" ? window : typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope ? self : {}, Prism = function () {
    var e = /\blang(?:uage)?-(\w+)\b/i, t = 0, n = _self.Prism = {
        util: {
            encode: function (e) {
                return e instanceof r ? new r(e.type, n.util.encode(e.content), e.alias) : n.util.type(e) === "Array" ? e.map(n.util.encode) : e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
            }, type: function (e) {
                return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]
            }, objId: function (e) {
                return e.__id || Object.defineProperty(e, "__id", {value: ++t}), e.__id
            }, clone: function (e) {
                var t = n.util.type(e);
                switch (t) {
                    case"Object":
                        var r = {};
                        for (var i in e)e.hasOwnProperty(i) && (r[i] = n.util.clone(e[i]));
                        return r;
                    case"Array":
                        return e.map && e.map(function (e) {
                                return n.util.clone(e)
                            })
                }
                return e
            }
        }, languages: {
            extend: function (e, t) {
                var r = n.util.clone(n.languages[e]);
                for (var i in t)r[i] = t[i];
                return r
            }, insertBefore: function (e, t, r, i) {
                i = i || n.languages;
                var s = i[e];
                if (arguments.length == 2) {
                    r = arguments[1];
                    for (var o in r)r.hasOwnProperty(o) && (s[o] = r[o]);
                    return s
                }
                var u = {};
                for (var a in s)if (s.hasOwnProperty(a)) {
                    if (a == t)for (var o in r)r.hasOwnProperty(o) && (u[o] = r[o]);
                    u[a] = s[a]
                }
                return n.languages.DFS(n.languages, function (t, n) {
                    n === i[e] && t != e && (this[t] = u)
                }), i[e] = u
            }, DFS: function (e, t, r, i) {
                i = i || {};
                for (var s in e)e.hasOwnProperty(s) && (t.call(e, s, e[s], r || s), n.util.type(e[s]) === "Object" && !i[n.util.objId(e[s])] ? (i[n.util.objId(e[s])] = !0, n.languages.DFS(e[s], t, null, i)) : n.util.type(e[s]) === "Array" && !i[n.util.objId(e[s])] && (i[n.util.objId(e[s])] = !0, n.languages.DFS(e[s], t, s, i)))
            }
        }, plugins: {}, highlightAll: function (e, t) {
            var r = {
                callback: t,
                selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
            };
            n.hooks.run("before-highlightall", r);
            var i = r.elements || document.querySelectorAll(r.selector);
            for (var s = 0, o; o = i[s++];)n.highlightElement(o, e === !0, r.callback)
        }, highlightElement: function (t, r, i) {
            var s, o, u = t;
            while (u && !e.test(u.className))u = u.parentNode;
            u && (s = (u.className.match(e) || [, ""])[1], o = n.languages[s]), t.className = t.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s, u = t.parentNode, /pre/i.test(u.nodeName) && (u.className = u.className.replace(e, "").replace(/\s+/g, " ") + " language-" + s);
            var a = t.textContent, f = {element: t, language: s, grammar: o, code: a};
            n.hooks.run("before-sanity-check", f);
            if (!f.code || !f.grammar) {
                n.hooks.run("complete", f);
                return
            }
            n.hooks.run("before-highlight", f);
            if (r && _self.Worker) {
                var l = new Worker(n.filename);
                l.onmessage = function (e) {
                    f.highlightedCode = e.data, n.hooks.run("before-insert", f), f.element.innerHTML = f.highlightedCode, i && i.call(f.element), n.hooks.run("after-highlight", f), n.hooks.run("complete", f)
                }, l.postMessage(JSON.stringify({language: f.language, code: f.code, immediateClose: !0}))
            } else f.highlightedCode = n.highlight(f.code, f.grammar, f.language), n.hooks.run("before-insert", f), f.element.innerHTML = f.highlightedCode, i && i.call(t), n.hooks.run("after-highlight", f), n.hooks.run("complete", f)
        }, highlight: function (e, t, i) {
            var s = n.tokenize(e, t);
            return r.stringify(n.util.encode(s), i)
        }, tokenize: function (e, t, r) {
            var i = n.Token, s = [e], o = t.rest;
            if (o) {
                for (var u in o)t[u] = o[u];
                delete t.rest
            }
            e:for (var u in t) {
                if (!t.hasOwnProperty(u) || !t[u])continue;
                var a = t[u];
                a = n.util.type(a) === "Array" ? a : [a];
                for (var f = 0; f < a.length; ++f) {
                    var l = a[f], c = l.inside, h = !!l.lookbehind, p = !!l.greedy, d = 0, v = l.alias;
                    l = l.pattern || l;
                    for (var m = 0; m < s.length; m++) {
                        var g = s[m];
                        if (s.length > e.length)break e;
                        if (g instanceof i)continue;
                        l.lastIndex = 0;
                        var y = l.exec(g), b = 1;
                        if (!y && p && m != s.length - 1) {
                            var w = s[m + 1].matchedStr || s[m + 1], E = g + w;
                            m < s.length - 2 && (E += s[m + 2].matchedStr || s[m + 2]), l.lastIndex = 0, y = l.exec(E);
                            if (!y)continue;
                            var S = y.index + (h ? y[1].length : 0);
                            if (S >= g.length)continue;
                            var x = y.index + y[0].length, T = g.length + w.length;
                            b = 3;
                            if (x <= T) {
                                if (s[m + 1].greedy)continue;
                                b = 2, E = E.slice(0, T)
                            }
                            g = E
                        }
                        if (!y)continue;
                        h && (d = y[1].length);
                        var S = y.index + d, y = y[0].slice(d), x = S + y.length, N = g.slice(0, S), C = g.slice(x), k = [m, b];
                        N && k.push(N);
                        var L = new i(u, c ? n.tokenize(y, c) : y, v, y, p);
                        k.push(L), C && k.push(C), Array.prototype.splice.apply(s, k)
                    }
                }
            }
            return s
        }, hooks: {
            all: {}, add: function (e, t) {
                var r = n.hooks.all;
                r[e] = r[e] || [], r[e].push(t)
            }, run: function (e, t) {
                var r = n.hooks.all[e];
                if (!r || !r.length)return;
                for (var i = 0, s; s = r[i++];)s(t)
            }
        }
    }, r = n.Token = function (e, t, n, r, i) {
        this.type = e, this.content = t, this.alias = n, this.matchedStr = r || null, this.greedy = !!i
    };
    r.stringify = function (e, t, i) {
        if (typeof e == "string")return e;
        if (n.util.type(e) === "Array")return e.map(function (n) {
            return r.stringify(n, t, e)
        }).join("");
        var s = {
            type: e.type,
            content: r.stringify(e.content, t, i),
            tag: "span",
            classes: ["token", e.type],
            attributes: {},
            language: t,
            parent: i
        };
        s.type == "comment" && (s.attributes.spellcheck = "true");
        if (e.alias) {
            var o = n.util.type(e.alias) === "Array" ? e.alias : [e.alias];
            Array.prototype.push.apply(s.classes, o)
        }
        n.hooks.run("wrap", s);
        var u = "";
        for (var a in s.attributes)u += (u ? " " : "") + a + '="' + (s.attributes[a] || "") + '"';
        return "<" + s.tag + ' class="' + s.classes.join(" ") + '" ' + u + ">" + s.content + "</" + s.tag + ">"
    };
    if (!_self.document)return _self.addEventListener ? (_self.addEventListener("message", function (e) {
        var t = JSON.parse(e.data), r = t.language, i = t.code, s = t.immediateClose;
        _self.postMessage(n.highlight(i, n.languages[r], r)), s && _self.close()
    }, !1), _self.Prism) : _self.Prism;
    var i = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    return i && (n.filename = i.src, document.addEventListener && !i.hasAttribute("data-manual") && document.addEventListener("DOMContentLoaded", n.highlightAll)), _self.Prism
}();
typeof module != "undefined" && module.exports && (module.exports = Prism), typeof global != "undefined" && (global.Prism = Prism), Prism.languages.markup = {
    comment: /<!--[\w\W]*?-->/,
    prolog: /<\?[\w\W]+?\?>/,
    doctype: /<!DOCTYPE[\w\W]+?>/,
    cdata: /<!\[CDATA\[[\w\W]*?]]>/i,
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
        inside: {
            tag: {pattern: /^<\/?[^\s>\/]+/i, inside: {punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/}},
            "attr-value": {pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i, inside: {punctuation: /[=>"']/}},
            punctuation: /\/?>/,
            "attr-name": {pattern: /[^\s>\/]+/, inside: {namespace: /^[^\s>\/:]+:/}}
        }
    },
    entity: /&#?[\da-z]{1,8};/i
}, Prism.languages.csv = {
    "first-line": {pattern: /^.+/, inside: {header: /[^,]+/, comment: /,/}},
    "quoted-field": {
        pattern: /(")(.+?"(?=[^"]))+/,
        inside: {property: /""|[^"]+/, comment: /(^")|("$)/},
        lookbehind: !0
    },
    comment: /[,"]/
}, Prism.hooks.add("wrap", function (e) {
    e.type === "entity" && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Prism.languages.xml = Prism.languages.markup, Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.css = {
    comment: /\/\*[\w\W]*?\*\//,
    atrule: {pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i, inside: {rule: /@[\w-]+/}},
    url: /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    selector: /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    string: /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    property: /(\b|\B)[\w-]+(?=\s*:)/i,
    important: /\B!important\b/i,
    "function": /[-a-z0-9]+(?=\()/i,
    punctuation: /[(){};:]/
}, Prism.languages.css.atrule.inside.rest = Prism.util.clone(Prism.languages.css), Prism.languages.markup && (Prism.languages.insertBefore("markup", "tag", {
    style: {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: !0,
        inside: Prism.languages.css,
        alias: "language-css"
    }
}), Prism.languages.insertBefore("inside", "attr-value", {
    "style-attr": {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
            "attr-name": {pattern: /^\s*style/i, inside: Prism.languages.markup.tag.inside},
            punctuation: /^\s*=\s*['"]|['"]\s*$/,
            "attr-value": {pattern: /.+/i, inside: Prism.languages.css}
        },
        alias: "language-css"
    }
}, Prism.languages.markup.tag)), Prism.languages.clike = {
    comment: [{
        pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
        lookbehind: !0
    }, {pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0}],
    string: {pattern: /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, greedy: !0},
    "class-name": {
        pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
        lookbehind: !0,
        inside: {punctuation: /(\.|\\)/}
    },
    keyword: /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    "boolean": /\b(true|false)\b/,
    "function": /[a-z0-9_]+(?=\()/i,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    operator: /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.javascript = Prism.languages.extend("clike", {
    keyword: /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    number: /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    "function": /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
}), Prism.languages.insertBefore("javascript", "keyword", {
    regex: {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: !0,
        greedy: !0
    }
}), Prism.languages.insertBefore("javascript", "class-name", {
    "template-string": {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\$\{[^}]+\}/,
                inside: {
                    "interpolation-punctuation": {pattern: /^\$\{|\}$/, alias: "punctuation"},
                    rest: Prism.languages.javascript
                }
            }, string: /[\s\S]+/
        }
    }
}), Prism.languages.markup && Prism.languages.insertBefore("markup", "tag", {
    script: {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: !0,
        inside: Prism.languages.javascript,
        alias: "language-javascript"
    }
}), Prism.languages.js = Prism.languages.javascript, function (e) {
    var t = {
        variable: [{
            pattern: /\$?\(\([\w\W]+?\)\)/,
            inside: {
                variable: [{pattern: /(^\$\(\([\w\W]+)\)\)/, lookbehind: !0}, /^\$\(\(/],
                number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
                operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                punctuation: /\(\(?|\)\)?|,|;/
            }
        }, {
            pattern: /\$\([^)]+\)|`[^`]+`/,
            inside: {variable: /^\$\(|^`|\)$|`$/}
        }, /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]
    };
    e.languages.bash = {
        shebang: {pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/, alias: "important"},
        comment: {pattern: /(^|[^"{\\])#.*/, lookbehind: !0},
        string: [{
            pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
            lookbehind: !0,
            greedy: !0,
            inside: t
        }, {pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g, greedy: !0, inside: t}],
        variable: t.variable,
        "function": {
            pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        keyword: {
            pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
            lookbehind: !0
        },
        "boolean": {pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/, lookbehind: !0},
        operator: /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
        punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
    };
    var n = t.variable[1].inside;
    n["function"] = e.languages.bash["function"], n.keyword = e.languages.bash.keyword, n.boolean = e.languages.bash.boolean, n.operator = e.languages.bash.operator, n.punctuation = e.languages.bash.punctuation
}(Prism), Prism.languages.c = Prism.languages.extend("clike", {
    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
    operator: /\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,
    number: /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i
}), Prism.languages.insertBefore("c", "string", {
    macro: {
        pattern: /(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,
        lookbehind: !0,
        alias: "property",
        inside: {
            string: {pattern: /(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/, lookbehind: !0},
            directive: {
                pattern: /(#\s*)\b(define|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
                lookbehind: !0,
                alias: "keyword"
            }
        }
    }, constant: /\b(__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|stdin|stdout|stderr)\b/
}), delete Prism.languages.c["class-name"], delete Prism.languages.c["boolean"], function (e) {
    e.languages.ruby = e.languages.extend("clike", {
        comment: /#(?!\{[^\r\n]*?\}).*/,
        keyword: /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/
    });
    var t = {
        pattern: /#\{[^}]+\}/,
        inside: {delimiter: {pattern: /^#\{|\}$/, alias: "tag"}, rest: e.util.clone(e.languages.ruby)}
    };
    e.languages.insertBefore("ruby", "keyword", {
        regex: [{
            pattern: /%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,
            inside: {interpolation: t}
        }, {
            pattern: /%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,
            inside: {interpolation: t}
        }, {
            pattern: /%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,
            inside: {interpolation: t}
        }, {
            pattern: /%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,
            inside: {interpolation: t}
        }, {
            pattern: /%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,
            inside: {interpolation: t}
        }, {pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/, lookbehind: !0}],
        variable: /[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,
        symbol: /:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/
    }), e.languages.insertBefore("ruby", "number", {
        builtin: /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
        constant: /\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/
    }), e.languages.ruby.string = [{
        pattern: /%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,
        inside: {interpolation: t}
    }, {
        pattern: /%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,
        inside: {interpolation: t}
    }, {
        pattern: /%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,
        inside: {interpolation: t}
    }, {
        pattern: /%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,
        inside: {interpolation: t}
    }, {
        pattern: /%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,
        inside: {interpolation: t}
    }, {pattern: /("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/, inside: {interpolation: t}}]
}(Prism), Prism.languages.go = Prism.languages.extend("clike", {
    keyword: /\b(break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
    builtin: /\b(bool|byte|complex(64|128)|error|float(32|64)|rune|string|u?int(8|16|32|64|)|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(ln)?|real|recover)\b/,
    "boolean": /\b(_|iota|nil|true|false)\b/,
    operator: /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
    number: /\b(-?(0x[a-f\d]+|(\d+\.?\d*|\.\d+)(e[-+]?\d+)?)i?)\b/i,
    string: /("|'|`)(\\?.|\r|\n)*?\1/
}), delete Prism.languages.go["class-name"], Prism.languages.java = Prism.languages.extend("clike", {
    keyword: /\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,
    number: /\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,
    operator: {
        pattern: /(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,
        lookbehind: !0
    }
}), Prism.languages.insertBefore("java", "function", {
    annotation: {
        alias: "punctuation",
        pattern: /(^|[^.])@\w+/,
        lookbehind: !0
    }
}), Prism.languages.json = {
    property: /".*?"(?=\s*:)/ig,
    string: /"(?!:)(\\?[^"])*?"(?!:)/g,
    number: /\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,
    punctuation: /[{}[\]);,]/g,
    operator: /:/g,
    "boolean": /\b(true|false)\b/gi,
    "null": /\bnull\b/gi
}, Prism.languages.jsonp = Prism.languages.json, Prism.languages.objectivec = Prism.languages.extend("c", {
    keyword: /\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
    string: /("|')(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
}), Prism.languages.php = Prism.languages.extend("clike", {
    keyword: /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,
    constant: /\b[A-Z0-9_]{2,}\b/,
    comment: {pattern: /(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/, lookbehind: !0}
}), Prism.languages.insertBefore("php", "class-name", {
    "shell-comment": {
        pattern: /(^|[^\\])#.*/,
        lookbehind: !0,
        alias: "comment"
    }
}), Prism.languages.insertBefore("php", "keyword", {
    delimiter: /\?>|<\?(?:php)?/i,
    variable: /\$\w+\b/i,
    "package": {pattern: /(\\|namespace\s+|use\s+)[\w\\]+/, lookbehind: !0, inside: {punctuation: /\\/}}
}), Prism.languages.insertBefore("php", "operator", {
    property: {
        pattern: /(->)[\w]+/,
        lookbehind: !0
    }
}), Prism.languages.markup && (Prism.hooks.add("before-highlight", function (e) {
    if (e.language !== "php")return;
    e.tokenStack = [], e.backupCode = e.code, e.code = e.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/ig, function (t) {
        return e.tokenStack.push(t), "{{{PHP" + e.tokenStack.length + "}}}"
    })
}), Prism.hooks.add("before-insert", function (e) {
    e.language === "php" && (e.code = e.backupCode, delete e.backupCode)
}), Prism.hooks.add("after-highlight", function (e) {
    if (e.language !== "php")return;
    for (var t = 0, n; n = e.tokenStack[t]; t++)e.highlightedCode = e.highlightedCode.replace("{{{PHP" + (t + 1) + "}}}", Prism.highlight(n, e.grammar, "php").replace(/\$/g, "$$$$"));
    e.element.innerHTML = e.highlightedCode
}), Prism.hooks.add("wrap", function (e) {
    e.language === "php" && e.type === "markup" && (e.content = e.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g, '<span class="token php">$1</span>'))
}), Prism.languages.insertBefore("php", "comment", {
    markup: {pattern: /<[^?]\/?(.*?)>/, inside: Prism.languages.markup},
    php: /\{\{\{PHP[0-9]+\}\}\}/
})), Prism.languages.python = {
    "triple-quoted-string": {pattern: /"""[\s\S]+?"""|'''[\s\S]+?'''/, alias: "string"},
    comment: {pattern: /(^|[^\\])#.*/, lookbehind: !0},
    string: {pattern: /("|')(?:\\\\|\\?[^\\\r\n])*?\1/, greedy: !0},
    "function": {pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g, lookbehind: !0},
    "class-name": {pattern: /(\bclass\s+)[a-z0-9_]+/i, lookbehind: !0},
    keyword: /\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,
    "boolean": /\b(?:True|False)\b/,
    number: /\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
    operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,
    punctuation: /[{}[\];(),.:]/
}, Prism.languages.swift = Prism.languages.extend("clike", {
    string: {
        pattern: /("|')(\\(?:\((?:[^()]|\([^)]+\))+\)|\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
        inside: {
            interpolation: {
                pattern: /\\\((?:[^()]|\([^)]+\))+\)/,
                inside: {delimiter: {pattern: /^\\\(|\)$/, alias: "variable"}}
            }
        }
    },
    keyword: /\b(as|associativity|break|case|catch|class|continue|convenience|default|defer|deinit|didSet|do|dynamic(?:Type)?|else|enum|extension|fallthrough|final|for|func|get|guard|if|import|in|infix|init|inout|internal|is|lazy|left|let|mutating|new|none|nonmutating|operator|optional|override|postfix|precedence|prefix|private|Protocol|public|repeat|required|rethrows|return|right|safe|self|Self|set|static|struct|subscript|super|switch|throws?|try|Type|typealias|unowned|unsafe|var|weak|where|while|willSet|__(?:COLUMN__|FILE__|FUNCTION__|LINE__))\b/,
    number: /\b([\d_]+(\.[\de_]+)?|0x[a-f0-9_]+(\.[a-f0-9p_]+)?|0b[01_]+|0o[0-7_]+)\b/i,
    constant: /\b(nil|[A-Z_]{2,}|k[A-Z][A-Za-z_]+)\b/,
    atrule: /@\b(IB(?:Outlet|Designable|Action|Inspectable)|class_protocol|exported|noreturn|NS(?:Copying|Managed)|objc|UIApplicationMain|auto_closure)\b/,
    builtin: /\b([A-Z]\S+|abs|advance|alignof(?:Value)?|assert|contains|count(?:Elements)?|debugPrint(?:ln)?|distance|drop(?:First|Last)|dump|enumerate|equal|filter|find|first|getVaList|indices|isEmpty|join|last|lexicographicalCompare|map|max(?:Element)?|min(?:Element)?|numericCast|overlaps|partition|print(?:ln)?|reduce|reflect|reverse|sizeof(?:Value)?|sort(?:ed)?|split|startsWith|stride(?:of(?:Value)?)?|suffix|swap|toDebugString|toString|transcode|underestimateCount|unsafeBitCast|with(?:ExtendedLifetime|Unsafe(?:MutablePointers?|Pointers?)|VaList))\b/
}), Prism.languages.swift.string.inside.interpolation.inside.rest = Prism.util.clone(Prism.languages.swift), function () {
    if (typeof self == "undefined" || !self.Prism || !self.document)return;
    Prism.hooks.add("complete", function (e) {
        if (!e.code)return;
        var t = e.element.parentNode, n = /\s*\bcommand-line\b\s*/;
        if (!t || !/pre/i.test(t.nodeName) || !n.test(t.className) && !n.test(e.element.className))return;
        if (e.element.querySelector(".command-line-prompt"))return;
        n.test(e.element.className) && (e.element.className = e.element.className.replace(n, "")), n.test(t.className) || (t.className += " command-line");
        var r = new Array(1 + e.code.split("\n").length), i = t.getAttribute("data-prompt") || "";
        if (i !== "")r = r.join('<span data-prompt="' + i + '"></span>'); else {
            var s = t.getAttribute("data-user") || "user", o = t.getAttribute("data-host") || "localhost";
            r = r.join('<span data-user="' + s + '" data-host="' + o + '"></span>')
        }
        var u = document.createElement("span");
        u.className = "command-line-prompt", u.innerHTML = r;
        var a = t.getAttribute("data-output") || "";
        a = a.split(",");
        for (var f = 0; f < a.length; f++) {
            var l = a[f].split("-"), c = parseInt(l[0]), h = c;
            l.length === 2 && (h = parseInt(l[1]));
            if (!isNaN(c) && !isNaN(h))for (var p = c; p <= h && p <= u.children.length; p++) {
                var d = u.children[p - 1];
                d.removeAttribute("data-user"), d.removeAttribute("data-host"), d.removeAttribute("data-prompt")
            }
        }
        e.element.innerHTML = u.outerHTML + e.element.innerHTML
    })
}();
