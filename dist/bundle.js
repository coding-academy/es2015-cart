'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var jquery = createCommonjsModule(function (module) {
/*!
 * jQuery JavaScript Library v3.1.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2016-09-22T22:30Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : commonjsGlobal, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};



	function DOMEval( code, doc ) {
		doc = doc || document;

		var script = doc.createElement( "script" );

		script.text = code;
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.1.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {

		// As of jQuery 3.0, isNumeric is limited to
		// strings and numbers (primitives or objects)
		// that can be coerced to finite numbers (gh-2662)
		var type = jQuery.type( obj );
		return ( type === "number" || type === "string" ) &&

			// parseFloat NaNs numeric-cast false positives ("")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			!isNaN( obj - parseFloat( obj ) );
	},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}

		// Support: Android <=2.3 only (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE <=9 - 11, Edge 12 - 13
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Simple selector that can be filtered directly, removing non-Elements
	if ( risSimple.test( qualifier ) ) {
		return jQuery.filter( qualifier, elements, not );
	}

	// Complex selector, compare the two sets, removing non-Elements
	qualifier = jQuery.filter( qualifier, elements );
	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			resolve.call( undefined, value );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.call( undefined, value );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( jQuery.isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								jQuery.isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ jQuery.camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ jQuery.camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( jQuery.camelCase );
			} else {
				key = jQuery.camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && jQuery.nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: jQuery.isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function manipulationTarget( elem, content ) {
	if ( jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		div.style.cssText =
			"box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";
		div.innerHTML = "";
		documentElement.appendChild( container );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = divStyle.marginLeft === "2px";
		boxSizingReliableVal = divStyle.width === "4px";

		// Support: Android 4.0 - 4.3 only
		// Some styles come back with percentage values, even though they shouldn't
		div.style.marginRight = "50%";
		pixelMarginRightVal = divStyle.marginRight === "4px";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	container.appendChild( div );

	jQuery.extend( support, {
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelMarginRight: function() {
			computeStyleTests();
			return pixelMarginRightVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE <=9 only
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i,
		val = 0;

	// If we already have the right measurement, avoid augmentation
	if ( extra === ( isBorderBox ? "border" : "content" ) ) {
		i = 4;

	// Otherwise initialize for horizontal or vertical properties
	} else {
		i = name === "width" ? 1 : 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var val,
		valueIsBorderBox = true,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Support: IE <=11 only
	// Running getBoundingClientRect on a disconnected node
	// in IE throws an error.
	if ( elem.getClientRects().length ) {
		val = elem.getBoundingClientRect()[ name ];
	}

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				style[ name ] = value;
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = extra && getStyles( elem ),
				subtract = extra && augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				);

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ name ] = value;
				value = jQuery.css( elem, name );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function raf() {
	if ( timerId ) {
		window.requestAnimationFrame( raf );
		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 13
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	// Go to the end state if fx are off or if document is hidden
	if ( jQuery.fx.off || document.hidden ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.requestAnimationFrame ?
			window.requestAnimationFrame( raf ) :
			window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	if ( window.cancelAnimationFrame ) {
		window.cancelAnimationFrame( timerId );
	} else {
		window.clearInterval( timerId );
	}

	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnothtmlwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnothtmlwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




support.focusin = "onfocusin" in window;


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = jQuery.isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( jQuery.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 13
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( jQuery.isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win, rect, doc,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		rect = elem.getBoundingClientRect();

		// Make sure element is not hidden (display: none)
		if ( rect.width || rect.height ) {
			doc = elem.ownerDocument;
			win = getWindow( doc );
			docElem = doc.documentElement;

			return {
				top: rect.top + win.pageYOffset - docElem.clientTop,
				left: rect.left + win.pageXOffset - docElem.clientLeft
			};
		}

		// Return zeros for disconnected and hidden elements (gh-2310)
		return rect;
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset = {
				top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
				left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
			};
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

jQuery.parseJSON = JSON.parse;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( typeof define === "function" && define.amd ) {
	define( "jquery", [], function() {
		return jQuery;
	} );
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}





return jQuery;
} );
});

function generateProducts() {
  var skills = ['JavaScript', 'CSS', 'SASS', 'Node', 'Angular 2', 'VUE'];

  return skills.map(function (skill, i) {
    return {
      id: i + 1,
      title: 'Mastering ' + skill,
      description: skill + ' lorem  ipsum dkhd daklhd dakhdk dakhdk da',
      price: (i + 1) * 10
    };
  });
}

var products = [];

function getProducts() {
  return new Promise(function (resolve) {
    // simple caching mechanism
    if (products.length) {
      resolve(products);
    } else {
      setTimeout(function () {
        products = generateProducts();
        resolve(products);
      }, 2000);
    }
  });
}

function getProductById(productId) {
  return getProducts().then(function (products) {
    var product = products.find(function (product) {
      return productId === product.id;
    });
    return product;
  });
}

var storeService = {
  getProducts: getProducts,
  getProductById: getProductById
};

// cart.service.js

var cartItems = [];

var getCartItems = function getCartItems() {
  return cartItems;
};

var addToCart$1 = function addToCart$1(item) {
  var itemInCart = cartItems.find(function (currentItem) {
    return item.id === currentItem.id;
  });
  if (itemInCart) {
    itemInCart.quantity++;
  } else {
    item.quantity = 1;
    cartItems.push(item);
  }
};

var substractFromCart = function substractFromCart(itemId) {
  var itemIndex = cartItems.findIndex(function (item) {
    return item.id === itemId;
  });
  if (itemIndex > -1) {
    if (cartItems[itemIndex].quantity > 1) {
      cartItems[itemIndex].quantity--;
    } else {
      cartItems.splice(itemIndex, 1);
    }
  }
};

var clearItem$1 = function clearItem$1(itemId) {
  var itemIndex = cartItems.findIndex(function (item) {
    return item.id === itemId;
  });
  if (itemIndex > -1) {
    cartItems.splice(itemIndex, 1);
  }
};

var getCartTotal = function getCartTotal() {
  return cartItems.reduce(function (acc, item) {
    return acc + item.quantity * item.price;
  }, 0);
};

var cartService = {
  substractFromCart: substractFromCart,
  getCartItems: getCartItems,
  clearItem: clearItem$1,
  addToCart: addToCart$1,
  getCartTotal: getCartTotal
};

var getProductTpl = function getProductTpl(product) {
  return "\n  <div class=\"card product\" data-id=\"" + product.id + "\">\n            <div class=\"card-image\">\n              <figure class=\"image is-4by3\">\n                <img src=\"http://placehold.it/300x160\" alt=\"coding academy store\">\n              </figure>\n            </div>\n            <div class=\"card-content\">\n              <p class=\"title is-5\">" + product.title + "</p>\n              <div class=\"content\">\n                <p>" + product.description + "</p>\n                <span>Price: <b>" + product.price + "$</b></span>\n                <br>\n              </div>\n              <hr>\n              <div class=\"flex flex-end\">\n                <button class=\"button is-primary\" data-add>+</button>\n                <button class=\"button is-warning\" data-substract>-</button>\n              </div>\n            </div>\n          </div>\n  ";
};

var getCartTpl = function getCartTpl(item) {
  return "\n  <div class=\"card is-fullwidth\" data-id=\"" + item.id + "\">\n              <header class=\"card-header\">\n                <p class=\"card-header-title\">\n                  " + item.title + "\n                </p>\n              </header>\n              <div class=\"card-content\">\n                <div class=\"content\">\n                  Quantity: " + item.quantity + "\n                </div>\n              </div>\n              <footer class=\"card-footer\">\n                <a class=\"card-footer-item\" data-add>+</a>\n                <a class=\"card-footer-item\" data-subs>-</a>\n                <a class=\"card-footer-item\" data-clear>Clear</a>\n              </footer>\n            </div>\n  ";
};

var templates = {
  getProductTpl: getProductTpl,
  getCartTpl: getCartTpl
};

var generateProductsDOM = function generateProductsDOM(products) {
  var el = document.querySelector('.products');
  var fragment = document.createDocumentFragment();
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = products[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var product = _step.value;

      var template = document.createElement('template');
      template.innerHTML = templates.getProductTpl(product);
      fragment.appendChild(template.content);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  el.appendChild(fragment);
};

var generateCartItemsDOM = function generateCartItemsDOM(items) {
  var el = document.querySelector('.cart-items');
  jquery(el).empty();
  var fragment = document.createDocumentFragment();
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;

      var template = document.createElement('template');
      template.innerHTML = templates.getCartTpl(item);
      fragment.appendChild(template.content);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  el.appendChild(fragment);
};

var hideLoader = function hideLoader() {
  var el = document.querySelector('.loader');
  el.style.display = 'none';
};

var clickHandlers = function clickHandlers() {
  // Shop Buttons
  jquery('[data-add]').on('click', addToCart);
  jquery('[data-substract]').on('click', substractFromCartBtns);

  // Cart Buttons
  // We use Jquery style event delegation here, as those buttons 
  // are not in the dom yet, so we set a single click handler on the parent
  jquery('.cart-items').on('click', '[data-add]', addToCart);
  jquery('.cart-items').on('click', '[data-subs]', substractFromCartBtns);
  jquery('.cart-items').on('click', '[data-clear]', clearItem);
};

var addToCart = function addToCart() {
  var productId = jquery(this).closest('[data-id]').data('id');
  storeService.getProductById(productId).then(function (product) {
    var id = product.id,
        title = product.title,
        price = product.price;

    cartService.addToCart({
      id: id,
      title: title,
      price: price
    });

    renderCart();
  });
};

var substractFromCartBtns = function substractFromCartBtns() {
  var productId = jquery(this).closest('[data-id]').data('id');
  cartService.substractFromCart(productId);
  renderCart();
};

var clearItem = function clearItem() {
  var productId = jquery(this).closest('[data-id]').data('id');
  cartService.clearItem(productId);
  renderCart();
};

var renderCart = function renderCart() {
  generateCartItemsDOM(cartService.getCartItems());
  renderCartTotal();
  showCartStatus();
};

var renderCartTotal = function renderCartTotal() {
  var $el = jquery('[data-cart-total]');
  $el.text(cartService.getCartTotal());
};

var showCartStatus = function showCartStatus() {
  var el = document.querySelector('[data-cart-status]');
  if (cartService.getCartItems().length) {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
};

var renderStore = function renderStore(products) {
  generateProductsDOM(products);
  clickHandlers();
  hideLoader();
};

storeService.getProducts().then(renderStore);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMiLCIuLi9zcmMvc3RvcmUuc2VydmljZS5qcyIsIi4uL3NyYy9jYXJ0LnNlcnZpY2UuanMiLCIuLi9zcmMvdGVtcGxhdGVzLmpzIiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBqUXVlcnkgSmF2YVNjcmlwdCBMaWJyYXJ5IHYzLjEuMVxuICogaHR0cHM6Ly9qcXVlcnkuY29tL1xuICpcbiAqIEluY2x1ZGVzIFNpenpsZS5qc1xuICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDE2LTA5LTIyVDIyOjMwWlxuICovXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0aWYgKCB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdC8vIEZvciBDb21tb25KUyBhbmQgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgd2hlcmUgYSBwcm9wZXIgYHdpbmRvd2Bcblx0XHQvLyBpcyBwcmVzZW50LCBleGVjdXRlIHRoZSBmYWN0b3J5IGFuZCBnZXQgalF1ZXJ5LlxuXHRcdC8vIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3QgaGF2ZSBhIGB3aW5kb3dgIHdpdGggYSBgZG9jdW1lbnRgXG5cdFx0Ly8gKHN1Y2ggYXMgTm9kZS5qcyksIGV4cG9zZSBhIGZhY3RvcnkgYXMgbW9kdWxlLmV4cG9ydHMuXG5cdFx0Ly8gVGhpcyBhY2NlbnR1YXRlcyB0aGUgbmVlZCBmb3IgdGhlIGNyZWF0aW9uIG9mIGEgcmVhbCBgd2luZG93YC5cblx0XHQvLyBlLmcuIHZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpKHdpbmRvdyk7XG5cdFx0Ly8gU2VlIHRpY2tldCAjMTQ1NDkgZm9yIG1vcmUgaW5mby5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/XG5cdFx0XHRmYWN0b3J5KCBnbG9iYWwsIHRydWUgKSA6XG5cdFx0XHRmdW5jdGlvbiggdyApIHtcblx0XHRcdFx0aWYgKCAhdy5kb2N1bWVudCApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhY3RvcnkoIHcgKTtcblx0XHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeSggZ2xvYmFsICk7XG5cdH1cblxuLy8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcbn0gKSggdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCB3aW5kb3csIG5vR2xvYmFsICkge1xuXG4vLyBFZGdlIDw9IDEyIC0gMTMrLCBGaXJlZm94IDw9MTggLSA0NSssIElFIDEwIC0gMTEsIFNhZmFyaSA1LjEgLSA5KywgaU9TIDYgLSA5LjFcbi8vIHRocm93IGV4Y2VwdGlvbnMgd2hlbiBub24tc3RyaWN0IGNvZGUgKGUuZy4sIEFTUC5ORVQgNC41KSBhY2Nlc3NlcyBzdHJpY3QgbW9kZVxuLy8gYXJndW1lbnRzLmNhbGxlZS5jYWxsZXIgKHRyYWMtMTMzMzUpLiBCdXQgYXMgb2YgalF1ZXJ5IDMuMCAoMjAxNiksIHN0cmljdCBtb2RlIHNob3VsZCBiZSBjb21tb25cbi8vIGVub3VnaCB0aGF0IGFsbCBzdWNoIGF0dGVtcHRzIGFyZSBndWFyZGVkIGluIGEgdHJ5IGJsb2NrLlxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhcnIgPSBbXTtcblxudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbnZhciBzbGljZSA9IGFyci5zbGljZTtcblxudmFyIGNvbmNhdCA9IGFyci5jb25jYXQ7XG5cbnZhciBwdXNoID0gYXJyLnB1c2g7XG5cbnZhciBpbmRleE9mID0gYXJyLmluZGV4T2Y7XG5cbnZhciBjbGFzczJ0eXBlID0ge307XG5cbnZhciB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmc7XG5cbnZhciBoYXNPd24gPSBjbGFzczJ0eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgZm5Ub1N0cmluZyA9IGhhc093bi50b1N0cmluZztcblxudmFyIE9iamVjdEZ1bmN0aW9uU3RyaW5nID0gZm5Ub1N0cmluZy5jYWxsKCBPYmplY3QgKTtcblxudmFyIHN1cHBvcnQgPSB7fTtcblxuXG5cblx0ZnVuY3Rpb24gRE9NRXZhbCggY29kZSwgZG9jICkge1xuXHRcdGRvYyA9IGRvYyB8fCBkb2N1bWVudDtcblxuXHRcdHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCggXCJzY3JpcHRcIiApO1xuXG5cdFx0c2NyaXB0LnRleHQgPSBjb2RlO1xuXHRcdGRvYy5oZWFkLmFwcGVuZENoaWxkKCBzY3JpcHQgKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBzY3JpcHQgKTtcblx0fVxuLyogZ2xvYmFsIFN5bWJvbCAqL1xuLy8gRGVmaW5pbmcgdGhpcyBnbG9iYWwgaW4gLmVzbGludHJjLmpzb24gd291bGQgY3JlYXRlIGEgZGFuZ2VyIG9mIHVzaW5nIHRoZSBnbG9iYWxcbi8vIHVuZ3VhcmRlZCBpbiBhbm90aGVyIHBsYWNlLCBpdCBzZWVtcyBzYWZlciB0byBkZWZpbmUgZ2xvYmFsIG9ubHkgZm9yIHRoaXMgbW9kdWxlXG5cblxuXG52YXJcblx0dmVyc2lvbiA9IFwiMy4xLjFcIixcblxuXHQvLyBEZWZpbmUgYSBsb2NhbCBjb3B5IG9mIGpRdWVyeVxuXHRqUXVlcnkgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cblx0XHQvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcblx0XHQvLyBOZWVkIGluaXQgaWYgalF1ZXJ5IGlzIGNhbGxlZCAoanVzdCBhbGxvdyBlcnJvciB0byBiZSB0aHJvd24gaWYgbm90IGluY2x1ZGVkKVxuXHRcdHJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoIHNlbGVjdG9yLCBjb250ZXh0ICk7XG5cdH0sXG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5XG5cdC8vIE1ha2Ugc3VyZSB3ZSB0cmltIEJPTSBhbmQgTkJTUFxuXHRydHJpbSA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxcblxuXHQvLyBNYXRjaGVzIGRhc2hlZCBzdHJpbmcgZm9yIGNhbWVsaXppbmdcblx0cm1zUHJlZml4ID0gL14tbXMtLyxcblx0cmRhc2hBbHBoYSA9IC8tKFthLXpdKS9nLFxuXG5cdC8vIFVzZWQgYnkgalF1ZXJ5LmNhbWVsQ2FzZSBhcyBjYWxsYmFjayB0byByZXBsYWNlKClcblx0ZmNhbWVsQ2FzZSA9IGZ1bmN0aW9uKCBhbGwsIGxldHRlciApIHtcblx0XHRyZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG5cdH07XG5cbmpRdWVyeS5mbiA9IGpRdWVyeS5wcm90b3R5cGUgPSB7XG5cblx0Ly8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuXHRqcXVlcnk6IHZlcnNpb24sXG5cblx0Y29uc3RydWN0b3I6IGpRdWVyeSxcblxuXHQvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcblx0bGVuZ3RoOiAwLFxuXG5cdHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdH0sXG5cblx0Ly8gR2V0IHRoZSBOdGggZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldCBPUlxuXHQvLyBHZXQgdGhlIHdob2xlIG1hdGNoZWQgZWxlbWVudCBzZXQgYXMgYSBjbGVhbiBhcnJheVxuXHRnZXQ6IGZ1bmN0aW9uKCBudW0gKSB7XG5cblx0XHQvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG5cdFx0aWYgKCBudW0gPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuXHRcdHJldHVybiBudW0gPCAwID8gdGhpc1sgbnVtICsgdGhpcy5sZW5ndGggXSA6IHRoaXNbIG51bSBdO1xuXHR9LFxuXG5cdC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIHB1c2ggaXQgb250byB0aGUgc3RhY2tcblx0Ly8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG5cdHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xuXG5cdFx0Ly8gQnVpbGQgYSBuZXcgalF1ZXJ5IG1hdGNoZWQgZWxlbWVudCBzZXRcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKCB0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zICk7XG5cblx0XHQvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXHRcdHJldC5wcmV2T2JqZWN0ID0gdGhpcztcblxuXHRcdC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuXHRlYWNoOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYWNoKCB0aGlzLCBjYWxsYmFjayApO1xuXHR9LFxuXG5cdG1hcDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5Lm1hcCggdGhpcywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCggZWxlbSwgaSwgZWxlbSApO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdHNsaWNlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHNsaWNlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSApO1xuXHR9LFxuXG5cdGZpcnN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggMCApO1xuXHR9LFxuXG5cdGxhc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAtMSApO1xuXHR9LFxuXG5cdGVxOiBmdW5jdGlvbiggaSApIHtcblx0XHR2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRqID0gK2kgKyAoIGkgPCAwID8gbGVuIDogMCApO1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggaiA+PSAwICYmIGogPCBsZW4gPyBbIHRoaXNbIGogXSBdIDogW10gKTtcblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuXHR9LFxuXG5cdC8vIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cblx0Ly8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG5cdHB1c2g6IHB1c2gsXG5cdHNvcnQ6IGFyci5zb3J0LFxuXHRzcGxpY2U6IGFyci5zcGxpY2Vcbn07XG5cbmpRdWVyeS5leHRlbmQgPSBqUXVlcnkuZm4uZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIDAgXSB8fCB7fSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblxuXHRcdC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIGkgXSB8fCB7fTtcblx0XHRpKys7XG5cdH1cblxuXHQvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblx0aWYgKCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICFqUXVlcnkuaXNGdW5jdGlvbiggdGFyZ2V0ICkgKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHQvLyBFeHRlbmQgalF1ZXJ5IGl0c2VsZiBpZiBvbmx5IG9uZSBhcmd1bWVudCBpcyBwYXNzZWRcblx0aWYgKCBpID09PSBsZW5ndGggKSB7XG5cdFx0dGFyZ2V0ID0gdGhpcztcblx0XHRpLS07XG5cdH1cblxuXHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblxuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAoICggb3B0aW9ucyA9IGFyZ3VtZW50c1sgaSBdICkgIT0gbnVsbCApIHtcblxuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdFx0XHRzcmMgPSB0YXJnZXRbIG5hbWUgXTtcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbIG5hbWUgXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICggdGFyZ2V0ID09PSBjb3B5ICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdGlmICggZGVlcCAmJiBjb3B5ICYmICggalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvcHkgKSB8fFxuXHRcdFx0XHRcdCggY29weUlzQXJyYXkgPSBqUXVlcnkuaXNBcnJheSggY29weSApICkgKSApIHtcblxuXHRcdFx0XHRcdGlmICggY29weUlzQXJyYXkgKSB7XG5cdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgalF1ZXJ5LmlzQXJyYXkoIHNyYyApID8gc3JjIDogW107XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIHNyYyApID8gc3JjIDoge307XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0dGFyZ2V0WyBuYW1lIF0gPSBqUXVlcnkuZXh0ZW5kKCBkZWVwLCBjbG9uZSwgY29weSApO1xuXG5cdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0fSBlbHNlIGlmICggY29weSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0gY29weTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gVW5pcXVlIGZvciBlYWNoIGNvcHkgb2YgalF1ZXJ5IG9uIHRoZSBwYWdlXG5cdGV4cGFuZG86IFwialF1ZXJ5XCIgKyAoIHZlcnNpb24gKyBNYXRoLnJhbmRvbSgpICkucmVwbGFjZSggL1xcRC9nLCBcIlwiICksXG5cblx0Ly8gQXNzdW1lIGpRdWVyeSBpcyByZWFkeSB3aXRob3V0IHRoZSByZWFkeSBtb2R1bGVcblx0aXNSZWFkeTogdHJ1ZSxcblxuXHRlcnJvcjogZnVuY3Rpb24oIG1zZyApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIG1zZyApO1xuXHR9LFxuXG5cdG5vb3A6IGZ1bmN0aW9uKCkge30sXG5cblx0aXNGdW5jdGlvbjogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRyZXR1cm4galF1ZXJ5LnR5cGUoIG9iaiApID09PSBcImZ1bmN0aW9uXCI7XG5cdH0sXG5cblx0aXNBcnJheTogQXJyYXkuaXNBcnJheSxcblxuXHRpc1dpbmRvdzogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRyZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xuXHR9LFxuXG5cdGlzTnVtZXJpYzogZnVuY3Rpb24oIG9iaiApIHtcblxuXHRcdC8vIEFzIG9mIGpRdWVyeSAzLjAsIGlzTnVtZXJpYyBpcyBsaW1pdGVkIHRvXG5cdFx0Ly8gc3RyaW5ncyBhbmQgbnVtYmVycyAocHJpbWl0aXZlcyBvciBvYmplY3RzKVxuXHRcdC8vIHRoYXQgY2FuIGJlIGNvZXJjZWQgdG8gZmluaXRlIG51bWJlcnMgKGdoLTI2NjIpXG5cdFx0dmFyIHR5cGUgPSBqUXVlcnkudHlwZSggb2JqICk7XG5cdFx0cmV0dXJuICggdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlID09PSBcInN0cmluZ1wiICkgJiZcblxuXHRcdFx0Ly8gcGFyc2VGbG9hdCBOYU5zIG51bWVyaWMtY2FzdCBmYWxzZSBwb3NpdGl2ZXMgKFwiXCIpXG5cdFx0XHQvLyAuLi5idXQgbWlzaW50ZXJwcmV0cyBsZWFkaW5nLW51bWJlciBzdHJpbmdzLCBwYXJ0aWN1bGFybHkgaGV4IGxpdGVyYWxzIChcIjB4Li4uXCIpXG5cdFx0XHQvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cblx0XHRcdCFpc05hTiggb2JqIC0gcGFyc2VGbG9hdCggb2JqICkgKTtcblx0fSxcblxuXHRpc1BsYWluT2JqZWN0OiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHZhciBwcm90bywgQ3RvcjtcblxuXHRcdC8vIERldGVjdCBvYnZpb3VzIG5lZ2F0aXZlc1xuXHRcdC8vIFVzZSB0b1N0cmluZyBpbnN0ZWFkIG9mIGpRdWVyeS50eXBlIHRvIGNhdGNoIGhvc3Qgb2JqZWN0c1xuXHRcdGlmICggIW9iaiB8fCB0b1N0cmluZy5jYWxsKCBvYmogKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRwcm90byA9IGdldFByb3RvKCBvYmogKTtcblxuXHRcdC8vIE9iamVjdHMgd2l0aCBubyBwcm90b3R5cGUgKGUuZy4sIGBPYmplY3QuY3JlYXRlKCBudWxsIClgKSBhcmUgcGxhaW5cblx0XHRpZiAoICFwcm90byApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIE9iamVjdHMgd2l0aCBwcm90b3R5cGUgYXJlIHBsYWluIGlmZiB0aGV5IHdlcmUgY29uc3RydWN0ZWQgYnkgYSBnbG9iYWwgT2JqZWN0IGZ1bmN0aW9uXG5cdFx0Q3RvciA9IGhhc093bi5jYWxsKCBwcm90bywgXCJjb25zdHJ1Y3RvclwiICkgJiYgcHJvdG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIHR5cGVvZiBDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgZm5Ub1N0cmluZy5jYWxsKCBDdG9yICkgPT09IE9iamVjdEZ1bmN0aW9uU3RyaW5nO1xuXHR9LFxuXG5cdGlzRW1wdHlPYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZXNsaW50L2VzbGludC9pc3N1ZXMvNjEyNVxuXHRcdHZhciBuYW1lO1xuXG5cdFx0Zm9yICggbmFtZSBpbiBvYmogKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdHR5cGU6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0aWYgKCBvYmogPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBvYmogKyBcIlwiO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seSAoZnVuY3Rpb25pc2ggUmVnRXhwKVxuXHRcdHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiA/XG5cdFx0XHRjbGFzczJ0eXBlWyB0b1N0cmluZy5jYWxsKCBvYmogKSBdIHx8IFwib2JqZWN0XCIgOlxuXHRcdFx0dHlwZW9mIG9iajtcblx0fSxcblxuXHQvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBnbG9iYWwgY29udGV4dFxuXHRnbG9iYWxFdmFsOiBmdW5jdGlvbiggY29kZSApIHtcblx0XHRET01FdmFsKCBjb2RlICk7XG5cdH0sXG5cblx0Ly8gQ29udmVydCBkYXNoZWQgdG8gY2FtZWxDYXNlOyB1c2VkIGJ5IHRoZSBjc3MgYW5kIGRhdGEgbW9kdWxlc1xuXHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDEzXG5cdC8vIE1pY3Jvc29mdCBmb3Jnb3QgdG8gaHVtcCB0aGVpciB2ZW5kb3IgcHJlZml4ICgjOTU3Milcblx0Y2FtZWxDYXNlOiBmdW5jdGlvbiggc3RyaW5nICkge1xuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSggcm1zUHJlZml4LCBcIm1zLVwiICkucmVwbGFjZSggcmRhc2hBbHBoYSwgZmNhbWVsQ2FzZSApO1xuXHR9LFxuXG5cdG5vZGVOYW1lOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRyZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0fSxcblxuXHRlYWNoOiBmdW5jdGlvbiggb2JqLCBjYWxsYmFjayApIHtcblx0XHR2YXIgbGVuZ3RoLCBpID0gMDtcblxuXHRcdGlmICggaXNBcnJheUxpa2UoIG9iaiApICkge1xuXHRcdFx0bGVuZ3RoID0gb2JqLmxlbmd0aDtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKCBpIGluIG9iaiApIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjay5jYWxsKCBvYmpbIGkgXSwgaSwgb2JqWyBpIF0gKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9LFxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuXHR0cmltOiBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRyZXR1cm4gdGV4dCA9PSBudWxsID9cblx0XHRcdFwiXCIgOlxuXHRcdFx0KCB0ZXh0ICsgXCJcIiApLnJlcGxhY2UoIHJ0cmltLCBcIlwiICk7XG5cdH0sXG5cblx0Ly8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYWtlQXJyYXk6IGZ1bmN0aW9uKCBhcnIsIHJlc3VsdHMgKSB7XG5cdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRpZiAoIGFyciAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBpc0FycmF5TGlrZSggT2JqZWN0KCBhcnIgKSApICkge1xuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHJldCxcblx0XHRcdFx0XHR0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHRbIGFyciBdIDogYXJyXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdXNoLmNhbGwoIHJldCwgYXJyICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHRpbkFycmF5OiBmdW5jdGlvbiggZWxlbSwgYXJyLCBpICkge1xuXHRcdHJldHVybiBhcnIgPT0gbnVsbCA/IC0xIDogaW5kZXhPZi5jYWxsKCBhcnIsIGVsZW0sIGkgKTtcblx0fSxcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRtZXJnZTogZnVuY3Rpb24oIGZpcnN0LCBzZWNvbmQgKSB7XG5cdFx0dmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxuXHRcdFx0aiA9IDAsXG5cdFx0XHRpID0gZmlyc3QubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XG5cdFx0XHRmaXJzdFsgaSsrIF0gPSBzZWNvbmRbIGogXTtcblx0XHR9XG5cblx0XHRmaXJzdC5sZW5ndGggPSBpO1xuXG5cdFx0cmV0dXJuIGZpcnN0O1xuXHR9LFxuXG5cdGdyZXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGludmVydCApIHtcblx0XHR2YXIgY2FsbGJhY2tJbnZlcnNlLFxuXHRcdFx0bWF0Y2hlcyA9IFtdLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGgsXG5cdFx0XHRjYWxsYmFja0V4cGVjdCA9ICFpbnZlcnQ7XG5cblx0XHQvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgb25seSBzYXZpbmcgdGhlIGl0ZW1zXG5cdFx0Ly8gdGhhdCBwYXNzIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb25cblx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdGNhbGxiYWNrSW52ZXJzZSA9ICFjYWxsYmFjayggZWxlbXNbIGkgXSwgaSApO1xuXHRcdFx0aWYgKCBjYWxsYmFja0ludmVyc2UgIT09IGNhbGxiYWNrRXhwZWN0ICkge1xuXHRcdFx0XHRtYXRjaGVzLnB1c2goIGVsZW1zWyBpIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWF0Y2hlcztcblx0fSxcblxuXHQvLyBhcmcgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcblx0bWFwOiBmdW5jdGlvbiggZWxlbXMsIGNhbGxiYWNrLCBhcmcgKSB7XG5cdFx0dmFyIGxlbmd0aCwgdmFsdWUsXG5cdFx0XHRpID0gMCxcblx0XHRcdHJldCA9IFtdO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIHRyYW5zbGF0aW5nIGVhY2ggb2YgdGhlIGl0ZW1zIHRvIHRoZWlyIG5ldyB2YWx1ZXNcblx0XHRpZiAoIGlzQXJyYXlMaWtlKCBlbGVtcyApICkge1xuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soIGVsZW1zWyBpIF0sIGksIGFyZyApO1xuXG5cdFx0XHRcdGlmICggdmFsdWUgIT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXQucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBldmVyeSBrZXkgb24gdGhlIG9iamVjdCxcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICggaSBpbiBlbGVtcyApIHtcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cblx0XHRcdFx0aWYgKCB2YWx1ZSAhPSBudWxsICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuXHRcdHJldHVybiBjb25jYXQuYXBwbHkoIFtdLCByZXQgKTtcblx0fSxcblxuXHQvLyBBIGdsb2JhbCBHVUlEIGNvdW50ZXIgZm9yIG9iamVjdHNcblx0Z3VpZDogMSxcblxuXHQvLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0LCBvcHRpb25hbGx5IHBhcnRpYWxseSBhcHBseWluZyBhbnlcblx0Ly8gYXJndW1lbnRzLlxuXHRwcm94eTogZnVuY3Rpb24oIGZuLCBjb250ZXh0ICkge1xuXHRcdHZhciB0bXAsIGFyZ3MsIHByb3h5O1xuXG5cdFx0aWYgKCB0eXBlb2YgY29udGV4dCA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHRtcCA9IGZuWyBjb250ZXh0IF07XG5cdFx0XHRjb250ZXh0ID0gZm47XG5cdFx0XHRmbiA9IHRtcDtcblx0XHR9XG5cblx0XHQvLyBRdWljayBjaGVjayB0byBkZXRlcm1pbmUgaWYgdGFyZ2V0IGlzIGNhbGxhYmxlLCBpbiB0aGUgc3BlY1xuXHRcdC8vIHRoaXMgdGhyb3dzIGEgVHlwZUVycm9yLCBidXQgd2Ugd2lsbCBqdXN0IHJldHVybiB1bmRlZmluZWQuXG5cdFx0aWYgKCAhalF1ZXJ5LmlzRnVuY3Rpb24oIGZuICkgKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8vIFNpbXVsYXRlZCBiaW5kXG5cdFx0YXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMiApO1xuXHRcdHByb3h5ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZm4uYXBwbHkoIGNvbnRleHQgfHwgdGhpcywgYXJncy5jb25jYXQoIHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApICkgKTtcblx0XHR9O1xuXG5cdFx0Ly8gU2V0IHRoZSBndWlkIG9mIHVuaXF1ZSBoYW5kbGVyIHRvIHRoZSBzYW1lIG9mIG9yaWdpbmFsIGhhbmRsZXIsIHNvIGl0IGNhbiBiZSByZW1vdmVkXG5cdFx0cHJveHkuZ3VpZCA9IGZuLmd1aWQgPSBmbi5ndWlkIHx8IGpRdWVyeS5ndWlkKys7XG5cblx0XHRyZXR1cm4gcHJveHk7XG5cdH0sXG5cblx0bm93OiBEYXRlLm5vdyxcblxuXHQvLyBqUXVlcnkuc3VwcG9ydCBpcyBub3QgdXNlZCBpbiBDb3JlIGJ1dCBvdGhlciBwcm9qZWN0cyBhdHRhY2ggdGhlaXJcblx0Ly8gcHJvcGVydGllcyB0byBpdCBzbyBpdCBuZWVkcyB0byBleGlzdC5cblx0c3VwcG9ydDogc3VwcG9ydFxufSApO1xuXG5pZiAoIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0alF1ZXJ5LmZuWyBTeW1ib2wuaXRlcmF0b3IgXSA9IGFyclsgU3ltYm9sLml0ZXJhdG9yIF07XG59XG5cbi8vIFBvcHVsYXRlIHRoZSBjbGFzczJ0eXBlIG1hcFxualF1ZXJ5LmVhY2goIFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdCggXCIgXCIgKSxcbmZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHRjbGFzczJ0eXBlWyBcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIgXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbn0gKTtcblxuZnVuY3Rpb24gaXNBcnJheUxpa2UoIG9iaiApIHtcblxuXHQvLyBTdXBwb3J0OiByZWFsIGlPUyA4LjIgb25seSAobm90IHJlcHJvZHVjaWJsZSBpbiBzaW11bGF0b3IpXG5cdC8vIGBpbmAgY2hlY2sgdXNlZCB0byBwcmV2ZW50IEpJVCBlcnJvciAoZ2gtMjE0NSlcblx0Ly8gaGFzT3duIGlzbid0IHVzZWQgaGVyZSBkdWUgdG8gZmFsc2UgbmVnYXRpdmVzXG5cdC8vIHJlZ2FyZGluZyBOb2RlbGlzdCBsZW5ndGggaW4gSUVcblx0dmFyIGxlbmd0aCA9ICEhb2JqICYmIFwibGVuZ3RoXCIgaW4gb2JqICYmIG9iai5sZW5ndGgsXG5cdFx0dHlwZSA9IGpRdWVyeS50eXBlKCBvYmogKTtcblxuXHRpZiAoIHR5cGUgPT09IFwiZnVuY3Rpb25cIiB8fCBqUXVlcnkuaXNXaW5kb3coIG9iaiApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0eXBlID09PSBcImFycmF5XCIgfHwgbGVuZ3RoID09PSAwIHx8XG5cdFx0dHlwZW9mIGxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJiBsZW5ndGggPiAwICYmICggbGVuZ3RoIC0gMSApIGluIG9iajtcbn1cbnZhciBTaXp6bGUgPVxuLyohXG4gKiBTaXp6bGUgQ1NTIFNlbGVjdG9yIEVuZ2luZSB2Mi4zLjNcbiAqIGh0dHBzOi8vc2l6emxlanMuY29tL1xuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDE2LTA4LTA4XG4gKi9cbihmdW5jdGlvbiggd2luZG93ICkge1xuXG52YXIgaSxcblx0c3VwcG9ydCxcblx0RXhwcixcblx0Z2V0VGV4dCxcblx0aXNYTUwsXG5cdHRva2VuaXplLFxuXHRjb21waWxlLFxuXHRzZWxlY3QsXG5cdG91dGVybW9zdENvbnRleHQsXG5cdHNvcnRJbnB1dCxcblx0aGFzRHVwbGljYXRlLFxuXG5cdC8vIExvY2FsIGRvY3VtZW50IHZhcnNcblx0c2V0RG9jdW1lbnQsXG5cdGRvY3VtZW50LFxuXHRkb2NFbGVtLFxuXHRkb2N1bWVudElzSFRNTCxcblx0cmJ1Z2d5UVNBLFxuXHRyYnVnZ3lNYXRjaGVzLFxuXHRtYXRjaGVzLFxuXHRjb250YWlucyxcblxuXHQvLyBJbnN0YW5jZS1zcGVjaWZpYyBkYXRhXG5cdGV4cGFuZG8gPSBcInNpenpsZVwiICsgMSAqIG5ldyBEYXRlKCksXG5cdHByZWZlcnJlZERvYyA9IHdpbmRvdy5kb2N1bWVudCxcblx0ZGlycnVucyA9IDAsXG5cdGRvbmUgPSAwLFxuXHRjbGFzc0NhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0dG9rZW5DYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdGNvbXBpbGVyQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRzb3J0T3JkZXIgPSBmdW5jdGlvbiggYSwgYiApIHtcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gMDtcblx0fSxcblxuXHQvLyBJbnN0YW5jZSBtZXRob2RzXG5cdGhhc093biA9ICh7fSkuaGFzT3duUHJvcGVydHksXG5cdGFyciA9IFtdLFxuXHRwb3AgPSBhcnIucG9wLFxuXHRwdXNoX25hdGl2ZSA9IGFyci5wdXNoLFxuXHRwdXNoID0gYXJyLnB1c2gsXG5cdHNsaWNlID0gYXJyLnNsaWNlLFxuXHQvLyBVc2UgYSBzdHJpcHBlZC1kb3duIGluZGV4T2YgYXMgaXQncyBmYXN0ZXIgdGhhbiBuYXRpdmVcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL3Rob3ItaW5kZXhvZi12cy1mb3IvNVxuXHRpbmRleE9mID0gZnVuY3Rpb24oIGxpc3QsIGVsZW0gKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0bGVuID0gbGlzdC5sZW5ndGg7XG5cdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRpZiAoIGxpc3RbaV0gPT09IGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH0sXG5cblx0Ym9vbGVhbnMgPSBcImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsXG5cblx0Ly8gUmVndWxhciBleHByZXNzaW9uc1xuXG5cdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc2VsZWN0b3JzLyN3aGl0ZXNwYWNlXG5cdHdoaXRlc3BhY2UgPSBcIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsXG5cblx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI3ZhbHVlLWRlZi1pZGVudGlmaWVyXG5cdGlkZW50aWZpZXIgPSBcIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsXG5cblx0Ly8gQXR0cmlidXRlIHNlbGVjdG9yczogaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXG5cdGF0dHJpYnV0ZXMgPSBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFwiICsgaWRlbnRpZmllciArIFwiKSg/OlwiICsgd2hpdGVzcGFjZSArXG5cdFx0Ly8gT3BlcmF0b3IgKGNhcHR1cmUgMilcblx0XHRcIiooWypeJHwhfl0/PSlcIiArIHdoaXRlc3BhY2UgK1xuXHRcdC8vIFwiQXR0cmlidXRlIHZhbHVlcyBtdXN0IGJlIENTUyBpZGVudGlmaWVycyBbY2FwdHVyZSA1XSBvciBzdHJpbmdzIFtjYXB0dXJlIDMgb3IgY2FwdHVyZSA0XVwiXG5cdFx0XCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIiArIGlkZW50aWZpZXIgKyBcIikpfClcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFwiKlxcXFxdXCIsXG5cblx0cHNldWRvcyA9IFwiOihcIiArIGlkZW50aWZpZXIgKyBcIikoPzpcXFxcKChcIiArXG5cdFx0Ly8gVG8gcmVkdWNlIHRoZSBudW1iZXIgb2Ygc2VsZWN0b3JzIG5lZWRpbmcgdG9rZW5pemUgaW4gdGhlIHByZUZpbHRlciwgcHJlZmVyIGFyZ3VtZW50czpcblx0XHQvLyAxLiBxdW90ZWQgKGNhcHR1cmUgMzsgY2FwdHVyZSA0IG9yIGNhcHR1cmUgNSlcblx0XHRcIignKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfFwiICtcblx0XHQvLyAyLiBzaW1wbGUgKGNhcHR1cmUgNilcblx0XHRcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIiArIGF0dHJpYnV0ZXMgKyBcIikqKXxcIiArXG5cdFx0Ly8gMy4gYW55dGhpbmcgZWxzZSAoY2FwdHVyZSAyKVxuXHRcdFwiLipcIiArXG5cdFx0XCIpXFxcXCl8KVwiLFxuXG5cdC8vIExlYWRpbmcgYW5kIG5vbi1lc2NhcGVkIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGNhcHR1cmluZyBzb21lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgcHJlY2VkaW5nIHRoZSBsYXR0ZXJcblx0cndoaXRlc3BhY2UgPSBuZXcgUmVnRXhwKCB3aGl0ZXNwYWNlICsgXCIrXCIsIFwiZ1wiICksXG5cdHJ0cmltID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiICsgd2hpdGVzcGFjZSArIFwiKyRcIiwgXCJnXCIgKSxcblxuXHRyY29tbWEgPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiosXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIgKSxcblx0cmNvbWJpbmF0b3JzID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFs+K35dfFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgd2hpdGVzcGFjZSArIFwiKlwiICksXG5cblx0cmF0dHJpYnV0ZVF1b3RlcyA9IG5ldyBSZWdFeHAoIFwiPVwiICsgd2hpdGVzcGFjZSArIFwiKihbXlxcXFxdJ1xcXCJdKj8pXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXF1cIiwgXCJnXCIgKSxcblxuXHRycHNldWRvID0gbmV3IFJlZ0V4cCggcHNldWRvcyApLFxuXHRyaWRlbnRpZmllciA9IG5ldyBSZWdFeHAoIFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiICksXG5cblx0bWF0Y2hFeHByID0ge1xuXHRcdFwiSURcIjogbmV3IFJlZ0V4cCggXCJeIyhcIiArIGlkZW50aWZpZXIgKyBcIilcIiApLFxuXHRcdFwiQ0xBU1NcIjogbmV3IFJlZ0V4cCggXCJeXFxcXC4oXCIgKyBpZGVudGlmaWVyICsgXCIpXCIgKSxcblx0XHRcIlRBR1wiOiBuZXcgUmVnRXhwKCBcIl4oXCIgKyBpZGVudGlmaWVyICsgXCJ8WypdKVwiICksXG5cdFx0XCJBVFRSXCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgYXR0cmlidXRlcyApLFxuXHRcdFwiUFNFVURPXCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgcHNldWRvcyApLFxuXHRcdFwiQ0hJTERcIjogbmV3IFJlZ0V4cCggXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiICsgd2hpdGVzcGFjZSArXG5cdFx0XHRcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiICsgd2hpdGVzcGFjZSArIFwiKig/OihbKy1dfClcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqKFxcXFxkKyl8KSlcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpXCIsIFwiaVwiICksXG5cdFx0XCJib29sXCI6IG5ldyBSZWdFeHAoIFwiXig/OlwiICsgYm9vbGVhbnMgKyBcIikkXCIsIFwiaVwiICksXG5cdFx0Ly8gRm9yIHVzZSBpbiBsaWJyYXJpZXMgaW1wbGVtZW50aW5nIC5pcygpXG5cdFx0Ly8gV2UgdXNlIHRoaXMgZm9yIFBPUyBtYXRjaGluZyBpbiBgc2VsZWN0YFxuXHRcdFwibmVlZHNDb250ZXh0XCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArXG5cdFx0XHR3aGl0ZXNwYWNlICsgXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfCkoPz1bXi1dfCQpXCIsIFwiaVwiIClcblx0fSxcblxuXHRyaW5wdXRzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcblx0cmhlYWRlciA9IC9eaFxcZCQvaSxcblxuXHRybmF0aXZlID0gL15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxcblxuXHQvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcblx0cnF1aWNrRXhwciA9IC9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLFxuXG5cdHJzaWJsaW5nID0gL1srfl0vLFxuXG5cdC8vIENTUyBlc2NhcGVzXG5cdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCNlc2NhcGVkLWNoYXJhY3RlcnNcblx0cnVuZXNjYXBlID0gbmV3IFJlZ0V4cCggXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIiArIHdoaXRlc3BhY2UgKyBcIj98KFwiICsgd2hpdGVzcGFjZSArIFwiKXwuKVwiLCBcImlnXCIgKSxcblx0ZnVuZXNjYXBlID0gZnVuY3Rpb24oIF8sIGVzY2FwZWQsIGVzY2FwZWRXaGl0ZXNwYWNlICkge1xuXHRcdHZhciBoaWdoID0gXCIweFwiICsgZXNjYXBlZCAtIDB4MTAwMDA7XG5cdFx0Ly8gTmFOIG1lYW5zIG5vbi1jb2RlcG9pbnRcblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94PDI0XG5cdFx0Ly8gV29ya2Fyb3VuZCBlcnJvbmVvdXMgbnVtZXJpYyBpbnRlcnByZXRhdGlvbiBvZiArXCIweFwiXG5cdFx0cmV0dXJuIGhpZ2ggIT09IGhpZ2ggfHwgZXNjYXBlZFdoaXRlc3BhY2UgP1xuXHRcdFx0ZXNjYXBlZCA6XG5cdFx0XHRoaWdoIDwgMCA/XG5cdFx0XHRcdC8vIEJNUCBjb2RlcG9pbnRcblx0XHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCArIDB4MTAwMDAgKSA6XG5cdFx0XHRcdC8vIFN1cHBsZW1lbnRhbCBQbGFuZSBjb2RlcG9pbnQgKHN1cnJvZ2F0ZSBwYWlyKVxuXHRcdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDAgKTtcblx0fSxcblxuXHQvLyBDU1Mgc3RyaW5nL2lkZW50aWZpZXIgc2VyaWFsaXphdGlvblxuXHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI2NvbW1vbi1zZXJpYWxpemluZy1pZGlvbXNcblx0cmNzc2VzY2FwZSA9IC8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLFxuXHRmY3NzZXNjYXBlID0gZnVuY3Rpb24oIGNoLCBhc0NvZGVQb2ludCApIHtcblx0XHRpZiAoIGFzQ29kZVBvaW50ICkge1xuXG5cdFx0XHQvLyBVKzAwMDAgTlVMTCBiZWNvbWVzIFUrRkZGRCBSRVBMQUNFTUVOVCBDSEFSQUNURVJcblx0XHRcdGlmICggY2ggPT09IFwiXFwwXCIgKSB7XG5cdFx0XHRcdHJldHVybiBcIlxcdUZGRkRcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCAoZGVwZW5kZW50IHVwb24gcG9zaXRpb24pIG51bWJlcnMgZ2V0IGVzY2FwZWQgYXMgY29kZSBwb2ludHNcblx0XHRcdHJldHVybiBjaC5zbGljZSggMCwgLTEgKSArIFwiXFxcXFwiICsgY2guY2hhckNvZGVBdCggY2gubGVuZ3RoIC0gMSApLnRvU3RyaW5nKCAxNiApICsgXCIgXCI7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXIgcG90ZW50aWFsbHktc3BlY2lhbCBBU0NJSSBjaGFyYWN0ZXJzIGdldCBiYWNrc2xhc2gtZXNjYXBlZFxuXHRcdHJldHVybiBcIlxcXFxcIiArIGNoO1xuXHR9LFxuXG5cdC8vIFVzZWQgZm9yIGlmcmFtZXNcblx0Ly8gU2VlIHNldERvY3VtZW50KClcblx0Ly8gUmVtb3ZpbmcgdGhlIGZ1bmN0aW9uIHdyYXBwZXIgY2F1c2VzIGEgXCJQZXJtaXNzaW9uIERlbmllZFwiXG5cdC8vIGVycm9yIGluIElFXG5cdHVubG9hZEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcblx0XHRzZXREb2N1bWVudCgpO1xuXHR9LFxuXG5cdGRpc2FibGVkQW5jZXN0b3IgPSBhZGRDb21iaW5hdG9yKFxuXHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IHRydWUgJiYgKFwiZm9ybVwiIGluIGVsZW0gfHwgXCJsYWJlbFwiIGluIGVsZW0pO1xuXHRcdH0sXG5cdFx0eyBkaXI6IFwicGFyZW50Tm9kZVwiLCBuZXh0OiBcImxlZ2VuZFwiIH1cblx0KTtcblxuLy8gT3B0aW1pemUgZm9yIHB1c2guYXBwbHkoIF8sIE5vZGVMaXN0IClcbnRyeSB7XG5cdHB1c2guYXBwbHkoXG5cdFx0KGFyciA9IHNsaWNlLmNhbGwoIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzICkpLFxuXHRcdHByZWZlcnJlZERvYy5jaGlsZE5vZGVzXG5cdCk7XG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NC4wXG5cdC8vIERldGVjdCBzaWxlbnRseSBmYWlsaW5nIHB1c2guYXBwbHlcblx0YXJyWyBwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGggXS5ub2RlVHlwZTtcbn0gY2F0Y2ggKCBlICkge1xuXHRwdXNoID0geyBhcHBseTogYXJyLmxlbmd0aCA/XG5cblx0XHQvLyBMZXZlcmFnZSBzbGljZSBpZiBwb3NzaWJsZVxuXHRcdGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcblx0XHRcdHB1c2hfbmF0aXZlLmFwcGx5KCB0YXJnZXQsIHNsaWNlLmNhbGwoZWxzKSApO1xuXHRcdH0gOlxuXG5cdFx0Ly8gU3VwcG9ydDogSUU8OVxuXHRcdC8vIE90aGVyd2lzZSBhcHBlbmQgZGlyZWN0bHlcblx0XHRmdW5jdGlvbiggdGFyZ2V0LCBlbHMgKSB7XG5cdFx0XHR2YXIgaiA9IHRhcmdldC5sZW5ndGgsXG5cdFx0XHRcdGkgPSAwO1xuXHRcdFx0Ly8gQ2FuJ3QgdHJ1c3QgTm9kZUxpc3QubGVuZ3RoXG5cdFx0XHR3aGlsZSAoICh0YXJnZXRbaisrXSA9IGVsc1tpKytdKSApIHt9XG5cdFx0XHR0YXJnZXQubGVuZ3RoID0gaiAtIDE7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBTaXp6bGUoIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuXHR2YXIgbSwgaSwgZWxlbSwgbmlkLCBtYXRjaCwgZ3JvdXBzLCBuZXdTZWxlY3Rvcixcblx0XHRuZXdDb250ZXh0ID0gY29udGV4dCAmJiBjb250ZXh0Lm93bmVyRG9jdW1lbnQsXG5cblx0XHQvLyBub2RlVHlwZSBkZWZhdWx0cyB0byA5LCBzaW5jZSBjb250ZXh0IGRlZmF1bHRzIHRvIGRvY3VtZW50XG5cdFx0bm9kZVR5cGUgPSBjb250ZXh0ID8gY29udGV4dC5ub2RlVHlwZSA6IDk7XG5cblx0cmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cblx0Ly8gUmV0dXJuIGVhcmx5IGZyb20gY2FsbHMgd2l0aCBpbnZhbGlkIHNlbGVjdG9yIG9yIGNvbnRleHRcblx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgfHwgIXNlbGVjdG9yIHx8XG5cdFx0bm9kZVR5cGUgIT09IDEgJiYgbm9kZVR5cGUgIT09IDkgJiYgbm9kZVR5cGUgIT09IDExICkge1xuXG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH1cblxuXHQvLyBUcnkgdG8gc2hvcnRjdXQgZmluZCBvcGVyYXRpb25zIChhcyBvcHBvc2VkIHRvIGZpbHRlcnMpIGluIEhUTUwgZG9jdW1lbnRzXG5cdGlmICggIXNlZWQgKSB7XG5cblx0XHRpZiAoICggY29udGV4dCA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogcHJlZmVycmVkRG9jICkgIT09IGRvY3VtZW50ICkge1xuXHRcdFx0c2V0RG9jdW1lbnQoIGNvbnRleHQgKTtcblx0XHR9XG5cdFx0Y29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG5cblx0XHRpZiAoIGRvY3VtZW50SXNIVE1MICkge1xuXG5cdFx0XHQvLyBJZiB0aGUgc2VsZWN0b3IgaXMgc3VmZmljaWVudGx5IHNpbXBsZSwgdHJ5IHVzaW5nIGEgXCJnZXQqQnkqXCIgRE9NIG1ldGhvZFxuXHRcdFx0Ly8gKGV4Y2VwdGluZyBEb2N1bWVudEZyYWdtZW50IGNvbnRleHQsIHdoZXJlIHRoZSBtZXRob2RzIGRvbid0IGV4aXN0KVxuXHRcdFx0aWYgKCBub2RlVHlwZSAhPT0gMTEgJiYgKG1hdGNoID0gcnF1aWNrRXhwci5leGVjKCBzZWxlY3RvciApKSApIHtcblxuXHRcdFx0XHQvLyBJRCBzZWxlY3RvclxuXHRcdFx0XHRpZiAoIChtID0gbWF0Y2hbMV0pICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9jdW1lbnQgY29udGV4dFxuXHRcdFx0XHRcdGlmICggbm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIChlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApKSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSwgT3BlcmEsIFdlYmtpdFxuXHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBpZGVudGlmeSB2ZXJzaW9uc1xuXHRcdFx0XHRcdFx0XHQvLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG5cdFx0XHRcdFx0XHRcdGlmICggZWxlbS5pZCA9PT0gbSApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBFbGVtZW50IGNvbnRleHRcblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSwgT3BlcmEsIFdlYmtpdFxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogaWRlbnRpZnkgdmVyc2lvbnNcblx0XHRcdFx0XHRcdC8vIGdldEVsZW1lbnRCeUlkIGNhbiBtYXRjaCBlbGVtZW50cyBieSBuYW1lIGluc3RlYWQgb2YgSURcblx0XHRcdFx0XHRcdGlmICggbmV3Q29udGV4dCAmJiAoZWxlbSA9IG5ld0NvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIG0gKSkgJiZcblx0XHRcdFx0XHRcdFx0Y29udGFpbnMoIGNvbnRleHQsIGVsZW0gKSAmJlxuXHRcdFx0XHRcdFx0XHRlbGVtLmlkID09PSBtICkge1xuXG5cdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHlwZSBzZWxlY3RvclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBtYXRjaFsyXSApIHtcblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCBzZWxlY3RvciApICk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cblx0XHRcdFx0Ly8gQ2xhc3Mgc2VsZWN0b3Jcblx0XHRcdFx0fSBlbHNlIGlmICggKG0gPSBtYXRjaFszXSkgJiYgc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmXG5cdFx0XHRcdFx0Y29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICkge1xuXG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBtICkgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUYWtlIGFkdmFudGFnZSBvZiBxdWVyeVNlbGVjdG9yQWxsXG5cdFx0XHRpZiAoIHN1cHBvcnQucXNhICYmXG5cdFx0XHRcdCFjb21waWxlckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF0gJiZcblx0XHRcdFx0KCFyYnVnZ3lRU0EgfHwgIXJidWdneVFTQS50ZXN0KCBzZWxlY3RvciApKSApIHtcblxuXHRcdFx0XHRpZiAoIG5vZGVUeXBlICE9PSAxICkge1xuXHRcdFx0XHRcdG5ld0NvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0XHRcdG5ld1NlbGVjdG9yID0gc2VsZWN0b3I7XG5cblx0XHRcdFx0Ly8gcVNBIGxvb2tzIG91dHNpZGUgRWxlbWVudCBjb250ZXh0LCB3aGljaCBpcyBub3Qgd2hhdCB3ZSB3YW50XG5cdFx0XHRcdC8vIFRoYW5rcyB0byBBbmRyZXcgRHVwb250IGZvciB0aGlzIHdvcmthcm91bmQgdGVjaG5pcXVlXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OFxuXHRcdFx0XHQvLyBFeGNsdWRlIG9iamVjdCBlbGVtZW50c1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBjb250ZXh0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHRcdFx0XHQvLyBDYXB0dXJlIHRoZSBjb250ZXh0IElELCBzZXR0aW5nIGl0IGZpcnN0IGlmIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdGlmICggKG5pZCA9IGNvbnRleHQuZ2V0QXR0cmlidXRlKCBcImlkXCIgKSkgKSB7XG5cdFx0XHRcdFx0XHRuaWQgPSBuaWQucmVwbGFjZSggcmNzc2VzY2FwZSwgZmNzc2VzY2FwZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb250ZXh0LnNldEF0dHJpYnV0ZSggXCJpZFwiLCAobmlkID0gZXhwYW5kbykgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmVmaXggZXZlcnkgc2VsZWN0b3IgaW4gdGhlIGxpc3Rcblx0XHRcdFx0XHRncm91cHMgPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHRcdFx0XHRpID0gZ3JvdXBzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdGdyb3Vwc1tpXSA9IFwiI1wiICsgbmlkICsgXCIgXCIgKyB0b1NlbGVjdG9yKCBncm91cHNbaV0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV3U2VsZWN0b3IgPSBncm91cHMuam9pbiggXCIsXCIgKTtcblxuXHRcdFx0XHRcdC8vIEV4cGFuZCBjb250ZXh0IGZvciBzaWJsaW5nIHNlbGVjdG9yc1xuXHRcdFx0XHRcdG5ld0NvbnRleHQgPSByc2libGluZy50ZXN0KCBzZWxlY3RvciApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fFxuXHRcdFx0XHRcdFx0Y29udGV4dDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggbmV3U2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsXG5cdFx0XHRcdFx0XHRcdG5ld0NvbnRleHQucXVlcnlTZWxlY3RvckFsbCggbmV3U2VsZWN0b3IgKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKCBxc2FFcnJvciApIHtcblx0XHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdFx0aWYgKCBuaWQgPT09IGV4cGFuZG8gKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRleHQucmVtb3ZlQXR0cmlidXRlKCBcImlkXCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBbGwgb3RoZXJzXG5cdHJldHVybiBzZWxlY3QoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApO1xufVxuXG4vKipcbiAqIENyZWF0ZSBrZXktdmFsdWUgY2FjaGVzIG9mIGxpbWl0ZWQgc2l6ZVxuICogQHJldHVybnMge2Z1bmN0aW9uKHN0cmluZywgb2JqZWN0KX0gUmV0dXJucyB0aGUgT2JqZWN0IGRhdGEgYWZ0ZXIgc3RvcmluZyBpdCBvbiBpdHNlbGYgd2l0aFxuICpcdHByb3BlcnR5IG5hbWUgdGhlIChzcGFjZS1zdWZmaXhlZCkgc3RyaW5nIGFuZCAoaWYgdGhlIGNhY2hlIGlzIGxhcmdlciB0aGFuIEV4cHIuY2FjaGVMZW5ndGgpXG4gKlx0ZGVsZXRpbmcgdGhlIG9sZGVzdCBlbnRyeVxuICovXG5mdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcblx0dmFyIGtleXMgPSBbXTtcblxuXHRmdW5jdGlvbiBjYWNoZSgga2V5LCB2YWx1ZSApIHtcblx0XHQvLyBVc2UgKGtleSArIFwiIFwiKSB0byBhdm9pZCBjb2xsaXNpb24gd2l0aCBuYXRpdmUgcHJvdG90eXBlIHByb3BlcnRpZXMgKHNlZSBJc3N1ZSAjMTU3KVxuXHRcdGlmICgga2V5cy5wdXNoKCBrZXkgKyBcIiBcIiApID4gRXhwci5jYWNoZUxlbmd0aCApIHtcblx0XHRcdC8vIE9ubHkga2VlcCB0aGUgbW9zdCByZWNlbnQgZW50cmllc1xuXHRcdFx0ZGVsZXRlIGNhY2hlWyBrZXlzLnNoaWZ0KCkgXTtcblx0XHR9XG5cdFx0cmV0dXJuIChjYWNoZVsga2V5ICsgXCIgXCIgXSA9IHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gY2FjaGU7XG59XG5cbi8qKlxuICogTWFyayBhIGZ1bmN0aW9uIGZvciBzcGVjaWFsIHVzZSBieSBTaXp6bGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtYXJrXG4gKi9cbmZ1bmN0aW9uIG1hcmtGdW5jdGlvbiggZm4gKSB7XG5cdGZuWyBleHBhbmRvIF0gPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbi8qKlxuICogU3VwcG9ydCB0ZXN0aW5nIHVzaW5nIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFBhc3NlZCB0aGUgY3JlYXRlZCBlbGVtZW50IGFuZCByZXR1cm5zIGEgYm9vbGVhbiByZXN1bHRcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0KCBmbiApIHtcblx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuICEhZm4oIGVsICk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0Ly8gUmVtb3ZlIGZyb20gaXRzIHBhcmVudCBieSBkZWZhdWx0XG5cdFx0aWYgKCBlbC5wYXJlbnROb2RlICkge1xuXHRcdFx0ZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggZWwgKTtcblx0XHR9XG5cdFx0Ly8gcmVsZWFzZSBtZW1vcnkgaW4gSUVcblx0XHRlbCA9IG51bGw7XG5cdH1cbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBzYW1lIGhhbmRsZXIgZm9yIGFsbCBvZiB0aGUgc3BlY2lmaWVkIGF0dHJzXG4gKiBAcGFyYW0ge1N0cmluZ30gYXR0cnMgUGlwZS1zZXBhcmF0ZWQgbGlzdCBvZiBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIGFwcGxpZWRcbiAqL1xuZnVuY3Rpb24gYWRkSGFuZGxlKCBhdHRycywgaGFuZGxlciApIHtcblx0dmFyIGFyciA9IGF0dHJzLnNwbGl0KFwifFwiKSxcblx0XHRpID0gYXJyLmxlbmd0aDtcblxuXHR3aGlsZSAoIGktLSApIHtcblx0XHRFeHByLmF0dHJIYW5kbGVbIGFycltpXSBdID0gaGFuZGxlcjtcblx0fVxufVxuXG4vKipcbiAqIENoZWNrcyBkb2N1bWVudCBvcmRlciBvZiB0d28gc2libGluZ3NcbiAqIEBwYXJhbSB7RWxlbWVudH0gYVxuICogQHBhcmFtIHtFbGVtZW50fSBiXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIGxlc3MgdGhhbiAwIGlmIGEgcHJlY2VkZXMgYiwgZ3JlYXRlciB0aGFuIDAgaWYgYSBmb2xsb3dzIGJcbiAqL1xuZnVuY3Rpb24gc2libGluZ0NoZWNrKCBhLCBiICkge1xuXHR2YXIgY3VyID0gYiAmJiBhLFxuXHRcdGRpZmYgPSBjdXIgJiYgYS5ub2RlVHlwZSA9PT0gMSAmJiBiLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRhLnNvdXJjZUluZGV4IC0gYi5zb3VyY2VJbmRleDtcblxuXHQvLyBVc2UgSUUgc291cmNlSW5kZXggaWYgYXZhaWxhYmxlIG9uIGJvdGggbm9kZXNcblx0aWYgKCBkaWZmICkge1xuXHRcdHJldHVybiBkaWZmO1xuXHR9XG5cblx0Ly8gQ2hlY2sgaWYgYiBmb2xsb3dzIGFcblx0aWYgKCBjdXIgKSB7XG5cdFx0d2hpbGUgKCAoY3VyID0gY3VyLm5leHRTaWJsaW5nKSApIHtcblx0XHRcdGlmICggY3VyID09PSBiICkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGEgPyAxIDogLTE7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBpbnB1dCB0eXBlc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8oIHR5cGUgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGJ1dHRvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvblBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiAobmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCIpICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIDplbmFibGVkLzpkaXNhYmxlZFxuICogQHBhcmFtIHtCb29sZWFufSBkaXNhYmxlZCB0cnVlIGZvciA6ZGlzYWJsZWQ7IGZhbHNlIGZvciA6ZW5hYmxlZFxuICovXG5mdW5jdGlvbiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggZGlzYWJsZWQgKSB7XG5cblx0Ly8gS25vd24gOmRpc2FibGVkIGZhbHNlIHBvc2l0aXZlczogZmllbGRzZXRbZGlzYWJsZWRdID4gbGVnZW5kOm50aC1vZi10eXBlKG4rMikgOmNhbi1kaXNhYmxlXG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE9ubHkgY2VydGFpbiBlbGVtZW50cyBjYW4gbWF0Y2ggOmVuYWJsZWQgb3IgOmRpc2FibGVkXG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZW5hYmxlZFxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWRpc2FibGVkXG5cdFx0aWYgKCBcImZvcm1cIiBpbiBlbGVtICkge1xuXG5cdFx0XHQvLyBDaGVjayBmb3IgaW5oZXJpdGVkIGRpc2FibGVkbmVzcyBvbiByZWxldmFudCBub24tZGlzYWJsZWQgZWxlbWVudHM6XG5cdFx0XHQvLyAqIGxpc3RlZCBmb3JtLWFzc29jaWF0ZWQgZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBmaWVsZHNldFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtZmUtZGlzYWJsZWRcblx0XHRcdC8vICogb3B0aW9uIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuXHRcdFx0Ly8gQWxsIHN1Y2ggZWxlbWVudHMgaGF2ZSBhIFwiZm9ybVwiIHByb3BlcnR5LlxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5kaXNhYmxlZCA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0Ly8gT3B0aW9uIGVsZW1lbnRzIGRlZmVyIHRvIGEgcGFyZW50IG9wdGdyb3VwIGlmIHByZXNlbnRcblx0XHRcdFx0aWYgKCBcImxhYmVsXCIgaW4gZWxlbSApIHtcblx0XHRcdFx0XHRpZiAoIFwibGFiZWxcIiBpbiBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5wYXJlbnROb2RlLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDYgLSAxMVxuXHRcdFx0XHQvLyBVc2UgdGhlIGlzRGlzYWJsZWQgc2hvcnRjdXQgcHJvcGVydHkgdG8gY2hlY2sgZm9yIGRpc2FibGVkIGZpZWxkc2V0IGFuY2VzdG9yc1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pc0Rpc2FibGVkID09PSBkaXNhYmxlZCB8fFxuXG5cdFx0XHRcdFx0Ly8gV2hlcmUgdGhlcmUgaXMgbm8gaXNEaXNhYmxlZCwgY2hlY2sgbWFudWFsbHlcblx0XHRcdFx0XHQvKiBqc2hpbnQgLVcwMTggKi9cblx0XHRcdFx0XHRlbGVtLmlzRGlzYWJsZWQgIT09ICFkaXNhYmxlZCAmJlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWRBbmNlc3RvciggZWxlbSApID09PSBkaXNhYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXG5cdFx0Ly8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuXHRcdC8vIFNvbWUgdmljdGltcyBnZXQgY2F1Z2h0IGluIG91ciBuZXQgKGxhYmVsLCBsZWdlbmQsIG1lbnUsIHRyYWNrKSwgYnV0IGl0IHNob3VsZG4ndFxuXHRcdC8vIGV2ZW4gZXhpc3Qgb24gdGhlbSwgbGV0IGFsb25lIGhhdmUgYSBib29sZWFuIHZhbHVlLlxuXHRcdH0gZWxzZSBpZiAoIFwibGFiZWxcIiBpbiBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdH1cblxuXHRcdC8vIFJlbWFpbmluZyBlbGVtZW50cyBhcmUgbmVpdGhlciA6ZW5hYmxlZCBub3IgOmRpc2FibGVkXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgcG9zaXRpb25hbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZuICkge1xuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBhcmd1bWVudCApIHtcblx0XHRhcmd1bWVudCA9ICthcmd1bWVudDtcblx0XHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuXHRcdFx0dmFyIGosXG5cdFx0XHRcdG1hdGNoSW5kZXhlcyA9IGZuKCBbXSwgc2VlZC5sZW5ndGgsIGFyZ3VtZW50ICksXG5cdFx0XHRcdGkgPSBtYXRjaEluZGV4ZXMubGVuZ3RoO1xuXG5cdFx0XHQvLyBNYXRjaCBlbGVtZW50cyBmb3VuZCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4ZXNcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoIHNlZWRbIChqID0gbWF0Y2hJbmRleGVzW2ldKSBdICkge1xuXHRcdFx0XHRcdHNlZWRbal0gPSAhKG1hdGNoZXNbal0gPSBzZWVkW2pdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgYSBub2RlIGZvciB2YWxpZGl0eSBhcyBhIFNpenpsZSBjb250ZXh0XG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0PX0gY29udGV4dFxuICogQHJldHVybnMge0VsZW1lbnR8T2JqZWN0fEJvb2xlYW59IFRoZSBpbnB1dCBub2RlIGlmIGFjY2VwdGFibGUsIG90aGVyd2lzZSBhIGZhbHN5IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHRlc3RDb250ZXh0KCBjb250ZXh0ICkge1xuXHRyZXR1cm4gY29udGV4dCAmJiB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb250ZXh0O1xufVxuXG4vLyBFeHBvc2Ugc3VwcG9ydCB2YXJzIGZvciBjb252ZW5pZW5jZVxuc3VwcG9ydCA9IFNpenpsZS5zdXBwb3J0ID0ge307XG5cbi8qKlxuICogRGV0ZWN0cyBYTUwgbm9kZXNcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IGVsZW0gQW4gZWxlbWVudCBvciBhIGRvY3VtZW50XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZmYgZWxlbSBpcyBhIG5vbi1IVE1MIFhNTCBub2RlXG4gKi9cbmlzWE1MID0gU2l6emxlLmlzWE1MID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdC8vIGRvY3VtZW50RWxlbWVudCBpcyB2ZXJpZmllZCBmb3IgY2FzZXMgd2hlcmUgaXQgZG9lc24ndCB5ZXQgZXhpc3Rcblx0Ly8gKHN1Y2ggYXMgbG9hZGluZyBpZnJhbWVzIGluIElFIC0gIzQ4MzMpXG5cdHZhciBkb2N1bWVudEVsZW1lbnQgPSBlbGVtICYmIChlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSkuZG9jdW1lbnRFbGVtZW50O1xuXHRyZXR1cm4gZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIiA6IGZhbHNlO1xufTtcblxuLyoqXG4gKiBTZXRzIGRvY3VtZW50LXJlbGF0ZWQgdmFyaWFibGVzIG9uY2UgYmFzZWQgb24gdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IFtkb2NdIEFuIGVsZW1lbnQgb3IgZG9jdW1lbnQgb2JqZWN0IHRvIHVzZSB0byBzZXQgdGhlIGRvY3VtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gKi9cbnNldERvY3VtZW50ID0gU2l6emxlLnNldERvY3VtZW50ID0gZnVuY3Rpb24oIG5vZGUgKSB7XG5cdHZhciBoYXNDb21wYXJlLCBzdWJXaW5kb3csXG5cdFx0ZG9jID0gbm9kZSA/IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlIDogcHJlZmVycmVkRG9jO1xuXG5cdC8vIFJldHVybiBlYXJseSBpZiBkb2MgaXMgaW52YWxpZCBvciBhbHJlYWR5IHNlbGVjdGVkXG5cdGlmICggZG9jID09PSBkb2N1bWVudCB8fCBkb2Mubm9kZVR5cGUgIT09IDkgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQgKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50O1xuXHR9XG5cblx0Ly8gVXBkYXRlIGdsb2JhbCB2YXJpYWJsZXNcblx0ZG9jdW1lbnQgPSBkb2M7XG5cdGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdGRvY3VtZW50SXNIVE1MID0gIWlzWE1MKCBkb2N1bWVudCApO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDktMTEsIEVkZ2Vcblx0Ly8gQWNjZXNzaW5nIGlmcmFtZSBkb2N1bWVudHMgYWZ0ZXIgdW5sb2FkIHRocm93cyBcInBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3JzIChqUXVlcnkgIzEzOTM2KVxuXHRpZiAoIHByZWZlcnJlZERvYyAhPT0gZG9jdW1lbnQgJiZcblx0XHQoc3ViV2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcpICYmIHN1YldpbmRvdy50b3AgIT09IHN1YldpbmRvdyApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDExLCBFZGdlXG5cdFx0aWYgKCBzdWJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdHN1YldpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInVubG9hZFwiLCB1bmxvYWRIYW5kbGVyLCBmYWxzZSApO1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDEwIG9ubHlcblx0XHR9IGVsc2UgaWYgKCBzdWJXaW5kb3cuYXR0YWNoRXZlbnQgKSB7XG5cdFx0XHRzdWJXaW5kb3cuYXR0YWNoRXZlbnQoIFwib251bmxvYWRcIiwgdW5sb2FkSGFuZGxlciApO1xuXHRcdH1cblx0fVxuXG5cdC8qIEF0dHJpYnV0ZXNcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIFN1cHBvcnQ6IElFPDhcblx0Ly8gVmVyaWZ5IHRoYXQgZ2V0QXR0cmlidXRlIHJlYWxseSByZXR1cm5zIGF0dHJpYnV0ZXMgYW5kIG5vdCBwcm9wZXJ0aWVzXG5cdC8vIChleGNlcHRpbmcgSUU4IGJvb2xlYW5zKVxuXHRzdXBwb3J0LmF0dHJpYnV0ZXMgPSBhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRcdGVsLmNsYXNzTmFtZSA9IFwiaVwiO1xuXHRcdHJldHVybiAhZWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpO1xuXHR9KTtcblxuXHQvKiBnZXRFbGVtZW50KHMpQnkqXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBDaGVjayBpZiBnZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikgcmV0dXJucyBvbmx5IGVsZW1lbnRzXG5cdHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRcdGVsLmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiXCIpICk7XG5cdFx0cmV0dXJuICFlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RoO1xuXHR9KTtcblxuXHQvLyBTdXBwb3J0OiBJRTw5XG5cdHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IHJuYXRpdmUudGVzdCggZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSApO1xuXG5cdC8vIFN1cHBvcnQ6IElFPDEwXG5cdC8vIENoZWNrIGlmIGdldEVsZW1lbnRCeUlkIHJldHVybnMgZWxlbWVudHMgYnkgbmFtZVxuXHQvLyBUaGUgYnJva2VuIGdldEVsZW1lbnRCeUlkIG1ldGhvZHMgZG9uJ3QgcGljayB1cCBwcm9ncmFtbWF0aWNhbGx5LXNldCBuYW1lcyxcblx0Ly8gc28gdXNlIGEgcm91bmRhYm91dCBnZXRFbGVtZW50c0J5TmFtZSB0ZXN0XG5cdHN1cHBvcnQuZ2V0QnlJZCA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggZWwgKS5pZCA9IGV4cGFuZG87XG5cdFx0cmV0dXJuICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSB8fCAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoIGV4cGFuZG8gKS5sZW5ndGg7XG5cdH0pO1xuXG5cdC8vIElEIGZpbHRlciBhbmQgZmluZFxuXHRpZiAoIHN1cHBvcnQuZ2V0QnlJZCApIHtcblx0XHRFeHByLmZpbHRlcltcIklEXCJdID0gZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBhdHRySWQ7XG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0RXhwci5maW5kW1wiSURcIl0gPSBmdW5jdGlvbiggaWQsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0XHR2YXIgZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cdFx0XHRcdHJldHVybiBlbGVtID8gWyBlbGVtIF0gOiBbXTtcblx0XHRcdH1cblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdEV4cHIuZmlsdGVyW1wiSURcIl0gPSAgZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBub2RlID0gdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlTm9kZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuXHRcdFx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuXHRcdFx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLnZhbHVlID09PSBhdHRySWQ7XG5cdFx0XHR9O1xuXHRcdH07XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA2IC0gNyBvbmx5XG5cdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgaXMgbm90IHJlbGlhYmxlIGFzIGEgZmluZCBzaG9ydGN1dFxuXHRcdEV4cHIuZmluZFtcIklEXCJdID0gZnVuY3Rpb24oIGlkLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdFx0dmFyIG5vZGUsIGksIGVsZW1zLFxuXHRcdFx0XHRcdGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXG5cdFx0XHRcdGlmICggZWxlbSApIHtcblxuXHRcdFx0XHRcdC8vIFZlcmlmeSB0aGUgaWQgYXR0cmlidXRlXG5cdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuXHRcdFx0XHRcdGlmICggbm9kZSAmJiBub2RlLnZhbHVlID09PSBpZCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBbIGVsZW0gXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBGYWxsIGJhY2sgb24gZ2V0RWxlbWVudHNCeU5hbWVcblx0XHRcdFx0XHRlbGVtcyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeU5hbWUoIGlkICk7XG5cdFx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1zW2krK10pICkge1xuXHRcdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuXHRcdFx0XHRcdFx0aWYgKCBub2RlICYmIG5vZGUudmFsdWUgPT09IGlkICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gWyBlbGVtIF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBUYWdcblx0RXhwci5maW5kW1wiVEFHXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA/XG5cdFx0ZnVuY3Rpb24oIHRhZywgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgKTtcblxuXHRcdFx0Ly8gRG9jdW1lbnRGcmFnbWVudCBub2RlcyBkb24ndCBoYXZlIGdFQlROXG5cdFx0XHR9IGVsc2UgaWYgKCBzdXBwb3J0LnFzYSApIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnICk7XG5cdFx0XHR9XG5cdFx0fSA6XG5cblx0XHRmdW5jdGlvbiggdGFnLCBjb250ZXh0ICkge1xuXHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdHRtcCA9IFtdLFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0Ly8gQnkgaGFwcHkgY29pbmNpZGVuY2UsIGEgKGJyb2tlbikgZ0VCVE4gYXBwZWFycyBvbiBEb2N1bWVudEZyYWdtZW50IG5vZGVzIHRvb1xuXHRcdFx0XHRyZXN1bHRzID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnICk7XG5cblx0XHRcdC8vIEZpbHRlciBvdXQgcG9zc2libGUgY29tbWVudHNcblx0XHRcdGlmICggdGFnID09PSBcIipcIiApIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IHJlc3VsdHNbaSsrXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0dG1wLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdG1wO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fTtcblxuXHQvLyBDbGFzc1xuXHRFeHByLmZpbmRbXCJDTEFTU1wiXSA9IHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAmJiBmdW5jdGlvbiggY2xhc3NOYW1lLCBjb250ZXh0ICkge1xuXHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGNsYXNzTmFtZSApO1xuXHRcdH1cblx0fTtcblxuXHQvKiBRU0EvbWF0Y2hlc1NlbGVjdG9yXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBRU0EgYW5kIG1hdGNoZXNTZWxlY3RvciBzdXBwb3J0XG5cblx0Ly8gbWF0Y2hlc1NlbGVjdG9yKDphY3RpdmUpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChJRTkvT3BlcmEgMTEuNSlcblx0cmJ1Z2d5TWF0Y2hlcyA9IFtdO1xuXG5cdC8vIHFTYSg6Zm9jdXMpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChDaHJvbWUgMjEpXG5cdC8vIFdlIGFsbG93IHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBJRTgvOSB0aGF0IHRocm93cyBhbiBlcnJvclxuXHQvLyB3aGVuZXZlciBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgaXMgYWNjZXNzZWQgb24gYW4gaWZyYW1lXG5cdC8vIFNvLCB3ZSBhbGxvdyA6Zm9jdXMgdG8gcGFzcyB0aHJvdWdoIFFTQSBhbGwgdGhlIHRpbWUgdG8gYXZvaWQgdGhlIElFIGVycm9yXG5cdC8vIFNlZSBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzNzhcblx0cmJ1Z2d5UVNBID0gW107XG5cblx0aWYgKCAoc3VwcG9ydC5xc2EgPSBybmF0aXZlLnRlc3QoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKSkgKSB7XG5cdFx0Ly8gQnVpbGQgUVNBIHJlZ2V4XG5cdFx0Ly8gUmVnZXggc3RyYXRlZ3kgYWRvcHRlZCBmcm9tIERpZWdvIFBlcmluaVxuXHRcdGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHQvLyBTZWxlY3QgaXMgc2V0IHRvIGVtcHR5IHN0cmluZyBvbiBwdXJwb3NlXG5cdFx0XHQvLyBUaGlzIGlzIHRvIHRlc3QgSUUncyB0cmVhdG1lbnQgb2Ygbm90IGV4cGxpY2l0bHlcblx0XHRcdC8vIHNldHRpbmcgYSBib29sZWFuIGNvbnRlbnQgYXR0cmlidXRlLFxuXHRcdFx0Ly8gc2luY2UgaXRzIHByZXNlbmNlIHNob3VsZCBiZSBlbm91Z2hcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjM1OVxuXHRcdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggZWwgKS5pbm5lckhUTUwgPSBcIjxhIGlkPSdcIiArIGV4cGFuZG8gKyBcIic+PC9hPlwiICtcblx0XHRcdFx0XCI8c2VsZWN0IGlkPSdcIiArIGV4cGFuZG8gKyBcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz5cIiArXG5cdFx0XHRcdFwiPG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU4LCBPcGVyYSAxMS0xMi4xNlxuXHRcdFx0Ly8gTm90aGluZyBzaG91bGQgYmUgc2VsZWN0ZWQgd2hlbiBlbXB0eSBzdHJpbmdzIGZvbGxvdyBePSBvciAkPSBvciAqPVxuXHRcdFx0Ly8gVGhlIHRlc3QgYXR0cmlidXRlIG11c3QgYmUgdW5rbm93biBpbiBPcGVyYSBidXQgXCJzYWZlXCIgZm9yIFdpblJUXG5cdFx0XHQvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2hoNDY1Mzg4LmFzcHgjYXR0cmlidXRlX3NlY3Rpb25cblx0XHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiWypeJF09XCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86Jyd8XFxcIlxcXCIpXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU4XG5cdFx0XHQvLyBCb29sZWFuIGF0dHJpYnV0ZXMgYW5kIFwidmFsdWVcIiBhcmUgbm90IHRyZWF0ZWQgY29ycmVjdGx5XG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86dmFsdWV8XCIgKyBib29sZWFucyArIFwiKVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZTwyOSwgQW5kcm9pZDw0LjQsIFNhZmFyaTw3LjArLCBpT1M8Ny4wKywgUGhhbnRvbUpTPDEuOS44K1xuXHRcdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCJbaWR+PVwiICsgZXhwYW5kbyArIFwiLV1cIiApLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCJ+PVwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2Via2l0L09wZXJhIC0gOmNoZWNrZWQgc2hvdWxkIHJldHVybiBzZWxlY3RlZCBvcHRpb24gZWxlbWVudHNcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXG5cdFx0XHQvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuXHRcdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCI6Y2hlY2tlZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDgrLCBpT1MgOCtcblx0XHRcdC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzY4NTFcblx0XHRcdC8vIEluLXBhZ2UgYHNlbGVjdG9yI2lkIHNpYmxpbmctY29tYmluYXRvciBzZWxlY3RvcmAgZmFpbHNcblx0XHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiYSNcIiArIGV4cGFuZG8gKyBcIisqXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKFwiLiMuK1srfl1cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPlwiICtcblx0XHRcdFx0XCI8c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IFdpbmRvd3MgOCBOYXRpdmUgQXBwc1xuXHRcdFx0Ly8gVGhlIHR5cGUgYW5kIG5hbWUgYXR0cmlidXRlcyBhcmUgcmVzdHJpY3RlZCBkdXJpbmcgLmlubmVySFRNTCBhc3NpZ25tZW50XG5cdFx0XHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCBcImhpZGRlblwiICk7XG5cdFx0XHRlbC5hcHBlbmRDaGlsZCggaW5wdXQgKS5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcIkRcIiApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRThcblx0XHRcdC8vIEVuZm9yY2UgY2FzZS1zZW5zaXRpdml0eSBvZiBuYW1lIGF0dHJpYnV0ZVxuXHRcdFx0aWYgKCBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJuYW1lXCIgKyB3aGl0ZXNwYWNlICsgXCIqWypeJHwhfl0/PVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZGIDMuNSAtIDplbmFibGVkLzpkaXNhYmxlZCBhbmQgaGlkZGVuIGVsZW1lbnRzIChoaWRkZW4gZWxlbWVudHMgYXJlIHN0aWxsIGVuYWJsZWQpXG5cdFx0XHQvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuXHRcdFx0aWYgKCBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoICE9PSAyICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCI6ZW5hYmxlZFwiLCBcIjpkaXNhYmxlZFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFOS0xMStcblx0XHRcdC8vIElFJ3MgOmRpc2FibGVkIHNlbGVjdG9yIGRvZXMgbm90IHBpY2sgdXAgdGhlIGNoaWxkcmVuIG9mIGRpc2FibGVkIGZpZWxkc2V0c1xuXHRcdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggZWwgKS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoICE9PSAyICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCI6ZW5hYmxlZFwiLCBcIjpkaXNhYmxlZFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9wZXJhIDEwLTExIGRvZXMgbm90IHRocm93IG9uIHBvc3QtY29tbWEgaW52YWxpZCBwc2V1ZG9zXG5cdFx0XHRlbC5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKTtcblx0XHRcdHJidWdneVFTQS5wdXNoKFwiLC4qOlwiKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmICggKHN1cHBvcnQubWF0Y2hlc1NlbGVjdG9yID0gcm5hdGl2ZS50ZXN0KCAobWF0Y2hlcyA9IGRvY0VsZW0ubWF0Y2hlcyB8fFxuXHRcdGRvY0VsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jRWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRkb2NFbGVtLm9NYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRkb2NFbGVtLm1zTWF0Y2hlc1NlbGVjdG9yKSApKSApIHtcblxuXHRcdGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHQvLyBDaGVjayB0byBzZWUgaWYgaXQncyBwb3NzaWJsZSB0byBkbyBtYXRjaGVzU2VsZWN0b3Jcblx0XHRcdC8vIG9uIGEgZGlzY29ubmVjdGVkIG5vZGUgKElFIDkpXG5cdFx0XHRzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoID0gbWF0Y2hlcy5jYWxsKCBlbCwgXCIqXCIgKTtcblxuXHRcdFx0Ly8gVGhpcyBzaG91bGQgZmFpbCB3aXRoIGFuIGV4Y2VwdGlvblxuXHRcdFx0Ly8gR2Vja28gZG9lcyBub3QgZXJyb3IsIHJldHVybnMgZmFsc2UgaW5zdGVhZFxuXHRcdFx0bWF0Y2hlcy5jYWxsKCBlbCwgXCJbcyE9JyddOnhcIiApO1xuXHRcdFx0cmJ1Z2d5TWF0Y2hlcy5wdXNoKCBcIiE9XCIsIHBzZXVkb3MgKTtcblx0XHR9KTtcblx0fVxuXG5cdHJidWdneVFTQSA9IHJidWdneVFTQS5sZW5ndGggJiYgbmV3IFJlZ0V4cCggcmJ1Z2d5UVNBLmpvaW4oXCJ8XCIpICk7XG5cdHJidWdneU1hdGNoZXMgPSByYnVnZ3lNYXRjaGVzLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lNYXRjaGVzLmpvaW4oXCJ8XCIpICk7XG5cblx0LyogQ29udGFpbnNcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRoYXNDb21wYXJlID0gcm5hdGl2ZS50ZXN0KCBkb2NFbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICk7XG5cblx0Ly8gRWxlbWVudCBjb250YWlucyBhbm90aGVyXG5cdC8vIFB1cnBvc2VmdWxseSBzZWxmLWV4Y2x1c2l2ZVxuXHQvLyBBcyBpbiwgYW4gZWxlbWVudCBkb2VzIG5vdCBjb250YWluIGl0c2VsZlxuXHRjb250YWlucyA9IGhhc0NvbXBhcmUgfHwgcm5hdGl2ZS50ZXN0KCBkb2NFbGVtLmNvbnRhaW5zICkgP1xuXHRcdGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdFx0dmFyIGFkb3duID0gYS5ub2RlVHlwZSA9PT0gOSA/IGEuZG9jdW1lbnRFbGVtZW50IDogYSxcblx0XHRcdFx0YnVwID0gYiAmJiBiLnBhcmVudE5vZGU7XG5cdFx0XHRyZXR1cm4gYSA9PT0gYnVwIHx8ICEhKCBidXAgJiYgYnVwLm5vZGVUeXBlID09PSAxICYmIChcblx0XHRcdFx0YWRvd24uY29udGFpbnMgP1xuXHRcdFx0XHRcdGFkb3duLmNvbnRhaW5zKCBidXAgKSA6XG5cdFx0XHRcdFx0YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBidXAgKSAmIDE2XG5cdFx0XHQpKTtcblx0XHR9IDpcblx0XHRmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdGlmICggYiApIHtcblx0XHRcdFx0d2hpbGUgKCAoYiA9IGIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBiID09PSBhICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXHQvKiBTb3J0aW5nXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBEb2N1bWVudCBvcmRlciBzb3J0aW5nXG5cdHNvcnRPcmRlciA9IGhhc0NvbXBhcmUgP1xuXHRmdW5jdGlvbiggYSwgYiApIHtcblxuXHRcdC8vIEZsYWcgZm9yIGR1cGxpY2F0ZSByZW1vdmFsXG5cdFx0aWYgKCBhID09PSBiICkge1xuXHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdC8vIFNvcnQgb24gbWV0aG9kIGV4aXN0ZW5jZSBpZiBvbmx5IG9uZSBpbnB1dCBoYXMgY29tcGFyZURvY3VtZW50UG9zaXRpb25cblx0XHR2YXIgY29tcGFyZSA9ICFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIC0gIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247XG5cdFx0aWYgKCBjb21wYXJlICkge1xuXHRcdFx0cmV0dXJuIGNvbXBhcmU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsY3VsYXRlIHBvc2l0aW9uIGlmIGJvdGggaW5wdXRzIGJlbG9uZyB0byB0aGUgc2FtZSBkb2N1bWVudFxuXHRcdGNvbXBhcmUgPSAoIGEub3duZXJEb2N1bWVudCB8fCBhICkgPT09ICggYi5vd25lckRvY3VtZW50IHx8IGIgKSA/XG5cdFx0XHRhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBiICkgOlxuXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2Uga25vdyB0aGV5IGFyZSBkaXNjb25uZWN0ZWRcblx0XHRcdDE7XG5cblx0XHQvLyBEaXNjb25uZWN0ZWQgbm9kZXNcblx0XHRpZiAoIGNvbXBhcmUgJiAxIHx8XG5cdFx0XHQoIXN1cHBvcnQuc29ydERldGFjaGVkICYmIGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGEgKSA9PT0gY29tcGFyZSkgKSB7XG5cblx0XHRcdC8vIENob29zZSB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IGlzIHJlbGF0ZWQgdG8gb3VyIHByZWZlcnJlZCBkb2N1bWVudFxuXHRcdFx0aWYgKCBhID09PSBkb2N1bWVudCB8fCBhLm93bmVyRG9jdW1lbnQgPT09IHByZWZlcnJlZERvYyAmJiBjb250YWlucyhwcmVmZXJyZWREb2MsIGEpICkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGIgPT09IGRvY3VtZW50IHx8IGIub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYikgKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWludGFpbiBvcmlnaW5hbCBvcmRlclxuXHRcdFx0cmV0dXJuIHNvcnRJbnB1dCA/XG5cdFx0XHRcdCggaW5kZXhPZiggc29ydElucHV0LCBhICkgLSBpbmRleE9mKCBzb3J0SW5wdXQsIGIgKSApIDpcblx0XHRcdFx0MDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29tcGFyZSAmIDQgPyAtMSA6IDE7XG5cdH0gOlxuXHRmdW5jdGlvbiggYSwgYiApIHtcblx0XHQvLyBFeGl0IGVhcmx5IGlmIHRoZSBub2RlcyBhcmUgaWRlbnRpY2FsXG5cdFx0aWYgKCBhID09PSBiICkge1xuXHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHZhciBjdXIsXG5cdFx0XHRpID0gMCxcblx0XHRcdGF1cCA9IGEucGFyZW50Tm9kZSxcblx0XHRcdGJ1cCA9IGIucGFyZW50Tm9kZSxcblx0XHRcdGFwID0gWyBhIF0sXG5cdFx0XHRicCA9IFsgYiBdO1xuXG5cdFx0Ly8gUGFyZW50bGVzcyBub2RlcyBhcmUgZWl0aGVyIGRvY3VtZW50cyBvciBkaXNjb25uZWN0ZWRcblx0XHRpZiAoICFhdXAgfHwgIWJ1cCApIHtcblx0XHRcdHJldHVybiBhID09PSBkb2N1bWVudCA/IC0xIDpcblx0XHRcdFx0YiA9PT0gZG9jdW1lbnQgPyAxIDpcblx0XHRcdFx0YXVwID8gLTEgOlxuXHRcdFx0XHRidXAgPyAxIDpcblx0XHRcdFx0c29ydElucHV0ID9cblx0XHRcdFx0KCBpbmRleE9mKCBzb3J0SW5wdXQsIGEgKSAtIGluZGV4T2YoIHNvcnRJbnB1dCwgYiApICkgOlxuXHRcdFx0XHQwO1xuXG5cdFx0Ly8gSWYgdGhlIG5vZGVzIGFyZSBzaWJsaW5ncywgd2UgY2FuIGRvIGEgcXVpY2sgY2hlY2tcblx0XHR9IGVsc2UgaWYgKCBhdXAgPT09IGJ1cCApIHtcblx0XHRcdHJldHVybiBzaWJsaW5nQ2hlY2soIGEsIGIgKTtcblx0XHR9XG5cblx0XHQvLyBPdGhlcndpc2Ugd2UgbmVlZCBmdWxsIGxpc3RzIG9mIHRoZWlyIGFuY2VzdG9ycyBmb3IgY29tcGFyaXNvblxuXHRcdGN1ciA9IGE7XG5cdFx0d2hpbGUgKCAoY3VyID0gY3VyLnBhcmVudE5vZGUpICkge1xuXHRcdFx0YXAudW5zaGlmdCggY3VyICk7XG5cdFx0fVxuXHRcdGN1ciA9IGI7XG5cdFx0d2hpbGUgKCAoY3VyID0gY3VyLnBhcmVudE5vZGUpICkge1xuXHRcdFx0YnAudW5zaGlmdCggY3VyICk7XG5cdFx0fVxuXG5cdFx0Ly8gV2FsayBkb3duIHRoZSB0cmVlIGxvb2tpbmcgZm9yIGEgZGlzY3JlcGFuY3lcblx0XHR3aGlsZSAoIGFwW2ldID09PSBicFtpXSApIHtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHRyZXR1cm4gaSA/XG5cdFx0XHQvLyBEbyBhIHNpYmxpbmcgY2hlY2sgaWYgdGhlIG5vZGVzIGhhdmUgYSBjb21tb24gYW5jZXN0b3Jcblx0XHRcdHNpYmxpbmdDaGVjayggYXBbaV0sIGJwW2ldICkgOlxuXG5cdFx0XHQvLyBPdGhlcndpc2Ugbm9kZXMgaW4gb3VyIGRvY3VtZW50IHNvcnQgZmlyc3Rcblx0XHRcdGFwW2ldID09PSBwcmVmZXJyZWREb2MgPyAtMSA6XG5cdFx0XHRicFtpXSA9PT0gcHJlZmVycmVkRG9jID8gMSA6XG5cdFx0XHQwO1xuXHR9O1xuXG5cdHJldHVybiBkb2N1bWVudDtcbn07XG5cblNpenpsZS5tYXRjaGVzID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1lbnRzICkge1xuXHRyZXR1cm4gU2l6emxlKCBleHByLCBudWxsLCBudWxsLCBlbGVtZW50cyApO1xufTtcblxuU2l6emxlLm1hdGNoZXNTZWxlY3RvciA9IGZ1bmN0aW9uKCBlbGVtLCBleHByICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdH1cblxuXHQvLyBNYWtlIHN1cmUgdGhhdCBhdHRyaWJ1dGUgc2VsZWN0b3JzIGFyZSBxdW90ZWRcblx0ZXhwciA9IGV4cHIucmVwbGFjZSggcmF0dHJpYnV0ZVF1b3RlcywgXCI9JyQxJ11cIiApO1xuXG5cdGlmICggc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgJiYgZG9jdW1lbnRJc0hUTUwgJiZcblx0XHQhY29tcGlsZXJDYWNoZVsgZXhwciArIFwiIFwiIF0gJiZcblx0XHQoICFyYnVnZ3lNYXRjaGVzIHx8ICFyYnVnZ3lNYXRjaGVzLnRlc3QoIGV4cHIgKSApICYmXG5cdFx0KCAhcmJ1Z2d5UVNBICAgICB8fCAhcmJ1Z2d5UVNBLnRlc3QoIGV4cHIgKSApICkge1xuXG5cdFx0dHJ5IHtcblx0XHRcdHZhciByZXQgPSBtYXRjaGVzLmNhbGwoIGVsZW0sIGV4cHIgKTtcblxuXHRcdFx0Ly8gSUUgOSdzIG1hdGNoZXNTZWxlY3RvciByZXR1cm5zIGZhbHNlIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdFx0aWYgKCByZXQgfHwgc3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCB8fFxuXHRcdFx0XHRcdC8vIEFzIHdlbGwsIGRpc2Nvbm5lY3RlZCBub2RlcyBhcmUgc2FpZCB0byBiZSBpbiBhIGRvY3VtZW50XG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgaW4gSUUgOVxuXHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQgJiYgZWxlbS5kb2N1bWVudC5ub2RlVHlwZSAhPT0gMTEgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxuXG5cdHJldHVybiBTaXp6bGUoIGV4cHIsIGRvY3VtZW50LCBudWxsLCBbIGVsZW0gXSApLmxlbmd0aCA+IDA7XG59O1xuXG5TaXp6bGUuY29udGFpbnMgPSBmdW5jdGlvbiggY29udGV4dCwgZWxlbSApIHtcblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdGlmICggKCBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCApICE9PSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHR9XG5cdHJldHVybiBjb250YWlucyggY29udGV4dCwgZWxlbSApO1xufTtcblxuU2l6emxlLmF0dHIgPSBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdGlmICggKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSApICE9PSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHR9XG5cblx0dmFyIGZuID0gRXhwci5hdHRySGFuZGxlWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSxcblx0XHQvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoalF1ZXJ5ICMxMzgwNylcblx0XHR2YWwgPSBmbiAmJiBoYXNPd24uY2FsbCggRXhwci5hdHRySGFuZGxlLCBuYW1lLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRmbiggZWxlbSwgbmFtZSwgIWRvY3VtZW50SXNIVE1MICkgOlxuXHRcdFx0dW5kZWZpbmVkO1xuXG5cdHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCA/XG5cdFx0dmFsIDpcblx0XHRzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWRvY3VtZW50SXNIVE1MID9cblx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICkgOlxuXHRcdFx0KHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShuYW1lKSkgJiYgdmFsLnNwZWNpZmllZCA/XG5cdFx0XHRcdHZhbC52YWx1ZSA6XG5cdFx0XHRcdG51bGw7XG59O1xuXG5TaXp6bGUuZXNjYXBlID0gZnVuY3Rpb24oIHNlbCApIHtcblx0cmV0dXJuIChzZWwgKyBcIlwiKS5yZXBsYWNlKCByY3NzZXNjYXBlLCBmY3NzZXNjYXBlICk7XG59O1xuXG5TaXp6bGUuZXJyb3IgPSBmdW5jdGlvbiggbXNnICkge1xuXHR0aHJvdyBuZXcgRXJyb3IoIFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIgKyBtc2cgKTtcbn07XG5cbi8qKlxuICogRG9jdW1lbnQgc29ydGluZyBhbmQgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICogQHBhcmFtIHtBcnJheUxpa2V9IHJlc3VsdHNcbiAqL1xuU2l6emxlLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0dmFyIGVsZW0sXG5cdFx0ZHVwbGljYXRlcyA9IFtdLFxuXHRcdGogPSAwLFxuXHRcdGkgPSAwO1xuXG5cdC8vIFVubGVzcyB3ZSAqa25vdyogd2UgY2FuIGRldGVjdCBkdXBsaWNhdGVzLCBhc3N1bWUgdGhlaXIgcHJlc2VuY2Vcblx0aGFzRHVwbGljYXRlID0gIXN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcztcblx0c29ydElucHV0ID0gIXN1cHBvcnQuc29ydFN0YWJsZSAmJiByZXN1bHRzLnNsaWNlKCAwICk7XG5cdHJlc3VsdHMuc29ydCggc29ydE9yZGVyICk7XG5cblx0aWYgKCBoYXNEdXBsaWNhdGUgKSB7XG5cdFx0d2hpbGUgKCAoZWxlbSA9IHJlc3VsdHNbaSsrXSkgKSB7XG5cdFx0XHRpZiAoIGVsZW0gPT09IHJlc3VsdHNbIGkgXSApIHtcblx0XHRcdFx0aiA9IGR1cGxpY2F0ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGlsZSAoIGotLSApIHtcblx0XHRcdHJlc3VsdHMuc3BsaWNlKCBkdXBsaWNhdGVzWyBqIF0sIDEgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDbGVhciBpbnB1dCBhZnRlciBzb3J0aW5nIHRvIHJlbGVhc2Ugb2JqZWN0c1xuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvcHVsbC8yMjVcblx0c29ydElucHV0ID0gbnVsbDtcblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiBmb3IgcmV0cmlldmluZyB0aGUgdGV4dCB2YWx1ZSBvZiBhbiBhcnJheSBvZiBET00gbm9kZXNcbiAqIEBwYXJhbSB7QXJyYXl8RWxlbWVudH0gZWxlbVxuICovXG5nZXRUZXh0ID0gU2l6emxlLmdldFRleHQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0dmFyIG5vZGUsXG5cdFx0cmV0ID0gXCJcIixcblx0XHRpID0gMCxcblx0XHRub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0aWYgKCAhbm9kZVR5cGUgKSB7XG5cdFx0Ly8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcblx0XHR3aGlsZSAoIChub2RlID0gZWxlbVtpKytdKSApIHtcblx0XHRcdC8vIERvIG5vdCB0cmF2ZXJzZSBjb21tZW50IG5vZGVzXG5cdFx0XHRyZXQgKz0gZ2V0VGV4dCggbm9kZSApO1xuXHRcdH1cblx0fSBlbHNlIGlmICggbm9kZVR5cGUgPT09IDEgfHwgbm9kZVR5cGUgPT09IDkgfHwgbm9kZVR5cGUgPT09IDExICkge1xuXHRcdC8vIFVzZSB0ZXh0Q29udGVudCBmb3IgZWxlbWVudHNcblx0XHQvLyBpbm5lclRleHQgdXNhZ2UgcmVtb3ZlZCBmb3IgY29uc2lzdGVuY3kgb2YgbmV3IGxpbmVzIChqUXVlcnkgIzExMTUzKVxuXHRcdGlmICggdHlwZW9mIGVsZW0udGV4dENvbnRlbnQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS50ZXh0Q29udGVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gVHJhdmVyc2UgaXRzIGNoaWxkcmVuXG5cdFx0XHRmb3IgKCBlbGVtID0gZWxlbS5maXJzdENoaWxkOyBlbGVtOyBlbGVtID0gZWxlbS5uZXh0U2libGluZyApIHtcblx0XHRcdFx0cmV0ICs9IGdldFRleHQoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAoIG5vZGVUeXBlID09PSAzIHx8IG5vZGVUeXBlID09PSA0ICkge1xuXHRcdHJldHVybiBlbGVtLm5vZGVWYWx1ZTtcblx0fVxuXHQvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuXHRyZXR1cm4gcmV0O1xufTtcblxuRXhwciA9IFNpenpsZS5zZWxlY3RvcnMgPSB7XG5cblx0Ly8gQ2FuIGJlIGFkanVzdGVkIGJ5IHRoZSB1c2VyXG5cdGNhY2hlTGVuZ3RoOiA1MCxcblxuXHRjcmVhdGVQc2V1ZG86IG1hcmtGdW5jdGlvbixcblxuXHRtYXRjaDogbWF0Y2hFeHByLFxuXG5cdGF0dHJIYW5kbGU6IHt9LFxuXG5cdGZpbmQ6IHt9LFxuXG5cdHJlbGF0aXZlOiB7XG5cdFx0XCI+XCI6IHsgZGlyOiBcInBhcmVudE5vZGVcIiwgZmlyc3Q6IHRydWUgfSxcblx0XHRcIiBcIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiIH0sXG5cdFx0XCIrXCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiflwiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiB9XG5cdH0sXG5cblx0cHJlRmlsdGVyOiB7XG5cdFx0XCJBVFRSXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdG1hdGNoWzFdID0gbWF0Y2hbMV0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0Ly8gTW92ZSB0aGUgZ2l2ZW4gdmFsdWUgdG8gbWF0Y2hbM10gd2hldGhlciBxdW90ZWQgb3IgdW5xdW90ZWRcblx0XHRcdG1hdGNoWzNdID0gKCBtYXRjaFszXSB8fCBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBcIlwiICkucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsyXSA9PT0gXCJ+PVwiICkge1xuXHRcdFx0XHRtYXRjaFszXSA9IFwiIFwiICsgbWF0Y2hbM10gKyBcIiBcIjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCA0ICk7XG5cdFx0fSxcblxuXHRcdFwiQ0hJTERcIjogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0LyogbWF0Y2hlcyBmcm9tIG1hdGNoRXhwcltcIkNISUxEXCJdXG5cdFx0XHRcdDEgdHlwZSAob25seXxudGh8Li4uKVxuXHRcdFx0XHQyIHdoYXQgKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdDMgYXJndW1lbnQgKGV2ZW58b2RkfFxcZCp8XFxkKm4oWystXVxcZCspP3wuLi4pXG5cdFx0XHRcdDQgeG4tY29tcG9uZW50IG9mIHhuK3kgYXJndW1lbnQgKFsrLV0/XFxkKm58KVxuXHRcdFx0XHQ1IHNpZ24gb2YgeG4tY29tcG9uZW50XG5cdFx0XHRcdDYgeCBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NyBzaWduIG9mIHktY29tcG9uZW50XG5cdFx0XHRcdDggeSBvZiB5LWNvbXBvbmVudFxuXHRcdFx0Ki9cblx0XHRcdG1hdGNoWzFdID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsxXS5zbGljZSggMCwgMyApID09PSBcIm50aFwiICkge1xuXHRcdFx0XHQvLyBudGgtKiByZXF1aXJlcyBhcmd1bWVudFxuXHRcdFx0XHRpZiAoICFtYXRjaFszXSApIHtcblx0XHRcdFx0XHRTaXp6bGUuZXJyb3IoIG1hdGNoWzBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBudW1lcmljIHggYW5kIHkgcGFyYW1ldGVycyBmb3IgRXhwci5maWx0ZXIuQ0hJTERcblx0XHRcdFx0Ly8gcmVtZW1iZXIgdGhhdCBmYWxzZS90cnVlIGNhc3QgcmVzcGVjdGl2ZWx5IHRvIDAvMVxuXHRcdFx0XHRtYXRjaFs0XSA9ICsoIG1hdGNoWzRdID8gbWF0Y2hbNV0gKyAobWF0Y2hbNl0gfHwgMSkgOiAyICogKCBtYXRjaFszXSA9PT0gXCJldmVuXCIgfHwgbWF0Y2hbM10gPT09IFwib2RkXCIgKSApO1xuXHRcdFx0XHRtYXRjaFs1XSA9ICsoICggbWF0Y2hbN10gKyBtYXRjaFs4XSApIHx8IG1hdGNoWzNdID09PSBcIm9kZFwiICk7XG5cblx0XHRcdC8vIG90aGVyIHR5cGVzIHByb2hpYml0IGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbM10gKSB7XG5cdFx0XHRcdFNpenpsZS5lcnJvciggbWF0Y2hbMF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdH0sXG5cblx0XHRcIlBTRVVET1wiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHR2YXIgZXhjZXNzLFxuXHRcdFx0XHR1bnF1b3RlZCA9ICFtYXRjaFs2XSAmJiBtYXRjaFsyXTtcblxuXHRcdFx0aWYgKCBtYXRjaEV4cHJbXCJDSElMRFwiXS50ZXN0KCBtYXRjaFswXSApICkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWNjZXB0IHF1b3RlZCBhcmd1bWVudHMgYXMtaXNcblx0XHRcdGlmICggbWF0Y2hbM10gKSB7XG5cdFx0XHRcdG1hdGNoWzJdID0gbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIjtcblxuXHRcdFx0Ly8gU3RyaXAgZXhjZXNzIGNoYXJhY3RlcnMgZnJvbSB1bnF1b3RlZCBhcmd1bWVudHNcblx0XHRcdH0gZWxzZSBpZiAoIHVucXVvdGVkICYmIHJwc2V1ZG8udGVzdCggdW5xdW90ZWQgKSAmJlxuXHRcdFx0XHQvLyBHZXQgZXhjZXNzIGZyb20gdG9rZW5pemUgKHJlY3Vyc2l2ZWx5KVxuXHRcdFx0XHQoZXhjZXNzID0gdG9rZW5pemUoIHVucXVvdGVkLCB0cnVlICkpICYmXG5cdFx0XHRcdC8vIGFkdmFuY2UgdG8gdGhlIG5leHQgY2xvc2luZyBwYXJlbnRoZXNpc1xuXHRcdFx0XHQoZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZiggXCIpXCIsIHVucXVvdGVkLmxlbmd0aCAtIGV4Y2VzcyApIC0gdW5xdW90ZWQubGVuZ3RoKSApIHtcblxuXHRcdFx0XHQvLyBleGNlc3MgaXMgYSBuZWdhdGl2ZSBpbmRleFxuXHRcdFx0XHRtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdFx0bWF0Y2hbMl0gPSB1bnF1b3RlZC5zbGljZSggMCwgZXhjZXNzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldHVybiBvbmx5IGNhcHR1cmVzIG5lZWRlZCBieSB0aGUgcHNldWRvIGZpbHRlciBtZXRob2QgKHR5cGUgYW5kIGFyZ3VtZW50KVxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCAzICk7XG5cdFx0fVxuXHR9LFxuXG5cdGZpbHRlcjoge1xuXG5cdFx0XCJUQUdcIjogZnVuY3Rpb24oIG5vZGVOYW1lU2VsZWN0b3IgKSB7XG5cdFx0XHR2YXIgbm9kZU5hbWUgPSBub2RlTmFtZVNlbGVjdG9yLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICkudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBub2RlTmFtZVNlbGVjdG9yID09PSBcIipcIiA/XG5cdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbm9kZU5hbWU7XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFwiQ0xBU1NcIjogZnVuY3Rpb24oIGNsYXNzTmFtZSApIHtcblx0XHRcdHZhciBwYXR0ZXJuID0gY2xhc3NDYWNoZVsgY2xhc3NOYW1lICsgXCIgXCIgXTtcblxuXHRcdFx0cmV0dXJuIHBhdHRlcm4gfHxcblx0XHRcdFx0KHBhdHRlcm4gPSBuZXcgUmVnRXhwKCBcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICsgXCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIiApKSAmJlxuXHRcdFx0XHRjbGFzc0NhY2hlKCBjbGFzc05hbWUsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXR0ZXJuLnRlc3QoIHR5cGVvZiBlbGVtLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtLmNsYXNzTmFtZSB8fCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiICk7XG5cdFx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRcIkFUVFJcIjogZnVuY3Rpb24oIG5hbWUsIG9wZXJhdG9yLCBjaGVjayApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IFNpenpsZS5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHRcdFx0aWYgKCByZXN1bHQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXR1cm4gb3BlcmF0b3IgPT09IFwiIT1cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoICFvcGVyYXRvciApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdCArPSBcIlwiO1xuXG5cdFx0XHRcdHJldHVybiBvcGVyYXRvciA9PT0gXCI9XCIgPyByZXN1bHQgPT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIhPVwiID8gcmVzdWx0ICE9PSBjaGVjayA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwiXj1cIiA/IGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKCBjaGVjayApID09PSAwIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIqPVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPiAtMSA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwiJD1cIiA/IGNoZWNrICYmIHJlc3VsdC5zbGljZSggLWNoZWNrLmxlbmd0aCApID09PSBjaGVjayA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwifj1cIiA/ICggXCIgXCIgKyByZXN1bHQucmVwbGFjZSggcndoaXRlc3BhY2UsIFwiIFwiICkgKyBcIiBcIiApLmluZGV4T2YoIGNoZWNrICkgPiAtMSA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwifD1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgfHwgcmVzdWx0LnNsaWNlKCAwLCBjaGVjay5sZW5ndGggKyAxICkgPT09IGNoZWNrICsgXCItXCIgOlxuXHRcdFx0XHRcdGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0XCJDSElMRFwiOiBmdW5jdGlvbiggdHlwZSwgd2hhdCwgYXJndW1lbnQsIGZpcnN0LCBsYXN0ICkge1xuXHRcdFx0dmFyIHNpbXBsZSA9IHR5cGUuc2xpY2UoIDAsIDMgKSAhPT0gXCJudGhcIixcblx0XHRcdFx0Zm9yd2FyZCA9IHR5cGUuc2xpY2UoIC00ICkgIT09IFwibGFzdFwiLFxuXHRcdFx0XHRvZlR5cGUgPSB3aGF0ID09PSBcIm9mLXR5cGVcIjtcblxuXHRcdFx0cmV0dXJuIGZpcnN0ID09PSAxICYmIGxhc3QgPT09IDAgP1xuXG5cdFx0XHRcdC8vIFNob3J0Y3V0IGZvciA6bnRoLSoobilcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuICEhZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHR9IDpcblxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBjYWNoZSwgdW5pcXVlQ2FjaGUsIG91dGVyQ2FjaGUsIG5vZGUsIG5vZGVJbmRleCwgc3RhcnQsXG5cdFx0XHRcdFx0XHRkaXIgPSBzaW1wbGUgIT09IGZvcndhcmQgPyBcIm5leHRTaWJsaW5nXCIgOiBcInByZXZpb3VzU2libGluZ1wiLFxuXHRcdFx0XHRcdFx0cGFyZW50ID0gZWxlbS5wYXJlbnROb2RlLFxuXHRcdFx0XHRcdFx0bmFtZSA9IG9mVHlwZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFx0XHR1c2VDYWNoZSA9ICF4bWwgJiYgIW9mVHlwZSxcblx0XHRcdFx0XHRcdGRpZmYgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggcGFyZW50ICkge1xuXG5cdFx0XHRcdFx0XHQvLyA6KGZpcnN0fGxhc3R8b25seSktKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdFx0XHRpZiAoIHNpbXBsZSApIHtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKCBkaXIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0bm9kZSA9IGVsZW07XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobm9kZSA9IG5vZGVbIGRpciBdKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggb2ZUeXBlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8vIFJldmVyc2UgZGlyZWN0aW9uIGZvciA6b25seS0qIChpZiB3ZSBoYXZlbid0IHlldCBkb25lIHNvKVxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0ID0gZGlyID0gdHlwZSA9PT0gXCJvbmx5XCIgJiYgIXN0YXJ0ICYmIFwibmV4dFNpYmxpbmdcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3RhcnQgPSBbIGZvcndhcmQgPyBwYXJlbnQuZmlyc3RDaGlsZCA6IHBhcmVudC5sYXN0Q2hpbGQgXTtcblxuXHRcdFx0XHRcdFx0Ly8gbm9uLXhtbCA6bnRoLWNoaWxkKC4uLikgc3RvcmVzIGNhY2hlIGRhdGEgb24gYHBhcmVudGBcblx0XHRcdFx0XHRcdGlmICggZm9yd2FyZCAmJiB1c2VDYWNoZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBTZWVrIGBlbGVtYCBmcm9tIGEgcHJldmlvdXNseS1jYWNoZWQgaW5kZXhcblxuXHRcdFx0XHRcdFx0XHQvLyAuLi5pbiBhIGd6aXAtZnJpZW5kbHkgd2F5XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSBwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG5cdFx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdChvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0Y2FjaGUgPSB1bmlxdWVDYWNoZVsgdHlwZSBdIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG5cdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXggJiYgY2FjaGVbIDIgXTtcblx0XHRcdFx0XHRcdFx0bm9kZSA9IG5vZGVJbmRleCAmJiBwYXJlbnQuY2hpbGROb2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVsgZGlyIF0gfHxcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIHNlZWtpbmcgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0KGRpZmYgPSBub2RlSW5kZXggPSAwKSB8fCBzdGFydC5wb3AoKSkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBXaGVuIGZvdW5kLCBjYWNoZSBpbmRleGVzIG9uIGBwYXJlbnRgIGFuZCBicmVha1xuXHRcdFx0XHRcdFx0XHRcdGlmICggbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiArK2RpZmYgJiYgbm9kZSA9PT0gZWxlbSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIG5vZGVJbmRleCwgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIFVzZSBwcmV2aW91c2x5LWNhY2hlZCBlbGVtZW50IGluZGV4IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIC4uLmluIGEgZ3ppcC1mcmllbmRseSB3YXlcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbTtcblx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gbm9kZVsgZXhwYW5kbyBdIHx8IChub2RlWyBleHBhbmRvIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0Ly8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRcdChvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRjYWNoZSA9IHVuaXF1ZUNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdFx0bm9kZUluZGV4ID0gY2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBjYWNoZVsgMSBdO1xuXHRcdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyB4bWwgOm50aC1jaGlsZCguLi4pXG5cdFx0XHRcdFx0XHRcdC8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcblx0XHRcdFx0XHRcdFx0aWYgKCBkaWZmID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBVc2UgdGhlIHNhbWUgbG9vcCBhcyBhYm92ZSB0byBzZWVrIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICggKG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHQoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAoIG9mVHlwZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZVR5cGUgPT09IDEgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQrK2RpZmYgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2FjaGUgdGhlIGluZGV4IG9mIGVhY2ggZW5jb3VudGVyZWQgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIGRpZmYgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggbm9kZSA9PT0gZWxlbSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJbmNvcnBvcmF0ZSB0aGUgb2Zmc2V0LCB0aGVuIGNoZWNrIGFnYWluc3QgY3ljbGUgc2l6ZVxuXHRcdFx0XHRcdFx0ZGlmZiAtPSBsYXN0O1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRpZmYgPT09IGZpcnN0IHx8ICggZGlmZiAlIGZpcnN0ID09PSAwICYmIGRpZmYgLyBmaXJzdCA+PSAwICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRcIlBTRVVET1wiOiBmdW5jdGlvbiggcHNldWRvLCBhcmd1bWVudCApIHtcblx0XHRcdC8vIHBzZXVkby1jbGFzcyBuYW1lcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZVxuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNwc2V1ZG8tY2xhc3Nlc1xuXHRcdFx0Ly8gUHJpb3JpdGl6ZSBieSBjYXNlIHNlbnNpdGl2aXR5IGluIGNhc2UgY3VzdG9tIHBzZXVkb3MgYXJlIGFkZGVkIHdpdGggdXBwZXJjYXNlIGxldHRlcnNcblx0XHRcdC8vIFJlbWVtYmVyIHRoYXQgc2V0RmlsdGVycyBpbmhlcml0cyBmcm9tIHBzZXVkb3Ncblx0XHRcdHZhciBhcmdzLFxuXHRcdFx0XHRmbiA9IEV4cHIucHNldWRvc1sgcHNldWRvIF0gfHwgRXhwci5zZXRGaWx0ZXJzWyBwc2V1ZG8udG9Mb3dlckNhc2UoKSBdIHx8XG5cdFx0XHRcdFx0U2l6emxlLmVycm9yKCBcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIgKyBwc2V1ZG8gKTtcblxuXHRcdFx0Ly8gVGhlIHVzZXIgbWF5IHVzZSBjcmVhdGVQc2V1ZG8gdG8gaW5kaWNhdGUgdGhhdFxuXHRcdFx0Ly8gYXJndW1lbnRzIGFyZSBuZWVkZWQgdG8gY3JlYXRlIHRoZSBmaWx0ZXIgZnVuY3Rpb25cblx0XHRcdC8vIGp1c3QgYXMgU2l6emxlIGRvZXNcblx0XHRcdGlmICggZm5bIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0cmV0dXJuIGZuKCBhcmd1bWVudCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBCdXQgbWFpbnRhaW4gc3VwcG9ydCBmb3Igb2xkIHNpZ25hdHVyZXNcblx0XHRcdGlmICggZm4ubGVuZ3RoID4gMSApIHtcblx0XHRcdFx0YXJncyA9IFsgcHNldWRvLCBwc2V1ZG8sIFwiXCIsIGFyZ3VtZW50IF07XG5cdFx0XHRcdHJldHVybiBFeHByLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoIHBzZXVkby50b0xvd2VyQ2FzZSgpICkgP1xuXHRcdFx0XHRcdG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcyApIHtcblx0XHRcdFx0XHRcdHZhciBpZHgsXG5cdFx0XHRcdFx0XHRcdG1hdGNoZWQgPSBmbiggc2VlZCwgYXJndW1lbnQgKSxcblx0XHRcdFx0XHRcdFx0aSA9IG1hdGNoZWQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlkeCA9IGluZGV4T2YoIHNlZWQsIG1hdGNoZWRbaV0gKTtcblx0XHRcdFx0XHRcdFx0c2VlZFsgaWR4IF0gPSAhKCBtYXRjaGVzWyBpZHggXSA9IG1hdGNoZWRbaV0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSA6XG5cdFx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZm4oIGVsZW0sIDAsIGFyZ3MgKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm47XG5cdFx0fVxuXHR9LFxuXG5cdHBzZXVkb3M6IHtcblx0XHQvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3Ncblx0XHRcIm5vdFwiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdFx0Ly8gVHJpbSB0aGUgc2VsZWN0b3IgcGFzc2VkIHRvIGNvbXBpbGVcblx0XHRcdC8vIHRvIGF2b2lkIHRyZWF0aW5nIGxlYWRpbmcgYW5kIHRyYWlsaW5nXG5cdFx0XHQvLyBzcGFjZXMgYXMgY29tYmluYXRvcnNcblx0XHRcdHZhciBpbnB1dCA9IFtdLFxuXHRcdFx0XHRyZXN1bHRzID0gW10sXG5cdFx0XHRcdG1hdGNoZXIgPSBjb21waWxlKCBzZWxlY3Rvci5yZXBsYWNlKCBydHJpbSwgXCIkMVwiICkgKTtcblxuXHRcdFx0cmV0dXJuIG1hdGNoZXJbIGV4cGFuZG8gXSA/XG5cdFx0XHRcdG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcywgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBlbGVtLFxuXHRcdFx0XHRcdFx0dW5tYXRjaGVkID0gbWF0Y2hlciggc2VlZCwgbnVsbCwgeG1sLCBbXSApLFxuXHRcdFx0XHRcdFx0aSA9IHNlZWQubGVuZ3RoO1xuXG5cdFx0XHRcdFx0Ly8gTWF0Y2ggZWxlbWVudHMgdW5tYXRjaGVkIGJ5IGBtYXRjaGVyYFxuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoZWxlbSA9IHVubWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdHNlZWRbaV0gPSAhKG1hdGNoZXNbaV0gPSBlbGVtKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pIDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdFx0XHRpbnB1dFswXSA9IGVsZW07XG5cdFx0XHRcdFx0bWF0Y2hlciggaW5wdXQsIG51bGwsIHhtbCwgcmVzdWx0cyApO1xuXHRcdFx0XHRcdC8vIERvbid0IGtlZXAgdGhlIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cdFx0XHRcdFx0aW5wdXRbMF0gPSBudWxsO1xuXHRcdFx0XHRcdHJldHVybiAhcmVzdWx0cy5wb3AoKTtcblx0XHRcdFx0fTtcblx0XHR9KSxcblxuXHRcdFwiaGFzXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBTaXp6bGUoIHNlbGVjdG9yLCBlbGVtICkubGVuZ3RoID4gMDtcblx0XHRcdH07XG5cdFx0fSksXG5cblx0XHRcImNvbnRhaW5zXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggdGV4dCApIHtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0udGV4dENvbnRlbnQgfHwgZWxlbS5pbm5lclRleHQgfHwgZ2V0VGV4dCggZWxlbSApICkuaW5kZXhPZiggdGV4dCApID4gLTE7XG5cdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0Ly8gXCJXaGV0aGVyIGFuIGVsZW1lbnQgaXMgcmVwcmVzZW50ZWQgYnkgYSA6bGFuZygpIHNlbGVjdG9yXG5cdFx0Ly8gaXMgYmFzZWQgc29sZWx5IG9uIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWVcblx0XHQvLyBiZWluZyBlcXVhbCB0byB0aGUgaWRlbnRpZmllciBDLFxuXHRcdC8vIG9yIGJlZ2lubmluZyB3aXRoIHRoZSBpZGVudGlmaWVyIEMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgXCItXCIuXG5cdFx0Ly8gVGhlIG1hdGNoaW5nIG9mIEMgYWdhaW5zdCB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlIGlzIHBlcmZvcm1lZCBjYXNlLWluc2Vuc2l0aXZlbHkuXG5cdFx0Ly8gVGhlIGlkZW50aWZpZXIgQyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgdmFsaWQgbGFuZ3VhZ2UgbmFtZS5cIlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jbGFuZy1wc2V1ZG9cblx0XHRcImxhbmdcIjogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggbGFuZyApIHtcblx0XHRcdC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcblx0XHRcdGlmICggIXJpZGVudGlmaWVyLnRlc3QobGFuZyB8fCBcIlwiKSApIHtcblx0XHRcdFx0U2l6emxlLmVycm9yKCBcInVuc3VwcG9ydGVkIGxhbmc6IFwiICsgbGFuZyApO1xuXHRcdFx0fVxuXHRcdFx0bGFuZyA9IGxhbmcucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgZWxlbUxhbmc7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRpZiAoIChlbGVtTGFuZyA9IGRvY3VtZW50SXNIVE1MID9cblx0XHRcdFx0XHRcdGVsZW0ubGFuZyA6XG5cdFx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpIHx8IGVsZW0uZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSkgKSB7XG5cblx0XHRcdFx0XHRcdGVsZW1MYW5nID0gZWxlbUxhbmcudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtTGFuZyA9PT0gbGFuZyB8fCBlbGVtTGFuZy5pbmRleE9mKCBsYW5nICsgXCItXCIgKSA9PT0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gd2hpbGUgKCAoZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSkgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0Ly8gTWlzY2VsbGFuZW91c1xuXHRcdFwidGFyZ2V0XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cdFx0XHRyZXR1cm4gaGFzaCAmJiBoYXNoLnNsaWNlKCAxICkgPT09IGVsZW0uaWQ7XG5cdFx0fSxcblxuXHRcdFwicm9vdFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBkb2NFbGVtO1xuXHRcdH0sXG5cblx0XHRcImZvY3VzXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKCFkb2N1bWVudC5oYXNGb2N1cyB8fCBkb2N1bWVudC5oYXNGb2N1cygpKSAmJiAhIShlbGVtLnR5cGUgfHwgZWxlbS5ocmVmIHx8IH5lbGVtLnRhYkluZGV4KTtcblx0XHR9LFxuXG5cdFx0Ly8gQm9vbGVhbiBwcm9wZXJ0aWVzXG5cdFx0XCJlbmFibGVkXCI6IGNyZWF0ZURpc2FibGVkUHNldWRvKCBmYWxzZSApLFxuXHRcdFwiZGlzYWJsZWRcIjogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIHRydWUgKSxcblxuXHRcdFwiY2hlY2tlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdC8vIEluIENTUzMsIDpjaGVja2VkIHNob3VsZCByZXR1cm4gYm90aCBjaGVja2VkIGFuZCBzZWxlY3RlZCBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdHZhciBub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiAhIWVsZW0uY2hlY2tlZCkgfHwgKG5vZGVOYW1lID09PSBcIm9wdGlvblwiICYmICEhZWxlbS5zZWxlY3RlZCk7XG5cdFx0fSxcblxuXHRcdFwic2VsZWN0ZWRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHQvLyBBY2Nlc3NpbmcgdGhpcyBwcm9wZXJ0eSBtYWtlcyBzZWxlY3RlZC1ieS1kZWZhdWx0XG5cdFx0XHQvLyBvcHRpb25zIGluIFNhZmFyaSB3b3JrIHByb3Blcmx5XG5cdFx0XHRpZiAoIGVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0ZWxlbS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbGVtLnNlbGVjdGVkID09PSB0cnVlO1xuXHRcdH0sXG5cblx0XHQvLyBDb250ZW50c1xuXHRcdFwiZW1wdHlcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2VtcHR5LXBzZXVkb1xuXHRcdFx0Ly8gOmVtcHR5IGlzIG5lZ2F0ZWQgYnkgZWxlbWVudCAoMSkgb3IgY29udGVudCBub2RlcyAodGV4dDogMzsgY2RhdGE6IDQ7IGVudGl0eSByZWY6IDUpLFxuXHRcdFx0Ly8gICBidXQgbm90IGJ5IG90aGVycyAoY29tbWVudDogODsgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbjogNzsgZXRjLilcblx0XHRcdC8vIG5vZGVUeXBlIDwgNiB3b3JrcyBiZWNhdXNlIGF0dHJpYnV0ZXMgKDIpIGRvIG5vdCBhcHBlYXIgYXMgY2hpbGRyZW5cblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPCA2ICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdFwicGFyZW50XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICFFeHByLnBzZXVkb3NbXCJlbXB0eVwiXSggZWxlbSApO1xuXHRcdH0sXG5cblx0XHQvLyBFbGVtZW50L2lucHV0IHR5cGVzXG5cdFx0XCJoZWFkZXJcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmhlYWRlci50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdFwiaW5wdXRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmlucHV0cy50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdFwiYnV0dG9uXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gXCJidXR0b25cIiB8fCBuYW1lID09PSBcImJ1dHRvblwiO1xuXHRcdH0sXG5cblx0XHRcInRleHRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgYXR0cjtcblx0XHRcdHJldHVybiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiAmJlxuXHRcdFx0XHRlbGVtLnR5cGUgPT09IFwidGV4dFwiICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUU8OFxuXHRcdFx0XHQvLyBOZXcgSFRNTDUgYXR0cmlidXRlIHZhbHVlcyAoZS5nLiwgXCJzZWFyY2hcIikgYXBwZWFyIHdpdGggZWxlbS50eXBlID09PSBcInRleHRcIlxuXHRcdFx0XHQoIChhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PSBudWxsIHx8IGF0dHIudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0XCIgKTtcblx0XHR9LFxuXG5cdFx0Ly8gUG9zaXRpb24taW4tY29sbGVjdGlvblxuXHRcdFwiZmlyc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBbIDAgXTtcblx0XHR9KSxcblxuXHRcdFwibGFzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHJldHVybiBbIGxlbmd0aCAtIDEgXTtcblx0XHR9KSxcblxuXHRcdFwiZXFcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0cmV0dXJuIFsgYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudCBdO1xuXHRcdH0pLFxuXG5cdFx0XCJldmVuXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pLFxuXG5cdFx0XCJvZGRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHR2YXIgaSA9IDE7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkgKz0gMiApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSksXG5cblx0XHRcImx0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcblx0XHRcdHZhciBpID0gYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudDtcblx0XHRcdGZvciAoIDsgLS1pID49IDA7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KSxcblxuXHRcdFwiZ3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuXHRcdFx0Zm9yICggOyArK2kgPCBsZW5ndGg7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KVxuXHR9XG59O1xuXG5FeHByLnBzZXVkb3NbXCJudGhcIl0gPSBFeHByLnBzZXVkb3NbXCJlcVwiXTtcblxuLy8gQWRkIGJ1dHRvbi9pbnB1dCB0eXBlIHBzZXVkb3NcbmZvciAoIGkgaW4geyByYWRpbzogdHJ1ZSwgY2hlY2tib3g6IHRydWUsIGZpbGU6IHRydWUsIHBhc3N3b3JkOiB0cnVlLCBpbWFnZTogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUlucHV0UHNldWRvKCBpICk7XG59XG5mb3IgKCBpIGluIHsgc3VibWl0OiB0cnVlLCByZXNldDogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUJ1dHRvblBzZXVkbyggaSApO1xufVxuXG4vLyBFYXN5IEFQSSBmb3IgY3JlYXRpbmcgbmV3IHNldEZpbHRlcnNcbmZ1bmN0aW9uIHNldEZpbHRlcnMoKSB7fVxuc2V0RmlsdGVycy5wcm90b3R5cGUgPSBFeHByLmZpbHRlcnMgPSBFeHByLnBzZXVkb3M7XG5FeHByLnNldEZpbHRlcnMgPSBuZXcgc2V0RmlsdGVycygpO1xuXG50b2tlbml6ZSA9IFNpenpsZS50b2tlbml6ZSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgcGFyc2VPbmx5ICkge1xuXHR2YXIgbWF0Y2hlZCwgbWF0Y2gsIHRva2VucywgdHlwZSxcblx0XHRzb0ZhciwgZ3JvdXBzLCBwcmVGaWx0ZXJzLFxuXHRcdGNhY2hlZCA9IHRva2VuQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcblxuXHRpZiAoIGNhY2hlZCApIHtcblx0XHRyZXR1cm4gcGFyc2VPbmx5ID8gMCA6IGNhY2hlZC5zbGljZSggMCApO1xuXHR9XG5cblx0c29GYXIgPSBzZWxlY3Rvcjtcblx0Z3JvdXBzID0gW107XG5cdHByZUZpbHRlcnMgPSBFeHByLnByZUZpbHRlcjtcblxuXHR3aGlsZSAoIHNvRmFyICkge1xuXG5cdFx0Ly8gQ29tbWEgYW5kIGZpcnN0IHJ1blxuXHRcdGlmICggIW1hdGNoZWQgfHwgKG1hdGNoID0gcmNvbW1hLmV4ZWMoIHNvRmFyICkpICkge1xuXHRcdFx0aWYgKCBtYXRjaCApIHtcblx0XHRcdFx0Ly8gRG9uJ3QgY29uc3VtZSB0cmFpbGluZyBjb21tYXMgYXMgdmFsaWRcblx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hbMF0ubGVuZ3RoICkgfHwgc29GYXI7XG5cdFx0XHR9XG5cdFx0XHRncm91cHMucHVzaCggKHRva2VucyA9IFtdKSApO1xuXHRcdH1cblxuXHRcdG1hdGNoZWQgPSBmYWxzZTtcblxuXHRcdC8vIENvbWJpbmF0b3JzXG5cdFx0aWYgKCAobWF0Y2ggPSByY29tYmluYXRvcnMuZXhlYyggc29GYXIgKSkgKSB7XG5cdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cdFx0XHRcdC8vIENhc3QgZGVzY2VuZGFudCBjb21iaW5hdG9ycyB0byBzcGFjZVxuXHRcdFx0XHR0eXBlOiBtYXRjaFswXS5yZXBsYWNlKCBydHJpbSwgXCIgXCIgKVxuXHRcdFx0fSk7XG5cdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuXHRcdH1cblxuXHRcdC8vIEZpbHRlcnNcblx0XHRmb3IgKCB0eXBlIGluIEV4cHIuZmlsdGVyICkge1xuXHRcdFx0aWYgKCAobWF0Y2ggPSBtYXRjaEV4cHJbIHR5cGUgXS5leGVjKCBzb0ZhciApKSAmJiAoIXByZUZpbHRlcnNbIHR5cGUgXSB8fFxuXHRcdFx0XHQobWF0Y2ggPSBwcmVGaWx0ZXJzWyB0eXBlIF0oIG1hdGNoICkpKSApIHtcblx0XHRcdFx0bWF0Y2hlZCA9IG1hdGNoLnNoaWZ0KCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRcdG1hdGNoZXM6IG1hdGNoXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggIW1hdGNoZWQgKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgaW52YWxpZCBleGNlc3Ncblx0Ly8gaWYgd2UncmUganVzdCBwYXJzaW5nXG5cdC8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3Igb3IgcmV0dXJuIHRva2Vuc1xuXHRyZXR1cm4gcGFyc2VPbmx5ID9cblx0XHRzb0Zhci5sZW5ndGggOlxuXHRcdHNvRmFyID9cblx0XHRcdFNpenpsZS5lcnJvciggc2VsZWN0b3IgKSA6XG5cdFx0XHQvLyBDYWNoZSB0aGUgdG9rZW5zXG5cdFx0XHR0b2tlbkNhY2hlKCBzZWxlY3RvciwgZ3JvdXBzICkuc2xpY2UoIDAgKTtcbn07XG5cbmZ1bmN0aW9uIHRvU2VsZWN0b3IoIHRva2VucyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IHRva2Vucy5sZW5ndGgsXG5cdFx0c2VsZWN0b3IgPSBcIlwiO1xuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRzZWxlY3RvciArPSB0b2tlbnNbaV0udmFsdWU7XG5cdH1cblx0cmV0dXJuIHNlbGVjdG9yO1xufVxuXG5mdW5jdGlvbiBhZGRDb21iaW5hdG9yKCBtYXRjaGVyLCBjb21iaW5hdG9yLCBiYXNlICkge1xuXHR2YXIgZGlyID0gY29tYmluYXRvci5kaXIsXG5cdFx0c2tpcCA9IGNvbWJpbmF0b3IubmV4dCxcblx0XHRrZXkgPSBza2lwIHx8IGRpcixcblx0XHRjaGVja05vbkVsZW1lbnRzID0gYmFzZSAmJiBrZXkgPT09IFwicGFyZW50Tm9kZVwiLFxuXHRcdGRvbmVOYW1lID0gZG9uZSsrO1xuXG5cdHJldHVybiBjb21iaW5hdG9yLmZpcnN0ID9cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGNsb3Nlc3QgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSA6XG5cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGFsbCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudHNcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIG9sZENhY2hlLCB1bmlxdWVDYWNoZSwgb3V0ZXJDYWNoZSxcblx0XHRcdFx0bmV3Q2FjaGUgPSBbIGRpcnJ1bnMsIGRvbmVOYW1lIF07XG5cblx0XHRcdC8vIFdlIGNhbid0IHNldCBhcmJpdHJhcnkgZGF0YSBvbiBYTUwgbm9kZXMsIHNvIHRoZXkgZG9uJ3QgYmVuZWZpdCBmcm9tIGNvbWJpbmF0b3IgY2FjaGluZ1xuXHRcdFx0aWYgKCB4bWwgKSB7XG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gZWxlbVsgZXhwYW5kbyBdIHx8IChlbGVtWyBleHBhbmRvIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBlbGVtLnVuaXF1ZUlEIF0gfHwgKG91dGVyQ2FjaGVbIGVsZW0udW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0aWYgKCBza2lwICYmIHNraXAgPT09IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0XHRcdFx0ZWxlbSA9IGVsZW1bIGRpciBdIHx8IGVsZW07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCAob2xkQ2FjaGUgPSB1bmlxdWVDYWNoZVsga2V5IF0pICYmXG5cdFx0XHRcdFx0XHRcdG9sZENhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgb2xkQ2FjaGVbIDEgXSA9PT0gZG9uZU5hbWUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQXNzaWduIHRvIG5ld0NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChuZXdDYWNoZVsgMiBdID0gb2xkQ2FjaGVbIDIgXSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXVzZSBuZXdjYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlWyBrZXkgXSA9IG5ld0NhY2hlO1xuXG5cdFx0XHRcdFx0XHRcdC8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuXHRcdFx0XHRcdFx0XHRpZiAoIChuZXdDYWNoZVsgMiBdID0gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkpICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICkge1xuXHRyZXR1cm4gbWF0Y2hlcnMubGVuZ3RoID4gMSA/XG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHZhciBpID0gbWF0Y2hlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggIW1hdGNoZXJzW2ldKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gOlxuXHRcdG1hdGNoZXJzWzBdO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBsZUNvbnRleHRzKCBzZWxlY3RvciwgY29udGV4dHMsIHJlc3VsdHMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBjb250ZXh0cy5sZW5ndGg7XG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFNpenpsZSggc2VsZWN0b3IsIGNvbnRleHRzW2ldLCByZXN1bHRzICk7XG5cdH1cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGNvbmRlbnNlKCB1bm1hdGNoZWQsIG1hcCwgZmlsdGVyLCBjb250ZXh0LCB4bWwgKSB7XG5cdHZhciBlbGVtLFxuXHRcdG5ld1VubWF0Y2hlZCA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGxlbiA9IHVubWF0Y2hlZC5sZW5ndGgsXG5cdFx0bWFwcGVkID0gbWFwICE9IG51bGw7XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAoZWxlbSA9IHVubWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRpZiAoICFmaWx0ZXIgfHwgZmlsdGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0bmV3VW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0aWYgKCBtYXBwZWQgKSB7XG5cdFx0XHRcdFx0bWFwLnB1c2goIGkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBuZXdVbm1hdGNoZWQ7XG59XG5cbmZ1bmN0aW9uIHNldE1hdGNoZXIoIHByZUZpbHRlciwgc2VsZWN0b3IsIG1hdGNoZXIsIHBvc3RGaWx0ZXIsIHBvc3RGaW5kZXIsIHBvc3RTZWxlY3RvciApIHtcblx0aWYgKCBwb3N0RmlsdGVyICYmICFwb3N0RmlsdGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0cG9zdEZpbHRlciA9IHNldE1hdGNoZXIoIHBvc3RGaWx0ZXIgKTtcblx0fVxuXHRpZiAoIHBvc3RGaW5kZXIgJiYgIXBvc3RGaW5kZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmluZGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICk7XG5cdH1cblx0cmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgcmVzdWx0cywgY29udGV4dCwgeG1sICkge1xuXHRcdHZhciB0ZW1wLCBpLCBlbGVtLFxuXHRcdFx0cHJlTWFwID0gW10sXG5cdFx0XHRwb3N0TWFwID0gW10sXG5cdFx0XHRwcmVleGlzdGluZyA9IHJlc3VsdHMubGVuZ3RoLFxuXG5cdFx0XHQvLyBHZXQgaW5pdGlhbCBlbGVtZW50cyBmcm9tIHNlZWQgb3IgY29udGV4dFxuXHRcdFx0ZWxlbXMgPSBzZWVkIHx8IG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yIHx8IFwiKlwiLCBjb250ZXh0Lm5vZGVUeXBlID8gWyBjb250ZXh0IF0gOiBjb250ZXh0LCBbXSApLFxuXG5cdFx0XHQvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cblx0XHRcdG1hdGNoZXJJbiA9IHByZUZpbHRlciAmJiAoIHNlZWQgfHwgIXNlbGVjdG9yICkgP1xuXHRcdFx0XHRjb25kZW5zZSggZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdGVsZW1zLFxuXG5cdFx0XHRtYXRjaGVyT3V0ID0gbWF0Y2hlciA/XG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgYSBwb3N0RmluZGVyLCBvciBmaWx0ZXJlZCBzZWVkLCBvciBub24tc2VlZCBwb3N0RmlsdGVyIG9yIHByZWV4aXN0aW5nIHJlc3VsdHMsXG5cdFx0XHRcdHBvc3RGaW5kZXIgfHwgKCBzZWVkID8gcHJlRmlsdGVyIDogcHJlZXhpc3RpbmcgfHwgcG9zdEZpbHRlciApID9cblxuXHRcdFx0XHRcdC8vIC4uLmludGVybWVkaWF0ZSBwcm9jZXNzaW5nIGlzIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdFtdIDpcblxuXHRcdFx0XHRcdC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxuXHRcdFx0XHRcdHJlc3VsdHMgOlxuXHRcdFx0XHRtYXRjaGVySW47XG5cblx0XHQvLyBGaW5kIHByaW1hcnkgbWF0Y2hlc1xuXHRcdGlmICggbWF0Y2hlciApIHtcblx0XHRcdG1hdGNoZXIoIG1hdGNoZXJJbiwgbWF0Y2hlck91dCwgY29udGV4dCwgeG1sICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcG9zdEZpbHRlclxuXHRcdGlmICggcG9zdEZpbHRlciApIHtcblx0XHRcdHRlbXAgPSBjb25kZW5zZSggbWF0Y2hlck91dCwgcG9zdE1hcCApO1xuXHRcdFx0cG9zdEZpbHRlciggdGVtcCwgW10sIGNvbnRleHQsIHhtbCApO1xuXG5cdFx0XHQvLyBVbi1tYXRjaCBmYWlsaW5nIGVsZW1lbnRzIGJ5IG1vdmluZyB0aGVtIGJhY2sgdG8gbWF0Y2hlckluXG5cdFx0XHRpID0gdGVtcC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAoZWxlbSA9IHRlbXBbaV0pICkge1xuXHRcdFx0XHRcdG1hdGNoZXJPdXRbIHBvc3RNYXBbaV0gXSA9ICEobWF0Y2hlckluWyBwb3N0TWFwW2ldIF0gPSBlbGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggc2VlZCApIHtcblx0XHRcdGlmICggcG9zdEZpbmRlciB8fCBwcmVGaWx0ZXIgKSB7XG5cdFx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblx0XHRcdFx0XHQvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcblx0XHRcdFx0XHR0ZW1wID0gW107XG5cdFx0XHRcdFx0aSA9IG1hdGNoZXJPdXQubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICkge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXN0b3JlIG1hdGNoZXJJbiBzaW5jZSBlbGVtIGlzIG5vdCB5ZXQgYSBmaW5hbCBtYXRjaFxuXHRcdFx0XHRcdFx0XHR0ZW1wLnB1c2goIChtYXRjaGVySW5baV0gPSBlbGVtKSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwb3N0RmluZGVyKCBudWxsLCAobWF0Y2hlck91dCA9IFtdKSwgdGVtcCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIG1hdGNoZWQgZWxlbWVudHMgZnJvbSBzZWVkIHRvIHJlc3VsdHMgdG8ga2VlcCB0aGVtIHN5bmNocm9uaXplZFxuXHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdGlmICggKGVsZW0gPSBtYXRjaGVyT3V0W2ldKSAmJlxuXHRcdFx0XHRcdFx0KHRlbXAgPSBwb3N0RmluZGVyID8gaW5kZXhPZiggc2VlZCwgZWxlbSApIDogcHJlTWFwW2ldKSA+IC0xICkge1xuXG5cdFx0XHRcdFx0XHRzZWVkW3RlbXBdID0gIShyZXN1bHRzW3RlbXBdID0gZWxlbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBBZGQgZWxlbWVudHMgdG8gcmVzdWx0cywgdGhyb3VnaCBwb3N0RmluZGVyIGlmIGRlZmluZWRcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlck91dCA9IGNvbmRlbnNlKFxuXHRcdFx0XHRtYXRjaGVyT3V0ID09PSByZXN1bHRzID9cblx0XHRcdFx0XHRtYXRjaGVyT3V0LnNwbGljZSggcHJlZXhpc3RpbmcsIG1hdGNoZXJPdXQubGVuZ3RoICkgOlxuXHRcdFx0XHRcdG1hdGNoZXJPdXRcblx0XHRcdCk7XG5cdFx0XHRpZiAoIHBvc3RGaW5kZXIgKSB7XG5cdFx0XHRcdHBvc3RGaW5kZXIoIG51bGwsIHJlc3VsdHMsIG1hdGNoZXJPdXQsIHhtbCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgbWF0Y2hlck91dCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMgKSB7XG5cdHZhciBjaGVja0NvbnRleHQsIG1hdGNoZXIsIGosXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcblx0XHRsZWFkaW5nUmVsYXRpdmUgPSBFeHByLnJlbGF0aXZlWyB0b2tlbnNbMF0udHlwZSBdLFxuXHRcdGltcGxpY2l0UmVsYXRpdmUgPSBsZWFkaW5nUmVsYXRpdmUgfHwgRXhwci5yZWxhdGl2ZVtcIiBcIl0sXG5cdFx0aSA9IGxlYWRpbmdSZWxhdGl2ZSA/IDEgOiAwLFxuXG5cdFx0Ly8gVGhlIGZvdW5kYXRpb25hbCBtYXRjaGVyIGVuc3VyZXMgdGhhdCBlbGVtZW50cyBhcmUgcmVhY2hhYmxlIGZyb20gdG9wLWxldmVsIGNvbnRleHQocylcblx0XHRtYXRjaENvbnRleHQgPSBhZGRDb21iaW5hdG9yKCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBjaGVja0NvbnRleHQ7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoQW55Q29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YoIGNoZWNrQ29udGV4dCwgZWxlbSApID4gLTE7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoZXJzID0gWyBmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIHJldCA9ICggIWxlYWRpbmdSZWxhdGl2ZSAmJiAoIHhtbCB8fCBjb250ZXh0ICE9PSBvdXRlcm1vc3RDb250ZXh0ICkgKSB8fCAoXG5cdFx0XHRcdChjaGVja0NvbnRleHQgPSBjb250ZXh0KS5ub2RlVHlwZSA/XG5cdFx0XHRcdFx0bWF0Y2hDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdFx0bWF0Y2hBbnlDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSApO1xuXHRcdFx0Ly8gQXZvaWQgaGFuZ2luZyBvbnRvIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cdFx0XHRjaGVja0NvbnRleHQgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IF07XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAobWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1tpXS50eXBlIF0pICkge1xuXHRcdFx0bWF0Y2hlcnMgPSBbIGFkZENvbWJpbmF0b3IoZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksIG1hdGNoZXIpIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXIgPSBFeHByLmZpbHRlclsgdG9rZW5zW2ldLnR5cGUgXS5hcHBseSggbnVsbCwgdG9rZW5zW2ldLm1hdGNoZXMgKTtcblxuXHRcdFx0Ly8gUmV0dXJuIHNwZWNpYWwgdXBvbiBzZWVpbmcgYSBwb3NpdGlvbmFsIG1hdGNoZXJcblx0XHRcdGlmICggbWF0Y2hlclsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBuZXh0IHJlbGF0aXZlIG9wZXJhdG9yIChpZiBhbnkpIGZvciBwcm9wZXIgaGFuZGxpbmdcblx0XHRcdFx0aiA9ICsraTtcblx0XHRcdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBFeHByLnJlbGF0aXZlWyB0b2tlbnNbal0udHlwZSBdICkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZXRNYXRjaGVyKFxuXHRcdFx0XHRcdGkgPiAxICYmIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApLFxuXHRcdFx0XHRcdGkgPiAxICYmIHRvU2VsZWN0b3IoXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGUgcHJlY2VkaW5nIHRva2VuIHdhcyBhIGRlc2NlbmRhbnQgY29tYmluYXRvciwgaW5zZXJ0IGFuIGltcGxpY2l0IGFueS1lbGVtZW50IGAqYFxuXHRcdFx0XHRcdFx0dG9rZW5zLnNsaWNlKCAwLCBpIC0gMSApLmNvbmNhdCh7IHZhbHVlOiB0b2tlbnNbIGkgLSAyIF0udHlwZSA9PT0gXCIgXCIgPyBcIipcIiA6IFwiXCIgfSlcblx0XHRcdFx0XHQpLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSxcblx0XHRcdFx0XHRtYXRjaGVyLFxuXHRcdFx0XHRcdGkgPCBqICYmIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMuc2xpY2UoIGksIGogKSApLFxuXHRcdFx0XHRcdGogPCBsZW4gJiYgbWF0Y2hlckZyb21Ub2tlbnMoICh0b2tlbnMgPSB0b2tlbnMuc2xpY2UoIGogKSkgKSxcblx0XHRcdFx0XHRqIDwgbGVuICYmIHRvU2VsZWN0b3IoIHRva2VucyApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVycy5wdXNoKCBtYXRjaGVyICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSB7XG5cdHZhciBieVNldCA9IHNldE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0YnlFbGVtZW50ID0gZWxlbWVudE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0c3VwZXJNYXRjaGVyID0gZnVuY3Rpb24oIHNlZWQsIGNvbnRleHQsIHhtbCwgcmVzdWx0cywgb3V0ZXJtb3N0ICkge1xuXHRcdFx0dmFyIGVsZW0sIGosIG1hdGNoZXIsXG5cdFx0XHRcdG1hdGNoZWRDb3VudCA9IDAsXG5cdFx0XHRcdGkgPSBcIjBcIixcblx0XHRcdFx0dW5tYXRjaGVkID0gc2VlZCAmJiBbXSxcblx0XHRcdFx0c2V0TWF0Y2hlZCA9IFtdLFxuXHRcdFx0XHRjb250ZXh0QmFja3VwID0gb3V0ZXJtb3N0Q29udGV4dCxcblx0XHRcdFx0Ly8gV2UgbXVzdCBhbHdheXMgaGF2ZSBlaXRoZXIgc2VlZCBlbGVtZW50cyBvciBvdXRlcm1vc3QgY29udGV4dFxuXHRcdFx0XHRlbGVtcyA9IHNlZWQgfHwgYnlFbGVtZW50ICYmIEV4cHIuZmluZFtcIlRBR1wiXSggXCIqXCIsIG91dGVybW9zdCApLFxuXHRcdFx0XHQvLyBVc2UgaW50ZWdlciBkaXJydW5zIGlmZiB0aGlzIGlzIHRoZSBvdXRlcm1vc3QgbWF0Y2hlclxuXHRcdFx0XHRkaXJydW5zVW5pcXVlID0gKGRpcnJ1bnMgKz0gY29udGV4dEJhY2t1cCA9PSBudWxsID8gMSA6IE1hdGgucmFuZG9tKCkgfHwgMC4xKSxcblx0XHRcdFx0bGVuID0gZWxlbXMubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHQgPT09IGRvY3VtZW50IHx8IGNvbnRleHQgfHwgb3V0ZXJtb3N0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZWxlbWVudHMgcGFzc2luZyBlbGVtZW50TWF0Y2hlcnMgZGlyZWN0bHkgdG8gcmVzdWx0c1xuXHRcdFx0Ly8gU3VwcG9ydDogSUU8OSwgU2FmYXJpXG5cdFx0XHQvLyBUb2xlcmF0ZSBOb2RlTGlzdCBwcm9wZXJ0aWVzIChJRTogXCJsZW5ndGhcIjsgU2FmYXJpOiA8bnVtYmVyPikgbWF0Y2hpbmcgZWxlbWVudHMgYnkgaWRcblx0XHRcdGZvciAoIDsgaSAhPT0gbGVuICYmIChlbGVtID0gZWxlbXNbaV0pICE9IG51bGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBieUVsZW1lbnQgJiYgZWxlbSApIHtcblx0XHRcdFx0XHRqID0gMDtcblx0XHRcdFx0XHRpZiAoICFjb250ZXh0ICYmIGVsZW0ub3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnQgKSB7XG5cdFx0XHRcdFx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHRcdFx0XHRcdFx0eG1sID0gIWRvY3VtZW50SXNIVE1MO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR3aGlsZSAoIChtYXRjaGVyID0gZWxlbWVudE1hdGNoZXJzW2orK10pICkge1xuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0IHx8IGRvY3VtZW50LCB4bWwpICkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRcdFx0ZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHJhY2sgdW5tYXRjaGVkIGVsZW1lbnRzIGZvciBzZXQgZmlsdGVyc1xuXHRcdFx0XHRpZiAoIGJ5U2V0ICkge1xuXHRcdFx0XHRcdC8vIFRoZXkgd2lsbCBoYXZlIGdvbmUgdGhyb3VnaCBhbGwgcG9zc2libGUgbWF0Y2hlcnNcblx0XHRcdFx0XHRpZiAoIChlbGVtID0gIW1hdGNoZXIgJiYgZWxlbSkgKSB7XG5cdFx0XHRcdFx0XHRtYXRjaGVkQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBMZW5ndGhlbiB0aGUgYXJyYXkgZm9yIGV2ZXJ5IGVsZW1lbnQsIG1hdGNoZWQgb3Igbm90XG5cdFx0XHRcdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0XHRcdFx0dW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gYGlgIGlzIG5vdyB0aGUgY291bnQgb2YgZWxlbWVudHMgdmlzaXRlZCBhYm92ZSwgYW5kIGFkZGluZyBpdCB0byBgbWF0Y2hlZENvdW50YFxuXHRcdFx0Ly8gbWFrZXMgdGhlIGxhdHRlciBub25uZWdhdGl2ZS5cblx0XHRcdG1hdGNoZWRDb3VudCArPSBpO1xuXG5cdFx0XHQvLyBBcHBseSBzZXQgZmlsdGVycyB0byB1bm1hdGNoZWQgZWxlbWVudHNcblx0XHRcdC8vIE5PVEU6IFRoaXMgY2FuIGJlIHNraXBwZWQgaWYgdGhlcmUgYXJlIG5vIHVubWF0Y2hlZCBlbGVtZW50cyAoaS5lLiwgYG1hdGNoZWRDb3VudGBcblx0XHRcdC8vIGVxdWFscyBgaWApLCB1bmxlc3Mgd2UgZGlkbid0IHZpc2l0IF9hbnlfIGVsZW1lbnRzIGluIHRoZSBhYm92ZSBsb29wIGJlY2F1c2Ugd2UgaGF2ZVxuXHRcdFx0Ly8gbm8gZWxlbWVudCBtYXRjaGVycyBhbmQgbm8gc2VlZC5cblx0XHRcdC8vIEluY3JlbWVudGluZyBhbiBpbml0aWFsbHktc3RyaW5nIFwiMFwiIGBpYCBhbGxvd3MgYGlgIHRvIHJlbWFpbiBhIHN0cmluZyBvbmx5IGluIHRoYXRcblx0XHRcdC8vIGNhc2UsIHdoaWNoIHdpbGwgcmVzdWx0IGluIGEgXCIwMFwiIGBtYXRjaGVkQ291bnRgIHRoYXQgZGlmZmVycyBmcm9tIGBpYCBidXQgaXMgYWxzb1xuXHRcdFx0Ly8gbnVtZXJpY2FsbHkgemVyby5cblx0XHRcdGlmICggYnlTZXQgJiYgaSAhPT0gbWF0Y2hlZENvdW50ICkge1xuXHRcdFx0XHRqID0gMDtcblx0XHRcdFx0d2hpbGUgKCAobWF0Y2hlciA9IHNldE1hdGNoZXJzW2orK10pICkge1xuXHRcdFx0XHRcdG1hdGNoZXIoIHVubWF0Y2hlZCwgc2V0TWF0Y2hlZCwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRcdFx0Ly8gUmVpbnRlZ3JhdGUgZWxlbWVudCBtYXRjaGVzIHRvIGVsaW1pbmF0ZSB0aGUgbmVlZCBmb3Igc29ydGluZ1xuXHRcdFx0XHRcdGlmICggbWF0Y2hlZENvdW50ID4gMCApIHtcblx0XHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoICEodW5tYXRjaGVkW2ldIHx8IHNldE1hdGNoZWRbaV0pICkge1xuXHRcdFx0XHRcdFx0XHRcdHNldE1hdGNoZWRbaV0gPSBwb3AuY2FsbCggcmVzdWx0cyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRGlzY2FyZCBpbmRleCBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gZ2V0IG9ubHkgYWN0dWFsIG1hdGNoZXNcblx0XHRcdFx0XHRzZXRNYXRjaGVkID0gY29uZGVuc2UoIHNldE1hdGNoZWQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCBtYXRjaGVzIHRvIHJlc3VsdHNcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2V0TWF0Y2hlZCApO1xuXG5cdFx0XHRcdC8vIFNlZWRsZXNzIHNldCBtYXRjaGVzIHN1Y2NlZWRpbmcgbXVsdGlwbGUgc3VjY2Vzc2Z1bCBtYXRjaGVycyBzdGlwdWxhdGUgc29ydGluZ1xuXHRcdFx0XHRpZiAoIG91dGVybW9zdCAmJiAhc2VlZCAmJiBzZXRNYXRjaGVkLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHQoIG1hdGNoZWRDb3VudCArIHNldE1hdGNoZXJzLmxlbmd0aCApID4gMSApIHtcblxuXHRcdFx0XHRcdFNpenpsZS51bmlxdWVTb3J0KCByZXN1bHRzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gT3ZlcnJpZGUgbWFuaXB1bGF0aW9uIG9mIGdsb2JhbHMgYnkgbmVzdGVkIG1hdGNoZXJzXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0ZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG5cdFx0XHRcdG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0QmFja3VwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdW5tYXRjaGVkO1xuXHRcdH07XG5cblx0cmV0dXJuIGJ5U2V0ID9cblx0XHRtYXJrRnVuY3Rpb24oIHN1cGVyTWF0Y2hlciApIDpcblx0XHRzdXBlck1hdGNoZXI7XG59XG5cbmNvbXBpbGUgPSBTaXp6bGUuY29tcGlsZSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgbWF0Y2ggLyogSW50ZXJuYWwgVXNlIE9ubHkgKi8gKSB7XG5cdHZhciBpLFxuXHRcdHNldE1hdGNoZXJzID0gW10sXG5cdFx0ZWxlbWVudE1hdGNoZXJzID0gW10sXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZVsgc2VsZWN0b3IgKyBcIiBcIiBdO1xuXG5cdGlmICggIWNhY2hlZCApIHtcblx0XHQvLyBHZW5lcmF0ZSBhIGZ1bmN0aW9uIG9mIHJlY3Vyc2l2ZSBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBjaGVjayBlYWNoIGVsZW1lbnRcblx0XHRpZiAoICFtYXRjaCApIHtcblx0XHRcdG1hdGNoID0gdG9rZW5pemUoIHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdGkgPSBtYXRjaC5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRjYWNoZWQgPSBtYXRjaGVyRnJvbVRva2VucyggbWF0Y2hbaV0gKTtcblx0XHRcdGlmICggY2FjaGVkWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdHNldE1hdGNoZXJzLnB1c2goIGNhY2hlZCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudE1hdGNoZXJzLnB1c2goIGNhY2hlZCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhY2hlIHRoZSBjb21waWxlZCBmdW5jdGlvblxuXHRcdGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGUoIHNlbGVjdG9yLCBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSApO1xuXG5cdFx0Ly8gU2F2ZSBzZWxlY3RvciBhbmQgdG9rZW5pemF0aW9uXG5cdFx0Y2FjaGVkLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cdH1cblx0cmV0dXJuIGNhY2hlZDtcbn07XG5cbi8qKlxuICogQSBsb3ctbGV2ZWwgc2VsZWN0aW9uIGZ1bmN0aW9uIHRoYXQgd29ya3Mgd2l0aCBTaXp6bGUncyBjb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yIEEgc2VsZWN0b3Igb3IgYSBwcmUtY29tcGlsZWRcbiAqICBzZWxlY3RvciBmdW5jdGlvbiBidWlsdCB3aXRoIFNpenpsZS5jb21waWxlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHRzXVxuICogQHBhcmFtIHtBcnJheX0gW3NlZWRdIEEgc2V0IG9mIGVsZW1lbnRzIHRvIG1hdGNoIGFnYWluc3RcbiAqL1xuc2VsZWN0ID0gU2l6emxlLnNlbGVjdCA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApIHtcblx0dmFyIGksIHRva2VucywgdG9rZW4sIHR5cGUsIGZpbmQsXG5cdFx0Y29tcGlsZWQgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBzZWxlY3Rvcixcblx0XHRtYXRjaCA9ICFzZWVkICYmIHRva2VuaXplKCAoc2VsZWN0b3IgPSBjb21waWxlZC5zZWxlY3RvciB8fCBzZWxlY3RvcikgKTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBUcnkgdG8gbWluaW1pemUgb3BlcmF0aW9ucyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBzZWxlY3RvciBpbiB0aGUgbGlzdCBhbmQgbm8gc2VlZFxuXHQvLyAodGhlIGxhdHRlciBvZiB3aGljaCBndWFyYW50ZWVzIHVzIGNvbnRleHQpXG5cdGlmICggbWF0Y2gubGVuZ3RoID09PSAxICkge1xuXG5cdFx0Ly8gUmVkdWNlIGNvbnRleHQgaWYgdGhlIGxlYWRpbmcgY29tcG91bmQgc2VsZWN0b3IgaXMgYW4gSURcblx0XHR0b2tlbnMgPSBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwICk7XG5cdFx0aWYgKCB0b2tlbnMubGVuZ3RoID4gMiAmJiAodG9rZW4gPSB0b2tlbnNbMF0pLnR5cGUgPT09IFwiSURcIiAmJlxuXHRcdFx0XHRjb250ZXh0Lm5vZGVUeXBlID09PSA5ICYmIGRvY3VtZW50SXNIVE1MICYmIEV4cHIucmVsYXRpdmVbIHRva2Vuc1sxXS50eXBlIF0gKSB7XG5cblx0XHRcdGNvbnRleHQgPSAoIEV4cHIuZmluZFtcIklEXCJdKCB0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpLCBjb250ZXh0ICkgfHwgW10gKVswXTtcblx0XHRcdGlmICggIWNvbnRleHQgKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXG5cdFx0XHQvLyBQcmVjb21waWxlZCBtYXRjaGVycyB3aWxsIHN0aWxsIHZlcmlmeSBhbmNlc3RyeSwgc28gc3RlcCB1cCBhIGxldmVsXG5cdFx0XHR9IGVsc2UgaWYgKCBjb21waWxlZCApIHtcblx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQucGFyZW50Tm9kZTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSggdG9rZW5zLnNoaWZ0KCkudmFsdWUubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmV0Y2ggYSBzZWVkIHNldCBmb3IgcmlnaHQtdG8tbGVmdCBtYXRjaGluZ1xuXHRcdGkgPSBtYXRjaEV4cHJbXCJuZWVkc0NvbnRleHRcIl0udGVzdCggc2VsZWN0b3IgKSA/IDAgOiB0b2tlbnMubGVuZ3RoO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG9rZW4gPSB0b2tlbnNbaV07XG5cblx0XHRcdC8vIEFib3J0IGlmIHdlIGhpdCBhIGNvbWJpbmF0b3Jcblx0XHRcdGlmICggRXhwci5yZWxhdGl2ZVsgKHR5cGUgPSB0b2tlbi50eXBlKSBdICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICggKGZpbmQgPSBFeHByLmZpbmRbIHR5cGUgXSkgKSB7XG5cdFx0XHRcdC8vIFNlYXJjaCwgZXhwYW5kaW5nIGNvbnRleHQgZm9yIGxlYWRpbmcgc2libGluZyBjb21iaW5hdG9yc1xuXHRcdFx0XHRpZiAoIChzZWVkID0gZmluZChcblx0XHRcdFx0XHR0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICksXG5cdFx0XHRcdFx0cnNpYmxpbmcudGVzdCggdG9rZW5zWzBdLnR5cGUgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHRcdFx0XHQpKSApIHtcblxuXHRcdFx0XHRcdC8vIElmIHNlZWQgaXMgZW1wdHkgb3Igbm8gdG9rZW5zIHJlbWFpbiwgd2UgY2FuIHJldHVybiBlYXJseVxuXHRcdFx0XHRcdHRva2Vucy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdFx0XHRzZWxlY3RvciA9IHNlZWQubGVuZ3RoICYmIHRvU2VsZWN0b3IoIHRva2VucyApO1xuXHRcdFx0XHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2VlZCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcblx0Ly8gUHJvdmlkZSBgbWF0Y2hgIHRvIGF2b2lkIHJldG9rZW5pemF0aW9uIGlmIHdlIG1vZGlmaWVkIHRoZSBzZWxlY3RvciBhYm92ZVxuXHQoIGNvbXBpbGVkIHx8IGNvbXBpbGUoIHNlbGVjdG9yLCBtYXRjaCApICkoXG5cdFx0c2VlZCxcblx0XHRjb250ZXh0LFxuXHRcdCFkb2N1bWVudElzSFRNTCxcblx0XHRyZXN1bHRzLFxuXHRcdCFjb250ZXh0IHx8IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcblx0KTtcblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG4vLyBPbmUtdGltZSBhc3NpZ25tZW50c1xuXG4vLyBTb3J0IHN0YWJpbGl0eVxuc3VwcG9ydC5zb3J0U3RhYmxlID0gZXhwYW5kby5zcGxpdChcIlwiKS5zb3J0KCBzb3J0T3JkZXIgKS5qb2luKFwiXCIpID09PSBleHBhbmRvO1xuXG4vLyBTdXBwb3J0OiBDaHJvbWUgMTQtMzUrXG4vLyBBbHdheXMgYXNzdW1lIGR1cGxpY2F0ZXMgaWYgdGhleSBhcmVuJ3QgcGFzc2VkIHRvIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG5zdXBwb3J0LmRldGVjdER1cGxpY2F0ZXMgPSAhIWhhc0R1cGxpY2F0ZTtcblxuLy8gSW5pdGlhbGl6ZSBhZ2FpbnN0IHRoZSBkZWZhdWx0IGRvY3VtZW50XG5zZXREb2N1bWVudCgpO1xuXG4vLyBTdXBwb3J0OiBXZWJraXQ8NTM3LjMyIC0gU2FmYXJpIDYuMC4zL0Nocm9tZSAyNSAoZml4ZWQgaW4gQ2hyb21lIDI3KVxuLy8gRGV0YWNoZWQgbm9kZXMgY29uZm91bmRpbmdseSBmb2xsb3cgKmVhY2ggb3RoZXIqXG5zdXBwb3J0LnNvcnREZXRhY2hlZCA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdC8vIFNob3VsZCByZXR1cm4gMSwgYnV0IHJldHVybnMgNCAoZm9sbG93aW5nKVxuXHRyZXR1cm4gZWwuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSApICYgMTtcbn0pO1xuXG4vLyBTdXBwb3J0OiBJRTw4XG4vLyBQcmV2ZW50IGF0dHJpYnV0ZS9wcm9wZXJ0eSBcImludGVycG9sYXRpb25cIlxuLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNjQyOSUyOFZTLjg1JTI5LmFzcHhcbmlmICggIWFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdGVsLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+PC9hPlwiO1xuXHRyZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpID09PSBcIiNcIiA7XG59KSApIHtcblx0YWRkSGFuZGxlKCBcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIiwgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdGlmICggIWlzWE1MICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lLCBuYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwidHlwZVwiID8gMSA6IDIgKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vLyBTdXBwb3J0OiBJRTw5XG4vLyBVc2UgZGVmYXVsdFZhbHVlIGluIHBsYWNlIG9mIGdldEF0dHJpYnV0ZShcInZhbHVlXCIpXG5pZiAoICFzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdGVsLmlubmVySFRNTCA9IFwiPGlucHV0Lz5cIjtcblx0ZWwuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiwgXCJcIiApO1xuXHRyZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBcIlwiO1xufSkgKSB7XG5cdGFkZEhhbmRsZSggXCJ2YWx1ZVwiLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0aWYgKCAhaXNYTUwgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHR9KTtcbn1cblxuLy8gU3VwcG9ydDogSUU8OVxuLy8gVXNlIGdldEF0dHJpYnV0ZU5vZGUgdG8gZmV0Y2ggYm9vbGVhbnMgd2hlbiBnZXRBdHRyaWJ1dGUgbGllc1xuaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0cmV0dXJuIGVsLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpID09IG51bGw7XG59KSApIHtcblx0YWRkSGFuZGxlKCBib29sZWFucywgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdHZhciB2YWw7XG5cdFx0aWYgKCAhaXNYTUwgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbVsgbmFtZSBdID09PSB0cnVlID8gbmFtZS50b0xvd2VyQ2FzZSgpIDpcblx0XHRcdFx0XHQodmFsID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKCBuYW1lICkpICYmIHZhbC5zcGVjaWZpZWQgP1xuXHRcdFx0XHRcdHZhbC52YWx1ZSA6XG5cdFx0XHRcdG51bGw7XG5cdFx0fVxuXHR9KTtcbn1cblxucmV0dXJuIFNpenpsZTtcblxufSkoIHdpbmRvdyApO1xuXG5cblxualF1ZXJ5LmZpbmQgPSBTaXp6bGU7XG5qUXVlcnkuZXhwciA9IFNpenpsZS5zZWxlY3RvcnM7XG5cbi8vIERlcHJlY2F0ZWRcbmpRdWVyeS5leHByWyBcIjpcIiBdID0galF1ZXJ5LmV4cHIucHNldWRvcztcbmpRdWVyeS51bmlxdWVTb3J0ID0galF1ZXJ5LnVuaXF1ZSA9IFNpenpsZS51bmlxdWVTb3J0O1xualF1ZXJ5LnRleHQgPSBTaXp6bGUuZ2V0VGV4dDtcbmpRdWVyeS5pc1hNTERvYyA9IFNpenpsZS5pc1hNTDtcbmpRdWVyeS5jb250YWlucyA9IFNpenpsZS5jb250YWlucztcbmpRdWVyeS5lc2NhcGVTZWxlY3RvciA9IFNpenpsZS5lc2NhcGU7XG5cblxuXG5cbnZhciBkaXIgPSBmdW5jdGlvbiggZWxlbSwgZGlyLCB1bnRpbCApIHtcblx0dmFyIG1hdGNoZWQgPSBbXSxcblx0XHR0cnVuY2F0ZSA9IHVudGlsICE9PSB1bmRlZmluZWQ7XG5cblx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICYmIGVsZW0ubm9kZVR5cGUgIT09IDkgKSB7XG5cdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0aWYgKCB0cnVuY2F0ZSAmJiBqUXVlcnkoIGVsZW0gKS5pcyggdW50aWwgKSApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG1hdGNoZWQ7XG59O1xuXG5cbnZhciBzaWJsaW5ncyA9IGZ1bmN0aW9uKCBuLCBlbGVtICkge1xuXHR2YXIgbWF0Y2hlZCA9IFtdO1xuXG5cdGZvciAoIDsgbjsgbiA9IG4ubmV4dFNpYmxpbmcgKSB7XG5cdFx0aWYgKCBuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IGVsZW0gKSB7XG5cdFx0XHRtYXRjaGVkLnB1c2goIG4gKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWF0Y2hlZDtcbn07XG5cblxudmFyIHJuZWVkc0NvbnRleHQgPSBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7XG5cbnZhciByc2luZ2xlVGFnID0gKCAvXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSApO1xuXG5cblxudmFyIHJpc1NpbXBsZSA9IC9eLlteOiNcXFtcXC4sXSokLztcblxuLy8gSW1wbGVtZW50IHRoZSBpZGVudGljYWwgZnVuY3Rpb25hbGl0eSBmb3IgZmlsdGVyIGFuZCBub3RcbmZ1bmN0aW9uIHdpbm5vdyggZWxlbWVudHMsIHF1YWxpZmllciwgbm90ICkge1xuXHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBxdWFsaWZpZXIgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiAhIXF1YWxpZmllci5jYWxsKCBlbGVtLCBpLCBlbGVtICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBTaW5nbGUgZWxlbWVudFxuXHRpZiAoIHF1YWxpZmllci5ub2RlVHlwZSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAoIGVsZW0gPT09IHF1YWxpZmllciApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gQXJyYXlsaWtlIG9mIGVsZW1lbnRzIChqUXVlcnksIGFyZ3VtZW50cywgQXJyYXkpXG5cdGlmICggdHlwZW9mIHF1YWxpZmllciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAoIGluZGV4T2YuY2FsbCggcXVhbGlmaWVyLCBlbGVtICkgPiAtMSApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gU2ltcGxlIHNlbGVjdG9yIHRoYXQgY2FuIGJlIGZpbHRlcmVkIGRpcmVjdGx5LCByZW1vdmluZyBub24tRWxlbWVudHNcblx0aWYgKCByaXNTaW1wbGUudGVzdCggcXVhbGlmaWVyICkgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5maWx0ZXIoIHF1YWxpZmllciwgZWxlbWVudHMsIG5vdCApO1xuXHR9XG5cblx0Ly8gQ29tcGxleCBzZWxlY3RvciwgY29tcGFyZSB0aGUgdHdvIHNldHMsIHJlbW92aW5nIG5vbi1FbGVtZW50c1xuXHRxdWFsaWZpZXIgPSBqUXVlcnkuZmlsdGVyKCBxdWFsaWZpZXIsIGVsZW1lbnRzICk7XG5cdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiAoIGluZGV4T2YuY2FsbCggcXVhbGlmaWVyLCBlbGVtICkgPiAtMSApICE9PSBub3QgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMTtcblx0fSApO1xufVxuXG5qUXVlcnkuZmlsdGVyID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1zLCBub3QgKSB7XG5cdHZhciBlbGVtID0gZWxlbXNbIDAgXTtcblxuXHRpZiAoIG5vdCApIHtcblx0XHRleHByID0gXCI6bm90KFwiICsgZXhwciArIFwiKVwiO1xuXHR9XG5cblx0aWYgKCBlbGVtcy5sZW5ndGggPT09IDEgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBleHByICkgPyBbIGVsZW0gXSA6IFtdO1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXMoIGV4cHIsIGpRdWVyeS5ncmVwKCBlbGVtcywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGVsZW0ubm9kZVR5cGUgPT09IDE7XG5cdH0gKSApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRmaW5kOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGksIHJldCxcblx0XHRcdGxlbiA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0c2VsZiA9IHRoaXM7XG5cblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5KCBzZWxlY3RvciApLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHNlbGZbIGkgXSwgdGhpcyApICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICkgKTtcblx0XHR9XG5cblx0XHRyZXQgPSB0aGlzLnB1c2hTdGFjayggW10gKTtcblxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRqUXVlcnkuZmluZCggc2VsZWN0b3IsIHNlbGZbIGkgXSwgcmV0ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxlbiA+IDEgPyBqUXVlcnkudW5pcXVlU29ydCggcmV0ICkgOiByZXQ7XG5cdH0sXG5cdGZpbHRlcjogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgZmFsc2UgKSApO1xuXHR9LFxuXHRub3Q6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHdpbm5vdyggdGhpcywgc2VsZWN0b3IgfHwgW10sIHRydWUgKSApO1xuXHR9LFxuXHRpczogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiAhIXdpbm5vdyhcblx0XHRcdHRoaXMsXG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSBwb3NpdGlvbmFsL3JlbGF0aXZlIHNlbGVjdG9yLCBjaGVjayBtZW1iZXJzaGlwIGluIHRoZSByZXR1cm5lZCBzZXRcblx0XHRcdC8vIHNvICQoXCJwOmZpcnN0XCIpLmlzKFwicDpsYXN0XCIpIHdvbid0IHJldHVybiB0cnVlIGZvciBhIGRvYyB3aXRoIHR3byBcInBcIi5cblx0XHRcdHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiAmJiBybmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICkgP1xuXHRcdFx0XHRqUXVlcnkoIHNlbGVjdG9yICkgOlxuXHRcdFx0XHRzZWxlY3RvciB8fCBbXSxcblx0XHRcdGZhbHNlXG5cdFx0KS5sZW5ndGg7XG5cdH1cbn0gKTtcblxuXG4vLyBJbml0aWFsaXplIGEgalF1ZXJ5IG9iamVjdFxuXG5cbi8vIEEgY2VudHJhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgalF1ZXJ5KGRvY3VtZW50KVxudmFyIHJvb3RqUXVlcnksXG5cblx0Ly8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3Ncblx0Ly8gUHJpb3JpdGl6ZSAjaWQgb3ZlciA8dGFnPiB0byBhdm9pZCBYU1MgdmlhIGxvY2F0aW9uLmhhc2ggKCM5NTIxKVxuXHQvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAoIzExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcblx0Ly8gU2hvcnRjdXQgc2ltcGxlICNpZCBjYXNlIGZvciBzcGVlZFxuXHRycXVpY2tFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sXG5cblx0aW5pdCA9IGpRdWVyeS5mbi5pbml0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0LCByb290ICkge1xuXHRcdHZhciBtYXRjaCwgZWxlbTtcblxuXHRcdC8vIEhBTkRMRTogJChcIlwiKSwgJChudWxsKSwgJCh1bmRlZmluZWQpLCAkKGZhbHNlKVxuXHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Ly8gTWV0aG9kIGluaXQoKSBhY2NlcHRzIGFuIGFsdGVybmF0ZSByb290alF1ZXJ5XG5cdFx0Ly8gc28gbWlncmF0ZSBjYW4gc3VwcG9ydCBqUXVlcnkuc3ViIChnaC0yMTAxKVxuXHRcdHJvb3QgPSByb290IHx8IHJvb3RqUXVlcnk7XG5cblx0XHQvLyBIYW5kbGUgSFRNTCBzdHJpbmdzXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRpZiAoIHNlbGVjdG9yWyAwIF0gPT09IFwiPFwiICYmXG5cdFx0XHRcdHNlbGVjdG9yWyBzZWxlY3Rvci5sZW5ndGggLSAxIF0gPT09IFwiPlwiICYmXG5cdFx0XHRcdHNlbGVjdG9yLmxlbmd0aCA+PSAzICkge1xuXG5cdFx0XHRcdC8vIEFzc3VtZSB0aGF0IHN0cmluZ3MgdGhhdCBzdGFydCBhbmQgZW5kIHdpdGggPD4gYXJlIEhUTUwgYW5kIHNraXAgdGhlIHJlZ2V4IGNoZWNrXG5cdFx0XHRcdG1hdGNoID0gWyBudWxsLCBzZWxlY3RvciwgbnVsbCBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyggc2VsZWN0b3IgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWF0Y2ggaHRtbCBvciBtYWtlIHN1cmUgbm8gY29udGV4dCBpcyBzcGVjaWZpZWQgZm9yICNpZFxuXHRcdFx0aWYgKCBtYXRjaCAmJiAoIG1hdGNoWyAxIF0gfHwgIWNvbnRleHQgKSApIHtcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCkgLT4gJChhcnJheSlcblx0XHRcdFx0aWYgKCBtYXRjaFsgMSBdICkge1xuXHRcdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGV4dFsgMCBdIDogY29udGV4dDtcblxuXHRcdFx0XHRcdC8vIE9wdGlvbiB0byBydW4gc2NyaXB0cyBpcyB0cnVlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRcdC8vIEludGVudGlvbmFsbHkgbGV0IHRoZSBlcnJvciBiZSB0aHJvd24gaWYgcGFyc2VIVE1MIGlzIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLCBqUXVlcnkucGFyc2VIVE1MKFxuXHRcdFx0XHRcdFx0bWF0Y2hbIDEgXSxcblx0XHRcdFx0XHRcdGNvbnRleHQgJiYgY29udGV4dC5ub2RlVHlwZSA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogZG9jdW1lbnQsXG5cdFx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdFx0KSApO1xuXG5cdFx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwsIHByb3BzKVxuXHRcdFx0XHRcdGlmICggcnNpbmdsZVRhZy50ZXN0KCBtYXRjaFsgMSBdICkgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvbnRleHQgKSApIHtcblx0XHRcdFx0XHRcdGZvciAoIG1hdGNoIGluIGNvbnRleHQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUHJvcGVydGllcyBvZiBjb250ZXh0IGFyZSBjYWxsZWQgYXMgbWV0aG9kcyBpZiBwb3NzaWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB0aGlzWyBtYXRjaCBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpc1sgbWF0Y2ggXSggY29udGV4dFsgbWF0Y2ggXSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vIC4uLmFuZCBvdGhlcndpc2Ugc2V0IGFzIGF0dHJpYnV0ZXNcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmF0dHIoIG1hdGNoLCBjb250ZXh0WyBtYXRjaCBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoI2lkKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggbWF0Y2hbIDIgXSApO1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtICkge1xuXG5cdFx0XHRcdFx0XHQvLyBJbmplY3QgdGhlIGVsZW1lbnQgZGlyZWN0bHkgaW50byB0aGUgalF1ZXJ5IG9iamVjdFxuXHRcdFx0XHRcdFx0dGhpc1sgMCBdID0gZWxlbTtcblx0XHRcdFx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSEFORExFOiAkKGV4cHIsICQoLi4uKSlcblx0XHRcdH0gZWxzZSBpZiAoICFjb250ZXh0IHx8IGNvbnRleHQuanF1ZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm4gKCBjb250ZXh0IHx8IHJvb3QgKS5maW5kKCBzZWxlY3RvciApO1xuXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgY29udGV4dClcblx0XHRcdC8vICh3aGljaCBpcyBqdXN0IGVxdWl2YWxlbnQgdG86ICQoY29udGV4dCkuZmluZChleHByKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IoIGNvbnRleHQgKS5maW5kKCBzZWxlY3RvciApO1xuXHRcdFx0fVxuXG5cdFx0Ly8gSEFORExFOiAkKERPTUVsZW1lbnQpXG5cdFx0fSBlbHNlIGlmICggc2VsZWN0b3Iubm9kZVR5cGUgKSB7XG5cdFx0XHR0aGlzWyAwIF0gPSBzZWxlY3Rvcjtcblx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0Ly8gSEFORExFOiAkKGZ1bmN0aW9uKVxuXHRcdC8vIFNob3J0Y3V0IGZvciBkb2N1bWVudCByZWFkeVxuXHRcdH0gZWxzZSBpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBzZWxlY3RvciApICkge1xuXHRcdFx0cmV0dXJuIHJvb3QucmVhZHkgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHJvb3QucmVhZHkoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHRcdC8vIEV4ZWN1dGUgaW1tZWRpYXRlbHkgaWYgcmVhZHkgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0c2VsZWN0b3IoIGpRdWVyeSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBqUXVlcnkubWFrZUFycmF5KCBzZWxlY3RvciwgdGhpcyApO1xuXHR9O1xuXG4vLyBHaXZlIHRoZSBpbml0IGZ1bmN0aW9uIHRoZSBqUXVlcnkgcHJvdG90eXBlIGZvciBsYXRlciBpbnN0YW50aWF0aW9uXG5pbml0LnByb3RvdHlwZSA9IGpRdWVyeS5mbjtcblxuLy8gSW5pdGlhbGl6ZSBjZW50cmFsIHJlZmVyZW5jZVxucm9vdGpRdWVyeSA9IGpRdWVyeSggZG9jdW1lbnQgKTtcblxuXG52YXIgcnBhcmVudHNwcmV2ID0gL14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sXG5cblx0Ly8gTWV0aG9kcyBndWFyYW50ZWVkIHRvIHByb2R1Y2UgYSB1bmlxdWUgc2V0IHdoZW4gc3RhcnRpbmcgZnJvbSBhIHVuaXF1ZSBzZXRcblx0Z3VhcmFudGVlZFVuaXF1ZSA9IHtcblx0XHRjaGlsZHJlbjogdHJ1ZSxcblx0XHRjb250ZW50czogdHJ1ZSxcblx0XHRuZXh0OiB0cnVlLFxuXHRcdHByZXY6IHRydWVcblx0fTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRoYXM6IGZ1bmN0aW9uKCB0YXJnZXQgKSB7XG5cdFx0dmFyIHRhcmdldHMgPSBqUXVlcnkoIHRhcmdldCwgdGhpcyApLFxuXHRcdFx0bCA9IHRhcmdldHMubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpID0gMDtcblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHRoaXMsIHRhcmdldHNbIGkgXSApICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGNsb3Nlc3Q6IGZ1bmN0aW9uKCBzZWxlY3RvcnMsIGNvbnRleHQgKSB7XG5cdFx0dmFyIGN1cixcblx0XHRcdGkgPSAwLFxuXHRcdFx0bCA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0bWF0Y2hlZCA9IFtdLFxuXHRcdFx0dGFyZ2V0cyA9IHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgJiYgalF1ZXJ5KCBzZWxlY3RvcnMgKTtcblxuXHRcdC8vIFBvc2l0aW9uYWwgc2VsZWN0b3JzIG5ldmVyIG1hdGNoLCBzaW5jZSB0aGVyZSdzIG5vIF9zZWxlY3Rpb25fIGNvbnRleHRcblx0XHRpZiAoICFybmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9ycyApICkge1xuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRmb3IgKCBjdXIgPSB0aGlzWyBpIF07IGN1ciAmJiBjdXIgIT09IGNvbnRleHQ7IGN1ciA9IGN1ci5wYXJlbnROb2RlICkge1xuXG5cdFx0XHRcdFx0Ly8gQWx3YXlzIHNraXAgZG9jdW1lbnQgZnJhZ21lbnRzXG5cdFx0XHRcdFx0aWYgKCBjdXIubm9kZVR5cGUgPCAxMSAmJiAoIHRhcmdldHMgP1xuXHRcdFx0XHRcdFx0dGFyZ2V0cy5pbmRleCggY3VyICkgPiAtMSA6XG5cblx0XHRcdFx0XHRcdC8vIERvbid0IHBhc3Mgbm9uLWVsZW1lbnRzIHRvIFNpenpsZVxuXHRcdFx0XHRcdFx0Y3VyLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdFx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggY3VyLCBzZWxlY3RvcnMgKSApICkge1xuXG5cdFx0XHRcdFx0XHRtYXRjaGVkLnB1c2goIGN1ciApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkLmxlbmd0aCA+IDEgPyBqUXVlcnkudW5pcXVlU29ydCggbWF0Y2hlZCApIDogbWF0Y2hlZCApO1xuXHR9LFxuXG5cdC8vIERldGVybWluZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHNldFxuXHRpbmRleDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBObyBhcmd1bWVudCwgcmV0dXJuIGluZGV4IGluIHBhcmVudFxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCB0aGlzWyAwIF0gJiYgdGhpc1sgMCBdLnBhcmVudE5vZGUgKSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XG5cdFx0fVxuXG5cdFx0Ly8gSW5kZXggaW4gc2VsZWN0b3Jcblx0XHRpZiAoIHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggalF1ZXJ5KCBlbGVtICksIHRoaXNbIDAgXSApO1xuXHRcdH1cblxuXHRcdC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuXHRcdHJldHVybiBpbmRleE9mLmNhbGwoIHRoaXMsXG5cblx0XHRcdC8vIElmIGl0IHJlY2VpdmVzIGEgalF1ZXJ5IG9iamVjdCwgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdXNlZFxuXHRcdFx0ZWxlbS5qcXVlcnkgPyBlbGVtWyAwIF0gOiBlbGVtXG5cdFx0KTtcblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soXG5cdFx0XHRqUXVlcnkudW5pcXVlU29ydChcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLmdldCgpLCBqUXVlcnkoIHNlbGVjdG9yLCBjb250ZXh0ICkgKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0YWRkQmFjazogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLmFkZCggc2VsZWN0b3IgPT0gbnVsbCA/XG5cdFx0XHR0aGlzLnByZXZPYmplY3QgOiB0aGlzLnByZXZPYmplY3QuZmlsdGVyKCBzZWxlY3RvciApXG5cdFx0KTtcblx0fVxufSApO1xuXG5mdW5jdGlvbiBzaWJsaW5nKCBjdXIsIGRpciApIHtcblx0d2hpbGUgKCAoIGN1ciA9IGN1clsgZGlyIF0gKSAmJiBjdXIubm9kZVR5cGUgIT09IDEgKSB7fVxuXHRyZXR1cm4gY3VyO1xufVxuXG5qUXVlcnkuZWFjaCgge1xuXHRwYXJlbnQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0cmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcblx0fSxcblx0cGFyZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIgKTtcblx0fSxcblx0cGFyZW50c1VudGlsOiBmdW5jdGlvbiggZWxlbSwgaSwgdW50aWwgKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIsIHVudGlsICk7XG5cdH0sXG5cdG5leHQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5nKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIgKTtcblx0fSxcblx0cHJldjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIgKTtcblx0fSxcblx0bmV4dEFsbDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XG5cdH0sXG5cdHByZXZBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIgKTtcblx0fSxcblx0bmV4dFVudGlsOiBmdW5jdGlvbiggZWxlbSwgaSwgdW50aWwgKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJuZXh0U2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRwcmV2VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRzaWJsaW5nczogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmdzKCAoIGVsZW0ucGFyZW50Tm9kZSB8fCB7fSApLmZpcnN0Q2hpbGQsIGVsZW0gKTtcblx0fSxcblx0Y2hpbGRyZW46IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5ncyggZWxlbS5maXJzdENoaWxkICk7XG5cdH0sXG5cdGNvbnRlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZWxlbS5jb250ZW50RG9jdW1lbnQgfHwgalF1ZXJ5Lm1lcmdlKCBbXSwgZWxlbS5jaGlsZE5vZGVzICk7XG5cdH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBmbiApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggdW50aWwsIHNlbGVjdG9yICkge1xuXHRcdHZhciBtYXRjaGVkID0galF1ZXJ5Lm1hcCggdGhpcywgZm4sIHVudGlsICk7XG5cblx0XHRpZiAoIG5hbWUuc2xpY2UoIC01ICkgIT09IFwiVW50aWxcIiApIHtcblx0XHRcdHNlbGVjdG9yID0gdW50aWw7XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWxlY3RvciAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRtYXRjaGVkID0galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIG1hdGNoZWQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZXNcblx0XHRcdGlmICggIWd1YXJhbnRlZWRVbmlxdWVbIG5hbWUgXSApIHtcblx0XHRcdFx0alF1ZXJ5LnVuaXF1ZVNvcnQoIG1hdGNoZWQgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV2ZXJzZSBvcmRlciBmb3IgcGFyZW50cyogYW5kIHByZXYtZGVyaXZhdGl2ZXNcblx0XHRcdGlmICggcnBhcmVudHNwcmV2LnRlc3QoIG5hbWUgKSApIHtcblx0XHRcdFx0bWF0Y2hlZC5yZXZlcnNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkICk7XG5cdH07XG59ICk7XG52YXIgcm5vdGh0bWx3aGl0ZSA9ICggL1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nICk7XG5cblxuXG4vLyBDb252ZXJ0IFN0cmluZy1mb3JtYXR0ZWQgb3B0aW9ucyBpbnRvIE9iamVjdC1mb3JtYXR0ZWQgb25lc1xuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIHtcblx0dmFyIG9iamVjdCA9IHt9O1xuXHRqUXVlcnkuZWFjaCggb3B0aW9ucy5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdLCBmdW5jdGlvbiggXywgZmxhZyApIHtcblx0XHRvYmplY3RbIGZsYWcgXSA9IHRydWU7XG5cdH0gKTtcblx0cmV0dXJuIG9iamVjdDtcbn1cblxuLypcbiAqIENyZWF0ZSBhIGNhbGxiYWNrIGxpc3QgdXNpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICpcbiAqXHRvcHRpb25zOiBhbiBvcHRpb25hbCBsaXN0IG9mIHNwYWNlLXNlcGFyYXRlZCBvcHRpb25zIHRoYXQgd2lsbCBjaGFuZ2UgaG93XG4gKlx0XHRcdHRoZSBjYWxsYmFjayBsaXN0IGJlaGF2ZXMgb3IgYSBtb3JlIHRyYWRpdGlvbmFsIG9wdGlvbiBvYmplY3RcbiAqXG4gKiBCeSBkZWZhdWx0IGEgY2FsbGJhY2sgbGlzdCB3aWxsIGFjdCBsaWtlIGFuIGV2ZW50IGNhbGxiYWNrIGxpc3QgYW5kIGNhbiBiZVxuICogXCJmaXJlZFwiIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFBvc3NpYmxlIG9wdGlvbnM6XG4gKlxuICpcdG9uY2U6XHRcdFx0d2lsbCBlbnN1cmUgdGhlIGNhbGxiYWNrIGxpc3QgY2FuIG9ubHkgYmUgZmlyZWQgb25jZSAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHRtZW1vcnk6XHRcdFx0d2lsbCBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHZhbHVlcyBhbmQgd2lsbCBjYWxsIGFueSBjYWxsYmFjayBhZGRlZFxuICpcdFx0XHRcdFx0YWZ0ZXIgdGhlIGxpc3QgaGFzIGJlZW4gZmlyZWQgcmlnaHQgYXdheSB3aXRoIHRoZSBsYXRlc3QgXCJtZW1vcml6ZWRcIlxuICpcdFx0XHRcdFx0dmFsdWVzIChsaWtlIGEgRGVmZXJyZWQpXG4gKlxuICpcdHVuaXF1ZTpcdFx0XHR3aWxsIGVuc3VyZSBhIGNhbGxiYWNrIGNhbiBvbmx5IGJlIGFkZGVkIG9uY2UgKG5vIGR1cGxpY2F0ZSBpbiB0aGUgbGlzdClcbiAqXG4gKlx0c3RvcE9uRmFsc2U6XHRpbnRlcnJ1cHQgY2FsbGluZ3Mgd2hlbiBhIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAqXG4gKi9cbmpRdWVyeS5DYWxsYmFja3MgPSBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHQvLyBDb252ZXJ0IG9wdGlvbnMgZnJvbSBTdHJpbmctZm9ybWF0dGVkIHRvIE9iamVjdC1mb3JtYXR0ZWQgaWYgbmVlZGVkXG5cdC8vICh3ZSBjaGVjayBpbiBjYWNoZSBmaXJzdClcblx0b3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiID9cblx0XHRjcmVhdGVPcHRpb25zKCBvcHRpb25zICkgOlxuXHRcdGpRdWVyeS5leHRlbmQoIHt9LCBvcHRpb25zICk7XG5cblx0dmFyIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcblx0XHRmaXJpbmcsXG5cblx0XHQvLyBMYXN0IGZpcmUgdmFsdWUgZm9yIG5vbi1mb3JnZXR0YWJsZSBsaXN0c1xuXHRcdG1lbW9yeSxcblxuXHRcdC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IHdhcyBhbHJlYWR5IGZpcmVkXG5cdFx0ZmlyZWQsXG5cblx0XHQvLyBGbGFnIHRvIHByZXZlbnQgZmlyaW5nXG5cdFx0bG9ja2VkLFxuXG5cdFx0Ly8gQWN0dWFsIGNhbGxiYWNrIGxpc3Rcblx0XHRsaXN0ID0gW10sXG5cblx0XHQvLyBRdWV1ZSBvZiBleGVjdXRpb24gZGF0YSBmb3IgcmVwZWF0YWJsZSBsaXN0c1xuXHRcdHF1ZXVlID0gW10sXG5cblx0XHQvLyBJbmRleCBvZiBjdXJyZW50bHkgZmlyaW5nIGNhbGxiYWNrIChtb2RpZmllZCBieSBhZGQvcmVtb3ZlIGFzIG5lZWRlZClcblx0XHRmaXJpbmdJbmRleCA9IC0xLFxuXG5cdFx0Ly8gRmlyZSBjYWxsYmFja3Ncblx0XHRmaXJlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEVuZm9yY2Ugc2luZ2xlLWZpcmluZ1xuXHRcdFx0bG9ja2VkID0gb3B0aW9ucy5vbmNlO1xuXG5cdFx0XHQvLyBFeGVjdXRlIGNhbGxiYWNrcyBmb3IgYWxsIHBlbmRpbmcgZXhlY3V0aW9ucyxcblx0XHRcdC8vIHJlc3BlY3RpbmcgZmlyaW5nSW5kZXggb3ZlcnJpZGVzIGFuZCBydW50aW1lIGNoYW5nZXNcblx0XHRcdGZpcmVkID0gZmlyaW5nID0gdHJ1ZTtcblx0XHRcdGZvciAoIDsgcXVldWUubGVuZ3RoOyBmaXJpbmdJbmRleCA9IC0xICkge1xuXHRcdFx0XHRtZW1vcnkgPSBxdWV1ZS5zaGlmdCgpO1xuXHRcdFx0XHR3aGlsZSAoICsrZmlyaW5nSW5kZXggPCBsaXN0Lmxlbmd0aCApIHtcblxuXHRcdFx0XHRcdC8vIFJ1biBjYWxsYmFjayBhbmQgY2hlY2sgZm9yIGVhcmx5IHRlcm1pbmF0aW9uXG5cdFx0XHRcdFx0aWYgKCBsaXN0WyBmaXJpbmdJbmRleCBdLmFwcGx5KCBtZW1vcnlbIDAgXSwgbWVtb3J5WyAxIF0gKSA9PT0gZmFsc2UgJiZcblx0XHRcdFx0XHRcdG9wdGlvbnMuc3RvcE9uRmFsc2UgKSB7XG5cblx0XHRcdFx0XHRcdC8vIEp1bXAgdG8gZW5kIGFuZCBmb3JnZXQgdGhlIGRhdGEgc28gLmFkZCBkb2Vzbid0IHJlLWZpcmVcblx0XHRcdFx0XHRcdGZpcmluZ0luZGV4ID0gbGlzdC5sZW5ndGg7XG5cdFx0XHRcdFx0XHRtZW1vcnkgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRm9yZ2V0IHRoZSBkYXRhIGlmIHdlJ3JlIGRvbmUgd2l0aCBpdFxuXHRcdFx0aWYgKCAhb3B0aW9ucy5tZW1vcnkgKSB7XG5cdFx0XHRcdG1lbW9yeSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmaXJpbmcgPSBmYWxzZTtcblxuXHRcdFx0Ly8gQ2xlYW4gdXAgaWYgd2UncmUgZG9uZSBmaXJpbmcgZm9yIGdvb2Rcblx0XHRcdGlmICggbG9ja2VkICkge1xuXG5cdFx0XHRcdC8vIEtlZXAgYW4gZW1wdHkgbGlzdCBpZiB3ZSBoYXZlIGRhdGEgZm9yIGZ1dHVyZSBhZGQgY2FsbHNcblx0XHRcdFx0aWYgKCBtZW1vcnkgKSB7XG5cdFx0XHRcdFx0bGlzdCA9IFtdO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSwgdGhpcyBvYmplY3QgaXMgc3BlbnRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaXN0ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBBY3R1YWwgQ2FsbGJhY2tzIG9iamVjdFxuXHRcdHNlbGYgPSB7XG5cblx0XHRcdC8vIEFkZCBhIGNhbGxiYWNrIG9yIGEgY29sbGVjdGlvbiBvZiBjYWxsYmFja3MgdG8gdGhlIGxpc3Rcblx0XHRcdGFkZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbGlzdCApIHtcblxuXHRcdFx0XHRcdC8vIElmIHdlIGhhdmUgbWVtb3J5IGZyb20gYSBwYXN0IHJ1biwgd2Ugc2hvdWxkIGZpcmUgYWZ0ZXIgYWRkaW5nXG5cdFx0XHRcdFx0aWYgKCBtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRcdGZpcmluZ0luZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0cXVldWUucHVzaCggbWVtb3J5ICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0KCBmdW5jdGlvbiBhZGQoIGFyZ3MgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZWFjaCggYXJncywgZnVuY3Rpb24oIF8sIGFyZyApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggYXJnICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCAhb3B0aW9ucy51bmlxdWUgfHwgIXNlbGYuaGFzKCBhcmcgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3QucHVzaCggYXJnICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBhcmcgJiYgYXJnLmxlbmd0aCAmJiBqUXVlcnkudHlwZSggYXJnICkgIT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBJbnNwZWN0IHJlY3Vyc2l2ZWx5XG5cdFx0XHRcdFx0XHRcdFx0YWRkKCBhcmcgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gKSggYXJndW1lbnRzICk7XG5cblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlbW92ZSBhIGNhbGxiYWNrIGZyb20gdGhlIGxpc3Rcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBfLCBhcmcgKSB7XG5cdFx0XHRcdFx0dmFyIGluZGV4O1xuXHRcdFx0XHRcdHdoaWxlICggKCBpbmRleCA9IGpRdWVyeS5pbkFycmF5KCBhcmcsIGxpc3QsIGluZGV4ICkgKSA+IC0xICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0XHRcdFx0XHRcdC8vIEhhbmRsZSBmaXJpbmcgaW5kZXhlc1xuXHRcdFx0XHRcdFx0aWYgKCBpbmRleCA8PSBmaXJpbmdJbmRleCApIHtcblx0XHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXgtLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDaGVjayBpZiBhIGdpdmVuIGNhbGxiYWNrIGlzIGluIHRoZSBsaXN0LlxuXHRcdFx0Ly8gSWYgbm8gYXJndW1lbnQgaXMgZ2l2ZW4sIHJldHVybiB3aGV0aGVyIG9yIG5vdCBsaXN0IGhhcyBjYWxsYmFja3MgYXR0YWNoZWQuXG5cdFx0XHRoYXM6IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRcdFx0cmV0dXJuIGZuID9cblx0XHRcdFx0XHRqUXVlcnkuaW5BcnJheSggZm4sIGxpc3QgKSA+IC0xIDpcblx0XHRcdFx0XHRsaXN0Lmxlbmd0aCA+IDA7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBSZW1vdmUgYWxsIGNhbGxiYWNrcyBmcm9tIHRoZSBsaXN0XG5cdFx0XHRlbXB0eTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbGlzdCApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBEaXNhYmxlIC5maXJlIGFuZCAuYWRkXG5cdFx0XHQvLyBBYm9ydCBhbnkgY3VycmVudC9wZW5kaW5nIGV4ZWN1dGlvbnNcblx0XHRcdC8vIENsZWFyIGFsbCBjYWxsYmFja3MgYW5kIHZhbHVlc1xuXHRcdFx0ZGlzYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxvY2tlZCA9IHF1ZXVlID0gW107XG5cdFx0XHRcdGxpc3QgPSBtZW1vcnkgPSBcIlwiO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRkaXNhYmxlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhbGlzdDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIERpc2FibGUgLmZpcmVcblx0XHRcdC8vIEFsc28gZGlzYWJsZSAuYWRkIHVubGVzcyB3ZSBoYXZlIG1lbW9yeSAoc2luY2UgaXQgd291bGQgaGF2ZSBubyBlZmZlY3QpXG5cdFx0XHQvLyBBYm9ydCBhbnkgcGVuZGluZyBleGVjdXRpb25zXG5cdFx0XHRsb2NrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9ja2VkID0gcXVldWUgPSBbXTtcblx0XHRcdFx0aWYgKCAhbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0bGlzdCA9IG1lbW9yeSA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0bG9ja2VkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhbG9ja2VkO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2FsbCBhbGwgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGNvbnRleHQgYW5kIGFyZ3VtZW50c1xuXHRcdFx0ZmlyZVdpdGg6IGZ1bmN0aW9uKCBjb250ZXh0LCBhcmdzICkge1xuXHRcdFx0XHRpZiAoICFsb2NrZWQgKSB7XG5cdFx0XHRcdFx0YXJncyA9IGFyZ3MgfHwgW107XG5cdFx0XHRcdFx0YXJncyA9IFsgY29udGV4dCwgYXJncy5zbGljZSA/IGFyZ3Muc2xpY2UoKSA6IGFyZ3MgXTtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBhcmdzICk7XG5cdFx0XHRcdFx0aWYgKCAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIENhbGwgYWxsIHRoZSBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gYXJndW1lbnRzXG5cdFx0XHRmaXJlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5maXJlV2l0aCggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVG8ga25vdyBpZiB0aGUgY2FsbGJhY2tzIGhhdmUgYWxyZWFkeSBiZWVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlXG5cdFx0XHRmaXJlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIWZpcmVkO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0cmV0dXJuIHNlbGY7XG59O1xuXG5cbmZ1bmN0aW9uIElkZW50aXR5KCB2ICkge1xuXHRyZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIFRocm93ZXIoIGV4ICkge1xuXHR0aHJvdyBleDtcbn1cblxuZnVuY3Rpb24gYWRvcHRWYWx1ZSggdmFsdWUsIHJlc29sdmUsIHJlamVjdCApIHtcblx0dmFyIG1ldGhvZDtcblxuXHR0cnkge1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIHByb21pc2UgYXNwZWN0IGZpcnN0IHRvIHByaXZpbGVnZSBzeW5jaHJvbm91cyBiZWhhdmlvclxuXHRcdGlmICggdmFsdWUgJiYgalF1ZXJ5LmlzRnVuY3Rpb24oICggbWV0aG9kID0gdmFsdWUucHJvbWlzZSApICkgKSB7XG5cdFx0XHRtZXRob2QuY2FsbCggdmFsdWUgKS5kb25lKCByZXNvbHZlICkuZmFpbCggcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciB0aGVuYWJsZXNcblx0XHR9IGVsc2UgaWYgKCB2YWx1ZSAmJiBqUXVlcnkuaXNGdW5jdGlvbiggKCBtZXRob2QgPSB2YWx1ZS50aGVuICkgKSApIHtcblx0XHRcdG1ldGhvZC5jYWxsKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciBub24tdGhlbmFibGVzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgb25seVxuXHRcdFx0Ly8gU3RyaWN0IG1vZGUgZnVuY3Rpb25zIGludm9rZWQgd2l0aG91dCAuY2FsbC8uYXBwbHkgZ2V0IGdsb2JhbC1vYmplY3QgY29udGV4dFxuXHRcdFx0cmVzb2x2ZS5jYWxsKCB1bmRlZmluZWQsIHZhbHVlICk7XG5cdFx0fVxuXG5cdC8vIEZvciBQcm9taXNlcy9BKywgY29udmVydCBleGNlcHRpb25zIGludG8gcmVqZWN0aW9uc1xuXHQvLyBTaW5jZSBqUXVlcnkud2hlbiBkb2Vzbid0IHVud3JhcCB0aGVuYWJsZXMsIHdlIGNhbiBza2lwIHRoZSBleHRyYSBjaGVja3MgYXBwZWFyaW5nIGluXG5cdC8vIERlZmVycmVkI3RoZW4gdG8gY29uZGl0aW9uYWxseSBzdXBwcmVzcyByZWplY3Rpb24uXG5cdH0gY2F0Y2ggKCB2YWx1ZSApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIG9ubHlcblx0XHQvLyBTdHJpY3QgbW9kZSBmdW5jdGlvbnMgaW52b2tlZCB3aXRob3V0IC5jYWxsLy5hcHBseSBnZXQgZ2xvYmFsLW9iamVjdCBjb250ZXh0XG5cdFx0cmVqZWN0LmNhbGwoIHVuZGVmaW5lZCwgdmFsdWUgKTtcblx0fVxufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0RGVmZXJyZWQ6IGZ1bmN0aW9uKCBmdW5jICkge1xuXHRcdHZhciB0dXBsZXMgPSBbXG5cblx0XHRcdFx0Ly8gYWN0aW9uLCBhZGQgbGlzdGVuZXIsIGNhbGxiYWNrcyxcblx0XHRcdFx0Ly8gLi4uIC50aGVuIGhhbmRsZXJzLCBhcmd1bWVudCBpbmRleCwgW2ZpbmFsIHN0YXRlXVxuXHRcdFx0XHRbIFwibm90aWZ5XCIsIFwicHJvZ3Jlc3NcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwibWVtb3J5XCIgKSwgMiBdLFxuXHRcdFx0XHRbIFwicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksIDAsIFwicmVzb2x2ZWRcIiBdLFxuXHRcdFx0XHRbIFwicmVqZWN0XCIsIFwiZmFpbFwiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSwgMSwgXCJyZWplY3RlZFwiIF1cblx0XHRcdF0sXG5cdFx0XHRzdGF0ZSA9IFwicGVuZGluZ1wiLFxuXHRcdFx0cHJvbWlzZSA9IHtcblx0XHRcdFx0c3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0YWx3YXlzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5kb25lKCBhcmd1bWVudHMgKS5mYWlsKCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJjYXRjaFwiOiBmdW5jdGlvbiggZm4gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2UudGhlbiggbnVsbCwgZm4gKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBLZWVwIHBpcGUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdHBpcGU6IGZ1bmN0aW9uKCAvKiBmbkRvbmUsIGZuRmFpbCwgZm5Qcm9ncmVzcyAqLyApIHtcblx0XHRcdFx0XHR2YXIgZm5zID0gYXJndW1lbnRzO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGpRdWVyeS5EZWZlcnJlZCggZnVuY3Rpb24oIG5ld0RlZmVyICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIGksIHR1cGxlICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE1hcCB0dXBsZXMgKHByb2dyZXNzLCBkb25lLCBmYWlsKSB0byBhcmd1bWVudHMgKGRvbmUsIGZhaWwsIHByb2dyZXNzKVxuXHRcdFx0XHRcdFx0XHR2YXIgZm4gPSBqUXVlcnkuaXNGdW5jdGlvbiggZm5zWyB0dXBsZVsgNCBdIF0gKSAmJiBmbnNbIHR1cGxlWyA0IF0gXTtcblxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5wcm9ncmVzcyhmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5ub3RpZnkgfSlcblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQuZG9uZShmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZXNvbHZlIH0pXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLmZhaWwoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVqZWN0IH0pXG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMSBdIF0oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCA9IGZuICYmIGZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCByZXR1cm5lZC5wcm9taXNlICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC5wcm9taXNlKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnByb2dyZXNzKCBuZXdEZWZlci5ub3RpZnkgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZG9uZSggbmV3RGVmZXIucmVzb2x2ZSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5mYWlsKCBuZXdEZWZlci5yZWplY3QgKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXJbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbiA/IFsgcmV0dXJuZWQgXSA6IGFyZ3VtZW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdGZucyA9IG51bGw7XG5cdFx0XHRcdFx0fSApLnByb21pc2UoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzICkge1xuXHRcdFx0XHRcdHZhciBtYXhEZXB0aCA9IDA7XG5cdFx0XHRcdFx0ZnVuY3Rpb24gcmVzb2x2ZSggZGVwdGgsIGRlZmVycmVkLCBoYW5kbGVyLCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0YXJncyA9IGFyZ3VtZW50cyxcblx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQsIHRoZW47XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4zXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01OVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIGRvdWJsZS1yZXNvbHV0aW9uIGF0dGVtcHRzXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoIDwgbWF4RGVwdGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQgPSBoYW5kbGVyLmFwcGx5KCB0aGF0LCBhcmdzICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjFcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTQ4XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkID09PSBkZWZlcnJlZC5wcm9taXNlKCkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoIFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbnMgMi4zLjMuMSwgMy41XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01NFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNzVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFJldHJpZXZlIGB0aGVuYCBvbmx5IG9uY2Vcblx0XHRcdFx0XHRcdFx0XHRcdHRoZW4gPSByZXR1cm5lZCAmJlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBjaGVjayBvYmplY3RzIGFuZCBmdW5jdGlvbnMgZm9yIHRoZW5hYmlsaXR5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggdHlwZW9mIHJldHVybmVkID09PSBcIm9iamVjdFwiIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHJldHVybmVkID09PSBcImZ1bmN0aW9uXCIgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC50aGVuO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYSByZXR1cm5lZCB0aGVuYWJsZVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdGhlbiApICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFNwZWNpYWwgcHJvY2Vzc29ycyAobm90aWZ5KSBqdXN0IHdhaXQgZm9yIHJlc29sdXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW4uY2FsbChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBhbHNvIGhvb2sgaW50byBwcm9ncmVzc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIGRpc3JlZ2FyZCBvbGRlciByZXNvbHV0aW9uIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1heERlcHRoKys7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYWxsIG90aGVyIHJldHVybmVkIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGhhbmRsZXIgIT09IElkZW50aXR5ICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJncyA9IFsgcmV0dXJuZWQgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFByb2Nlc3MgdGhlIHZhbHVlKHMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIERlZmF1bHQgcHJvY2VzcyBpcyByZXNvbHZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggc3BlY2lhbCB8fCBkZWZlcnJlZC5yZXNvbHZlV2l0aCApKCB0aGF0LCBhcmdzICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgbm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGNhdGNoIGFuZCByZWplY3QgZXhjZXB0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MgPSBzcGVjaWFsID9cblx0XHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3cgOlxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayggZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzcy5zdGFja1RyYWNlICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjQuMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTYxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIHBvc3QtcmVzb2x1dGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCArIDEgPj0gbWF4RGVwdGggKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBoYW5kbGVyICE9PSBUaHJvd2VyICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gWyBlIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIHRoYXQsIGFyZ3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjFcblx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTdcblx0XHRcdFx0XHRcdFx0Ly8gUmUtcmVzb2x2ZSBwcm9taXNlcyBpbW1lZGlhdGVseSB0byBkb2RnZSBmYWxzZSByZWplY3Rpb24gZnJvbVxuXHRcdFx0XHRcdFx0XHQvLyBzdWJzZXF1ZW50IGVycm9yc1xuXHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoICkge1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENhbGwgYW4gb3B0aW9uYWwgaG9vayB0byByZWNvcmQgdGhlIHN0YWNrLCBpbiBjYXNlIG9mIGV4Y2VwdGlvblxuXHRcdFx0XHRcdFx0XHRcdC8vIHNpbmNlIGl0J3Mgb3RoZXJ3aXNlIGxvc3Qgd2hlbiBleGVjdXRpb24gZ29lcyBhc3luY1xuXHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3Muc3RhY2tUcmFjZSA9IGpRdWVyeS5EZWZlcnJlZC5nZXRTdGFja0hvb2soKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoIHByb2Nlc3MgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5LkRlZmVycmVkKCBmdW5jdGlvbiggbmV3RGVmZXIgKSB7XG5cblx0XHRcdFx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmlzRnVuY3Rpb24oIG9uUHJvZ3Jlc3MgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvblByb2dyZXNzIDpcblx0XHRcdFx0XHRcdFx0XHRcdElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLm5vdGlmeVdpdGhcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMSBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmlzRnVuY3Rpb24oIG9uRnVsZmlsbGVkICkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25GdWxmaWxsZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0SWRlbnRpdHlcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAyIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuaXNGdW5jdGlvbiggb25SZWplY3RlZCApID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uUmVqZWN0ZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhyb3dlclxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gKS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuXHRcdFx0XHQvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XG5cdFx0XHRcdHByb21pc2U6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iaiAhPSBudWxsID8galF1ZXJ5LmV4dGVuZCggb2JqLCBwcm9taXNlICkgOiBwcm9taXNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZGVmZXJyZWQgPSB7fTtcblxuXHRcdC8vIEFkZCBsaXN0LXNwZWNpZmljIG1ldGhvZHNcblx0XHRqUXVlcnkuZWFjaCggdHVwbGVzLCBmdW5jdGlvbiggaSwgdHVwbGUgKSB7XG5cdFx0XHR2YXIgbGlzdCA9IHR1cGxlWyAyIF0sXG5cdFx0XHRcdHN0YXRlU3RyaW5nID0gdHVwbGVbIDUgXTtcblxuXHRcdFx0Ly8gcHJvbWlzZS5wcm9ncmVzcyA9IGxpc3QuYWRkXG5cdFx0XHQvLyBwcm9taXNlLmRvbmUgPSBsaXN0LmFkZFxuXHRcdFx0Ly8gcHJvbWlzZS5mYWlsID0gbGlzdC5hZGRcblx0XHRcdHByb21pc2VbIHR1cGxlWyAxIF0gXSA9IGxpc3QuYWRkO1xuXG5cdFx0XHQvLyBIYW5kbGUgc3RhdGVcblx0XHRcdGlmICggc3RhdGVTdHJpbmcgKSB7XG5cdFx0XHRcdGxpc3QuYWRkKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBzdGF0ZSA9IFwicmVzb2x2ZWRcIiAoaS5lLiwgZnVsZmlsbGVkKVxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUgPSBcInJlamVjdGVkXCJcblx0XHRcdFx0XHRcdHN0YXRlID0gc3RhdGVTdHJpbmc7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdC8vIHJlamVjdGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0dHVwbGVzWyAzIC0gaSBdWyAyIF0uZGlzYWJsZSxcblxuXHRcdFx0XHRcdC8vIHByb2dyZXNzX2NhbGxiYWNrcy5sb2NrXG5cdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDIgXS5sb2NrXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmZpcmVcblx0XHRcdC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5maXJlXG5cdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5maXJlXG5cdFx0XHRsaXN0LmFkZCggdHVwbGVbIDMgXS5maXJlICk7XG5cblx0XHRcdC8vIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5ub3RpZnlXaXRoKC4uLikgfVxuXHRcdFx0Ly8gZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZXNvbHZlV2l0aCguLi4pIH1cblx0XHRcdC8vIGRlZmVycmVkLnJlamVjdCA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZWplY3RXaXRoKC4uLikgfVxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oIHRoaXMgPT09IGRlZmVycmVkID8gdW5kZWZpbmVkIDogdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gZGVmZXJyZWQubm90aWZ5V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdC8vIGRlZmVycmVkLnJlc29sdmVXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSA9IGxpc3QuZmlyZVdpdGg7XG5cdFx0fSApO1xuXG5cdFx0Ly8gTWFrZSB0aGUgZGVmZXJyZWQgYSBwcm9taXNlXG5cdFx0cHJvbWlzZS5wcm9taXNlKCBkZWZlcnJlZCApO1xuXG5cdFx0Ly8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxuXHRcdGlmICggZnVuYyApIHtcblx0XHRcdGZ1bmMuY2FsbCggZGVmZXJyZWQsIGRlZmVycmVkICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGRvbmUhXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9LFxuXG5cdC8vIERlZmVycmVkIGhlbHBlclxuXHR3aGVuOiBmdW5jdGlvbiggc2luZ2xlVmFsdWUgKSB7XG5cdFx0dmFyXG5cblx0XHRcdC8vIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xuXHRcdFx0cmVtYWluaW5nID0gYXJndW1lbnRzLmxlbmd0aCxcblxuXHRcdFx0Ly8gY291bnQgb2YgdW5wcm9jZXNzZWQgYXJndW1lbnRzXG5cdFx0XHRpID0gcmVtYWluaW5nLFxuXG5cdFx0XHQvLyBzdWJvcmRpbmF0ZSBmdWxmaWxsbWVudCBkYXRhXG5cdFx0XHRyZXNvbHZlQ29udGV4dHMgPSBBcnJheSggaSApLFxuXHRcdFx0cmVzb2x2ZVZhbHVlcyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApLFxuXG5cdFx0XHQvLyB0aGUgbWFzdGVyIERlZmVycmVkXG5cdFx0XHRtYXN0ZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblxuXHRcdFx0Ly8gc3Vib3JkaW5hdGUgY2FsbGJhY2sgZmFjdG9yeVxuXHRcdFx0dXBkYXRlRnVuYyA9IGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJlc29sdmVDb250ZXh0c1sgaSBdID0gdGhpcztcblx0XHRcdFx0XHRyZXNvbHZlVmFsdWVzWyBpIF0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApIDogdmFsdWU7XG5cdFx0XHRcdFx0aWYgKCAhKCAtLXJlbWFpbmluZyApICkge1xuXHRcdFx0XHRcdFx0bWFzdGVyLnJlc29sdmVXaXRoKCByZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0Ly8gU2luZ2xlLSBhbmQgZW1wdHkgYXJndW1lbnRzIGFyZSBhZG9wdGVkIGxpa2UgUHJvbWlzZS5yZXNvbHZlXG5cdFx0aWYgKCByZW1haW5pbmcgPD0gMSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHNpbmdsZVZhbHVlLCBtYXN0ZXIuZG9uZSggdXBkYXRlRnVuYyggaSApICkucmVzb2x2ZSwgbWFzdGVyLnJlamVjdCApO1xuXG5cdFx0XHQvLyBVc2UgLnRoZW4oKSB0byB1bndyYXAgc2Vjb25kYXJ5IHRoZW5hYmxlcyAoY2YuIGdoLTMwMDApXG5cdFx0XHRpZiAoIG1hc3Rlci5zdGF0ZSgpID09PSBcInBlbmRpbmdcIiB8fFxuXHRcdFx0XHRqUXVlcnkuaXNGdW5jdGlvbiggcmVzb2x2ZVZhbHVlc1sgaSBdICYmIHJlc29sdmVWYWx1ZXNbIGkgXS50aGVuICkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIG1hc3Rlci50aGVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTXVsdGlwbGUgYXJndW1lbnRzIGFyZSBhZ2dyZWdhdGVkIGxpa2UgUHJvbWlzZS5hbGwgYXJyYXkgZWxlbWVudHNcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHJlc29sdmVWYWx1ZXNbIGkgXSwgdXBkYXRlRnVuYyggaSApLCBtYXN0ZXIucmVqZWN0ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hc3Rlci5wcm9taXNlKCk7XG5cdH1cbn0gKTtcblxuXG4vLyBUaGVzZSB1c3VhbGx5IGluZGljYXRlIGEgcHJvZ3JhbW1lciBtaXN0YWtlIGR1cmluZyBkZXZlbG9wbWVudCxcbi8vIHdhcm4gYWJvdXQgdGhlbSBBU0FQIHJhdGhlciB0aGFuIHN3YWxsb3dpbmcgdGhlbSBieSBkZWZhdWx0LlxudmFyIHJlcnJvck5hbWVzID0gL14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87XG5cbmpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rID0gZnVuY3Rpb24oIGVycm9yLCBzdGFjayApIHtcblxuXHQvLyBTdXBwb3J0OiBJRSA4IC0gOSBvbmx5XG5cdC8vIENvbnNvbGUgZXhpc3RzIHdoZW4gZGV2IHRvb2xzIGFyZSBvcGVuLCB3aGljaCBjYW4gaGFwcGVuIGF0IGFueSB0aW1lXG5cdGlmICggd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUud2FybiAmJiBlcnJvciAmJiByZXJyb3JOYW1lcy50ZXN0KCBlcnJvci5uYW1lICkgKSB7XG5cdFx0d2luZG93LmNvbnNvbGUud2FybiggXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIiArIGVycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrLCBzdGFjayApO1xuXHR9XG59O1xuXG5cblxuXG5qUXVlcnkucmVhZHlFeGNlcHRpb24gPSBmdW5jdGlvbiggZXJyb3IgKSB7XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fSApO1xufTtcblxuXG5cblxuLy8gVGhlIGRlZmVycmVkIHVzZWQgb24gRE9NIHJlYWR5XG52YXIgcmVhZHlMaXN0ID0galF1ZXJ5LkRlZmVycmVkKCk7XG5cbmpRdWVyeS5mbi5yZWFkeSA9IGZ1bmN0aW9uKCBmbiApIHtcblxuXHRyZWFkeUxpc3Rcblx0XHQudGhlbiggZm4gKVxuXG5cdFx0Ly8gV3JhcCBqUXVlcnkucmVhZHlFeGNlcHRpb24gaW4gYSBmdW5jdGlvbiBzbyB0aGF0IHRoZSBsb29rdXBcblx0XHQvLyBoYXBwZW5zIGF0IHRoZSB0aW1lIG9mIGVycm9yIGhhbmRsaW5nIGluc3RlYWQgb2YgY2FsbGJhY2tcblx0XHQvLyByZWdpc3RyYXRpb24uXG5cdFx0LmNhdGNoKCBmdW5jdGlvbiggZXJyb3IgKSB7XG5cdFx0XHRqUXVlcnkucmVhZHlFeGNlcHRpb24oIGVycm9yICk7XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIElzIHRoZSBET00gcmVhZHkgdG8gYmUgdXNlZD8gU2V0IHRvIHRydWUgb25jZSBpdCBvY2N1cnMuXG5cdGlzUmVhZHk6IGZhbHNlLFxuXG5cdC8vIEEgY291bnRlciB0byB0cmFjayBob3cgbWFueSBpdGVtcyB0byB3YWl0IGZvciBiZWZvcmVcblx0Ly8gdGhlIHJlYWR5IGV2ZW50IGZpcmVzLiBTZWUgIzY3ODFcblx0cmVhZHlXYWl0OiAxLFxuXG5cdC8vIEhvbGQgKG9yIHJlbGVhc2UpIHRoZSByZWFkeSBldmVudFxuXHRob2xkUmVhZHk6IGZ1bmN0aW9uKCBob2xkICkge1xuXHRcdGlmICggaG9sZCApIHtcblx0XHRcdGpRdWVyeS5yZWFkeVdhaXQrKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0alF1ZXJ5LnJlYWR5KCB0cnVlICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIEhhbmRsZSB3aGVuIHRoZSBET00gaXMgcmVhZHlcblx0cmVhZHk6IGZ1bmN0aW9uKCB3YWl0ICkge1xuXG5cdFx0Ly8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuXHRcdGlmICggd2FpdCA9PT0gdHJ1ZSA/IC0talF1ZXJ5LnJlYWR5V2FpdCA6IGpRdWVyeS5pc1JlYWR5ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlbWVtYmVyIHRoYXQgdGhlIERPTSBpcyByZWFkeVxuXHRcdGpRdWVyeS5pc1JlYWR5ID0gdHJ1ZTtcblxuXHRcdC8vIElmIGEgbm9ybWFsIERPTSBSZWFkeSBldmVudCBmaXJlZCwgZGVjcmVtZW50LCBhbmQgd2FpdCBpZiBuZWVkIGJlXG5cdFx0aWYgKCB3YWl0ICE9PSB0cnVlICYmIC0talF1ZXJ5LnJlYWR5V2FpdCA+IDAgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUgYXJlIGZ1bmN0aW9ucyBib3VuZCwgdG8gZXhlY3V0ZVxuXHRcdHJlYWR5TGlzdC5yZXNvbHZlV2l0aCggZG9jdW1lbnQsIFsgalF1ZXJ5IF0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkucmVhZHkudGhlbiA9IHJlYWR5TGlzdC50aGVuO1xuXG4vLyBUaGUgcmVhZHkgZXZlbnQgaGFuZGxlciBhbmQgc2VsZiBjbGVhbnVwIG1ldGhvZFxuZnVuY3Rpb24gY29tcGxldGVkKCkge1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkICk7XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgY29tcGxldGVkICk7XG5cdGpRdWVyeS5yZWFkeSgpO1xufVxuXG4vLyBDYXRjaCBjYXNlcyB3aGVyZSAkKGRvY3VtZW50KS5yZWFkeSgpIGlzIGNhbGxlZFxuLy8gYWZ0ZXIgdGhlIGJyb3dzZXIgZXZlbnQgaGFzIGFscmVhZHkgb2NjdXJyZWQuXG4vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMCBvbmx5XG4vLyBPbGRlciBJRSBzb21ldGltZXMgc2lnbmFscyBcImludGVyYWN0aXZlXCIgdG9vIHNvb25cbmlmICggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8XG5cdCggZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCApICkge1xuXG5cdC8vIEhhbmRsZSBpdCBhc3luY2hyb25vdXNseSB0byBhbGxvdyBzY3JpcHRzIHRoZSBvcHBvcnR1bml0eSB0byBkZWxheSByZWFkeVxuXHR3aW5kb3cuc2V0VGltZW91dCggalF1ZXJ5LnJlYWR5ICk7XG5cbn0gZWxzZSB7XG5cblx0Ly8gVXNlIHRoZSBoYW5keSBldmVudCBjYWxsYmFja1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkICk7XG5cblx0Ly8gQSBmYWxsYmFjayB0byB3aW5kb3cub25sb2FkLCB0aGF0IHdpbGwgYWx3YXlzIHdvcmtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQgKTtcbn1cblxuXG5cblxuLy8gTXVsdGlmdW5jdGlvbmFsIG1ldGhvZCB0byBnZXQgYW5kIHNldCB2YWx1ZXMgb2YgYSBjb2xsZWN0aW9uXG4vLyBUaGUgdmFsdWUvcyBjYW4gb3B0aW9uYWxseSBiZSBleGVjdXRlZCBpZiBpdCdzIGEgZnVuY3Rpb25cbnZhciBhY2Nlc3MgPSBmdW5jdGlvbiggZWxlbXMsIGZuLCBrZXksIHZhbHVlLCBjaGFpbmFibGUsIGVtcHR5R2V0LCByYXcgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBlbGVtcy5sZW5ndGgsXG5cdFx0YnVsayA9IGtleSA9PSBudWxsO1xuXG5cdC8vIFNldHMgbWFueSB2YWx1ZXNcblx0aWYgKCBqUXVlcnkudHlwZSgga2V5ICkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblx0XHRmb3IgKCBpIGluIGtleSApIHtcblx0XHRcdGFjY2VzcyggZWxlbXMsIGZuLCBpLCBrZXlbIGkgXSwgdHJ1ZSwgZW1wdHlHZXQsIHJhdyApO1xuXHRcdH1cblxuXHQvLyBTZXRzIG9uZSB2YWx1ZVxuXHR9IGVsc2UgaWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdGNoYWluYWJsZSA9IHRydWU7XG5cblx0XHRpZiAoICFqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJhdyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBidWxrICkge1xuXG5cdFx0XHQvLyBCdWxrIG9wZXJhdGlvbnMgcnVuIGFnYWluc3QgdGhlIGVudGlyZSBzZXRcblx0XHRcdGlmICggcmF3ICkge1xuXHRcdFx0XHRmbi5jYWxsKCBlbGVtcywgdmFsdWUgKTtcblx0XHRcdFx0Zm4gPSBudWxsO1xuXG5cdFx0XHQvLyAuLi5leGNlcHQgd2hlbiBleGVjdXRpbmcgZnVuY3Rpb24gdmFsdWVzXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRidWxrID0gZm47XG5cdFx0XHRcdGZuID0gZnVuY3Rpb24oIGVsZW0sIGtleSwgdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGJ1bGsuY2FsbCggalF1ZXJ5KCBlbGVtICksIHZhbHVlICk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBmbiApIHtcblx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRmbihcblx0XHRcdFx0XHRlbGVtc1sgaSBdLCBrZXksIHJhdyA/XG5cdFx0XHRcdFx0dmFsdWUgOlxuXHRcdFx0XHRcdHZhbHVlLmNhbGwoIGVsZW1zWyBpIF0sIGksIGZuKCBlbGVtc1sgaSBdLCBrZXkgKSApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBjaGFpbmFibGUgKSB7XG5cdFx0cmV0dXJuIGVsZW1zO1xuXHR9XG5cblx0Ly8gR2V0c1xuXHRpZiAoIGJ1bGsgKSB7XG5cdFx0cmV0dXJuIGZuLmNhbGwoIGVsZW1zICk7XG5cdH1cblxuXHRyZXR1cm4gbGVuID8gZm4oIGVsZW1zWyAwIF0sIGtleSApIDogZW1wdHlHZXQ7XG59O1xudmFyIGFjY2VwdERhdGEgPSBmdW5jdGlvbiggb3duZXIgKSB7XG5cblx0Ly8gQWNjZXB0cyBvbmx5OlxuXHQvLyAgLSBOb2RlXG5cdC8vICAgIC0gTm9kZS5FTEVNRU5UX05PREVcblx0Ly8gICAgLSBOb2RlLkRPQ1VNRU5UX05PREVcblx0Ly8gIC0gT2JqZWN0XG5cdC8vICAgIC0gQW55XG5cdHJldHVybiBvd25lci5ub2RlVHlwZSA9PT0gMSB8fCBvd25lci5ub2RlVHlwZSA9PT0gOSB8fCAhKCArb3duZXIubm9kZVR5cGUgKTtcbn07XG5cblxuXG5cbmZ1bmN0aW9uIERhdGEoKSB7XG5cdHRoaXMuZXhwYW5kbyA9IGpRdWVyeS5leHBhbmRvICsgRGF0YS51aWQrKztcbn1cblxuRGF0YS51aWQgPSAxO1xuXG5EYXRhLnByb3RvdHlwZSA9IHtcblxuXHRjYWNoZTogZnVuY3Rpb24oIG93bmVyICkge1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIG93bmVyIG9iamVjdCBhbHJlYWR5IGhhcyBhIGNhY2hlXG5cdFx0dmFyIHZhbHVlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0Ly8gSWYgbm90LCBjcmVhdGUgb25lXG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHR2YWx1ZSA9IHt9O1xuXG5cdFx0XHQvLyBXZSBjYW4gYWNjZXB0IGRhdGEgZm9yIG5vbi1lbGVtZW50IG5vZGVzIGluIG1vZGVybiBicm93c2Vycyxcblx0XHRcdC8vIGJ1dCB3ZSBzaG91bGQgbm90LCBzZWUgIzgzMzUuXG5cdFx0XHQvLyBBbHdheXMgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cblx0XHRcdGlmICggYWNjZXB0RGF0YSggb3duZXIgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBpdCBpcyBhIG5vZGUgdW5saWtlbHkgdG8gYmUgc3RyaW5naWZ5LWVkIG9yIGxvb3BlZCBvdmVyXG5cdFx0XHRcdC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG5cdFx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdmFsdWU7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHNlY3VyZSBpdCBpbiBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5XG5cdFx0XHRcdC8vIGNvbmZpZ3VyYWJsZSBtdXN0IGJlIHRydWUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXG5cdFx0XHRcdC8vIGRlbGV0ZWQgd2hlbiBkYXRhIGlzIHJlbW92ZWRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIG93bmVyLCB0aGlzLmV4cGFuZG8sIHtcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0c2V0OiBmdW5jdGlvbiggb3duZXIsIGRhdGEsIHZhbHVlICkge1xuXHRcdHZhciBwcm9wLFxuXHRcdFx0Y2FjaGUgPSB0aGlzLmNhY2hlKCBvd25lciApO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuXHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Y2FjaGVbIGpRdWVyeS5jYW1lbENhc2UoIGRhdGEgKSBdID0gdmFsdWU7XG5cblx0XHQvLyBIYW5kbGU6IFsgb3duZXIsIHsgcHJvcGVydGllcyB9IF0gYXJnc1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIENvcHkgdGhlIHByb3BlcnRpZXMgb25lLWJ5LW9uZSB0byB0aGUgY2FjaGUgb2JqZWN0XG5cdFx0XHRmb3IgKCBwcm9wIGluIGRhdGEgKSB7XG5cdFx0XHRcdGNhY2hlWyBqUXVlcnkuY2FtZWxDYXNlKCBwcm9wICkgXSA9IGRhdGFbIHByb3AgXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9LFxuXHRnZXQ6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuXHRcdHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHR0aGlzLmNhY2hlKCBvd25lciApIDpcblxuXHRcdFx0Ly8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuXHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdICYmIG93bmVyWyB0aGlzLmV4cGFuZG8gXVsgalF1ZXJ5LmNhbWVsQ2FzZSgga2V5ICkgXTtcblx0fSxcblx0YWNjZXNzOiBmdW5jdGlvbiggb3duZXIsIGtleSwgdmFsdWUgKSB7XG5cblx0XHQvLyBJbiBjYXNlcyB3aGVyZSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIE5vIGtleSB3YXMgc3BlY2lmaWVkXG5cdFx0Ly8gICAyLiBBIHN0cmluZyBrZXkgd2FzIHNwZWNpZmllZCwgYnV0IG5vIHZhbHVlIHByb3ZpZGVkXG5cdFx0Ly9cblx0XHQvLyBUYWtlIHRoZSBcInJlYWRcIiBwYXRoIGFuZCBhbGxvdyB0aGUgZ2V0IG1ldGhvZCB0byBkZXRlcm1pbmVcblx0XHQvLyB3aGljaCB2YWx1ZSB0byByZXR1cm4sIHJlc3BlY3RpdmVseSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIFRoZSBlbnRpcmUgY2FjaGUgb2JqZWN0XG5cdFx0Ly8gICAyLiBUaGUgZGF0YSBzdG9yZWQgYXQgdGhlIGtleVxuXHRcdC8vXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHQoICgga2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgKSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkgKSB7XG5cblx0XHRcdHJldHVybiB0aGlzLmdldCggb3duZXIsIGtleSApO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gdGhlIGtleSBpcyBub3QgYSBzdHJpbmcsIG9yIGJvdGggYSBrZXkgYW5kIHZhbHVlXG5cdFx0Ly8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIEFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG5cdFx0Ly8gICAyLiBBIGtleSBhbmQgdmFsdWVcblx0XHQvL1xuXHRcdHRoaXMuc2V0KCBvd25lciwga2V5LCB2YWx1ZSApO1xuXG5cdFx0Ly8gU2luY2UgdGhlIFwic2V0XCIgcGF0aCBjYW4gaGF2ZSB0d28gcG9zc2libGUgZW50cnkgcG9pbnRzXG5cdFx0Ly8gcmV0dXJuIHRoZSBleHBlY3RlZCBkYXRhIGJhc2VkIG9uIHdoaWNoIHBhdGggd2FzIHRha2VuWypdXG5cdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHR2YXIgaSxcblx0XHRcdGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0aWYgKCBjYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgga2V5ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQgYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBrZXlzXG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCBrZXkgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBrZXkgaXMgYW4gYXJyYXkgb2Yga2V5cy4uLlxuXHRcdFx0XHQvLyBXZSBhbHdheXMgc2V0IGNhbWVsQ2FzZSBrZXlzLCBzbyByZW1vdmUgdGhhdC5cblx0XHRcdFx0a2V5ID0ga2V5Lm1hcCggalF1ZXJ5LmNhbWVsQ2FzZSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0a2V5ID0galF1ZXJ5LmNhbWVsQ2FzZSgga2V5ICk7XG5cblx0XHRcdFx0Ly8gSWYgYSBrZXkgd2l0aCB0aGUgc3BhY2VzIGV4aXN0cywgdXNlIGl0LlxuXHRcdFx0XHQvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuXHRcdFx0XHRrZXkgPSBrZXkgaW4gY2FjaGUgP1xuXHRcdFx0XHRcdFsga2V5IF0gOlxuXHRcdFx0XHRcdCgga2V5Lm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW10gKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9IGtleS5sZW5ndGg7XG5cblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRkZWxldGUgY2FjaGVbIGtleVsgaSBdIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBleHBhbmRvIGlmIHRoZXJlJ3Mgbm8gbW9yZSBkYXRhXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fCBqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKSApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NVxuXHRcdFx0Ly8gV2Via2l0ICYgQmxpbmsgcGVyZm9ybWFuY2Ugc3VmZmVycyB3aGVuIGRlbGV0aW5nIHByb3BlcnRpZXNcblx0XHRcdC8vIGZyb20gRE9NIG5vZGVzLCBzbyBzZXQgdG8gdW5kZWZpbmVkIGluc3RlYWRcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM3ODYwNyAoYnVnIHJlc3RyaWN0ZWQpXG5cdFx0XHRpZiAoIG93bmVyLm5vZGVUeXBlICkge1xuXHRcdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWxldGUgb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aGFzRGF0YTogZnVuY3Rpb24oIG93bmVyICkge1xuXHRcdHZhciBjYWNoZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblx0XHRyZXR1cm4gY2FjaGUgIT09IHVuZGVmaW5lZCAmJiAhalF1ZXJ5LmlzRW1wdHlPYmplY3QoIGNhY2hlICk7XG5cdH1cbn07XG52YXIgZGF0YVByaXYgPSBuZXcgRGF0YSgpO1xuXG52YXIgZGF0YVVzZXIgPSBuZXcgRGF0YSgpO1xuXG5cblxuLy9cdEltcGxlbWVudGF0aW9uIFN1bW1hcnlcbi8vXG4vL1x0MS4gRW5mb3JjZSBBUEkgc3VyZmFjZSBhbmQgc2VtYW50aWMgY29tcGF0aWJpbGl0eSB3aXRoIDEuOS54IGJyYW5jaFxuLy9cdDIuIEltcHJvdmUgdGhlIG1vZHVsZSdzIG1haW50YWluYWJpbGl0eSBieSByZWR1Y2luZyB0aGUgc3RvcmFnZVxuLy9cdFx0cGF0aHMgdG8gYSBzaW5nbGUgbWVjaGFuaXNtLlxuLy9cdDMuIFVzZSB0aGUgc2FtZSBzaW5nbGUgbWVjaGFuaXNtIHRvIHN1cHBvcnQgXCJwcml2YXRlXCIgYW5kIFwidXNlclwiIGRhdGEuXG4vL1x0NC4gX05ldmVyXyBleHBvc2UgXCJwcml2YXRlXCIgZGF0YSB0byB1c2VyIGNvZGUgKFRPRE86IERyb3AgX2RhdGEsIF9yZW1vdmVEYXRhKVxuLy9cdDUuIEF2b2lkIGV4cG9zaW5nIGltcGxlbWVudGF0aW9uIGRldGFpbHMgb24gdXNlciBvYmplY3RzIChlZy4gZXhwYW5kbyBwcm9wZXJ0aWVzKVxuLy9cdDYuIFByb3ZpZGUgYSBjbGVhciBwYXRoIGZvciBpbXBsZW1lbnRhdGlvbiB1cGdyYWRlIHRvIFdlYWtNYXAgaW4gMjAxNFxuXG52YXIgcmJyYWNlID0gL14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFxuXHRybXVsdGlEYXNoID0gL1tBLVpdL2c7XG5cbmZ1bmN0aW9uIGdldERhdGEoIGRhdGEgKSB7XG5cdGlmICggZGF0YSA9PT0gXCJ0cnVlXCIgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoIGRhdGEgPT09IFwiZmFsc2VcIiApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoIGRhdGEgPT09IFwibnVsbFwiICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gT25seSBjb252ZXJ0IHRvIGEgbnVtYmVyIGlmIGl0IGRvZXNuJ3QgY2hhbmdlIHRoZSBzdHJpbmdcblx0aWYgKCBkYXRhID09PSArZGF0YSArIFwiXCIgKSB7XG5cdFx0cmV0dXJuICtkYXRhO1xuXHR9XG5cblx0aWYgKCByYnJhY2UudGVzdCggZGF0YSApICkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKCBkYXRhICk7XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZGF0YUF0dHIoIGVsZW0sIGtleSwgZGF0YSApIHtcblx0dmFyIG5hbWU7XG5cblx0Ly8gSWYgbm90aGluZyB3YXMgZm91bmQgaW50ZXJuYWxseSwgdHJ5IHRvIGZldGNoIGFueVxuXHQvLyBkYXRhIGZyb20gdGhlIEhUTUw1IGRhdGEtKiBhdHRyaWJ1dGVcblx0aWYgKCBkYXRhID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRuYW1lID0gXCJkYXRhLVwiICsga2V5LnJlcGxhY2UoIHJtdWx0aURhc2gsIFwiLSQmXCIgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGRhdGEgPSBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSApO1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRhdGEgPSBnZXREYXRhKCBkYXRhICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHt9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGRhdGEgc28gaXQgaXNuJ3QgY2hhbmdlZCBsYXRlclxuXHRcdFx0ZGF0YVVzZXIuc2V0KCBlbGVtLCBrZXksIGRhdGEgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGE7XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0aGFzRGF0YTogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRhdGFVc2VyLmhhc0RhdGEoIGVsZW0gKSB8fCBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICk7XG5cdH0sXG5cblx0ZGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIGRhdGFVc2VyLmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFVc2VyLnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9LFxuXG5cdC8vIFRPRE86IE5vdyB0aGF0IGFsbCBjYWxscyB0byBfZGF0YSBhbmQgX3JlbW92ZURhdGEgaGF2ZSBiZWVuIHJlcGxhY2VkXG5cdC8vIHdpdGggZGlyZWN0IGNhbGxzIHRvIGRhdGFQcml2IG1ldGhvZHMsIHRoZXNlIGNhbiBiZSBkZXByZWNhdGVkLlxuXHRfZGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIGRhdGFQcml2LmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdF9yZW1vdmVEYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIG5hbWUgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGRhdGE6IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdHZhciBpLCBuYW1lLCBkYXRhLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXSxcblx0XHRcdGF0dHJzID0gZWxlbSAmJiBlbGVtLmF0dHJpYnV0ZXM7XG5cblx0XHQvLyBHZXRzIGFsbCB2YWx1ZXNcblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCB0aGlzLmxlbmd0aCApIHtcblx0XHRcdFx0ZGF0YSA9IGRhdGFVc2VyLmdldCggZWxlbSApO1xuXG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAhZGF0YVByaXYuZ2V0KCBlbGVtLCBcImhhc0RhdGFBdHRyc1wiICkgKSB7XG5cdFx0XHRcdFx0aSA9IGF0dHJzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgMTEgb25seVxuXHRcdFx0XHRcdFx0Ly8gVGhlIGF0dHJzIGVsZW1lbnRzIGNhbiBiZSBudWxsICgjMTQ4OTQpXG5cdFx0XHRcdFx0XHRpZiAoIGF0dHJzWyBpIF0gKSB7XG5cdFx0XHRcdFx0XHRcdG5hbWUgPSBhdHRyc1sgaSBdLm5hbWU7XG5cdFx0XHRcdFx0XHRcdGlmICggbmFtZS5pbmRleE9mKCBcImRhdGEtXCIgKSA9PT0gMCApIHtcblx0XHRcdFx0XHRcdFx0XHRuYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggbmFtZS5zbGljZSggNSApICk7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YUF0dHIoIGVsZW0sIG5hbWUsIGRhdGFbIG5hbWUgXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdC8vIFNldHMgbXVsdGlwbGUgdmFsdWVzXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFVc2VyLnNldCggdGhpcywga2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGRhdGE7XG5cblx0XHRcdC8vIFRoZSBjYWxsaW5nIGpRdWVyeSBvYmplY3QgKGVsZW1lbnQgbWF0Y2hlcykgaXMgbm90IGVtcHR5XG5cdFx0XHQvLyAoYW5kIHRoZXJlZm9yZSBoYXMgYW4gZWxlbWVudCBhcHBlYXJzIGF0IHRoaXNbIDAgXSkgYW5kIHRoZVxuXHRcdFx0Ly8gYHZhbHVlYCBwYXJhbWV0ZXIgd2FzIG5vdCB1bmRlZmluZWQuIEFuIGVtcHR5IGpRdWVyeSBvYmplY3Rcblx0XHRcdC8vIHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGZvciBlbGVtID0gdGhpc1sgMCBdIHdoaWNoIHdpbGxcblx0XHRcdC8vIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhbiBhdHRlbXB0IHRvIHJlYWQgYSBkYXRhIGNhY2hlIGlzIG1hZGUuXG5cdFx0XHRpZiAoIGVsZW0gJiYgdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIGdldCBkYXRhIGZyb20gdGhlIGNhY2hlXG5cdFx0XHRcdC8vIFRoZSBrZXkgd2lsbCBhbHdheXMgYmUgY2FtZWxDYXNlZCBpbiBEYXRhXG5cdFx0XHRcdGRhdGEgPSBkYXRhVXNlci5nZXQoIGVsZW0sIGtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gXCJkaXNjb3ZlclwiIHRoZSBkYXRhIGluXG5cdFx0XHRcdC8vIEhUTUw1IGN1c3RvbSBkYXRhLSogYXR0cnNcblx0XHRcdFx0ZGF0YSA9IGRhdGFBdHRyKCBlbGVtLCBrZXkgKTtcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSB0cmllZCByZWFsbHkgaGFyZCwgYnV0IHRoZSBkYXRhIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBkYXRhLi4uXG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzdG9yZSB0aGUgY2FtZWxDYXNlZCBrZXlcblx0XHRcdFx0ZGF0YVVzZXIuc2V0KCB0aGlzLCBrZXksIHZhbHVlICk7XG5cdFx0XHR9ICk7XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxLCBudWxsLCB0cnVlICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGtleSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGRhdGFVc2VyLnJlbW92ZSggdGhpcywga2V5ICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIHF1ZXVlO1xuXG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0dHlwZSA9ICggdHlwZSB8fCBcImZ4XCIgKSArIFwicXVldWVcIjtcblx0XHRcdHF1ZXVlID0gZGF0YVByaXYuZ2V0KCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdC8vIFNwZWVkIHVwIGRlcXVldWUgYnkgZ2V0dGluZyBvdXQgcXVpY2tseSBpZiB0aGlzIGlzIGp1c3QgYSBsb29rdXBcblx0XHRcdGlmICggZGF0YSApIHtcblx0XHRcdFx0aWYgKCAhcXVldWUgfHwgalF1ZXJ5LmlzQXJyYXkoIGRhdGEgKSApIHtcblx0XHRcdFx0XHRxdWV1ZSA9IGRhdGFQcml2LmFjY2VzcyggZWxlbSwgdHlwZSwgalF1ZXJ5Lm1ha2VBcnJheSggZGF0YSApICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cXVldWUucHVzaCggZGF0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcXVldWUgfHwgW107XG5cdFx0fVxuXHR9LFxuXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xuXHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggZWxlbSwgdHlwZSApLFxuXHRcdFx0c3RhcnRMZW5ndGggPSBxdWV1ZS5sZW5ndGgsXG5cdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCksXG5cdFx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgdHlwZSApLFxuXHRcdFx0bmV4dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggZWxlbSwgdHlwZSApO1xuXHRcdFx0fTtcblxuXHRcdC8vIElmIHRoZSBmeCBxdWV1ZSBpcyBkZXF1ZXVlZCwgYWx3YXlzIHJlbW92ZSB0aGUgcHJvZ3Jlc3Mgc2VudGluZWxcblx0XHRpZiAoIGZuID09PSBcImlucHJvZ3Jlc3NcIiApIHtcblx0XHRcdGZuID0gcXVldWUuc2hpZnQoKTtcblx0XHRcdHN0YXJ0TGVuZ3RoLS07XG5cdFx0fVxuXG5cdFx0aWYgKCBmbiApIHtcblxuXHRcdFx0Ly8gQWRkIGEgcHJvZ3Jlc3Mgc2VudGluZWwgdG8gcHJldmVudCB0aGUgZnggcXVldWUgZnJvbSBiZWluZ1xuXHRcdFx0Ly8gYXV0b21hdGljYWxseSBkZXF1ZXVlZFxuXHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgKSB7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoIFwiaW5wcm9ncmVzc1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENsZWFyIHVwIHRoZSBsYXN0IHF1ZXVlIHN0b3AgZnVuY3Rpb25cblx0XHRcdGRlbGV0ZSBob29rcy5zdG9wO1xuXHRcdFx0Zm4uY2FsbCggZWxlbSwgbmV4dCwgaG9va3MgKTtcblx0XHR9XG5cblx0XHRpZiAoICFzdGFydExlbmd0aCAmJiBob29rcyApIHtcblx0XHRcdGhvb2tzLmVtcHR5LmZpcmUoKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gTm90IHB1YmxpYyAtIGdlbmVyYXRlIGEgcXVldWVIb29rcyBvYmplY3QsIG9yIHJldHVybiB0aGUgY3VycmVudCBvbmVcblx0X3F1ZXVlSG9va3M6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xuXHRcdHZhciBrZXkgPSB0eXBlICsgXCJxdWV1ZUhvb2tzXCI7XG5cdFx0cmV0dXJuIGRhdGFQcml2LmdldCggZWxlbSwga2V5ICkgfHwgZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBrZXksIHtcblx0XHRcdGVtcHR5OiBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKS5hZGQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFsgdHlwZSArIFwicXVldWVcIiwga2V5IF0gKTtcblx0XHRcdH0gKVxuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHF1ZXVlOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgc2V0dGVyID0gMjtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRkYXRhID0gdHlwZTtcblx0XHRcdHR5cGUgPSBcImZ4XCI7XG5cdFx0XHRzZXR0ZXItLTtcblx0XHR9XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPCBzZXR0ZXIgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnF1ZXVlKCB0aGlzWyAwIF0sIHR5cGUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdHRoaXMgOlxuXHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBkYXRhICk7XG5cblx0XHRcdFx0Ly8gRW5zdXJlIGEgaG9va3MgZm9yIHRoaXMgcXVldWVcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgJiYgcXVldWVbIDAgXSAhPT0gXCJpbnByb2dyZXNzXCIgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHR9LFxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0fSApO1xuXHR9LFxuXHRjbGVhclF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdH0sXG5cblx0Ly8gR2V0IGEgcHJvbWlzZSByZXNvbHZlZCB3aGVuIHF1ZXVlcyBvZiBhIGNlcnRhaW4gdHlwZVxuXHQvLyBhcmUgZW1wdGllZCAoZnggaXMgdGhlIHR5cGUgYnkgZGVmYXVsdClcblx0cHJvbWlzZTogZnVuY3Rpb24oIHR5cGUsIG9iaiApIHtcblx0XHR2YXIgdG1wLFxuXHRcdFx0Y291bnQgPSAxLFxuXHRcdFx0ZGVmZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblx0XHRcdGVsZW1lbnRzID0gdGhpcyxcblx0XHRcdGkgPSB0aGlzLmxlbmd0aCxcblx0XHRcdHJlc29sdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhKCAtLWNvdW50ICkgKSB7XG5cdFx0XHRcdFx0ZGVmZXIucmVzb2x2ZVdpdGgoIGVsZW1lbnRzLCBbIGVsZW1lbnRzIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRvYmogPSB0eXBlO1xuXHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR0bXAgPSBkYXRhUHJpdi5nZXQoIGVsZW1lbnRzWyBpIF0sIHR5cGUgKyBcInF1ZXVlSG9va3NcIiApO1xuXHRcdFx0aWYgKCB0bXAgJiYgdG1wLmVtcHR5ICkge1xuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0XHR0bXAuZW1wdHkuYWRkKCByZXNvbHZlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc29sdmUoKTtcblx0XHRyZXR1cm4gZGVmZXIucHJvbWlzZSggb2JqICk7XG5cdH1cbn0gKTtcbnZhciBwbnVtID0gKCAvWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLyApLnNvdXJjZTtcblxudmFyIHJjc3NOdW0gPSBuZXcgUmVnRXhwKCBcIl4oPzooWystXSk9fCkoXCIgKyBwbnVtICsgXCIpKFthLXolXSopJFwiLCBcImlcIiApO1xuXG5cbnZhciBjc3NFeHBhbmQgPSBbIFwiVG9wXCIsIFwiUmlnaHRcIiwgXCJCb3R0b21cIiwgXCJMZWZ0XCIgXTtcblxudmFyIGlzSGlkZGVuV2l0aGluVHJlZSA9IGZ1bmN0aW9uKCBlbGVtLCBlbCApIHtcblxuXHRcdC8vIGlzSGlkZGVuV2l0aGluVHJlZSBtaWdodCBiZSBjYWxsZWQgZnJvbSBqUXVlcnkjZmlsdGVyIGZ1bmN0aW9uO1xuXHRcdC8vIGluIHRoYXQgY2FzZSwgZWxlbWVudCB3aWxsIGJlIHNlY29uZCBhcmd1bWVudFxuXHRcdGVsZW0gPSBlbCB8fCBlbGVtO1xuXG5cdFx0Ly8gSW5saW5lIHN0eWxlIHRydW1wcyBhbGxcblx0XHRyZXR1cm4gZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fFxuXHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmXG5cblx0XHRcdC8vIE90aGVyd2lzZSwgY2hlY2sgY29tcHV0ZWQgc3R5bGVcblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MyAtIDQ1XG5cdFx0XHQvLyBEaXNjb25uZWN0ZWQgZWxlbWVudHMgY2FuIGhhdmUgY29tcHV0ZWQgZGlzcGxheTogbm9uZSwgc28gZmlyc3QgY29uZmlybSB0aGF0IGVsZW0gaXNcblx0XHRcdC8vIGluIHRoZSBkb2N1bWVudC5cblx0XHRcdGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICkgJiZcblxuXHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSA9PT0gXCJub25lXCI7XG5cdH07XG5cbnZhciBzd2FwID0gZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrLCBhcmdzICkge1xuXHR2YXIgcmV0LCBuYW1lLFxuXHRcdG9sZCA9IHt9O1xuXG5cdC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0b2xkWyBuYW1lIF0gPSBlbGVtLnN0eWxlWyBuYW1lIF07XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb3B0aW9uc1sgbmFtZSBdO1xuXHR9XG5cblx0cmV0ID0gY2FsbGJhY2suYXBwbHkoIGVsZW0sIGFyZ3MgfHwgW10gKTtcblxuXHQvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IG9sZFsgbmFtZSBdO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn07XG5cblxuXG5cbmZ1bmN0aW9uIGFkanVzdENTUyggZWxlbSwgcHJvcCwgdmFsdWVQYXJ0cywgdHdlZW4gKSB7XG5cdHZhciBhZGp1c3RlZCxcblx0XHRzY2FsZSA9IDEsXG5cdFx0bWF4SXRlcmF0aW9ucyA9IDIwLFxuXHRcdGN1cnJlbnRWYWx1ZSA9IHR3ZWVuID9cblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdHdlZW4uY3VyKCk7XG5cdFx0XHR9IDpcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5LmNzcyggZWxlbSwgcHJvcCwgXCJcIiApO1xuXHRcdFx0fSxcblx0XHRpbml0aWFsID0gY3VycmVudFZhbHVlKCksXG5cdFx0dW5pdCA9IHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0c1sgMyBdIHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApLFxuXG5cdFx0Ly8gU3RhcnRpbmcgdmFsdWUgY29tcHV0YXRpb24gaXMgcmVxdWlyZWQgZm9yIHBvdGVudGlhbCB1bml0IG1pc21hdGNoZXNcblx0XHRpbml0aWFsSW5Vbml0ID0gKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gfHwgdW5pdCAhPT0gXCJweFwiICYmICtpbml0aWFsICkgJiZcblx0XHRcdHJjc3NOdW0uZXhlYyggalF1ZXJ5LmNzcyggZWxlbSwgcHJvcCApICk7XG5cblx0aWYgKCBpbml0aWFsSW5Vbml0ICYmIGluaXRpYWxJblVuaXRbIDMgXSAhPT0gdW5pdCApIHtcblxuXHRcdC8vIFRydXN0IHVuaXRzIHJlcG9ydGVkIGJ5IGpRdWVyeS5jc3Ncblx0XHR1bml0ID0gdW5pdCB8fCBpbml0aWFsSW5Vbml0WyAzIF07XG5cblx0XHQvLyBNYWtlIHN1cmUgd2UgdXBkYXRlIHRoZSB0d2VlbiBwcm9wZXJ0aWVzIGxhdGVyIG9uXG5cdFx0dmFsdWVQYXJ0cyA9IHZhbHVlUGFydHMgfHwgW107XG5cblx0XHQvLyBJdGVyYXRpdmVseSBhcHByb3hpbWF0ZSBmcm9tIGEgbm9uemVybyBzdGFydGluZyBwb2ludFxuXHRcdGluaXRpYWxJblVuaXQgPSAraW5pdGlhbCB8fCAxO1xuXG5cdFx0ZG8ge1xuXG5cdFx0XHQvLyBJZiBwcmV2aW91cyBpdGVyYXRpb24gemVyb2VkIG91dCwgZG91YmxlIHVudGlsIHdlIGdldCAqc29tZXRoaW5nKi5cblx0XHRcdC8vIFVzZSBzdHJpbmcgZm9yIGRvdWJsaW5nIHNvIHdlIGRvbid0IGFjY2lkZW50YWxseSBzZWUgc2NhbGUgYXMgdW5jaGFuZ2VkIGJlbG93XG5cdFx0XHRzY2FsZSA9IHNjYWxlIHx8IFwiLjVcIjtcblxuXHRcdFx0Ly8gQWRqdXN0IGFuZCBhcHBseVxuXHRcdFx0aW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgLyBzY2FsZTtcblx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCwgaW5pdGlhbEluVW5pdCArIHVuaXQgKTtcblxuXHRcdC8vIFVwZGF0ZSBzY2FsZSwgdG9sZXJhdGluZyB6ZXJvIG9yIE5hTiBmcm9tIHR3ZWVuLmN1cigpXG5cdFx0Ly8gQnJlYWsgdGhlIGxvb3AgaWYgc2NhbGUgaXMgdW5jaGFuZ2VkIG9yIHBlcmZlY3QsIG9yIGlmIHdlJ3ZlIGp1c3QgaGFkIGVub3VnaC5cblx0XHR9IHdoaWxlIChcblx0XHRcdHNjYWxlICE9PSAoIHNjYWxlID0gY3VycmVudFZhbHVlKCkgLyBpbml0aWFsICkgJiYgc2NhbGUgIT09IDEgJiYgLS1tYXhJdGVyYXRpb25zXG5cdFx0KTtcblx0fVxuXG5cdGlmICggdmFsdWVQYXJ0cyApIHtcblx0XHRpbml0aWFsSW5Vbml0ID0gK2luaXRpYWxJblVuaXQgfHwgK2luaXRpYWwgfHwgMDtcblxuXHRcdC8vIEFwcGx5IHJlbGF0aXZlIG9mZnNldCAoKz0vLT0pIGlmIHNwZWNpZmllZFxuXHRcdGFkanVzdGVkID0gdmFsdWVQYXJ0c1sgMSBdID9cblx0XHRcdGluaXRpYWxJblVuaXQgKyAoIHZhbHVlUGFydHNbIDEgXSArIDEgKSAqIHZhbHVlUGFydHNbIDIgXSA6XG5cdFx0XHQrdmFsdWVQYXJ0c1sgMiBdO1xuXHRcdGlmICggdHdlZW4gKSB7XG5cdFx0XHR0d2Vlbi51bml0ID0gdW5pdDtcblx0XHRcdHR3ZWVuLnN0YXJ0ID0gaW5pdGlhbEluVW5pdDtcblx0XHRcdHR3ZWVuLmVuZCA9IGFkanVzdGVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYWRqdXN0ZWQ7XG59XG5cblxudmFyIGRlZmF1bHREaXNwbGF5TWFwID0ge307XG5cbmZ1bmN0aW9uIGdldERlZmF1bHREaXNwbGF5KCBlbGVtICkge1xuXHR2YXIgdGVtcCxcblx0XHRkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQsXG5cdFx0bm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLFxuXHRcdGRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheU1hcFsgbm9kZU5hbWUgXTtcblxuXHRpZiAoIGRpc3BsYXkgKSB7XG5cdFx0cmV0dXJuIGRpc3BsYXk7XG5cdH1cblxuXHR0ZW1wID0gZG9jLmJvZHkuYXBwZW5kQ2hpbGQoIGRvYy5jcmVhdGVFbGVtZW50KCBub2RlTmFtZSApICk7XG5cdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCB0ZW1wLCBcImRpc3BsYXlcIiApO1xuXG5cdHRlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGVtcCApO1xuXG5cdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0ZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fVxuXHRkZWZhdWx0RGlzcGxheU1hcFsgbm9kZU5hbWUgXSA9IGRpc3BsYXk7XG5cblx0cmV0dXJuIGRpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHNob3dIaWRlKCBlbGVtZW50cywgc2hvdyApIHtcblx0dmFyIGRpc3BsYXksIGVsZW0sXG5cdFx0dmFsdWVzID0gW10sXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aDtcblxuXHQvLyBEZXRlcm1pbmUgbmV3IGRpc3BsYXkgdmFsdWUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byBjaGFuZ2Vcblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRlbGVtID0gZWxlbWVudHNbIGluZGV4IF07XG5cdFx0aWYgKCAhZWxlbS5zdHlsZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGRpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG5cdFx0aWYgKCBzaG93ICkge1xuXG5cdFx0XHQvLyBTaW5jZSB3ZSBmb3JjZSB2aXNpYmlsaXR5IHVwb24gY2FzY2FkZS1oaWRkZW4gZWxlbWVudHMsIGFuIGltbWVkaWF0ZSAoYW5kIHNsb3cpXG5cdFx0XHQvLyBjaGVjayBpcyByZXF1aXJlZCBpbiB0aGlzIGZpcnN0IGxvb3AgdW5sZXNzIHdlIGhhdmUgYSBub25lbXB0eSBkaXNwbGF5IHZhbHVlIChlaXRoZXJcblx0XHRcdC8vIGlubGluZSBvciBhYm91dC10by1iZS1yZXN0b3JlZClcblx0XHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJkaXNwbGF5XCIgKSB8fCBudWxsO1xuXHRcdFx0XHRpZiAoICF2YWx1ZXNbIGluZGV4IF0gKSB7XG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtICkgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGdldERlZmF1bHREaXNwbGF5KCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICggZGlzcGxheSAhPT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IFwibm9uZVwiO1xuXG5cdFx0XHRcdC8vIFJlbWVtYmVyIHdoYXQgd2UncmUgb3ZlcndyaXRpbmdcblx0XHRcdFx0ZGF0YVByaXYuc2V0KCBlbGVtLCBcImRpc3BsYXlcIiwgZGlzcGxheSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFNldCB0aGUgZGlzcGxheSBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZWNvbmQgbG9vcCB0byBhdm9pZCBjb25zdGFudCByZWZsb3dcblx0Zm9yICggaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRpZiAoIHZhbHVlc1sgaW5kZXggXSAhPSBudWxsICkge1xuXHRcdFx0ZWxlbWVudHNbIGluZGV4IF0uc3R5bGUuZGlzcGxheSA9IHZhbHVlc1sgaW5kZXggXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudHM7XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0c2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNob3dIaWRlKCB0aGlzLCB0cnVlICk7XG5cdH0sXG5cdGhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcyApO1xuXHR9LFxuXHR0b2dnbGU6IGZ1bmN0aW9uKCBzdGF0ZSApIHtcblx0XHRpZiAoIHR5cGVvZiBzdGF0ZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBpc0hpZGRlbldpdGhpblRyZWUoIHRoaXMgKSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufSApO1xudmFyIHJjaGVja2FibGVUeXBlID0gKCAvXig/OmNoZWNrYm94fHJhZGlvKSQvaSApO1xuXG52YXIgcnRhZ05hbWUgPSAoIC88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaSApO1xuXG52YXIgcnNjcmlwdFR5cGUgPSAoIC9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2kgKTtcblxuXG5cbi8vIFdlIGhhdmUgdG8gY2xvc2UgdGhlc2UgdGFncyB0byBzdXBwb3J0IFhIVE1MICgjMTMyMDApXG52YXIgd3JhcE1hcCA9IHtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRvcHRpb246IFsgMSwgXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsIFwiPC9zZWxlY3Q+XCIgXSxcblxuXHQvLyBYSFRNTCBwYXJzZXJzIGRvIG5vdCBtYWdpY2FsbHkgaW5zZXJ0IGVsZW1lbnRzIGluIHRoZVxuXHQvLyBzYW1lIHdheSB0aGF0IHRhZyBzb3VwIHBhcnNlcnMgZG8uIFNvIHdlIGNhbm5vdCBzaG9ydGVuXG5cdC8vIHRoaXMgYnkgb21pdHRpbmcgPHRib2R5PiBvciBvdGhlciByZXF1aXJlZCBlbGVtZW50cy5cblx0dGhlYWQ6IFsgMSwgXCI8dGFibGU+XCIsIFwiPC90YWJsZT5cIiBdLFxuXHRjb2w6IFsgMiwgXCI8dGFibGU+PGNvbGdyb3VwPlwiLCBcIjwvY29sZ3JvdXA+PC90YWJsZT5cIiBdLFxuXHR0cjogWyAyLCBcIjx0YWJsZT48dGJvZHk+XCIsIFwiPC90Ym9keT48L3RhYmxlPlwiIF0sXG5cdHRkOiBbIDMsIFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsIFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCIgXSxcblxuXHRfZGVmYXVsdDogWyAwLCBcIlwiLCBcIlwiIF1cbn07XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG53cmFwTWFwLm9wdGdyb3VwID0gd3JhcE1hcC5vcHRpb247XG5cbndyYXBNYXAudGJvZHkgPSB3cmFwTWFwLnRmb290ID0gd3JhcE1hcC5jb2xncm91cCA9IHdyYXBNYXAuY2FwdGlvbiA9IHdyYXBNYXAudGhlYWQ7XG53cmFwTWFwLnRoID0gd3JhcE1hcC50ZDtcblxuXG5mdW5jdGlvbiBnZXRBbGwoIGNvbnRleHQsIHRhZyApIHtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdC8vIFVzZSB0eXBlb2YgdG8gYXZvaWQgemVyby1hcmd1bWVudCBtZXRob2QgaW52b2NhdGlvbiBvbiBob3N0IG9iamVjdHMgKCMxNTE1MSlcblx0dmFyIHJldDtcblxuXHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdHJldCA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyB8fCBcIipcIiApO1xuXG5cdH0gZWxzZSBpZiAoIHR5cGVvZiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0cmV0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCB0YWcgfHwgXCIqXCIgKTtcblxuXHR9IGVsc2Uge1xuXHRcdHJldCA9IFtdO1xuXHR9XG5cblx0aWYgKCB0YWcgPT09IHVuZGVmaW5lZCB8fCB0YWcgJiYgalF1ZXJ5Lm5vZGVOYW1lKCBjb250ZXh0LCB0YWcgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbIGNvbnRleHQgXSwgcmV0ICk7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuXG5cbi8vIE1hcmsgc2NyaXB0cyBhcyBoYXZpbmcgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZFxuZnVuY3Rpb24gc2V0R2xvYmFsRXZhbCggZWxlbXMsIHJlZkVsZW1lbnRzICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bCA9IGVsZW1zLmxlbmd0aDtcblxuXHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0ZGF0YVByaXYuc2V0KFxuXHRcdFx0ZWxlbXNbIGkgXSxcblx0XHRcdFwiZ2xvYmFsRXZhbFwiLFxuXHRcdFx0IXJlZkVsZW1lbnRzIHx8IGRhdGFQcml2LmdldCggcmVmRWxlbWVudHNbIGkgXSwgXCJnbG9iYWxFdmFsXCIgKVxuXHRcdCk7XG5cdH1cbn1cblxuXG52YXIgcmh0bWwgPSAvPHwmIz9cXHcrOy87XG5cbmZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQgKSB7XG5cdHZhciBlbGVtLCB0bXAsIHRhZywgd3JhcCwgY29udGFpbnMsIGosXG5cdFx0ZnJhZ21lbnQgPSBjb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRub2RlcyA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGVsZW0gPSBlbGVtc1sgaSBdO1xuXG5cdFx0aWYgKCBlbGVtIHx8IGVsZW0gPT09IDAgKSB7XG5cblx0XHRcdC8vIEFkZCBub2RlcyBkaXJlY3RseVxuXHRcdFx0aWYgKCBqUXVlcnkudHlwZSggZWxlbSApID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIGVsZW0ubm9kZVR5cGUgPyBbIGVsZW0gXSA6IGVsZW0gKTtcblxuXHRcdFx0Ly8gQ29udmVydCBub24taHRtbCBpbnRvIGEgdGV4dCBub2RlXG5cdFx0XHR9IGVsc2UgaWYgKCAhcmh0bWwudGVzdCggZWxlbSApICkge1xuXHRcdFx0XHRub2Rlcy5wdXNoKCBjb250ZXh0LmNyZWF0ZVRleHROb2RlKCBlbGVtICkgKTtcblxuXHRcdFx0Ly8gQ29udmVydCBodG1sIGludG8gRE9NIG5vZGVzXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0bXAgPSB0bXAgfHwgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGNvbnRleHQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICk7XG5cblx0XHRcdFx0Ly8gRGVzZXJpYWxpemUgYSBzdGFuZGFyZCByZXByZXNlbnRhdGlvblxuXHRcdFx0XHR0YWcgPSAoIHJ0YWdOYW1lLmV4ZWMoIGVsZW0gKSB8fCBbIFwiXCIsIFwiXCIgXSApWyAxIF0udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0d3JhcCA9IHdyYXBNYXBbIHRhZyBdIHx8IHdyYXBNYXAuX2RlZmF1bHQ7XG5cdFx0XHRcdHRtcC5pbm5lckhUTUwgPSB3cmFwWyAxIF0gKyBqUXVlcnkuaHRtbFByZWZpbHRlciggZWxlbSApICsgd3JhcFsgMiBdO1xuXG5cdFx0XHRcdC8vIERlc2NlbmQgdGhyb3VnaCB3cmFwcGVycyB0byB0aGUgcmlnaHQgY29udGVudFxuXHRcdFx0XHRqID0gd3JhcFsgMCBdO1xuXHRcdFx0XHR3aGlsZSAoIGotLSApIHtcblx0XHRcdFx0XHR0bXAgPSB0bXAubGFzdENoaWxkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBub2RlcywgdG1wLmNoaWxkTm9kZXMgKTtcblxuXHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgdG9wLWxldmVsIGNvbnRhaW5lclxuXHRcdFx0XHR0bXAgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuXG5cdFx0XHRcdC8vIEVuc3VyZSB0aGUgY3JlYXRlZCBub2RlcyBhcmUgb3JwaGFuZWQgKCMxMjM5Milcblx0XHRcdFx0dG1wLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZW1vdmUgd3JhcHBlciBmcm9tIGZyYWdtZW50XG5cdGZyYWdtZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuXHRpID0gMDtcblx0d2hpbGUgKCAoIGVsZW0gPSBub2Rlc1sgaSsrIF0gKSApIHtcblxuXHRcdC8vIFNraXAgZWxlbWVudHMgYWxyZWFkeSBpbiB0aGUgY29udGV4dCBjb2xsZWN0aW9uICh0cmFjLTQwODcpXG5cdFx0aWYgKCBzZWxlY3Rpb24gJiYgalF1ZXJ5LmluQXJyYXkoIGVsZW0sIHNlbGVjdGlvbiApID4gLTEgKSB7XG5cdFx0XHRpZiAoIGlnbm9yZWQgKSB7XG5cdFx0XHRcdGlnbm9yZWQucHVzaCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udGFpbnMgPSBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApO1xuXG5cdFx0Ly8gQXBwZW5kIHRvIGZyYWdtZW50XG5cdFx0dG1wID0gZ2V0QWxsKCBmcmFnbWVudC5hcHBlbmRDaGlsZCggZWxlbSApLCBcInNjcmlwdFwiICk7XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0aWYgKCBjb250YWlucyApIHtcblx0XHRcdHNldEdsb2JhbEV2YWwoIHRtcCApO1xuXHRcdH1cblxuXHRcdC8vIENhcHR1cmUgZXhlY3V0YWJsZXNcblx0XHRpZiAoIHNjcmlwdHMgKSB7XG5cdFx0XHRqID0gMDtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gdG1wWyBqKysgXSApICkge1xuXHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIGVsZW0udHlwZSB8fCBcIlwiICkgKSB7XG5cdFx0XHRcdFx0c2NyaXB0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZnJhZ21lbnQ7XG59XG5cblxuKCBmdW5jdGlvbigpIHtcblx0dmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuXHRcdGRpdiA9IGZyYWdtZW50LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKSxcblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcblx0Ly8gQ2hlY2sgc3RhdGUgbG9zdCBpZiB0aGUgbmFtZSBpcyBzZXQgKCMxMTIxNylcblx0Ly8gU3VwcG9ydDogV2luZG93cyBXZWIgQXBwcyAoV1dBKVxuXHQvLyBgbmFtZWAgYW5kIGB0eXBlYCBtdXN0IHVzZSAuc2V0QXR0cmlidXRlIGZvciBXV0EgKCMxNDkwMSlcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJyYWRpb1wiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwidFwiICk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKCBpbnB1dCApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgb25seVxuXHQvLyBPbGRlciBXZWJLaXQgZG9lc24ndCBjbG9uZSBjaGVja2VkIHN0YXRlIGNvcnJlY3RseSBpbiBmcmFnbWVudHNcblx0c3VwcG9ydC5jaGVja0Nsb25lID0gZGl2LmNsb25lTm9kZSggdHJ1ZSApLmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5jaGVja2VkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNYWtlIHN1cmUgdGV4dGFyZWEgKGFuZCBjaGVja2JveCkgZGVmYXVsdFZhbHVlIGlzIHByb3Blcmx5IGNsb25lZFxuXHRkaXYuaW5uZXJIVE1MID0gXCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCI7XG5cdHN1cHBvcnQubm9DbG9uZUNoZWNrZWQgPSAhIWRpdi5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO1xufSApKCk7XG52YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxudmFyXG5cdHJrZXlFdmVudCA9IC9ea2V5Lyxcblx0cm1vdXNlRXZlbnQgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sXG5cdHJ0eXBlbmFtZXNwYWNlID0gL14oW14uXSopKD86XFwuKC4rKXwpLztcblxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBTZWUgIzEzMzkzIGZvciBtb3JlIGluZm9cbmZ1bmN0aW9uIHNhZmVBY3RpdmVFbGVtZW50KCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHR9IGNhdGNoICggZXJyICkgeyB9XG59XG5cbmZ1bmN0aW9uIG9uKCBlbGVtLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCBvbmUgKSB7XG5cdHZhciBvcmlnRm4sIHR5cGU7XG5cblx0Ly8gVHlwZXMgY2FuIGJlIGEgbWFwIG9mIHR5cGVzL2hhbmRsZXJzXG5cdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gKCB0eXBlcy1PYmplY3QsIHNlbGVjdG9yLCBkYXRhIClcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcy1PYmplY3QsIGRhdGEgKVxuXHRcdFx0ZGF0YSA9IGRhdGEgfHwgc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdG9uKCBlbGVtLCB0eXBlLCBzZWxlY3RvciwgZGF0YSwgdHlwZXNbIHR5cGUgXSwgb25lICk7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0aWYgKCBkYXRhID09IG51bGwgJiYgZm4gPT0gbnVsbCApIHtcblxuXHRcdC8vICggdHlwZXMsIGZuIClcblx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdGRhdGEgPSBzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICggZm4gPT0gbnVsbCApIHtcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcywgc2VsZWN0b3IsIGZuIClcblx0XHRcdGZuID0gZGF0YTtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gKCB0eXBlcywgZGF0YSwgZm4gKVxuXHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHR9XG5cdGlmICggZm4gPT09IGZhbHNlICkge1xuXHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdH0gZWxzZSBpZiAoICFmbiApIHtcblx0XHRyZXR1cm4gZWxlbTtcblx0fVxuXG5cdGlmICggb25lID09PSAxICkge1xuXHRcdG9yaWdGbiA9IGZuO1xuXHRcdGZuID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHQvLyBDYW4gdXNlIGFuIGVtcHR5IHNldCwgc2luY2UgZXZlbnQgY29udGFpbnMgdGhlIGluZm9cblx0XHRcdGpRdWVyeSgpLm9mZiggZXZlbnQgKTtcblx0XHRcdHJldHVybiBvcmlnRm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdH07XG5cblx0XHQvLyBVc2Ugc2FtZSBndWlkIHNvIGNhbGxlciBjYW4gcmVtb3ZlIHVzaW5nIG9yaWdGblxuXHRcdGZuLmd1aWQgPSBvcmlnRm4uZ3VpZCB8fCAoIG9yaWdGbi5ndWlkID0galF1ZXJ5Lmd1aWQrKyApO1xuXHR9XG5cdHJldHVybiBlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdGpRdWVyeS5ldmVudC5hZGQoIHRoaXMsIHR5cGVzLCBmbiwgZGF0YSwgc2VsZWN0b3IgKTtcblx0fSApO1xufVxuXG4vKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgbWFuYWdpbmcgZXZlbnRzIC0tIG5vdCBwYXJ0IG9mIHRoZSBwdWJsaWMgaW50ZXJmYWNlLlxuICogUHJvcHMgdG8gRGVhbiBFZHdhcmRzJyBhZGRFdmVudCBsaWJyYXJ5IGZvciBtYW55IG9mIHRoZSBpZGVhcy5cbiAqL1xualF1ZXJ5LmV2ZW50ID0ge1xuXG5cdGdsb2JhbDoge30sXG5cblx0YWRkOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIGRhdGEsIHNlbGVjdG9yICkge1xuXG5cdFx0dmFyIGhhbmRsZU9iakluLCBldmVudEhhbmRsZSwgdG1wLFxuXHRcdFx0ZXZlbnRzLCB0LCBoYW5kbGVPYmosXG5cdFx0XHRzcGVjaWFsLCBoYW5kbGVycywgdHlwZSwgbmFtZXNwYWNlcywgb3JpZ1R5cGUsXG5cdFx0XHRlbGVtRGF0YSA9IGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0Ly8gRG9uJ3QgYXR0YWNoIGV2ZW50cyB0byBub0RhdGEgb3IgdGV4dC9jb21tZW50IG5vZGVzIChidXQgYWxsb3cgcGxhaW4gb2JqZWN0cylcblx0XHRpZiAoICFlbGVtRGF0YSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYW4gb2JqZWN0IG9mIGN1c3RvbSBkYXRhIGluIGxpZXUgb2YgdGhlIGhhbmRsZXJcblx0XHRpZiAoIGhhbmRsZXIuaGFuZGxlciApIHtcblx0XHRcdGhhbmRsZU9iakluID0gaGFuZGxlcjtcblx0XHRcdGhhbmRsZXIgPSBoYW5kbGVPYmpJbi5oYW5kbGVyO1xuXHRcdFx0c2VsZWN0b3IgPSBoYW5kbGVPYmpJbi5zZWxlY3Rvcjtcblx0XHR9XG5cblx0XHQvLyBFbnN1cmUgdGhhdCBpbnZhbGlkIHNlbGVjdG9ycyB0aHJvdyBleGNlcHRpb25zIGF0IGF0dGFjaCB0aW1lXG5cdFx0Ly8gRXZhbHVhdGUgYWdhaW5zdCBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBlbGVtIGlzIGEgbm9uLWVsZW1lbnQgbm9kZSAoZS5nLiwgZG9jdW1lbnQpXG5cdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggZG9jdW1lbnRFbGVtZW50LCBzZWxlY3RvciApO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBoYW5kbGVyIGhhcyBhIHVuaXF1ZSBJRCwgdXNlZCB0byBmaW5kL3JlbW92ZSBpdCBsYXRlclxuXHRcdGlmICggIWhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdGhhbmRsZXIuZ3VpZCA9IGpRdWVyeS5ndWlkKys7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdCB0aGUgZWxlbWVudCdzIGV2ZW50IHN0cnVjdHVyZSBhbmQgbWFpbiBoYW5kbGVyLCBpZiB0aGlzIGlzIHRoZSBmaXJzdFxuXHRcdGlmICggISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgPSB7fTtcblx0XHR9XG5cdFx0aWYgKCAhKCBldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSApICkge1xuXHRcdFx0ZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUgPSBmdW5jdGlvbiggZSApIHtcblxuXHRcdFx0XHQvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuXHRcdFx0XHQvLyB3aGVuIGFuIGV2ZW50IGlzIGNhbGxlZCBhZnRlciBhIHBhZ2UgaGFzIHVubG9hZGVkXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgIT09IGUudHlwZSA/XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LmRpc3BhdGNoLmFwcGx5KCBlbGVtLCBhcmd1bWVudHMgKSA6IHVuZGVmaW5lZDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIG11bHRpcGxlIGV2ZW50cyBzZXBhcmF0ZWQgYnkgYSBzcGFjZVxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBUaGVyZSAqbXVzdCogYmUgYSB0eXBlLCBubyBhdHRhY2hpbmcgbmFtZXNwYWNlLW9ubHkgaGFuZGxlcnNcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBldmVudCBjaGFuZ2VzIGl0cyB0eXBlLCB1c2UgdGhlIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBjaGFuZ2VkIHR5cGVcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXG5cdFx0XHQvLyBJZiBzZWxlY3RvciBkZWZpbmVkLCBkZXRlcm1pbmUgc3BlY2lhbCBldmVudCBhcGkgdHlwZSwgb3RoZXJ3aXNlIGdpdmVuIHR5cGVcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblxuXHRcdFx0Ly8gVXBkYXRlIHNwZWNpYWwgYmFzZWQgb24gbmV3bHkgcmVzZXQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIGhhbmRsZU9iaiBpcyBwYXNzZWQgdG8gYWxsIGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRoYW5kbGVPYmogPSBqUXVlcnkuZXh0ZW5kKCB7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdG9yaWdUeXBlOiBvcmlnVHlwZSxcblx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0aGFuZGxlcjogaGFuZGxlcixcblx0XHRcdFx0Z3VpZDogaGFuZGxlci5ndWlkLFxuXHRcdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXG5cdFx0XHRcdG5lZWRzQ29udGV4dDogc2VsZWN0b3IgJiYgalF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICksXG5cdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApXG5cdFx0XHR9LCBoYW5kbGVPYmpJbiApO1xuXG5cdFx0XHQvLyBJbml0IHRoZSBldmVudCBoYW5kbGVyIHF1ZXVlIGlmIHdlJ3JlIHRoZSBmaXJzdFxuXHRcdFx0aWYgKCAhKCBoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdICkgKSB7XG5cdFx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gPSBbXTtcblx0XHRcdFx0aGFuZGxlcnMuZGVsZWdhdGVDb3VudCA9IDA7XG5cblx0XHRcdFx0Ly8gT25seSB1c2UgYWRkRXZlbnRMaXN0ZW5lciBpZiB0aGUgc3BlY2lhbCBldmVudHMgaGFuZGxlciByZXR1cm5zIGZhbHNlXG5cdFx0XHRcdGlmICggIXNwZWNpYWwuc2V0dXAgfHxcblx0XHRcdFx0XHRzcGVjaWFsLnNldHVwLmNhbGwoIGVsZW0sIGRhdGEsIG5hbWVzcGFjZXMsIGV2ZW50SGFuZGxlICkgPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGV2ZW50SGFuZGxlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3BlY2lhbC5hZGQgKSB7XG5cdFx0XHRcdHNwZWNpYWwuYWRkLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXG5cdFx0XHRcdGlmICggIWhhbmRsZU9iai5oYW5kbGVyLmd1aWQgKSB7XG5cdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCA9IGhhbmRsZXIuZ3VpZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgdG8gdGhlIGVsZW1lbnQncyBoYW5kbGVyIGxpc3QsIGRlbGVnYXRlcyBpbiBmcm9udFxuXHRcdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50KyssIDAsIGhhbmRsZU9iaiApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlcnMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnRzIGhhdmUgZXZlciBiZWVuIHVzZWQsIGZvciBldmVudCBvcHRpbWl6YXRpb25cblx0XHRcdGpRdWVyeS5ldmVudC5nbG9iYWxbIHR5cGUgXSA9IHRydWU7XG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gRGV0YWNoIGFuIGV2ZW50IG9yIHNldCBvZiBldmVudHMgZnJvbSBhbiBlbGVtZW50XG5cdHJlbW92ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBzZWxlY3RvciwgbWFwcGVkVHlwZXMgKSB7XG5cblx0XHR2YXIgaiwgb3JpZ0NvdW50LCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuaGFzRGF0YSggZWxlbSApICYmIGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0aWYgKCAhZWxlbURhdGEgfHwgISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gT25jZSBmb3IgZWFjaCB0eXBlLm5hbWVzcGFjZSBpbiB0eXBlczsgdHlwZSBtYXkgYmUgb21pdHRlZFxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKyB0eXBlc1sgdCBdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gfHwgW107XG5cdFx0XHR0bXAgPSB0bXBbIDIgXSAmJlxuXHRcdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKCBcIlxcXFwuKD86LipcXFxcLnwpXCIgKSArIFwiKFxcXFwufCQpXCIgKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG1hdGNoaW5nIGV2ZW50c1xuXHRcdFx0b3JpZ0NvdW50ID0gaiA9IGhhbmRsZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaiBdO1xuXG5cdFx0XHRcdGlmICggKCBtYXBwZWRUeXBlcyB8fCBvcmlnVHlwZSA9PT0gaGFuZGxlT2JqLm9yaWdUeXBlICkgJiZcblx0XHRcdFx0XHQoICFoYW5kbGVyIHx8IGhhbmRsZXIuZ3VpZCA9PT0gaGFuZGxlT2JqLmd1aWQgKSAmJlxuXHRcdFx0XHRcdCggIXRtcCB8fCB0bXAudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkgJiZcblx0XHRcdFx0XHQoICFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gaGFuZGxlT2JqLnNlbGVjdG9yIHx8XG5cdFx0XHRcdFx0XHRzZWxlY3RvciA9PT0gXCIqKlwiICYmIGhhbmRsZU9iai5zZWxlY3RvciApICkge1xuXHRcdFx0XHRcdGhhbmRsZXJzLnNwbGljZSggaiwgMSApO1xuXG5cdFx0XHRcdFx0aWYgKCBoYW5kbGVPYmouc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggc3BlY2lhbC5yZW1vdmUgKSB7XG5cdFx0XHRcdFx0XHRzcGVjaWFsLnJlbW92ZS5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIGdlbmVyaWMgZXZlbnQgaGFuZGxlciBpZiB3ZSByZW1vdmVkIHNvbWV0aGluZyBhbmQgbm8gbW9yZSBoYW5kbGVycyBleGlzdFxuXHRcdFx0Ly8gKGF2b2lkcyBwb3RlbnRpYWwgZm9yIGVuZGxlc3MgcmVjdXJzaW9uIGR1cmluZyByZW1vdmFsIG9mIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMpXG5cdFx0XHRpZiAoIG9yaWdDb3VudCAmJiAhaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRpZiAoICFzcGVjaWFsLnRlYXJkb3duIHx8XG5cdFx0XHRcdFx0c3BlY2lhbC50ZWFyZG93bi5jYWxsKCBlbGVtLCBuYW1lc3BhY2VzLCBlbGVtRGF0YS5oYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGVsZW1EYXRhLmhhbmRsZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGV2ZW50c1sgdHlwZSBdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSBkYXRhIGFuZCB0aGUgZXhwYW5kbyBpZiBpdCdzIG5vIGxvbmdlciB1c2VkXG5cdFx0aWYgKCBqUXVlcnkuaXNFbXB0eU9iamVjdCggZXZlbnRzICkgKSB7XG5cdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFwiaGFuZGxlIGV2ZW50c1wiICk7XG5cdFx0fVxuXHR9LFxuXG5cdGRpc3BhdGNoOiBmdW5jdGlvbiggbmF0aXZlRXZlbnQgKSB7XG5cblx0XHQvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3Rcblx0XHR2YXIgZXZlbnQgPSBqUXVlcnkuZXZlbnQuZml4KCBuYXRpdmVFdmVudCApO1xuXG5cdFx0dmFyIGksIGosIHJldCwgbWF0Y2hlZCwgaGFuZGxlT2JqLCBoYW5kbGVyUXVldWUsXG5cdFx0XHRhcmdzID0gbmV3IEFycmF5KCBhcmd1bWVudHMubGVuZ3RoICksXG5cdFx0XHRoYW5kbGVycyA9ICggZGF0YVByaXYuZ2V0KCB0aGlzLCBcImV2ZW50c1wiICkgfHwge30gKVsgZXZlbnQudHlwZSBdIHx8IFtdLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyBldmVudC50eXBlIF0gfHwge307XG5cblx0XHQvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxuXHRcdGFyZ3NbIDAgXSA9IGV2ZW50O1xuXG5cdFx0Zm9yICggaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRhcmdzWyBpIF0gPSBhcmd1bWVudHNbIGkgXTtcblx0XHR9XG5cblx0XHRldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7XG5cblx0XHQvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG5cdFx0aWYgKCBzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGhhbmRsZXJzXG5cdFx0aGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwoIHRoaXMsIGV2ZW50LCBoYW5kbGVycyApO1xuXG5cdFx0Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoICggbWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG5cblx0XHRcdGogPSAwO1xuXHRcdFx0d2hpbGUgKCAoIGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbIGorKyBdICkgJiZcblx0XHRcdFx0IWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cblx0XHRcdFx0Ly8gVHJpZ2dlcmVkIGV2ZW50IG11c3QgZWl0aGVyIDEpIGhhdmUgbm8gbmFtZXNwYWNlLCBvciAyKSBoYXZlIG5hbWVzcGFjZShzKVxuXHRcdFx0XHQvLyBhIHN1YnNldCBvciBlcXVhbCB0byB0aG9zZSBpbiB0aGUgYm91bmQgZXZlbnQgKGJvdGggY2FuIGhhdmUgbm8gbmFtZXNwYWNlKS5cblx0XHRcdFx0aWYgKCAhZXZlbnQucm5hbWVzcGFjZSB8fCBldmVudC5ybmFtZXNwYWNlLnRlc3QoIGhhbmRsZU9iai5uYW1lc3BhY2UgKSApIHtcblxuXHRcdFx0XHRcdGV2ZW50LmhhbmRsZU9iaiA9IGhhbmRsZU9iajtcblx0XHRcdFx0XHRldmVudC5kYXRhID0gaGFuZGxlT2JqLmRhdGE7XG5cblx0XHRcdFx0XHRyZXQgPSAoICggalF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGhhbmRsZU9iai5vcmlnVHlwZSBdIHx8IHt9ICkuaGFuZGxlIHx8XG5cdFx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlciApLmFwcGx5KCBtYXRjaGVkLmVsZW0sIGFyZ3MgKTtcblxuXHRcdFx0XHRcdGlmICggcmV0ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZXZlbnQucmVzdWx0ID0gcmV0ICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsIHRoZSBwb3N0RGlzcGF0Y2ggaG9vayBmb3IgdGhlIG1hcHBlZCB0eXBlXG5cdFx0aWYgKCBzcGVjaWFsLnBvc3REaXNwYXRjaCApIHtcblx0XHRcdHNwZWNpYWwucG9zdERpc3BhdGNoLmNhbGwoIHRoaXMsIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHRoYW5kbGVyczogZnVuY3Rpb24oIGV2ZW50LCBoYW5kbGVycyApIHtcblx0XHR2YXIgaSwgaGFuZGxlT2JqLCBzZWwsIG1hdGNoZWRIYW5kbGVycywgbWF0Y2hlZFNlbGVjdG9ycyxcblx0XHRcdGhhbmRsZXJRdWV1ZSA9IFtdLFxuXHRcdFx0ZGVsZWdhdGVDb3VudCA9IGhhbmRsZXJzLmRlbGVnYXRlQ291bnQsXG5cdFx0XHRjdXIgPSBldmVudC50YXJnZXQ7XG5cblx0XHQvLyBGaW5kIGRlbGVnYXRlIGhhbmRsZXJzXG5cdFx0aWYgKCBkZWxlZ2F0ZUNvdW50ICYmXG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OVxuXHRcdFx0Ly8gQmxhY2staG9sZSBTVkcgPHVzZT4gaW5zdGFuY2UgdHJlZXMgKHRyYWMtMTMxODApXG5cdFx0XHRjdXIubm9kZVR5cGUgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQyXG5cdFx0XHQvLyBTdXBwcmVzcyBzcGVjLXZpb2xhdGluZyBjbGlja3MgaW5kaWNhdGluZyBhIG5vbi1wcmltYXJ5IHBvaW50ZXIgYnV0dG9uICh0cmFjLTM4NjEpXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudC10eXBlLWNsaWNrXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG5cdFx0XHQvLyAuLi5idXQgbm90IGFycm93IGtleSBcImNsaWNrc1wiIG9mIHJhZGlvIGlucHV0cywgd2hpY2ggY2FuIGhhdmUgYGJ1dHRvbmAgLTEgKGdoLTIzNDMpXG5cdFx0XHQhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgZXZlbnQuYnV0dG9uID49IDEgKSApIHtcblxuXHRcdFx0Zm9yICggOyBjdXIgIT09IHRoaXM7IGN1ciA9IGN1ci5wYXJlbnROb2RlIHx8IHRoaXMgKSB7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgY2hlY2sgbm9uLWVsZW1lbnRzICgjMTMyMDgpXG5cdFx0XHRcdC8vIERvbid0IHByb2Nlc3MgY2xpY2tzIG9uIGRpc2FibGVkIGVsZW1lbnRzICgjNjkxMSwgIzgxNjUsICMxMTM4MiwgIzExNzY0KVxuXHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA9PT0gMSAmJiAhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgY3VyLmRpc2FibGVkID09PSB0cnVlICkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0bWF0Y2hlZFNlbGVjdG9ycyA9IHt9O1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbIGkgXTtcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKCMxMzIwMylcblx0XHRcdFx0XHRcdHNlbCA9IGhhbmRsZU9iai5zZWxlY3RvciArIFwiIFwiO1xuXG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdID0gaGFuZGxlT2JqLm5lZWRzQ29udGV4dCA/XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCBzZWwsIHRoaXMgKS5pbmRleCggY3VyICkgPiAtMSA6XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmZpbmQoIHNlbCwgdGhpcywgbnVsbCwgWyBjdXIgXSApLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZWRIYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkSGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goIHsgZWxlbTogY3VyLCBoYW5kbGVyczogbWF0Y2hlZEhhbmRsZXJzIH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIHJlbWFpbmluZyAoZGlyZWN0bHktYm91bmQpIGhhbmRsZXJzXG5cdFx0Y3VyID0gdGhpcztcblx0XHRpZiAoIGRlbGVnYXRlQ291bnQgPCBoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRoYW5kbGVyUXVldWUucHVzaCggeyBlbGVtOiBjdXIsIGhhbmRsZXJzOiBoYW5kbGVycy5zbGljZSggZGVsZWdhdGVDb3VudCApIH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaGFuZGxlclF1ZXVlO1xuXHR9LFxuXG5cdGFkZFByb3A6IGZ1bmN0aW9uKCBuYW1lLCBob29rICkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSwgbmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblxuXHRcdFx0Z2V0OiBqUXVlcnkuaXNGdW5jdGlvbiggaG9vayApID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBob29rKCB0aGlzLm9yaWdpbmFsRXZlbnQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gOlxuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFsgbmFtZSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgbmFtZSwge1xuXHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGZpeDogZnVuY3Rpb24oIG9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0cmV0dXJuIG9yaWdpbmFsRXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0b3JpZ2luYWxFdmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCBvcmlnaW5hbEV2ZW50ICk7XG5cdH0sXG5cblx0c3BlY2lhbDoge1xuXHRcdGxvYWQ6IHtcblxuXHRcdFx0Ly8gUHJldmVudCB0cmlnZ2VyZWQgaW1hZ2UubG9hZCBldmVudHMgZnJvbSBidWJibGluZyB0byB3aW5kb3cubG9hZFxuXHRcdFx0bm9CdWJibGU6IHRydWVcblx0XHR9LFxuXHRcdGZvY3VzOiB7XG5cblx0XHRcdC8vIEZpcmUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuXHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggdGhpcyAhPT0gc2FmZUFjdGl2ZUVsZW1lbnQoKSAmJiB0aGlzLmZvY3VzICkge1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNpblwiXG5cdFx0fSxcblx0XHRibHVyOiB7XG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCB0aGlzID09PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmIHRoaXMuYmx1ciApIHtcblx0XHRcdFx0XHR0aGlzLmJsdXIoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNvdXRcIlxuXHRcdH0sXG5cdFx0Y2xpY2s6IHtcblxuXHRcdFx0Ly8gRm9yIGNoZWNrYm94LCBmaXJlIG5hdGl2ZSBldmVudCBzbyBjaGVja2VkIHN0YXRlIHdpbGwgYmUgcmlnaHRcblx0XHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIHRoaXMudHlwZSA9PT0gXCJjaGVja2JveFwiICYmIHRoaXMuY2xpY2sgJiYgalF1ZXJ5Lm5vZGVOYW1lKCB0aGlzLCBcImlucHV0XCIgKSApIHtcblx0XHRcdFx0XHR0aGlzLmNsaWNrKCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBGb3IgY3Jvc3MtYnJvd3NlciBjb25zaXN0ZW5jeSwgZG9uJ3QgZmlyZSBuYXRpdmUgLmNsaWNrKCkgb24gbGlua3Ncblx0XHRcdF9kZWZhdWx0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkubm9kZU5hbWUoIGV2ZW50LnRhcmdldCwgXCJhXCIgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0YmVmb3JldW5sb2FkOiB7XG5cdFx0XHRwb3N0RGlzcGF0Y2g6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDIwK1xuXHRcdFx0XHQvLyBGaXJlZm94IGRvZXNuJ3QgYWxlcnQgaWYgdGhlIHJldHVyblZhbHVlIGZpZWxkIGlzIG5vdCBzZXQuXG5cdFx0XHRcdGlmICggZXZlbnQucmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRldmVudC5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZXZlbnQucmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiggZWxlbSwgdHlwZSwgaGFuZGxlICkge1xuXG5cdC8vIFRoaXMgXCJpZlwiIGlzIG5lZWRlZCBmb3IgcGxhaW4gb2JqZWN0c1xuXHRpZiAoIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcblx0XHRlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIGhhbmRsZSApO1xuXHR9XG59O1xuXG5qUXVlcnkuRXZlbnQgPSBmdW5jdGlvbiggc3JjLCBwcm9wcyApIHtcblxuXHQvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgdGhlICduZXcnIGtleXdvcmRcblx0aWYgKCAhKCB0aGlzIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50ICkgKSB7XG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuRXZlbnQoIHNyYywgcHJvcHMgKTtcblx0fVxuXG5cdC8vIEV2ZW50IG9iamVjdFxuXHRpZiAoIHNyYyAmJiBzcmMudHlwZSApIHtcblx0XHR0aGlzLm9yaWdpbmFsRXZlbnQgPSBzcmM7XG5cdFx0dGhpcy50eXBlID0gc3JjLnR5cGU7XG5cblx0XHQvLyBFdmVudHMgYnViYmxpbmcgdXAgdGhlIGRvY3VtZW50IG1heSBoYXZlIGJlZW4gbWFya2VkIGFzIHByZXZlbnRlZFxuXHRcdC8vIGJ5IGEgaGFuZGxlciBsb3dlciBkb3duIHRoZSB0cmVlOyByZWZsZWN0IHRoZSBjb3JyZWN0IHZhbHVlLlxuXHRcdHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gc3JjLmRlZmF1bHRQcmV2ZW50ZWQgfHxcblx0XHRcdFx0c3JjLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHVuZGVmaW5lZCAmJlxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seVxuXHRcdFx0XHRzcmMucmV0dXJuVmFsdWUgPT09IGZhbHNlID9cblx0XHRcdHJldHVyblRydWUgOlxuXHRcdFx0cmV0dXJuRmFsc2U7XG5cblx0XHQvLyBDcmVhdGUgdGFyZ2V0IHByb3BlcnRpZXNcblx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgPD02IC0gNyBvbmx5XG5cdFx0Ly8gVGFyZ2V0IHNob3VsZCBub3QgYmUgYSB0ZXh0IG5vZGUgKCM1MDQsICMxMzE0Mylcblx0XHR0aGlzLnRhcmdldCA9ICggc3JjLnRhcmdldCAmJiBzcmMudGFyZ2V0Lm5vZGVUeXBlID09PSAzICkgP1xuXHRcdFx0c3JjLnRhcmdldC5wYXJlbnROb2RlIDpcblx0XHRcdHNyYy50YXJnZXQ7XG5cblx0XHR0aGlzLmN1cnJlbnRUYXJnZXQgPSBzcmMuY3VycmVudFRhcmdldDtcblx0XHR0aGlzLnJlbGF0ZWRUYXJnZXQgPSBzcmMucmVsYXRlZFRhcmdldDtcblxuXHQvLyBFdmVudCB0eXBlXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50eXBlID0gc3JjO1xuXHR9XG5cblx0Ly8gUHV0IGV4cGxpY2l0bHkgcHJvdmlkZWQgcHJvcGVydGllcyBvbnRvIHRoZSBldmVudCBvYmplY3Rcblx0aWYgKCBwcm9wcyApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aGlzLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcblx0dGhpcy50aW1lU3RhbXAgPSBzcmMgJiYgc3JjLnRpbWVTdGFtcCB8fCBqUXVlcnkubm93KCk7XG5cblx0Ly8gTWFyayBpdCBhcyBmaXhlZFxuXHR0aGlzWyBqUXVlcnkuZXhwYW5kbyBdID0gdHJ1ZTtcbn07XG5cbi8vIGpRdWVyeS5FdmVudCBpcyBiYXNlZCBvbiBET00zIEV2ZW50cyBhcyBzcGVjaWZpZWQgYnkgdGhlIEVDTUFTY3JpcHQgTGFuZ3VhZ2UgQmluZGluZ1xuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDMvV0QtRE9NLUxldmVsLTMtRXZlbnRzLTIwMDMwMzMxL2VjbWEtc2NyaXB0LWJpbmRpbmcuaHRtbFxualF1ZXJ5LkV2ZW50LnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IGpRdWVyeS5FdmVudCxcblx0aXNEZWZhdWx0UHJldmVudGVkOiByZXR1cm5GYWxzZSxcblx0aXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cdGlzU2ltdWxhdGVkOiBmYWxzZSxcblxuXHRwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9LFxuXHRzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSxcblx0c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG59O1xuXG4vLyBJbmNsdWRlcyBhbGwgY29tbW9uIGV2ZW50IHByb3BzIGluY2x1ZGluZyBLZXlFdmVudCBhbmQgTW91c2VFdmVudCBzcGVjaWZpYyBwcm9wc1xualF1ZXJ5LmVhY2goIHtcblx0YWx0S2V5OiB0cnVlLFxuXHRidWJibGVzOiB0cnVlLFxuXHRjYW5jZWxhYmxlOiB0cnVlLFxuXHRjaGFuZ2VkVG91Y2hlczogdHJ1ZSxcblx0Y3RybEtleTogdHJ1ZSxcblx0ZGV0YWlsOiB0cnVlLFxuXHRldmVudFBoYXNlOiB0cnVlLFxuXHRtZXRhS2V5OiB0cnVlLFxuXHRwYWdlWDogdHJ1ZSxcblx0cGFnZVk6IHRydWUsXG5cdHNoaWZ0S2V5OiB0cnVlLFxuXHR2aWV3OiB0cnVlLFxuXHRcImNoYXJcIjogdHJ1ZSxcblx0Y2hhckNvZGU6IHRydWUsXG5cdGtleTogdHJ1ZSxcblx0a2V5Q29kZTogdHJ1ZSxcblx0YnV0dG9uOiB0cnVlLFxuXHRidXR0b25zOiB0cnVlLFxuXHRjbGllbnRYOiB0cnVlLFxuXHRjbGllbnRZOiB0cnVlLFxuXHRvZmZzZXRYOiB0cnVlLFxuXHRvZmZzZXRZOiB0cnVlLFxuXHRwb2ludGVySWQ6IHRydWUsXG5cdHBvaW50ZXJUeXBlOiB0cnVlLFxuXHRzY3JlZW5YOiB0cnVlLFxuXHRzY3JlZW5ZOiB0cnVlLFxuXHR0YXJnZXRUb3VjaGVzOiB0cnVlLFxuXHR0b0VsZW1lbnQ6IHRydWUsXG5cdHRvdWNoZXM6IHRydWUsXG5cblx0d2hpY2g6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHR2YXIgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuXG5cdFx0Ly8gQWRkIHdoaWNoIGZvciBrZXkgZXZlbnRzXG5cdFx0aWYgKCBldmVudC53aGljaCA9PSBudWxsICYmIHJrZXlFdmVudC50ZXN0KCBldmVudC50eXBlICkgKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnQuY2hhckNvZGUgIT0gbnVsbCA/IGV2ZW50LmNoYXJDb2RlIDogZXZlbnQua2V5Q29kZTtcblx0XHR9XG5cblx0XHQvLyBBZGQgd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG5cdFx0aWYgKCAhZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgcm1vdXNlRXZlbnQudGVzdCggZXZlbnQudHlwZSApICkge1xuXHRcdFx0aWYgKCBidXR0b24gJiAxICkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBidXR0b24gJiAyICkge1xuXHRcdFx0XHRyZXR1cm4gMztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBidXR0b24gJiA0ICkge1xuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LndoaWNoO1xuXHR9XG59LCBqUXVlcnkuZXZlbnQuYWRkUHJvcCApO1xuXG4vLyBDcmVhdGUgbW91c2VlbnRlci9sZWF2ZSBldmVudHMgdXNpbmcgbW91c2VvdmVyL291dCBhbmQgZXZlbnQtdGltZSBjaGVja3Ncbi8vIHNvIHRoYXQgZXZlbnQgZGVsZWdhdGlvbiB3b3JrcyBpbiBqUXVlcnkuXG4vLyBEbyB0aGUgc2FtZSBmb3IgcG9pbnRlcmVudGVyL3BvaW50ZXJsZWF2ZSBhbmQgcG9pbnRlcm92ZXIvcG9pbnRlcm91dFxuLy9cbi8vIFN1cHBvcnQ6IFNhZmFyaSA3IG9ubHlcbi8vIFNhZmFyaSBzZW5kcyBtb3VzZWVudGVyIHRvbyBvZnRlbjsgc2VlOlxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDcwMjU4XG4vLyBmb3IgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBidWcgKGl0IGV4aXN0ZWQgaW4gb2xkZXIgQ2hyb21lIHZlcnNpb25zIGFzIHdlbGwpLlxualF1ZXJ5LmVhY2goIHtcblx0bW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIixcblx0bW91c2VsZWF2ZTogXCJtb3VzZW91dFwiLFxuXHRwb2ludGVyZW50ZXI6IFwicG9pbnRlcm92ZXJcIixcblx0cG9pbnRlcmxlYXZlOiBcInBvaW50ZXJvdXRcIlxufSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIG9yaWcgXSA9IHtcblx0XHRkZWxlZ2F0ZVR5cGU6IGZpeCxcblx0XHRiaW5kVHlwZTogZml4LFxuXG5cdFx0aGFuZGxlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgcmV0LFxuXHRcdFx0XHR0YXJnZXQgPSB0aGlzLFxuXHRcdFx0XHRyZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldCxcblx0XHRcdFx0aGFuZGxlT2JqID0gZXZlbnQuaGFuZGxlT2JqO1xuXG5cdFx0XHQvLyBGb3IgbW91c2VlbnRlci9sZWF2ZSBjYWxsIHRoZSBoYW5kbGVyIGlmIHJlbGF0ZWQgaXMgb3V0c2lkZSB0aGUgdGFyZ2V0LlxuXHRcdFx0Ly8gTkI6IE5vIHJlbGF0ZWRUYXJnZXQgaWYgdGhlIG1vdXNlIGxlZnQvZW50ZXJlZCB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdGlmICggIXJlbGF0ZWQgfHwgKCByZWxhdGVkICE9PSB0YXJnZXQgJiYgIWpRdWVyeS5jb250YWlucyggdGFyZ2V0LCByZWxhdGVkICkgKSApIHtcblx0XHRcdFx0ZXZlbnQudHlwZSA9IGhhbmRsZU9iai5vcmlnVHlwZTtcblx0XHRcdFx0cmV0ID0gaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRldmVudC50eXBlID0gZml4O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdH07XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHRvbjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIG9uKCB0aGlzLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG5cdH0sXG5cdG9uZTogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIG9uKCB0aGlzLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCAxICk7XG5cdH0sXG5cdG9mZjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZm4gKSB7XG5cdFx0dmFyIGhhbmRsZU9iaiwgdHlwZTtcblx0XHRpZiAoIHR5cGVzICYmIHR5cGVzLnByZXZlbnREZWZhdWx0ICYmIHR5cGVzLmhhbmRsZU9iaiApIHtcblxuXHRcdFx0Ly8gKCBldmVudCApICBkaXNwYXRjaGVkIGpRdWVyeS5FdmVudFxuXHRcdFx0aGFuZGxlT2JqID0gdHlwZXMuaGFuZGxlT2JqO1xuXHRcdFx0alF1ZXJ5KCB0eXBlcy5kZWxlZ2F0ZVRhcmdldCApLm9mZihcblx0XHRcdFx0aGFuZGxlT2JqLm5hbWVzcGFjZSA/XG5cdFx0XHRcdFx0aGFuZGxlT2JqLm9yaWdUeXBlICsgXCIuXCIgKyBoYW5kbGVPYmoubmFtZXNwYWNlIDpcblx0XHRcdFx0XHRoYW5kbGVPYmoub3JpZ1R5cGUsXG5cdFx0XHRcdGhhbmRsZU9iai5zZWxlY3Rvcixcblx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXJcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCB0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMtb2JqZWN0IFssIHNlbGVjdG9yXSApXG5cdFx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuXHRcdFx0XHR0aGlzLm9mZiggdHlwZSwgc2VsZWN0b3IsIHR5cGVzWyB0eXBlIF0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZiAoIHNlbGVjdG9yID09PSBmYWxzZSB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcyBbLCBmbl0gKVxuXHRcdFx0Zm4gPSBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRpZiAoIGZuID09PSBmYWxzZSApIHtcblx0XHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggdGhpcywgdHlwZXMsIGZuLCBzZWxlY3RvciApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5cbnZhclxuXG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQvaXNzdWVzLzMyMjlcblx0cnhodG1sVGFnID0gLzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksXG5cblx0LyogZXNsaW50LWVuYWJsZSAqL1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSwgRWRnZSAxMiAtIDEzXG5cdC8vIEluIElFL0VkZ2UgdXNpbmcgcmVnZXggZ3JvdXBzIGhlcmUgY2F1c2VzIHNldmVyZSBzbG93ZG93bnMuXG5cdC8vIFNlZSBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzE3MzY1MTIvXG5cdHJub0lubmVyaHRtbCA9IC88c2NyaXB0fDxzdHlsZXw8bGluay9pLFxuXG5cdC8vIGNoZWNrZWQ9XCJjaGVja2VkXCIgb3IgY2hlY2tlZFxuXHRyY2hlY2tlZCA9IC9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksXG5cdHJzY3JpcHRUeXBlTWFza2VkID0gL150cnVlXFwvKC4qKS8sXG5cdHJjbGVhblNjcmlwdCA9IC9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztcblxuZnVuY3Rpb24gbWFuaXB1bGF0aW9uVGFyZ2V0KCBlbGVtLCBjb250ZW50ICkge1xuXHRpZiAoIGpRdWVyeS5ub2RlTmFtZSggZWxlbSwgXCJ0YWJsZVwiICkgJiZcblx0XHRqUXVlcnkubm9kZU5hbWUoIGNvbnRlbnQubm9kZVR5cGUgIT09IDExID8gY29udGVudCA6IGNvbnRlbnQuZmlyc3RDaGlsZCwgXCJ0clwiICkgKSB7XG5cblx0XHRyZXR1cm4gZWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJ0Ym9keVwiIClbIDAgXSB8fCBlbGVtO1xuXHR9XG5cblx0cmV0dXJuIGVsZW07XG59XG5cbi8vIFJlcGxhY2UvcmVzdG9yZSB0aGUgdHlwZSBhdHRyaWJ1dGUgb2Ygc2NyaXB0IGVsZW1lbnRzIGZvciBzYWZlIERPTSBtYW5pcHVsYXRpb25cbmZ1bmN0aW9uIGRpc2FibGVTY3JpcHQoIGVsZW0gKSB7XG5cdGVsZW0udHlwZSA9ICggZWxlbS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICkgIT09IG51bGwgKSArIFwiL1wiICsgZWxlbS50eXBlO1xuXHRyZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVTY3JpcHQoIGVsZW0gKSB7XG5cdHZhciBtYXRjaCA9IHJzY3JpcHRUeXBlTWFza2VkLmV4ZWMoIGVsZW0udHlwZSApO1xuXG5cdGlmICggbWF0Y2ggKSB7XG5cdFx0ZWxlbS50eXBlID0gbWF0Y2hbIDEgXTtcblx0fSBlbHNlIHtcblx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSggXCJ0eXBlXCIgKTtcblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBjbG9uZUNvcHlFdmVudCggc3JjLCBkZXN0ICkge1xuXHR2YXIgaSwgbCwgdHlwZSwgcGRhdGFPbGQsIHBkYXRhQ3VyLCB1ZGF0YU9sZCwgdWRhdGFDdXIsIGV2ZW50cztcblxuXHRpZiAoIGRlc3Qubm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gMS4gQ29weSBwcml2YXRlIGRhdGE6IGV2ZW50cywgaGFuZGxlcnMsIGV0Yy5cblx0aWYgKCBkYXRhUHJpdi5oYXNEYXRhKCBzcmMgKSApIHtcblx0XHRwZGF0YU9sZCA9IGRhdGFQcml2LmFjY2Vzcyggc3JjICk7XG5cdFx0cGRhdGFDdXIgPSBkYXRhUHJpdi5zZXQoIGRlc3QsIHBkYXRhT2xkICk7XG5cdFx0ZXZlbnRzID0gcGRhdGFPbGQuZXZlbnRzO1xuXG5cdFx0aWYgKCBldmVudHMgKSB7XG5cdFx0XHRkZWxldGUgcGRhdGFDdXIuaGFuZGxlO1xuXHRcdFx0cGRhdGFDdXIuZXZlbnRzID0ge307XG5cblx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IGV2ZW50c1sgdHlwZSBdLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBkZXN0LCB0eXBlLCBldmVudHNbIHR5cGUgXVsgaSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyAyLiBDb3B5IHVzZXIgZGF0YVxuXHRpZiAoIGRhdGFVc2VyLmhhc0RhdGEoIHNyYyApICkge1xuXHRcdHVkYXRhT2xkID0gZGF0YVVzZXIuYWNjZXNzKCBzcmMgKTtcblx0XHR1ZGF0YUN1ciA9IGpRdWVyeS5leHRlbmQoIHt9LCB1ZGF0YU9sZCApO1xuXG5cdFx0ZGF0YVVzZXIuc2V0KCBkZXN0LCB1ZGF0YUN1ciApO1xuXHR9XG59XG5cbi8vIEZpeCBJRSBidWdzLCBzZWUgc3VwcG9ydCB0ZXN0c1xuZnVuY3Rpb24gZml4SW5wdXQoIHNyYywgZGVzdCApIHtcblx0dmFyIG5vZGVOYW1lID0gZGVzdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdC8vIEZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uLlxuXHRpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgcmNoZWNrYWJsZVR5cGUudGVzdCggc3JjLnR5cGUgKSApIHtcblx0XHRkZXN0LmNoZWNrZWQgPSBzcmMuY2hlY2tlZDtcblxuXHQvLyBGYWlscyB0byByZXR1cm4gdGhlIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgZGVmYXVsdCBzZWxlY3RlZCBzdGF0ZSB3aGVuIGNsb25pbmcgb3B0aW9uc1xuXHR9IGVsc2UgaWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5vZGVOYW1lID09PSBcInRleHRhcmVhXCIgKSB7XG5cdFx0ZGVzdC5kZWZhdWx0VmFsdWUgPSBzcmMuZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRvbU1hbmlwKCBjb2xsZWN0aW9uLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCApIHtcblxuXHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdGFyZ3MgPSBjb25jYXQuYXBwbHkoIFtdLCBhcmdzICk7XG5cblx0dmFyIGZyYWdtZW50LCBmaXJzdCwgc2NyaXB0cywgaGFzU2NyaXB0cywgbm9kZSwgZG9jLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBjb2xsZWN0aW9uLmxlbmd0aCxcblx0XHRpTm9DbG9uZSA9IGwgLSAxLFxuXHRcdHZhbHVlID0gYXJnc1sgMCBdLFxuXHRcdGlzRnVuY3Rpb24gPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKTtcblxuXHQvLyBXZSBjYW4ndCBjbG9uZU5vZGUgZnJhZ21lbnRzIHRoYXQgY29udGFpbiBjaGVja2VkLCBpbiBXZWJLaXRcblx0aWYgKCBpc0Z1bmN0aW9uIHx8XG5cdFx0XHQoIGwgPiAxICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc3VwcG9ydC5jaGVja0Nsb25lICYmIHJjaGVja2VkLnRlc3QoIHZhbHVlICkgKSApIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5lYWNoKCBmdW5jdGlvbiggaW5kZXggKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGNvbGxlY3Rpb24uZXEoIGluZGV4ICk7XG5cdFx0XHRpZiAoIGlzRnVuY3Rpb24gKSB7XG5cdFx0XHRcdGFyZ3NbIDAgXSA9IHZhbHVlLmNhbGwoIHRoaXMsIGluZGV4LCBzZWxmLmh0bWwoKSApO1xuXHRcdFx0fVxuXHRcdFx0ZG9tTWFuaXAoIHNlbGYsIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCBsICkge1xuXHRcdGZyYWdtZW50ID0gYnVpbGRGcmFnbWVudCggYXJncywgY29sbGVjdGlvblsgMCBdLm93bmVyRG9jdW1lbnQsIGZhbHNlLCBjb2xsZWN0aW9uLCBpZ25vcmVkICk7XG5cdFx0Zmlyc3QgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuXG5cdFx0aWYgKCBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdGZyYWdtZW50ID0gZmlyc3Q7XG5cdFx0fVxuXG5cdFx0Ly8gUmVxdWlyZSBlaXRoZXIgbmV3IGNvbnRlbnQgb3IgYW4gaW50ZXJlc3QgaW4gaWdub3JlZCBlbGVtZW50cyB0byBpbnZva2UgdGhlIGNhbGxiYWNrXG5cdFx0aWYgKCBmaXJzdCB8fCBpZ25vcmVkICkge1xuXHRcdFx0c2NyaXB0cyA9IGpRdWVyeS5tYXAoIGdldEFsbCggZnJhZ21lbnQsIFwic2NyaXB0XCIgKSwgZGlzYWJsZVNjcmlwdCApO1xuXHRcdFx0aGFzU2NyaXB0cyA9IHNjcmlwdHMubGVuZ3RoO1xuXG5cdFx0XHQvLyBVc2UgdGhlIG9yaWdpbmFsIGZyYWdtZW50IGZvciB0aGUgbGFzdCBpdGVtXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIHRoZSBmaXJzdCBiZWNhdXNlIGl0IGNhbiBlbmQgdXBcblx0XHRcdC8vIGJlaW5nIGVtcHRpZWQgaW5jb3JyZWN0bHkgaW4gY2VydGFpbiBzaXR1YXRpb25zICgjODA3MCkuXG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdG5vZGUgPSBmcmFnbWVudDtcblxuXHRcdFx0XHRpZiAoIGkgIT09IGlOb0Nsb25lICkge1xuXHRcdFx0XHRcdG5vZGUgPSBqUXVlcnkuY2xvbmUoIG5vZGUsIHRydWUsIHRydWUgKTtcblxuXHRcdFx0XHRcdC8vIEtlZXAgcmVmZXJlbmNlcyB0byBjbG9uZWQgc2NyaXB0cyBmb3IgbGF0ZXIgcmVzdG9yYXRpb25cblx0XHRcdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBzY3JpcHRzLCBnZXRBbGwoIG5vZGUsIFwic2NyaXB0XCIgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwoIGNvbGxlY3Rpb25bIGkgXSwgbm9kZSwgaSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cdFx0XHRcdGRvYyA9IHNjcmlwdHNbIHNjcmlwdHMubGVuZ3RoIC0gMSBdLm93bmVyRG9jdW1lbnQ7XG5cblx0XHRcdFx0Ly8gUmVlbmFibGUgc2NyaXB0c1xuXHRcdFx0XHRqUXVlcnkubWFwKCBzY3JpcHRzLCByZXN0b3JlU2NyaXB0ICk7XG5cblx0XHRcdFx0Ly8gRXZhbHVhdGUgZXhlY3V0YWJsZSBzY3JpcHRzIG9uIGZpcnN0IGRvY3VtZW50IGluc2VydGlvblxuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGhhc1NjcmlwdHM7IGkrKyApIHtcblx0XHRcdFx0XHRub2RlID0gc2NyaXB0c1sgaSBdO1xuXHRcdFx0XHRcdGlmICggcnNjcmlwdFR5cGUudGVzdCggbm9kZS50eXBlIHx8IFwiXCIgKSAmJlxuXHRcdFx0XHRcdFx0IWRhdGFQcml2LmFjY2Vzcyggbm9kZSwgXCJnbG9iYWxFdmFsXCIgKSAmJlxuXHRcdFx0XHRcdFx0alF1ZXJ5LmNvbnRhaW5zKCBkb2MsIG5vZGUgKSApIHtcblxuXHRcdFx0XHRcdFx0aWYgKCBub2RlLnNyYyApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBPcHRpb25hbCBBSkFYIGRlcGVuZGVuY3ksIGJ1dCB3b24ndCBydW4gc2NyaXB0cyBpZiBub3QgcHJlc2VudFxuXHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5fZXZhbFVybCApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuX2V2YWxVcmwoIG5vZGUuc3JjICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdERPTUV2YWwoIG5vZGUudGV4dENvbnRlbnQucmVwbGFjZSggcmNsZWFuU2NyaXB0LCBcIlwiICksIGRvYyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjb2xsZWN0aW9uO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoIGVsZW0sIHNlbGVjdG9yLCBrZWVwRGF0YSApIHtcblx0dmFyIG5vZGUsXG5cdFx0bm9kZXMgPSBzZWxlY3RvciA/IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCBlbGVtICkgOiBlbGVtLFxuXHRcdGkgPSAwO1xuXG5cdGZvciAoIDsgKCBub2RlID0gbm9kZXNbIGkgXSApICE9IG51bGw7IGkrKyApIHtcblx0XHRpZiAoICFrZWVwRGF0YSAmJiBub2RlLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBub2RlICkgKTtcblx0XHR9XG5cblx0XHRpZiAoIG5vZGUucGFyZW50Tm9kZSApIHtcblx0XHRcdGlmICgga2VlcERhdGEgJiYgalF1ZXJ5LmNvbnRhaW5zKCBub2RlLm93bmVyRG9jdW1lbnQsIG5vZGUgKSApIHtcblx0XHRcdFx0c2V0R2xvYmFsRXZhbCggZ2V0QWxsKCBub2RlLCBcInNjcmlwdFwiICkgKTtcblx0XHRcdH1cblx0XHRcdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggbm9kZSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdGh0bWxQcmVmaWx0ZXI6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdHJldHVybiBodG1sLnJlcGxhY2UoIHJ4aHRtbFRhZywgXCI8JDE+PC8kMj5cIiApO1xuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiggZWxlbSwgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKSB7XG5cdFx0dmFyIGksIGwsIHNyY0VsZW1lbnRzLCBkZXN0RWxlbWVudHMsXG5cdFx0XHRjbG9uZSA9IGVsZW0uY2xvbmVOb2RlKCB0cnVlICksXG5cdFx0XHRpblBhZ2UgPSBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApO1xuXG5cdFx0Ly8gRml4IElFIGNsb25pbmcgaXNzdWVzXG5cdFx0aWYgKCAhc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgZWxlbS5ub2RlVHlwZSA9PT0gMTEgKSAmJlxuXHRcdFx0XHQhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIFdlIGVzY2hldyBTaXp6bGUgaGVyZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uczogaHR0cHM6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuXHRcdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSApO1xuXHRcdFx0c3JjRWxlbWVudHMgPSBnZXRBbGwoIGVsZW0gKTtcblxuXHRcdFx0Zm9yICggaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZpeElucHV0KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcblx0XHRpZiAoIGRhdGFBbmRFdmVudHMgKSB7XG5cdFx0XHRpZiAoIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0XHRzcmNFbGVtZW50cyA9IHNyY0VsZW1lbnRzIHx8IGdldEFsbCggZWxlbSApO1xuXHRcdFx0XHRkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKCBjbG9uZSApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGNsb25lQ29weUV2ZW50KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbG9uZUNvcHlFdmVudCggZWxlbSwgY2xvbmUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSwgXCJzY3JpcHRcIiApO1xuXHRcdGlmICggZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCBkZXN0RWxlbWVudHMsICFpblBhZ2UgJiYgZ2V0QWxsKCBlbGVtLCBcInNjcmlwdFwiICkgKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIGNsb25lZCBzZXRcblx0XHRyZXR1cm4gY2xvbmU7XG5cdH0sXG5cblx0Y2xlYW5EYXRhOiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cdFx0dmFyIGRhdGEsIGVsZW0sIHR5cGUsXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWwsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9PSB1bmRlZmluZWQ7IGkrKyApIHtcblx0XHRcdGlmICggYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0XHRpZiAoICggZGF0YSA9IGVsZW1bIGRhdGFQcml2LmV4cGFuZG8gXSApICkge1xuXHRcdFx0XHRcdGlmICggZGF0YS5ldmVudHMgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCB0eXBlIGluIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWxbIHR5cGUgXSApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIHNob3J0Y3V0IHRvIGF2b2lkIGpRdWVyeS5ldmVudC5yZW1vdmUncyBvdmVyaGVhZFxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZGF0YS5oYW5kbGUgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG5cdFx0XHRcdFx0Ly8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cdFx0XHRcdFx0ZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdICkge1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHQvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcblx0XHRcdFx0XHRlbGVtWyBkYXRhVXNlci5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRkZXRhY2g6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiByZW1vdmUoIHRoaXMsIHNlbGVjdG9yICk7XG5cdH0sXG5cblx0dGV4dDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnRleHQoIHRoaXMgKSA6XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdGFwcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcblx0XHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdHByZXBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoIGVsZW0sIHRhcmdldC5maXJzdENoaWxkICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGJlZm9yZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0YWZ0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzLm5leHRTaWJsaW5nICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyAoIGVsZW0gPSB0aGlzWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0Ly8gUHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcblx0XHRcdFx0ZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uKCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuXHRcdGRlZXBEYXRhQW5kRXZlbnRzID0gZGVlcERhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGRhdGFBbmRFdmVudHMgOiBkZWVwRGF0YUFuZEV2ZW50cztcblxuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNsb25lKCB0aGlzLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApO1xuXHRcdH0gKTtcblx0fSxcblxuXHRodG1sOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF0gfHwge30sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHRsID0gdGhpcy5sZW5ndGg7XG5cblx0XHRcdGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pbm5lckhUTUw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcblx0XHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCggdmFsdWUgKSAmJlxuXHRcdFx0XHQhd3JhcE1hcFsgKCBydGFnTmFtZS5leGVjKCB2YWx1ZSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpIF0gKSB7XG5cblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuaHRtbFByZWZpbHRlciggdmFsdWUgKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRcdGVsZW0gPSB0aGlzWyBpIF0gfHwge307XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblx0XHRcdFx0XHRcdFx0ZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtID0gMDtcblxuXHRcdFx0XHQvLyBJZiB1c2luZyBpbm5lckhUTUwgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgdXNlIHRoZSBmYWxsYmFjayBtZXRob2Rcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5hcHBlbmQoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRyZXBsYWNlV2l0aDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlnbm9yZWQgPSBbXTtcblxuXHRcdC8vIE1ha2UgdGhlIGNoYW5nZXMsIHJlcGxhY2luZyBlYWNoIG5vbi1pZ25vcmVkIGNvbnRleHQgZWxlbWVudCB3aXRoIHRoZSBuZXcgY29udGVudFxuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICggalF1ZXJ5LmluQXJyYXkoIHRoaXMsIGlnbm9yZWQgKSA8IDAgKSB7XG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggdGhpcyApICk7XG5cdFx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQoIGVsZW0sIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gRm9yY2UgY2FsbGJhY2sgaW52b2NhdGlvblxuXHRcdH0sIGlnbm9yZWQgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCgge1xuXHRhcHBlbmRUbzogXCJhcHBlbmRcIixcblx0cHJlcGVuZFRvOiBcInByZXBlbmRcIixcblx0aW5zZXJ0QmVmb3JlOiBcImJlZm9yZVwiLFxuXHRpbnNlcnRBZnRlcjogXCJhZnRlclwiLFxuXHRyZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcbn0sIGZ1bmN0aW9uKCBuYW1lLCBvcmlnaW5hbCApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGVsZW1zLFxuXHRcdFx0cmV0ID0gW10sXG5cdFx0XHRpbnNlcnQgPSBqUXVlcnkoIHNlbGVjdG9yICksXG5cdFx0XHRsYXN0ID0gaW5zZXJ0Lmxlbmd0aCAtIDEsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgaSA8PSBsYXN0OyBpKysgKSB7XG5cdFx0XHRlbGVtcyA9IGkgPT09IGxhc3QgPyB0aGlzIDogdGhpcy5jbG9uZSggdHJ1ZSApO1xuXHRcdFx0alF1ZXJ5KCBpbnNlcnRbIGkgXSApWyBvcmlnaW5hbCBdKCBlbGVtcyApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdC8vIC5nZXQoKSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdHB1c2guYXBwbHkoIHJldCwgZWxlbXMuZ2V0KCkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHJldCApO1xuXHR9O1xufSApO1xudmFyIHJtYXJnaW4gPSAoIC9ebWFyZ2luLyApO1xuXG52YXIgcm51bW5vbnB4ID0gbmV3IFJlZ0V4cCggXCJeKFwiICsgcG51bSArIFwiKSg/IXB4KVthLXolXSskXCIsIFwiaVwiICk7XG5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seSwgRmlyZWZveCA8PTMwICgjMTUwOTgsICMxNDE1MClcblx0XHQvLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcblx0XHQvLyBGRiBtZWFud2hpbGUgdGhyb3dzIG9uIGZyYW1lIGVsZW1lbnRzIHRocm91Z2ggXCJkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlXCJcblx0XHR2YXIgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuXHRcdGlmICggIXZpZXcgfHwgIXZpZXcub3BlbmVyICkge1xuXHRcdFx0dmlldyA9IHdpbmRvdztcblx0XHR9XG5cblx0XHRyZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG5cdH07XG5cblxuXG4oIGZ1bmN0aW9uKCkge1xuXG5cdC8vIEV4ZWN1dGluZyBib3RoIHBpeGVsUG9zaXRpb24gJiBib3hTaXppbmdSZWxpYWJsZSB0ZXN0cyByZXF1aXJlIG9ubHkgb25lIGxheW91dFxuXHQvLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuXHRmdW5jdGlvbiBjb21wdXRlU3R5bGVUZXN0cygpIHtcblxuXHRcdC8vIFRoaXMgaXMgYSBzaW5nbGV0b24sIHdlIG5lZWQgdG8gZXhlY3V0ZSBpdCBvbmx5IG9uY2Vcblx0XHRpZiAoICFkaXYgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZGl2LnN0eWxlLmNzc1RleHQgPVxuXHRcdFx0XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7XCIgK1xuXHRcdFx0XCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO1wiICtcblx0XHRcdFwibWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDtcIiArXG5cdFx0XHRcInRvcDoxJTt3aWR0aDo1MCVcIjtcblx0XHRkaXYuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApO1xuXG5cdFx0dmFyIGRpdlN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGRpdiApO1xuXHRcdHBpeGVsUG9zaXRpb25WYWwgPSBkaXZTdHlsZS50b3AgIT09IFwiMSVcIjtcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHksIEZpcmVmb3ggPD0zIC0gNDRcblx0XHRyZWxpYWJsZU1hcmdpbkxlZnRWYWwgPSBkaXZTdHlsZS5tYXJnaW5MZWZ0ID09PSBcIjJweFwiO1xuXHRcdGJveFNpemluZ1JlbGlhYmxlVmFsID0gZGl2U3R5bGUud2lkdGggPT09IFwiNHB4XCI7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5XG5cdFx0Ly8gU29tZSBzdHlsZXMgY29tZSBiYWNrIHdpdGggcGVyY2VudGFnZSB2YWx1ZXMsIGV2ZW4gdGhvdWdoIHRoZXkgc2hvdWxkbid0XG5cdFx0ZGl2LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI1MCVcIjtcblx0XHRwaXhlbE1hcmdpblJpZ2h0VmFsID0gZGl2U3R5bGUubWFyZ2luUmlnaHQgPT09IFwiNHB4XCI7XG5cblx0XHRkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoIGNvbnRhaW5lciApO1xuXG5cdFx0Ly8gTnVsbGlmeSB0aGUgZGl2IHNvIGl0IHdvdWxkbid0IGJlIHN0b3JlZCBpbiB0aGUgbWVtb3J5IGFuZFxuXHRcdC8vIGl0IHdpbGwgYWxzbyBiZSBhIHNpZ24gdGhhdCBjaGVja3MgYWxyZWFkeSBwZXJmb3JtZWRcblx0XHRkaXYgPSBudWxsO1xuXHR9XG5cblx0dmFyIHBpeGVsUG9zaXRpb25WYWwsIGJveFNpemluZ1JlbGlhYmxlVmFsLCBwaXhlbE1hcmdpblJpZ2h0VmFsLCByZWxpYWJsZU1hcmdpbkxlZnRWYWwsXG5cdFx0Y29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLFxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcblxuXHQvLyBGaW5pc2ggZWFybHkgaW4gbGltaXRlZCAobm9uLWJyb3dzZXIpIGVudmlyb25tZW50c1xuXHRpZiAoICFkaXYuc3R5bGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHQvLyBTdHlsZSBvZiBjbG9uZWQgZWxlbWVudCBhZmZlY3RzIHNvdXJjZSBlbGVtZW50IGNsb25lZCAoIzg5MDgpXG5cdGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiY29udGVudC1ib3hcIjtcblx0ZGl2LmNsb25lTm9kZSggdHJ1ZSApLnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJcIjtcblx0c3VwcG9ydC5jbGVhckNsb25lU3R5bGUgPSBkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPT09IFwiY29udGVudC1ib3hcIjtcblxuXHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtcIiArXG5cdFx0XCJwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIjtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBkaXYgKTtcblxuXHRqUXVlcnkuZXh0ZW5kKCBzdXBwb3J0LCB7XG5cdFx0cGl4ZWxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHBpeGVsUG9zaXRpb25WYWw7XG5cdFx0fSxcblx0XHRib3hTaXppbmdSZWxpYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIGJveFNpemluZ1JlbGlhYmxlVmFsO1xuXHRcdH0sXG5cdFx0cGl4ZWxNYXJnaW5SaWdodDogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHBpeGVsTWFyZ2luUmlnaHRWYWw7XG5cdFx0fSxcblx0XHRyZWxpYWJsZU1hcmdpbkxlZnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiByZWxpYWJsZU1hcmdpbkxlZnRWYWw7XG5cdFx0fVxuXHR9ICk7XG59ICkoKTtcblxuXG5mdW5jdGlvbiBjdXJDU1MoIGVsZW0sIG5hbWUsIGNvbXB1dGVkICkge1xuXHR2YXIgd2lkdGgsIG1pbldpZHRoLCBtYXhXaWR0aCwgcmV0LFxuXHRcdHN0eWxlID0gZWxlbS5zdHlsZTtcblxuXHRjb21wdXRlZCA9IGNvbXB1dGVkIHx8IGdldFN0eWxlcyggZWxlbSApO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdC8vIGdldFByb3BlcnR5VmFsdWUgaXMgb25seSBuZWVkZWQgZm9yIC5jc3MoJ2ZpbHRlcicpICgjMTI1MzcpXG5cdGlmICggY29tcHV0ZWQgKSB7XG5cdFx0cmV0ID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZSggbmFtZSApIHx8IGNvbXB1dGVkWyBuYW1lIF07XG5cblx0XHRpZiAoIHJldCA9PT0gXCJcIiAmJiAhalF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKSApIHtcblx0XHRcdHJldCA9IGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIEEgdHJpYnV0ZSB0byB0aGUgXCJhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXCJcblx0XHQvLyBBbmRyb2lkIEJyb3dzZXIgcmV0dXJucyBwZXJjZW50YWdlIGZvciBzb21lIHZhbHVlcyxcblx0XHQvLyBidXQgd2lkdGggc2VlbXMgdG8gYmUgcmVsaWFibHkgcGl4ZWxzLlxuXHRcdC8vIFRoaXMgaXMgYWdhaW5zdCB0aGUgQ1NTT00gZHJhZnQgc3BlYzpcblx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI3Jlc29sdmVkLXZhbHVlc1xuXHRcdGlmICggIXN1cHBvcnQucGl4ZWxNYXJnaW5SaWdodCgpICYmIHJudW1ub25weC50ZXN0KCByZXQgKSAmJiBybWFyZ2luLnRlc3QoIG5hbWUgKSApIHtcblxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuXHRcdFx0d2lkdGggPSBzdHlsZS53aWR0aDtcblx0XHRcdG1pbldpZHRoID0gc3R5bGUubWluV2lkdGg7XG5cdFx0XHRtYXhXaWR0aCA9IHN0eWxlLm1heFdpZHRoO1xuXG5cdFx0XHQvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG5cdFx0XHRzdHlsZS5taW5XaWR0aCA9IHN0eWxlLm1heFdpZHRoID0gc3R5bGUud2lkdGggPSByZXQ7XG5cdFx0XHRyZXQgPSBjb21wdXRlZC53aWR0aDtcblxuXHRcdFx0Ly8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuXHRcdFx0c3R5bGUud2lkdGggPSB3aWR0aDtcblx0XHRcdHN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG5cdFx0XHRzdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXQgIT09IHVuZGVmaW5lZCA/XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdFx0Ly8gSUUgcmV0dXJucyB6SW5kZXggdmFsdWUgYXMgYW4gaW50ZWdlci5cblx0XHRyZXQgKyBcIlwiIDpcblx0XHRyZXQ7XG59XG5cblxuZnVuY3Rpb24gYWRkR2V0SG9va0lmKCBjb25kaXRpb25GbiwgaG9va0ZuICkge1xuXG5cdC8vIERlZmluZSB0aGUgaG9vaywgd2UnbGwgY2hlY2sgb24gdGhlIGZpcnN0IHJ1biBpZiBpdCdzIHJlYWxseSBuZWVkZWQuXG5cdHJldHVybiB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggY29uZGl0aW9uRm4oKSApIHtcblxuXHRcdFx0XHQvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcblx0XHRcdFx0Ly8gdG8gbWlzc2luZyBkZXBlbmRlbmN5KSwgcmVtb3ZlIGl0LlxuXHRcdFx0XHRkZWxldGUgdGhpcy5nZXQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSG9vayBuZWVkZWQ7IHJlZGVmaW5lIGl0IHNvIHRoYXQgdGhlIHN1cHBvcnQgdGVzdCBpcyBub3QgZXhlY3V0ZWQgYWdhaW4uXG5cdFx0XHRyZXR1cm4gKCB0aGlzLmdldCA9IGhvb2tGbiApLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHR9XG5cdH07XG59XG5cblxudmFyXG5cblx0Ly8gU3dhcHBhYmxlIGlmIGRpc3BsYXkgaXMgbm9uZSBvciBzdGFydHMgd2l0aCB0YWJsZVxuXHQvLyBleGNlcHQgXCJ0YWJsZVwiLCBcInRhYmxlLWNlbGxcIiwgb3IgXCJ0YWJsZS1jYXB0aW9uXCJcblx0Ly8gU2VlIGhlcmUgZm9yIGRpc3BsYXkgdmFsdWVzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NTUy9kaXNwbGF5XG5cdHJkaXNwbGF5c3dhcCA9IC9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxcblx0Y3NzU2hvdyA9IHsgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiwgZGlzcGxheTogXCJibG9ja1wiIH0sXG5cdGNzc05vcm1hbFRyYW5zZm9ybSA9IHtcblx0XHRsZXR0ZXJTcGFjaW5nOiBcIjBcIixcblx0XHRmb250V2VpZ2h0OiBcIjQwMFwiXG5cdH0sXG5cblx0Y3NzUHJlZml4ZXMgPSBbIFwiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIiBdLFxuXHRlbXB0eVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLnN0eWxlO1xuXG4vLyBSZXR1cm4gYSBjc3MgcHJvcGVydHkgbWFwcGVkIHRvIGEgcG90ZW50aWFsbHkgdmVuZG9yIHByZWZpeGVkIHByb3BlcnR5XG5mdW5jdGlvbiB2ZW5kb3JQcm9wTmFtZSggbmFtZSApIHtcblxuXHQvLyBTaG9ydGN1dCBmb3IgbmFtZXMgdGhhdCBhcmUgbm90IHZlbmRvciBwcmVmaXhlZFxuXHRpZiAoIG5hbWUgaW4gZW1wdHlTdHlsZSApIHtcblx0XHRyZXR1cm4gbmFtZTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciB2ZW5kb3IgcHJlZml4ZWQgbmFtZXNcblx0dmFyIGNhcE5hbWUgPSBuYW1lWyAwIF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoIDEgKSxcblx0XHRpID0gY3NzUHJlZml4ZXMubGVuZ3RoO1xuXG5cdHdoaWxlICggaS0tICkge1xuXHRcdG5hbWUgPSBjc3NQcmVmaXhlc1sgaSBdICsgY2FwTmFtZTtcblx0XHRpZiAoIG5hbWUgaW4gZW1wdHlTdHlsZSApIHtcblx0XHRcdHJldHVybiBuYW1lO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZXRQb3NpdGl2ZU51bWJlciggZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICkge1xuXG5cdC8vIEFueSByZWxhdGl2ZSAoKy8tKSB2YWx1ZXMgaGF2ZSBhbHJlYWR5IGJlZW5cblx0Ly8gbm9ybWFsaXplZCBhdCB0aGlzIHBvaW50XG5cdHZhciBtYXRjaGVzID0gcmNzc051bS5leGVjKCB2YWx1ZSApO1xuXHRyZXR1cm4gbWF0Y2hlcyA/XG5cblx0XHQvLyBHdWFyZCBhZ2FpbnN0IHVuZGVmaW5lZCBcInN1YnRyYWN0XCIsIGUuZy4sIHdoZW4gdXNlZCBhcyBpbiBjc3NIb29rc1xuXHRcdE1hdGgubWF4KCAwLCBtYXRjaGVzWyAyIF0gLSAoIHN1YnRyYWN0IHx8IDAgKSApICsgKCBtYXRjaGVzWyAzIF0gfHwgXCJweFwiICkgOlxuXHRcdHZhbHVlO1xufVxuXG5mdW5jdGlvbiBhdWdtZW50V2lkdGhPckhlaWdodCggZWxlbSwgbmFtZSwgZXh0cmEsIGlzQm9yZGVyQm94LCBzdHlsZXMgKSB7XG5cdHZhciBpLFxuXHRcdHZhbCA9IDA7XG5cblx0Ly8gSWYgd2UgYWxyZWFkeSBoYXZlIHRoZSByaWdodCBtZWFzdXJlbWVudCwgYXZvaWQgYXVnbWVudGF0aW9uXG5cdGlmICggZXh0cmEgPT09ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSApIHtcblx0XHRpID0gNDtcblxuXHQvLyBPdGhlcndpc2UgaW5pdGlhbGl6ZSBmb3IgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBwcm9wZXJ0aWVzXG5cdH0gZWxzZSB7XG5cdFx0aSA9IG5hbWUgPT09IFwid2lkdGhcIiA/IDEgOiAwO1xuXHR9XG5cblx0Zm9yICggOyBpIDwgNDsgaSArPSAyICkge1xuXG5cdFx0Ly8gQm90aCBib3ggbW9kZWxzIGV4Y2x1ZGUgbWFyZ2luLCBzbyBhZGQgaXQgaWYgd2Ugd2FudCBpdFxuXHRcdGlmICggZXh0cmEgPT09IFwibWFyZ2luXCIgKSB7XG5cdFx0XHR2YWwgKz0galF1ZXJ5LmNzcyggZWxlbSwgZXh0cmEgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc0JvcmRlckJveCApIHtcblxuXHRcdFx0Ly8gYm9yZGVyLWJveCBpbmNsdWRlcyBwYWRkaW5nLCBzbyByZW1vdmUgaXQgaWYgd2Ugd2FudCBjb250ZW50XG5cdFx0XHRpZiAoIGV4dHJhID09PSBcImNvbnRlbnRcIiApIHtcblx0XHRcdFx0dmFsIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBdCB0aGlzIHBvaW50LCBleHRyYSBpc24ndCBib3JkZXIgbm9yIG1hcmdpbiwgc28gcmVtb3ZlIGJvcmRlclxuXHRcdFx0aWYgKCBleHRyYSAhPT0gXCJtYXJnaW5cIiApIHtcblx0XHRcdFx0dmFsIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQXQgdGhpcyBwb2ludCwgZXh0cmEgaXNuJ3QgY29udGVudCwgc28gYWRkIHBhZGRpbmdcblx0XHRcdHZhbCArPSBqUXVlcnkuY3NzKCBlbGVtLCBcInBhZGRpbmdcIiArIGNzc0V4cGFuZFsgaSBdLCB0cnVlLCBzdHlsZXMgKTtcblxuXHRcdFx0Ly8gQXQgdGhpcyBwb2ludCwgZXh0cmEgaXNuJ3QgY29udGVudCBub3IgcGFkZGluZywgc28gYWRkIGJvcmRlclxuXHRcdFx0aWYgKCBleHRyYSAhPT0gXCJwYWRkaW5nXCIgKSB7XG5cdFx0XHRcdHZhbCArPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kWyBpIF0gKyBcIldpZHRoXCIsIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhICkge1xuXG5cdC8vIFN0YXJ0IHdpdGggb2Zmc2V0IHByb3BlcnR5LCB3aGljaCBpcyBlcXVpdmFsZW50IHRvIHRoZSBib3JkZXItYm94IHZhbHVlXG5cdHZhciB2YWwsXG5cdFx0dmFsdWVJc0JvcmRlckJveCA9IHRydWUsXG5cdFx0c3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICksXG5cdFx0aXNCb3JkZXJCb3ggPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlXG5cdC8vIGluIElFIHRocm93cyBhbiBlcnJvci5cblx0aWYgKCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICkge1xuXHRcdHZhbCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbIG5hbWUgXTtcblx0fVxuXG5cdC8vIFNvbWUgbm9uLWh0bWwgZWxlbWVudHMgcmV0dXJuIHVuZGVmaW5lZCBmb3Igb2Zmc2V0V2lkdGgsIHNvIGNoZWNrIGZvciBudWxsL3VuZGVmaW5lZFxuXHQvLyBzdmcgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02NDkyODVcblx0Ly8gTWF0aE1MIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDkxNjY4XG5cdGlmICggdmFsIDw9IDAgfHwgdmFsID09IG51bGwgKSB7XG5cblx0XHQvLyBGYWxsIGJhY2sgdG8gY29tcHV0ZWQgdGhlbiB1bmNvbXB1dGVkIGNzcyBpZiBuZWNlc3Nhcnlcblx0XHR2YWwgPSBjdXJDU1MoIGVsZW0sIG5hbWUsIHN0eWxlcyApO1xuXHRcdGlmICggdmFsIDwgMCB8fCB2YWwgPT0gbnVsbCApIHtcblx0XHRcdHZhbCA9IGVsZW0uc3R5bGVbIG5hbWUgXTtcblx0XHR9XG5cblx0XHQvLyBDb21wdXRlZCB1bml0IGlzIG5vdCBwaXhlbHMuIFN0b3AgaGVyZSBhbmQgcmV0dXJuLlxuXHRcdGlmICggcm51bW5vbnB4LnRlc3QoIHZhbCApICkge1xuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cblx0XHQvLyBDaGVjayBmb3Igc3R5bGUgaW4gY2FzZSBhIGJyb3dzZXIgd2hpY2ggcmV0dXJucyB1bnJlbGlhYmxlIHZhbHVlc1xuXHRcdC8vIGZvciBnZXRDb21wdXRlZFN0eWxlIHNpbGVudGx5IGZhbGxzIGJhY2sgdG8gdGhlIHJlbGlhYmxlIGVsZW0uc3R5bGVcblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3ggJiZcblx0XHRcdCggc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpIHx8IHZhbCA9PT0gZWxlbS5zdHlsZVsgbmFtZSBdICk7XG5cblx0XHQvLyBOb3JtYWxpemUgXCJcIiwgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXG5cdFx0dmFsID0gcGFyc2VGbG9hdCggdmFsICkgfHwgMDtcblx0fVxuXG5cdC8vIFVzZSB0aGUgYWN0aXZlIGJveC1zaXppbmcgbW9kZWwgdG8gYWRkL3N1YnRyYWN0IGlycmVsZXZhbnQgc3R5bGVzXG5cdHJldHVybiAoIHZhbCArXG5cdFx0YXVnbWVudFdpZHRoT3JIZWlnaHQoXG5cdFx0XHRlbGVtLFxuXHRcdFx0bmFtZSxcblx0XHRcdGV4dHJhIHx8ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSxcblx0XHRcdHZhbHVlSXNCb3JkZXJCb3gsXG5cdFx0XHRzdHlsZXNcblx0XHQpXG5cdCkgKyBcInB4XCI7XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBBZGQgaW4gc3R5bGUgcHJvcGVydHkgaG9va3MgZm9yIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHRcblx0Ly8gYmVoYXZpb3Igb2YgZ2V0dGluZyBhbmQgc2V0dGluZyBhIHN0eWxlIHByb3BlcnR5XG5cdGNzc0hvb2tzOiB7XG5cdFx0b3BhY2l0eToge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRcdFx0XHQvLyBXZSBzaG91bGQgYWx3YXlzIGdldCBhIG51bWJlciBiYWNrIGZyb20gb3BhY2l0eVxuXHRcdFx0XHRcdHZhciByZXQgPSBjdXJDU1MoIGVsZW0sIFwib3BhY2l0eVwiICk7XG5cdFx0XHRcdFx0cmV0dXJuIHJldCA9PT0gXCJcIiA/IFwiMVwiIDogcmV0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIERvbid0IGF1dG9tYXRpY2FsbHkgYWRkIFwicHhcIiB0byB0aGVzZSBwb3NzaWJseS11bml0bGVzcyBwcm9wZXJ0aWVzXG5cdGNzc051bWJlcjoge1xuXHRcdFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogdHJ1ZSxcblx0XHRcImNvbHVtbkNvdW50XCI6IHRydWUsXG5cdFx0XCJmaWxsT3BhY2l0eVwiOiB0cnVlLFxuXHRcdFwiZmxleEdyb3dcIjogdHJ1ZSxcblx0XHRcImZsZXhTaHJpbmtcIjogdHJ1ZSxcblx0XHRcImZvbnRXZWlnaHRcIjogdHJ1ZSxcblx0XHRcImxpbmVIZWlnaHRcIjogdHJ1ZSxcblx0XHRcIm9wYWNpdHlcIjogdHJ1ZSxcblx0XHRcIm9yZGVyXCI6IHRydWUsXG5cdFx0XCJvcnBoYW5zXCI6IHRydWUsXG5cdFx0XCJ3aWRvd3NcIjogdHJ1ZSxcblx0XHRcInpJbmRleFwiOiB0cnVlLFxuXHRcdFwiem9vbVwiOiB0cnVlXG5cdH0sXG5cblx0Ly8gQWRkIGluIHByb3BlcnRpZXMgd2hvc2UgbmFtZXMgeW91IHdpc2ggdG8gZml4IGJlZm9yZVxuXHQvLyBzZXR0aW5nIG9yIGdldHRpbmcgdGhlIHZhbHVlXG5cdGNzc1Byb3BzOiB7XG5cdFx0XCJmbG9hdFwiOiBcImNzc0Zsb2F0XCJcblx0fSxcblxuXHQvLyBHZXQgYW5kIHNldCB0aGUgc3R5bGUgcHJvcGVydHkgb24gYSBET00gTm9kZVxuXHRzdHlsZTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlLCBleHRyYSApIHtcblxuXHRcdC8vIERvbid0IHNldCBzdHlsZXMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXHRcdGlmICggIWVsZW0gfHwgZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4IHx8ICFlbGVtLnN0eWxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZVxuXHRcdHZhciByZXQsIHR5cGUsIGhvb2tzLFxuXHRcdFx0b3JpZ05hbWUgPSBqUXVlcnkuY2FtZWxDYXNlKCBuYW1lICksXG5cdFx0XHRzdHlsZSA9IGVsZW0uc3R5bGU7XG5cblx0XHRuYW1lID0galF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdIHx8XG5cdFx0XHQoIGpRdWVyeS5jc3NQcm9wc1sgb3JpZ05hbWUgXSA9IHZlbmRvclByb3BOYW1lKCBvcmlnTmFtZSApIHx8IG9yaWdOYW1lICk7XG5cblx0XHQvLyBHZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLCB0aGVuIHVucHJlZml4ZWQgdmVyc2lvblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuXHRcdFx0Ly8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKCM3MzQ1KVxuXHRcdFx0aWYgKCB0eXBlID09PSBcInN0cmluZ1wiICYmICggcmV0ID0gcmNzc051bS5leGVjKCB2YWx1ZSApICkgJiYgcmV0WyAxIF0gKSB7XG5cdFx0XHRcdHZhbHVlID0gYWRqdXN0Q1NTKCBlbGVtLCBuYW1lLCByZXQgKTtcblxuXHRcdFx0XHQvLyBGaXhlcyBidWcgIzkyMzdcblx0XHRcdFx0dHlwZSA9IFwibnVtYmVyXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IG51bGwgYW5kIE5hTiB2YWx1ZXMgYXJlbid0IHNldCAoIzcxMTYpXG5cdFx0XHRpZiAoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGEgbnVtYmVyIHdhcyBwYXNzZWQgaW4sIGFkZCB0aGUgdW5pdCAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxuXHRcdFx0aWYgKCB0eXBlID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHR2YWx1ZSArPSByZXQgJiYgcmV0WyAzIF0gfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBvcmlnTmFtZSBdID8gXCJcIiA6IFwicHhcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBiYWNrZ3JvdW5kLSogcHJvcHMgYWZmZWN0IG9yaWdpbmFsIGNsb25lJ3MgdmFsdWVzXG5cdFx0XHRpZiAoICFzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSAmJiB2YWx1ZSA9PT0gXCJcIiAmJiBuYW1lLmluZGV4T2YoIFwiYmFja2dyb3VuZFwiICkgPT09IDAgKSB7XG5cdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSBcImluaGVyaXRcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCwgdXNlIHRoYXQgdmFsdWUsIG90aGVyd2lzZSBqdXN0IHNldCB0aGUgc3BlY2lmaWVkIHZhbHVlXG5cdFx0XHRpZiAoICFob29rcyB8fCAhKCBcInNldFwiIGluIGhvb2tzICkgfHxcblx0XHRcdFx0KCB2YWx1ZSA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIGV4dHJhICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBub24tY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXHRcdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBmYWxzZSwgZXh0cmEgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIGp1c3QgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBvYmplY3Rcblx0XHRcdHJldHVybiBzdHlsZVsgbmFtZSBdO1xuXHRcdH1cblx0fSxcblxuXHRjc3M6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBleHRyYSwgc3R5bGVzICkge1xuXHRcdHZhciB2YWwsIG51bSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIG5hbWUgKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZVxuXHRcdG5hbWUgPSBqUXVlcnkuY3NzUHJvcHNbIG9yaWdOYW1lIF0gfHxcblx0XHRcdCggalF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIG9yaWdOYW1lICkgfHwgb3JpZ05hbWUgKTtcblxuXHRcdC8vIFRyeSBwcmVmaXhlZCBuYW1lIGZvbGxvd2VkIGJ5IHRoZSB1bnByZWZpeGVkIG5hbWVcblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcblxuXHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsID0gaG9va3MuZ2V0KCBlbGVtLCB0cnVlLCBleHRyYSApO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSwgaWYgYSB3YXkgdG8gZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBleGlzdHMsIHVzZSB0aGF0XG5cdFx0aWYgKCB2YWwgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgbmFtZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0Ly8gQ29udmVydCBcIm5vcm1hbFwiIHRvIGNvbXB1dGVkIHZhbHVlXG5cdFx0aWYgKCB2YWwgPT09IFwibm9ybWFsXCIgJiYgbmFtZSBpbiBjc3NOb3JtYWxUcmFuc2Zvcm0gKSB7XG5cdFx0XHR2YWwgPSBjc3NOb3JtYWxUcmFuc2Zvcm1bIG5hbWUgXTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIG51bWVyaWMgaWYgZm9yY2VkIG9yIGEgcXVhbGlmaWVyIHdhcyBwcm92aWRlZCBhbmQgdmFsIGxvb2tzIG51bWVyaWNcblx0XHRpZiAoIGV4dHJhID09PSBcIlwiIHx8IGV4dHJhICkge1xuXHRcdFx0bnVtID0gcGFyc2VGbG9hdCggdmFsICk7XG5cdFx0XHRyZXR1cm4gZXh0cmEgPT09IHRydWUgfHwgaXNGaW5pdGUoIG51bSApID8gbnVtIHx8IDAgOiB2YWw7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJoZWlnaHRcIiwgXCJ3aWR0aFwiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIG5hbWUgXSA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCwgZXh0cmEgKSB7XG5cdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXG5cdFx0XHRcdC8vIENlcnRhaW4gZWxlbWVudHMgY2FuIGhhdmUgZGltZW5zaW9uIGluZm8gaWYgd2UgaW52aXNpYmx5IHNob3cgdGhlbVxuXHRcdFx0XHQvLyBidXQgaXQgbXVzdCBoYXZlIGEgY3VycmVudCBkaXNwbGF5IHN0eWxlIHRoYXQgd291bGQgYmVuZWZpdFxuXHRcdFx0XHRyZXR1cm4gcmRpc3BsYXlzd2FwLnRlc3QoIGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgKSAmJlxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDgrXG5cdFx0XHRcdFx0Ly8gVGFibGUgY29sdW1ucyBpbiBTYWZhcmkgaGF2ZSBub24temVybyBvZmZzZXRXaWR0aCAmIHplcm9cblx0XHRcdFx0XHQvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB1bmxlc3MgZGlzcGxheSBpcyBjaGFuZ2VkLlxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHRcdFx0XHRcdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGEgZGlzY29ubmVjdGVkIG5vZGVcblx0XHRcdFx0XHQvLyBpbiBJRSB0aHJvd3MgYW4gZXJyb3IuXG5cdFx0XHRcdFx0KCAhZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCB8fCAhZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCApID9cblx0XHRcdFx0XHRcdHN3YXAoIGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgbmFtZSwgZXh0cmEgKTtcblx0XHRcdFx0XHRcdH0gKSA6XG5cdFx0XHRcdFx0XHRnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSB7XG5cdFx0XHR2YXIgbWF0Y2hlcyxcblx0XHRcdFx0c3R5bGVzID0gZXh0cmEgJiYgZ2V0U3R5bGVzKCBlbGVtICksXG5cdFx0XHRcdHN1YnRyYWN0ID0gZXh0cmEgJiYgYXVnbWVudFdpZHRoT3JIZWlnaHQoXG5cdFx0XHRcdFx0ZWxlbSxcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdGV4dHJhLFxuXHRcdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCIsXG5cdFx0XHRcdFx0c3R5bGVzXG5cdFx0XHRcdCk7XG5cblx0XHRcdC8vIENvbnZlcnQgdG8gcGl4ZWxzIGlmIHZhbHVlIGFkanVzdG1lbnQgaXMgbmVlZGVkXG5cdFx0XHRpZiAoIHN1YnRyYWN0ICYmICggbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmXG5cdFx0XHRcdCggbWF0Y2hlc1sgMyBdIHx8IFwicHhcIiApICE9PSBcInB4XCIgKSB7XG5cblx0XHRcdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRcdHZhbHVlID0galF1ZXJ5LmNzcyggZWxlbSwgbmFtZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0UG9zaXRpdmVOdW1iZXIoIGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCApO1xuXHRcdH1cblx0fTtcbn0gKTtcblxualF1ZXJ5LmNzc0hvb2tzLm1hcmdpbkxlZnQgPSBhZGRHZXRIb29rSWYoIHN1cHBvcnQucmVsaWFibGVNYXJnaW5MZWZ0LFxuXHRmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdHJldHVybiAoIHBhcnNlRmxvYXQoIGN1ckNTUyggZWxlbSwgXCJtYXJnaW5MZWZ0XCIgKSApIHx8XG5cdFx0XHRcdGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtXG5cdFx0XHRcdFx0c3dhcCggZWxlbSwgeyBtYXJnaW5MZWZ0OiAwIH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0KSArIFwicHhcIjtcblx0XHR9XG5cdH1cbik7XG5cbi8vIFRoZXNlIGhvb2tzIGFyZSB1c2VkIGJ5IGFuaW1hdGUgdG8gZXhwYW5kIHByb3BlcnRpZXNcbmpRdWVyeS5lYWNoKCB7XG5cdG1hcmdpbjogXCJcIixcblx0cGFkZGluZzogXCJcIixcblx0Ym9yZGVyOiBcIldpZHRoXCJcbn0sIGZ1bmN0aW9uKCBwcmVmaXgsIHN1ZmZpeCApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXSA9IHtcblx0XHRleHBhbmQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBpID0gMCxcblx0XHRcdFx0ZXhwYW5kZWQgPSB7fSxcblxuXHRcdFx0XHQvLyBBc3N1bWVzIGEgc2luZ2xlIG51bWJlciBpZiBub3QgYSBzdHJpbmdcblx0XHRcdFx0cGFydHMgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZS5zcGxpdCggXCIgXCIgKSA6IFsgdmFsdWUgXTtcblxuXHRcdFx0Zm9yICggOyBpIDwgNDsgaSsrICkge1xuXHRcdFx0XHRleHBhbmRlZFsgcHJlZml4ICsgY3NzRXhwYW5kWyBpIF0gKyBzdWZmaXggXSA9XG5cdFx0XHRcdFx0cGFydHNbIGkgXSB8fCBwYXJ0c1sgaSAtIDIgXSB8fCBwYXJ0c1sgMCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZXhwYW5kZWQ7XG5cdFx0fVxuXHR9O1xuXG5cdGlmICggIXJtYXJnaW4udGVzdCggcHJlZml4ICkgKSB7XG5cdFx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXS5zZXQgPSBzZXRQb3NpdGl2ZU51bWJlcjtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGNzczogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdHZhciBzdHlsZXMsIGxlbixcblx0XHRcdFx0bWFwID0ge30sXG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCBuYW1lICkgKSB7XG5cdFx0XHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApO1xuXHRcdFx0XHRsZW4gPSBuYW1lLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRtYXBbIG5hbWVbIGkgXSBdID0galF1ZXJ5LmNzcyggZWxlbSwgbmFtZVsgaSBdLCBmYWxzZSwgc3R5bGVzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSwgdmFsdWUgKSA6XG5cdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIG5hbWUgKTtcblx0XHR9LCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fVxufSApO1xuXG5cbmZ1bmN0aW9uIFR3ZWVuKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApIHtcblx0cmV0dXJuIG5ldyBUd2Vlbi5wcm90b3R5cGUuaW5pdCggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcgKTtcbn1cbmpRdWVyeS5Ud2VlbiA9IFR3ZWVuO1xuXG5Ud2Vlbi5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBUd2Vlbixcblx0aW5pdDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nLCB1bml0ICkge1xuXHRcdHRoaXMuZWxlbSA9IGVsZW07XG5cdFx0dGhpcy5wcm9wID0gcHJvcDtcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0O1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5zdGFydCA9IHRoaXMubm93ID0gdGhpcy5jdXIoKTtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnVuaXQgPSB1bml0IHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApO1xuXHR9LFxuXHRjdXI6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRyZXR1cm4gaG9va3MgJiYgaG9va3MuZ2V0ID9cblx0XHRcdGhvb2tzLmdldCggdGhpcyApIDpcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5nZXQoIHRoaXMgKTtcblx0fSxcblx0cnVuOiBmdW5jdGlvbiggcGVyY2VudCApIHtcblx0XHR2YXIgZWFzZWQsXG5cdFx0XHRob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kdXJhdGlvbiApIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBqUXVlcnkuZWFzaW5nWyB0aGlzLmVhc2luZyBdKFxuXHRcdFx0XHRwZXJjZW50LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKiBwZXJjZW50LCAwLCAxLCB0aGlzLm9wdGlvbnMuZHVyYXRpb25cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xuXHRcdH1cblx0XHR0aGlzLm5vdyA9ICggdGhpcy5lbmQgLSB0aGlzLnN0YXJ0ICkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5zdGVwICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnN0ZXAuY2FsbCggdGhpcy5lbGVtLCB0aGlzLm5vdywgdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgaG9va3Muc2V0ICkge1xuXHRcdFx0aG9va3Muc2V0KCB0aGlzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQoIHRoaXMgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5cblR3ZWVuLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZSA9IFR3ZWVuLnByb3RvdHlwZTtcblxuVHdlZW4ucHJvcEhvb2tzID0ge1xuXHRfZGVmYXVsdDoge1xuXHRcdGdldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblxuXHRcdFx0Ly8gVXNlIGEgcHJvcGVydHkgb24gdGhlIGVsZW1lbnQgZGlyZWN0bHkgd2hlbiBpdCBpcyBub3QgYSBET00gZWxlbWVudCxcblx0XHRcdC8vIG9yIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc3R5bGUgcHJvcGVydHkgdGhhdCBleGlzdHMuXG5cdFx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgIT09IDEgfHxcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdICE9IG51bGwgJiYgdHdlZW4uZWxlbS5zdHlsZVsgdHdlZW4ucHJvcCBdID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIGFzIGEgM3JkIHBhcmFtZXRlciB0byAuY3NzIHdpbGwgYXV0b21hdGljYWxseVxuXHRcdFx0Ly8gYXR0ZW1wdCBhIHBhcnNlRmxvYXQgYW5kIGZhbGxiYWNrIHRvIGEgc3RyaW5nIGlmIHRoZSBwYXJzZSBmYWlscy5cblx0XHRcdC8vIFNpbXBsZSB2YWx1ZXMgc3VjaCBhcyBcIjEwcHhcIiBhcmUgcGFyc2VkIHRvIEZsb2F0O1xuXHRcdFx0Ly8gY29tcGxleCB2YWx1ZXMgc3VjaCBhcyBcInJvdGF0ZSgxcmFkKVwiIGFyZSByZXR1cm5lZCBhcy1pcy5cblx0XHRcdHJlc3VsdCA9IGpRdWVyeS5jc3MoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIFwiXCIgKTtcblxuXHRcdFx0Ly8gRW1wdHkgc3RyaW5ncywgbnVsbCwgdW5kZWZpbmVkIGFuZCBcImF1dG9cIiBhcmUgY29udmVydGVkIHRvIDAuXG5cdFx0XHRyZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXG5cdFx0XHQvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cblx0XHRcdC8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cblx0XHRcdC8vIFVzZSAuc3R5bGUgaWYgYXZhaWxhYmxlIGFuZCB1c2UgcGxhaW4gcHJvcGVydGllcyB3aGVyZSBhdmFpbGFibGUuXG5cdFx0XHRpZiAoIGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0oIHR3ZWVuICk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdCggdHdlZW4uZWxlbS5zdHlsZVsgalF1ZXJ5LmNzc1Byb3BzWyB0d2Vlbi5wcm9wIF0gXSAhPSBudWxsIHx8XG5cdFx0XHRcdFx0alF1ZXJ5LmNzc0hvb2tzWyB0d2Vlbi5wcm9wIF0gKSApIHtcblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCB0d2Vlbi5ub3cgKyB0d2Vlbi51bml0ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuLy8gUGFuaWMgYmFzZWQgYXBwcm9hY2ggdG8gc2V0dGluZyB0aGluZ3Mgb24gZGlzY29ubmVjdGVkIG5vZGVzXG5Ud2Vlbi5wcm9wSG9va3Muc2Nyb2xsVG9wID0gVHdlZW4ucHJvcEhvb2tzLnNjcm9sbExlZnQgPSB7XG5cdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAmJiB0d2Vlbi5lbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZWFzaW5nID0ge1xuXHRsaW5lYXI6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiBwO1xuXHR9LFxuXHRzd2luZzogZnVuY3Rpb24oIHAgKSB7XG5cdFx0cmV0dXJuIDAuNSAtIE1hdGguY29zKCBwICogTWF0aC5QSSApIC8gMjtcblx0fSxcblx0X2RlZmF1bHQ6IFwic3dpbmdcIlxufTtcblxualF1ZXJ5LmZ4ID0gVHdlZW4ucHJvdG90eXBlLmluaXQ7XG5cbi8vIEJhY2sgY29tcGF0IDwxLjggZXh0ZW5zaW9uIHBvaW50XG5qUXVlcnkuZnguc3RlcCA9IHt9O1xuXG5cblxuXG52YXJcblx0ZnhOb3csIHRpbWVySWQsXG5cdHJmeHR5cGVzID0gL14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFxuXHRycnVuID0gL3F1ZXVlSG9va3MkLztcblxuZnVuY3Rpb24gcmFmKCkge1xuXHRpZiAoIHRpbWVySWQgKSB7XG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggcmFmICk7XG5cdFx0alF1ZXJ5LmZ4LnRpY2soKTtcblx0fVxufVxuXG4vLyBBbmltYXRpb25zIGNyZWF0ZWQgc3luY2hyb25vdXNseSB3aWxsIHJ1biBzeW5jaHJvbm91c2x5XG5mdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcblx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdGZ4Tm93ID0gdW5kZWZpbmVkO1xuXHR9ICk7XG5cdHJldHVybiAoIGZ4Tm93ID0galF1ZXJ5Lm5vdygpICk7XG59XG5cbi8vIEdlbmVyYXRlIHBhcmFtZXRlcnMgdG8gY3JlYXRlIGEgc3RhbmRhcmQgYW5pbWF0aW9uXG5mdW5jdGlvbiBnZW5GeCggdHlwZSwgaW5jbHVkZVdpZHRoICkge1xuXHR2YXIgd2hpY2gsXG5cdFx0aSA9IDAsXG5cdFx0YXR0cnMgPSB7IGhlaWdodDogdHlwZSB9O1xuXG5cdC8vIElmIHdlIGluY2x1ZGUgd2lkdGgsIHN0ZXAgdmFsdWUgaXMgMSB0byBkbyBhbGwgY3NzRXhwYW5kIHZhbHVlcyxcblx0Ly8gb3RoZXJ3aXNlIHN0ZXAgdmFsdWUgaXMgMiB0byBza2lwIG92ZXIgTGVmdCBhbmQgUmlnaHRcblx0aW5jbHVkZVdpZHRoID0gaW5jbHVkZVdpZHRoID8gMSA6IDA7XG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiAtIGluY2x1ZGVXaWR0aCApIHtcblx0XHR3aGljaCA9IGNzc0V4cGFuZFsgaSBdO1xuXHRcdGF0dHJzWyBcIm1hcmdpblwiICsgd2hpY2ggXSA9IGF0dHJzWyBcInBhZGRpbmdcIiArIHdoaWNoIF0gPSB0eXBlO1xuXHR9XG5cblx0aWYgKCBpbmNsdWRlV2lkdGggKSB7XG5cdFx0YXR0cnMub3BhY2l0eSA9IGF0dHJzLndpZHRoID0gdHlwZTtcblx0fVxuXG5cdHJldHVybiBhdHRycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHdlZW4oIHZhbHVlLCBwcm9wLCBhbmltYXRpb24gKSB7XG5cdHZhciB0d2Vlbixcblx0XHRjb2xsZWN0aW9uID0gKCBBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSB8fCBbXSApLmNvbmNhdCggQW5pbWF0aW9uLnR3ZWVuZXJzWyBcIipcIiBdICksXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGlmICggKCB0d2VlbiA9IGNvbGxlY3Rpb25bIGluZGV4IF0uY2FsbCggYW5pbWF0aW9uLCBwcm9wLCB2YWx1ZSApICkgKSB7XG5cblx0XHRcdC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHByb3BlcnR5XG5cdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcmVmaWx0ZXIoIGVsZW0sIHByb3BzLCBvcHRzICkge1xuXHR2YXIgcHJvcCwgdmFsdWUsIHRvZ2dsZSwgaG9va3MsIG9sZGZpcmUsIHByb3BUd2VlbiwgcmVzdG9yZURpc3BsYXksIGRpc3BsYXksXG5cdFx0aXNCb3ggPSBcIndpZHRoXCIgaW4gcHJvcHMgfHwgXCJoZWlnaHRcIiBpbiBwcm9wcyxcblx0XHRhbmltID0gdGhpcyxcblx0XHRvcmlnID0ge30sXG5cdFx0c3R5bGUgPSBlbGVtLnN0eWxlLFxuXHRcdGhpZGRlbiA9IGVsZW0ubm9kZVR5cGUgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtICksXG5cdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZnhzaG93XCIgKTtcblxuXHQvLyBRdWV1ZS1za2lwcGluZyBhbmltYXRpb25zIGhpamFjayB0aGUgZnggaG9va3Ncblx0aWYgKCAhb3B0cy5xdWV1ZSApIHtcblx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgXCJmeFwiICk7XG5cdFx0aWYgKCBob29rcy51bnF1ZXVlZCA9PSBudWxsICkge1xuXHRcdFx0aG9va3MudW5xdWV1ZWQgPSAwO1xuXHRcdFx0b2xkZmlyZSA9IGhvb2tzLmVtcHR5LmZpcmU7XG5cdFx0XHRob29rcy5lbXB0eS5maXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggIWhvb2tzLnVucXVldWVkICkge1xuXHRcdFx0XHRcdG9sZGZpcmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aG9va3MudW5xdWV1ZWQrKztcblxuXHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRW5zdXJlIHRoZSBjb21wbGV0ZSBoYW5kbGVyIGlzIGNhbGxlZCBiZWZvcmUgdGhpcyBjb21wbGV0ZXNcblx0XHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aG9va3MudW5xdWV1ZWQtLTtcblx0XHRcdFx0aWYgKCAhalF1ZXJ5LnF1ZXVlKCBlbGVtLCBcImZ4XCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gRGV0ZWN0IHNob3cvaGlkZSBhbmltYXRpb25zXG5cdGZvciAoIHByb3AgaW4gcHJvcHMgKSB7XG5cdFx0dmFsdWUgPSBwcm9wc1sgcHJvcCBdO1xuXHRcdGlmICggcmZ4dHlwZXMudGVzdCggdmFsdWUgKSApIHtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgcHJvcCBdO1xuXHRcdFx0dG9nZ2xlID0gdG9nZ2xlIHx8IHZhbHVlID09PSBcInRvZ2dsZVwiO1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gKCBoaWRkZW4gPyBcImhpZGVcIiA6IFwic2hvd1wiICkgKSB7XG5cblx0XHRcdFx0Ly8gUHJldGVuZCB0byBiZSBoaWRkZW4gaWYgdGhpcyBpcyBhIFwic2hvd1wiIGFuZFxuXHRcdFx0XHQvLyB0aGVyZSBpcyBzdGlsbCBkYXRhIGZyb20gYSBzdG9wcGVkIHNob3cvaGlkZVxuXHRcdFx0XHRpZiAoIHZhbHVlID09PSBcInNob3dcIiAmJiBkYXRhU2hvdyAmJiBkYXRhU2hvd1sgcHJvcCBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0aGlkZGVuID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBJZ25vcmUgYWxsIG90aGVyIG5vLW9wIHNob3cvaGlkZSBkYXRhXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG9yaWdbIHByb3AgXSA9IGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gfHwgalF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQmFpbCBvdXQgaWYgdGhpcyBpcyBhIG5vLW9wIGxpa2UgLmhpZGUoKS5oaWRlKClcblx0cHJvcFR3ZWVuID0gIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBwcm9wcyApO1xuXHRpZiAoICFwcm9wVHdlZW4gJiYgalF1ZXJ5LmlzRW1wdHlPYmplY3QoIG9yaWcgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBSZXN0cmljdCBcIm92ZXJmbG93XCIgYW5kIFwiZGlzcGxheVwiIHN0eWxlcyBkdXJpbmcgYm94IGFuaW1hdGlvbnNcblx0aWYgKCBpc0JveCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEsIEVkZ2UgMTIgLSAxM1xuXHRcdC8vIFJlY29yZCBhbGwgMyBvdmVyZmxvdyBhdHRyaWJ1dGVzIGJlY2F1c2UgSUUgZG9lcyBub3QgaW5mZXIgdGhlIHNob3J0aGFuZFxuXHRcdC8vIGZyb20gaWRlbnRpY2FsbHktdmFsdWVkIG92ZXJmbG93WCBhbmQgb3ZlcmZsb3dZXG5cdFx0b3B0cy5vdmVyZmxvdyA9IFsgc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZIF07XG5cblx0XHQvLyBJZGVudGlmeSBhIGRpc3BsYXkgdHlwZSwgcHJlZmVycmluZyBvbGQgc2hvdy9oaWRlIGRhdGEgb3ZlciB0aGUgQ1NTIGNhc2NhZGVcblx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFTaG93ICYmIGRhdGFTaG93LmRpc3BsYXk7XG5cdFx0aWYgKCByZXN0b3JlRGlzcGxheSA9PSBudWxsICkge1xuXHRcdFx0cmVzdG9yZURpc3BsYXkgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0fVxuXHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ICkge1xuXHRcdFx0XHRkaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEdldCBub25lbXB0eSB2YWx1ZShzKSBieSB0ZW1wb3JhcmlseSBmb3JjaW5nIHZpc2liaWxpdHlcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdLCB0cnVlICk7XG5cdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5IHx8IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQW5pbWF0ZSBpbmxpbmUgZWxlbWVudHMgYXMgaW5saW5lLWJsb2NrXG5cdFx0aWYgKCBkaXNwbGF5ID09PSBcImlubGluZVwiIHx8IGRpc3BsYXkgPT09IFwiaW5saW5lLWJsb2NrXCIgJiYgcmVzdG9yZURpc3BsYXkgIT0gbnVsbCApIHtcblx0XHRcdGlmICggalF1ZXJ5LmNzcyggZWxlbSwgXCJmbG9hdFwiICkgPT09IFwibm9uZVwiICkge1xuXG5cdFx0XHRcdC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGRpc3BsYXkgdmFsdWUgYXQgdGhlIGVuZCBvZiBwdXJlIHNob3cvaGlkZSBhbmltYXRpb25zXG5cdFx0XHRcdGlmICggIXByb3BUd2VlbiApIHtcblx0XHRcdFx0XHRhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5ID0gc3R5bGUuZGlzcGxheTtcblx0XHRcdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZGlzcGxheSA9PT0gXCJub25lXCIgPyBcIlwiIDogZGlzcGxheTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBvcHRzLm92ZXJmbG93ICkge1xuXHRcdHN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cdFx0XHRzdHlsZS5vdmVyZmxvdyA9IG9wdHMub3ZlcmZsb3dbIDAgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WCA9IG9wdHMub3ZlcmZsb3dbIDEgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WSA9IG9wdHMub3ZlcmZsb3dbIDIgXTtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBJbXBsZW1lbnQgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0cHJvcFR3ZWVuID0gZmFsc2U7XG5cdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblxuXHRcdC8vIEdlbmVyYWwgc2hvdy9oaWRlIHNldHVwIGZvciB0aGlzIGVsZW1lbnQgYW5pbWF0aW9uXG5cdFx0aWYgKCAhcHJvcFR3ZWVuICkge1xuXHRcdFx0aWYgKCBkYXRhU2hvdyApIHtcblx0XHRcdFx0aWYgKCBcImhpZGRlblwiIGluIGRhdGFTaG93ICkge1xuXHRcdFx0XHRcdGhpZGRlbiA9IGRhdGFTaG93LmhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIFwiZnhzaG93XCIsIHsgZGlzcGxheTogcmVzdG9yZURpc3BsYXkgfSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdG9yZSBoaWRkZW4vdmlzaWJsZSBmb3IgdG9nZ2xlIHNvIGAuc3RvcCgpLnRvZ2dsZSgpYCBcInJldmVyc2VzXCJcblx0XHRcdGlmICggdG9nZ2xlICkge1xuXHRcdFx0XHRkYXRhU2hvdy5oaWRkZW4gPSAhaGlkZGVuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTaG93IGVsZW1lbnRzIGJlZm9yZSBhbmltYXRpbmcgdGhlbVxuXHRcdFx0aWYgKCBoaWRkZW4gKSB7XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSwgdHJ1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuXHRcdFx0YW5pbS5kb25lKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuXHRcdFx0XHQvLyBUaGUgZmluYWwgc3RlcCBvZiBhIFwiaGlkZVwiIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBoaWRpbmcgdGhlIGVsZW1lbnRcblx0XHRcdFx0aWYgKCAhaGlkZGVuICkge1xuXHRcdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgXCJmeHNob3dcIiApO1xuXHRcdFx0XHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBvcmlnWyBwcm9wIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdC8vIFBlci1wcm9wZXJ0eSBzZXR1cFxuXHRcdHByb3BUd2VlbiA9IGNyZWF0ZVR3ZWVuKCBoaWRkZW4gPyBkYXRhU2hvd1sgcHJvcCBdIDogMCwgcHJvcCwgYW5pbSApO1xuXHRcdGlmICggISggcHJvcCBpbiBkYXRhU2hvdyApICkge1xuXHRcdFx0ZGF0YVNob3dbIHByb3AgXSA9IHByb3BUd2Vlbi5zdGFydDtcblx0XHRcdGlmICggaGlkZGVuICkge1xuXHRcdFx0XHRwcm9wVHdlZW4uZW5kID0gcHJvcFR3ZWVuLnN0YXJ0O1xuXHRcdFx0XHRwcm9wVHdlZW4uc3RhcnQgPSAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBwcm9wRmlsdGVyKCBwcm9wcywgc3BlY2lhbEVhc2luZyApIHtcblx0dmFyIGluZGV4LCBuYW1lLCBlYXNpbmcsIHZhbHVlLCBob29rcztcblxuXHQvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3Ncblx0Zm9yICggaW5kZXggaW4gcHJvcHMgKSB7XG5cdFx0bmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIGluZGV4ICk7XG5cdFx0ZWFzaW5nID0gc3BlY2lhbEVhc2luZ1sgbmFtZSBdO1xuXHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF07XG5cdFx0aWYgKCBqUXVlcnkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdGVhc2luZyA9IHZhbHVlWyAxIF07XG5cdFx0XHR2YWx1ZSA9IHByb3BzWyBpbmRleCBdID0gdmFsdWVbIDAgXTtcblx0XHR9XG5cblx0XHRpZiAoIGluZGV4ICE9PSBuYW1lICkge1xuXHRcdFx0cHJvcHNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBpbmRleCBdO1xuXHRcdH1cblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF07XG5cdFx0aWYgKCBob29rcyAmJiBcImV4cGFuZFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsdWUgPSBob29rcy5leHBhbmQoIHZhbHVlICk7XG5cdFx0XHRkZWxldGUgcHJvcHNbIG5hbWUgXTtcblxuXHRcdFx0Ly8gTm90IHF1aXRlICQuZXh0ZW5kLCB0aGlzIHdvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBrZXlzLlxuXHRcdFx0Ly8gUmV1c2luZyAnaW5kZXgnIGJlY2F1c2Ugd2UgaGF2ZSB0aGUgY29ycmVjdCBcIm5hbWVcIlxuXHRcdFx0Zm9yICggaW5kZXggaW4gdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggISggaW5kZXggaW4gcHJvcHMgKSApIHtcblx0XHRcdFx0XHRwcm9wc1sgaW5kZXggXSA9IHZhbHVlWyBpbmRleCBdO1xuXHRcdFx0XHRcdHNwZWNpYWxFYXNpbmdbIGluZGV4IF0gPSBlYXNpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BlY2lhbEVhc2luZ1sgbmFtZSBdID0gZWFzaW5nO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBBbmltYXRpb24oIGVsZW0sIHByb3BlcnRpZXMsIG9wdGlvbnMgKSB7XG5cdHZhciByZXN1bHQsXG5cdFx0c3RvcHBlZCxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gQW5pbWF0aW9uLnByZWZpbHRlcnMubGVuZ3RoLFxuXHRcdGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCkuYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRG9uJ3QgbWF0Y2ggZWxlbSBpbiB0aGUgOmFuaW1hdGVkIHNlbGVjdG9yXG5cdFx0XHRkZWxldGUgdGljay5lbGVtO1xuXHRcdH0gKSxcblx0XHR0aWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIHN0b3BwZWQgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBjdXJyZW50VGltZSA9IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG5cdFx0XHRcdHJlbWFpbmluZyA9IE1hdGgubWF4KCAwLCBhbmltYXRpb24uc3RhcnRUaW1lICsgYW5pbWF0aW9uLmR1cmF0aW9uIC0gY3VycmVudFRpbWUgKSxcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDIuMyBvbmx5XG5cdFx0XHRcdC8vIEFyY2hhaWMgY3Jhc2ggYnVnIHdvbid0IGFsbG93IHVzIHRvIHVzZSBgMSAtICggMC41IHx8IDAgKWAgKCMxMjQ5Nylcblx0XHRcdFx0dGVtcCA9IHJlbWFpbmluZyAvIGFuaW1hdGlvbi5kdXJhdGlvbiB8fCAwLFxuXHRcdFx0XHRwZXJjZW50ID0gMSAtIHRlbXAsXG5cdFx0XHRcdGluZGV4ID0gMCxcblx0XHRcdFx0bGVuZ3RoID0gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGg7XG5cblx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCBwZXJjZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBwZXJjZW50LCByZW1haW5pbmcgXSApO1xuXG5cdFx0XHRpZiAoIHBlcmNlbnQgPCAxICYmIGxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIHJlbWFpbmluZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiBdICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2UoIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRwcm9wczogalF1ZXJ5LmV4dGVuZCgge30sIHByb3BlcnRpZXMgKSxcblx0XHRcdG9wdHM6IGpRdWVyeS5leHRlbmQoIHRydWUsIHtcblx0XHRcdFx0c3BlY2lhbEVhc2luZzoge30sXG5cdFx0XHRcdGVhc2luZzogalF1ZXJ5LmVhc2luZy5fZGVmYXVsdFxuXHRcdFx0fSwgb3B0aW9ucyApLFxuXHRcdFx0b3JpZ2luYWxQcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuXHRcdFx0b3JpZ2luYWxPcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lOiBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0ZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG5cdFx0XHR0d2VlbnM6IFtdLFxuXHRcdFx0Y3JlYXRlVHdlZW46IGZ1bmN0aW9uKCBwcm9wLCBlbmQgKSB7XG5cdFx0XHRcdHZhciB0d2VlbiA9IGpRdWVyeS5Ud2VlbiggZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCxcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmdbIHByb3AgXSB8fCBhbmltYXRpb24ub3B0cy5lYXNpbmcgKTtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVucy5wdXNoKCB0d2VlbiApO1xuXHRcdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0XHR9LFxuXHRcdFx0c3RvcDogZnVuY3Rpb24oIGdvdG9FbmQgKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IDAsXG5cblx0XHRcdFx0XHQvLyBJZiB3ZSBhcmUgZ29pbmcgdG8gdGhlIGVuZCwgd2Ugd2FudCB0byBydW4gYWxsIHRoZSB0d2VlbnNcblx0XHRcdFx0XHQvLyBvdGhlcndpc2Ugd2Ugc2tpcCB0aGlzIHBhcnRcblx0XHRcdFx0XHRsZW5ndGggPSBnb3RvRW5kID8gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGggOiAwO1xuXHRcdFx0XHRpZiAoIHN0b3BwZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RvcHBlZCA9IHRydWU7XG5cdFx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIDEgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlc29sdmUgd2hlbiB3ZSBwbGF5ZWQgdGhlIGxhc3QgZnJhbWU7IG90aGVyd2lzZSwgcmVqZWN0XG5cdFx0XHRcdGlmICggZ290b0VuZCApIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgMSwgMCBdICk7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBnb3RvRW5kIF0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fSApLFxuXHRcdHByb3BzID0gYW5pbWF0aW9uLnByb3BzO1xuXG5cdHByb3BGaWx0ZXIoIHByb3BzLCBhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nICk7XG5cblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRyZXN1bHQgPSBBbmltYXRpb24ucHJlZmlsdGVyc1sgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIGVsZW0sIHByb3BzLCBhbmltYXRpb24ub3B0cyApO1xuXHRcdGlmICggcmVzdWx0ICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggcmVzdWx0LnN0b3AgKSApIHtcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCBhbmltYXRpb24uZWxlbSwgYW5pbWF0aW9uLm9wdHMucXVldWUgKS5zdG9wID1cblx0XHRcdFx0XHRqUXVlcnkucHJveHkoIHJlc3VsdC5zdG9wLCByZXN1bHQgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9XG5cblx0alF1ZXJ5Lm1hcCggcHJvcHMsIGNyZWF0ZVR3ZWVuLCBhbmltYXRpb24gKTtcblxuXHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBhbmltYXRpb24ub3B0cy5zdGFydCApICkge1xuXHRcdGFuaW1hdGlvbi5vcHRzLnN0YXJ0LmNhbGwoIGVsZW0sIGFuaW1hdGlvbiApO1xuXHR9XG5cblx0alF1ZXJ5LmZ4LnRpbWVyKFxuXHRcdGpRdWVyeS5leHRlbmQoIHRpY2ssIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRhbmltOiBhbmltYXRpb24sXG5cdFx0XHRxdWV1ZTogYW5pbWF0aW9uLm9wdHMucXVldWVcblx0XHR9IClcblx0KTtcblxuXHQvLyBhdHRhY2ggY2FsbGJhY2tzIGZyb20gb3B0aW9uc1xuXHRyZXR1cm4gYW5pbWF0aW9uLnByb2dyZXNzKCBhbmltYXRpb24ub3B0cy5wcm9ncmVzcyApXG5cdFx0LmRvbmUoIGFuaW1hdGlvbi5vcHRzLmRvbmUsIGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlIClcblx0XHQuZmFpbCggYW5pbWF0aW9uLm9wdHMuZmFpbCApXG5cdFx0LmFsd2F5cyggYW5pbWF0aW9uLm9wdHMuYWx3YXlzICk7XG59XG5cbmpRdWVyeS5BbmltYXRpb24gPSBqUXVlcnkuZXh0ZW5kKCBBbmltYXRpb24sIHtcblxuXHR0d2VlbmVyczoge1xuXHRcdFwiKlwiOiBbIGZ1bmN0aW9uKCBwcm9wLCB2YWx1ZSApIHtcblx0XHRcdHZhciB0d2VlbiA9IHRoaXMuY3JlYXRlVHdlZW4oIHByb3AsIHZhbHVlICk7XG5cdFx0XHRhZGp1c3RDU1MoIHR3ZWVuLmVsZW0sIHByb3AsIHJjc3NOdW0uZXhlYyggdmFsdWUgKSwgdHdlZW4gKTtcblx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHR9IF1cblx0fSxcblxuXHR0d2VlbmVyOiBmdW5jdGlvbiggcHJvcHMsIGNhbGxiYWNrICkge1xuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHByb3BzICkgKSB7XG5cdFx0XHRjYWxsYmFjayA9IHByb3BzO1xuXHRcdFx0cHJvcHMgPSBbIFwiKlwiIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb3BzID0gcHJvcHMubWF0Y2goIHJub3RodG1sd2hpdGUgKTtcblx0XHR9XG5cblx0XHR2YXIgcHJvcCxcblx0XHRcdGluZGV4ID0gMCxcblx0XHRcdGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRwcm9wID0gcHJvcHNbIGluZGV4IF07XG5cdFx0XHRBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSA9IEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdIHx8IFtdO1xuXHRcdFx0QW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0udW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH0sXG5cblx0cHJlZmlsdGVyczogWyBkZWZhdWx0UHJlZmlsdGVyIF0sXG5cblx0cHJlZmlsdGVyOiBmdW5jdGlvbiggY2FsbGJhY2ssIHByZXBlbmQgKSB7XG5cdFx0aWYgKCBwcmVwZW5kICkge1xuXHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMudW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMucHVzaCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LnNwZWVkID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGZuICkge1xuXHR2YXIgb3B0ID0gc3BlZWQgJiYgdHlwZW9mIHNwZWVkID09PSBcIm9iamVjdFwiID8galF1ZXJ5LmV4dGVuZCgge30sIHNwZWVkICkgOiB7XG5cdFx0Y29tcGxldGU6IGZuIHx8ICFmbiAmJiBlYXNpbmcgfHxcblx0XHRcdGpRdWVyeS5pc0Z1bmN0aW9uKCBzcGVlZCApICYmIHNwZWVkLFxuXHRcdGR1cmF0aW9uOiBzcGVlZCxcblx0XHRlYXNpbmc6IGZuICYmIGVhc2luZyB8fCBlYXNpbmcgJiYgIWpRdWVyeS5pc0Z1bmN0aW9uKCBlYXNpbmcgKSAmJiBlYXNpbmdcblx0fTtcblxuXHQvLyBHbyB0byB0aGUgZW5kIHN0YXRlIGlmIGZ4IGFyZSBvZmYgb3IgaWYgZG9jdW1lbnQgaXMgaGlkZGVuXG5cdGlmICggalF1ZXJ5LmZ4Lm9mZiB8fCBkb2N1bWVudC5oaWRkZW4gKSB7XG5cdFx0b3B0LmR1cmF0aW9uID0gMDtcblxuXHR9IGVsc2Uge1xuXHRcdGlmICggdHlwZW9mIG9wdC5kdXJhdGlvbiAhPT0gXCJudW1iZXJcIiApIHtcblx0XHRcdGlmICggb3B0LmR1cmF0aW9uIGluIGpRdWVyeS5meC5zcGVlZHMgKSB7XG5cdFx0XHRcdG9wdC5kdXJhdGlvbiA9IGpRdWVyeS5meC5zcGVlZHNbIG9wdC5kdXJhdGlvbiBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzLl9kZWZhdWx0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIE5vcm1hbGl6ZSBvcHQucXVldWUgLSB0cnVlL3VuZGVmaW5lZC9udWxsIC0+IFwiZnhcIlxuXHRpZiAoIG9wdC5xdWV1ZSA9PSBudWxsIHx8IG9wdC5xdWV1ZSA9PT0gdHJ1ZSApIHtcblx0XHRvcHQucXVldWUgPSBcImZ4XCI7XG5cdH1cblxuXHQvLyBRdWV1ZWluZ1xuXHRvcHQub2xkID0gb3B0LmNvbXBsZXRlO1xuXG5cdG9wdC5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIG9wdC5vbGQgKSApIHtcblx0XHRcdG9wdC5vbGQuY2FsbCggdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggb3B0LnF1ZXVlICkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIG9wdC5xdWV1ZSApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gb3B0O1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRmYWRlVG86IGZ1bmN0aW9uKCBzcGVlZCwgdG8sIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cblx0XHQvLyBTaG93IGFueSBoaWRkZW4gZWxlbWVudHMgYWZ0ZXIgc2V0dGluZyBvcGFjaXR5IHRvIDBcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoIGlzSGlkZGVuV2l0aGluVHJlZSApLmNzcyggXCJvcGFjaXR5XCIsIDAgKS5zaG93KClcblxuXHRcdFx0Ly8gQW5pbWF0ZSB0byB0aGUgdmFsdWUgc3BlY2lmaWVkXG5cdFx0XHQuZW5kKCkuYW5pbWF0ZSggeyBvcGFjaXR5OiB0byB9LCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9LFxuXHRhbmltYXRlOiBmdW5jdGlvbiggcHJvcCwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0dmFyIGVtcHR5ID0galF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3AgKSxcblx0XHRcdG9wdGFsbCA9IGpRdWVyeS5zcGVlZCggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSxcblx0XHRcdGRvQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gT3BlcmF0ZSBvbiBhIGNvcHkgb2YgcHJvcCBzbyBwZXItcHJvcGVydHkgZWFzaW5nIHdvbid0IGJlIGxvc3Rcblx0XHRcdFx0dmFyIGFuaW0gPSBBbmltYXRpb24oIHRoaXMsIGpRdWVyeS5leHRlbmQoIHt9LCBwcm9wICksIG9wdGFsbCApO1xuXG5cdFx0XHRcdC8vIEVtcHR5IGFuaW1hdGlvbnMsIG9yIGZpbmlzaGluZyByZXNvbHZlcyBpbW1lZGlhdGVseVxuXHRcdFx0XHRpZiAoIGVtcHR5IHx8IGRhdGFQcml2LmdldCggdGhpcywgXCJmaW5pc2hcIiApICkge1xuXHRcdFx0XHRcdGFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZG9BbmltYXRpb24uZmluaXNoID0gZG9BbmltYXRpb247XG5cblx0XHRyZXR1cm4gZW1wdHkgfHwgb3B0YWxsLnF1ZXVlID09PSBmYWxzZSA/XG5cdFx0XHR0aGlzLmVhY2goIGRvQW5pbWF0aW9uICkgOlxuXHRcdFx0dGhpcy5xdWV1ZSggb3B0YWxsLnF1ZXVlLCBkb0FuaW1hdGlvbiApO1xuXHR9LFxuXHRzdG9wOiBmdW5jdGlvbiggdHlwZSwgY2xlYXJRdWV1ZSwgZ290b0VuZCApIHtcblx0XHR2YXIgc3RvcFF1ZXVlID0gZnVuY3Rpb24oIGhvb2tzICkge1xuXHRcdFx0dmFyIHN0b3AgPSBob29rcy5zdG9wO1xuXHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRzdG9wKCBnb3RvRW5kICk7XG5cdFx0fTtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRnb3RvRW5kID0gY2xlYXJRdWV1ZTtcblx0XHRcdGNsZWFyUXVldWUgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBjbGVhclF1ZXVlICYmIHR5cGUgIT09IGZhbHNlICkge1xuXHRcdFx0dGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZGVxdWV1ZSA9IHRydWUsXG5cdFx0XHRcdGluZGV4ID0gdHlwZSAhPSBudWxsICYmIHR5cGUgKyBcInF1ZXVlSG9va3NcIixcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcblx0XHRcdFx0ZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApO1xuXG5cdFx0XHRpZiAoIGluZGV4ICkge1xuXHRcdFx0XHRpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICkge1xuXHRcdFx0XHRcdHN0b3BRdWV1ZSggZGF0YVsgaW5kZXggXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKCBpbmRleCBpbiBkYXRhICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgJiYgcnJ1bi50ZXN0KCBpbmRleCApICkge1xuXHRcdFx0XHRcdFx0c3RvcFF1ZXVlKCBkYXRhWyBpbmRleCBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiZcblx0XHRcdFx0XHQoIHR5cGUgPT0gbnVsbCB8fCB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUgKSApIHtcblxuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIGdvdG9FbmQgKTtcblx0XHRcdFx0XHRkZXF1ZXVlID0gZmFsc2U7XG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGFydCB0aGUgbmV4dCBpbiB0aGUgcXVldWUgaWYgdGhlIGxhc3Qgc3RlcCB3YXNuJ3QgZm9yY2VkLlxuXHRcdFx0Ly8gVGltZXJzIGN1cnJlbnRseSB3aWxsIGNhbGwgdGhlaXIgY29tcGxldGUgY2FsbGJhY2tzLCB3aGljaFxuXHRcdFx0Ly8gd2lsbCBkZXF1ZXVlIGJ1dCBvbmx5IGlmIHRoZXkgd2VyZSBnb3RvRW5kLlxuXHRcdFx0aWYgKCBkZXF1ZXVlIHx8ICFnb3RvRW5kICkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblx0ZmluaXNoOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRpZiAoIHR5cGUgIT09IGZhbHNlICkge1xuXHRcdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCxcblx0XHRcdFx0ZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApLFxuXHRcdFx0XHRxdWV1ZSA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlXCIgXSxcblx0XHRcdFx0aG9va3MgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZUhvb2tzXCIgXSxcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcblx0XHRcdFx0bGVuZ3RoID0gcXVldWUgPyBxdWV1ZS5sZW5ndGggOiAwO1xuXG5cdFx0XHQvLyBFbmFibGUgZmluaXNoaW5nIGZsYWcgb24gcHJpdmF0ZSBkYXRhXG5cdFx0XHRkYXRhLmZpbmlzaCA9IHRydWU7XG5cblx0XHRcdC8vIEVtcHR5IHRoZSBxdWV1ZSBmaXJzdFxuXHRcdFx0alF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBbXSApO1xuXG5cdFx0XHRpZiAoIGhvb2tzICYmIGhvb2tzLnN0b3AgKSB7XG5cdFx0XHRcdGhvb2tzLnN0b3AuY2FsbCggdGhpcywgdHJ1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb29rIGZvciBhbnkgYWN0aXZlIGFuaW1hdGlvbnMsIGFuZCBmaW5pc2ggdGhlbVxuXHRcdFx0Zm9yICggaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOyApIHtcblx0XHRcdFx0aWYgKCB0aW1lcnNbIGluZGV4IF0uZWxlbSA9PT0gdGhpcyAmJiB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUgKSB7XG5cdFx0XHRcdFx0dGltZXJzWyBpbmRleCBdLmFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHRcdHRpbWVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9vayBmb3IgYW55IGFuaW1hdGlvbnMgaW4gdGhlIG9sZCBxdWV1ZSBhbmQgZmluaXNoIHRoZW1cblx0XHRcdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGlmICggcXVldWVbIGluZGV4IF0gJiYgcXVldWVbIGluZGV4IF0uZmluaXNoICkge1xuXHRcdFx0XHRcdHF1ZXVlWyBpbmRleCBdLmZpbmlzaC5jYWxsKCB0aGlzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gVHVybiBvZmYgZmluaXNoaW5nIGZsYWdcblx0XHRcdGRlbGV0ZSBkYXRhLmZpbmlzaDtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHR2YXIgY3NzRm4gPSBqUXVlcnkuZm5bIG5hbWUgXTtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHNwZWVkID09IG51bGwgfHwgdHlwZW9mIHNwZWVkID09PSBcImJvb2xlYW5cIiA/XG5cdFx0XHRjc3NGbi5hcHBseSggdGhpcywgYXJndW1lbnRzICkgOlxuXHRcdFx0dGhpcy5hbmltYXRlKCBnZW5GeCggbmFtZSwgdHJ1ZSApLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9O1xufSApO1xuXG4vLyBHZW5lcmF0ZSBzaG9ydGN1dHMgZm9yIGN1c3RvbSBhbmltYXRpb25zXG5qUXVlcnkuZWFjaCgge1xuXHRzbGlkZURvd246IGdlbkZ4KCBcInNob3dcIiApLFxuXHRzbGlkZVVwOiBnZW5GeCggXCJoaWRlXCIgKSxcblx0c2xpZGVUb2dnbGU6IGdlbkZ4KCBcInRvZ2dsZVwiICksXG5cdGZhZGVJbjogeyBvcGFjaXR5OiBcInNob3dcIiB9LFxuXHRmYWRlT3V0OiB7IG9wYWNpdHk6IFwiaGlkZVwiIH0sXG5cdGZhZGVUb2dnbGU6IHsgb3BhY2l0eTogXCJ0b2dnbGVcIiB9XG59LCBmdW5jdGlvbiggbmFtZSwgcHJvcHMgKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLmFuaW1hdGUoIHByb3BzLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9O1xufSApO1xuXG5qUXVlcnkudGltZXJzID0gW107XG5qUXVlcnkuZngudGljayA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdGltZXIsXG5cdFx0aSA9IDAsXG5cdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycztcblxuXHRmeE5vdyA9IGpRdWVyeS5ub3coKTtcblxuXHRmb3IgKCA7IGkgPCB0aW1lcnMubGVuZ3RoOyBpKysgKSB7XG5cdFx0dGltZXIgPSB0aW1lcnNbIGkgXTtcblxuXHRcdC8vIENoZWNrcyB0aGUgdGltZXIgaGFzIG5vdCBhbHJlYWR5IGJlZW4gcmVtb3ZlZFxuXHRcdGlmICggIXRpbWVyKCkgJiYgdGltZXJzWyBpIF0gPT09IHRpbWVyICkge1xuXHRcdFx0dGltZXJzLnNwbGljZSggaS0tLCAxICk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhdGltZXJzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkuZnguc3RvcCgpO1xuXHR9XG5cdGZ4Tm93ID0gdW5kZWZpbmVkO1xufTtcblxualF1ZXJ5LmZ4LnRpbWVyID0gZnVuY3Rpb24oIHRpbWVyICkge1xuXHRqUXVlcnkudGltZXJzLnB1c2goIHRpbWVyICk7XG5cdGlmICggdGltZXIoKSApIHtcblx0XHRqUXVlcnkuZnguc3RhcnQoKTtcblx0fSBlbHNlIHtcblx0XHRqUXVlcnkudGltZXJzLnBvcCgpO1xuXHR9XG59O1xuXG5qUXVlcnkuZnguaW50ZXJ2YWwgPSAxMztcbmpRdWVyeS5meC5zdGFydCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoICF0aW1lcklkICkge1xuXHRcdHRpbWVySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID9cblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHJhZiApIDpcblx0XHRcdHdpbmRvdy5zZXRJbnRlcnZhbCggalF1ZXJ5LmZ4LnRpY2ssIGpRdWVyeS5meC5pbnRlcnZhbCApO1xuXHR9XG59O1xuXG5qUXVlcnkuZnguc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSApIHtcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRpbWVySWQgKTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCggdGltZXJJZCApO1xuXHR9XG5cblx0dGltZXJJZCA9IG51bGw7XG59O1xuXG5qUXVlcnkuZnguc3BlZWRzID0ge1xuXHRzbG93OiA2MDAsXG5cdGZhc3Q6IDIwMCxcblxuXHQvLyBEZWZhdWx0IHNwZWVkXG5cdF9kZWZhdWx0OiA0MDBcbn07XG5cblxuLy8gQmFzZWQgb2ZmIG9mIHRoZSBwbHVnaW4gYnkgQ2xpbnQgSGVsZmVycywgd2l0aCBwZXJtaXNzaW9uLlxuLy8gaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTAwMzI0MDE0NzQ3L2h0dHA6Ly9ibGluZHNpZ25hbHMuY29tL2luZGV4LnBocC8yMDA5LzA3L2pxdWVyeS1kZWxheS9cbmpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uKCB0aW1lLCB0eXBlICkge1xuXHR0aW1lID0galF1ZXJ5LmZ4ID8galF1ZXJ5LmZ4LnNwZWVkc1sgdGltZSBdIHx8IHRpbWUgOiB0aW1lO1xuXHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUsIGZ1bmN0aW9uKCBuZXh0LCBob29rcyApIHtcblx0XHR2YXIgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCBuZXh0LCB0aW1lICk7XG5cdFx0aG9va3Muc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdH07XG5cdH0gKTtcbn07XG5cblxuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICksXG5cdFx0c2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzZWxlY3RcIiApLFxuXHRcdG9wdCA9IHNlbGVjdC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJvcHRpb25cIiApICk7XG5cblx0aW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4zIG9ubHlcblx0Ly8gRGVmYXVsdCB2YWx1ZSBmb3IgYSBjaGVja2JveCBzaG91bGQgYmUgXCJvblwiXG5cdHN1cHBvcnQuY2hlY2tPbiA9IGlucHV0LnZhbHVlICE9PSBcIlwiO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNdXN0IGFjY2VzcyBzZWxlY3RlZEluZGV4IHRvIG1ha2UgZGVmYXVsdCBvcHRpb25zIHNlbGVjdFxuXHRzdXBwb3J0Lm9wdFNlbGVjdGVkID0gb3B0LnNlbGVjdGVkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBBbiBpbnB1dCBsb3NlcyBpdHMgdmFsdWUgYWZ0ZXIgYmVjb21pbmcgYSByYWRpb1xuXHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXHRpbnB1dC52YWx1ZSA9IFwidFwiO1xuXHRpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuXHRzdXBwb3J0LnJhZGlvVmFsdWUgPSBpbnB1dC52YWx1ZSA9PT0gXCJ0XCI7XG59ICkoKTtcblxuXG52YXIgYm9vbEhvb2ssXG5cdGF0dHJIYW5kbGUgPSBqUXVlcnkuZXhwci5hdHRySGFuZGxlO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGF0dHI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkuYXR0ciwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggdGhpcywgbmFtZSApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdGF0dHI6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHR2YXIgcmV0LCBob29rcyxcblx0XHRcdG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRcdC8vIERvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblx0XHRpZiAoIG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEZhbGxiYWNrIHRvIHByb3Agd2hlbiBhdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgPT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnByb3AoIGVsZW0sIG5hbWUsIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXR0cmlidXRlIGhvb2tzIGFyZSBkZXRlcm1pbmVkIGJ5IHRoZSBsb3dlcmNhc2UgdmVyc2lvblxuXHRcdC8vIEdyYWIgbmVjZXNzYXJ5IGhvb2sgaWYgb25lIGlzIGRlZmluZWRcblx0XHRpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblx0XHRcdGhvb2tzID0galF1ZXJ5LmF0dHJIb29rc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gfHxcblx0XHRcdFx0KCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnRlc3QoIG5hbWUgKSA/IGJvb2xIb29rIDogdW5kZWZpbmVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gbnVsbCApIHtcblx0XHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggbmFtZSwgdmFsdWUgKyBcIlwiICk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXG5cdFx0cmV0ID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgbmFtZSApO1xuXG5cdFx0Ly8gTm9uLWV4aXN0ZW50IGF0dHJpYnV0ZXMgcmV0dXJuIG51bGwsIHdlIG5vcm1hbGl6ZSB0byB1bmRlZmluZWRcblx0XHRyZXR1cm4gcmV0ID09IG51bGwgPyB1bmRlZmluZWQgOiByZXQ7XG5cdH0sXG5cblx0YXR0ckhvb2tzOiB7XG5cdFx0dHlwZToge1xuXHRcdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggIXN1cHBvcnQucmFkaW9WYWx1ZSAmJiB2YWx1ZSA9PT0gXCJyYWRpb1wiICYmXG5cdFx0XHRcdFx0alF1ZXJ5Lm5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSApIHtcblx0XHRcdFx0XHR2YXIgdmFsID0gZWxlbS52YWx1ZTtcblx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIHZhbHVlICk7XG5cdFx0XHRcdFx0aWYgKCB2YWwgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLnZhbHVlID0gdmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdHZhciBuYW1lLFxuXHRcdFx0aSA9IDAsXG5cblx0XHRcdC8vIEF0dHJpYnV0ZSBuYW1lcyBjYW4gY29udGFpbiBub24tSFRNTCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcblx0XHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuXHRcdFx0YXR0ck5hbWVzID0gdmFsdWUgJiYgdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKTtcblxuXHRcdGlmICggYXR0ck5hbWVzICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHR3aGlsZSAoICggbmFtZSA9IGF0dHJOYW1lc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoIG5hbWUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxuLy8gSG9va3MgZm9yIGJvb2xlYW4gYXR0cmlidXRlc1xuYm9vbEhvb2sgPSB7XG5cdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBuYW1lICkge1xuXHRcdGlmICggdmFsdWUgPT09IGZhbHNlICkge1xuXG5cdFx0XHQvLyBSZW1vdmUgYm9vbGVhbiBhdHRyaWJ1dGVzIHdoZW4gc2V0IHRvIGZhbHNlXG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggbmFtZSwgbmFtZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gbmFtZTtcblx0fVxufTtcblxualF1ZXJ5LmVhY2goIGpRdWVyeS5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKCAvXFx3Ky9nICksIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHR2YXIgZ2V0dGVyID0gYXR0ckhhbmRsZVsgbmFtZSBdIHx8IGpRdWVyeS5maW5kLmF0dHI7XG5cblx0YXR0ckhhbmRsZVsgbmFtZSBdID0gZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdHZhciByZXQsIGhhbmRsZSxcblx0XHRcdGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiAoICFpc1hNTCApIHtcblxuXHRcdFx0Ly8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcCBieSB0ZW1wb3JhcmlseSByZW1vdmluZyB0aGlzIGZ1bmN0aW9uIGZyb20gdGhlIGdldHRlclxuXHRcdFx0aGFuZGxlID0gYXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdO1xuXHRcdFx0YXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdID0gcmV0O1xuXHRcdFx0cmV0ID0gZ2V0dGVyKCBlbGVtLCBuYW1lLCBpc1hNTCApICE9IG51bGwgP1xuXHRcdFx0XHRsb3dlcmNhc2VOYW1lIDpcblx0XHRcdFx0bnVsbDtcblx0XHRcdGF0dHJIYW5kbGVbIGxvd2VyY2FzZU5hbWUgXSA9IGhhbmRsZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcbn0gKTtcblxuXG5cblxudmFyIHJmb2N1c2FibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyY2xpY2thYmxlID0gL14oPzphfGFyZWEpJC9pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHByb3A6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkucHJvcCwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlUHJvcDogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGUgdGhpc1sgalF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lIF07XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0cHJvcDogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBwcm9wZXJ0aWVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIEZpeCBuYW1lIGFuZCBhdHRhY2ggaG9va3Ncblx0XHRcdG5hbWUgPSBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWU7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5wcm9wSG9va3NbIG5hbWUgXTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKCBlbGVtWyBuYW1lIF0gPSB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgbmFtZSApICkgIT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtWyBuYW1lIF07XG5cdH0sXG5cblx0cHJvcEhvb2tzOiB7XG5cdFx0dGFiSW5kZXg6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHRcdFx0XHQvLyBlbGVtLnRhYkluZGV4IGRvZXNuJ3QgYWx3YXlzIHJldHVybiB0aGVcblx0XHRcdFx0Ly8gY29ycmVjdCB2YWx1ZSB3aGVuIGl0IGhhc24ndCBiZWVuIGV4cGxpY2l0bHkgc2V0XG5cdFx0XHRcdC8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDE0MTExNjIzMzM0Ny9odHRwOi8vZmx1aWRwcm9qZWN0Lm9yZy9ibG9nLzIwMDgvMDEvMDkvZ2V0dGluZy1zZXR0aW5nLWFuZC1yZW1vdmluZy10YWJpbmRleC12YWx1ZXMtd2l0aC1qYXZhc2NyaXB0L1xuXHRcdFx0XHQvLyBVc2UgcHJvcGVyIGF0dHJpYnV0ZSByZXRyaWV2YWwoIzEyMDcyKVxuXHRcdFx0XHR2YXIgdGFiaW5kZXggPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInRhYmluZGV4XCIgKTtcblxuXHRcdFx0XHRpZiAoIHRhYmluZGV4ICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXJzZUludCggdGFiaW5kZXgsIDEwICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cmZvY3VzYWJsZS50ZXN0KCBlbGVtLm5vZGVOYW1lICkgfHxcblx0XHRcdFx0XHRyY2xpY2thYmxlLnRlc3QoIGVsZW0ubm9kZU5hbWUgKSAmJlxuXHRcdFx0XHRcdGVsZW0uaHJlZlxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cHJvcEZpeDoge1xuXHRcdFwiZm9yXCI6IFwiaHRtbEZvclwiLFxuXHRcdFwiY2xhc3NcIjogXCJjbGFzc05hbWVcIlxuXHR9XG59ICk7XG5cbi8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuLy8gQWNjZXNzaW5nIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5XG4vLyBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gcmVzcGVjdCBzZXR0aW5nIHNlbGVjdGVkXG4vLyBvbiB0aGUgb3B0aW9uXG4vLyBUaGUgZ2V0dGVyIGVuc3VyZXMgYSBkZWZhdWx0IG9wdGlvbiBpcyBzZWxlY3RlZFxuLy8gd2hlbiBpbiBhbiBvcHRncm91cFxuLy8gZXNsaW50IHJ1bGUgXCJuby11bnVzZWQtZXhwcmVzc2lvbnNcIiBpcyBkaXNhYmxlZCBmb3IgdGhpcyBjb2RlXG4vLyBzaW5jZSBpdCBjb25zaWRlcnMgc3VjaCBhY2Nlc3Npb25zIG5vb3BcbmlmICggIXN1cHBvcnQub3B0U2VsZWN0ZWQgKSB7XG5cdGpRdWVyeS5wcm9wSG9va3Muc2VsZWN0ZWQgPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0LyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRwYXJlbnQuc2VsZWN0ZWRJbmRleDtcblxuXHRcdFx0XHRpZiAoIHBhcmVudC5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmpRdWVyeS5lYWNoKCBbXG5cdFwidGFiSW5kZXhcIixcblx0XCJyZWFkT25seVwiLFxuXHRcIm1heExlbmd0aFwiLFxuXHRcImNlbGxTcGFjaW5nXCIsXG5cdFwiY2VsbFBhZGRpbmdcIixcblx0XCJyb3dTcGFuXCIsXG5cdFwiY29sU3BhblwiLFxuXHRcInVzZU1hcFwiLFxuXHRcImZyYW1lQm9yZGVyXCIsXG5cdFwiY29udGVudEVkaXRhYmxlXCJcbl0sIGZ1bmN0aW9uKCkge1xuXHRqUXVlcnkucHJvcEZpeFsgdGhpcy50b0xvd2VyQ2FzZSgpIF0gPSB0aGlzO1xufSApO1xuXG5cblxuXG5cdC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFjY29yZGluZyB0byBIVE1MIHNwZWNcblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzdHJpcC1hbmQtY29sbGFwc2Utd2hpdGVzcGFjZVxuXHRmdW5jdGlvbiBzdHJpcEFuZENvbGxhcHNlKCB2YWx1ZSApIHtcblx0XHR2YXIgdG9rZW5zID0gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblx0XHRyZXR1cm4gdG9rZW5zLmpvaW4oIFwiIFwiICk7XG5cdH1cblxuXG5mdW5jdGlvbiBnZXRDbGFzcyggZWxlbSApIHtcblx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlICYmIGVsZW0uZ2V0QXR0cmlidXRlKCBcImNsYXNzXCIgKSB8fCBcIlwiO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGFkZENsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzZXMsIGVsZW0sIGN1ciwgY3VyVmFsdWUsIGNsYXp6LCBqLCBmaW5hbFZhbHVlLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFkZENsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCBnZXRDbGFzcyggdGhpcyApICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSApIHtcblx0XHRcdGNsYXNzZXMgPSB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXG5cdFx0XHR3aGlsZSAoICggZWxlbSA9IHRoaXNbIGkrKyBdICkgKSB7XG5cdFx0XHRcdGN1clZhbHVlID0gZ2V0Q2xhc3MoIGVsZW0gKTtcblx0XHRcdFx0Y3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGNsYXp6ID0gY2xhc3Nlc1sgaisrIF0gKSApIHtcblx0XHRcdFx0XHRcdGlmICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0Y3VyICs9IGNsYXp6ICsgXCIgXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZSggY3VyICk7XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSApIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZW1vdmVDbGFzczogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBjbGFzc2VzLCBlbGVtLCBjdXIsIGN1clZhbHVlLCBjbGF6eiwgaiwgZmluYWxWYWx1ZSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBqICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5yZW1vdmVDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgZ2V0Q2xhc3MoIHRoaXMgKSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmF0dHIoIFwiY2xhc3NcIiwgXCJcIiApO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlICkge1xuXHRcdFx0Y2xhc3NlcyA9IHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cblx0XHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyggZWxlbSApO1xuXG5cdFx0XHRcdC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXG5cdFx0XHRcdGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGN1clZhbHVlICkgKyBcIiBcIiApO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdHdoaWxlICggKCBjbGF6eiA9IGNsYXNzZXNbIGorKyBdICkgKSB7XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSAqYWxsKiBpbnN0YW5jZXNcblx0XHRcdFx0XHRcdHdoaWxlICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciA9IGN1ci5yZXBsYWNlKCBcIiBcIiArIGNsYXp6ICsgXCIgXCIsIFwiIFwiICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZSggY3VyICk7XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSApIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR0b2dnbGVDbGFzczogZnVuY3Rpb24oIHZhbHVlLCBzdGF0ZVZhbCApIHtcblx0XHR2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuXHRcdGlmICggdHlwZW9mIHN0YXRlVmFsID09PSBcImJvb2xlYW5cIiAmJiB0eXBlID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIHN0YXRlVmFsID8gdGhpcy5hZGRDbGFzcyggdmFsdWUgKSA6IHRoaXMucmVtb3ZlQ2xhc3MoIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyhcblx0XHRcdFx0XHR2YWx1ZS5jYWxsKCB0aGlzLCBpLCBnZXRDbGFzcyggdGhpcyApLCBzdGF0ZVZhbCApLFxuXHRcdFx0XHRcdHN0YXRlVmFsXG5cdFx0XHRcdCk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY2xhc3NOYW1lLCBpLCBzZWxmLCBjbGFzc05hbWVzO1xuXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdFx0Ly8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcblx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdHNlbGYgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0Y2xhc3NOYW1lcyA9IHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cblx0XHRcdFx0d2hpbGUgKCAoIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbIGkrKyBdICkgKSB7XG5cblx0XHRcdFx0XHQvLyBDaGVjayBlYWNoIGNsYXNzTmFtZSBnaXZlbiwgc3BhY2Ugc2VwYXJhdGVkIGxpc3Rcblx0XHRcdFx0XHRpZiAoIHNlbGYuaGFzQ2xhc3MoIGNsYXNzTmFtZSApICkge1xuXHRcdFx0XHRcdFx0c2VsZi5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuYWRkQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBUb2dnbGUgd2hvbGUgY2xhc3MgbmFtZVxuXHRcdFx0fSBlbHNlIGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0eXBlID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gZ2V0Q2xhc3MoIHRoaXMgKTtcblx0XHRcdFx0aWYgKCBjbGFzc05hbWUgKSB7XG5cblx0XHRcdFx0XHQvLyBTdG9yZSBjbGFzc05hbWUgaWYgc2V0XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiwgY2xhc3NOYW1lICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBjbGFzcyBuYW1lIG9yIGlmIHdlJ3JlIHBhc3NlZCBgZmFsc2VgLFxuXHRcdFx0XHQvLyB0aGVuIHJlbW92ZSB0aGUgd2hvbGUgY2xhc3NuYW1lIChpZiB0aGVyZSB3YXMgb25lLCB0aGUgYWJvdmUgc2F2ZWQgaXQpLlxuXHRcdFx0XHQvLyBPdGhlcndpc2UgYnJpbmcgYmFjayB3aGF0ZXZlciB3YXMgcHJldmlvdXNseSBzYXZlZCAoaWYgYW55dGhpbmcpLFxuXHRcdFx0XHQvLyBmYWxsaW5nIGJhY2sgdG8gdGhlIGVtcHR5IHN0cmluZyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXG5cdFx0XHRcdGlmICggdGhpcy5zZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIixcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSB8fCB2YWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0XHRcdFx0XCJcIiA6XG5cdFx0XHRcdFx0XHRkYXRhUHJpdi5nZXQoIHRoaXMsIFwiX19jbGFzc05hbWVfX1wiICkgfHwgXCJcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0aGFzQ2xhc3M6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgY2xhc3NOYW1lLCBlbGVtLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRjbGFzc05hbWUgPSBcIiBcIiArIHNlbGVjdG9yICsgXCIgXCI7XG5cdFx0d2hpbGUgKCAoIGVsZW0gPSB0aGlzWyBpKysgXSApICkge1xuXHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdCggXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKCBnZXRDbGFzcyggZWxlbSApICkgKyBcIiBcIiApLmluZGV4T2YoIGNsYXNzTmFtZSApID4gLTEgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBycmV0dXJuID0gL1xcci9nO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHZhbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBob29rcywgcmV0LCBpc0Z1bmN0aW9uLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXTtcblxuXHRcdGlmICggIWFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzWyBlbGVtLnR5cGUgXSB8fFxuXHRcdFx0XHRcdGpRdWVyeS52YWxIb29rc1sgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIF07XG5cblx0XHRcdFx0aWYgKCBob29rcyAmJlxuXHRcdFx0XHRcdFwiZ2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0XHQoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgXCJ2YWx1ZVwiICkgKSAhPT0gdW5kZWZpbmVkXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXQgPSBlbGVtLnZhbHVlO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSBtb3N0IGNvbW1vbiBzdHJpbmcgY2FzZXNcblx0XHRcdFx0aWYgKCB0eXBlb2YgcmV0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdHJldHVybiByZXQucmVwbGFjZSggcnJldHVybiwgXCJcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSGFuZGxlIGNhc2VzIHdoZXJlIHZhbHVlIGlzIG51bGwvdW5kZWYgb3IgbnVtYmVyXG5cdFx0XHRcdHJldHVybiByZXQgPT0gbnVsbCA/IFwiXCIgOiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpc0Z1bmN0aW9uID0galF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdHZhciB2YWw7XG5cblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGlzRnVuY3Rpb24gKSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlLmNhbGwoIHRoaXMsIGksIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWwgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVHJlYXQgbnVsbC91bmRlZmluZWQgYXMgXCJcIjsgY29udmVydCBudW1iZXJzIHRvIHN0cmluZ1xuXHRcdFx0aWYgKCB2YWwgPT0gbnVsbCApIHtcblx0XHRcdFx0dmFsID0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiApIHtcblx0XHRcdFx0dmFsICs9IFwiXCI7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWwgKSApIHtcblx0XHRcdFx0dmFsID0galF1ZXJ5Lm1hcCggdmFsLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzWyB0aGlzLnR5cGUgXSB8fCBqUXVlcnkudmFsSG9va3NbIHRoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKSBdO1xuXG5cdFx0XHQvLyBJZiBzZXQgcmV0dXJucyB1bmRlZmluZWQsIGZhbGwgYmFjayB0byBub3JtYWwgc2V0dGluZ1xuXHRcdFx0aWYgKCAhaG9va3MgfHwgISggXCJzZXRcIiBpbiBob29rcyApIHx8IGhvb2tzLnNldCggdGhpcywgdmFsLCBcInZhbHVlXCIgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHZhbEhvb2tzOiB7XG5cdFx0b3B0aW9uOiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHRcdHZhciB2YWwgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInZhbHVlXCIgKTtcblx0XHRcdFx0cmV0dXJuIHZhbCAhPSBudWxsID9cblx0XHRcdFx0XHR2YWwgOlxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExIG9ubHlcblx0XHRcdFx0XHQvLyBvcHRpb24udGV4dCB0aHJvd3MgZXhjZXB0aW9ucyAoIzE0Njg2LCAjMTQ4NTgpXG5cdFx0XHRcdFx0Ly8gU3RyaXAgYW5kIGNvbGxhcHNlIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2Utd2hpdGVzcGFjZVxuXHRcdFx0XHRcdHN0cmlwQW5kQ29sbGFwc2UoIGpRdWVyeS50ZXh0KCBlbGVtICkgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNlbGVjdDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHZhbHVlLCBvcHRpb24sIGksXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHRpbmRleCA9IGVsZW0uc2VsZWN0ZWRJbmRleCxcblx0XHRcdFx0XHRvbmUgPSBlbGVtLnR5cGUgPT09IFwic2VsZWN0LW9uZVwiLFxuXHRcdFx0XHRcdHZhbHVlcyA9IG9uZSA/IG51bGwgOiBbXSxcblx0XHRcdFx0XHRtYXggPSBvbmUgPyBpbmRleCArIDEgOiBvcHRpb25zLmxlbmd0aDtcblxuXHRcdFx0XHRpZiAoIGluZGV4IDwgMCApIHtcblx0XHRcdFx0XHRpID0gbWF4O1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aSA9IG9uZSA/IGluZGV4IDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIHNlbGVjdGVkIG9wdGlvbnNcblx0XHRcdFx0Zm9yICggOyBpIDwgbWF4OyBpKysgKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHRcdFx0XHQvLyBJRTgtOSBkb2Vzbid0IHVwZGF0ZSBzZWxlY3RlZCBhZnRlciBmb3JtIHJlc2V0ICgjMjU1MSlcblx0XHRcdFx0XHRpZiAoICggb3B0aW9uLnNlbGVjdGVkIHx8IGkgPT09IGluZGV4ICkgJiZcblxuXHRcdFx0XHRcdFx0XHQvLyBEb24ndCByZXR1cm4gb3B0aW9ucyB0aGF0IGFyZSBkaXNhYmxlZCBvciBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG5cdFx0XHRcdFx0XHRcdCFvcHRpb24uZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRcdFx0KCAhb3B0aW9uLnBhcmVudE5vZGUuZGlzYWJsZWQgfHxcblx0XHRcdFx0XHRcdFx0XHQhalF1ZXJ5Lm5vZGVOYW1lKCBvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSBzcGVjaWZpYyB2YWx1ZSBmb3IgdGhlIG9wdGlvblxuXHRcdFx0XHRcdFx0dmFsdWUgPSBqUXVlcnkoIG9wdGlvbiApLnZhbCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBXZSBkb24ndCBuZWVkIGFuIGFycmF5IGZvciBvbmUgc2VsZWN0c1xuXHRcdFx0XHRcdFx0aWYgKCBvbmUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTXVsdGktU2VsZWN0cyByZXR1cm4gYW4gYXJyYXlcblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIG9wdGlvblNldCwgb3B0aW9uLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0dmFsdWVzID0galF1ZXJ5Lm1ha2VBcnJheSggdmFsdWUgKSxcblx0XHRcdFx0XHRpID0gb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuXHRcdFx0XHRcdGlmICggb3B0aW9uLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBqUXVlcnkudmFsSG9va3Mub3B0aW9uLmdldCggb3B0aW9uICksIHZhbHVlcyApID4gLTFcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdG9wdGlvblNldCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblx0XHRcdFx0aWYgKCAhb3B0aW9uU2V0ICkge1xuXHRcdFx0XHRcdGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG5qUXVlcnkuZWFjaCggWyBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiBdLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0gPSB7XG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0XHRyZXR1cm4gKCBlbGVtLmNoZWNrZWQgPSBqUXVlcnkuaW5BcnJheSggalF1ZXJ5KCBlbGVtICkudmFsKCksIHZhbHVlICkgPiAtMSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0aWYgKCAhc3VwcG9ydC5jaGVja09uICkge1xuXHRcdGpRdWVyeS52YWxIb29rc1sgdGhpcyBdLmdldCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBcInZhbHVlXCIgKSA9PT0gbnVsbCA/IFwib25cIiA6IGVsZW0udmFsdWU7XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG4vLyBSZXR1cm4galF1ZXJ5IGZvciBhdHRyaWJ1dGVzLW9ubHkgaW5jbHVzaW9uXG5cblxudmFyIHJmb2N1c01vcnBoID0gL14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvO1xuXG5qUXVlcnkuZXh0ZW5kKCBqUXVlcnkuZXZlbnQsIHtcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggZXZlbnQsIGRhdGEsIGVsZW0sIG9ubHlIYW5kbGVycyApIHtcblxuXHRcdHZhciBpLCBjdXIsIHRtcCwgYnViYmxlVHlwZSwgb250eXBlLCBoYW5kbGUsIHNwZWNpYWwsXG5cdFx0XHRldmVudFBhdGggPSBbIGVsZW0gfHwgZG9jdW1lbnQgXSxcblx0XHRcdHR5cGUgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwidHlwZVwiICkgPyBldmVudC50eXBlIDogZXZlbnQsXG5cdFx0XHRuYW1lc3BhY2VzID0gaGFzT3duLmNhbGwoIGV2ZW50LCBcIm5hbWVzcGFjZVwiICkgPyBldmVudC5uYW1lc3BhY2Uuc3BsaXQoIFwiLlwiICkgOiBbXTtcblxuXHRcdGN1ciA9IHRtcCA9IGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50O1xuXG5cdFx0Ly8gRG9uJ3QgZG8gZXZlbnRzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBmb2N1cy9ibHVyIG1vcnBocyB0byBmb2N1c2luL291dDsgZW5zdXJlIHdlJ3JlIG5vdCBmaXJpbmcgdGhlbSByaWdodCBub3dcblx0XHRpZiAoIHJmb2N1c01vcnBoLnRlc3QoIHR5cGUgKyBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlLmluZGV4T2YoIFwiLlwiICkgPiAtMSApIHtcblxuXHRcdFx0Ly8gTmFtZXNwYWNlZCB0cmlnZ2VyOyBjcmVhdGUgYSByZWdleHAgdG8gbWF0Y2ggZXZlbnQgdHlwZSBpbiBoYW5kbGUoKVxuXHRcdFx0bmFtZXNwYWNlcyA9IHR5cGUuc3BsaXQoIFwiLlwiICk7XG5cdFx0XHR0eXBlID0gbmFtZXNwYWNlcy5zaGlmdCgpO1xuXHRcdFx0bmFtZXNwYWNlcy5zb3J0KCk7XG5cdFx0fVxuXHRcdG9udHlwZSA9IHR5cGUuaW5kZXhPZiggXCI6XCIgKSA8IDAgJiYgXCJvblwiICsgdHlwZTtcblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhIGpRdWVyeS5FdmVudCBvYmplY3QsIE9iamVjdCwgb3IganVzdCBhbiBldmVudCB0eXBlIHN0cmluZ1xuXHRcdGV2ZW50ID0gZXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0ZXZlbnQgOlxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCggdHlwZSwgdHlwZW9mIGV2ZW50ID09PSBcIm9iamVjdFwiICYmIGV2ZW50ICk7XG5cblx0XHQvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXG5cdFx0ZXZlbnQuaXNUcmlnZ2VyID0gb25seUhhbmRsZXJzID8gMiA6IDM7XG5cdFx0ZXZlbnQubmFtZXNwYWNlID0gbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApO1xuXHRcdGV2ZW50LnJuYW1lc3BhY2UgPSBldmVudC5uYW1lc3BhY2UgP1xuXHRcdFx0bmV3IFJlZ0V4cCggXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbiggXCJcXFxcLig/Oi4qXFxcXC58KVwiICkgKyBcIihcXFxcLnwkKVwiICkgOlxuXHRcdFx0bnVsbDtcblxuXHRcdC8vIENsZWFuIHVwIHRoZSBldmVudCBpbiBjYXNlIGl0IGlzIGJlaW5nIHJldXNlZFxuXHRcdGV2ZW50LnJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHRpZiAoICFldmVudC50YXJnZXQgKSB7XG5cdFx0XHRldmVudC50YXJnZXQgPSBlbGVtO1xuXHRcdH1cblxuXHRcdC8vIENsb25lIGFueSBpbmNvbWluZyBkYXRhIGFuZCBwcmVwZW5kIHRoZSBldmVudCwgY3JlYXRpbmcgdGhlIGhhbmRsZXIgYXJnIGxpc3Rcblx0XHRkYXRhID0gZGF0YSA9PSBudWxsID9cblx0XHRcdFsgZXZlbnQgXSA6XG5cdFx0XHRqUXVlcnkubWFrZUFycmF5KCBkYXRhLCBbIGV2ZW50IF0gKTtcblxuXHRcdC8vIEFsbG93IHNwZWNpYWwgZXZlbnRzIHRvIGRyYXcgb3V0c2lkZSB0aGUgbGluZXNcblx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgc3BlY2lhbC50cmlnZ2VyICYmIHNwZWNpYWwudHJpZ2dlci5hcHBseSggZWxlbSwgZGF0YSApID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgZXZlbnQgcHJvcGFnYXRpb24gcGF0aCBpbiBhZHZhbmNlLCBwZXIgVzNDIGV2ZW50cyBzcGVjICgjOTk1MSlcblx0XHQvLyBCdWJibGUgdXAgdG8gZG9jdW1lbnQsIHRoZW4gdG8gd2luZG93OyB3YXRjaCBmb3IgYSBnbG9iYWwgb3duZXJEb2N1bWVudCB2YXIgKCM5NzI0KVxuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiAhc3BlY2lhbC5ub0J1YmJsZSAmJiAhalF1ZXJ5LmlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdGJ1YmJsZVR5cGUgPSBzcGVjaWFsLmRlbGVnYXRlVHlwZSB8fCB0eXBlO1xuXHRcdFx0aWYgKCAhcmZvY3VzTW9ycGgudGVzdCggYnViYmxlVHlwZSArIHR5cGUgKSApIHtcblx0XHRcdFx0Y3VyID0gY3VyLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKCA7IGN1cjsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCBjdXIgKTtcblx0XHRcdFx0dG1wID0gY3VyO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPbmx5IGFkZCB3aW5kb3cgaWYgd2UgZ290IHRvIGRvY3VtZW50IChlLmcuLCBub3QgcGxhaW4gb2JqIG9yIGRldGFjaGVkIERPTSlcblx0XHRcdGlmICggdG1wID09PSAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCApICkge1xuXHRcdFx0XHRldmVudFBhdGgucHVzaCggdG1wLmRlZmF1bHRWaWV3IHx8IHRtcC5wYXJlbnRXaW5kb3cgfHwgd2luZG93ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBoYW5kbGVycyBvbiB0aGUgZXZlbnQgcGF0aFxuXHRcdGkgPSAwO1xuXHRcdHdoaWxlICggKCBjdXIgPSBldmVudFBhdGhbIGkrKyBdICkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cblx0XHRcdGV2ZW50LnR5cGUgPSBpID4gMSA/XG5cdFx0XHRcdGJ1YmJsZVR5cGUgOlxuXHRcdFx0XHRzcGVjaWFsLmJpbmRUeXBlIHx8IHR5cGU7XG5cblx0XHRcdC8vIGpRdWVyeSBoYW5kbGVyXG5cdFx0XHRoYW5kbGUgPSAoIGRhdGFQcml2LmdldCggY3VyLCBcImV2ZW50c1wiICkgfHwge30gKVsgZXZlbnQudHlwZSBdICYmXG5cdFx0XHRcdGRhdGFQcml2LmdldCggY3VyLCBcImhhbmRsZVwiICk7XG5cdFx0XHRpZiAoIGhhbmRsZSApIHtcblx0XHRcdFx0aGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTmF0aXZlIGhhbmRsZXJcblx0XHRcdGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbIG9udHlwZSBdO1xuXHRcdFx0aWYgKCBoYW5kbGUgJiYgaGFuZGxlLmFwcGx5ICYmIGFjY2VwdERhdGEoIGN1ciApICkge1xuXHRcdFx0XHRldmVudC5yZXN1bHQgPSBoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0XHRpZiAoIGV2ZW50LnJlc3VsdCA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRldmVudC50eXBlID0gdHlwZTtcblxuXHRcdC8vIElmIG5vYm9keSBwcmV2ZW50ZWQgdGhlIGRlZmF1bHQgYWN0aW9uLCBkbyBpdCBub3dcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpICkge1xuXG5cdFx0XHRpZiAoICggIXNwZWNpYWwuX2RlZmF1bHQgfHxcblx0XHRcdFx0c3BlY2lhbC5fZGVmYXVsdC5hcHBseSggZXZlbnRQYXRoLnBvcCgpLCBkYXRhICkgPT09IGZhbHNlICkgJiZcblx0XHRcdFx0YWNjZXB0RGF0YSggZWxlbSApICkge1xuXG5cdFx0XHRcdC8vIENhbGwgYSBuYXRpdmUgRE9NIG1ldGhvZCBvbiB0aGUgdGFyZ2V0IHdpdGggdGhlIHNhbWUgbmFtZSBhcyB0aGUgZXZlbnQuXG5cdFx0XHRcdC8vIERvbid0IGRvIGRlZmF1bHQgYWN0aW9ucyBvbiB3aW5kb3csIHRoYXQncyB3aGVyZSBnbG9iYWwgdmFyaWFibGVzIGJlICgjNjE3MClcblx0XHRcdFx0aWYgKCBvbnR5cGUgJiYgalF1ZXJ5LmlzRnVuY3Rpb24oIGVsZW1bIHR5cGUgXSApICYmICFqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSApIHtcblxuXHRcdFx0XHRcdC8vIERvbid0IHJlLXRyaWdnZXIgYW4gb25GT08gZXZlbnQgd2hlbiB3ZSBjYWxsIGl0cyBGT08oKSBtZXRob2Rcblx0XHRcdFx0XHR0bXAgPSBlbGVtWyBvbnR5cGUgXTtcblxuXHRcdFx0XHRcdGlmICggdG1wICkge1xuXHRcdFx0XHRcdFx0ZWxlbVsgb250eXBlIF0gPSBudWxsO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFByZXZlbnQgcmUtdHJpZ2dlcmluZyBvZiB0aGUgc2FtZSBldmVudCwgc2luY2Ugd2UgYWxyZWFkeSBidWJibGVkIGl0IGFib3ZlXG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHR5cGU7XG5cdFx0XHRcdFx0ZWxlbVsgdHlwZSBdKCk7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRcdGlmICggdG1wICkge1xuXHRcdFx0XHRcdFx0ZWxlbVsgb250eXBlIF0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHQvLyBQaWdneWJhY2sgb24gYSBkb25vciBldmVudCB0byBzaW11bGF0ZSBhIGRpZmZlcmVudCBvbmVcblx0Ly8gVXNlZCBvbmx5IGZvciBgZm9jdXMoaW4gfCBvdXQpYCBldmVudHNcblx0c2ltdWxhdGU6IGZ1bmN0aW9uKCB0eXBlLCBlbGVtLCBldmVudCApIHtcblx0XHR2YXIgZSA9IGpRdWVyeS5leHRlbmQoXG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCksXG5cdFx0XHRldmVudCxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0aXNTaW11bGF0ZWQ6IHRydWVcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIGUsIG51bGwsIGVsZW0gKTtcblx0fVxuXG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCB0aGlzICk7XG5cdFx0fSApO1xuXHR9LFxuXHR0cmlnZ2VySGFuZGxlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF07XG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCBlbGVtLCB0cnVlICk7XG5cdFx0fVxuXHR9XG59ICk7XG5cblxualF1ZXJ5LmVhY2goICggXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBcIiArXG5cdFwibW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgXCIgK1xuXHRcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIiApLnNwbGl0KCBcIiBcIiApLFxuXHRmdW5jdGlvbiggaSwgbmFtZSApIHtcblxuXHQvLyBIYW5kbGUgZXZlbnQgYmluZGluZ1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgP1xuXHRcdFx0dGhpcy5vbiggbmFtZSwgbnVsbCwgZGF0YSwgZm4gKSA6XG5cdFx0XHR0aGlzLnRyaWdnZXIoIG5hbWUgKTtcblx0fTtcbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRob3ZlcjogZnVuY3Rpb24oIGZuT3ZlciwgZm5PdXQgKSB7XG5cdFx0cmV0dXJuIHRoaXMubW91c2VlbnRlciggZm5PdmVyICkubW91c2VsZWF2ZSggZm5PdXQgfHwgZm5PdmVyICk7XG5cdH1cbn0gKTtcblxuXG5cblxuc3VwcG9ydC5mb2N1c2luID0gXCJvbmZvY3VzaW5cIiBpbiB3aW5kb3c7XG5cblxuLy8gU3VwcG9ydDogRmlyZWZveCA8PTQ0XG4vLyBGaXJlZm94IGRvZXNuJ3QgaGF2ZSBmb2N1cyhpbiB8IG91dCkgZXZlbnRzXG4vLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY4Nzc4N1xuLy9cbi8vIFN1cHBvcnQ6IENocm9tZSA8PTQ4IC0gNDksIFNhZmFyaSA8PTkuMCAtIDkuMVxuLy8gZm9jdXMoaW4gfCBvdXQpIGV2ZW50cyBmaXJlIGFmdGVyIGZvY3VzICYgYmx1ciBldmVudHMsXG4vLyB3aGljaCBpcyBzcGVjIHZpb2xhdGlvbiAtIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnRzLWZvY3VzZXZlbnQtZXZlbnQtb3JkZXJcbi8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ5ODU3XG5pZiAoICFzdXBwb3J0LmZvY3VzaW4gKSB7XG5cdGpRdWVyeS5lYWNoKCB7IGZvY3VzOiBcImZvY3VzaW5cIiwgYmx1cjogXCJmb2N1c291dFwiIH0sIGZ1bmN0aW9uKCBvcmlnLCBmaXggKSB7XG5cblx0XHQvLyBBdHRhY2ggYSBzaW5nbGUgY2FwdHVyaW5nIGhhbmRsZXIgb24gdGhlIGRvY3VtZW50IHdoaWxlIHNvbWVvbmUgd2FudHMgZm9jdXNpbi9mb2N1c291dFxuXHRcdHZhciBoYW5kbGVyID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnNpbXVsYXRlKCBmaXgsIGV2ZW50LnRhcmdldCwgalF1ZXJ5LmV2ZW50LmZpeCggZXZlbnQgKSApO1xuXHRcdH07XG5cblx0XHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgZml4IF0gPSB7XG5cdFx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcyxcblx0XHRcdFx0XHRhdHRhY2hlcyA9IGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXggKTtcblxuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0XHRkb2MuYWRkRXZlbnRMaXN0ZW5lciggb3JpZywgaGFuZGxlciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXgsICggYXR0YWNoZXMgfHwgMCApICsgMSApO1xuXHRcdFx0fSxcblx0XHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCApIC0gMTtcblxuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0XHRkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lciggb3JpZywgaGFuZGxlciwgdHJ1ZSApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZG9jLCBmaXggKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXgsIGF0dGFjaGVzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9ICk7XG59XG52YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG5cbnZhciBub25jZSA9IGpRdWVyeS5ub3coKTtcblxudmFyIHJxdWVyeSA9ICggL1xcPy8gKTtcblxuXG5cbi8vIENyb3NzLWJyb3dzZXIgeG1sIHBhcnNpbmdcbmpRdWVyeS5wYXJzZVhNTCA9IGZ1bmN0aW9uKCBkYXRhICkge1xuXHR2YXIgeG1sO1xuXHRpZiAoICFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcblx0Ly8gSUUgdGhyb3dzIG9uIHBhcnNlRnJvbVN0cmluZyB3aXRoIGludmFsaWQgaW5wdXQuXG5cdHRyeSB7XG5cdFx0eG1sID0gKCBuZXcgd2luZG93LkRPTVBhcnNlcigpICkucGFyc2VGcm9tU3RyaW5nKCBkYXRhLCBcInRleHQveG1sXCIgKTtcblx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0eG1sID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aWYgKCAheG1sIHx8IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJwYXJzZXJlcnJvclwiICkubGVuZ3RoICkge1xuXHRcdGpRdWVyeS5lcnJvciggXCJJbnZhbGlkIFhNTDogXCIgKyBkYXRhICk7XG5cdH1cblx0cmV0dXJuIHhtbDtcbn07XG5cblxudmFyXG5cdHJicmFja2V0ID0gL1xcW1xcXSQvLFxuXHRyQ1JMRiA9IC9cXHI/XFxuL2csXG5cdHJzdWJtaXR0ZXJUeXBlcyA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxcblx0cnN1Ym1pdHRhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO1xuXG5mdW5jdGlvbiBidWlsZFBhcmFtcyggcHJlZml4LCBvYmosIHRyYWRpdGlvbmFsLCBhZGQgKSB7XG5cdHZhciBuYW1lO1xuXG5cdGlmICggalF1ZXJ5LmlzQXJyYXkoIG9iaiApICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIGFycmF5IGl0ZW0uXG5cdFx0alF1ZXJ5LmVhY2goIG9iaiwgZnVuY3Rpb24oIGksIHYgKSB7XG5cdFx0XHRpZiAoIHRyYWRpdGlvbmFsIHx8IHJicmFja2V0LnRlc3QoIHByZWZpeCApICkge1xuXG5cdFx0XHRcdC8vIFRyZWF0IGVhY2ggYXJyYXkgaXRlbSBhcyBhIHNjYWxhci5cblx0XHRcdFx0YWRkKCBwcmVmaXgsIHYgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBJdGVtIGlzIG5vbi1zY2FsYXIgKGFycmF5IG9yIG9iamVjdCksIGVuY29kZSBpdHMgbnVtZXJpYyBpbmRleC5cblx0XHRcdFx0YnVpbGRQYXJhbXMoXG5cdFx0XHRcdFx0cHJlZml4ICsgXCJbXCIgKyAoIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmIHYgIT0gbnVsbCA/IGkgOiBcIlwiICkgKyBcIl1cIixcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdHRyYWRpdGlvbmFsLFxuXHRcdFx0XHRcdGFkZFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHR9IGVsc2UgaWYgKCAhdHJhZGl0aW9uYWwgJiYgalF1ZXJ5LnR5cGUoIG9iaiApID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCArIFwiW1wiICsgbmFtZSArIFwiXVwiLCBvYmpbIG5hbWUgXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gU2VyaWFsaXplIHNjYWxhciBpdGVtLlxuXHRcdGFkZCggcHJlZml4LCBvYmogKTtcblx0fVxufVxuXG4vLyBTZXJpYWxpemUgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cyBvciBhIHNldCBvZlxuLy8ga2V5L3ZhbHVlcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG5qUXVlcnkucGFyYW0gPSBmdW5jdGlvbiggYSwgdHJhZGl0aW9uYWwgKSB7XG5cdHZhciBwcmVmaXgsXG5cdFx0cyA9IFtdLFxuXHRcdGFkZCA9IGZ1bmN0aW9uKCBrZXksIHZhbHVlT3JGdW5jdGlvbiApIHtcblxuXHRcdFx0Ly8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaW52b2tlIGl0IGFuZCB1c2UgaXRzIHJldHVybiB2YWx1ZVxuXHRcdFx0dmFyIHZhbHVlID0galF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlT3JGdW5jdGlvbiApID9cblx0XHRcdFx0dmFsdWVPckZ1bmN0aW9uKCkgOlxuXHRcdFx0XHR2YWx1ZU9yRnVuY3Rpb247XG5cblx0XHRcdHNbIHMubGVuZ3RoIF0gPSBlbmNvZGVVUklDb21wb25lbnQoIGtleSApICsgXCI9XCIgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKTtcblx0XHR9O1xuXG5cdC8vIElmIGFuIGFycmF5IHdhcyBwYXNzZWQgaW4sIGFzc3VtZSB0aGF0IGl0IGlzIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMuXG5cdGlmICggalF1ZXJ5LmlzQXJyYXkoIGEgKSB8fCAoIGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggYSApICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgdGhlIGZvcm0gZWxlbWVudHNcblx0XHRqUXVlcnkuZWFjaCggYSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRhZGQoIHRoaXMubmFtZSwgdGhpcy52YWx1ZSApO1xuXHRcdH0gKTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gSWYgdHJhZGl0aW9uYWwsIGVuY29kZSB0aGUgXCJvbGRcIiB3YXkgKHRoZSB3YXkgMS4zLjIgb3Igb2xkZXJcblx0XHQvLyBkaWQgaXQpLCBvdGhlcndpc2UgZW5jb2RlIHBhcmFtcyByZWN1cnNpdmVseS5cblx0XHRmb3IgKCBwcmVmaXggaW4gYSApIHtcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXgsIGFbIHByZWZpeCBdLCB0cmFkaXRpb25hbCwgYWRkICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSByZXN1bHRpbmcgc2VyaWFsaXphdGlvblxuXHRyZXR1cm4gcy5qb2luKCBcIiZcIiApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRzZXJpYWxpemU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnkucGFyYW0oIHRoaXMuc2VyaWFsaXplQXJyYXkoKSApO1xuXHR9LFxuXHRzZXJpYWxpemVBcnJheTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gQ2FuIGFkZCBwcm9wSG9vayBmb3IgXCJlbGVtZW50c1wiIHRvIGZpbHRlciBvciBhZGQgZm9ybSBlbGVtZW50c1xuXHRcdFx0dmFyIGVsZW1lbnRzID0galF1ZXJ5LnByb3AoIHRoaXMsIFwiZWxlbWVudHNcIiApO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnRzID8galF1ZXJ5Lm1ha2VBcnJheSggZWxlbWVudHMgKSA6IHRoaXM7XG5cdFx0fSApXG5cdFx0LmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHlwZSA9IHRoaXMudHlwZTtcblxuXHRcdFx0Ly8gVXNlIC5pcyggXCI6ZGlzYWJsZWRcIiApIHNvIHRoYXQgZmllbGRzZXRbZGlzYWJsZWRdIHdvcmtzXG5cdFx0XHRyZXR1cm4gdGhpcy5uYW1lICYmICFqUXVlcnkoIHRoaXMgKS5pcyggXCI6ZGlzYWJsZWRcIiApICYmXG5cdFx0XHRcdHJzdWJtaXR0YWJsZS50ZXN0KCB0aGlzLm5vZGVOYW1lICkgJiYgIXJzdWJtaXR0ZXJUeXBlcy50ZXN0KCB0eXBlICkgJiZcblx0XHRcdFx0KCB0aGlzLmNoZWNrZWQgfHwgIXJjaGVja2FibGVUeXBlLnRlc3QoIHR5cGUgKSApO1xuXHRcdH0gKVxuXHRcdC5tYXAoIGZ1bmN0aW9uKCBpLCBlbGVtICkge1xuXHRcdFx0dmFyIHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXG5cdFx0XHRpZiAoIHZhbCA9PSBudWxsICkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBqUXVlcnkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyBuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZSggckNSTEYsIFwiXFxyXFxuXCIgKSB9O1xuXHRcdH0gKS5nZXQoKTtcblx0fVxufSApO1xuXG5cbnZhclxuXHRyMjAgPSAvJTIwL2csXG5cdHJoYXNoID0gLyMuKiQvLFxuXHRyYW50aUNhY2hlID0gLyhbPyZdKV89W14mXSovLFxuXHRyaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvbWcsXG5cblx0Ly8gIzc2NTMsICM4MTI1LCAjODE1MjogbG9jYWwgcHJvdG9jb2wgZGV0ZWN0aW9uXG5cdHJsb2NhbFByb3RvY29sID0gL14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sXG5cdHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxuXHRycHJvdG9jb2wgPSAvXlxcL1xcLy8sXG5cblx0LyogUHJlZmlsdGVyc1xuXHQgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuXHQgKiAyKSBUaGVzZSBhcmUgY2FsbGVkOlxuXHQgKiAgICAtIEJFRk9SRSBhc2tpbmcgZm9yIGEgdHJhbnNwb3J0XG5cdCAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcblx0ICogMykga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiA0KSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHRwcmVmaWx0ZXJzID0ge30sXG5cblx0LyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuXHQgKiAxKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDIpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHR0cmFuc3BvcnRzID0ge30sXG5cblx0Ly8gQXZvaWQgY29tbWVudC1wcm9sb2cgY2hhciBzZXF1ZW5jZSAoIzEwMDk4KTsgbXVzdCBhcHBlYXNlIGxpbnQgYW5kIGV2YWRlIGNvbXByZXNzaW9uXG5cdGFsbFR5cGVzID0gXCIqL1wiLmNvbmNhdCggXCIqXCIgKSxcblxuXHQvLyBBbmNob3IgdGFnIGZvciBwYXJzaW5nIHRoZSBkb2N1bWVudCBvcmlnaW5cblx0b3JpZ2luQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblx0b3JpZ2luQW5jaG9yLmhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuXG4vLyBCYXNlIFwiY29uc3RydWN0b3JcIiBmb3IgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIgYW5kIGpRdWVyeS5hamF4VHJhbnNwb3J0XG5mdW5jdGlvbiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHN0cnVjdHVyZSApIHtcblxuXHQvLyBkYXRhVHlwZUV4cHJlc3Npb24gaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIFwiKlwiXG5cdHJldHVybiBmdW5jdGlvbiggZGF0YVR5cGVFeHByZXNzaW9uLCBmdW5jICkge1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YVR5cGVFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0ZnVuYyA9IGRhdGFUeXBlRXhwcmVzc2lvbjtcblx0XHRcdGRhdGFUeXBlRXhwcmVzc2lvbiA9IFwiKlwiO1xuXHRcdH1cblxuXHRcdHZhciBkYXRhVHlwZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0ZGF0YVR5cGVzID0gZGF0YVR5cGVFeHByZXNzaW9uLnRvTG93ZXJDYXNlKCkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGZ1bmMgKSApIHtcblxuXHRcdFx0Ly8gRm9yIGVhY2ggZGF0YVR5cGUgaW4gdGhlIGRhdGFUeXBlRXhwcmVzc2lvblxuXHRcdFx0d2hpbGUgKCAoIGRhdGFUeXBlID0gZGF0YVR5cGVzWyBpKysgXSApICkge1xuXG5cdFx0XHRcdC8vIFByZXBlbmQgaWYgcmVxdWVzdGVkXG5cdFx0XHRcdGlmICggZGF0YVR5cGVbIDAgXSA9PT0gXCIrXCIgKSB7XG5cdFx0XHRcdFx0ZGF0YVR5cGUgPSBkYXRhVHlwZS5zbGljZSggMSApIHx8IFwiKlwiO1xuXHRcdFx0XHRcdCggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkudW5zaGlmdCggZnVuYyApO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBhcHBlbmRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQoIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSA9IHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSApLnB1c2goIGZ1bmMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuLy8gQmFzZSBpbnNwZWN0aW9uIGZ1bmN0aW9uIGZvciBwcmVmaWx0ZXJzIGFuZCB0cmFuc3BvcnRzXG5mdW5jdGlvbiBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlLCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSICkge1xuXG5cdHZhciBpbnNwZWN0ZWQgPSB7fSxcblx0XHRzZWVraW5nVHJhbnNwb3J0ID0gKCBzdHJ1Y3R1cmUgPT09IHRyYW5zcG9ydHMgKTtcblxuXHRmdW5jdGlvbiBpbnNwZWN0KCBkYXRhVHlwZSApIHtcblx0XHR2YXIgc2VsZWN0ZWQ7XG5cdFx0aW5zcGVjdGVkWyBkYXRhVHlwZSBdID0gdHJ1ZTtcblx0XHRqUXVlcnkuZWFjaCggc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdLCBmdW5jdGlvbiggXywgcHJlZmlsdGVyT3JGYWN0b3J5ICkge1xuXHRcdFx0dmFyIGRhdGFUeXBlT3JUcmFuc3BvcnQgPSBwcmVmaWx0ZXJPckZhY3RvcnkoIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKTtcblx0XHRcdGlmICggdHlwZW9mIGRhdGFUeXBlT3JUcmFuc3BvcnQgPT09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0IXNlZWtpbmdUcmFuc3BvcnQgJiYgIWluc3BlY3RlZFsgZGF0YVR5cGVPclRyYW5zcG9ydCBdICkge1xuXG5cdFx0XHRcdG9wdGlvbnMuZGF0YVR5cGVzLnVuc2hpZnQoIGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdFx0aW5zcGVjdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKCBzZWVraW5nVHJhbnNwb3J0ICkge1xuXHRcdFx0XHRyZXR1cm4gISggc2VsZWN0ZWQgPSBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHRcdHJldHVybiBzZWxlY3RlZDtcblx0fVxuXG5cdHJldHVybiBpbnNwZWN0KCBvcHRpb25zLmRhdGFUeXBlc1sgMCBdICkgfHwgIWluc3BlY3RlZFsgXCIqXCIgXSAmJiBpbnNwZWN0KCBcIipcIiApO1xufVxuXG4vLyBBIHNwZWNpYWwgZXh0ZW5kIGZvciBhamF4IG9wdGlvbnNcbi8vIHRoYXQgdGFrZXMgXCJmbGF0XCIgb3B0aW9ucyAobm90IHRvIGJlIGRlZXAgZXh0ZW5kZWQpXG4vLyBGaXhlcyAjOTg4N1xuZnVuY3Rpb24gYWpheEV4dGVuZCggdGFyZ2V0LCBzcmMgKSB7XG5cdHZhciBrZXksIGRlZXAsXG5cdFx0ZmxhdE9wdGlvbnMgPSBqUXVlcnkuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zIHx8IHt9O1xuXG5cdGZvciAoIGtleSBpbiBzcmMgKSB7XG5cdFx0aWYgKCBzcmNbIGtleSBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHQoIGZsYXRPcHRpb25zWyBrZXkgXSA/IHRhcmdldCA6ICggZGVlcCB8fCAoIGRlZXAgPSB7fSApICkgKVsga2V5IF0gPSBzcmNbIGtleSBdO1xuXHRcdH1cblx0fVxuXHRpZiAoIGRlZXAgKSB7XG5cdFx0alF1ZXJ5LmV4dGVuZCggdHJ1ZSwgdGFyZ2V0LCBkZWVwICk7XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG4vKiBIYW5kbGVzIHJlc3BvbnNlcyB0byBhbiBhamF4IHJlcXVlc3Q6XG4gKiAtIGZpbmRzIHRoZSByaWdodCBkYXRhVHlwZSAobWVkaWF0ZXMgYmV0d2VlbiBjb250ZW50LXR5cGUgYW5kIGV4cGVjdGVkIGRhdGFUeXBlKVxuICogLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIGFqYXhIYW5kbGVSZXNwb25zZXMoIHMsIGpxWEhSLCByZXNwb25zZXMgKSB7XG5cblx0dmFyIGN0LCB0eXBlLCBmaW5hbERhdGFUeXBlLCBmaXJzdERhdGFUeXBlLFxuXHRcdGNvbnRlbnRzID0gcy5jb250ZW50cyxcblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcztcblxuXHQvLyBSZW1vdmUgYXV0byBkYXRhVHlwZSBhbmQgZ2V0IGNvbnRlbnQtdHlwZSBpbiB0aGUgcHJvY2Vzc1xuXHR3aGlsZSAoIGRhdGFUeXBlc1sgMCBdID09PSBcIipcIiApIHtcblx0XHRkYXRhVHlwZXMuc2hpZnQoKTtcblx0XHRpZiAoIGN0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRjdCA9IHMubWltZVR5cGUgfHwganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggYSBrbm93biBjb250ZW50LXR5cGVcblx0aWYgKCBjdCApIHtcblx0XHRmb3IgKCB0eXBlIGluIGNvbnRlbnRzICkge1xuXHRcdFx0aWYgKCBjb250ZW50c1sgdHlwZSBdICYmIGNvbnRlbnRzWyB0eXBlIF0udGVzdCggY3QgKSApIHtcblx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHR5cGUgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSByZXNwb25zZSBmb3IgdGhlIGV4cGVjdGVkIGRhdGFUeXBlXG5cdGlmICggZGF0YVR5cGVzWyAwIF0gaW4gcmVzcG9uc2VzICkge1xuXHRcdGZpbmFsRGF0YVR5cGUgPSBkYXRhVHlwZXNbIDAgXTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIFRyeSBjb252ZXJ0aWJsZSBkYXRhVHlwZXNcblx0XHRmb3IgKCB0eXBlIGluIHJlc3BvbnNlcyApIHtcblx0XHRcdGlmICggIWRhdGFUeXBlc1sgMCBdIHx8IHMuY29udmVydGVyc1sgdHlwZSArIFwiIFwiICsgZGF0YVR5cGVzWyAwIF0gXSApIHtcblx0XHRcdFx0ZmluYWxEYXRhVHlwZSA9IHR5cGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhZmlyc3REYXRhVHlwZSApIHtcblx0XHRcdFx0Zmlyc3REYXRhVHlwZSA9IHR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gT3IganVzdCB1c2UgZmlyc3Qgb25lXG5cdFx0ZmluYWxEYXRhVHlwZSA9IGZpbmFsRGF0YVR5cGUgfHwgZmlyc3REYXRhVHlwZTtcblx0fVxuXG5cdC8vIElmIHdlIGZvdW5kIGEgZGF0YVR5cGVcblx0Ly8gV2UgYWRkIHRoZSBkYXRhVHlwZSB0byB0aGUgbGlzdCBpZiBuZWVkZWRcblx0Ly8gYW5kIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuXHRpZiAoIGZpbmFsRGF0YVR5cGUgKSB7XG5cdFx0aWYgKCBmaW5hbERhdGFUeXBlICE9PSBkYXRhVHlwZXNbIDAgXSApIHtcblx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCBmaW5hbERhdGFUeXBlICk7XG5cdFx0fVxuXHRcdHJldHVybiByZXNwb25zZXNbIGZpbmFsRGF0YVR5cGUgXTtcblx0fVxufVxuXG4vKiBDaGFpbiBjb252ZXJzaW9ucyBnaXZlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIG9yaWdpbmFsIHJlc3BvbnNlXG4gKiBBbHNvIHNldHMgdGhlIHJlc3BvbnNlWFhYIGZpZWxkcyBvbiB0aGUganFYSFIgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICkge1xuXHR2YXIgY29udjIsIGN1cnJlbnQsIGNvbnYsIHRtcCwgcHJldixcblx0XHRjb252ZXJ0ZXJzID0ge30sXG5cblx0XHQvLyBXb3JrIHdpdGggYSBjb3B5IG9mIGRhdGFUeXBlcyBpbiBjYXNlIHdlIG5lZWQgdG8gbW9kaWZ5IGl0IGZvciBjb252ZXJzaW9uXG5cdFx0ZGF0YVR5cGVzID0gcy5kYXRhVHlwZXMuc2xpY2UoKTtcblxuXHQvLyBDcmVhdGUgY29udmVydGVycyBtYXAgd2l0aCBsb3dlcmNhc2VkIGtleXNcblx0aWYgKCBkYXRhVHlwZXNbIDEgXSApIHtcblx0XHRmb3IgKCBjb252IGluIHMuY29udmVydGVycyApIHtcblx0XHRcdGNvbnZlcnRlcnNbIGNvbnYudG9Mb3dlckNhc2UoKSBdID0gcy5jb252ZXJ0ZXJzWyBjb252IF07XG5cdFx0fVxuXHR9XG5cblx0Y3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG5cdC8vIENvbnZlcnQgdG8gZWFjaCBzZXF1ZW50aWFsIGRhdGFUeXBlXG5cdHdoaWxlICggY3VycmVudCApIHtcblxuXHRcdGlmICggcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdICkge1xuXHRcdFx0anFYSFJbIHMucmVzcG9uc2VGaWVsZHNbIGN1cnJlbnQgXSBdID0gcmVzcG9uc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgdGhlIGRhdGFGaWx0ZXIgaWYgcHJvdmlkZWRcblx0XHRpZiAoICFwcmV2ICYmIGlzU3VjY2VzcyAmJiBzLmRhdGFGaWx0ZXIgKSB7XG5cdFx0XHRyZXNwb25zZSA9IHMuZGF0YUZpbHRlciggcmVzcG9uc2UsIHMuZGF0YVR5cGUgKTtcblx0XHR9XG5cblx0XHRwcmV2ID0gY3VycmVudDtcblx0XHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0XHRpZiAoIGN1cnJlbnQgKSB7XG5cblx0XHRcdC8vIFRoZXJlJ3Mgb25seSB3b3JrIHRvIGRvIGlmIGN1cnJlbnQgZGF0YVR5cGUgaXMgbm9uLWF1dG9cblx0XHRcdGlmICggY3VycmVudCA9PT0gXCIqXCIgKSB7XG5cblx0XHRcdFx0Y3VycmVudCA9IHByZXY7XG5cblx0XHRcdC8vIENvbnZlcnQgcmVzcG9uc2UgaWYgcHJldiBkYXRhVHlwZSBpcyBub24tYXV0byBhbmQgZGlmZmVycyBmcm9tIGN1cnJlbnRcblx0XHRcdH0gZWxzZSBpZiAoIHByZXYgIT09IFwiKlwiICYmIHByZXYgIT09IGN1cnJlbnQgKSB7XG5cblx0XHRcdFx0Ly8gU2VlayBhIGRpcmVjdCBjb252ZXJ0ZXJcblx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIHByZXYgKyBcIiBcIiArIGN1cnJlbnQgXSB8fCBjb252ZXJ0ZXJzWyBcIiogXCIgKyBjdXJyZW50IF07XG5cblx0XHRcdFx0Ly8gSWYgbm9uZSBmb3VuZCwgc2VlayBhIHBhaXJcblx0XHRcdFx0aWYgKCAhY29udiApIHtcblx0XHRcdFx0XHRmb3IgKCBjb252MiBpbiBjb252ZXJ0ZXJzICkge1xuXG5cdFx0XHRcdFx0XHQvLyBJZiBjb252MiBvdXRwdXRzIGN1cnJlbnRcblx0XHRcdFx0XHRcdHRtcCA9IGNvbnYyLnNwbGl0KCBcIiBcIiApO1xuXHRcdFx0XHRcdFx0aWYgKCB0bXBbIDEgXSA9PT0gY3VycmVudCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcblx0XHRcdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIHByZXYgKyBcIiBcIiArIHRtcFsgMCBdIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZXJzWyBcIiogXCIgKyB0bXBbIDAgXSBdO1xuXHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBDb25kZW5zZSBlcXVpdmFsZW5jZSBjb252ZXJ0ZXJzXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBjb252ID09PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIGNvbnYyIF07XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIGluc2VydCB0aGUgaW50ZXJtZWRpYXRlIGRhdGFUeXBlXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggY29udmVydGVyc1sgY29udjIgXSAhPT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnQgPSB0bXBbIDAgXTtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCB0bXBbIDEgXSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFwcGx5IGNvbnZlcnRlciAoaWYgbm90IGFuIGVxdWl2YWxlbmNlKVxuXHRcdFx0XHRpZiAoIGNvbnYgIT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHQvLyBVbmxlc3MgZXJyb3JzIGFyZSBhbGxvd2VkIHRvIGJ1YmJsZSwgY2F0Y2ggYW5kIHJldHVybiB0aGVtXG5cdFx0XHRcdFx0aWYgKCBjb252ICYmIHMudGhyb3dzICkge1xuXHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBjb252KCByZXNwb25zZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZTogXCJwYXJzZXJlcnJvclwiLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBjb252ID8gZSA6IFwiTm8gY29udmVyc2lvbiBmcm9tIFwiICsgcHJldiArIFwiIHRvIFwiICsgY3VycmVudFxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7IHN0YXRlOiBcInN1Y2Nlc3NcIiwgZGF0YTogcmVzcG9uc2UgfTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIENvdW50ZXIgZm9yIGhvbGRpbmcgdGhlIG51bWJlciBvZiBhY3RpdmUgcXVlcmllc1xuXHRhY3RpdmU6IDAsXG5cblx0Ly8gTGFzdC1Nb2RpZmllZCBoZWFkZXIgY2FjaGUgZm9yIG5leHQgcmVxdWVzdFxuXHRsYXN0TW9kaWZpZWQ6IHt9LFxuXHRldGFnOiB7fSxcblxuXHRhamF4U2V0dGluZ3M6IHtcblx0XHR1cmw6IGxvY2F0aW9uLmhyZWYsXG5cdFx0dHlwZTogXCJHRVRcIixcblx0XHRpc0xvY2FsOiBybG9jYWxQcm90b2NvbC50ZXN0KCBsb2NhdGlvbi5wcm90b2NvbCApLFxuXHRcdGdsb2JhbDogdHJ1ZSxcblx0XHRwcm9jZXNzRGF0YTogdHJ1ZSxcblx0XHRhc3luYzogdHJ1ZSxcblx0XHRjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcblxuXHRcdC8qXG5cdFx0dGltZW91dDogMCxcblx0XHRkYXRhOiBudWxsLFxuXHRcdGRhdGFUeXBlOiBudWxsLFxuXHRcdHVzZXJuYW1lOiBudWxsLFxuXHRcdHBhc3N3b3JkOiBudWxsLFxuXHRcdGNhY2hlOiBudWxsLFxuXHRcdHRocm93czogZmFsc2UsXG5cdFx0dHJhZGl0aW9uYWw6IGZhbHNlLFxuXHRcdGhlYWRlcnM6IHt9LFxuXHRcdCovXG5cblx0XHRhY2NlcHRzOiB7XG5cdFx0XHRcIipcIjogYWxsVHlwZXMsXG5cdFx0XHR0ZXh0OiBcInRleHQvcGxhaW5cIixcblx0XHRcdGh0bWw6IFwidGV4dC9odG1sXCIsXG5cdFx0XHR4bWw6IFwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLFxuXHRcdFx0anNvbjogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIlxuXHRcdH0sXG5cblx0XHRjb250ZW50czoge1xuXHRcdFx0eG1sOiAvXFxieG1sXFxiLyxcblx0XHRcdGh0bWw6IC9cXGJodG1sLyxcblx0XHRcdGpzb246IC9cXGJqc29uXFxiL1xuXHRcdH0sXG5cblx0XHRyZXNwb25zZUZpZWxkczoge1xuXHRcdFx0eG1sOiBcInJlc3BvbnNlWE1MXCIsXG5cdFx0XHR0ZXh0OiBcInJlc3BvbnNlVGV4dFwiLFxuXHRcdFx0anNvbjogXCJyZXNwb25zZUpTT05cIlxuXHRcdH0sXG5cblx0XHQvLyBEYXRhIGNvbnZlcnRlcnNcblx0XHQvLyBLZXlzIHNlcGFyYXRlIHNvdXJjZSAob3IgY2F0Y2hhbGwgXCIqXCIpIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG5cdFx0Y29udmVydGVyczoge1xuXG5cdFx0XHQvLyBDb252ZXJ0IGFueXRoaW5nIHRvIHRleHRcblx0XHRcdFwiKiB0ZXh0XCI6IFN0cmluZyxcblxuXHRcdFx0Ly8gVGV4dCB0byBodG1sICh0cnVlID0gbm8gdHJhbnNmb3JtYXRpb24pXG5cdFx0XHRcInRleHQgaHRtbFwiOiB0cnVlLFxuXG5cdFx0XHQvLyBFdmFsdWF0ZSB0ZXh0IGFzIGEganNvbiBleHByZXNzaW9uXG5cdFx0XHRcInRleHQganNvblwiOiBKU09OLnBhcnNlLFxuXG5cdFx0XHQvLyBQYXJzZSB0ZXh0IGFzIHhtbFxuXHRcdFx0XCJ0ZXh0IHhtbFwiOiBqUXVlcnkucGFyc2VYTUxcblx0XHR9LFxuXG5cdFx0Ly8gRm9yIG9wdGlvbnMgdGhhdCBzaG91bGRuJ3QgYmUgZGVlcCBleHRlbmRlZDpcblx0XHQvLyB5b3UgY2FuIGFkZCB5b3VyIG93biBjdXN0b20gb3B0aW9ucyBoZXJlIGlmXG5cdFx0Ly8gYW5kIHdoZW4geW91IGNyZWF0ZSBvbmUgdGhhdCBzaG91bGRuJ3QgYmVcblx0XHQvLyBkZWVwIGV4dGVuZGVkIChzZWUgYWpheEV4dGVuZClcblx0XHRmbGF0T3B0aW9uczoge1xuXHRcdFx0dXJsOiB0cnVlLFxuXHRcdFx0Y29udGV4dDogdHJ1ZVxuXHRcdH1cblx0fSxcblxuXHQvLyBDcmVhdGVzIGEgZnVsbCBmbGVkZ2VkIHNldHRpbmdzIG9iamVjdCBpbnRvIHRhcmdldFxuXHQvLyB3aXRoIGJvdGggYWpheFNldHRpbmdzIGFuZCBzZXR0aW5ncyBmaWVsZHMuXG5cdC8vIElmIHRhcmdldCBpcyBvbWl0dGVkLCB3cml0ZXMgaW50byBhamF4U2V0dGluZ3MuXG5cdGFqYXhTZXR1cDogZnVuY3Rpb24oIHRhcmdldCwgc2V0dGluZ3MgKSB7XG5cdFx0cmV0dXJuIHNldHRpbmdzID9cblxuXHRcdFx0Ly8gQnVpbGRpbmcgYSBzZXR0aW5ncyBvYmplY3Rcblx0XHRcdGFqYXhFeHRlbmQoIGFqYXhFeHRlbmQoIHRhcmdldCwgalF1ZXJ5LmFqYXhTZXR0aW5ncyApLCBzZXR0aW5ncyApIDpcblxuXHRcdFx0Ly8gRXh0ZW5kaW5nIGFqYXhTZXR0aW5nc1xuXHRcdFx0YWpheEV4dGVuZCggalF1ZXJ5LmFqYXhTZXR0aW5ncywgdGFyZ2V0ICk7XG5cdH0sXG5cblx0YWpheFByZWZpbHRlcjogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzICksXG5cdGFqYXhUcmFuc3BvcnQ6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggdHJhbnNwb3J0cyApLFxuXG5cdC8vIE1haW4gbWV0aG9kXG5cdGFqYXg6IGZ1bmN0aW9uKCB1cmwsIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBJZiB1cmwgaXMgYW4gb2JqZWN0LCBzaW11bGF0ZSBwcmUtMS41IHNpZ25hdHVyZVxuXHRcdGlmICggdHlwZW9mIHVybCA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdG9wdGlvbnMgPSB1cmw7XG5cdFx0XHR1cmwgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gRm9yY2Ugb3B0aW9ucyB0byBiZSBhbiBvYmplY3Rcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdHZhciB0cmFuc3BvcnQsXG5cblx0XHRcdC8vIFVSTCB3aXRob3V0IGFudGktY2FjaGUgcGFyYW1cblx0XHRcdGNhY2hlVVJMLFxuXG5cdFx0XHQvLyBSZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNTdHJpbmcsXG5cdFx0XHRyZXNwb25zZUhlYWRlcnMsXG5cblx0XHRcdC8vIHRpbWVvdXQgaGFuZGxlXG5cdFx0XHR0aW1lb3V0VGltZXIsXG5cblx0XHRcdC8vIFVybCBjbGVhbnVwIHZhclxuXHRcdFx0dXJsQW5jaG9yLFxuXG5cdFx0XHQvLyBSZXF1ZXN0IHN0YXRlIChiZWNvbWVzIGZhbHNlIHVwb24gc2VuZCBhbmQgdHJ1ZSB1cG9uIGNvbXBsZXRpb24pXG5cdFx0XHRjb21wbGV0ZWQsXG5cblx0XHRcdC8vIFRvIGtub3cgaWYgZ2xvYmFsIGV2ZW50cyBhcmUgdG8gYmUgZGlzcGF0Y2hlZFxuXHRcdFx0ZmlyZUdsb2JhbHMsXG5cblx0XHRcdC8vIExvb3AgdmFyaWFibGVcblx0XHRcdGksXG5cblx0XHRcdC8vIHVuY2FjaGVkIHBhcnQgb2YgdGhlIHVybFxuXHRcdFx0dW5jYWNoZWQsXG5cblx0XHRcdC8vIENyZWF0ZSB0aGUgZmluYWwgb3B0aW9ucyBvYmplY3Rcblx0XHRcdHMgPSBqUXVlcnkuYWpheFNldHVwKCB7fSwgb3B0aW9ucyApLFxuXG5cdFx0XHQvLyBDYWxsYmFja3MgY29udGV4dFxuXHRcdFx0Y2FsbGJhY2tDb250ZXh0ID0gcy5jb250ZXh0IHx8IHMsXG5cblx0XHRcdC8vIENvbnRleHQgZm9yIGdsb2JhbCBldmVudHMgaXMgY2FsbGJhY2tDb250ZXh0IGlmIGl0IGlzIGEgRE9NIG5vZGUgb3IgalF1ZXJ5IGNvbGxlY3Rpb25cblx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dCA9IHMuY29udGV4dCAmJlxuXHRcdFx0XHQoIGNhbGxiYWNrQ29udGV4dC5ub2RlVHlwZSB8fCBjYWxsYmFja0NvbnRleHQuanF1ZXJ5ICkgP1xuXHRcdFx0XHRcdGpRdWVyeSggY2FsbGJhY2tDb250ZXh0ICkgOlxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudCxcblxuXHRcdFx0Ly8gRGVmZXJyZWRzXG5cdFx0XHRkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZCA9IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXG5cdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0c3RhdHVzQ29kZSA9IHMuc3RhdHVzQ29kZSB8fCB7fSxcblxuXHRcdFx0Ly8gSGVhZGVycyAodGhleSBhcmUgc2VudCBhbGwgYXQgb25jZSlcblx0XHRcdHJlcXVlc3RIZWFkZXJzID0ge30sXG5cdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXG5cblx0XHRcdC8vIERlZmF1bHQgYWJvcnQgbWVzc2FnZVxuXHRcdFx0c3RyQWJvcnQgPSBcImNhbmNlbGVkXCIsXG5cblx0XHRcdC8vIEZha2UgeGhyXG5cdFx0XHRqcVhIUiA9IHtcblx0XHRcdFx0cmVhZHlTdGF0ZTogMCxcblxuXHRcdFx0XHQvLyBCdWlsZHMgaGVhZGVycyBoYXNodGFibGUgaWYgbmVlZGVkXG5cdFx0XHRcdGdldFJlc3BvbnNlSGVhZGVyOiBmdW5jdGlvbigga2V5ICkge1xuXHRcdFx0XHRcdHZhciBtYXRjaDtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0XHRcdGlmICggIXJlc3BvbnNlSGVhZGVycyApIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzID0ge307XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKCBtYXRjaCA9IHJoZWFkZXJzLmV4ZWMoIHJlc3BvbnNlSGVhZGVyc1N0cmluZyApICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCkgXSA9IG1hdGNoWyAyIF07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG1hdGNoID0gcmVzcG9uc2VIZWFkZXJzWyBrZXkudG9Mb3dlckNhc2UoKSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2ggPT0gbnVsbCA/IG51bGwgOiBtYXRjaDtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBSYXcgc3RyaW5nXG5cdFx0XHRcdGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbXBsZXRlZCA/IHJlc3BvbnNlSGVhZGVyc1N0cmluZyA6IG51bGw7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FjaGVzIHRoZSBoZWFkZXJcblx0XHRcdFx0c2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRuYW1lID0gcmVxdWVzdEhlYWRlcnNOYW1lc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gPVxuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSB8fCBuYW1lO1xuXHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBPdmVycmlkZXMgcmVzcG9uc2UgY29udGVudC10eXBlIGhlYWRlclxuXHRcdFx0XHRvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0cy5taW1lVHlwZSA9IHR5cGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRcdHN0YXR1c0NvZGU6IGZ1bmN0aW9uKCBtYXAgKSB7XG5cdFx0XHRcdFx0dmFyIGNvZGU7XG5cdFx0XHRcdFx0aWYgKCBtYXAgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBFeGVjdXRlIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja3Ncblx0XHRcdFx0XHRcdFx0anFYSFIuYWx3YXlzKCBtYXBbIGpxWEhSLnN0YXR1cyBdICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIExhenktYWRkIHRoZSBuZXcgY2FsbGJhY2tzIGluIGEgd2F5IHRoYXQgcHJlc2VydmVzIG9sZCBvbmVzXG5cdFx0XHRcdFx0XHRcdGZvciAoIGNvZGUgaW4gbWFwICkge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXR1c0NvZGVbIGNvZGUgXSA9IFsgc3RhdHVzQ29kZVsgY29kZSBdLCBtYXBbIGNvZGUgXSBdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhbmNlbCB0aGUgcmVxdWVzdFxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24oIHN0YXR1c1RleHQgKSB7XG5cdFx0XHRcdFx0dmFyIGZpbmFsVGV4dCA9IHN0YXR1c1RleHQgfHwgc3RyQWJvcnQ7XG5cdFx0XHRcdFx0aWYgKCB0cmFuc3BvcnQgKSB7XG5cdFx0XHRcdFx0XHR0cmFuc3BvcnQuYWJvcnQoIGZpbmFsVGV4dCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb25lKCAwLCBmaW5hbFRleHQgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdC8vIEF0dGFjaCBkZWZlcnJlZHNcblx0XHRkZWZlcnJlZC5wcm9taXNlKCBqcVhIUiApO1xuXG5cdFx0Ly8gQWRkIHByb3RvY29sIGlmIG5vdCBwcm92aWRlZCAocHJlZmlsdGVycyBtaWdodCBleHBlY3QgaXQpXG5cdFx0Ly8gSGFuZGxlIGZhbHN5IHVybCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0ICgjMTAwOTM6IGNvbnNpc3RlbmN5IHdpdGggb2xkIHNpZ25hdHVyZSlcblx0XHQvLyBXZSBhbHNvIHVzZSB0aGUgdXJsIHBhcmFtZXRlciBpZiBhdmFpbGFibGVcblx0XHRzLnVybCA9ICggKCB1cmwgfHwgcy51cmwgfHwgbG9jYXRpb24uaHJlZiApICsgXCJcIiApXG5cdFx0XHQucmVwbGFjZSggcnByb3RvY29sLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiApO1xuXG5cdFx0Ly8gQWxpYXMgbWV0aG9kIG9wdGlvbiB0byB0eXBlIGFzIHBlciB0aWNrZXQgIzEyMDA0XG5cdFx0cy50eXBlID0gb3B0aW9ucy5tZXRob2QgfHwgb3B0aW9ucy50eXBlIHx8IHMubWV0aG9kIHx8IHMudHlwZTtcblxuXHRcdC8vIEV4dHJhY3QgZGF0YVR5cGVzIGxpc3Rcblx0XHRzLmRhdGFUeXBlcyA9ICggcy5kYXRhVHlwZSB8fCBcIipcIiApLnRvTG93ZXJDYXNlKCkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblxuXHRcdC8vIEEgY3Jvc3MtZG9tYWluIHJlcXVlc3QgaXMgaW4gb3JkZXIgd2hlbiB0aGUgb3JpZ2luIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgb3JpZ2luLlxuXHRcdGlmICggcy5jcm9zc0RvbWFpbiA9PSBudWxsICkge1xuXHRcdFx0dXJsQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEsIEVkZ2UgMTIgLSAxM1xuXHRcdFx0Ly8gSUUgdGhyb3dzIGV4Y2VwdGlvbiBvbiBhY2Nlc3NpbmcgdGhlIGhyZWYgcHJvcGVydHkgaWYgdXJsIGlzIG1hbGZvcm1lZCxcblx0XHRcdC8vIGUuZy4gaHR0cDovL2V4YW1wbGUuY29tOjgweC9cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gcy51cmw7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEgb25seVxuXHRcdFx0XHQvLyBBbmNob3IncyBob3N0IHByb3BlcnR5IGlzbid0IGNvcnJlY3RseSBzZXQgd2hlbiBzLnVybCBpcyByZWxhdGl2ZVxuXHRcdFx0XHR1cmxBbmNob3IuaHJlZiA9IHVybEFuY2hvci5ocmVmO1xuXHRcdFx0XHRzLmNyb3NzRG9tYWluID0gb3JpZ2luQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgb3JpZ2luQW5jaG9yLmhvc3QgIT09XG5cdFx0XHRcdFx0dXJsQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgdXJsQW5jaG9yLmhvc3Q7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciBwYXJzaW5nIHRoZSBVUkwsIGFzc3VtZSBpdCBpcyBjcm9zc0RvbWFpbixcblx0XHRcdFx0Ly8gaXQgY2FuIGJlIHJlamVjdGVkIGJ5IHRoZSB0cmFuc3BvcnQgaWYgaXQgaXMgaW52YWxpZFxuXHRcdFx0XHRzLmNyb3NzRG9tYWluID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IGRhdGEgaWYgbm90IGFscmVhZHkgYSBzdHJpbmdcblx0XHRpZiAoIHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmIHR5cGVvZiBzLmRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRzLmRhdGEgPSBqUXVlcnkucGFyYW0oIHMuZGF0YSwgcy50cmFkaXRpb25hbCApO1xuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHByZWZpbHRlcnNcblx0XHRpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggcHJlZmlsdGVycywgcywgb3B0aW9ucywganFYSFIgKTtcblxuXHRcdC8vIElmIHJlcXVlc3Qgd2FzIGFib3J0ZWQgaW5zaWRlIGEgcHJlZmlsdGVyLCBzdG9wIHRoZXJlXG5cdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0fVxuXG5cdFx0Ly8gV2UgY2FuIGZpcmUgZ2xvYmFsIGV2ZW50cyBhcyBvZiBub3cgaWYgYXNrZWQgdG9cblx0XHQvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAoIzE1MTE4KVxuXHRcdGZpcmVHbG9iYWxzID0galF1ZXJ5LmV2ZW50ICYmIHMuZ2xvYmFsO1xuXG5cdFx0Ly8gV2F0Y2ggZm9yIGEgbmV3IHNldCBvZiByZXF1ZXN0c1xuXHRcdGlmICggZmlyZUdsb2JhbHMgJiYgalF1ZXJ5LmFjdGl2ZSsrID09PSAwICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheFN0YXJ0XCIgKTtcblx0XHR9XG5cblx0XHQvLyBVcHBlcmNhc2UgdGhlIHR5cGVcblx0XHRzLnR5cGUgPSBzLnR5cGUudG9VcHBlckNhc2UoKTtcblxuXHRcdC8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG5cdFx0cy5oYXNDb250ZW50ID0gIXJub0NvbnRlbnQudGVzdCggcy50eXBlICk7XG5cblx0XHQvLyBTYXZlIHRoZSBVUkwgaW4gY2FzZSB3ZSdyZSB0b3lpbmcgd2l0aCB0aGUgSWYtTW9kaWZpZWQtU2luY2Vcblx0XHQvLyBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIgbGF0ZXIgb25cblx0XHQvLyBSZW1vdmUgaGFzaCB0byBzaW1wbGlmeSB1cmwgbWFuaXB1bGF0aW9uXG5cdFx0Y2FjaGVVUkwgPSBzLnVybC5yZXBsYWNlKCByaGFzaCwgXCJcIiApO1xuXG5cdFx0Ly8gTW9yZSBvcHRpb25zIGhhbmRsaW5nIGZvciByZXF1ZXN0cyB3aXRoIG5vIGNvbnRlbnRcblx0XHRpZiAoICFzLmhhc0NvbnRlbnQgKSB7XG5cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBoYXNoIHNvIHdlIGNhbiBwdXQgaXQgYmFja1xuXHRcdFx0dW5jYWNoZWQgPSBzLnVybC5zbGljZSggY2FjaGVVUkwubGVuZ3RoICk7XG5cblx0XHRcdC8vIElmIGRhdGEgaXMgYXZhaWxhYmxlLCBhcHBlbmQgZGF0YSB0byB1cmxcblx0XHRcdGlmICggcy5kYXRhICkge1xuXHRcdFx0XHRjYWNoZVVSTCArPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgcy5kYXRhO1xuXG5cdFx0XHRcdC8vICM5NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcblx0XHRcdFx0ZGVsZXRlIHMuZGF0YTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIG9yIHVwZGF0ZSBhbnRpLWNhY2hlIHBhcmFtIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCBzLmNhY2hlID09PSBmYWxzZSApIHtcblx0XHRcdFx0Y2FjaGVVUkwgPSBjYWNoZVVSTC5yZXBsYWNlKCByYW50aUNhY2hlLCBcIiQxXCIgKTtcblx0XHRcdFx0dW5jYWNoZWQgPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgXCJfPVwiICsgKCBub25jZSsrICkgKyB1bmNhY2hlZDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUHV0IGhhc2ggYW5kIGFudGktY2FjaGUgb24gdGhlIFVSTCB0aGF0IHdpbGwgYmUgcmVxdWVzdGVkIChnaC0xNzMyKVxuXHRcdFx0cy51cmwgPSBjYWNoZVVSTCArIHVuY2FjaGVkO1xuXG5cdFx0Ly8gQ2hhbmdlICclMjAnIHRvICcrJyBpZiB0aGlzIGlzIGVuY29kZWQgZm9ybSBib2R5IGNvbnRlbnQgKGdoLTI2NTgpXG5cdFx0fSBlbHNlIGlmICggcy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiZcblx0XHRcdCggcy5jb250ZW50VHlwZSB8fCBcIlwiICkuaW5kZXhPZiggXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiApID09PSAwICkge1xuXHRcdFx0cy5kYXRhID0gcy5kYXRhLnJlcGxhY2UoIHIyMCwgXCIrXCIgKTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuXHRcdGlmICggcy5pZk1vZGlmaWVkICkge1xuXHRcdFx0aWYgKCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICkge1xuXHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIklmLU1vZGlmaWVkLVNpbmNlXCIsIGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gKTtcblx0XHRcdH1cblx0XHRcdGlmICggalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gKSB7XG5cdFx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiSWYtTm9uZS1NYXRjaFwiLCBqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgY29ycmVjdCBoZWFkZXIsIGlmIGRhdGEgaXMgYmVpbmcgc2VudFxuXHRcdGlmICggcy5kYXRhICYmIHMuaGFzQ29udGVudCAmJiBzLmNvbnRlbnRUeXBlICE9PSBmYWxzZSB8fCBvcHRpb25zLmNvbnRlbnRUeXBlICkge1xuXHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJDb250ZW50LVR5cGVcIiwgcy5jb250ZW50VHlwZSApO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgQWNjZXB0cyBoZWFkZXIgZm9yIHRoZSBzZXJ2ZXIsIGRlcGVuZGluZyBvbiB0aGUgZGF0YVR5cGVcblx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFxuXHRcdFx0XCJBY2NlcHRcIixcblx0XHRcdHMuZGF0YVR5cGVzWyAwIF0gJiYgcy5hY2NlcHRzWyBzLmRhdGFUeXBlc1sgMCBdIF0gP1xuXHRcdFx0XHRzLmFjY2VwdHNbIHMuZGF0YVR5cGVzWyAwIF0gXSArXG5cdFx0XHRcdFx0KCBzLmRhdGFUeXBlc1sgMCBdICE9PSBcIipcIiA/IFwiLCBcIiArIGFsbFR5cGVzICsgXCI7IHE9MC4wMVwiIDogXCJcIiApIDpcblx0XHRcdFx0cy5hY2NlcHRzWyBcIipcIiBdXG5cdFx0KTtcblxuXHRcdC8vIENoZWNrIGZvciBoZWFkZXJzIG9wdGlvblxuXHRcdGZvciAoIGkgaW4gcy5oZWFkZXJzICkge1xuXHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggaSwgcy5oZWFkZXJzWyBpIF0gKTtcblx0XHR9XG5cblx0XHQvLyBBbGxvdyBjdXN0b20gaGVhZGVycy9taW1ldHlwZXMgYW5kIGVhcmx5IGFib3J0XG5cdFx0aWYgKCBzLmJlZm9yZVNlbmQgJiZcblx0XHRcdCggcy5iZWZvcmVTZW5kLmNhbGwoIGNhbGxiYWNrQ29udGV4dCwganFYSFIsIHMgKSA9PT0gZmFsc2UgfHwgY29tcGxldGVkICkgKSB7XG5cblx0XHRcdC8vIEFib3J0IGlmIG5vdCBkb25lIGFscmVhZHkgYW5kIHJldHVyblxuXHRcdFx0cmV0dXJuIGpxWEhSLmFib3J0KCk7XG5cdFx0fVxuXG5cdFx0Ly8gQWJvcnRpbmcgaXMgbm8gbG9uZ2VyIGEgY2FuY2VsbGF0aW9uXG5cdFx0c3RyQWJvcnQgPSBcImFib3J0XCI7XG5cblx0XHQvLyBJbnN0YWxsIGNhbGxiYWNrcyBvbiBkZWZlcnJlZHNcblx0XHRjb21wbGV0ZURlZmVycmVkLmFkZCggcy5jb21wbGV0ZSApO1xuXHRcdGpxWEhSLmRvbmUoIHMuc3VjY2VzcyApO1xuXHRcdGpxWEhSLmZhaWwoIHMuZXJyb3IgKTtcblxuXHRcdC8vIEdldCB0cmFuc3BvcnRcblx0XHR0cmFuc3BvcnQgPSBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggdHJhbnNwb3J0cywgcywgb3B0aW9ucywganFYSFIgKTtcblxuXHRcdC8vIElmIG5vIHRyYW5zcG9ydCwgd2UgYXV0by1hYm9ydFxuXHRcdGlmICggIXRyYW5zcG9ydCApIHtcblx0XHRcdGRvbmUoIC0xLCBcIk5vIFRyYW5zcG9ydFwiICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGpxWEhSLnJlYWR5U3RhdGUgPSAxO1xuXG5cdFx0XHQvLyBTZW5kIGdsb2JhbCBldmVudFxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheFNlbmRcIiwgWyBqcVhIUiwgcyBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHJlcXVlc3Qgd2FzIGFib3J0ZWQgaW5zaWRlIGFqYXhTZW5kLCBzdG9wIHRoZXJlXG5cdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0cmV0dXJuIGpxWEhSO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaW1lb3V0XG5cdFx0XHRpZiAoIHMuYXN5bmMgJiYgcy50aW1lb3V0ID4gMCApIHtcblx0XHRcdFx0dGltZW91dFRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGpxWEhSLmFib3J0KCBcInRpbWVvdXRcIiApO1xuXHRcdFx0XHR9LCBzLnRpbWVvdXQgKTtcblx0XHRcdH1cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29tcGxldGVkID0gZmFsc2U7XG5cdFx0XHRcdHRyYW5zcG9ydC5zZW5kKCByZXF1ZXN0SGVhZGVycywgZG9uZSApO1xuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0Ly8gUmV0aHJvdyBwb3N0LWNvbXBsZXRpb24gZXhjZXB0aW9uc1xuXHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvcGFnYXRlIG90aGVycyBhcyByZXN1bHRzXG5cdFx0XHRcdGRvbmUoIC0xLCBlICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbGJhY2sgZm9yIHdoZW4gZXZlcnl0aGluZyBpcyBkb25lXG5cdFx0ZnVuY3Rpb24gZG9uZSggc3RhdHVzLCBuYXRpdmVTdGF0dXNUZXh0LCByZXNwb25zZXMsIGhlYWRlcnMgKSB7XG5cdFx0XHR2YXIgaXNTdWNjZXNzLCBzdWNjZXNzLCBlcnJvciwgcmVzcG9uc2UsIG1vZGlmaWVkLFxuXHRcdFx0XHRzdGF0dXNUZXh0ID0gbmF0aXZlU3RhdHVzVGV4dDtcblxuXHRcdFx0Ly8gSWdub3JlIHJlcGVhdCBpbnZvY2F0aW9uc1xuXHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29tcGxldGVkID0gdHJ1ZTtcblxuXHRcdFx0Ly8gQ2xlYXIgdGltZW91dCBpZiBpdCBleGlzdHNcblx0XHRcdGlmICggdGltZW91dFRpbWVyICkge1xuXHRcdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KCB0aW1lb3V0VGltZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGVyZWZlcmVuY2UgdHJhbnNwb3J0IGZvciBlYXJseSBnYXJiYWdlIGNvbGxlY3Rpb25cblx0XHRcdC8vIChubyBtYXR0ZXIgaG93IGxvbmcgdGhlIGpxWEhSIG9iamVjdCB3aWxsIGJlIHVzZWQpXG5cdFx0XHR0cmFuc3BvcnQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdC8vIENhY2hlIHJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyA9IGhlYWRlcnMgfHwgXCJcIjtcblxuXHRcdFx0Ly8gU2V0IHJlYWR5U3RhdGVcblx0XHRcdGpxWEhSLnJlYWR5U3RhdGUgPSBzdGF0dXMgPiAwID8gNCA6IDA7XG5cblx0XHRcdC8vIERldGVybWluZSBpZiBzdWNjZXNzZnVsXG5cdFx0XHRpc1N1Y2Nlc3MgPSBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCB8fCBzdGF0dXMgPT09IDMwNDtcblxuXHRcdFx0Ly8gR2V0IHJlc3BvbnNlIGRhdGFcblx0XHRcdGlmICggcmVzcG9uc2VzICkge1xuXHRcdFx0XHRyZXNwb25zZSA9IGFqYXhIYW5kbGVSZXNwb25zZXMoIHMsIGpxWEhSLCByZXNwb25zZXMgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udmVydCBubyBtYXR0ZXIgd2hhdCAodGhhdCB3YXkgcmVzcG9uc2VYWFggZmllbGRzIGFyZSBhbHdheXMgc2V0KVxuXHRcdFx0cmVzcG9uc2UgPSBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKTtcblxuXHRcdFx0Ly8gSWYgc3VjY2Vzc2Z1bCwgaGFuZGxlIHR5cGUgY2hhaW5pbmdcblx0XHRcdGlmICggaXNTdWNjZXNzICkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0XHRcdGlmICggcy5pZk1vZGlmaWVkICkge1xuXHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiTGFzdC1Nb2RpZmllZFwiICk7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJldGFnXCIgKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiBubyBjb250ZW50XG5cdFx0XHRcdGlmICggc3RhdHVzID09PSAyMDQgfHwgcy50eXBlID09PSBcIkhFQURcIiApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJub2NvbnRlbnRcIjtcblxuXHRcdFx0XHQvLyBpZiBub3QgbW9kaWZpZWRcblx0XHRcdFx0fSBlbHNlIGlmICggc3RhdHVzID09PSAzMDQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm90bW9kaWZpZWRcIjtcblxuXHRcdFx0XHQvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdGU7XG5cdFx0XHRcdFx0c3VjY2VzcyA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRcdFx0ZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcblx0XHRcdFx0XHRpc1N1Y2Nlc3MgPSAhZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gRXh0cmFjdCBlcnJvciBmcm9tIHN0YXR1c1RleHQgYW5kIG5vcm1hbGl6ZSBmb3Igbm9uLWFib3J0c1xuXHRcdFx0XHRlcnJvciA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdGlmICggc3RhdHVzIHx8ICFzdGF0dXNUZXh0ICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcImVycm9yXCI7XG5cdFx0XHRcdFx0aWYgKCBzdGF0dXMgPCAwICkge1xuXHRcdFx0XHRcdFx0c3RhdHVzID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IGRhdGEgZm9yIHRoZSBmYWtlIHhociBvYmplY3Rcblx0XHRcdGpxWEhSLnN0YXR1cyA9IHN0YXR1cztcblx0XHRcdGpxWEhSLnN0YXR1c1RleHQgPSAoIG5hdGl2ZVN0YXR1c1RleHQgfHwgc3RhdHVzVGV4dCApICsgXCJcIjtcblxuXHRcdFx0Ly8gU3VjY2Vzcy9FcnJvclxuXHRcdFx0aWYgKCBpc1N1Y2Nlc3MgKSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsgc3VjY2Vzcywgc3RhdHVzVGV4dCwganFYSFIgXSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0LCBlcnJvciBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRqcVhIUi5zdGF0dXNDb2RlKCBzdGF0dXNDb2RlICk7XG5cdFx0XHRzdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggaXNTdWNjZXNzID8gXCJhamF4U3VjY2Vzc1wiIDogXCJhamF4RXJyb3JcIixcblx0XHRcdFx0XHRbIGpxWEhSLCBzLCBpc1N1Y2Nlc3MgPyBzdWNjZXNzIDogZXJyb3IgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb21wbGV0ZVxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZC5maXJlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0IF0gKTtcblxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheENvbXBsZXRlXCIsIFsganFYSFIsIHMgXSApO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSB0aGUgZ2xvYmFsIEFKQVggY291bnRlclxuXHRcdFx0XHRpZiAoICEoIC0talF1ZXJ5LmFjdGl2ZSApICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdG9wXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBqcVhIUjtcblx0fSxcblxuXHRnZXRKU09OOiBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCBkYXRhLCBjYWxsYmFjaywgXCJqc29uXCIgKTtcblx0fSxcblxuXHRnZXRTY3JpcHQ6IGZ1bmN0aW9uKCB1cmwsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ2V0KCB1cmwsIHVuZGVmaW5lZCwgY2FsbGJhY2ssIFwic2NyaXB0XCIgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcImdldFwiLCBcInBvc3RcIiBdLCBmdW5jdGlvbiggaSwgbWV0aG9kICkge1xuXHRqUXVlcnlbIG1ldGhvZCBdID0gZnVuY3Rpb24oIHVybCwgZGF0YSwgY2FsbGJhY2ssIHR5cGUgKSB7XG5cblx0XHQvLyBTaGlmdCBhcmd1bWVudHMgaWYgZGF0YSBhcmd1bWVudCB3YXMgb21pdHRlZFxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGRhdGEgKSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IGNhbGxiYWNrO1xuXHRcdFx0Y2FsbGJhY2sgPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBUaGUgdXJsIGNhbiBiZSBhbiBvcHRpb25zIG9iamVjdCAod2hpY2ggdGhlbiBtdXN0IGhhdmUgLnVybClcblx0XHRyZXR1cm4galF1ZXJ5LmFqYXgoIGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0dHlwZTogbWV0aG9kLFxuXHRcdFx0ZGF0YVR5cGU6IHR5cGUsXG5cdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0c3VjY2VzczogY2FsbGJhY2tcblx0XHR9LCBqUXVlcnkuaXNQbGFpbk9iamVjdCggdXJsICkgJiYgdXJsICkgKTtcblx0fTtcbn0gKTtcblxuXG5qUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiggdXJsICkge1xuXHRyZXR1cm4galF1ZXJ5LmFqYXgoIHtcblx0XHR1cmw6IHVybCxcblxuXHRcdC8vIE1ha2UgdGhpcyBleHBsaWNpdCwgc2luY2UgdXNlciBjYW4gb3ZlcnJpZGUgdGhpcyB0aHJvdWdoIGFqYXhTZXR1cCAoIzExMjY0KVxuXHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0ZGF0YVR5cGU6IFwic2NyaXB0XCIsXG5cdFx0Y2FjaGU6IHRydWUsXG5cdFx0YXN5bmM6IGZhbHNlLFxuXHRcdGdsb2JhbDogZmFsc2UsXG5cdFx0XCJ0aHJvd3NcIjogdHJ1ZVxuXHR9ICk7XG59O1xuXG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0d3JhcEFsbDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIHdyYXA7XG5cblx0XHRpZiAoIHRoaXNbIDAgXSApIHtcblx0XHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGh0bWwgKSApIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwuY2FsbCggdGhpc1sgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRoZSBlbGVtZW50cyB0byB3cmFwIHRoZSB0YXJnZXQgYXJvdW5kXG5cdFx0XHR3cmFwID0galF1ZXJ5KCBodG1sLCB0aGlzWyAwIF0ub3duZXJEb2N1bWVudCApLmVxKCAwICkuY2xvbmUoIHRydWUgKTtcblxuXHRcdFx0aWYgKCB0aGlzWyAwIF0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0d3JhcC5pbnNlcnRCZWZvcmUoIHRoaXNbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHR3cmFwLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gdGhpcztcblxuXHRcdFx0XHR3aGlsZSAoIGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQgKSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZWxlbTtcblx0XHRcdH0gKS5hcHBlbmQoIHRoaXMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR3cmFwSW5uZXI6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGh0bWwgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwSW5uZXIoIGh0bWwuY2FsbCggdGhpcywgaSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGpRdWVyeSggdGhpcyApLFxuXHRcdFx0XHRjb250ZW50cyA9IHNlbGYuY29udGVudHMoKTtcblxuXHRcdFx0aWYgKCBjb250ZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRlbnRzLndyYXBBbGwoIGh0bWwgKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5hcHBlbmQoIGh0bWwgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0d3JhcDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIGlzRnVuY3Rpb24gPSBqUXVlcnkuaXNGdW5jdGlvbiggaHRtbCApO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwQWxsKCBpc0Z1bmN0aW9uID8gaHRtbC5jYWxsKCB0aGlzLCBpICkgOiBodG1sICk7XG5cdFx0fSApO1xuXHR9LFxuXG5cdHVud3JhcDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHRoaXMucGFyZW50KCBzZWxlY3RvciApLm5vdCggXCJib2R5XCIgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnJlcGxhY2VXaXRoKCB0aGlzLmNoaWxkTm9kZXMgKTtcblx0XHR9ICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmhpZGRlbiA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4gIWpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSggZWxlbSApO1xufTtcbmpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4gISEoIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApO1xufTtcblxuXG5cblxualF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIgPSBmdW5jdGlvbigpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuXHR9IGNhdGNoICggZSApIHt9XG59O1xuXG52YXIgeGhyU3VjY2Vzc1N0YXR1cyA9IHtcblxuXHRcdC8vIEZpbGUgcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgY29kZSAwLCBhc3N1bWUgMjAwXG5cdFx0MDogMjAwLFxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHQvLyAjMTQ1MDogc29tZXRpbWVzIElFIHJldHVybnMgMTIyMyB3aGVuIGl0IHNob3VsZCBiZSAyMDRcblx0XHQxMjIzOiAyMDRcblx0fSxcblx0eGhyU3VwcG9ydGVkID0galF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIoKTtcblxuc3VwcG9ydC5jb3JzID0gISF4aHJTdXBwb3J0ZWQgJiYgKCBcIndpdGhDcmVkZW50aWFsc1wiIGluIHhoclN1cHBvcnRlZCApO1xuc3VwcG9ydC5hamF4ID0geGhyU3VwcG9ydGVkID0gISF4aHJTdXBwb3J0ZWQ7XG5cbmpRdWVyeS5hamF4VHJhbnNwb3J0KCBmdW5jdGlvbiggb3B0aW9ucyApIHtcblx0dmFyIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrO1xuXG5cdC8vIENyb3NzIGRvbWFpbiBvbmx5IGFsbG93ZWQgaWYgc3VwcG9ydGVkIHRocm91Z2ggWE1MSHR0cFJlcXVlc3Rcblx0aWYgKCBzdXBwb3J0LmNvcnMgfHwgeGhyU3VwcG9ydGVkICYmICFvcHRpb25zLmNyb3NzRG9tYWluICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZW5kOiBmdW5jdGlvbiggaGVhZGVycywgY29tcGxldGUgKSB7XG5cdFx0XHRcdHZhciBpLFxuXHRcdFx0XHRcdHhociA9IG9wdGlvbnMueGhyKCk7XG5cblx0XHRcdFx0eGhyLm9wZW4oXG5cdFx0XHRcdFx0b3B0aW9ucy50eXBlLFxuXHRcdFx0XHRcdG9wdGlvbnMudXJsLFxuXHRcdFx0XHRcdG9wdGlvbnMuYXN5bmMsXG5cdFx0XHRcdFx0b3B0aW9ucy51c2VybmFtZSxcblx0XHRcdFx0XHRvcHRpb25zLnBhc3N3b3JkXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gQXBwbHkgY3VzdG9tIGZpZWxkcyBpZiBwcm92aWRlZFxuXHRcdFx0XHRpZiAoIG9wdGlvbnMueGhyRmllbGRzICkge1xuXHRcdFx0XHRcdGZvciAoIGkgaW4gb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdFx0XHR4aHJbIGkgXSA9IG9wdGlvbnMueGhyRmllbGRzWyBpIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gT3ZlcnJpZGUgbWltZSB0eXBlIGlmIG5lZWRlZFxuXHRcdFx0XHRpZiAoIG9wdGlvbnMubWltZVR5cGUgJiYgeGhyLm92ZXJyaWRlTWltZVR5cGUgKSB7XG5cdFx0XHRcdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUoIG9wdGlvbnMubWltZVR5cGUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFgtUmVxdWVzdGVkLVdpdGggaGVhZGVyXG5cdFx0XHRcdC8vIEZvciBjcm9zcy1kb21haW4gcmVxdWVzdHMsIHNlZWluZyBhcyBjb25kaXRpb25zIGZvciBhIHByZWZsaWdodCBhcmVcblx0XHRcdFx0Ly8gYWtpbiB0byBhIGppZ3NhdyBwdXp6bGUsIHdlIHNpbXBseSBuZXZlciBzZXQgaXQgdG8gYmUgc3VyZS5cblx0XHRcdFx0Ly8gKGl0IGNhbiBhbHdheXMgYmUgc2V0IG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgb3IgZXZlbiB1c2luZyBhamF4U2V0dXApXG5cdFx0XHRcdC8vIEZvciBzYW1lLWRvbWFpbiByZXF1ZXN0cywgd29uJ3QgY2hhbmdlIGhlYWRlciBpZiBhbHJlYWR5IHByb3ZpZGVkLlxuXHRcdFx0XHRpZiAoICFvcHRpb25zLmNyb3NzRG9tYWluICYmICFoZWFkZXJzWyBcIlgtUmVxdWVzdGVkLVdpdGhcIiBdICkge1xuXHRcdFx0XHRcdGhlYWRlcnNbIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiIF0gPSBcIlhNTEh0dHBSZXF1ZXN0XCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTZXQgaGVhZGVyc1xuXHRcdFx0XHRmb3IgKCBpIGluIGhlYWRlcnMgKSB7XG5cdFx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoIGksIGhlYWRlcnNbIGkgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2FsbGJhY2tcblx0XHRcdFx0Y2FsbGJhY2sgPSBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayA9IGVycm9yQ2FsbGJhY2sgPSB4aHIub25sb2FkID1cblx0XHRcdFx0XHRcdFx0XHR4aHIub25lcnJvciA9IHhoci5vbmFib3J0ID0geGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0eXBlID09PSBcImFib3J0XCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0eGhyLmFib3J0KCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGUgPT09IFwiZXJyb3JcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0Ly8gT24gYSBtYW51YWwgbmF0aXZlIGFib3J0LCBJRTkgdGhyb3dzXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXJyb3JzIG9uIGFueSBwcm9wZXJ0eSBhY2Nlc3MgdGhhdCBpcyBub3QgcmVhZHlTdGF0ZVxuXHRcdFx0XHRcdFx0XHRcdGlmICggdHlwZW9mIHhoci5zdGF0dXMgIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggMCwgXCJlcnJvclwiICk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEZpbGU6IHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIDA7IHNlZSAjODYwNSwgIzE0MjA3XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXNUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZShcblx0XHRcdFx0XHRcdFx0XHRcdHhoclN1Y2Nlc3NTdGF0dXNbIHhoci5zdGF0dXMgXSB8fCB4aHIuc3RhdHVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHQsXG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBJRTkgaGFzIG5vIFhIUjIgYnV0IHRocm93cyBvbiBiaW5hcnkgKHRyYWMtMTE0MjYpXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBGb3IgWEhSMiBub24tdGV4dCwgbGV0IHRoZSBjYWxsZXIgaGFuZGxlIGl0IChnaC0yNDk4KVxuXHRcdFx0XHRcdFx0XHRcdFx0KCB4aHIucmVzcG9uc2VUeXBlIHx8IFwidGV4dFwiICkgIT09IFwidGV4dFwiICB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHhoci5yZXNwb25zZVRleHQgIT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGJpbmFyeTogeGhyLnJlc3BvbnNlIH0gOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHRleHQ6IHhoci5yZXNwb25zZVRleHQgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vIExpc3RlbiB0byBldmVudHNcblx0XHRcdFx0eGhyLm9ubG9hZCA9IGNhbGxiYWNrKCk7XG5cdFx0XHRcdGVycm9yQ2FsbGJhY2sgPSB4aHIub25lcnJvciA9IGNhbGxiYWNrKCBcImVycm9yXCIgKTtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHRcdFx0Ly8gVXNlIG9ucmVhZHlzdGF0ZWNoYW5nZSB0byByZXBsYWNlIG9uYWJvcnRcblx0XHRcdFx0Ly8gdG8gaGFuZGxlIHVuY2F1Z2h0IGFib3J0c1xuXHRcdFx0XHRpZiAoIHhoci5vbmFib3J0ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0eGhyLm9uYWJvcnQgPSBlcnJvckNhbGxiYWNrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgcmVhZHlTdGF0ZSBiZWZvcmUgdGltZW91dCBhcyBpdCBjaGFuZ2VzXG5cdFx0XHRcdFx0XHRpZiAoIHhoci5yZWFkeVN0YXRlID09PSA0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEFsbG93IG9uZXJyb3IgdG8gYmUgY2FsbGVkIGZpcnN0LFxuXHRcdFx0XHRcdFx0XHQvLyBidXQgdGhhdCB3aWxsIG5vdCBoYW5kbGUgYSBuYXRpdmUgYWJvcnRcblx0XHRcdFx0XHRcdFx0Ly8gQWxzbywgc2F2ZSBlcnJvckNhbGxiYWNrIHRvIGEgdmFyaWFibGVcblx0XHRcdFx0XHRcdFx0Ly8gYXMgeGhyLm9uZXJyb3IgY2Fubm90IGJlIGFjY2Vzc2VkXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JDYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgdGhlIGFib3J0IGNhbGxiYWNrXG5cdFx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2soIFwiYWJvcnRcIiApO1xuXG5cdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHQvLyBEbyBzZW5kIHRoZSByZXF1ZXN0ICh0aGlzIG1heSByYWlzZSBhbiBleGNlcHRpb24pXG5cdFx0XHRcdFx0eGhyLnNlbmQoIG9wdGlvbnMuaGFzQ29udGVudCAmJiBvcHRpb25zLmRhdGEgfHwgbnVsbCApO1xuXHRcdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRcdC8vICMxNDY4MzogT25seSByZXRocm93IGlmIHRoaXMgaGFzbid0IGJlZW4gbm90aWZpZWQgYXMgYW4gZXJyb3IgeWV0XG5cdFx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRhYm9ydDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn0gKTtcblxuXG5cblxuLy8gUHJldmVudCBhdXRvLWV4ZWN1dGlvbiBvZiBzY3JpcHRzIHdoZW4gbm8gZXhwbGljaXQgZGF0YVR5cGUgd2FzIHByb3ZpZGVkIChTZWUgZ2gtMjQzMilcbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBmdW5jdGlvbiggcyApIHtcblx0aWYgKCBzLmNyb3NzRG9tYWluICkge1xuXHRcdHMuY29udGVudHMuc2NyaXB0ID0gZmFsc2U7XG5cdH1cbn0gKTtcblxuLy8gSW5zdGFsbCBzY3JpcHQgZGF0YVR5cGVcbmpRdWVyeS5hamF4U2V0dXAoIHtcblx0YWNjZXB0czoge1xuXHRcdHNjcmlwdDogXCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIFwiICtcblx0XHRcdFwiYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJcblx0fSxcblx0Y29udGVudHM6IHtcblx0XHRzY3JpcHQ6IC9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL1xuXHR9LFxuXHRjb252ZXJ0ZXJzOiB7XG5cdFx0XCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRcdGpRdWVyeS5nbG9iYWxFdmFsKCB0ZXh0ICk7XG5cdFx0XHRyZXR1cm4gdGV4dDtcblx0XHR9XG5cdH1cbn0gKTtcblxuLy8gSGFuZGxlIGNhY2hlJ3Mgc3BlY2lhbCBjYXNlIGFuZCBjcm9zc0RvbWFpblxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIFwic2NyaXB0XCIsIGZ1bmN0aW9uKCBzICkge1xuXHRpZiAoIHMuY2FjaGUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRzLmNhY2hlID0gZmFsc2U7XG5cdH1cblx0aWYgKCBzLmNyb3NzRG9tYWluICkge1xuXHRcdHMudHlwZSA9IFwiR0VUXCI7XG5cdH1cbn0gKTtcblxuLy8gQmluZCBzY3JpcHQgdGFnIGhhY2sgdHJhbnNwb3J0XG5qUXVlcnkuYWpheFRyYW5zcG9ydCggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cblx0Ly8gVGhpcyB0cmFuc3BvcnQgb25seSBkZWFscyB3aXRoIGNyb3NzIGRvbWFpbiByZXF1ZXN0c1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0dmFyIHNjcmlwdCwgY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbmQ6IGZ1bmN0aW9uKCBfLCBjb21wbGV0ZSApIHtcblx0XHRcdFx0c2NyaXB0ID0galF1ZXJ5KCBcIjxzY3JpcHQ+XCIgKS5wcm9wKCB7XG5cdFx0XHRcdFx0Y2hhcnNldDogcy5zY3JpcHRDaGFyc2V0LFxuXHRcdFx0XHRcdHNyYzogcy51cmxcblx0XHRcdFx0fSApLm9uKFxuXHRcdFx0XHRcdFwibG9hZCBlcnJvclwiLFxuXHRcdFx0XHRcdGNhbGxiYWNrID0gZnVuY3Rpb24oIGV2dCApIHtcblx0XHRcdFx0XHRcdHNjcmlwdC5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmICggZXZ0ICkge1xuXHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggZXZ0LnR5cGUgPT09IFwiZXJyb3JcIiA/IDQwNCA6IDIwMCwgZXZ0LnR5cGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gVXNlIG5hdGl2ZSBET00gbWFuaXB1bGF0aW9uIHRvIGF2b2lkIG91ciBkb21NYW5pcCBBSkFYIHRyaWNrZXJ5XG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHNjcmlwdFsgMCBdICk7XG5cdFx0XHR9LFxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBvbGRDYWxsYmFja3MgPSBbXSxcblx0cmpzb25wID0gLyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztcblxuLy8gRGVmYXVsdCBqc29ucCBzZXR0aW5nc1xualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRqc29ucDogXCJjYWxsYmFja1wiLFxuXHRqc29ucENhbGxiYWNrOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY2FsbGJhY2sgPSBvbGRDYWxsYmFja3MucG9wKCkgfHwgKCBqUXVlcnkuZXhwYW5kbyArIFwiX1wiICsgKCBub25jZSsrICkgKTtcblx0XHR0aGlzWyBjYWxsYmFjayBdID0gdHJ1ZTtcblx0XHRyZXR1cm4gY2FsbGJhY2s7XG5cdH1cbn0gKTtcblxuLy8gRGV0ZWN0LCBub3JtYWxpemUgb3B0aW9ucyBhbmQgaW5zdGFsbCBjYWxsYmFja3MgZm9yIGpzb25wIHJlcXVlc3RzXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJqc29uIGpzb25wXCIsIGZ1bmN0aW9uKCBzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUiApIHtcblxuXHR2YXIgY2FsbGJhY2tOYW1lLCBvdmVyd3JpdHRlbiwgcmVzcG9uc2VDb250YWluZXIsXG5cdFx0anNvblByb3AgPSBzLmpzb25wICE9PSBmYWxzZSAmJiAoIHJqc29ucC50ZXN0KCBzLnVybCApID9cblx0XHRcdFwidXJsXCIgOlxuXHRcdFx0dHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApXG5cdFx0XHRcdFx0LmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCAmJlxuXHRcdFx0XHRyanNvbnAudGVzdCggcy5kYXRhICkgJiYgXCJkYXRhXCJcblx0XHQpO1xuXG5cdC8vIEhhbmRsZSBpZmYgdGhlIGV4cGVjdGVkIGRhdGEgdHlwZSBpcyBcImpzb25wXCIgb3Igd2UgaGF2ZSBhIHBhcmFtZXRlciB0byBzZXRcblx0aWYgKCBqc29uUHJvcCB8fCBzLmRhdGFUeXBlc1sgMCBdID09PSBcImpzb25wXCIgKSB7XG5cblx0XHQvLyBHZXQgY2FsbGJhY2sgbmFtZSwgcmVtZW1iZXJpbmcgcHJlZXhpc3RpbmcgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGl0XG5cdFx0Y2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0galF1ZXJ5LmlzRnVuY3Rpb24oIHMuanNvbnBDYWxsYmFjayApID9cblx0XHRcdHMuanNvbnBDYWxsYmFjaygpIDpcblx0XHRcdHMuanNvbnBDYWxsYmFjaztcblxuXHRcdC8vIEluc2VydCBjYWxsYmFjayBpbnRvIHVybCBvciBmb3JtIGRhdGFcblx0XHRpZiAoIGpzb25Qcm9wICkge1xuXHRcdFx0c1sganNvblByb3AgXSA9IHNbIGpzb25Qcm9wIF0ucmVwbGFjZSggcmpzb25wLCBcIiQxXCIgKyBjYWxsYmFja05hbWUgKTtcblx0XHR9IGVsc2UgaWYgKCBzLmpzb25wICE9PSBmYWxzZSApIHtcblx0XHRcdHMudXJsICs9ICggcnF1ZXJ5LnRlc3QoIHMudXJsICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmpzb25wICsgXCI9XCIgKyBjYWxsYmFja05hbWU7XG5cdFx0fVxuXG5cdFx0Ly8gVXNlIGRhdGEgY29udmVydGVyIHRvIHJldHJpZXZlIGpzb24gYWZ0ZXIgc2NyaXB0IGV4ZWN1dGlvblxuXHRcdHMuY29udmVydGVyc1sgXCJzY3JpcHQganNvblwiIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggIXJlc3BvbnNlQ29udGFpbmVyICkge1xuXHRcdFx0XHRqUXVlcnkuZXJyb3IoIGNhbGxiYWNrTmFtZSArIFwiIHdhcyBub3QgY2FsbGVkXCIgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNwb25zZUNvbnRhaW5lclsgMCBdO1xuXHRcdH07XG5cblx0XHQvLyBGb3JjZSBqc29uIGRhdGFUeXBlXG5cdFx0cy5kYXRhVHlwZXNbIDAgXSA9IFwianNvblwiO1xuXG5cdFx0Ly8gSW5zdGFsbCBjYWxsYmFja1xuXHRcdG92ZXJ3cml0dGVuID0gd2luZG93WyBjYWxsYmFja05hbWUgXTtcblx0XHR3aW5kb3dbIGNhbGxiYWNrTmFtZSBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IGFyZ3VtZW50cztcblx0XHR9O1xuXG5cdFx0Ly8gQ2xlYW4tdXAgZnVuY3Rpb24gKGZpcmVzIGFmdGVyIGNvbnZlcnRlcnMpXG5cdFx0anFYSFIuYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gSWYgcHJldmlvdXMgdmFsdWUgZGlkbid0IGV4aXN0IC0gcmVtb3ZlIGl0XG5cdFx0XHRpZiAoIG92ZXJ3cml0dGVuID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGpRdWVyeSggd2luZG93ICkucmVtb3ZlUHJvcCggY2FsbGJhY2tOYW1lICk7XG5cblx0XHRcdC8vIE90aGVyd2lzZSByZXN0b3JlIHByZWV4aXN0aW5nIHZhbHVlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3dbIGNhbGxiYWNrTmFtZSBdID0gb3ZlcndyaXR0ZW47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNhdmUgYmFjayBhcyBmcmVlXG5cdFx0XHRpZiAoIHNbIGNhbGxiYWNrTmFtZSBdICkge1xuXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHJlLXVzaW5nIHRoZSBvcHRpb25zIGRvZXNuJ3Qgc2NyZXcgdGhpbmdzIGFyb3VuZFxuXHRcdFx0XHRzLmpzb25wQ2FsbGJhY2sgPSBvcmlnaW5hbFNldHRpbmdzLmpzb25wQ2FsbGJhY2s7XG5cblx0XHRcdFx0Ly8gU2F2ZSB0aGUgY2FsbGJhY2sgbmFtZSBmb3IgZnV0dXJlIHVzZVxuXHRcdFx0XHRvbGRDYWxsYmFja3MucHVzaCggY2FsbGJhY2tOYW1lICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbGwgaWYgaXQgd2FzIGEgZnVuY3Rpb24gYW5kIHdlIGhhdmUgYSByZXNwb25zZVxuXHRcdFx0aWYgKCByZXNwb25zZUNvbnRhaW5lciAmJiBqUXVlcnkuaXNGdW5jdGlvbiggb3ZlcndyaXR0ZW4gKSApIHtcblx0XHRcdFx0b3ZlcndyaXR0ZW4oIHJlc3BvbnNlQ29udGFpbmVyWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzcG9uc2VDb250YWluZXIgPSBvdmVyd3JpdHRlbiA9IHVuZGVmaW5lZDtcblx0XHR9ICk7XG5cblx0XHQvLyBEZWxlZ2F0ZSB0byBzY3JpcHRcblx0XHRyZXR1cm4gXCJzY3JpcHRcIjtcblx0fVxufSApO1xuXG5cblxuXG4vLyBTdXBwb3J0OiBTYWZhcmkgOCBvbmx5XG4vLyBJbiBTYWZhcmkgOCBkb2N1bWVudHMgY3JlYXRlZCB2aWEgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50XG4vLyBjb2xsYXBzZSBzaWJsaW5nIGZvcm1zOiB0aGUgc2Vjb25kIG9uZSBiZWNvbWVzIGEgY2hpbGQgb2YgdGhlIGZpcnN0IG9uZS5cbi8vIEJlY2F1c2Ugb2YgdGhhdCwgdGhpcyBzZWN1cml0eSBtZWFzdXJlIGhhcyB0byBiZSBkaXNhYmxlZCBpbiBTYWZhcmkgOC5cbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzczMzdcbnN1cHBvcnQuY3JlYXRlSFRNTERvY3VtZW50ID0gKCBmdW5jdGlvbigpIHtcblx0dmFyIGJvZHkgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoIFwiXCIgKS5ib2R5O1xuXHRib2R5LmlubmVySFRNTCA9IFwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIjtcblx0cmV0dXJuIGJvZHkuY2hpbGROb2Rlcy5sZW5ndGggPT09IDI7XG59ICkoKTtcblxuXG4vLyBBcmd1bWVudCBcImRhdGFcIiBzaG91bGQgYmUgc3RyaW5nIG9mIGh0bWxcbi8vIGNvbnRleHQgKG9wdGlvbmFsKTogSWYgc3BlY2lmaWVkLCB0aGUgZnJhZ21lbnQgd2lsbCBiZSBjcmVhdGVkIGluIHRoaXMgY29udGV4dCxcbi8vIGRlZmF1bHRzIHRvIGRvY3VtZW50XG4vLyBrZWVwU2NyaXB0cyAob3B0aW9uYWwpOiBJZiB0cnVlLCB3aWxsIGluY2x1ZGUgc2NyaXB0cyBwYXNzZWQgaW4gdGhlIGh0bWwgc3RyaW5nXG5qUXVlcnkucGFyc2VIVE1MID0gZnVuY3Rpb24oIGRhdGEsIGNvbnRleHQsIGtlZXBTY3JpcHRzICkge1xuXHRpZiAoIHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRrZWVwU2NyaXB0cyA9IGNvbnRleHQ7XG5cdFx0Y29udGV4dCA9IGZhbHNlO1xuXHR9XG5cblx0dmFyIGJhc2UsIHBhcnNlZCwgc2NyaXB0cztcblxuXHRpZiAoICFjb250ZXh0ICkge1xuXG5cdFx0Ly8gU3RvcCBzY3JpcHRzIG9yIGlubGluZSBldmVudCBoYW5kbGVycyBmcm9tIGJlaW5nIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG5cdFx0Ly8gYnkgdXNpbmcgZG9jdW1lbnQuaW1wbGVtZW50YXRpb25cblx0XHRpZiAoIHN1cHBvcnQuY3JlYXRlSFRNTERvY3VtZW50ICkge1xuXHRcdFx0Y29udGV4dCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCggXCJcIiApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIGJhc2UgaHJlZiBmb3IgdGhlIGNyZWF0ZWQgZG9jdW1lbnRcblx0XHRcdC8vIHNvIGFueSBwYXJzZWQgZWxlbWVudHMgd2l0aCBVUkxzXG5cdFx0XHQvLyBhcmUgYmFzZWQgb24gdGhlIGRvY3VtZW50J3MgVVJMIChnaC0yOTY1KVxuXHRcdFx0YmFzZSA9IGNvbnRleHQuY3JlYXRlRWxlbWVudCggXCJiYXNlXCIgKTtcblx0XHRcdGJhc2UuaHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cdFx0XHRjb250ZXh0LmhlYWQuYXBwZW5kQ2hpbGQoIGJhc2UgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGV4dCA9IGRvY3VtZW50O1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlZCA9IHJzaW5nbGVUYWcuZXhlYyggZGF0YSApO1xuXHRzY3JpcHRzID0gIWtlZXBTY3JpcHRzICYmIFtdO1xuXG5cdC8vIFNpbmdsZSB0YWdcblx0aWYgKCBwYXJzZWQgKSB7XG5cdFx0cmV0dXJuIFsgY29udGV4dC5jcmVhdGVFbGVtZW50KCBwYXJzZWRbIDEgXSApIF07XG5cdH1cblxuXHRwYXJzZWQgPSBidWlsZEZyYWdtZW50KCBbIGRhdGEgXSwgY29udGV4dCwgc2NyaXB0cyApO1xuXG5cdGlmICggc2NyaXB0cyAmJiBzY3JpcHRzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkoIHNjcmlwdHMgKS5yZW1vdmUoKTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnkubWVyZ2UoIFtdLCBwYXJzZWQuY2hpbGROb2RlcyApO1xufTtcblxuXG4vKipcbiAqIExvYWQgYSB1cmwgaW50byBhIHBhZ2VcbiAqL1xualF1ZXJ5LmZuLmxvYWQgPSBmdW5jdGlvbiggdXJsLCBwYXJhbXMsIGNhbGxiYWNrICkge1xuXHR2YXIgc2VsZWN0b3IsIHR5cGUsIHJlc3BvbnNlLFxuXHRcdHNlbGYgPSB0aGlzLFxuXHRcdG9mZiA9IHVybC5pbmRleE9mKCBcIiBcIiApO1xuXG5cdGlmICggb2ZmID4gLTEgKSB7XG5cdFx0c2VsZWN0b3IgPSBzdHJpcEFuZENvbGxhcHNlKCB1cmwuc2xpY2UoIG9mZiApICk7XG5cdFx0dXJsID0gdXJsLnNsaWNlKCAwLCBvZmYgKTtcblx0fVxuXG5cdC8vIElmIGl0J3MgYSBmdW5jdGlvblxuXHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBwYXJhbXMgKSApIHtcblxuXHRcdC8vIFdlIGFzc3VtZSB0aGF0IGl0J3MgdGhlIGNhbGxiYWNrXG5cdFx0Y2FsbGJhY2sgPSBwYXJhbXM7XG5cdFx0cGFyYW1zID0gdW5kZWZpbmVkO1xuXG5cdC8vIE90aGVyd2lzZSwgYnVpbGQgYSBwYXJhbSBzdHJpbmdcblx0fSBlbHNlIGlmICggcGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0dHlwZSA9IFwiUE9TVFwiO1xuXHR9XG5cblx0Ly8gSWYgd2UgaGF2ZSBlbGVtZW50cyB0byBtb2RpZnksIG1ha2UgdGhlIHJlcXVlc3Rcblx0aWYgKCBzZWxmLmxlbmd0aCA+IDAgKSB7XG5cdFx0alF1ZXJ5LmFqYXgoIHtcblx0XHRcdHVybDogdXJsLFxuXG5cdFx0XHQvLyBJZiBcInR5cGVcIiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHRoZW4gXCJHRVRcIiBtZXRob2Qgd2lsbCBiZSB1c2VkLlxuXHRcdFx0Ly8gTWFrZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIGV4cGxpY2l0IHNpbmNlXG5cdFx0XHQvLyB1c2VyIGNhbiBvdmVycmlkZSBpdCB0aHJvdWdoIGFqYXhTZXR1cCBtZXRob2Rcblx0XHRcdHR5cGU6IHR5cGUgfHwgXCJHRVRcIixcblx0XHRcdGRhdGFUeXBlOiBcImh0bWxcIixcblx0XHRcdGRhdGE6IHBhcmFtc1xuXHRcdH0gKS5kb25lKCBmdW5jdGlvbiggcmVzcG9uc2VUZXh0ICkge1xuXG5cdFx0XHQvLyBTYXZlIHJlc3BvbnNlIGZvciB1c2UgaW4gY29tcGxldGUgY2FsbGJhY2tcblx0XHRcdHJlc3BvbnNlID0gYXJndW1lbnRzO1xuXG5cdFx0XHRzZWxmLmh0bWwoIHNlbGVjdG9yID9cblxuXHRcdFx0XHQvLyBJZiBhIHNlbGVjdG9yIHdhcyBzcGVjaWZpZWQsIGxvY2F0ZSB0aGUgcmlnaHQgZWxlbWVudHMgaW4gYSBkdW1teSBkaXZcblx0XHRcdFx0Ly8gRXhjbHVkZSBzY3JpcHRzIHRvIGF2b2lkIElFICdQZXJtaXNzaW9uIERlbmllZCcgZXJyb3JzXG5cdFx0XHRcdGpRdWVyeSggXCI8ZGl2PlwiICkuYXBwZW5kKCBqUXVlcnkucGFyc2VIVE1MKCByZXNwb25zZVRleHQgKSApLmZpbmQoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSB1c2UgdGhlIGZ1bGwgcmVzdWx0XG5cdFx0XHRcdHJlc3BvbnNlVGV4dCApO1xuXG5cdFx0Ly8gSWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImRhdGFcIiwgXCJzdGF0dXNcIiwgXCJqcVhIUlwiXG5cdFx0Ly8gYnV0IHRoZXkgYXJlIGlnbm9yZWQgYmVjYXVzZSByZXNwb25zZSB3YXMgc2V0IGFib3ZlLlxuXHRcdC8vIElmIGl0IGZhaWxzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJqcVhIUlwiLCBcInN0YXR1c1wiLCBcImVycm9yXCJcblx0XHR9ICkuYWx3YXlzKCBjYWxsYmFjayAmJiBmdW5jdGlvbigganFYSFIsIHN0YXR1cyApIHtcblx0XHRcdHNlbGYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCB0aGlzLCByZXNwb25zZSB8fCBbIGpxWEhSLnJlc3BvbnNlVGV4dCwgc3RhdHVzLCBqcVhIUiBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5cblxuXG4vLyBBdHRhY2ggYSBidW5jaCBvZiBmdW5jdGlvbnMgZm9yIGhhbmRsaW5nIGNvbW1vbiBBSkFYIGV2ZW50c1xualF1ZXJ5LmVhY2goIFtcblx0XCJhamF4U3RhcnRcIixcblx0XCJhamF4U3RvcFwiLFxuXHRcImFqYXhDb21wbGV0ZVwiLFxuXHRcImFqYXhFcnJvclwiLFxuXHRcImFqYXhTdWNjZXNzXCIsXG5cdFwiYWpheFNlbmRcIlxuXSwgZnVuY3Rpb24oIGksIHR5cGUgKSB7XG5cdGpRdWVyeS5mblsgdHlwZSBdID0gZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlLCBmbiApO1xuXHR9O1xufSApO1xuXG5cblxuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmFuaW1hdGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiBqUXVlcnkuZ3JlcCggalF1ZXJ5LnRpbWVycywgZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiBlbGVtID09PSBmbi5lbGVtO1xuXHR9ICkubGVuZ3RoO1xufTtcblxuXG5cblxuLyoqXG4gKiBHZXRzIGEgd2luZG93IGZyb20gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBnZXRXaW5kb3coIGVsZW0gKSB7XG5cdHJldHVybiBqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XG59XG5cbmpRdWVyeS5vZmZzZXQgPSB7XG5cdHNldE9mZnNldDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGkgKSB7XG5cdFx0dmFyIGN1clBvc2l0aW9uLCBjdXJMZWZ0LCBjdXJDU1NUb3AsIGN1clRvcCwgY3VyT2Zmc2V0LCBjdXJDU1NMZWZ0LCBjYWxjdWxhdGVQb3NpdGlvbixcblx0XHRcdHBvc2l0aW9uID0galF1ZXJ5LmNzcyggZWxlbSwgXCJwb3NpdGlvblwiICksXG5cdFx0XHRjdXJFbGVtID0galF1ZXJ5KCBlbGVtICksXG5cdFx0XHRwcm9wcyA9IHt9O1xuXG5cdFx0Ly8gU2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuXHRcdGlmICggcG9zaXRpb24gPT09IFwic3RhdGljXCIgKSB7XG5cdFx0XHRlbGVtLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH1cblxuXHRcdGN1ck9mZnNldCA9IGN1ckVsZW0ub2Zmc2V0KCk7XG5cdFx0Y3VyQ1NTVG9wID0galF1ZXJ5LmNzcyggZWxlbSwgXCJ0b3BcIiApO1xuXHRcdGN1ckNTU0xlZnQgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImxlZnRcIiApO1xuXHRcdGNhbGN1bGF0ZVBvc2l0aW9uID0gKCBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiIHx8IHBvc2l0aW9uID09PSBcImZpeGVkXCIgKSAmJlxuXHRcdFx0KCBjdXJDU1NUb3AgKyBjdXJDU1NMZWZ0ICkuaW5kZXhPZiggXCJhdXRvXCIgKSA+IC0xO1xuXG5cdFx0Ly8gTmVlZCB0byBiZSBhYmxlIHRvIGNhbGN1bGF0ZSBwb3NpdGlvbiBpZiBlaXRoZXJcblx0XHQvLyB0b3Agb3IgbGVmdCBpcyBhdXRvIGFuZCBwb3NpdGlvbiBpcyBlaXRoZXIgYWJzb2x1dGUgb3IgZml4ZWRcblx0XHRpZiAoIGNhbGN1bGF0ZVBvc2l0aW9uICkge1xuXHRcdFx0Y3VyUG9zaXRpb24gPSBjdXJFbGVtLnBvc2l0aW9uKCk7XG5cdFx0XHRjdXJUb3AgPSBjdXJQb3NpdGlvbi50b3A7XG5cdFx0XHRjdXJMZWZ0ID0gY3VyUG9zaXRpb24ubGVmdDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJUb3AgPSBwYXJzZUZsb2F0KCBjdXJDU1NUb3AgKSB8fCAwO1xuXHRcdFx0Y3VyTGVmdCA9IHBhcnNlRmxvYXQoIGN1ckNTU0xlZnQgKSB8fCAwO1xuXHRcdH1cblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIG9wdGlvbnMgKSApIHtcblxuXHRcdFx0Ly8gVXNlIGpRdWVyeS5leHRlbmQgaGVyZSB0byBhbGxvdyBtb2RpZmljYXRpb24gb2YgY29vcmRpbmF0ZXMgYXJndW1lbnQgKGdoLTE4NDgpXG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucy5jYWxsKCBlbGVtLCBpLCBqUXVlcnkuZXh0ZW5kKCB7fSwgY3VyT2Zmc2V0ICkgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdGlvbnMudG9wICE9IG51bGwgKSB7XG5cdFx0XHRwcm9wcy50b3AgPSAoIG9wdGlvbnMudG9wIC0gY3VyT2Zmc2V0LnRvcCApICsgY3VyVG9wO1xuXHRcdH1cblx0XHRpZiAoIG9wdGlvbnMubGVmdCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMubGVmdCA9ICggb3B0aW9ucy5sZWZ0IC0gY3VyT2Zmc2V0LmxlZnQgKSArIGN1ckxlZnQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBcInVzaW5nXCIgaW4gb3B0aW9ucyApIHtcblx0XHRcdG9wdGlvbnMudXNpbmcuY2FsbCggZWxlbSwgcHJvcHMgKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJFbGVtLmNzcyggcHJvcHMgKTtcblx0XHR9XG5cdH1cbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0b2Zmc2V0OiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHRcdC8vIFByZXNlcnZlIGNoYWluaW5nIGZvciBzZXR0ZXJcblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9ucyA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0dGhpcyA6XG5cdFx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5Lm9mZnNldC5zZXRPZmZzZXQoIHRoaXMsIG9wdGlvbnMsIGkgKTtcblx0XHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHZhciBkb2NFbGVtLCB3aW4sIHJlY3QsIGRvYyxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF07XG5cblx0XHRpZiAoICFlbGVtICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHRcdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGFcblx0XHQvLyBkaXNjb25uZWN0ZWQgbm9kZSBpbiBJRSB0aHJvd3MgYW4gZXJyb3Jcblx0XHRpZiAoICFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cdFx0fVxuXG5cdFx0cmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHQvLyBNYWtlIHN1cmUgZWxlbWVudCBpcyBub3QgaGlkZGVuIChkaXNwbGF5OiBub25lKVxuXHRcdGlmICggcmVjdC53aWR0aCB8fCByZWN0LmhlaWdodCApIHtcblx0XHRcdGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcblx0XHRcdHdpbiA9IGdldFdpbmRvdyggZG9jICk7XG5cdFx0XHRkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuXHRcdFx0XHRsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiBlbGVtZW50cyAoZ2gtMjMxMClcblx0XHRyZXR1cm4gcmVjdDtcblx0fSxcblxuXHRwb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhdGhpc1sgMCBdICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBvZmZzZXRQYXJlbnQsIG9mZnNldCxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRwYXJlbnRPZmZzZXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG5cdFx0Ly8gRml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHdpbmRvdyAocGFyZW50T2Zmc2V0ID0ge3RvcDowLCBsZWZ0OiAwfSxcblx0XHQvLyBiZWNhdXNlIGl0IGlzIGl0cyBvbmx5IG9mZnNldCBwYXJlbnRcblx0XHRpZiAoIGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApID09PSBcImZpeGVkXCIgKSB7XG5cblx0XHRcdC8vIEFzc3VtZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaXMgdGhlcmUgd2hlbiBjb21wdXRlZCBwb3NpdGlvbiBpcyBmaXhlZFxuXHRcdFx0b2Zmc2V0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG5cdFx0XHRvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCgpO1xuXG5cdFx0XHQvLyBHZXQgY29ycmVjdCBvZmZzZXRzXG5cdFx0XHRvZmZzZXQgPSB0aGlzLm9mZnNldCgpO1xuXHRcdFx0aWYgKCAhalF1ZXJ5Lm5vZGVOYW1lKCBvZmZzZXRQYXJlbnRbIDAgXSwgXCJodG1sXCIgKSApIHtcblx0XHRcdFx0cGFyZW50T2Zmc2V0ID0gb2Zmc2V0UGFyZW50Lm9mZnNldCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcblx0XHRcdHBhcmVudE9mZnNldCA9IHtcblx0XHRcdFx0dG9wOiBwYXJlbnRPZmZzZXQudG9wICsgalF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50WyAwIF0sIFwiYm9yZGVyVG9wV2lkdGhcIiwgdHJ1ZSApLFxuXHRcdFx0XHRsZWZ0OiBwYXJlbnRPZmZzZXQubGVmdCArIGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudFsgMCBdLCBcImJvcmRlckxlZnRXaWR0aFwiLCB0cnVlIClcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gU3VidHJhY3QgcGFyZW50IG9mZnNldHMgYW5kIGVsZW1lbnQgbWFyZ2luc1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IG9mZnNldC50b3AgLSBwYXJlbnRPZmZzZXQudG9wIC0galF1ZXJ5LmNzcyggZWxlbSwgXCJtYXJnaW5Ub3BcIiwgdHJ1ZSApLFxuXHRcdFx0bGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luTGVmdFwiLCB0cnVlIClcblx0XHR9O1xuXHR9LFxuXG5cdC8vIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGRvY3VtZW50RWxlbWVudCBpbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuXHQvLyAxKSBGb3IgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWUgd2l0aG91dCBvZmZzZXRQYXJlbnQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuXG5cdC8vICAgIGRvY3VtZW50RWxlbWVudCBvZiB0aGUgcGFyZW50IHdpbmRvd1xuXHQvLyAyKSBGb3IgdGhlIGhpZGRlbiBvciBkZXRhY2hlZCBlbGVtZW50XG5cdC8vIDMpIEZvciBib2R5IG9yIGh0bWwgZWxlbWVudCwgaS5lLiBpbiBjYXNlIG9mIHRoZSBodG1sIG5vZGUgLSBpdCB3aWxsIHJldHVybiBpdHNlbGZcblx0Ly9cblx0Ly8gYnV0IHRob3NlIGV4Y2VwdGlvbnMgd2VyZSBuZXZlciBwcmVzZW50ZWQgYXMgYSByZWFsIGxpZmUgdXNlLWNhc2VzXG5cdC8vIGFuZCBtaWdodCBiZSBjb25zaWRlcmVkIGFzIG1vcmUgcHJlZmVyYWJsZSByZXN1bHRzLlxuXHQvL1xuXHQvLyBUaGlzIGxvZ2ljLCBob3dldmVyLCBpcyBub3QgZ3VhcmFudGVlZCBhbmQgY2FuIGNoYW5nZSBhdCBhbnkgcG9pbnQgaW4gdGhlIGZ1dHVyZVxuXHRvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb2Zmc2V0UGFyZW50ID0gdGhpcy5vZmZzZXRQYXJlbnQ7XG5cblx0XHRcdHdoaWxlICggb2Zmc2V0UGFyZW50ICYmIGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiICkgPT09IFwic3RhdGljXCIgKSB7XG5cdFx0XHRcdG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnRFbGVtZW50O1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG4vLyBDcmVhdGUgc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IHNjcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIiwgc2Nyb2xsVG9wOiBcInBhZ2VZT2Zmc2V0XCIgfSwgZnVuY3Rpb24oIG1ldGhvZCwgcHJvcCApIHtcblx0dmFyIHRvcCA9IFwicGFnZVlPZmZzZXRcIiA9PT0gcHJvcDtcblxuXHRqUXVlcnkuZm5bIG1ldGhvZCBdID0gZnVuY3Rpb24oIHZhbCApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgbWV0aG9kLCB2YWwgKSB7XG5cdFx0XHR2YXIgd2luID0gZ2V0V2luZG93KCBlbGVtICk7XG5cblx0XHRcdGlmICggdmFsID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiB3aW4gPyB3aW5bIHByb3AgXSA6IGVsZW1bIG1ldGhvZCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHdpbiApIHtcblx0XHRcdFx0d2luLnNjcm9sbFRvKFxuXHRcdFx0XHRcdCF0b3AgPyB2YWwgOiB3aW4ucGFnZVhPZmZzZXQsXG5cdFx0XHRcdFx0dG9wID8gdmFsIDogd2luLnBhZ2VZT2Zmc2V0XG5cdFx0XHRcdCk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1bIG1ldGhvZCBdID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0sIG1ldGhvZCwgdmFsLCBhcmd1bWVudHMubGVuZ3RoICk7XG5cdH07XG59ICk7XG5cbi8vIFN1cHBvcnQ6IFNhZmFyaSA8PTcgLSA5LjEsIENocm9tZSA8PTM3IC0gNDlcbi8vIEFkZCB0aGUgdG9wL2xlZnQgY3NzSG9va3MgdXNpbmcgalF1ZXJ5LmZuLnBvc2l0aW9uXG4vLyBXZWJraXQgYnVnOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkwODRcbi8vIEJsaW5rIGJ1ZzogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTg5MzQ3XG4vLyBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgcGVyY2VudCB3aGVuIHNwZWNpZmllZCBmb3IgdG9wL2xlZnQvYm90dG9tL3JpZ2h0O1xuLy8gcmF0aGVyIHRoYW4gbWFrZSB0aGUgY3NzIG1vZHVsZSBkZXBlbmQgb24gdGhlIG9mZnNldCBtb2R1bGUsIGp1c3QgY2hlY2sgZm9yIGl0IGhlcmVcbmpRdWVyeS5lYWNoKCBbIFwidG9wXCIsIFwibGVmdFwiIF0sIGZ1bmN0aW9uKCBpLCBwcm9wICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIHByb3AgXSA9IGFkZEdldEhvb2tJZiggc3VwcG9ydC5waXhlbFBvc2l0aW9uLFxuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcblx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cdFx0XHRcdGNvbXB1dGVkID0gY3VyQ1NTKCBlbGVtLCBwcm9wICk7XG5cblx0XHRcdFx0Ly8gSWYgY3VyQ1NTIHJldHVybnMgcGVyY2VudGFnZSwgZmFsbGJhY2sgdG8gb2Zmc2V0XG5cdFx0XHRcdHJldHVybiBybnVtbm9ucHgudGVzdCggY29tcHV0ZWQgKSA/XG5cdFx0XHRcdFx0alF1ZXJ5KCBlbGVtICkucG9zaXRpb24oKVsgcHJvcCBdICsgXCJweFwiIDpcblx0XHRcdFx0XHRjb21wdXRlZDtcblx0XHRcdH1cblx0XHR9XG5cdCk7XG59ICk7XG5cblxuLy8gQ3JlYXRlIGlubmVySGVpZ2h0LCBpbm5lcldpZHRoLCBoZWlnaHQsIHdpZHRoLCBvdXRlckhlaWdodCBhbmQgb3V0ZXJXaWR0aCBtZXRob2RzXG5qUXVlcnkuZWFjaCggeyBIZWlnaHQ6IFwiaGVpZ2h0XCIsIFdpZHRoOiBcIndpZHRoXCIgfSwgZnVuY3Rpb24oIG5hbWUsIHR5cGUgKSB7XG5cdGpRdWVyeS5lYWNoKCB7IHBhZGRpbmc6IFwiaW5uZXJcIiArIG5hbWUsIGNvbnRlbnQ6IHR5cGUsIFwiXCI6IFwib3V0ZXJcIiArIG5hbWUgfSxcblx0XHRmdW5jdGlvbiggZGVmYXVsdEV4dHJhLCBmdW5jTmFtZSApIHtcblxuXHRcdC8vIE1hcmdpbiBpcyBvbmx5IGZvciBvdXRlckhlaWdodCwgb3V0ZXJXaWR0aFxuXHRcdGpRdWVyeS5mblsgZnVuY05hbWUgXSA9IGZ1bmN0aW9uKCBtYXJnaW4sIHZhbHVlICkge1xuXHRcdFx0dmFyIGNoYWluYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggJiYgKCBkZWZhdWx0RXh0cmEgfHwgdHlwZW9mIG1hcmdpbiAhPT0gXCJib29sZWFuXCIgKSxcblx0XHRcdFx0ZXh0cmEgPSBkZWZhdWx0RXh0cmEgfHwgKCBtYXJnaW4gPT09IHRydWUgfHwgdmFsdWUgPT09IHRydWUgPyBcIm1hcmdpblwiIDogXCJib3JkZXJcIiApO1xuXG5cdFx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgdHlwZSwgdmFsdWUgKSB7XG5cdFx0XHRcdHZhciBkb2M7XG5cblx0XHRcdFx0aWYgKCBqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSApIHtcblxuXHRcdFx0XHRcdC8vICQoIHdpbmRvdyApLm91dGVyV2lkdGgvSGVpZ2h0IHJldHVybiB3L2ggaW5jbHVkaW5nIHNjcm9sbGJhcnMgKGdoLTE3MjkpXG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmNOYW1lLmluZGV4T2YoIFwib3V0ZXJcIiApID09PSAwID9cblx0XHRcdFx0XHRcdGVsZW1bIFwiaW5uZXJcIiArIG5hbWUgXSA6XG5cdFx0XHRcdFx0XHRlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFsgXCJjbGllbnRcIiArIG5hbWUgXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEdldCBkb2N1bWVudCB3aWR0aCBvciBoZWlnaHRcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdGRvYyA9IGVsZW0uZG9jdW1lbnRFbGVtZW50O1xuXG5cdFx0XHRcdFx0Ly8gRWl0aGVyIHNjcm9sbFtXaWR0aC9IZWlnaHRdIG9yIG9mZnNldFtXaWR0aC9IZWlnaHRdIG9yIGNsaWVudFtXaWR0aC9IZWlnaHRdLFxuXHRcdFx0XHRcdC8vIHdoaWNoZXZlciBpcyBncmVhdGVzdFxuXHRcdFx0XHRcdHJldHVybiBNYXRoLm1heChcblx0XHRcdFx0XHRcdGVsZW0uYm9keVsgXCJzY3JvbGxcIiArIG5hbWUgXSwgZG9jWyBcInNjcm9sbFwiICsgbmFtZSBdLFxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcIm9mZnNldFwiICsgbmFtZSBdLCBkb2NbIFwib2Zmc2V0XCIgKyBuYW1lIF0sXG5cdFx0XHRcdFx0XHRkb2NbIFwiY2xpZW50XCIgKyBuYW1lIF1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuXG5cdFx0XHRcdFx0Ly8gR2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudCwgcmVxdWVzdGluZyBidXQgbm90IGZvcmNpbmcgcGFyc2VGbG9hdFxuXHRcdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIHR5cGUsIGV4dHJhICkgOlxuXG5cdFx0XHRcdFx0Ly8gU2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudFxuXHRcdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgdHlwZSwgdmFsdWUsIGV4dHJhICk7XG5cdFx0XHR9LCB0eXBlLCBjaGFpbmFibGUgPyBtYXJnaW4gOiB1bmRlZmluZWQsIGNoYWluYWJsZSApO1xuXHRcdH07XG5cdH0gKTtcbn0gKTtcblxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0YmluZDogZnVuY3Rpb24oIHR5cGVzLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZXMsIG51bGwsIGRhdGEsIGZuICk7XG5cdH0sXG5cdHVuYmluZDogZnVuY3Rpb24oIHR5cGVzLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vZmYoIHR5cGVzLCBudWxsLCBmbiApO1xuXHR9LFxuXG5cdGRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApO1xuXHR9LFxuXHR1bmRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBmbiApIHtcblxuXHRcdC8vICggbmFtZXNwYWNlICkgb3IgKCBzZWxlY3RvciwgdHlwZXMgWywgZm5dIClcblx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/XG5cdFx0XHR0aGlzLm9mZiggc2VsZWN0b3IsIFwiKipcIiApIDpcblx0XHRcdHRoaXMub2ZmKCB0eXBlcywgc2VsZWN0b3IgfHwgXCIqKlwiLCBmbiApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5wYXJzZUpTT04gPSBKU09OLnBhcnNlO1xuXG5cblxuXG4vLyBSZWdpc3RlciBhcyBhIG5hbWVkIEFNRCBtb2R1bGUsIHNpbmNlIGpRdWVyeSBjYW4gYmUgY29uY2F0ZW5hdGVkIHdpdGggb3RoZXJcbi8vIGZpbGVzIHRoYXQgbWF5IHVzZSBkZWZpbmUsIGJ1dCBub3QgdmlhIGEgcHJvcGVyIGNvbmNhdGVuYXRpb24gc2NyaXB0IHRoYXRcbi8vIHVuZGVyc3RhbmRzIGFub255bW91cyBBTUQgbW9kdWxlcy4gQSBuYW1lZCBBTUQgaXMgc2FmZXN0IGFuZCBtb3N0IHJvYnVzdFxuLy8gd2F5IHRvIHJlZ2lzdGVyLiBMb3dlcmNhc2UganF1ZXJ5IGlzIHVzZWQgYmVjYXVzZSBBTUQgbW9kdWxlIG5hbWVzIGFyZVxuLy8gZGVyaXZlZCBmcm9tIGZpbGUgbmFtZXMsIGFuZCBqUXVlcnkgaXMgbm9ybWFsbHkgZGVsaXZlcmVkIGluIGEgbG93ZXJjYXNlXG4vLyBmaWxlIG5hbWUuIERvIHRoaXMgYWZ0ZXIgY3JlYXRpbmcgdGhlIGdsb2JhbCBzbyB0aGF0IGlmIGFuIEFNRCBtb2R1bGUgd2FudHNcbi8vIHRvIGNhbGwgbm9Db25mbGljdCB0byBoaWRlIHRoaXMgdmVyc2lvbiBvZiBqUXVlcnksIGl0IHdpbGwgd29yay5cblxuLy8gTm90ZSB0aGF0IGZvciBtYXhpbXVtIHBvcnRhYmlsaXR5LCBsaWJyYXJpZXMgdGhhdCBhcmUgbm90IGpRdWVyeSBzaG91bGRcbi8vIGRlY2xhcmUgdGhlbXNlbHZlcyBhcyBhbm9ueW1vdXMgbW9kdWxlcywgYW5kIGF2b2lkIHNldHRpbmcgYSBnbG9iYWwgaWYgYW5cbi8vIEFNRCBsb2FkZXIgaXMgcHJlc2VudC4galF1ZXJ5IGlzIGEgc3BlY2lhbCBjYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vanJidXJrZS9yZXF1aXJlanMvd2lraS9VcGRhdGluZy1leGlzdGluZy1saWJyYXJpZXMjd2lraS1hbm9uXG5cbmlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cdGRlZmluZSggXCJqcXVlcnlcIiwgW10sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnk7XG5cdH0gKTtcbn1cblxuXG5cblxudmFyXG5cblx0Ly8gTWFwIG92ZXIgalF1ZXJ5IGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF9qUXVlcnkgPSB3aW5kb3cualF1ZXJ5LFxuXG5cdC8vIE1hcCBvdmVyIHRoZSAkIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF8kID0gd2luZG93LiQ7XG5cbmpRdWVyeS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oIGRlZXAgKSB7XG5cdGlmICggd2luZG93LiQgPT09IGpRdWVyeSApIHtcblx0XHR3aW5kb3cuJCA9IF8kO1xuXHR9XG5cblx0aWYgKCBkZWVwICYmIHdpbmRvdy5qUXVlcnkgPT09IGpRdWVyeSApIHtcblx0XHR3aW5kb3cualF1ZXJ5ID0gX2pRdWVyeTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnk7XG59O1xuXG4vLyBFeHBvc2UgalF1ZXJ5IGFuZCAkIGlkZW50aWZpZXJzLCBldmVuIGluIEFNRFxuLy8gKCM3MTAyI2NvbW1lbnQ6MTAsIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L3B1bGwvNTU3KVxuLy8gYW5kIENvbW1vbkpTIGZvciBicm93c2VyIGVtdWxhdG9ycyAoIzEzNTY2KVxuaWYgKCAhbm9HbG9iYWwgKSB7XG5cdHdpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9IGpRdWVyeTtcbn1cblxuXG5cblxuXG5yZXR1cm4galF1ZXJ5O1xufSApO1xuIiwiZnVuY3Rpb24gZ2VuZXJhdGVQcm9kdWN0cygpIHtcclxuICBjb25zdCBza2lsbHMgPSBbJ0phdmFTY3JpcHQnLCAnQ1NTJywgJ1NBU1MnLCAnTm9kZScsICdBbmd1bGFyIDInLCAnVlVFJ107XHJcblxyXG4gIHJldHVybiBza2lsbHMubWFwKCggc2tpbGwsIGkgKSA9PiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZCAgICAgICAgIDogaSArIDEsXHJcbiAgICAgIHRpdGxlICAgICAgOiBgTWFzdGVyaW5nICR7c2tpbGx9YCxcclxuICAgICAgZGVzY3JpcHRpb246IGAke3NraWxsfSBsb3JlbSAgaXBzdW0gZGtoZCBkYWtsaGQgZGFraGRrIGRha2hkayBkYWAsXHJcbiAgICAgIHByaWNlICAgICAgOiAoaSArIDEpICogMTBcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxudmFyIHByb2R1Y3RzID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAvLyBzaW1wbGUgY2FjaGluZyBtZWNoYW5pc21cclxuICAgIGlmKCBwcm9kdWN0cy5sZW5ndGggKSB7XHJcbiAgICAgIHJlc29sdmUocHJvZHVjdHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHByb2R1Y3RzID0gZ2VuZXJhdGVQcm9kdWN0cygpO1xyXG4gICAgICAgIHJlc29sdmUocHJvZHVjdHMpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2R1Y3RCeUlkKCBwcm9kdWN0SWQgKSB7XHJcbiAgcmV0dXJuIGdldFByb2R1Y3RzKCkudGhlbihwcm9kdWN0cyA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmluZChwcm9kdWN0ID0+IHByb2R1Y3RJZCA9PT0gcHJvZHVjdC5pZCk7XHJcbiAgICByZXR1cm4gcHJvZHVjdDtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldFByb2R1Y3RzLFxyXG4gIGdldFByb2R1Y3RCeUlkXHJcbn0iLCIvLyBjYXJ0LnNlcnZpY2UuanNcclxuXHJcbnZhciBjYXJ0SXRlbXMgPSBbXTtcclxuXHJcbmNvbnN0IGdldENhcnRJdGVtcyA9ICgpID0+IGNhcnRJdGVtcztcclxuXHJcbmNvbnN0IGFkZFRvQ2FydCA9IGl0ZW0gPT4ge1xyXG4gIGNvbnN0IGl0ZW1JbkNhcnQgPSBjYXJ0SXRlbXMuZmluZChjdXJyZW50SXRlbSA9PiBpdGVtLmlkID09PSBjdXJyZW50SXRlbS5pZCk7XHJcbiAgaWYoIGl0ZW1JbkNhcnQgKSB7XHJcbiAgICBpdGVtSW5DYXJ0LnF1YW50aXR5Kys7XHJcbiAgfSBlbHNlIHtcclxuICAgIGl0ZW0ucXVhbnRpdHkgPSAxO1xyXG4gICAgY2FydEl0ZW1zLnB1c2goaXRlbSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzdWJzdHJhY3RGcm9tQ2FydCA9IGl0ZW1JZCA9PiB7XHJcbiAgY29uc3QgaXRlbUluZGV4ID0gY2FydEl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGl0ZW1JZCk7XHJcbiAgaWYoIGl0ZW1JbmRleCA+IC0xICkge1xyXG4gICAgaWYoIGNhcnRJdGVtc1tpdGVtSW5kZXhdLnF1YW50aXR5ID4gMSApIHtcclxuICAgICAgY2FydEl0ZW1zW2l0ZW1JbmRleF0ucXVhbnRpdHktLTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNhcnRJdGVtcy5zcGxpY2UoaXRlbUluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGNsZWFySXRlbSA9IGl0ZW1JZCA9PiB7XHJcbiAgY29uc3QgaXRlbUluZGV4ID0gY2FydEl0ZW1zLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGl0ZW1JZCk7XHJcbiAgaWYoIGl0ZW1JbmRleCA+IC0xICkge1xyXG4gICAgY2FydEl0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgZ2V0Q2FydFRvdGFsID0gKCkgPT4ge1xyXG4gIHJldHVybiBjYXJ0SXRlbXMucmVkdWNlKCggYWNjLCBpdGVtICkgPT4ge1xyXG4gICAgcmV0dXJuIGFjYyArIChpdGVtLnF1YW50aXR5ICogaXRlbS5wcmljZSk7XHJcbiAgfSwgMCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzdWJzdHJhY3RGcm9tQ2FydCxcclxuICBnZXRDYXJ0SXRlbXMsXHJcbiAgY2xlYXJJdGVtLFxyXG4gIGFkZFRvQ2FydCxcclxuICBnZXRDYXJ0VG90YWxcclxufSIsImNvbnN0IGdldFByb2R1Y3RUcGwgPSBwcm9kdWN0ID0+IHtcclxuICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIHByb2R1Y3RcIiBkYXRhLWlkPVwiJHtwcm9kdWN0LmlkfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3M9XCJpbWFnZSBpcy00YnkzXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHA6Ly9wbGFjZWhvbGQuaXQvMzAweDE2MFwiIGFsdD1cImNvZGluZyBhY2FkZW15IHN0b3JlXCI+XHJcbiAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZSBpcy01XCI+JHtwcm9kdWN0LnRpdGxlfTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHA+JHtwcm9kdWN0LmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlByaWNlOiA8Yj4ke3Byb2R1Y3QucHJpY2V9JDwvYj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8YnI+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtZW5kXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXByaW1hcnlcIiBkYXRhLWFkZD4rPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXdhcm5pbmdcIiBkYXRhLXN1YnN0cmFjdD4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgYFxyXG59XHJcblxyXG5jb25zdCBnZXRDYXJ0VHBsID0gaXRlbSA9PiB7XHJcbiAgcmV0dXJuIGBcclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBpcy1mdWxsd2lkdGhcIiBkYXRhLWlkPVwiJHtpdGVtLmlkfVwiPlxyXG4gICAgICAgICAgICAgIDxoZWFkZXIgY2xhc3M9XCJjYXJkLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWhlYWRlci10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAke2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgUXVhbnRpdHk6ICR7aXRlbS5xdWFudGl0eX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxmb290ZXIgY2xhc3M9XCJjYXJkLWZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWZvb3Rlci1pdGVtXCIgZGF0YS1hZGQ+KzwvYT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiY2FyZC1mb290ZXItaXRlbVwiIGRhdGEtc3Vicz4tPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWZvb3Rlci1pdGVtXCIgZGF0YS1jbGVhcj5DbGVhcjwvYT5cclxuICAgICAgICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgYFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0UHJvZHVjdFRwbCxcclxuICBnZXRDYXJ0VHBsXHJcbn0iLCJpbXBvcnQgJy4vc3R5bGUuc2NzcydcclxuXHJcbmltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XHJcblxyXG5cclxuaW1wb3J0IHN0b3JlU2VydmljZSBmcm9tICcuL3N0b3JlLnNlcnZpY2UnO1xyXG5pbXBvcnQgY2FydFNlcnZpY2UgZnJvbSAnLi9jYXJ0LnNlcnZpY2UnO1xyXG5pbXBvcnQgdGVtcGxhdGVzIGZyb20gJy4vdGVtcGxhdGVzJztcclxuXHJcbmNvbnN0IGdlbmVyYXRlUHJvZHVjdHNET00gPSBwcm9kdWN0cyA9PiB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdHMnKTtcclxuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICBmb3IoIGxldCBwcm9kdWN0IG9mIHByb2R1Y3RzICkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGVtcGxhdGVzLmdldFByb2R1Y3RUcGwocHJvZHVjdCk7XHJcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50KTtcclxuICB9XHJcbiAgZWwuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG59XHJcblxyXG5jb25zdCBnZW5lcmF0ZUNhcnRJdGVtc0RPTSA9IGl0ZW1zID0+IHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWl0ZW1zJyk7XHJcbiAgJChlbCkuZW1wdHkoKTtcclxuICBjb25zdCBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICBmb3IoIGxldCBpdGVtIG9mIGl0ZW1zICkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGVtcGxhdGVzLmdldENhcnRUcGwoaXRlbSk7XHJcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50KTtcclxuICB9XHJcbiAgZWwuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG59XHJcblxyXG5jb25zdCBoaWRlTG9hZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG4gIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbmNvbnN0IGNsaWNrSGFuZGxlcnMgPSAoKSA9PiB7XHJcbiAgLy8gU2hvcCBCdXR0b25zXHJcbiAgJCgnW2RhdGEtYWRkXScpLm9uKCdjbGljaycsIGFkZFRvQ2FydCk7XHJcbiAgJCgnW2RhdGEtc3Vic3RyYWN0XScpLm9uKCdjbGljaycsIHN1YnN0cmFjdEZyb21DYXJ0QnRucyk7XHJcblxyXG4gIC8vIENhcnQgQnV0dG9uc1xyXG4gIC8vIFdlIHVzZSBKcXVlcnkgc3R5bGUgZXZlbnQgZGVsZWdhdGlvbiBoZXJlLCBhcyB0aG9zZSBidXR0b25zIFxyXG4gIC8vIGFyZSBub3QgaW4gdGhlIGRvbSB5ZXQsIHNvIHdlIHNldCBhIHNpbmdsZSBjbGljayBoYW5kbGVyIG9uIHRoZSBwYXJlbnRcclxuICAkKCcuY2FydC1pdGVtcycpLm9uKCdjbGljaycsICdbZGF0YS1hZGRdJywgYWRkVG9DYXJ0KTtcclxuICAkKCcuY2FydC1pdGVtcycpLm9uKCdjbGljaycsICdbZGF0YS1zdWJzXScsIHN1YnN0cmFjdEZyb21DYXJ0QnRucyk7XHJcbiAgJCgnLmNhcnQtaXRlbXMnKS5vbignY2xpY2snLCAnW2RhdGEtY2xlYXJdJywgY2xlYXJJdGVtKTtcclxuXHJcbn1cclxuXHJcbmNvbnN0IGFkZFRvQ2FydCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgY29uc3QgcHJvZHVjdElkID0gJCh0aGlzKS5jbG9zZXN0KCdbZGF0YS1pZF0nKS5kYXRhKCdpZCcpO1xyXG4gICAgc3RvcmVTZXJ2aWNlLmdldFByb2R1Y3RCeUlkKHByb2R1Y3RJZCkudGhlbihwcm9kdWN0ID0+IHtcclxuICAgICAgY29uc3QgeyBpZCwgdGl0bGUsIHByaWNlIH0gPSBwcm9kdWN0O1xyXG4gICAgICBjYXJ0U2VydmljZS5hZGRUb0NhcnQoe1xyXG4gICAgICAgIGlkLFxyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIHByaWNlXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVuZGVyQ2FydCgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBzdWJzdHJhY3RGcm9tQ2FydEJ0bnMgPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQodGhpcykuY2xvc2VzdCgnW2RhdGEtaWRdJykuZGF0YSgnaWQnKTtcclxuICAgIGNhcnRTZXJ2aWNlLnN1YnN0cmFjdEZyb21DYXJ0KHByb2R1Y3RJZCk7XHJcbiAgICByZW5kZXJDYXJ0KCk7XHJcblxyXG4gIH07XHJcblxyXG5jb25zdCBjbGVhckl0ZW0gPSBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IHByb2R1Y3RJZCA9ICQodGhpcykuY2xvc2VzdCgnW2RhdGEtaWRdJykuZGF0YSgnaWQnKTtcclxuICAgIGNhcnRTZXJ2aWNlLmNsZWFySXRlbShwcm9kdWN0SWQpO1xyXG4gICAgcmVuZGVyQ2FydCgpO1xyXG5cclxuICB9XHJcblxyXG4gIGNvbnN0IHJlbmRlckNhcnQgPSAoKSA9PiB7XHJcbiAgICBnZW5lcmF0ZUNhcnRJdGVtc0RPTShjYXJ0U2VydmljZS5nZXRDYXJ0SXRlbXMoKSk7XHJcbiAgICByZW5kZXJDYXJ0VG90YWwoKTtcclxuICAgIHNob3dDYXJ0U3RhdHVzKCk7XHJcbiAgfVxyXG5cclxuY29uc3QgcmVuZGVyQ2FydFRvdGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0ICRlbCA9ICQoJ1tkYXRhLWNhcnQtdG90YWxdJyk7XHJcbiAgJGVsLnRleHQoY2FydFNlcnZpY2UuZ2V0Q2FydFRvdGFsKCkpO1xyXG59XHJcblxyXG5jb25zdCBzaG93Q2FydFN0YXR1cyA9ICgpID0+IHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xyXG4gIGlmKCBjYXJ0U2VydmljZS5nZXRDYXJ0SXRlbXMoKS5sZW5ndGggKSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHJlbmRlclN0b3JlID0gcHJvZHVjdHMgPT4ge1xyXG4gIGdlbmVyYXRlUHJvZHVjdHNET00ocHJvZHVjdHMpO1xyXG4gIGNsaWNrSGFuZGxlcnMoKTtcclxuICBoaWRlTG9hZGVyKCk7XHJcbn1cclxuXHJcbnN0b3JlU2VydmljZS5nZXRQcm9kdWN0cygpLnRoZW4ocmVuZGVyU3RvcmUpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsidGhpcyIsImdlbmVyYXRlUHJvZHVjdHMiLCJza2lsbHMiLCJtYXAiLCJza2lsbCIsImkiLCJwcm9kdWN0cyIsImdldFByb2R1Y3RzIiwiUHJvbWlzZSIsImxlbmd0aCIsImdldFByb2R1Y3RCeUlkIiwicHJvZHVjdElkIiwidGhlbiIsInByb2R1Y3QiLCJmaW5kIiwiaWQiLCJjYXJ0SXRlbXMiLCJnZXRDYXJ0SXRlbXMiLCJhZGRUb0NhcnQiLCJpdGVtSW5DYXJ0IiwiaXRlbSIsImN1cnJlbnRJdGVtIiwicXVhbnRpdHkiLCJwdXNoIiwic3Vic3RyYWN0RnJvbUNhcnQiLCJpdGVtSW5kZXgiLCJmaW5kSW5kZXgiLCJpdGVtSWQiLCJzcGxpY2UiLCJjbGVhckl0ZW0iLCJnZXRDYXJ0VG90YWwiLCJyZWR1Y2UiLCJhY2MiLCJwcmljZSIsImdldFByb2R1Y3RUcGwiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZ2V0Q2FydFRwbCIsImdlbmVyYXRlUHJvZHVjdHNET00iLCJlbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsInRlbXBsYXRlIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsInRlbXBsYXRlcyIsImFwcGVuZENoaWxkIiwiY29udGVudCIsImdlbmVyYXRlQ2FydEl0ZW1zRE9NIiwiZW1wdHkiLCJpdGVtcyIsImhpZGVMb2FkZXIiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGlja0hhbmRsZXJzIiwib24iLCJzdWJzdHJhY3RGcm9tQ2FydEJ0bnMiLCIkIiwiY2xvc2VzdCIsImRhdGEiLCJyZW5kZXJDYXJ0IiwiY2FydFNlcnZpY2UiLCJyZW5kZXJDYXJ0VG90YWwiLCIkZWwiLCJ0ZXh0Iiwic2hvd0NhcnRTdGF0dXMiLCJyZW5kZXJTdG9yZSIsInN0b3JlU2VydmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQSxFQUFFLFVBQVUsTUFBTSxFQUFFLE9BQU8sR0FBRzs7Q0FFN0IsWUFBWSxDQUFDOztD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QUFRLEVBQUUsR0FBRyxHQUFHO0NBQ3hFLElBQUksQ0FBQyxHQUFHLENBQUM7RUFDUixHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU07RUFDbEIsSUFBSSxHQUFHLEdBQUcsSUFBSSxJQUFJLENBQUM7OztDQUdwQixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssUUFBUSxHQUFHO0VBQ3RDLFNBQVMsR0FBRyxJQUFJLENBQUM7RUFDakIsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHO0dBQ2hCLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQztHQUN0RDs7O0VBR0QsTUFBTSxLQUFLLEtBQUssS0FBSyxTQUFTLEdBQUc7RUFDakMsU0FBUyxHQUFHLElBQUksQ0FBQzs7RUFFakIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEdBQUc7R0FDbEMsR0FBRyxHQUFHLElBQUksQ0FBQztHQUNYOztFQUVELEtBQUssSUFBSSxHQUFHOzs7R0FHWCxLQUFLLEdBQUcsR0FBRztJQUNWLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ3hCLEVBQUUsR0FBRyxJQUFJLENBQUM7OztJQUdWLE1BQU07SUFDTixJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ1YsRUFBRSxHQUFHLFVBQVUsSUFBSSxFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUc7S0FDakMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztLQUMxQyxDQUFDO0lBQ0Y7R0FDRDs7RUFFRCxLQUFLLEVBQUUsR0FBRztHQUNULFFBQVEsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLEVBQUUsR0FBRztJQUN0QixFQUFFO0tBQ0QsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxH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LE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRztJQUNuQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7SUFDdEMsTUFBTSxLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUM7TUFDbEMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsSUFBSSxJQUFJO0tBQzFELE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFLEdBQUc7SUFDbkMsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDL0QsTUFBTTtJQUNOLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7SUFDckM7R0FDRDtFQUNEO0NBQ0QsQ0FBQzs7OztBQUlGLEtBQUssQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHO0NBQ3hELEdBQUcsRUFBRSxVQUFVLEtBQUssR0FBRztFQUN0QixLQUFLLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHO0dBQ25ELEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUM7R0FDckM7RUFDRDtDQUNELENBQUM7O0FBRUYsTUFBTSxDQUFDLE1BQU0sR0FBRztDQUNmLE1BQU0sRUFBRSxVQUFVLENBQUMsR0FBRztFQUNyQixPQUFPLENBQUMsQ0FBQztFQUNUO0NBQ0QsS0FB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QUFFLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztFQUN0RixLQUFLLE1BQU0sR0FBRztHQUNiLEtBQUssTUFBTSxDQUFDLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUc7SUFDdkMsTUFBTSxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSTtLQUM5RCxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDckM7R0FDRCxPQUFPLE1BQU0sQ0FBQztHQUNkO0VBQ0Q7O0NBRUQsTUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxDQUFDOztDQUU1QyxLQUFLLE1BQU0sQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRztFQUNoRCxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDO0VBQzdDOztDQUVELE1BQU0sQ0FBQyxFQUFFLENBQUMsS0FBSztFQUNkLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFO0dBQ3BCLElBQUksRUFBRSxJQUFJO0dBQ1YsSUFBSSxFQUFFLFNBQVM7R0FDZixLQUFLLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLO0dBQzNCLEVBQUU7RUFDSCxDQUFDOzs7Q0FHRixPQUFPLFNBQVMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7R0FDbEQsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO0dBQ3BELElBQUksRUFBRSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtHQUMzQixNQUFNLEVBQUUsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztDQUNs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QUksSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDO0dBQy9COztFQUVELE9BQU8sSUFBSSxDQUFDLElBQUksRUFBRSxXQUFXO0dBQzVCLElBQUksT0FBTyxHQUFHLElBQUk7SUFDakIsS0FBSyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxHQUFHLFlBQVk7SUFDM0MsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNO0lBQ3RCLElBQUksR0FBRyxRQUFRLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDOztHQUU3QixLQUFLLEtBQUssR0FBRztJQUNaLEtBQUssSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEdBQUc7S0FDMUMsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO0tBQzNCO0lBQ0QsTUFBTTtJQUNOLE1BQU0sS0FBSyxJQUFJLElBQUksR0FBRztLQUNyQixLQUFLLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUc7TUFDaEUsU0FBUyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO01BQzNCO0tBQ0Q7SUFDRDs7R0FFRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxJQUFJO0lBQ3ZDLEtBQUssTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJO09BQy9CLElBQUksSUFBSSxJQUFJLElBQUksTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUUsR0FBRzs7S0FFckQsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUM7S0FDckMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUNoQixNQUFNLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxDQUFDLEVB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
