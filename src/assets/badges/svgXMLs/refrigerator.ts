const refrigeratorXML = `<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="70" height="70" fill="url(#pattern0)"/>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.00195312)"/>
</pattern>
<image id="image0" width="512" height="512" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN8wAADfMBL/09/gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAC7cSURBVHja7d17sFfVYejxesQzKojMyIz8wThhHMdxYgJqbb0jVSQYiUmQ1xGRgGjovYQbIyZWc6PXiqPUiDVO0qjVWitRuaWCTejNBFsf9bZRSzR0tMZGE/U6gtSi5VrQiLDvWrCR1wF+r71/+/E5M5+ZtHJea++11vf8Hnv/VpIkvwUU222vLj0sGB6MDMYGfcHc4Org1uC+4KFgRbAyeCJ4Kng2eCF4OXg9eCt4N9gYfJTamP7/3kr/zcvp5zybfo0n0q+5Iv0e96Xf8+r0Z+hLf6aR6c94mGMGxWcQoLsbe29wbDAumBPcGDwQPBqsDt4INgVJyWxKf/bV6e/yQPq7zUl/1/g79zoHQABAVTf4nuATwZjg4mBBsDh4Mt0gt5Rwc++ULekYPJmOyYJ0jMakY9bjHAIBAGXY7IemD4VfFtwTrCrpX+9FehRhVTqWl6VjO9S5BgIAuvmwfXy+e2awKPhJsMaGnZs16ZgvSo/BSE8ngACALDb8+Hz1rOCu4Plgs024cDanx+au9Fgd69wFAQDNbPYDglOD+ekr3tfaXEtrbXoM56fHdIBzHAQA7NjwBwfnBNcHj6VvibN5VtPG9Bhfnx7zweYAAgDq9ar809JXnD9T81fh192W9BxYkJ4T3nWAAICKbfrDgouCJcF6Gx/7sD49R+K5MszcQQBAOZ/HPyNYGDwXbLW50aSt6bmzMD2XvH4AAQAF3fSPTP9yWxZssIHRYRvScyueY0eacwgA6O6mf0QwI/hR8BubFDn5TXrOxXPvCHMRAQD5bPoDg2nB8uB9mxFd9n56LsZzcqA5igCAzm768U54U4Kl3qZHwd9muDQ9V90REQEAbbxdb3zwYPCezYWSeS89d8d7eyECABrb+OP95K9N70tvI6EKXk/P6eHmOAIAdt/0Dw4mBCuCj2wYVNRH6Tkez/WDzX0EAHXe+EcENwRv2hyomTfTc3+EtQABQF02/UOCqcEjLtAD2+bAI+mcOMQagQCgihv/0PR50HUWfejXunSODLVmIACowsZ/XHBHsMkCDw3ZlM6Z46whCADKuPGPDh52tz1o626FcQ6NtqYgACjDq/njc5lPW7yho55O55Z3DyAAKNzleS8NfmWhhkz9Op1rLjuMAKCrG//g9EVL71iYIVfvpHNvsLUIAUDef/FfFay3EENXrU/nokcEEABkuvEfGlzurXxQyLcQxrl5qLUKAUAnN/7eYJ4r9kEprjAY52qvtQsBQDsb/4BgjhvzQClvQBTn7gBrGQKAZjb+eCvemcErFlIotVfSueyWxAgADrj5jwlWWzihUuKcHmONQwCwrzvzLbNQQqUtcwdCBAA7Nv5BwcLgA4sj1MIH6ZwfZA0UANRz4z8omB2stSBCLa1N14CDrIkCgPps/qcHqyyAQLoWnG5tFABUe+M/JlhiwQP6EdeGY6yVAoDq3aXvimCjRQ7Yj43pWuGugwKACmz+o4KfWdiAJsQ1Y5Q1VABQ3uv23xRstpgBLdicriHuLyAAKNnFfH5pAQM64JcuIiQAKP7GPyS4O9hq0QI6aGu6tgyx1goAirf5Tw7WWKiADMU1ZrI1VwBQjI1/WLDcwgTkKK45w6zBAoDubf4TgrctRkAXxLVngrVYAJDvxn94cKcFCCiAuBYdbm0WAGS/+Z8cvGTRAQokrkknW6MFANls/D3BlcGHFhuggD5M16gea7YAoHOb//DgMQsMUAJxrRpu7RYAtL/59wXvWFSAEolrVp81XADQ2sY/KLjXQgKUWFzDBlnTBQCNb/7HBy9aPIAKiGvZ8dZ2AcCBN/+JwQaLBlAhcU2baI0XAOz7Vf4LXccfqPD9BBZ6l4AAYPfN/6hgpQUCqIG41h1l7RcANv/tF/Z5zaIA1MhrLhwkAOq++c8O3rcYADUU177Z9gIBULeNvze43QIAsG0t7LU3CIA6bP5HBz816QE+FtfEo+0RAqDKm/8JwasmO8Be4tp4gr1CAFRx8z8reNckB9inuEaeZc8QAFXa/Gfd5i5+AI2Ia+Use4cAqMLmf50JDdC06+whAqDMr/RfbBIDtGyxdwgIgLJt/kOCx01egLbFtXSIvUUAlGHzH3GbO/kBdFJcU0fYYwRAkTf/U4J1JitAx8W19RR7jQAo4uY/+ja38QXIUlxjR9tzBECRNv+zg40mJ0Dm4lp7tr1HABRh8z8v+MCkBMhNXHPPswcJgG5u/tODzSYjQO7i2jvdXiQAurH5zwm2mIQAXRPX4Dn2JAGQ5+Y/P9hq8gF0XVyL59ubBEAem/81JhxA4VxjjxIAWW7+3zbJAArr2/YqAWDzBxABCAAP+wN4OgAB0PwL/kwogHLxwkAB0PZb/bzaH6Cc7w7wFkEB0PJFfrzPH6Dc1wlwsSAB0PTlfV3hD6AaVwx02WAB0PCNfVzbH6A64pruBkIC4IC39HVXP4DqiWu7WwkLgH43/1Nu236vaRMFoJriGn+KPU8A7Lr5jwjWmRwAlRfX+hH2PgEQN/8hwYsmBUBtxDV/iACo9+bfGzxuMgDUTlz7ewVAfQNgsUkAUFuLBUA9N//rnPwAtXedAKjX5j/LSQ9AapYAqMfmf1bwoRMegFTcE84SANXe/E8I3nWyA7CHuDecIACqufkfHbzqJAdgH+IecbQAqN7b/X7q5AbgAH5al7cH1iUAbndSA9Cg2wVANTb/2U5mAJo0WwCUe/M/OXjfiQxAk+LecbIAKOfmf1TwmpMYgBbFPeQoAVCuzb8nWOnkBaBNcS/pEQDlCYCFTloAOmShACjH5j8x2OqEBaBD4p4yUQAUe/M/PtjgZN3bTc/fn1zz+F3J1//6u8m8H9ySzFu8CGCbS5f8cXLlj7+fXPeP9yS3vvy/rJn9i3vL8QKgmJv/oOBFJ+lOC3++OLnk+zckZ8+9NDn587OSk88F2L/fnXxJMulbVyWXLf1O8p1f/aW1dHdxjxkkAIoXAPc6Obe7+cUHk1m3LUhOPe9iCxrQsrMumZd844ffta7u7l4BUKzNv89JuV18CO/MWXMtXkDHnH/DNZ4a2F2fACjG5j88eMcJuXTbc3i/M+kSCxbQceO/Oj9Z9IsHbf7bxT1nuADo/vv9H3MyLk0WPPXn2567s1ABWTnvm3+Q3PZr623qsbJfH6DsAXClk3Bpcsu/LknOvOgrFiggc/GFxdbdj10pALp3nf8PnYBLky/fcaOFCcjFqRNmJzc+e5/Nf7sPy3y/gLJu/ocHLzn5libffuF+D/0DuZp63bds/jvFvehwAZBfANzppNtu7r03W5CAXJ3yhYuSm198wBq8050CIJ/Nf4KTbadz519uQQJyd9lffccavLsJAiDbzX9Y8LYTLX3x30sPbitxixGQt74FngbYQ9ybhgmA7AJguZNsp+ufuddCBHTF57423zq8t+UCIJvNf7KTa3ff+ts785/4n5tp8YMiynluxrceW4f7NVkAdHbzHxKscWLt7hs//F6mE3zUORcmnx7bl5x4xqTkxNHnJZ88fcLHTvy9icmnzpycjBw3LTlp/JcsvpCjOOfi3ItzMM7F3eZmmKtxzsa5G+dwVj/DaVO/bB3uX9yrhgiAzgXA3U6qfgLgr7+bzcZ/9vS9FpUD+dSYKUIActj441xrZm7GuRzndMcDYMol1uF9u1sAdGbzHxNsdUJlHwBxcYl/OTSzuOzp02PPt1BDBuLcamduxrndyUgXAPsV96wxAqC9zf/Q4JdOpuwDYNRnL9zrYf5WferMKV4rAB18bj/OqU7MzTjH41wXALmIe9ehAqD1ALjJSZR9AMQFoROLy55/bYgAaH/zb/dRuf50IgIEQENuEgCtbf6jgs1OoGwD4KTxM5JPdugv//5eF2ARh9Y1+3x/w8Kcj3NfAGQu7mGjBEBzm//Bwc+cPNkHwIm/NymbBSY18jPTLOTQgjh3spybce4LgFzEvexgAdB4AFzhpMk+AEaOuyDTBWbHXxqeCoDmH/rP6pG53QI9rAECIBdXCIDGNv9jgo1OmOwDoNm3+nlnAJTjFf/NvEVQAOQi7mnHCIADB8ASJ0v2ARDfF5zHAtPuIgN1lFecb3tBYIvXCBAATVsiAPa/+Z/uJMknAD591tTcFpjopHNmWNihkRfmhrmS59yMa4EAyM3pAqD/zf+gYJUTJJ8AODGH5xd3fzGgpwGgsRf/nZ/r3IxrgQDITdzjDhIAewfAbCdHTgEQX2CU4wLTzl8ZULvn/3N+dC5q5YW6AqBlswXA7pv/oGCtEyOfAIiXA817gdl2dUCLOxz4vf9nTsl9frZyiWAB0LK41w0SADsDYKGTIscAyPk5xm0BcMYkizs0EgBnTMo/AFp4jY4AaMtCAbB98x8RfOCEqPgjAK4KCN29+p9HAIok7nkjBMCrS5c5GfJ/EWD+rwHos7hDQ68B6Mv/NQBeBNgNy2odAOmtfp0I3XgXQI7vM3ZJYCjOJYA7dZ0OAdARY2oZAOEX7wlWOwG6dB2AsX2Ff4gRankdgJyfootrgQDomrgH9tQxAGY6+F28EmAGtwDe762BLezQ+CN0Ob4QsNVbAwuAjplZqwAIv/CA4BUHvsv3AshpkRk5zsP/0NyNuqYVPs4FQMfEvXBAnQJgjoPe/QAY9dnp7gMANb4fQFwDBEAhzKlFAIRftDd43QHvfgBsv+jI5ELeaATqLusbdsW5387PJwA6Ku6JvXUIgHkOdnEC4KTPzczsL41WX1wEZPti3TjnT2rh8r8CIFPzKh0A4Rc8NHjTgS5OAHx8ZcAO3xzIhX+goBcGCnO9E3fnFAAdF/fGQ6scAJc7yMULgB1vPerUiwL95Q/FfCQgzvFOvSVXAGTi8koGQPjFBgbrHOBiBsCOuwS2cyey+LCi5/whu9cEtPN03bY7crb5sL8AyFzcIwdWMQCucnALHgAfPxowo6mHHeP9xOM9zDu5uAD9R3qcayc28ZRdnMtxTnf6ZxEAmbmqUgEQfqHBwXoHthwBsOtiM+rsC7b95RBfMRz/+jhx9MRtDyPGW5bGhyVHnXOhRRm68YhAmHtxDsa5GOfktrkZ5micq3HOxrmbZZQLgMzEvXJwlQLgWge1hAEAIAC64dpKBED63P87DqgAAAQADXknj9cC5BEAlzqYAgAQADTl0lIHQPgFDg5+7UAKAEAA0JS4dx5c5gCY6iAKAEAA0JKpZQ6Apx1AAQAIAFrydCkDIPzgox08AQAIANoyuowB8LADJwAAAUBbHi5VAIQf+LhgiwMnAAABQFviXnpcmQLgDgdNAAACgI64oxQBEH7QocEmB0wAAAKAjoh76tAyBIDL/goAQABQ8MsDd3rzP8QtfwUAIADI5FbBhxQ5AFz4RwAAAoASXBio0wHwiAMkAAABQCYeKWQAhB9sRLDVARIAgAAgE3GPHVHEALjBwREAgAAgUzcUKgDSu/696cAIAEAAkKk3O3WXwE4FwAQHRQAAAoBcTChSAKxwQAQAIADIxYpCBED4QYYHHzkgAgAQAOQi7rnDixAArvwnAAABQMmuDNju5t8TvO5ACABAAJCruPf2dDMAxjsIAgAQAHTF+G4GwIMOgAAABABd8WBXAiB848OC9xwAAQAIALoi7sGHdSMAphh8AQAIALpqSjcCYKmBFwCAAKCrluYaAOEbDgw2GngBAAgAuiruxQPzDIBpBl0AAAKAQpiWZwAsN+ACABAAFMLyXAIgfKMjgvcNuAAABACFEPfkI/IIgBkGWwAAAsA6XCgz8giAHxloAQAIAOtwofwo0wAI3+DI4DcGWgAAAsA6XChxbz4yywC4yCALAAABUEgXZRkAywywAAAQAIW0LJMACF94QLDBAAsAAAFQSHGPHpBFAJxhcAUAgAAotDOyCICFBlYAAAiAQluYRQA8Z2AFAIAAKLTnOhoA4QsOC7YaWAEAIAAKLe7VwzoZAN7+JwAABECF3g7YaAAsMaACAEAAlMKSjgRA+EI9wXoDKgAABEApxD27pxMBcJrBFADk58tTZiYPX3xh8ouvTE82XHpB8t7Xyunfvjo9+YffvzD505kzkrO+6LgKAHJ2WicCYIGBFADksKB+flbyV2Hj3zr/giSpmH8PMXBp35ccZwFAfhZ0IgCeMZACgOz94KIZldv4d7X5sguSaZNmOtYCgHw801YAhC8wONhiIAUA2Zo1eWaypcKb/w4vzJ3ueAsA8hH37sHtBMA5BlEAkL27Z82o/Oa/wxfP8yiAACAn57QTANcbQAFA9v7x9y+sTQB843yvBRAA5OT6dgLgMQMoAMjeq/Om1yYAFs2Y4ZgLAPLxWEsBkN7+d6MBFABk77UaBcAtAkAAkJeN+7s98P4C4FSDJwAQAAIAAVBqp7YSAPMNnABAAAgABECpzW8lAB4ycAIAASAAEACl9lArAbDWwAkAKhgAl4fvdfWcJLnpiu3i/758ugBAAFTT2qYCIHzCsQZNAFChALjq4iRZcmeSvPBskmz+MNnrI/7/4n+L/yb+WwGAAKiSY5sJgFkGTABQkQC4/YYkeeftpOGP+G/j5wgABEBVzGomAO4yYAKAkgfAlRclyf9ZmSRbtyZNf8TPiZ8bv4YAQACU3V3NBMDzBkwAUOIAuOV/JMnbbyVtf8SvEb+WAEAAlNnzDQVA+Ie9wWYDJgAoaQDE5/DX/1v/G/rG/0ySX/xzkjyyPEnu+ePt4v/+xert/62/j/i1Ovi6AAEgAMhd3NN7GwmAkQZLAFDiAPjp3/W/kf/T3yfJNy/Z9+fF/xb/TX8f8WsKAARAmY1sJABmGigBQEkD4M6Fe2/e//n/kuTPFjX+NeK/jZ+z50f82gIAAVBWMxsJgEUGSgBQwgCIf8H/x/q9N+4/van5rxU/Z8+P+LX39wiCABAAFNmiRgLgJwZKAFDCAFh2796b9jOPt/714ufu+RG/hwBAAJTRTxoJgDUGSgBQwgB4+YXdN+v3NrT3F3v83Pg1dv2I30MAIADKaM1+AyD8g6EGSQBQwgD4g1lJsmXL7pv1z59qPyri19j1I36P+L0EgAAQAGU0dH8BMNYACQBKGAA3zt/74fof3t9+AMSvsedH/F4CQAAIgDIau78AuMwACQBKGAB/cv3eG/X3FrQfAPFr7PkRv5cAEAACoIwu218A3GOABAAlDIDbb9x7o/7ONe0HQPwae37E7yUABIAAKKN79hcAqwyQAKCEAfBH38jkFfv9vrMgfi8BIAAEQBmt6jcAwn/oCTYZIAFACQMgXqp3z5v+rHqy/QCIX2PPmwS1eVlgASAA6Jq4x/f0FwCfMDgCgBK/DfD1V/a+re83vtT614ufu+dthOP38DZABECZfaK/ABhjYAQAJQ6Av1my98P1f/tw618vfu6eH/F7CAAEQJmN6S8ALjYwAoASB8AfzkuS9zft/b79W69u/mvFz9nzugLxa8fvIQAQAGV2cX8BsMDACABKfjOgB+/Y+6/2f1+XJIu+2fjXiP82fs6eH/FruxkQAqDsFvQXAIsNjACgArcDfv5ne2/eH32UJP/7L5Pk6xfu+/Pif4v/Jv7bPT/i13Q7YARAFSzuLwCeNDACgAoEwP/8b/3fzjd+rPm/SfL3P06S+/9k+9v5ovi/n/jx9v/W30f8WvFrCgAEQBU82V8AvGFgBAAVCIDojoVJsvG9pO2P+DXi1+rgzyYABABd9cZuARD+H73BFgMjAKhIAETXzk2Sf3mu9c0/fm78Gh3+uQSAAKCr4l7fu2sAHGtQBAAVC4CPXxh4597vDtjfR/y38XMy+nkEgACg647dNQDGGRABQEUDILruvyfJymX7fp5/x+sD4r+J/zbDn0UACAC6btyuATDHgAgAKhwAez41EG/y8+e3bhf/dwYP9QsAAUBhzdk1AG40IAKAmgRAlwkAAUDX3bhrADxgQAQAAkAAIABq4YFdA+BRAyIAEAACAAFQC4/uGgCrDYgAQAAIAARALazeNQBcBEgAIAAEAAKgRhcD2hEAmwyIAEAACAAEQC1s2hYA4X8cZjAEAAJAACAAauWwGADDDYQAQAAIAARArQyPATDSQAgABIAAQADUysgYAGMNhABAAAgABECtjI0B0GcgBAACQAAgAGqlLwbAXAMhABAAAgABUCtzYwBcbSAEAAJAACAAauXqGAC3GggBgAAQAAiAWrk1BsB9BkIAIAAEAAKgVu6LAfCQgRAACAABgAColYdiAKwwEAIAASAAEAC1siIGwEoDIQAQAAIAAVArK2MAPGEgBAACQAAgAGrliRgATxkIAYAAEAAIgFp5KgbAswZCACAABAACoFaejQHwgoEQAAgAAYAAqJUXYgC8bCAEAAJAACAAauXlGACvGwgBgAAQAAiAWnk9BsBbBkIAIAAEAAKgVt6KAfCugRAACAABgAColXdjAGw0EAIAASAAEAC1sjEGwEcGQgAgAAQAAqBWPhIAAoACeGHyuGTD1DNrIf6ujrkAoBgB4CkAAYAAEAAIgBo+BeBFgAIAASAAEAA1fBGgtwEKAASAAEAA1PBtgC4EJAAQAAIAAVDDCwG5FLAAQAAIAARADS8F7GZAAgABIAAQADW8GZDbAQsABIAAQADU8HbATxkIAYAAEAAIgFp5KgbAEwZCACAABAACoFaeiAGw0kAIAASAAEAA1MrKGAArDIQAQAAIAARArayIAfCQgRAACAABgAColYdiANxnIAQAAkAAIABq5b4YALcaCAGAABAACIBauTUGwNUGQgAgAAQAAqBWro4BMNdACAAEgABAANTK3BgAfQZCACAABAACoFb6YgCMNRACAAEgABAAtTI2BsBIAyEAEAACAAFQKyNjAAw3EAIAASAAEAC1MjwGwGEGQgAgAAQAAqBWDvutJEliBGwyGAIAASAAEAC1sCnu/TsC4A0DIgAQAAIAAVALb+waAKsNiABAAAgABEAtrN41AB41IAIAASAAEAC18OiuAfCAAREACAABgACohQd2DYAbDYgAQAAIAARALdy4awDMMSACAAEgABAAtTBn1wAYZ0AEAAJAACAAamHcrgFwrAERAAgAAYAAqIVjdw2A3mCLQREACAABgACotLjX934cAC4GJAAQAAIAAVCfiwDtGQBPGhgBgAAQAAiASnuyvwBYbGAEAAJAACAAKm1xfwGwwMAIAASAAEAAVNqC/gLgYgMjAKh2ALx+603JSz/8m369PfcCAYAAqL6L+wuAMQZGAFDtAHj5gfuT5/7ltX6tu/wSAYAAqL4x/QXAJwyMAEAACAAEQKV9or8A6Ak2GRwBgAAQAAiASop7fM9eAZBGwCoDJAAQAAIAAVBJq3bd8/cMgHsMkABAAAgABEAl3bO/ALjMAAkABIAAQABU0mX7C4CxBkgAIAAEAAKgksbuLwCGGiABgAAQAAiAShq6zwBII2CNQRIACAABgAColDV77vf9BcBPDJQAQAAIAARApfykkQBYZKAEAAJAACAAKmVRIwEw00AJAASAAEAA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"/>
</defs>
</svg>
`;

export default refrigeratorXML;