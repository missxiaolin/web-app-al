let urlConfig = {}

export default class Request {
    constructor(option) {
        let baseConfig = {
            baseUrl: urlConfig.gsUrl
        }
        this.config = { ...baseConfig, ...option }
        // 设置请求头
        this.header = {
            'Content-Type': 'application/json;',
        }
    }

    // 可以更改请求头header
    setHeader(key, val) {
        this.header.key = val
    }

    request({ url, data, method }) {
        return new Promise((resolve, reject) => {
            this._request(url, resolve, reject, data, method)
        })
    }

    _request(url, resolve, reject, data, method) {
        my.getStorage({
            key: 'token',
            complete: (ret) => {
                let token = ret.data || ''
                this.header["TOKEN"] = token || ''

                if (my.canIUse('request')) {
                    my.request({
                        url: `${this.config.baseUrl}${url}`,
                        data: data,
                        headers: this.header,
                        method: method ? method : 'POST',
                        dataType: 'json',
                        timeout: 10000,
                        success: (res) => {
                            resolve(res.data)
                        },
                        fail: (res) => {
                            reject(res)
                        }
                    })
                } else {
                    my.httpRequest({
                        url: `${this.config.baseUrl}${url}`,
                        data: data,
                        headers: this.header,
                        method: method ? method : 'POST',
                        dataType: 'json',
                        timeout: 10000,
                        success: (res) => {
                            resolve(res.data)
                        },
                        fail: (res) => {
                            reject(res)
                        }
                    })
                }
            }
        })
    }

    loding(data) {
        my.showLoading({
            content: '加载中',
            delay: 500
        })
        return this
    }
}
