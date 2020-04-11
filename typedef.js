
/**
 * ClientNode
 * @typedef {Object.<string, *> & DefinedFile & ClientNodeSpecifics} ClientNode
 * 
 * @typedef {Object} ClientNodeSpecifics
 * @prop {ClientNode[]} layouts
 * @prop {ClientNode|undefined} parent
 * @prop {ClientNode|undefined} nextSibling
 * @prop {ClientNode|undefined} prevSibling
 * @prop {ClientNode[]} lineage
 * @prop {String} ext
 * @prop {Meta} meta
 * @prop {String} id
 * @prop {String} path
 * @prop {String} shortPath
 * @prop {String} ranking
 * @prop {Boolean} isIndexable
 * @prop {Boolean} isNonIndexable
 * @prop {String[]} paramKeys
 * @prop {String} regex
 * @prop {Class} component
 * @prop {ClientNodeApi} api
 */

/**
 * ClientNodeApi
 * @typedef {Object} ClientNodeApi
 * @prop {ClientNodeApi|undefined} parent
 * @prop {ClientNodeApi|undefined} next
 * @prop {ClientNodeApi|undefined} prev
 * @prop {ClientNodeApi[]} children
 * @prop {Boolean} isMeta
 * @prop {String} path
 * @prop {String} title
 * @prop {Meta} meta
 * @prop {ClientNode} __file
 */

/**
 * File
 * @typedef {Object.<string, *> & MiscFile & GeneratedFile & DefinedFile} RouteNode
 *
 * @typedef {Object} DefinedFile
 * @prop {Boolean=} isFile
 * @prop {Boolean=} isDir
 * @prop {Boolean=} isPage
 * @prop {Boolean=} isLayout
 * @prop {Boolean=} isReset
 * @prop {Boolean=} isIndex
 * @prop {Boolean=} isFallback
 *
 * @typedef {Object} GeneratedFile
 * @prop {String} name
 * @prop {String} path
 * @prop {RouteNode[]=} dir
 * @prop {String} absolutePath
 * @prop {String} isFile
 * @prop {String} filepath
 * @prop {String} ext
 * @prop {Boolean} badExt
 *
 * @typedef {Object} MiscFile
 * @prop {String} id
 * @prop {GetParentFile} getParent
 * @prop {RouteNode} parent
 * @prop {Meta} meta
 *
 * @typedef {function():RouteNode} GetParentFile
 * @returns {RouteNode}
 */

/**
 * @typedef {Object} Meta
 * @prop {*=} preload
 * @prop {*=} precache-order
 * @prop {*=} precache-proximity
 * @prop {*=} recursive
 * @prop {*=} bundle
 * @prop {*=} index
 * @prop {Array=} children
 * @prop {String=} $$bundleId
*/

/**
 * Tree Payload
 * @typedef {Object} TreePayload
 * @prop {RouteNode} tree
 * @prop {BuildConfig} options
 * @prop {Object} metaParser
 * @prop {Object} defaultMeta
 */


/**
 * Build Config
 * @typedef {Object} BuildConfig
 * @prop {String=} pages
 * @prop {String=} routifyDir
 * @prop {Boolean=} dynamicImports
 * @prop {Boolean=} singleBuild
 * @prop {String=} distDir
 * @prop {(String|Array)=} extensions
 * @prop {(String|Array)=} ignore
 * @prop {Boolean=} noHashScroll
 */

/**
 * @typedef {Object} SvelteStore
 * @prop {function(): SvelteStoreSubscription} subscribe
 *
 * Svelte Store Subscription
 * @description Call to kill subscription.
 * @typedef {function():void} SvelteStoreSubscription SSS
 */