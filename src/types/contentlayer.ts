export type MDX = {
    raw: string
    code: string
}

export type Post = {
    _id: string
    _raw: {
        sourceFilePath: string
        sourceFileName: string
        sourceFileDir: string
        contentType: string
        flattenedPath: string
    }
    type: 'Post'
    createdAt: string
    summary: string
    title: string
    body: MDX
    slug: string
}
