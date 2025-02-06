interface Options {
  baseURL: string
  headers?: Record<string, string>
}

interface MethodOptions {
  headers?: Record<string, string>
  params?: Record<string, string | number>
}

const create = ({ baseURL, headers = {} }: Options) => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const getMethod = async <T = any>(
    path: string,
    options?: MethodOptions,
  ): Promise<{ data: T }> => {
    const { headers: methodHeaders = {}, params = {} } = options ?? {}
    const queryString = new URLSearchParams(JSON.parse(JSON.stringify(params)))

    const res = await fetch(`${baseURL}${path}?${queryString.toString()}`, {
      method: 'GET',
      headers: {
        ...headers,
        ...methodHeaders,
      },
      cache: 'force-cache',
    })

    const data = await res.json()

    return { data }
  }

  return {
    get: getMethod,
  }
}

export { create }
