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

  return skills.map(generateProduct);
}

function generateProduct(skill, i) {
  return {
    id: i + 1,
    title: 'Mastering ' + skill,
    description: skill + ' lorem  ipsum dkhd daklhd dakhdk dakhdk da',
    price: (i + 1) * 10
  };
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

function addProduct(productName) {
  products.push(generateProduct(productName, products.length));
}

var storeService = {
  getProducts: getProducts,
  getProductById: getProductById,
  addProduct: addProduct
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

  jquery('[data-add-product-btn]').on('click', function () {
    var productName = prompt('Product Name?');
    storeService.addProduct(productName);
    renderStore();
  });
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

var renderStore = function renderStore() {
  storeService.getProducts().then(function (products) {
    generateProductsDOM(products);
    clickHandlers();
    hideLoader();
  });
};

renderStore();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjpudWxsLCJzb3VyY2VzIjpbIi4uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMiLCIuLi9zcmMvc3RvcmUuc2VydmljZS5qcyIsIi4uL3NyYy9jYXJ0LnNlcnZpY2UuanMiLCIuLi9zcmMvdGVtcGxhdGVzLmpzIiwiLi4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBqUXVlcnkgSmF2YVNjcmlwdCBMaWJyYXJ5IHYzLjEuMVxuICogaHR0cHM6Ly9qcXVlcnkuY29tL1xuICpcbiAqIEluY2x1ZGVzIFNpenpsZS5qc1xuICogaHR0cHM6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IGpRdWVyeSBGb3VuZGF0aW9uIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDE2LTA5LTIyVDIyOjMwWlxuICovXG4oIGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG5cblx0XCJ1c2Ugc3RyaWN0XCI7XG5cblx0aWYgKCB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIiApIHtcblxuXHRcdC8vIEZvciBDb21tb25KUyBhbmQgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgd2hlcmUgYSBwcm9wZXIgYHdpbmRvd2Bcblx0XHQvLyBpcyBwcmVzZW50LCBleGVjdXRlIHRoZSBmYWN0b3J5IGFuZCBnZXQgalF1ZXJ5LlxuXHRcdC8vIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3QgaGF2ZSBhIGB3aW5kb3dgIHdpdGggYSBgZG9jdW1lbnRgXG5cdFx0Ly8gKHN1Y2ggYXMgTm9kZS5qcyksIGV4cG9zZSBhIGZhY3RvcnkgYXMgbW9kdWxlLmV4cG9ydHMuXG5cdFx0Ly8gVGhpcyBhY2NlbnR1YXRlcyB0aGUgbmVlZCBmb3IgdGhlIGNyZWF0aW9uIG9mIGEgcmVhbCBgd2luZG93YC5cblx0XHQvLyBlLmcuIHZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpKHdpbmRvdyk7XG5cdFx0Ly8gU2VlIHRpY2tldCAjMTQ1NDkgZm9yIG1vcmUgaW5mby5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/XG5cdFx0XHRmYWN0b3J5KCBnbG9iYWwsIHRydWUgKSA6XG5cdFx0XHRmdW5jdGlvbiggdyApIHtcblx0XHRcdFx0aWYgKCAhdy5kb2N1bWVudCApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhY3RvcnkoIHcgKTtcblx0XHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeSggZ2xvYmFsICk7XG5cdH1cblxuLy8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcbn0gKSggdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCB3aW5kb3csIG5vR2xvYmFsICkge1xuXG4vLyBFZGdlIDw9IDEyIC0gMTMrLCBGaXJlZm94IDw9MTggLSA0NSssIElFIDEwIC0gMTEsIFNhZmFyaSA1LjEgLSA5KywgaU9TIDYgLSA5LjFcbi8vIHRocm93IGV4Y2VwdGlvbnMgd2hlbiBub24tc3RyaWN0IGNvZGUgKGUuZy4sIEFTUC5ORVQgNC41KSBhY2Nlc3NlcyBzdHJpY3QgbW9kZVxuLy8gYXJndW1lbnRzLmNhbGxlZS5jYWxsZXIgKHRyYWMtMTMzMzUpLiBCdXQgYXMgb2YgalF1ZXJ5IDMuMCAoMjAxNiksIHN0cmljdCBtb2RlIHNob3VsZCBiZSBjb21tb25cbi8vIGVub3VnaCB0aGF0IGFsbCBzdWNoIGF0dGVtcHRzIGFyZSBndWFyZGVkIGluIGEgdHJ5IGJsb2NrLlxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBhcnIgPSBbXTtcblxudmFyIGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50O1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbnZhciBzbGljZSA9IGFyci5zbGljZTtcblxudmFyIGNvbmNhdCA9IGFyci5jb25jYXQ7XG5cbnZhciBwdXNoID0gYXJyLnB1c2g7XG5cbnZhciBpbmRleE9mID0gYXJyLmluZGV4T2Y7XG5cbnZhciBjbGFzczJ0eXBlID0ge307XG5cbnZhciB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmc7XG5cbnZhciBoYXNPd24gPSBjbGFzczJ0eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgZm5Ub1N0cmluZyA9IGhhc093bi50b1N0cmluZztcblxudmFyIE9iamVjdEZ1bmN0aW9uU3RyaW5nID0gZm5Ub1N0cmluZy5jYWxsKCBPYmplY3QgKTtcblxudmFyIHN1cHBvcnQgPSB7fTtcblxuXG5cblx0ZnVuY3Rpb24gRE9NRXZhbCggY29kZSwgZG9jICkge1xuXHRcdGRvYyA9IGRvYyB8fCBkb2N1bWVudDtcblxuXHRcdHZhciBzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCggXCJzY3JpcHRcIiApO1xuXG5cdFx0c2NyaXB0LnRleHQgPSBjb2RlO1xuXHRcdGRvYy5oZWFkLmFwcGVuZENoaWxkKCBzY3JpcHQgKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBzY3JpcHQgKTtcblx0fVxuLyogZ2xvYmFsIFN5bWJvbCAqL1xuLy8gRGVmaW5pbmcgdGhpcyBnbG9iYWwgaW4gLmVzbGludHJjLmpzb24gd291bGQgY3JlYXRlIGEgZGFuZ2VyIG9mIHVzaW5nIHRoZSBnbG9iYWxcbi8vIHVuZ3VhcmRlZCBpbiBhbm90aGVyIHBsYWNlLCBpdCBzZWVtcyBzYWZlciB0byBkZWZpbmUgZ2xvYmFsIG9ubHkgZm9yIHRoaXMgbW9kdWxlXG5cblxuXG52YXJcblx0dmVyc2lvbiA9IFwiMy4xLjFcIixcblxuXHQvLyBEZWZpbmUgYSBsb2NhbCBjb3B5IG9mIGpRdWVyeVxuXHRqUXVlcnkgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cblx0XHQvLyBUaGUgalF1ZXJ5IG9iamVjdCBpcyBhY3R1YWxseSBqdXN0IHRoZSBpbml0IGNvbnN0cnVjdG9yICdlbmhhbmNlZCdcblx0XHQvLyBOZWVkIGluaXQgaWYgalF1ZXJ5IGlzIGNhbGxlZCAoanVzdCBhbGxvdyBlcnJvciB0byBiZSB0aHJvd24gaWYgbm90IGluY2x1ZGVkKVxuXHRcdHJldHVybiBuZXcgalF1ZXJ5LmZuLmluaXQoIHNlbGVjdG9yLCBjb250ZXh0ICk7XG5cdH0sXG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5XG5cdC8vIE1ha2Ugc3VyZSB3ZSB0cmltIEJPTSBhbmQgTkJTUFxuXHRydHJpbSA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxcblxuXHQvLyBNYXRjaGVzIGRhc2hlZCBzdHJpbmcgZm9yIGNhbWVsaXppbmdcblx0cm1zUHJlZml4ID0gL14tbXMtLyxcblx0cmRhc2hBbHBoYSA9IC8tKFthLXpdKS9nLFxuXG5cdC8vIFVzZWQgYnkgalF1ZXJ5LmNhbWVsQ2FzZSBhcyBjYWxsYmFjayB0byByZXBsYWNlKClcblx0ZmNhbWVsQ2FzZSA9IGZ1bmN0aW9uKCBhbGwsIGxldHRlciApIHtcblx0XHRyZXR1cm4gbGV0dGVyLnRvVXBwZXJDYXNlKCk7XG5cdH07XG5cbmpRdWVyeS5mbiA9IGpRdWVyeS5wcm90b3R5cGUgPSB7XG5cblx0Ly8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuXHRqcXVlcnk6IHZlcnNpb24sXG5cblx0Y29uc3RydWN0b3I6IGpRdWVyeSxcblxuXHQvLyBUaGUgZGVmYXVsdCBsZW5ndGggb2YgYSBqUXVlcnkgb2JqZWN0IGlzIDBcblx0bGVuZ3RoOiAwLFxuXG5cdHRvQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdH0sXG5cblx0Ly8gR2V0IHRoZSBOdGggZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldCBPUlxuXHQvLyBHZXQgdGhlIHdob2xlIG1hdGNoZWQgZWxlbWVudCBzZXQgYXMgYSBjbGVhbiBhcnJheVxuXHRnZXQ6IGZ1bmN0aW9uKCBudW0gKSB7XG5cblx0XHQvLyBSZXR1cm4gYWxsIHRoZSBlbGVtZW50cyBpbiBhIGNsZWFuIGFycmF5XG5cdFx0aWYgKCBudW0gPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBzbGljZS5jYWxsKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIGp1c3QgdGhlIG9uZSBlbGVtZW50IGZyb20gdGhlIHNldFxuXHRcdHJldHVybiBudW0gPCAwID8gdGhpc1sgbnVtICsgdGhpcy5sZW5ndGggXSA6IHRoaXNbIG51bSBdO1xuXHR9LFxuXG5cdC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIHB1c2ggaXQgb250byB0aGUgc3RhY2tcblx0Ly8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG5cdHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xuXG5cdFx0Ly8gQnVpbGQgYSBuZXcgalF1ZXJ5IG1hdGNoZWQgZWxlbWVudCBzZXRcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKCB0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zICk7XG5cblx0XHQvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXHRcdHJldC5wcmV2T2JqZWN0ID0gdGhpcztcblxuXHRcdC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuXHRlYWNoOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYWNoKCB0aGlzLCBjYWxsYmFjayApO1xuXHR9LFxuXG5cdG1hcDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5Lm1hcCggdGhpcywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gY2FsbGJhY2suY2FsbCggZWxlbSwgaSwgZWxlbSApO1xuXHRcdH0gKSApO1xuXHR9LFxuXG5cdHNsaWNlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHNsaWNlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSApO1xuXHR9LFxuXG5cdGZpcnN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggMCApO1xuXHR9LFxuXG5cdGxhc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAtMSApO1xuXHR9LFxuXG5cdGVxOiBmdW5jdGlvbiggaSApIHtcblx0XHR2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRqID0gK2kgKyAoIGkgPCAwID8gbGVuIDogMCApO1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggaiA+PSAwICYmIGogPCBsZW4gPyBbIHRoaXNbIGogXSBdIDogW10gKTtcblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcigpO1xuXHR9LFxuXG5cdC8vIEZvciBpbnRlcm5hbCB1c2Ugb25seS5cblx0Ly8gQmVoYXZlcyBsaWtlIGFuIEFycmF5J3MgbWV0aG9kLCBub3QgbGlrZSBhIGpRdWVyeSBtZXRob2QuXG5cdHB1c2g6IHB1c2gsXG5cdHNvcnQ6IGFyci5zb3J0LFxuXHRzcGxpY2U6IGFyci5zcGxpY2Vcbn07XG5cbmpRdWVyeS5leHRlbmQgPSBqUXVlcnkuZm4uZXh0ZW5kID0gZnVuY3Rpb24oKSB7XG5cdHZhciBvcHRpb25zLCBuYW1lLCBzcmMsIGNvcHksIGNvcHlJc0FycmF5LCBjbG9uZSxcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIDAgXSB8fCB7fSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblxuXHRcdC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIGkgXSB8fCB7fTtcblx0XHRpKys7XG5cdH1cblxuXHQvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblx0aWYgKCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICFqUXVlcnkuaXNGdW5jdGlvbiggdGFyZ2V0ICkgKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHQvLyBFeHRlbmQgalF1ZXJ5IGl0c2VsZiBpZiBvbmx5IG9uZSBhcmd1bWVudCBpcyBwYXNzZWRcblx0aWYgKCBpID09PSBsZW5ndGggKSB7XG5cdFx0dGFyZ2V0ID0gdGhpcztcblx0XHRpLS07XG5cdH1cblxuXHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblxuXHRcdC8vIE9ubHkgZGVhbCB3aXRoIG5vbi1udWxsL3VuZGVmaW5lZCB2YWx1ZXNcblx0XHRpZiAoICggb3B0aW9ucyA9IGFyZ3VtZW50c1sgaSBdICkgIT0gbnVsbCApIHtcblxuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdFx0XHRzcmMgPSB0YXJnZXRbIG5hbWUgXTtcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbIG5hbWUgXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICggdGFyZ2V0ID09PSBjb3B5ICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdGlmICggZGVlcCAmJiBjb3B5ICYmICggalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvcHkgKSB8fFxuXHRcdFx0XHRcdCggY29weUlzQXJyYXkgPSBqUXVlcnkuaXNBcnJheSggY29weSApICkgKSApIHtcblxuXHRcdFx0XHRcdGlmICggY29weUlzQXJyYXkgKSB7XG5cdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgalF1ZXJ5LmlzQXJyYXkoIHNyYyApID8gc3JjIDogW107XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIHNyYyApID8gc3JjIDoge307XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0dGFyZ2V0WyBuYW1lIF0gPSBqUXVlcnkuZXh0ZW5kKCBkZWVwLCBjbG9uZSwgY29weSApO1xuXG5cdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0fSBlbHNlIGlmICggY29weSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0gY29weTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gVW5pcXVlIGZvciBlYWNoIGNvcHkgb2YgalF1ZXJ5IG9uIHRoZSBwYWdlXG5cdGV4cGFuZG86IFwialF1ZXJ5XCIgKyAoIHZlcnNpb24gKyBNYXRoLnJhbmRvbSgpICkucmVwbGFjZSggL1xcRC9nLCBcIlwiICksXG5cblx0Ly8gQXNzdW1lIGpRdWVyeSBpcyByZWFkeSB3aXRob3V0IHRoZSByZWFkeSBtb2R1bGVcblx0aXNSZWFkeTogdHJ1ZSxcblxuXHRlcnJvcjogZnVuY3Rpb24oIG1zZyApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIG1zZyApO1xuXHR9LFxuXG5cdG5vb3A6IGZ1bmN0aW9uKCkge30sXG5cblx0aXNGdW5jdGlvbjogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRyZXR1cm4galF1ZXJ5LnR5cGUoIG9iaiApID09PSBcImZ1bmN0aW9uXCI7XG5cdH0sXG5cblx0aXNBcnJheTogQXJyYXkuaXNBcnJheSxcblxuXHRpc1dpbmRvdzogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRyZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xuXHR9LFxuXG5cdGlzTnVtZXJpYzogZnVuY3Rpb24oIG9iaiApIHtcblxuXHRcdC8vIEFzIG9mIGpRdWVyeSAzLjAsIGlzTnVtZXJpYyBpcyBsaW1pdGVkIHRvXG5cdFx0Ly8gc3RyaW5ncyBhbmQgbnVtYmVycyAocHJpbWl0aXZlcyBvciBvYmplY3RzKVxuXHRcdC8vIHRoYXQgY2FuIGJlIGNvZXJjZWQgdG8gZmluaXRlIG51bWJlcnMgKGdoLTI2NjIpXG5cdFx0dmFyIHR5cGUgPSBqUXVlcnkudHlwZSggb2JqICk7XG5cdFx0cmV0dXJuICggdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlID09PSBcInN0cmluZ1wiICkgJiZcblxuXHRcdFx0Ly8gcGFyc2VGbG9hdCBOYU5zIG51bWVyaWMtY2FzdCBmYWxzZSBwb3NpdGl2ZXMgKFwiXCIpXG5cdFx0XHQvLyAuLi5idXQgbWlzaW50ZXJwcmV0cyBsZWFkaW5nLW51bWJlciBzdHJpbmdzLCBwYXJ0aWN1bGFybHkgaGV4IGxpdGVyYWxzIChcIjB4Li4uXCIpXG5cdFx0XHQvLyBzdWJ0cmFjdGlvbiBmb3JjZXMgaW5maW5pdGllcyB0byBOYU5cblx0XHRcdCFpc05hTiggb2JqIC0gcGFyc2VGbG9hdCggb2JqICkgKTtcblx0fSxcblxuXHRpc1BsYWluT2JqZWN0OiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHZhciBwcm90bywgQ3RvcjtcblxuXHRcdC8vIERldGVjdCBvYnZpb3VzIG5lZ2F0aXZlc1xuXHRcdC8vIFVzZSB0b1N0cmluZyBpbnN0ZWFkIG9mIGpRdWVyeS50eXBlIHRvIGNhdGNoIGhvc3Qgb2JqZWN0c1xuXHRcdGlmICggIW9iaiB8fCB0b1N0cmluZy5jYWxsKCBvYmogKSAhPT0gXCJbb2JqZWN0IE9iamVjdF1cIiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHRwcm90byA9IGdldFByb3RvKCBvYmogKTtcblxuXHRcdC8vIE9iamVjdHMgd2l0aCBubyBwcm90b3R5cGUgKGUuZy4sIGBPYmplY3QuY3JlYXRlKCBudWxsIClgKSBhcmUgcGxhaW5cblx0XHRpZiAoICFwcm90byApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblxuXHRcdC8vIE9iamVjdHMgd2l0aCBwcm90b3R5cGUgYXJlIHBsYWluIGlmZiB0aGV5IHdlcmUgY29uc3RydWN0ZWQgYnkgYSBnbG9iYWwgT2JqZWN0IGZ1bmN0aW9uXG5cdFx0Q3RvciA9IGhhc093bi5jYWxsKCBwcm90bywgXCJjb25zdHJ1Y3RvclwiICkgJiYgcHJvdG8uY29uc3RydWN0b3I7XG5cdFx0cmV0dXJuIHR5cGVvZiBDdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgZm5Ub1N0cmluZy5jYWxsKCBDdG9yICkgPT09IE9iamVjdEZ1bmN0aW9uU3RyaW5nO1xuXHR9LFxuXG5cdGlzRW1wdHlPYmplY3Q6IGZ1bmN0aW9uKCBvYmogKSB7XG5cblx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyAqL1xuXHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vZXNsaW50L2VzbGludC9pc3N1ZXMvNjEyNVxuXHRcdHZhciBuYW1lO1xuXG5cdFx0Zm9yICggbmFtZSBpbiBvYmogKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdHR5cGU6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0aWYgKCBvYmogPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiBvYmogKyBcIlwiO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seSAoZnVuY3Rpb25pc2ggUmVnRXhwKVxuXHRcdHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiA/XG5cdFx0XHRjbGFzczJ0eXBlWyB0b1N0cmluZy5jYWxsKCBvYmogKSBdIHx8IFwib2JqZWN0XCIgOlxuXHRcdFx0dHlwZW9mIG9iajtcblx0fSxcblxuXHQvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBnbG9iYWwgY29udGV4dFxuXHRnbG9iYWxFdmFsOiBmdW5jdGlvbiggY29kZSApIHtcblx0XHRET01FdmFsKCBjb2RlICk7XG5cdH0sXG5cblx0Ly8gQ29udmVydCBkYXNoZWQgdG8gY2FtZWxDYXNlOyB1c2VkIGJ5IHRoZSBjc3MgYW5kIGRhdGEgbW9kdWxlc1xuXHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSwgRWRnZSAxMiAtIDEzXG5cdC8vIE1pY3Jvc29mdCBmb3Jnb3QgdG8gaHVtcCB0aGVpciB2ZW5kb3IgcHJlZml4ICgjOTU3Milcblx0Y2FtZWxDYXNlOiBmdW5jdGlvbiggc3RyaW5nICkge1xuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSggcm1zUHJlZml4LCBcIm1zLVwiICkucmVwbGFjZSggcmRhc2hBbHBoYSwgZmNhbWVsQ2FzZSApO1xuXHR9LFxuXG5cdG5vZGVOYW1lOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRyZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0fSxcblxuXHRlYWNoOiBmdW5jdGlvbiggb2JqLCBjYWxsYmFjayApIHtcblx0XHR2YXIgbGVuZ3RoLCBpID0gMDtcblxuXHRcdGlmICggaXNBcnJheUxpa2UoIG9iaiApICkge1xuXHRcdFx0bGVuZ3RoID0gb2JqLmxlbmd0aDtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKCBpIGluIG9iaiApIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjay5jYWxsKCBvYmpbIGkgXSwgaSwgb2JqWyBpIF0gKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gb2JqO1xuXHR9LFxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seVxuXHR0cmltOiBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRyZXR1cm4gdGV4dCA9PSBudWxsID9cblx0XHRcdFwiXCIgOlxuXHRcdFx0KCB0ZXh0ICsgXCJcIiApLnJlcGxhY2UoIHJ0cmltLCBcIlwiICk7XG5cdH0sXG5cblx0Ly8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYWtlQXJyYXk6IGZ1bmN0aW9uKCBhcnIsIHJlc3VsdHMgKSB7XG5cdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRpZiAoIGFyciAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBpc0FycmF5TGlrZSggT2JqZWN0KCBhcnIgKSApICkge1xuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHJldCxcblx0XHRcdFx0XHR0eXBlb2YgYXJyID09PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHRbIGFyciBdIDogYXJyXG5cdFx0XHRcdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdXNoLmNhbGwoIHJldCwgYXJyICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHRpbkFycmF5OiBmdW5jdGlvbiggZWxlbSwgYXJyLCBpICkge1xuXHRcdHJldHVybiBhcnIgPT0gbnVsbCA/IC0xIDogaW5kZXhPZi5jYWxsKCBhcnIsIGVsZW0sIGkgKTtcblx0fSxcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRtZXJnZTogZnVuY3Rpb24oIGZpcnN0LCBzZWNvbmQgKSB7XG5cdFx0dmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxuXHRcdFx0aiA9IDAsXG5cdFx0XHRpID0gZmlyc3QubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XG5cdFx0XHRmaXJzdFsgaSsrIF0gPSBzZWNvbmRbIGogXTtcblx0XHR9XG5cblx0XHRmaXJzdC5sZW5ndGggPSBpO1xuXG5cdFx0cmV0dXJuIGZpcnN0O1xuXHR9LFxuXG5cdGdyZXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGludmVydCApIHtcblx0XHR2YXIgY2FsbGJhY2tJbnZlcnNlLFxuXHRcdFx0bWF0Y2hlcyA9IFtdLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGgsXG5cdFx0XHRjYWxsYmFja0V4cGVjdCA9ICFpbnZlcnQ7XG5cblx0XHQvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgb25seSBzYXZpbmcgdGhlIGl0ZW1zXG5cdFx0Ly8gdGhhdCBwYXNzIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb25cblx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdGNhbGxiYWNrSW52ZXJzZSA9ICFjYWxsYmFjayggZWxlbXNbIGkgXSwgaSApO1xuXHRcdFx0aWYgKCBjYWxsYmFja0ludmVyc2UgIT09IGNhbGxiYWNrRXhwZWN0ICkge1xuXHRcdFx0XHRtYXRjaGVzLnB1c2goIGVsZW1zWyBpIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWF0Y2hlcztcblx0fSxcblxuXHQvLyBhcmcgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcblx0bWFwOiBmdW5jdGlvbiggZWxlbXMsIGNhbGxiYWNrLCBhcmcgKSB7XG5cdFx0dmFyIGxlbmd0aCwgdmFsdWUsXG5cdFx0XHRpID0gMCxcblx0XHRcdHJldCA9IFtdO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIHRyYW5zbGF0aW5nIGVhY2ggb2YgdGhlIGl0ZW1zIHRvIHRoZWlyIG5ldyB2YWx1ZXNcblx0XHRpZiAoIGlzQXJyYXlMaWtlKCBlbGVtcyApICkge1xuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soIGVsZW1zWyBpIF0sIGksIGFyZyApO1xuXG5cdFx0XHRcdGlmICggdmFsdWUgIT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXQucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBldmVyeSBrZXkgb24gdGhlIG9iamVjdCxcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICggaSBpbiBlbGVtcyApIHtcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cblx0XHRcdFx0aWYgKCB2YWx1ZSAhPSBudWxsICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuXHRcdHJldHVybiBjb25jYXQuYXBwbHkoIFtdLCByZXQgKTtcblx0fSxcblxuXHQvLyBBIGdsb2JhbCBHVUlEIGNvdW50ZXIgZm9yIG9iamVjdHNcblx0Z3VpZDogMSxcblxuXHQvLyBCaW5kIGEgZnVuY3Rpb24gdG8gYSBjb250ZXh0LCBvcHRpb25hbGx5IHBhcnRpYWxseSBhcHBseWluZyBhbnlcblx0Ly8gYXJndW1lbnRzLlxuXHRwcm94eTogZnVuY3Rpb24oIGZuLCBjb250ZXh0ICkge1xuXHRcdHZhciB0bXAsIGFyZ3MsIHByb3h5O1xuXG5cdFx0aWYgKCB0eXBlb2YgY29udGV4dCA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHRtcCA9IGZuWyBjb250ZXh0IF07XG5cdFx0XHRjb250ZXh0ID0gZm47XG5cdFx0XHRmbiA9IHRtcDtcblx0XHR9XG5cblx0XHQvLyBRdWljayBjaGVjayB0byBkZXRlcm1pbmUgaWYgdGFyZ2V0IGlzIGNhbGxhYmxlLCBpbiB0aGUgc3BlY1xuXHRcdC8vIHRoaXMgdGhyb3dzIGEgVHlwZUVycm9yLCBidXQgd2Ugd2lsbCBqdXN0IHJldHVybiB1bmRlZmluZWQuXG5cdFx0aWYgKCAhalF1ZXJ5LmlzRnVuY3Rpb24oIGZuICkgKSB7XG5cdFx0XHRyZXR1cm4gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8vIFNpbXVsYXRlZCBiaW5kXG5cdFx0YXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMiApO1xuXHRcdHByb3h5ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gZm4uYXBwbHkoIGNvbnRleHQgfHwgdGhpcywgYXJncy5jb25jYXQoIHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApICkgKTtcblx0XHR9O1xuXG5cdFx0Ly8gU2V0IHRoZSBndWlkIG9mIHVuaXF1ZSBoYW5kbGVyIHRvIHRoZSBzYW1lIG9mIG9yaWdpbmFsIGhhbmRsZXIsIHNvIGl0IGNhbiBiZSByZW1vdmVkXG5cdFx0cHJveHkuZ3VpZCA9IGZuLmd1aWQgPSBmbi5ndWlkIHx8IGpRdWVyeS5ndWlkKys7XG5cblx0XHRyZXR1cm4gcHJveHk7XG5cdH0sXG5cblx0bm93OiBEYXRlLm5vdyxcblxuXHQvLyBqUXVlcnkuc3VwcG9ydCBpcyBub3QgdXNlZCBpbiBDb3JlIGJ1dCBvdGhlciBwcm9qZWN0cyBhdHRhY2ggdGhlaXJcblx0Ly8gcHJvcGVydGllcyB0byBpdCBzbyBpdCBuZWVkcyB0byBleGlzdC5cblx0c3VwcG9ydDogc3VwcG9ydFxufSApO1xuXG5pZiAoIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0alF1ZXJ5LmZuWyBTeW1ib2wuaXRlcmF0b3IgXSA9IGFyclsgU3ltYm9sLml0ZXJhdG9yIF07XG59XG5cbi8vIFBvcHVsYXRlIHRoZSBjbGFzczJ0eXBlIG1hcFxualF1ZXJ5LmVhY2goIFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdCggXCIgXCIgKSxcbmZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHRjbGFzczJ0eXBlWyBcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIgXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbn0gKTtcblxuZnVuY3Rpb24gaXNBcnJheUxpa2UoIG9iaiApIHtcblxuXHQvLyBTdXBwb3J0OiByZWFsIGlPUyA4LjIgb25seSAobm90IHJlcHJvZHVjaWJsZSBpbiBzaW11bGF0b3IpXG5cdC8vIGBpbmAgY2hlY2sgdXNlZCB0byBwcmV2ZW50IEpJVCBlcnJvciAoZ2gtMjE0NSlcblx0Ly8gaGFzT3duIGlzbid0IHVzZWQgaGVyZSBkdWUgdG8gZmFsc2UgbmVnYXRpdmVzXG5cdC8vIHJlZ2FyZGluZyBOb2RlbGlzdCBsZW5ndGggaW4gSUVcblx0dmFyIGxlbmd0aCA9ICEhb2JqICYmIFwibGVuZ3RoXCIgaW4gb2JqICYmIG9iai5sZW5ndGgsXG5cdFx0dHlwZSA9IGpRdWVyeS50eXBlKCBvYmogKTtcblxuXHRpZiAoIHR5cGUgPT09IFwiZnVuY3Rpb25cIiB8fCBqUXVlcnkuaXNXaW5kb3coIG9iaiApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0eXBlID09PSBcImFycmF5XCIgfHwgbGVuZ3RoID09PSAwIHx8XG5cdFx0dHlwZW9mIGxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJiBsZW5ndGggPiAwICYmICggbGVuZ3RoIC0gMSApIGluIG9iajtcbn1cbnZhciBTaXp6bGUgPVxuLyohXG4gKiBTaXp6bGUgQ1NTIFNlbGVjdG9yIEVuZ2luZSB2Mi4zLjNcbiAqIGh0dHBzOi8vc2l6emxlanMuY29tL1xuICpcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDE2LTA4LTA4XG4gKi9cbihmdW5jdGlvbiggd2luZG93ICkge1xuXG52YXIgaSxcblx0c3VwcG9ydCxcblx0RXhwcixcblx0Z2V0VGV4dCxcblx0aXNYTUwsXG5cdHRva2VuaXplLFxuXHRjb21waWxlLFxuXHRzZWxlY3QsXG5cdG91dGVybW9zdENvbnRleHQsXG5cdHNvcnRJbnB1dCxcblx0aGFzRHVwbGljYXRlLFxuXG5cdC8vIExvY2FsIGRvY3VtZW50IHZhcnNcblx0c2V0RG9jdW1lbnQsXG5cdGRvY3VtZW50LFxuXHRkb2NFbGVtLFxuXHRkb2N1bWVudElzSFRNTCxcblx0cmJ1Z2d5UVNBLFxuXHRyYnVnZ3lNYXRjaGVzLFxuXHRtYXRjaGVzLFxuXHRjb250YWlucyxcblxuXHQvLyBJbnN0YW5jZS1zcGVjaWZpYyBkYXRhXG5cdGV4cGFuZG8gPSBcInNpenpsZVwiICsgMSAqIG5ldyBEYXRlKCksXG5cdHByZWZlcnJlZERvYyA9IHdpbmRvdy5kb2N1bWVudCxcblx0ZGlycnVucyA9IDAsXG5cdGRvbmUgPSAwLFxuXHRjbGFzc0NhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0dG9rZW5DYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdGNvbXBpbGVyQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRzb3J0T3JkZXIgPSBmdW5jdGlvbiggYSwgYiApIHtcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gMDtcblx0fSxcblxuXHQvLyBJbnN0YW5jZSBtZXRob2RzXG5cdGhhc093biA9ICh7fSkuaGFzT3duUHJvcGVydHksXG5cdGFyciA9IFtdLFxuXHRwb3AgPSBhcnIucG9wLFxuXHRwdXNoX25hdGl2ZSA9IGFyci5wdXNoLFxuXHRwdXNoID0gYXJyLnB1c2gsXG5cdHNsaWNlID0gYXJyLnNsaWNlLFxuXHQvLyBVc2UgYSBzdHJpcHBlZC1kb3duIGluZGV4T2YgYXMgaXQncyBmYXN0ZXIgdGhhbiBuYXRpdmVcblx0Ly8gaHR0cHM6Ly9qc3BlcmYuY29tL3Rob3ItaW5kZXhvZi12cy1mb3IvNVxuXHRpbmRleE9mID0gZnVuY3Rpb24oIGxpc3QsIGVsZW0gKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0bGVuID0gbGlzdC5sZW5ndGg7XG5cdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRpZiAoIGxpc3RbaV0gPT09IGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH0sXG5cblx0Ym9vbGVhbnMgPSBcImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsXG5cblx0Ly8gUmVndWxhciBleHByZXNzaW9uc1xuXG5cdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc2VsZWN0b3JzLyN3aGl0ZXNwYWNlXG5cdHdoaXRlc3BhY2UgPSBcIltcXFxceDIwXFxcXHRcXFxcclxcXFxuXFxcXGZdXCIsXG5cblx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI3ZhbHVlLWRlZi1pZGVudGlmaWVyXG5cdGlkZW50aWZpZXIgPSBcIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcMC1cXFxceGEwXSkrXCIsXG5cblx0Ly8gQXR0cmlidXRlIHNlbGVjdG9yczogaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXG5cdGF0dHJpYnV0ZXMgPSBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFwiICsgaWRlbnRpZmllciArIFwiKSg/OlwiICsgd2hpdGVzcGFjZSArXG5cdFx0Ly8gT3BlcmF0b3IgKGNhcHR1cmUgMilcblx0XHRcIiooWypeJHwhfl0/PSlcIiArIHdoaXRlc3BhY2UgK1xuXHRcdC8vIFwiQXR0cmlidXRlIHZhbHVlcyBtdXN0IGJlIENTUyBpZGVudGlmaWVycyBbY2FwdHVyZSA1XSBvciBzdHJpbmdzIFtjYXB0dXJlIDMgb3IgY2FwdHVyZSA0XVwiXG5cdFx0XCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIiArIGlkZW50aWZpZXIgKyBcIikpfClcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFwiKlxcXFxdXCIsXG5cblx0cHNldWRvcyA9IFwiOihcIiArIGlkZW50aWZpZXIgKyBcIikoPzpcXFxcKChcIiArXG5cdFx0Ly8gVG8gcmVkdWNlIHRoZSBudW1iZXIgb2Ygc2VsZWN0b3JzIG5lZWRpbmcgdG9rZW5pemUgaW4gdGhlIHByZUZpbHRlciwgcHJlZmVyIGFyZ3VtZW50czpcblx0XHQvLyAxLiBxdW90ZWQgKGNhcHR1cmUgMzsgY2FwdHVyZSA0IG9yIGNhcHR1cmUgNSlcblx0XHRcIignKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfFwiICtcblx0XHQvLyAyLiBzaW1wbGUgKGNhcHR1cmUgNilcblx0XHRcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIiArIGF0dHJpYnV0ZXMgKyBcIikqKXxcIiArXG5cdFx0Ly8gMy4gYW55dGhpbmcgZWxzZSAoY2FwdHVyZSAyKVxuXHRcdFwiLipcIiArXG5cdFx0XCIpXFxcXCl8KVwiLFxuXG5cdC8vIExlYWRpbmcgYW5kIG5vbi1lc2NhcGVkIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGNhcHR1cmluZyBzb21lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgcHJlY2VkaW5nIHRoZSBsYXR0ZXJcblx0cndoaXRlc3BhY2UgPSBuZXcgUmVnRXhwKCB3aGl0ZXNwYWNlICsgXCIrXCIsIFwiZ1wiICksXG5cdHJ0cmltID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiICsgd2hpdGVzcGFjZSArIFwiKyRcIiwgXCJnXCIgKSxcblxuXHRyY29tbWEgPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiosXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIgKSxcblx0cmNvbWJpbmF0b3JzID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFs+K35dfFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgd2hpdGVzcGFjZSArIFwiKlwiICksXG5cblx0cmF0dHJpYnV0ZVF1b3RlcyA9IG5ldyBSZWdFeHAoIFwiPVwiICsgd2hpdGVzcGFjZSArIFwiKihbXlxcXFxdJ1xcXCJdKj8pXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXF1cIiwgXCJnXCIgKSxcblxuXHRycHNldWRvID0gbmV3IFJlZ0V4cCggcHNldWRvcyApLFxuXHRyaWRlbnRpZmllciA9IG5ldyBSZWdFeHAoIFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiICksXG5cblx0bWF0Y2hFeHByID0ge1xuXHRcdFwiSURcIjogbmV3IFJlZ0V4cCggXCJeIyhcIiArIGlkZW50aWZpZXIgKyBcIilcIiApLFxuXHRcdFwiQ0xBU1NcIjogbmV3IFJlZ0V4cCggXCJeXFxcXC4oXCIgKyBpZGVudGlmaWVyICsgXCIpXCIgKSxcblx0XHRcIlRBR1wiOiBuZXcgUmVnRXhwKCBcIl4oXCIgKyBpZGVudGlmaWVyICsgXCJ8WypdKVwiICksXG5cdFx0XCJBVFRSXCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgYXR0cmlidXRlcyApLFxuXHRcdFwiUFNFVURPXCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgcHNldWRvcyApLFxuXHRcdFwiQ0hJTERcIjogbmV3IFJlZ0V4cCggXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiICsgd2hpdGVzcGFjZSArXG5cdFx0XHRcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiICsgd2hpdGVzcGFjZSArIFwiKig/OihbKy1dfClcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqKFxcXFxkKyl8KSlcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpXCIsIFwiaVwiICksXG5cdFx0XCJib29sXCI6IG5ldyBSZWdFeHAoIFwiXig/OlwiICsgYm9vbGVhbnMgKyBcIikkXCIsIFwiaVwiICksXG5cdFx0Ly8gRm9yIHVzZSBpbiBsaWJyYXJpZXMgaW1wbGVtZW50aW5nIC5pcygpXG5cdFx0Ly8gV2UgdXNlIHRoaXMgZm9yIFBPUyBtYXRjaGluZyBpbiBgc2VsZWN0YFxuXHRcdFwibmVlZHNDb250ZXh0XCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArXG5cdFx0XHR3aGl0ZXNwYWNlICsgXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfCkoPz1bXi1dfCQpXCIsIFwiaVwiIClcblx0fSxcblxuXHRyaW5wdXRzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcblx0cmhlYWRlciA9IC9eaFxcZCQvaSxcblxuXHRybmF0aXZlID0gL15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxcblxuXHQvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcblx0cnF1aWNrRXhwciA9IC9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLFxuXG5cdHJzaWJsaW5nID0gL1srfl0vLFxuXG5cdC8vIENTUyBlc2NhcGVzXG5cdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCNlc2NhcGVkLWNoYXJhY3RlcnNcblx0cnVuZXNjYXBlID0gbmV3IFJlZ0V4cCggXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIiArIHdoaXRlc3BhY2UgKyBcIj98KFwiICsgd2hpdGVzcGFjZSArIFwiKXwuKVwiLCBcImlnXCIgKSxcblx0ZnVuZXNjYXBlID0gZnVuY3Rpb24oIF8sIGVzY2FwZWQsIGVzY2FwZWRXaGl0ZXNwYWNlICkge1xuXHRcdHZhciBoaWdoID0gXCIweFwiICsgZXNjYXBlZCAtIDB4MTAwMDA7XG5cdFx0Ly8gTmFOIG1lYW5zIG5vbi1jb2RlcG9pbnRcblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94PDI0XG5cdFx0Ly8gV29ya2Fyb3VuZCBlcnJvbmVvdXMgbnVtZXJpYyBpbnRlcnByZXRhdGlvbiBvZiArXCIweFwiXG5cdFx0cmV0dXJuIGhpZ2ggIT09IGhpZ2ggfHwgZXNjYXBlZFdoaXRlc3BhY2UgP1xuXHRcdFx0ZXNjYXBlZCA6XG5cdFx0XHRoaWdoIDwgMCA/XG5cdFx0XHRcdC8vIEJNUCBjb2RlcG9pbnRcblx0XHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCArIDB4MTAwMDAgKSA6XG5cdFx0XHRcdC8vIFN1cHBsZW1lbnRhbCBQbGFuZSBjb2RlcG9pbnQgKHN1cnJvZ2F0ZSBwYWlyKVxuXHRcdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDAgKTtcblx0fSxcblxuXHQvLyBDU1Mgc3RyaW5nL2lkZW50aWZpZXIgc2VyaWFsaXphdGlvblxuXHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI2NvbW1vbi1zZXJpYWxpemluZy1pZGlvbXNcblx0cmNzc2VzY2FwZSA9IC8oW1xcMC1cXHgxZlxceDdmXXxeLT9cXGQpfF4tJHxbXlxcMC1cXHgxZlxceDdmLVxcdUZGRkZcXHctXS9nLFxuXHRmY3NzZXNjYXBlID0gZnVuY3Rpb24oIGNoLCBhc0NvZGVQb2ludCApIHtcblx0XHRpZiAoIGFzQ29kZVBvaW50ICkge1xuXG5cdFx0XHQvLyBVKzAwMDAgTlVMTCBiZWNvbWVzIFUrRkZGRCBSRVBMQUNFTUVOVCBDSEFSQUNURVJcblx0XHRcdGlmICggY2ggPT09IFwiXFwwXCIgKSB7XG5cdFx0XHRcdHJldHVybiBcIlxcdUZGRkRcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCAoZGVwZW5kZW50IHVwb24gcG9zaXRpb24pIG51bWJlcnMgZ2V0IGVzY2FwZWQgYXMgY29kZSBwb2ludHNcblx0XHRcdHJldHVybiBjaC5zbGljZSggMCwgLTEgKSArIFwiXFxcXFwiICsgY2guY2hhckNvZGVBdCggY2gubGVuZ3RoIC0gMSApLnRvU3RyaW5nKCAxNiApICsgXCIgXCI7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXIgcG90ZW50aWFsbHktc3BlY2lhbCBBU0NJSSBjaGFyYWN0ZXJzIGdldCBiYWNrc2xhc2gtZXNjYXBlZFxuXHRcdHJldHVybiBcIlxcXFxcIiArIGNoO1xuXHR9LFxuXG5cdC8vIFVzZWQgZm9yIGlmcmFtZXNcblx0Ly8gU2VlIHNldERvY3VtZW50KClcblx0Ly8gUmVtb3ZpbmcgdGhlIGZ1bmN0aW9uIHdyYXBwZXIgY2F1c2VzIGEgXCJQZXJtaXNzaW9uIERlbmllZFwiXG5cdC8vIGVycm9yIGluIElFXG5cdHVubG9hZEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcblx0XHRzZXREb2N1bWVudCgpO1xuXHR9LFxuXG5cdGRpc2FibGVkQW5jZXN0b3IgPSBhZGRDb21iaW5hdG9yKFxuXHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IHRydWUgJiYgKFwiZm9ybVwiIGluIGVsZW0gfHwgXCJsYWJlbFwiIGluIGVsZW0pO1xuXHRcdH0sXG5cdFx0eyBkaXI6IFwicGFyZW50Tm9kZVwiLCBuZXh0OiBcImxlZ2VuZFwiIH1cblx0KTtcblxuLy8gT3B0aW1pemUgZm9yIHB1c2guYXBwbHkoIF8sIE5vZGVMaXN0IClcbnRyeSB7XG5cdHB1c2guYXBwbHkoXG5cdFx0KGFyciA9IHNsaWNlLmNhbGwoIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzICkpLFxuXHRcdHByZWZlcnJlZERvYy5jaGlsZE5vZGVzXG5cdCk7XG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NC4wXG5cdC8vIERldGVjdCBzaWxlbnRseSBmYWlsaW5nIHB1c2guYXBwbHlcblx0YXJyWyBwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGggXS5ub2RlVHlwZTtcbn0gY2F0Y2ggKCBlICkge1xuXHRwdXNoID0geyBhcHBseTogYXJyLmxlbmd0aCA/XG5cblx0XHQvLyBMZXZlcmFnZSBzbGljZSBpZiBwb3NzaWJsZVxuXHRcdGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcblx0XHRcdHB1c2hfbmF0aXZlLmFwcGx5KCB0YXJnZXQsIHNsaWNlLmNhbGwoZWxzKSApO1xuXHRcdH0gOlxuXG5cdFx0Ly8gU3VwcG9ydDogSUU8OVxuXHRcdC8vIE90aGVyd2lzZSBhcHBlbmQgZGlyZWN0bHlcblx0XHRmdW5jdGlvbiggdGFyZ2V0LCBlbHMgKSB7XG5cdFx0XHR2YXIgaiA9IHRhcmdldC5sZW5ndGgsXG5cdFx0XHRcdGkgPSAwO1xuXHRcdFx0Ly8gQ2FuJ3QgdHJ1c3QgTm9kZUxpc3QubGVuZ3RoXG5cdFx0XHR3aGlsZSAoICh0YXJnZXRbaisrXSA9IGVsc1tpKytdKSApIHt9XG5cdFx0XHR0YXJnZXQubGVuZ3RoID0gaiAtIDE7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBTaXp6bGUoIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuXHR2YXIgbSwgaSwgZWxlbSwgbmlkLCBtYXRjaCwgZ3JvdXBzLCBuZXdTZWxlY3Rvcixcblx0XHRuZXdDb250ZXh0ID0gY29udGV4dCAmJiBjb250ZXh0Lm93bmVyRG9jdW1lbnQsXG5cblx0XHQvLyBub2RlVHlwZSBkZWZhdWx0cyB0byA5LCBzaW5jZSBjb250ZXh0IGRlZmF1bHRzIHRvIGRvY3VtZW50XG5cdFx0bm9kZVR5cGUgPSBjb250ZXh0ID8gY29udGV4dC5ub2RlVHlwZSA6IDk7XG5cblx0cmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cblx0Ly8gUmV0dXJuIGVhcmx5IGZyb20gY2FsbHMgd2l0aCBpbnZhbGlkIHNlbGVjdG9yIG9yIGNvbnRleHRcblx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgfHwgIXNlbGVjdG9yIHx8XG5cdFx0bm9kZVR5cGUgIT09IDEgJiYgbm9kZVR5cGUgIT09IDkgJiYgbm9kZVR5cGUgIT09IDExICkge1xuXG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH1cblxuXHQvLyBUcnkgdG8gc2hvcnRjdXQgZmluZCBvcGVyYXRpb25zIChhcyBvcHBvc2VkIHRvIGZpbHRlcnMpIGluIEhUTUwgZG9jdW1lbnRzXG5cdGlmICggIXNlZWQgKSB7XG5cblx0XHRpZiAoICggY29udGV4dCA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogcHJlZmVycmVkRG9jICkgIT09IGRvY3VtZW50ICkge1xuXHRcdFx0c2V0RG9jdW1lbnQoIGNvbnRleHQgKTtcblx0XHR9XG5cdFx0Y29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG5cblx0XHRpZiAoIGRvY3VtZW50SXNIVE1MICkge1xuXG5cdFx0XHQvLyBJZiB0aGUgc2VsZWN0b3IgaXMgc3VmZmljaWVudGx5IHNpbXBsZSwgdHJ5IHVzaW5nIGEgXCJnZXQqQnkqXCIgRE9NIG1ldGhvZFxuXHRcdFx0Ly8gKGV4Y2VwdGluZyBEb2N1bWVudEZyYWdtZW50IGNvbnRleHQsIHdoZXJlIHRoZSBtZXRob2RzIGRvbid0IGV4aXN0KVxuXHRcdFx0aWYgKCBub2RlVHlwZSAhPT0gMTEgJiYgKG1hdGNoID0gcnF1aWNrRXhwci5leGVjKCBzZWxlY3RvciApKSApIHtcblxuXHRcdFx0XHQvLyBJRCBzZWxlY3RvclxuXHRcdFx0XHRpZiAoIChtID0gbWF0Y2hbMV0pICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9jdW1lbnQgY29udGV4dFxuXHRcdFx0XHRcdGlmICggbm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIChlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApKSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSwgT3BlcmEsIFdlYmtpdFxuXHRcdFx0XHRcdFx0XHQvLyBUT0RPOiBpZGVudGlmeSB2ZXJzaW9uc1xuXHRcdFx0XHRcdFx0XHQvLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG5cdFx0XHRcdFx0XHRcdGlmICggZWxlbS5pZCA9PT0gbSApIHtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBFbGVtZW50IGNvbnRleHRcblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSwgT3BlcmEsIFdlYmtpdFxuXHRcdFx0XHRcdFx0Ly8gVE9ETzogaWRlbnRpZnkgdmVyc2lvbnNcblx0XHRcdFx0XHRcdC8vIGdldEVsZW1lbnRCeUlkIGNhbiBtYXRjaCBlbGVtZW50cyBieSBuYW1lIGluc3RlYWQgb2YgSURcblx0XHRcdFx0XHRcdGlmICggbmV3Q29udGV4dCAmJiAoZWxlbSA9IG5ld0NvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIG0gKSkgJiZcblx0XHRcdFx0XHRcdFx0Y29udGFpbnMoIGNvbnRleHQsIGVsZW0gKSAmJlxuXHRcdFx0XHRcdFx0XHRlbGVtLmlkID09PSBtICkge1xuXG5cdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHlwZSBzZWxlY3RvclxuXHRcdFx0XHR9IGVsc2UgaWYgKCBtYXRjaFsyXSApIHtcblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCBzZWxlY3RvciApICk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cblx0XHRcdFx0Ly8gQ2xhc3Mgc2VsZWN0b3Jcblx0XHRcdFx0fSBlbHNlIGlmICggKG0gPSBtYXRjaFszXSkgJiYgc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICYmXG5cdFx0XHRcdFx0Y29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICkge1xuXG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBtICkgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUYWtlIGFkdmFudGFnZSBvZiBxdWVyeVNlbGVjdG9yQWxsXG5cdFx0XHRpZiAoIHN1cHBvcnQucXNhICYmXG5cdFx0XHRcdCFjb21waWxlckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF0gJiZcblx0XHRcdFx0KCFyYnVnZ3lRU0EgfHwgIXJidWdneVFTQS50ZXN0KCBzZWxlY3RvciApKSApIHtcblxuXHRcdFx0XHRpZiAoIG5vZGVUeXBlICE9PSAxICkge1xuXHRcdFx0XHRcdG5ld0NvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0XHRcdG5ld1NlbGVjdG9yID0gc2VsZWN0b3I7XG5cblx0XHRcdFx0Ly8gcVNBIGxvb2tzIG91dHNpZGUgRWxlbWVudCBjb250ZXh0LCB3aGljaCBpcyBub3Qgd2hhdCB3ZSB3YW50XG5cdFx0XHRcdC8vIFRoYW5rcyB0byBBbmRyZXcgRHVwb250IGZvciB0aGlzIHdvcmthcm91bmQgdGVjaG5pcXVlXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OFxuXHRcdFx0XHQvLyBFeGNsdWRlIG9iamVjdCBlbGVtZW50c1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBjb250ZXh0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgIT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHRcdFx0XHQvLyBDYXB0dXJlIHRoZSBjb250ZXh0IElELCBzZXR0aW5nIGl0IGZpcnN0IGlmIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdGlmICggKG5pZCA9IGNvbnRleHQuZ2V0QXR0cmlidXRlKCBcImlkXCIgKSkgKSB7XG5cdFx0XHRcdFx0XHRuaWQgPSBuaWQucmVwbGFjZSggcmNzc2VzY2FwZSwgZmNzc2VzY2FwZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb250ZXh0LnNldEF0dHJpYnV0ZSggXCJpZFwiLCAobmlkID0gZXhwYW5kbykgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmVmaXggZXZlcnkgc2VsZWN0b3IgaW4gdGhlIGxpc3Rcblx0XHRcdFx0XHRncm91cHMgPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHRcdFx0XHRpID0gZ3JvdXBzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdGdyb3Vwc1tpXSA9IFwiI1wiICsgbmlkICsgXCIgXCIgKyB0b1NlbGVjdG9yKCBncm91cHNbaV0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bmV3U2VsZWN0b3IgPSBncm91cHMuam9pbiggXCIsXCIgKTtcblxuXHRcdFx0XHRcdC8vIEV4cGFuZCBjb250ZXh0IGZvciBzaWJsaW5nIHNlbGVjdG9yc1xuXHRcdFx0XHRcdG5ld0NvbnRleHQgPSByc2libGluZy50ZXN0KCBzZWxlY3RvciApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fFxuXHRcdFx0XHRcdFx0Y29udGV4dDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggbmV3U2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsXG5cdFx0XHRcdFx0XHRcdG5ld0NvbnRleHQucXVlcnlTZWxlY3RvckFsbCggbmV3U2VsZWN0b3IgKVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKCBxc2FFcnJvciApIHtcblx0XHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdFx0aWYgKCBuaWQgPT09IGV4cGFuZG8gKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnRleHQucmVtb3ZlQXR0cmlidXRlKCBcImlkXCIgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBbGwgb3RoZXJzXG5cdHJldHVybiBzZWxlY3QoIHNlbGVjdG9yLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApO1xufVxuXG4vKipcbiAqIENyZWF0ZSBrZXktdmFsdWUgY2FjaGVzIG9mIGxpbWl0ZWQgc2l6ZVxuICogQHJldHVybnMge2Z1bmN0aW9uKHN0cmluZywgb2JqZWN0KX0gUmV0dXJucyB0aGUgT2JqZWN0IGRhdGEgYWZ0ZXIgc3RvcmluZyBpdCBvbiBpdHNlbGYgd2l0aFxuICpcdHByb3BlcnR5IG5hbWUgdGhlIChzcGFjZS1zdWZmaXhlZCkgc3RyaW5nIGFuZCAoaWYgdGhlIGNhY2hlIGlzIGxhcmdlciB0aGFuIEV4cHIuY2FjaGVMZW5ndGgpXG4gKlx0ZGVsZXRpbmcgdGhlIG9sZGVzdCBlbnRyeVxuICovXG5mdW5jdGlvbiBjcmVhdGVDYWNoZSgpIHtcblx0dmFyIGtleXMgPSBbXTtcblxuXHRmdW5jdGlvbiBjYWNoZSgga2V5LCB2YWx1ZSApIHtcblx0XHQvLyBVc2UgKGtleSArIFwiIFwiKSB0byBhdm9pZCBjb2xsaXNpb24gd2l0aCBuYXRpdmUgcHJvdG90eXBlIHByb3BlcnRpZXMgKHNlZSBJc3N1ZSAjMTU3KVxuXHRcdGlmICgga2V5cy5wdXNoKCBrZXkgKyBcIiBcIiApID4gRXhwci5jYWNoZUxlbmd0aCApIHtcblx0XHRcdC8vIE9ubHkga2VlcCB0aGUgbW9zdCByZWNlbnQgZW50cmllc1xuXHRcdFx0ZGVsZXRlIGNhY2hlWyBrZXlzLnNoaWZ0KCkgXTtcblx0XHR9XG5cdFx0cmV0dXJuIChjYWNoZVsga2V5ICsgXCIgXCIgXSA9IHZhbHVlKTtcblx0fVxuXHRyZXR1cm4gY2FjaGU7XG59XG5cbi8qKlxuICogTWFyayBhIGZ1bmN0aW9uIGZvciBzcGVjaWFsIHVzZSBieSBTaXp6bGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtYXJrXG4gKi9cbmZ1bmN0aW9uIG1hcmtGdW5jdGlvbiggZm4gKSB7XG5cdGZuWyBleHBhbmRvIF0gPSB0cnVlO1xuXHRyZXR1cm4gZm47XG59XG5cbi8qKlxuICogU3VwcG9ydCB0ZXN0aW5nIHVzaW5nIGFuIGVsZW1lbnRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFBhc3NlZCB0aGUgY3JlYXRlZCBlbGVtZW50IGFuZCByZXR1cm5zIGEgYm9vbGVhbiByZXN1bHRcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0KCBmbiApIHtcblx0dmFyIGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZpZWxkc2V0XCIpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuICEhZm4oIGVsICk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0Ly8gUmVtb3ZlIGZyb20gaXRzIHBhcmVudCBieSBkZWZhdWx0XG5cdFx0aWYgKCBlbC5wYXJlbnROb2RlICkge1xuXHRcdFx0ZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggZWwgKTtcblx0XHR9XG5cdFx0Ly8gcmVsZWFzZSBtZW1vcnkgaW4gSUVcblx0XHRlbCA9IG51bGw7XG5cdH1cbn1cblxuLyoqXG4gKiBBZGRzIHRoZSBzYW1lIGhhbmRsZXIgZm9yIGFsbCBvZiB0aGUgc3BlY2lmaWVkIGF0dHJzXG4gKiBAcGFyYW0ge1N0cmluZ30gYXR0cnMgUGlwZS1zZXBhcmF0ZWQgbGlzdCBvZiBhdHRyaWJ1dGVzXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBoYW5kbGVyIFRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIGFwcGxpZWRcbiAqL1xuZnVuY3Rpb24gYWRkSGFuZGxlKCBhdHRycywgaGFuZGxlciApIHtcblx0dmFyIGFyciA9IGF0dHJzLnNwbGl0KFwifFwiKSxcblx0XHRpID0gYXJyLmxlbmd0aDtcblxuXHR3aGlsZSAoIGktLSApIHtcblx0XHRFeHByLmF0dHJIYW5kbGVbIGFycltpXSBdID0gaGFuZGxlcjtcblx0fVxufVxuXG4vKipcbiAqIENoZWNrcyBkb2N1bWVudCBvcmRlciBvZiB0d28gc2libGluZ3NcbiAqIEBwYXJhbSB7RWxlbWVudH0gYVxuICogQHBhcmFtIHtFbGVtZW50fSBiXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIGxlc3MgdGhhbiAwIGlmIGEgcHJlY2VkZXMgYiwgZ3JlYXRlciB0aGFuIDAgaWYgYSBmb2xsb3dzIGJcbiAqL1xuZnVuY3Rpb24gc2libGluZ0NoZWNrKCBhLCBiICkge1xuXHR2YXIgY3VyID0gYiAmJiBhLFxuXHRcdGRpZmYgPSBjdXIgJiYgYS5ub2RlVHlwZSA9PT0gMSAmJiBiLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRhLnNvdXJjZUluZGV4IC0gYi5zb3VyY2VJbmRleDtcblxuXHQvLyBVc2UgSUUgc291cmNlSW5kZXggaWYgYXZhaWxhYmxlIG9uIGJvdGggbm9kZXNcblx0aWYgKCBkaWZmICkge1xuXHRcdHJldHVybiBkaWZmO1xuXHR9XG5cblx0Ly8gQ2hlY2sgaWYgYiBmb2xsb3dzIGFcblx0aWYgKCBjdXIgKSB7XG5cdFx0d2hpbGUgKCAoY3VyID0gY3VyLm5leHRTaWJsaW5nKSApIHtcblx0XHRcdGlmICggY3VyID09PSBiICkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGEgPyAxIDogLTE7XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBpbnB1dCB0eXBlc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlSW5wdXRQc2V1ZG8oIHR5cGUgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGJ1dHRvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUJ1dHRvblBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiAobmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5hbWUgPT09IFwiYnV0dG9uXCIpICYmIGVsZW0udHlwZSA9PT0gdHlwZTtcblx0fTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIDplbmFibGVkLzpkaXNhYmxlZFxuICogQHBhcmFtIHtCb29sZWFufSBkaXNhYmxlZCB0cnVlIGZvciA6ZGlzYWJsZWQ7IGZhbHNlIGZvciA6ZW5hYmxlZFxuICovXG5mdW5jdGlvbiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggZGlzYWJsZWQgKSB7XG5cblx0Ly8gS25vd24gOmRpc2FibGVkIGZhbHNlIHBvc2l0aXZlczogZmllbGRzZXRbZGlzYWJsZWRdID4gbGVnZW5kOm50aC1vZi10eXBlKG4rMikgOmNhbi1kaXNhYmxlXG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE9ubHkgY2VydGFpbiBlbGVtZW50cyBjYW4gbWF0Y2ggOmVuYWJsZWQgb3IgOmRpc2FibGVkXG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZW5hYmxlZFxuXHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NjcmlwdGluZy5odG1sI3NlbGVjdG9yLWRpc2FibGVkXG5cdFx0aWYgKCBcImZvcm1cIiBpbiBlbGVtICkge1xuXG5cdFx0XHQvLyBDaGVjayBmb3IgaW5oZXJpdGVkIGRpc2FibGVkbmVzcyBvbiByZWxldmFudCBub24tZGlzYWJsZWQgZWxlbWVudHM6XG5cdFx0XHQvLyAqIGxpc3RlZCBmb3JtLWFzc29jaWF0ZWQgZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBmaWVsZHNldFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NhdGVnb3J5LWxpc3RlZFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtZmUtZGlzYWJsZWRcblx0XHRcdC8vICogb3B0aW9uIGVsZW1lbnRzIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcblx0XHRcdC8vICAgaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvZm9ybXMuaHRtbCNjb25jZXB0LW9wdGlvbi1kaXNhYmxlZFxuXHRcdFx0Ly8gQWxsIHN1Y2ggZWxlbWVudHMgaGF2ZSBhIFwiZm9ybVwiIHByb3BlcnR5LlxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgJiYgZWxlbS5kaXNhYmxlZCA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0Ly8gT3B0aW9uIGVsZW1lbnRzIGRlZmVyIHRvIGEgcGFyZW50IG9wdGdyb3VwIGlmIHByZXNlbnRcblx0XHRcdFx0aWYgKCBcImxhYmVsXCIgaW4gZWxlbSApIHtcblx0XHRcdFx0XHRpZiAoIFwibGFiZWxcIiBpbiBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5wYXJlbnROb2RlLmRpc2FibGVkID09PSBkaXNhYmxlZDtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDYgLSAxMVxuXHRcdFx0XHQvLyBVc2UgdGhlIGlzRGlzYWJsZWQgc2hvcnRjdXQgcHJvcGVydHkgdG8gY2hlY2sgZm9yIGRpc2FibGVkIGZpZWxkc2V0IGFuY2VzdG9yc1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pc0Rpc2FibGVkID09PSBkaXNhYmxlZCB8fFxuXG5cdFx0XHRcdFx0Ly8gV2hlcmUgdGhlcmUgaXMgbm8gaXNEaXNhYmxlZCwgY2hlY2sgbWFudWFsbHlcblx0XHRcdFx0XHQvKiBqc2hpbnQgLVcwMTggKi9cblx0XHRcdFx0XHRlbGVtLmlzRGlzYWJsZWQgIT09ICFkaXNhYmxlZCAmJlxuXHRcdFx0XHRcdFx0ZGlzYWJsZWRBbmNlc3RvciggZWxlbSApID09PSBkaXNhYmxlZDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXG5cdFx0Ly8gVHJ5IHRvIHdpbm5vdyBvdXQgZWxlbWVudHMgdGhhdCBjYW4ndCBiZSBkaXNhYmxlZCBiZWZvcmUgdHJ1c3RpbmcgdGhlIGRpc2FibGVkIHByb3BlcnR5LlxuXHRcdC8vIFNvbWUgdmljdGltcyBnZXQgY2F1Z2h0IGluIG91ciBuZXQgKGxhYmVsLCBsZWdlbmQsIG1lbnUsIHRyYWNrKSwgYnV0IGl0IHNob3VsZG4ndFxuXHRcdC8vIGV2ZW4gZXhpc3Qgb24gdGhlbSwgbGV0IGFsb25lIGhhdmUgYSBib29sZWFuIHZhbHVlLlxuXHRcdH0gZWxzZSBpZiAoIFwibGFiZWxcIiBpbiBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdH1cblxuXHRcdC8vIFJlbWFpbmluZyBlbGVtZW50cyBhcmUgbmVpdGhlciA6ZW5hYmxlZCBub3IgOmRpc2FibGVkXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgcG9zaXRpb25hbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZuICkge1xuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBhcmd1bWVudCApIHtcblx0XHRhcmd1bWVudCA9ICthcmd1bWVudDtcblx0XHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuXHRcdFx0dmFyIGosXG5cdFx0XHRcdG1hdGNoSW5kZXhlcyA9IGZuKCBbXSwgc2VlZC5sZW5ndGgsIGFyZ3VtZW50ICksXG5cdFx0XHRcdGkgPSBtYXRjaEluZGV4ZXMubGVuZ3RoO1xuXG5cdFx0XHQvLyBNYXRjaCBlbGVtZW50cyBmb3VuZCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4ZXNcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoIHNlZWRbIChqID0gbWF0Y2hJbmRleGVzW2ldKSBdICkge1xuXHRcdFx0XHRcdHNlZWRbal0gPSAhKG1hdGNoZXNbal0gPSBzZWVkW2pdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgYSBub2RlIGZvciB2YWxpZGl0eSBhcyBhIFNpenpsZSBjb250ZXh0XG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0PX0gY29udGV4dFxuICogQHJldHVybnMge0VsZW1lbnR8T2JqZWN0fEJvb2xlYW59IFRoZSBpbnB1dCBub2RlIGlmIGFjY2VwdGFibGUsIG90aGVyd2lzZSBhIGZhbHN5IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHRlc3RDb250ZXh0KCBjb250ZXh0ICkge1xuXHRyZXR1cm4gY29udGV4dCAmJiB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb250ZXh0O1xufVxuXG4vLyBFeHBvc2Ugc3VwcG9ydCB2YXJzIGZvciBjb252ZW5pZW5jZVxuc3VwcG9ydCA9IFNpenpsZS5zdXBwb3J0ID0ge307XG5cbi8qKlxuICogRGV0ZWN0cyBYTUwgbm9kZXNcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IGVsZW0gQW4gZWxlbWVudCBvciBhIGRvY3VtZW50XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZmYgZWxlbSBpcyBhIG5vbi1IVE1MIFhNTCBub2RlXG4gKi9cbmlzWE1MID0gU2l6emxlLmlzWE1MID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdC8vIGRvY3VtZW50RWxlbWVudCBpcyB2ZXJpZmllZCBmb3IgY2FzZXMgd2hlcmUgaXQgZG9lc24ndCB5ZXQgZXhpc3Rcblx0Ly8gKHN1Y2ggYXMgbG9hZGluZyBpZnJhbWVzIGluIElFIC0gIzQ4MzMpXG5cdHZhciBkb2N1bWVudEVsZW1lbnQgPSBlbGVtICYmIChlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSkuZG9jdW1lbnRFbGVtZW50O1xuXHRyZXR1cm4gZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIiA6IGZhbHNlO1xufTtcblxuLyoqXG4gKiBTZXRzIGRvY3VtZW50LXJlbGF0ZWQgdmFyaWFibGVzIG9uY2UgYmFzZWQgb24gdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IFtkb2NdIEFuIGVsZW1lbnQgb3IgZG9jdW1lbnQgb2JqZWN0IHRvIHVzZSB0byBzZXQgdGhlIGRvY3VtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gKi9cbnNldERvY3VtZW50ID0gU2l6emxlLnNldERvY3VtZW50ID0gZnVuY3Rpb24oIG5vZGUgKSB7XG5cdHZhciBoYXNDb21wYXJlLCBzdWJXaW5kb3csXG5cdFx0ZG9jID0gbm9kZSA/IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlIDogcHJlZmVycmVkRG9jO1xuXG5cdC8vIFJldHVybiBlYXJseSBpZiBkb2MgaXMgaW52YWxpZCBvciBhbHJlYWR5IHNlbGVjdGVkXG5cdGlmICggZG9jID09PSBkb2N1bWVudCB8fCBkb2Mubm9kZVR5cGUgIT09IDkgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQgKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50O1xuXHR9XG5cblx0Ly8gVXBkYXRlIGdsb2JhbCB2YXJpYWJsZXNcblx0ZG9jdW1lbnQgPSBkb2M7XG5cdGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cdGRvY3VtZW50SXNIVE1MID0gIWlzWE1MKCBkb2N1bWVudCApO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDktMTEsIEVkZ2Vcblx0Ly8gQWNjZXNzaW5nIGlmcmFtZSBkb2N1bWVudHMgYWZ0ZXIgdW5sb2FkIHRocm93cyBcInBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3JzIChqUXVlcnkgIzEzOTM2KVxuXHRpZiAoIHByZWZlcnJlZERvYyAhPT0gZG9jdW1lbnQgJiZcblx0XHQoc3ViV2luZG93ID0gZG9jdW1lbnQuZGVmYXVsdFZpZXcpICYmIHN1YldpbmRvdy50b3AgIT09IHN1YldpbmRvdyApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDExLCBFZGdlXG5cdFx0aWYgKCBzdWJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdHN1YldpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcInVubG9hZFwiLCB1bmxvYWRIYW5kbGVyLCBmYWxzZSApO1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDEwIG9ubHlcblx0XHR9IGVsc2UgaWYgKCBzdWJXaW5kb3cuYXR0YWNoRXZlbnQgKSB7XG5cdFx0XHRzdWJXaW5kb3cuYXR0YWNoRXZlbnQoIFwib251bmxvYWRcIiwgdW5sb2FkSGFuZGxlciApO1xuXHRcdH1cblx0fVxuXG5cdC8qIEF0dHJpYnV0ZXNcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIFN1cHBvcnQ6IElFPDhcblx0Ly8gVmVyaWZ5IHRoYXQgZ2V0QXR0cmlidXRlIHJlYWxseSByZXR1cm5zIGF0dHJpYnV0ZXMgYW5kIG5vdCBwcm9wZXJ0aWVzXG5cdC8vIChleGNlcHRpbmcgSUU4IGJvb2xlYW5zKVxuXHRzdXBwb3J0LmF0dHJpYnV0ZXMgPSBhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRcdGVsLmNsYXNzTmFtZSA9IFwiaVwiO1xuXHRcdHJldHVybiAhZWwuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpO1xuXHR9KTtcblxuXHQvKiBnZXRFbGVtZW50KHMpQnkqXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBDaGVjayBpZiBnZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikgcmV0dXJucyBvbmx5IGVsZW1lbnRzXG5cdHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRcdGVsLmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVDb21tZW50KFwiXCIpICk7XG5cdFx0cmV0dXJuICFlbC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikubGVuZ3RoO1xuXHR9KTtcblxuXHQvLyBTdXBwb3J0OiBJRTw5XG5cdHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSA9IHJuYXRpdmUudGVzdCggZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSApO1xuXG5cdC8vIFN1cHBvcnQ6IElFPDEwXG5cdC8vIENoZWNrIGlmIGdldEVsZW1lbnRCeUlkIHJldHVybnMgZWxlbWVudHMgYnkgbmFtZVxuXHQvLyBUaGUgYnJva2VuIGdldEVsZW1lbnRCeUlkIG1ldGhvZHMgZG9uJ3QgcGljayB1cCBwcm9ncmFtbWF0aWNhbGx5LXNldCBuYW1lcyxcblx0Ly8gc28gdXNlIGEgcm91bmRhYm91dCBnZXRFbGVtZW50c0J5TmFtZSB0ZXN0XG5cdHN1cHBvcnQuZ2V0QnlJZCA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggZWwgKS5pZCA9IGV4cGFuZG87XG5cdFx0cmV0dXJuICFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSB8fCAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoIGV4cGFuZG8gKS5sZW5ndGg7XG5cdH0pO1xuXG5cdC8vIElEIGZpbHRlciBhbmQgZmluZFxuXHRpZiAoIHN1cHBvcnQuZ2V0QnlJZCApIHtcblx0XHRFeHByLmZpbHRlcltcIklEXCJdID0gZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBhdHRySWQ7XG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0RXhwci5maW5kW1wiSURcIl0gPSBmdW5jdGlvbiggaWQsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0XHR2YXIgZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cdFx0XHRcdHJldHVybiBlbGVtID8gWyBlbGVtIF0gOiBbXTtcblx0XHRcdH1cblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdEV4cHIuZmlsdGVyW1wiSURcIl0gPSAgZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBub2RlID0gdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlTm9kZSAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuXHRcdFx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuXHRcdFx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLnZhbHVlID09PSBhdHRySWQ7XG5cdFx0XHR9O1xuXHRcdH07XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA2IC0gNyBvbmx5XG5cdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgaXMgbm90IHJlbGlhYmxlIGFzIGEgZmluZCBzaG9ydGN1dFxuXHRcdEV4cHIuZmluZFtcIklEXCJdID0gZnVuY3Rpb24oIGlkLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdFx0dmFyIG5vZGUsIGksIGVsZW1zLFxuXHRcdFx0XHRcdGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXG5cdFx0XHRcdGlmICggZWxlbSApIHtcblxuXHRcdFx0XHRcdC8vIFZlcmlmeSB0aGUgaWQgYXR0cmlidXRlXG5cdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuXHRcdFx0XHRcdGlmICggbm9kZSAmJiBub2RlLnZhbHVlID09PSBpZCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBbIGVsZW0gXTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBGYWxsIGJhY2sgb24gZ2V0RWxlbWVudHNCeU5hbWVcblx0XHRcdFx0XHRlbGVtcyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeU5hbWUoIGlkICk7XG5cdFx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1zW2krK10pICkge1xuXHRcdFx0XHRcdFx0bm9kZSA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuXHRcdFx0XHRcdFx0aWYgKCBub2RlICYmIG5vZGUudmFsdWUgPT09IGlkICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gWyBlbGVtIF07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cblxuXHQvLyBUYWdcblx0RXhwci5maW5kW1wiVEFHXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA/XG5cdFx0ZnVuY3Rpb24oIHRhZywgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgKTtcblxuXHRcdFx0Ly8gRG9jdW1lbnRGcmFnbWVudCBub2RlcyBkb24ndCBoYXZlIGdFQlROXG5cdFx0XHR9IGVsc2UgaWYgKCBzdXBwb3J0LnFzYSApIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnICk7XG5cdFx0XHR9XG5cdFx0fSA6XG5cblx0XHRmdW5jdGlvbiggdGFnLCBjb250ZXh0ICkge1xuXHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdHRtcCA9IFtdLFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0Ly8gQnkgaGFwcHkgY29pbmNpZGVuY2UsIGEgKGJyb2tlbikgZ0VCVE4gYXBwZWFycyBvbiBEb2N1bWVudEZyYWdtZW50IG5vZGVzIHRvb1xuXHRcdFx0XHRyZXN1bHRzID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnICk7XG5cblx0XHRcdC8vIEZpbHRlciBvdXQgcG9zc2libGUgY29tbWVudHNcblx0XHRcdGlmICggdGFnID09PSBcIipcIiApIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IHJlc3VsdHNbaSsrXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0dG1wLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdG1wO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fTtcblxuXHQvLyBDbGFzc1xuXHRFeHByLmZpbmRbXCJDTEFTU1wiXSA9IHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAmJiBmdW5jdGlvbiggY2xhc3NOYW1lLCBjb250ZXh0ICkge1xuXHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIGNsYXNzTmFtZSApO1xuXHRcdH1cblx0fTtcblxuXHQvKiBRU0EvbWF0Y2hlc1NlbGVjdG9yXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBRU0EgYW5kIG1hdGNoZXNTZWxlY3RvciBzdXBwb3J0XG5cblx0Ly8gbWF0Y2hlc1NlbGVjdG9yKDphY3RpdmUpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChJRTkvT3BlcmEgMTEuNSlcblx0cmJ1Z2d5TWF0Y2hlcyA9IFtdO1xuXG5cdC8vIHFTYSg6Zm9jdXMpIHJlcG9ydHMgZmFsc2Ugd2hlbiB0cnVlIChDaHJvbWUgMjEpXG5cdC8vIFdlIGFsbG93IHRoaXMgYmVjYXVzZSBvZiBhIGJ1ZyBpbiBJRTgvOSB0aGF0IHRocm93cyBhbiBlcnJvclxuXHQvLyB3aGVuZXZlciBgZG9jdW1lbnQuYWN0aXZlRWxlbWVudGAgaXMgYWNjZXNzZWQgb24gYW4gaWZyYW1lXG5cdC8vIFNvLCB3ZSBhbGxvdyA6Zm9jdXMgdG8gcGFzcyB0aHJvdWdoIFFTQSBhbGwgdGhlIHRpbWUgdG8gYXZvaWQgdGhlIElFIGVycm9yXG5cdC8vIFNlZSBodHRwczovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzNzhcblx0cmJ1Z2d5UVNBID0gW107XG5cblx0aWYgKCAoc3VwcG9ydC5xc2EgPSBybmF0aXZlLnRlc3QoIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgKSkgKSB7XG5cdFx0Ly8gQnVpbGQgUVNBIHJlZ2V4XG5cdFx0Ly8gUmVnZXggc3RyYXRlZ3kgYWRvcHRlZCBmcm9tIERpZWdvIFBlcmluaVxuXHRcdGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHQvLyBTZWxlY3QgaXMgc2V0IHRvIGVtcHR5IHN0cmluZyBvbiBwdXJwb3NlXG5cdFx0XHQvLyBUaGlzIGlzIHRvIHRlc3QgSUUncyB0cmVhdG1lbnQgb2Ygbm90IGV4cGxpY2l0bHlcblx0XHRcdC8vIHNldHRpbmcgYSBib29sZWFuIGNvbnRlbnQgYXR0cmlidXRlLFxuXHRcdFx0Ly8gc2luY2UgaXRzIHByZXNlbmNlIHNob3VsZCBiZSBlbm91Z2hcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjM1OVxuXHRcdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggZWwgKS5pbm5lckhUTUwgPSBcIjxhIGlkPSdcIiArIGV4cGFuZG8gKyBcIic+PC9hPlwiICtcblx0XHRcdFx0XCI8c2VsZWN0IGlkPSdcIiArIGV4cGFuZG8gKyBcIi1cXHJcXFxcJyBtc2FsbG93Y2FwdHVyZT0nJz5cIiArXG5cdFx0XHRcdFwiPG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU4LCBPcGVyYSAxMS0xMi4xNlxuXHRcdFx0Ly8gTm90aGluZyBzaG91bGQgYmUgc2VsZWN0ZWQgd2hlbiBlbXB0eSBzdHJpbmdzIGZvbGxvdyBePSBvciAkPSBvciAqPVxuXHRcdFx0Ly8gVGhlIHRlc3QgYXR0cmlidXRlIG11c3QgYmUgdW5rbm93biBpbiBPcGVyYSBidXQgXCJzYWZlXCIgZm9yIFdpblJUXG5cdFx0XHQvLyBodHRwczovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L2llL2hoNDY1Mzg4LmFzcHgjYXR0cmlidXRlX3NlY3Rpb25cblx0XHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiWypeJF09XCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86Jyd8XFxcIlxcXCIpXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU4XG5cdFx0XHQvLyBCb29sZWFuIGF0dHJpYnV0ZXMgYW5kIFwidmFsdWVcIiBhcmUgbm90IHRyZWF0ZWQgY29ycmVjdGx5XG5cdFx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86dmFsdWV8XCIgKyBib29sZWFucyArIFwiKVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZTwyOSwgQW5kcm9pZDw0LjQsIFNhZmFyaTw3LjArLCBpT1M8Ny4wKywgUGhhbnRvbUpTPDEuOS44K1xuXHRcdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCJbaWR+PVwiICsgZXhwYW5kbyArIFwiLV1cIiApLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCJ+PVwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2Via2l0L09wZXJhIC0gOmNoZWNrZWQgc2hvdWxkIHJldHVybiBzZWxlY3RlZCBvcHRpb24gZWxlbWVudHNcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXG5cdFx0XHQvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuXHRcdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCI6Y2hlY2tlZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDgrLCBpT1MgOCtcblx0XHRcdC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzY4NTFcblx0XHRcdC8vIEluLXBhZ2UgYHNlbGVjdG9yI2lkIHNpYmxpbmctY29tYmluYXRvciBzZWxlY3RvcmAgZmFpbHNcblx0XHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiYSNcIiArIGV4cGFuZG8gKyBcIisqXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKFwiLiMuK1srfl1cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRhc3NlcnQoZnVuY3Rpb24oIGVsICkge1xuXHRcdFx0ZWwuaW5uZXJIVE1MID0gXCI8YSBocmVmPScnIGRpc2FibGVkPSdkaXNhYmxlZCc+PC9hPlwiICtcblx0XHRcdFx0XCI8c2VsZWN0IGRpc2FibGVkPSdkaXNhYmxlZCc+PG9wdGlvbi8+PC9zZWxlY3Q+XCI7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IFdpbmRvd3MgOCBOYXRpdmUgQXBwc1xuXHRcdFx0Ly8gVGhlIHR5cGUgYW5kIG5hbWUgYXR0cmlidXRlcyBhcmUgcmVzdHJpY3RlZCBkdXJpbmcgLmlubmVySFRNTCBhc3NpZ25tZW50XG5cdFx0XHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cdFx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCBcImhpZGRlblwiICk7XG5cdFx0XHRlbC5hcHBlbmRDaGlsZCggaW5wdXQgKS5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcIkRcIiApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRThcblx0XHRcdC8vIEVuZm9yY2UgY2FzZS1zZW5zaXRpdml0eSBvZiBuYW1lIGF0dHJpYnV0ZVxuXHRcdFx0aWYgKCBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJuYW1lXCIgKyB3aGl0ZXNwYWNlICsgXCIqWypeJHwhfl0/PVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZGIDMuNSAtIDplbmFibGVkLzpkaXNhYmxlZCBhbmQgaGlkZGVuIGVsZW1lbnRzIChoaWRkZW4gZWxlbWVudHMgYXJlIHN0aWxsIGVuYWJsZWQpXG5cdFx0XHQvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuXHRcdFx0aWYgKCBlbC5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoICE9PSAyICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCI6ZW5hYmxlZFwiLCBcIjpkaXNhYmxlZFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFOS0xMStcblx0XHRcdC8vIElFJ3MgOmRpc2FibGVkIHNlbGVjdG9yIGRvZXMgbm90IHBpY2sgdXAgdGhlIGNoaWxkcmVuIG9mIGRpc2FibGVkIGZpZWxkc2V0c1xuXHRcdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggZWwgKS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0XHRpZiAoIGVsLnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZGlzYWJsZWRcIikubGVuZ3RoICE9PSAyICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCI6ZW5hYmxlZFwiLCBcIjpkaXNhYmxlZFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9wZXJhIDEwLTExIGRvZXMgbm90IHRocm93IG9uIHBvc3QtY29tbWEgaW52YWxpZCBwc2V1ZG9zXG5cdFx0XHRlbC5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKTtcblx0XHRcdHJidWdneVFTQS5wdXNoKFwiLC4qOlwiKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmICggKHN1cHBvcnQubWF0Y2hlc1NlbGVjdG9yID0gcm5hdGl2ZS50ZXN0KCAobWF0Y2hlcyA9IGRvY0VsZW0ubWF0Y2hlcyB8fFxuXHRcdGRvY0VsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jRWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRkb2NFbGVtLm9NYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRkb2NFbGVtLm1zTWF0Y2hlc1NlbGVjdG9yKSApKSApIHtcblxuXHRcdGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdFx0XHQvLyBDaGVjayB0byBzZWUgaWYgaXQncyBwb3NzaWJsZSB0byBkbyBtYXRjaGVzU2VsZWN0b3Jcblx0XHRcdC8vIG9uIGEgZGlzY29ubmVjdGVkIG5vZGUgKElFIDkpXG5cdFx0XHRzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoID0gbWF0Y2hlcy5jYWxsKCBlbCwgXCIqXCIgKTtcblxuXHRcdFx0Ly8gVGhpcyBzaG91bGQgZmFpbCB3aXRoIGFuIGV4Y2VwdGlvblxuXHRcdFx0Ly8gR2Vja28gZG9lcyBub3QgZXJyb3IsIHJldHVybnMgZmFsc2UgaW5zdGVhZFxuXHRcdFx0bWF0Y2hlcy5jYWxsKCBlbCwgXCJbcyE9JyddOnhcIiApO1xuXHRcdFx0cmJ1Z2d5TWF0Y2hlcy5wdXNoKCBcIiE9XCIsIHBzZXVkb3MgKTtcblx0XHR9KTtcblx0fVxuXG5cdHJidWdneVFTQSA9IHJidWdneVFTQS5sZW5ndGggJiYgbmV3IFJlZ0V4cCggcmJ1Z2d5UVNBLmpvaW4oXCJ8XCIpICk7XG5cdHJidWdneU1hdGNoZXMgPSByYnVnZ3lNYXRjaGVzLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lNYXRjaGVzLmpvaW4oXCJ8XCIpICk7XG5cblx0LyogQ29udGFpbnNcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRoYXNDb21wYXJlID0gcm5hdGl2ZS50ZXN0KCBkb2NFbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICk7XG5cblx0Ly8gRWxlbWVudCBjb250YWlucyBhbm90aGVyXG5cdC8vIFB1cnBvc2VmdWxseSBzZWxmLWV4Y2x1c2l2ZVxuXHQvLyBBcyBpbiwgYW4gZWxlbWVudCBkb2VzIG5vdCBjb250YWluIGl0c2VsZlxuXHRjb250YWlucyA9IGhhc0NvbXBhcmUgfHwgcm5hdGl2ZS50ZXN0KCBkb2NFbGVtLmNvbnRhaW5zICkgP1xuXHRcdGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdFx0dmFyIGFkb3duID0gYS5ub2RlVHlwZSA9PT0gOSA/IGEuZG9jdW1lbnRFbGVtZW50IDogYSxcblx0XHRcdFx0YnVwID0gYiAmJiBiLnBhcmVudE5vZGU7XG5cdFx0XHRyZXR1cm4gYSA9PT0gYnVwIHx8ICEhKCBidXAgJiYgYnVwLm5vZGVUeXBlID09PSAxICYmIChcblx0XHRcdFx0YWRvd24uY29udGFpbnMgP1xuXHRcdFx0XHRcdGFkb3duLmNvbnRhaW5zKCBidXAgKSA6XG5cdFx0XHRcdFx0YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBidXAgKSAmIDE2XG5cdFx0XHQpKTtcblx0XHR9IDpcblx0XHRmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdGlmICggYiApIHtcblx0XHRcdFx0d2hpbGUgKCAoYiA9IGIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBiID09PSBhICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXHQvKiBTb3J0aW5nXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBEb2N1bWVudCBvcmRlciBzb3J0aW5nXG5cdHNvcnRPcmRlciA9IGhhc0NvbXBhcmUgP1xuXHRmdW5jdGlvbiggYSwgYiApIHtcblxuXHRcdC8vIEZsYWcgZm9yIGR1cGxpY2F0ZSByZW1vdmFsXG5cdFx0aWYgKCBhID09PSBiICkge1xuXHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdC8vIFNvcnQgb24gbWV0aG9kIGV4aXN0ZW5jZSBpZiBvbmx5IG9uZSBpbnB1dCBoYXMgY29tcGFyZURvY3VtZW50UG9zaXRpb25cblx0XHR2YXIgY29tcGFyZSA9ICFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIC0gIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247XG5cdFx0aWYgKCBjb21wYXJlICkge1xuXHRcdFx0cmV0dXJuIGNvbXBhcmU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsY3VsYXRlIHBvc2l0aW9uIGlmIGJvdGggaW5wdXRzIGJlbG9uZyB0byB0aGUgc2FtZSBkb2N1bWVudFxuXHRcdGNvbXBhcmUgPSAoIGEub3duZXJEb2N1bWVudCB8fCBhICkgPT09ICggYi5vd25lckRvY3VtZW50IHx8IGIgKSA/XG5cdFx0XHRhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBiICkgOlxuXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2Uga25vdyB0aGV5IGFyZSBkaXNjb25uZWN0ZWRcblx0XHRcdDE7XG5cblx0XHQvLyBEaXNjb25uZWN0ZWQgbm9kZXNcblx0XHRpZiAoIGNvbXBhcmUgJiAxIHx8XG5cdFx0XHQoIXN1cHBvcnQuc29ydERldGFjaGVkICYmIGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGEgKSA9PT0gY29tcGFyZSkgKSB7XG5cblx0XHRcdC8vIENob29zZSB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IGlzIHJlbGF0ZWQgdG8gb3VyIHByZWZlcnJlZCBkb2N1bWVudFxuXHRcdFx0aWYgKCBhID09PSBkb2N1bWVudCB8fCBhLm93bmVyRG9jdW1lbnQgPT09IHByZWZlcnJlZERvYyAmJiBjb250YWlucyhwcmVmZXJyZWREb2MsIGEpICkge1xuXHRcdFx0XHRyZXR1cm4gLTE7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGIgPT09IGRvY3VtZW50IHx8IGIub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYikgKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWludGFpbiBvcmlnaW5hbCBvcmRlclxuXHRcdFx0cmV0dXJuIHNvcnRJbnB1dCA/XG5cdFx0XHRcdCggaW5kZXhPZiggc29ydElucHV0LCBhICkgLSBpbmRleE9mKCBzb3J0SW5wdXQsIGIgKSApIDpcblx0XHRcdFx0MDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29tcGFyZSAmIDQgPyAtMSA6IDE7XG5cdH0gOlxuXHRmdW5jdGlvbiggYSwgYiApIHtcblx0XHQvLyBFeGl0IGVhcmx5IGlmIHRoZSBub2RlcyBhcmUgaWRlbnRpY2FsXG5cdFx0aWYgKCBhID09PSBiICkge1xuXHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHZhciBjdXIsXG5cdFx0XHRpID0gMCxcblx0XHRcdGF1cCA9IGEucGFyZW50Tm9kZSxcblx0XHRcdGJ1cCA9IGIucGFyZW50Tm9kZSxcblx0XHRcdGFwID0gWyBhIF0sXG5cdFx0XHRicCA9IFsgYiBdO1xuXG5cdFx0Ly8gUGFyZW50bGVzcyBub2RlcyBhcmUgZWl0aGVyIGRvY3VtZW50cyBvciBkaXNjb25uZWN0ZWRcblx0XHRpZiAoICFhdXAgfHwgIWJ1cCApIHtcblx0XHRcdHJldHVybiBhID09PSBkb2N1bWVudCA/IC0xIDpcblx0XHRcdFx0YiA9PT0gZG9jdW1lbnQgPyAxIDpcblx0XHRcdFx0YXVwID8gLTEgOlxuXHRcdFx0XHRidXAgPyAxIDpcblx0XHRcdFx0c29ydElucHV0ID9cblx0XHRcdFx0KCBpbmRleE9mKCBzb3J0SW5wdXQsIGEgKSAtIGluZGV4T2YoIHNvcnRJbnB1dCwgYiApICkgOlxuXHRcdFx0XHQwO1xuXG5cdFx0Ly8gSWYgdGhlIG5vZGVzIGFyZSBzaWJsaW5ncywgd2UgY2FuIGRvIGEgcXVpY2sgY2hlY2tcblx0XHR9IGVsc2UgaWYgKCBhdXAgPT09IGJ1cCApIHtcblx0XHRcdHJldHVybiBzaWJsaW5nQ2hlY2soIGEsIGIgKTtcblx0XHR9XG5cblx0XHQvLyBPdGhlcndpc2Ugd2UgbmVlZCBmdWxsIGxpc3RzIG9mIHRoZWlyIGFuY2VzdG9ycyBmb3IgY29tcGFyaXNvblxuXHRcdGN1ciA9IGE7XG5cdFx0d2hpbGUgKCAoY3VyID0gY3VyLnBhcmVudE5vZGUpICkge1xuXHRcdFx0YXAudW5zaGlmdCggY3VyICk7XG5cdFx0fVxuXHRcdGN1ciA9IGI7XG5cdFx0d2hpbGUgKCAoY3VyID0gY3VyLnBhcmVudE5vZGUpICkge1xuXHRcdFx0YnAudW5zaGlmdCggY3VyICk7XG5cdFx0fVxuXG5cdFx0Ly8gV2FsayBkb3duIHRoZSB0cmVlIGxvb2tpbmcgZm9yIGEgZGlzY3JlcGFuY3lcblx0XHR3aGlsZSAoIGFwW2ldID09PSBicFtpXSApIHtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHRyZXR1cm4gaSA/XG5cdFx0XHQvLyBEbyBhIHNpYmxpbmcgY2hlY2sgaWYgdGhlIG5vZGVzIGhhdmUgYSBjb21tb24gYW5jZXN0b3Jcblx0XHRcdHNpYmxpbmdDaGVjayggYXBbaV0sIGJwW2ldICkgOlxuXG5cdFx0XHQvLyBPdGhlcndpc2Ugbm9kZXMgaW4gb3VyIGRvY3VtZW50IHNvcnQgZmlyc3Rcblx0XHRcdGFwW2ldID09PSBwcmVmZXJyZWREb2MgPyAtMSA6XG5cdFx0XHRicFtpXSA9PT0gcHJlZmVycmVkRG9jID8gMSA6XG5cdFx0XHQwO1xuXHR9O1xuXG5cdHJldHVybiBkb2N1bWVudDtcbn07XG5cblNpenpsZS5tYXRjaGVzID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1lbnRzICkge1xuXHRyZXR1cm4gU2l6emxlKCBleHByLCBudWxsLCBudWxsLCBlbGVtZW50cyApO1xufTtcblxuU2l6emxlLm1hdGNoZXNTZWxlY3RvciA9IGZ1bmN0aW9uKCBlbGVtLCBleHByICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdH1cblxuXHQvLyBNYWtlIHN1cmUgdGhhdCBhdHRyaWJ1dGUgc2VsZWN0b3JzIGFyZSBxdW90ZWRcblx0ZXhwciA9IGV4cHIucmVwbGFjZSggcmF0dHJpYnV0ZVF1b3RlcywgXCI9JyQxJ11cIiApO1xuXG5cdGlmICggc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgJiYgZG9jdW1lbnRJc0hUTUwgJiZcblx0XHQhY29tcGlsZXJDYWNoZVsgZXhwciArIFwiIFwiIF0gJiZcblx0XHQoICFyYnVnZ3lNYXRjaGVzIHx8ICFyYnVnZ3lNYXRjaGVzLnRlc3QoIGV4cHIgKSApICYmXG5cdFx0KCAhcmJ1Z2d5UVNBICAgICB8fCAhcmJ1Z2d5UVNBLnRlc3QoIGV4cHIgKSApICkge1xuXG5cdFx0dHJ5IHtcblx0XHRcdHZhciByZXQgPSBtYXRjaGVzLmNhbGwoIGVsZW0sIGV4cHIgKTtcblxuXHRcdFx0Ly8gSUUgOSdzIG1hdGNoZXNTZWxlY3RvciByZXR1cm5zIGZhbHNlIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdFx0aWYgKCByZXQgfHwgc3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCB8fFxuXHRcdFx0XHRcdC8vIEFzIHdlbGwsIGRpc2Nvbm5lY3RlZCBub2RlcyBhcmUgc2FpZCB0byBiZSBpbiBhIGRvY3VtZW50XG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgaW4gSUUgOVxuXHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQgJiYgZWxlbS5kb2N1bWVudC5ub2RlVHlwZSAhPT0gMTEgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxuXG5cdHJldHVybiBTaXp6bGUoIGV4cHIsIGRvY3VtZW50LCBudWxsLCBbIGVsZW0gXSApLmxlbmd0aCA+IDA7XG59O1xuXG5TaXp6bGUuY29udGFpbnMgPSBmdW5jdGlvbiggY29udGV4dCwgZWxlbSApIHtcblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdGlmICggKCBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCApICE9PSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHR9XG5cdHJldHVybiBjb250YWlucyggY29udGV4dCwgZWxlbSApO1xufTtcblxuU2l6emxlLmF0dHIgPSBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdGlmICggKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSApICE9PSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHR9XG5cblx0dmFyIGZuID0gRXhwci5hdHRySGFuZGxlWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSxcblx0XHQvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoalF1ZXJ5ICMxMzgwNylcblx0XHR2YWwgPSBmbiAmJiBoYXNPd24uY2FsbCggRXhwci5hdHRySGFuZGxlLCBuYW1lLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRmbiggZWxlbSwgbmFtZSwgIWRvY3VtZW50SXNIVE1MICkgOlxuXHRcdFx0dW5kZWZpbmVkO1xuXG5cdHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCA/XG5cdFx0dmFsIDpcblx0XHRzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWRvY3VtZW50SXNIVE1MID9cblx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICkgOlxuXHRcdFx0KHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShuYW1lKSkgJiYgdmFsLnNwZWNpZmllZCA/XG5cdFx0XHRcdHZhbC52YWx1ZSA6XG5cdFx0XHRcdG51bGw7XG59O1xuXG5TaXp6bGUuZXNjYXBlID0gZnVuY3Rpb24oIHNlbCApIHtcblx0cmV0dXJuIChzZWwgKyBcIlwiKS5yZXBsYWNlKCByY3NzZXNjYXBlLCBmY3NzZXNjYXBlICk7XG59O1xuXG5TaXp6bGUuZXJyb3IgPSBmdW5jdGlvbiggbXNnICkge1xuXHR0aHJvdyBuZXcgRXJyb3IoIFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIgKyBtc2cgKTtcbn07XG5cbi8qKlxuICogRG9jdW1lbnQgc29ydGluZyBhbmQgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICogQHBhcmFtIHtBcnJheUxpa2V9IHJlc3VsdHNcbiAqL1xuU2l6emxlLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0dmFyIGVsZW0sXG5cdFx0ZHVwbGljYXRlcyA9IFtdLFxuXHRcdGogPSAwLFxuXHRcdGkgPSAwO1xuXG5cdC8vIFVubGVzcyB3ZSAqa25vdyogd2UgY2FuIGRldGVjdCBkdXBsaWNhdGVzLCBhc3N1bWUgdGhlaXIgcHJlc2VuY2Vcblx0aGFzRHVwbGljYXRlID0gIXN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcztcblx0c29ydElucHV0ID0gIXN1cHBvcnQuc29ydFN0YWJsZSAmJiByZXN1bHRzLnNsaWNlKCAwICk7XG5cdHJlc3VsdHMuc29ydCggc29ydE9yZGVyICk7XG5cblx0aWYgKCBoYXNEdXBsaWNhdGUgKSB7XG5cdFx0d2hpbGUgKCAoZWxlbSA9IHJlc3VsdHNbaSsrXSkgKSB7XG5cdFx0XHRpZiAoIGVsZW0gPT09IHJlc3VsdHNbIGkgXSApIHtcblx0XHRcdFx0aiA9IGR1cGxpY2F0ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGlsZSAoIGotLSApIHtcblx0XHRcdHJlc3VsdHMuc3BsaWNlKCBkdXBsaWNhdGVzWyBqIF0sIDEgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDbGVhciBpbnB1dCBhZnRlciBzb3J0aW5nIHRvIHJlbGVhc2Ugb2JqZWN0c1xuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvcHVsbC8yMjVcblx0c29ydElucHV0ID0gbnVsbDtcblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiBmb3IgcmV0cmlldmluZyB0aGUgdGV4dCB2YWx1ZSBvZiBhbiBhcnJheSBvZiBET00gbm9kZXNcbiAqIEBwYXJhbSB7QXJyYXl8RWxlbWVudH0gZWxlbVxuICovXG5nZXRUZXh0ID0gU2l6emxlLmdldFRleHQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0dmFyIG5vZGUsXG5cdFx0cmV0ID0gXCJcIixcblx0XHRpID0gMCxcblx0XHRub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0aWYgKCAhbm9kZVR5cGUgKSB7XG5cdFx0Ly8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcblx0XHR3aGlsZSAoIChub2RlID0gZWxlbVtpKytdKSApIHtcblx0XHRcdC8vIERvIG5vdCB0cmF2ZXJzZSBjb21tZW50IG5vZGVzXG5cdFx0XHRyZXQgKz0gZ2V0VGV4dCggbm9kZSApO1xuXHRcdH1cblx0fSBlbHNlIGlmICggbm9kZVR5cGUgPT09IDEgfHwgbm9kZVR5cGUgPT09IDkgfHwgbm9kZVR5cGUgPT09IDExICkge1xuXHRcdC8vIFVzZSB0ZXh0Q29udGVudCBmb3IgZWxlbWVudHNcblx0XHQvLyBpbm5lclRleHQgdXNhZ2UgcmVtb3ZlZCBmb3IgY29uc2lzdGVuY3kgb2YgbmV3IGxpbmVzIChqUXVlcnkgIzExMTUzKVxuXHRcdGlmICggdHlwZW9mIGVsZW0udGV4dENvbnRlbnQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS50ZXh0Q29udGVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gVHJhdmVyc2UgaXRzIGNoaWxkcmVuXG5cdFx0XHRmb3IgKCBlbGVtID0gZWxlbS5maXJzdENoaWxkOyBlbGVtOyBlbGVtID0gZWxlbS5uZXh0U2libGluZyApIHtcblx0XHRcdFx0cmV0ICs9IGdldFRleHQoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAoIG5vZGVUeXBlID09PSAzIHx8IG5vZGVUeXBlID09PSA0ICkge1xuXHRcdHJldHVybiBlbGVtLm5vZGVWYWx1ZTtcblx0fVxuXHQvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuXHRyZXR1cm4gcmV0O1xufTtcblxuRXhwciA9IFNpenpsZS5zZWxlY3RvcnMgPSB7XG5cblx0Ly8gQ2FuIGJlIGFkanVzdGVkIGJ5IHRoZSB1c2VyXG5cdGNhY2hlTGVuZ3RoOiA1MCxcblxuXHRjcmVhdGVQc2V1ZG86IG1hcmtGdW5jdGlvbixcblxuXHRtYXRjaDogbWF0Y2hFeHByLFxuXG5cdGF0dHJIYW5kbGU6IHt9LFxuXG5cdGZpbmQ6IHt9LFxuXG5cdHJlbGF0aXZlOiB7XG5cdFx0XCI+XCI6IHsgZGlyOiBcInBhcmVudE5vZGVcIiwgZmlyc3Q6IHRydWUgfSxcblx0XHRcIiBcIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiIH0sXG5cdFx0XCIrXCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiflwiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiB9XG5cdH0sXG5cblx0cHJlRmlsdGVyOiB7XG5cdFx0XCJBVFRSXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdG1hdGNoWzFdID0gbWF0Y2hbMV0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0Ly8gTW92ZSB0aGUgZ2l2ZW4gdmFsdWUgdG8gbWF0Y2hbM10gd2hldGhlciBxdW90ZWQgb3IgdW5xdW90ZWRcblx0XHRcdG1hdGNoWzNdID0gKCBtYXRjaFszXSB8fCBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBcIlwiICkucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsyXSA9PT0gXCJ+PVwiICkge1xuXHRcdFx0XHRtYXRjaFszXSA9IFwiIFwiICsgbWF0Y2hbM10gKyBcIiBcIjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCA0ICk7XG5cdFx0fSxcblxuXHRcdFwiQ0hJTERcIjogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0LyogbWF0Y2hlcyBmcm9tIG1hdGNoRXhwcltcIkNISUxEXCJdXG5cdFx0XHRcdDEgdHlwZSAob25seXxudGh8Li4uKVxuXHRcdFx0XHQyIHdoYXQgKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdDMgYXJndW1lbnQgKGV2ZW58b2RkfFxcZCp8XFxkKm4oWystXVxcZCspP3wuLi4pXG5cdFx0XHRcdDQgeG4tY29tcG9uZW50IG9mIHhuK3kgYXJndW1lbnQgKFsrLV0/XFxkKm58KVxuXHRcdFx0XHQ1IHNpZ24gb2YgeG4tY29tcG9uZW50XG5cdFx0XHRcdDYgeCBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NyBzaWduIG9mIHktY29tcG9uZW50XG5cdFx0XHRcdDggeSBvZiB5LWNvbXBvbmVudFxuXHRcdFx0Ki9cblx0XHRcdG1hdGNoWzFdID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsxXS5zbGljZSggMCwgMyApID09PSBcIm50aFwiICkge1xuXHRcdFx0XHQvLyBudGgtKiByZXF1aXJlcyBhcmd1bWVudFxuXHRcdFx0XHRpZiAoICFtYXRjaFszXSApIHtcblx0XHRcdFx0XHRTaXp6bGUuZXJyb3IoIG1hdGNoWzBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBudW1lcmljIHggYW5kIHkgcGFyYW1ldGVycyBmb3IgRXhwci5maWx0ZXIuQ0hJTERcblx0XHRcdFx0Ly8gcmVtZW1iZXIgdGhhdCBmYWxzZS90cnVlIGNhc3QgcmVzcGVjdGl2ZWx5IHRvIDAvMVxuXHRcdFx0XHRtYXRjaFs0XSA9ICsoIG1hdGNoWzRdID8gbWF0Y2hbNV0gKyAobWF0Y2hbNl0gfHwgMSkgOiAyICogKCBtYXRjaFszXSA9PT0gXCJldmVuXCIgfHwgbWF0Y2hbM10gPT09IFwib2RkXCIgKSApO1xuXHRcdFx0XHRtYXRjaFs1XSA9ICsoICggbWF0Y2hbN10gKyBtYXRjaFs4XSApIHx8IG1hdGNoWzNdID09PSBcIm9kZFwiICk7XG5cblx0XHRcdC8vIG90aGVyIHR5cGVzIHByb2hpYml0IGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbM10gKSB7XG5cdFx0XHRcdFNpenpsZS5lcnJvciggbWF0Y2hbMF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdH0sXG5cblx0XHRcIlBTRVVET1wiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHR2YXIgZXhjZXNzLFxuXHRcdFx0XHR1bnF1b3RlZCA9ICFtYXRjaFs2XSAmJiBtYXRjaFsyXTtcblxuXHRcdFx0aWYgKCBtYXRjaEV4cHJbXCJDSElMRFwiXS50ZXN0KCBtYXRjaFswXSApICkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWNjZXB0IHF1b3RlZCBhcmd1bWVudHMgYXMtaXNcblx0XHRcdGlmICggbWF0Y2hbM10gKSB7XG5cdFx0XHRcdG1hdGNoWzJdID0gbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIjtcblxuXHRcdFx0Ly8gU3RyaXAgZXhjZXNzIGNoYXJhY3RlcnMgZnJvbSB1bnF1b3RlZCBhcmd1bWVudHNcblx0XHRcdH0gZWxzZSBpZiAoIHVucXVvdGVkICYmIHJwc2V1ZG8udGVzdCggdW5xdW90ZWQgKSAmJlxuXHRcdFx0XHQvLyBHZXQgZXhjZXNzIGZyb20gdG9rZW5pemUgKHJlY3Vyc2l2ZWx5KVxuXHRcdFx0XHQoZXhjZXNzID0gdG9rZW5pemUoIHVucXVvdGVkLCB0cnVlICkpICYmXG5cdFx0XHRcdC8vIGFkdmFuY2UgdG8gdGhlIG5leHQgY2xvc2luZyBwYXJlbnRoZXNpc1xuXHRcdFx0XHQoZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZiggXCIpXCIsIHVucXVvdGVkLmxlbmd0aCAtIGV4Y2VzcyApIC0gdW5xdW90ZWQubGVuZ3RoKSApIHtcblxuXHRcdFx0XHQvLyBleGNlc3MgaXMgYSBuZWdhdGl2ZSBpbmRleFxuXHRcdFx0XHRtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdFx0bWF0Y2hbMl0gPSB1bnF1b3RlZC5zbGljZSggMCwgZXhjZXNzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldHVybiBvbmx5IGNhcHR1cmVzIG5lZWRlZCBieSB0aGUgcHNldWRvIGZpbHRlciBtZXRob2QgKHR5cGUgYW5kIGFyZ3VtZW50KVxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCAzICk7XG5cdFx0fVxuXHR9LFxuXG5cdGZpbHRlcjoge1xuXG5cdFx0XCJUQUdcIjogZnVuY3Rpb24oIG5vZGVOYW1lU2VsZWN0b3IgKSB7XG5cdFx0XHR2YXIgbm9kZU5hbWUgPSBub2RlTmFtZVNlbGVjdG9yLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICkudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBub2RlTmFtZVNlbGVjdG9yID09PSBcIipcIiA/XG5cdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbm9kZU5hbWU7XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFwiQ0xBU1NcIjogZnVuY3Rpb24oIGNsYXNzTmFtZSApIHtcblx0XHRcdHZhciBwYXR0ZXJuID0gY2xhc3NDYWNoZVsgY2xhc3NOYW1lICsgXCIgXCIgXTtcblxuXHRcdFx0cmV0dXJuIHBhdHRlcm4gfHxcblx0XHRcdFx0KHBhdHRlcm4gPSBuZXcgUmVnRXhwKCBcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICsgXCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIiApKSAmJlxuXHRcdFx0XHRjbGFzc0NhY2hlKCBjbGFzc05hbWUsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXR0ZXJuLnRlc3QoIHR5cGVvZiBlbGVtLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtLmNsYXNzTmFtZSB8fCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiICk7XG5cdFx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRcIkFUVFJcIjogZnVuY3Rpb24oIG5hbWUsIG9wZXJhdG9yLCBjaGVjayApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IFNpenpsZS5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHRcdFx0aWYgKCByZXN1bHQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXR1cm4gb3BlcmF0b3IgPT09IFwiIT1cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoICFvcGVyYXRvciApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdCArPSBcIlwiO1xuXG5cdFx0XHRcdHJldHVybiBvcGVyYXRvciA9PT0gXCI9XCIgPyByZXN1bHQgPT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIhPVwiID8gcmVzdWx0ICE9PSBjaGVjayA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwiXj1cIiA/IGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKCBjaGVjayApID09PSAwIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIqPVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPiAtMSA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwiJD1cIiA/IGNoZWNrICYmIHJlc3VsdC5zbGljZSggLWNoZWNrLmxlbmd0aCApID09PSBjaGVjayA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwifj1cIiA/ICggXCIgXCIgKyByZXN1bHQucmVwbGFjZSggcndoaXRlc3BhY2UsIFwiIFwiICkgKyBcIiBcIiApLmluZGV4T2YoIGNoZWNrICkgPiAtMSA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwifD1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgfHwgcmVzdWx0LnNsaWNlKCAwLCBjaGVjay5sZW5ndGggKyAxICkgPT09IGNoZWNrICsgXCItXCIgOlxuXHRcdFx0XHRcdGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0XCJDSElMRFwiOiBmdW5jdGlvbiggdHlwZSwgd2hhdCwgYXJndW1lbnQsIGZpcnN0LCBsYXN0ICkge1xuXHRcdFx0dmFyIHNpbXBsZSA9IHR5cGUuc2xpY2UoIDAsIDMgKSAhPT0gXCJudGhcIixcblx0XHRcdFx0Zm9yd2FyZCA9IHR5cGUuc2xpY2UoIC00ICkgIT09IFwibGFzdFwiLFxuXHRcdFx0XHRvZlR5cGUgPSB3aGF0ID09PSBcIm9mLXR5cGVcIjtcblxuXHRcdFx0cmV0dXJuIGZpcnN0ID09PSAxICYmIGxhc3QgPT09IDAgP1xuXG5cdFx0XHRcdC8vIFNob3J0Y3V0IGZvciA6bnRoLSoobilcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuICEhZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHR9IDpcblxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBjYWNoZSwgdW5pcXVlQ2FjaGUsIG91dGVyQ2FjaGUsIG5vZGUsIG5vZGVJbmRleCwgc3RhcnQsXG5cdFx0XHRcdFx0XHRkaXIgPSBzaW1wbGUgIT09IGZvcndhcmQgPyBcIm5leHRTaWJsaW5nXCIgOiBcInByZXZpb3VzU2libGluZ1wiLFxuXHRcdFx0XHRcdFx0cGFyZW50ID0gZWxlbS5wYXJlbnROb2RlLFxuXHRcdFx0XHRcdFx0bmFtZSA9IG9mVHlwZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFx0XHR1c2VDYWNoZSA9ICF4bWwgJiYgIW9mVHlwZSxcblx0XHRcdFx0XHRcdGRpZmYgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggcGFyZW50ICkge1xuXG5cdFx0XHRcdFx0XHQvLyA6KGZpcnN0fGxhc3R8b25seSktKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdFx0XHRpZiAoIHNpbXBsZSApIHtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKCBkaXIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0bm9kZSA9IGVsZW07XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobm9kZSA9IG5vZGVbIGRpciBdKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggb2ZUeXBlID9cblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8vIFJldmVyc2UgZGlyZWN0aW9uIGZvciA6b25seS0qIChpZiB3ZSBoYXZlbid0IHlldCBkb25lIHNvKVxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0ID0gZGlyID0gdHlwZSA9PT0gXCJvbmx5XCIgJiYgIXN0YXJ0ICYmIFwibmV4dFNpYmxpbmdcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3RhcnQgPSBbIGZvcndhcmQgPyBwYXJlbnQuZmlyc3RDaGlsZCA6IHBhcmVudC5sYXN0Q2hpbGQgXTtcblxuXHRcdFx0XHRcdFx0Ly8gbm9uLXhtbCA6bnRoLWNoaWxkKC4uLikgc3RvcmVzIGNhY2hlIGRhdGEgb24gYHBhcmVudGBcblx0XHRcdFx0XHRcdGlmICggZm9yd2FyZCAmJiB1c2VDYWNoZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBTZWVrIGBlbGVtYCBmcm9tIGEgcHJldmlvdXNseS1jYWNoZWQgaW5kZXhcblxuXHRcdFx0XHRcdFx0XHQvLyAuLi5pbiBhIGd6aXAtZnJpZW5kbHkgd2F5XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSBwYXJlbnQ7XG5cdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG5cdFx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdChvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0Y2FjaGUgPSB1bmlxdWVDYWNoZVsgdHlwZSBdIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG5cdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXggJiYgY2FjaGVbIDIgXTtcblx0XHRcdFx0XHRcdFx0bm9kZSA9IG5vZGVJbmRleCAmJiBwYXJlbnQuY2hpbGROb2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobm9kZSA9ICsrbm9kZUluZGV4ICYmIG5vZGUgJiYgbm9kZVsgZGlyIF0gfHxcblxuXHRcdFx0XHRcdFx0XHRcdC8vIEZhbGxiYWNrIHRvIHNlZWtpbmcgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0KGRpZmYgPSBub2RlSW5kZXggPSAwKSB8fCBzdGFydC5wb3AoKSkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBXaGVuIGZvdW5kLCBjYWNoZSBpbmRleGVzIG9uIGBwYXJlbnRgIGFuZCBicmVha1xuXHRcdFx0XHRcdFx0XHRcdGlmICggbm9kZS5ub2RlVHlwZSA9PT0gMSAmJiArK2RpZmYgJiYgbm9kZSA9PT0gZWxlbSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIG5vZGVJbmRleCwgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIFVzZSBwcmV2aW91c2x5LWNhY2hlZCBlbGVtZW50IGluZGV4IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIC4uLmluIGEgZ3ppcC1mcmllbmRseSB3YXlcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbTtcblx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gbm9kZVsgZXhwYW5kbyBdIHx8IChub2RlWyBleHBhbmRvIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0Ly8gRGVmZW5kIGFnYWluc3QgY2xvbmVkIGF0dHJvcGVydGllcyAoalF1ZXJ5IGdoLTE3MDkpXG5cdFx0XHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRcdChvdXRlckNhY2hlWyBub2RlLnVuaXF1ZUlEIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdFx0XHRjYWNoZSA9IHVuaXF1ZUNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdFx0bm9kZUluZGV4ID0gY2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBjYWNoZVsgMSBdO1xuXHRcdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyB4bWwgOm50aC1jaGlsZCguLi4pXG5cdFx0XHRcdFx0XHRcdC8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcblx0XHRcdFx0XHRcdFx0aWYgKCBkaWZmID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBVc2UgdGhlIHNhbWUgbG9vcCBhcyBhYm92ZSB0byBzZWVrIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICggKG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHQoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAoIG9mVHlwZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGUubm9kZVR5cGUgPT09IDEgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQrK2RpZmYgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gQ2FjaGUgdGhlIGluZGV4IG9mIGVhY2ggZW5jb3VudGVyZWQgZWxlbWVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEZWZlbmQgYWdhaW5zdCBjbG9uZWQgYXR0cm9wZXJ0aWVzIChqUXVlcnkgZ2gtMTcwOSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1bmlxdWVDYWNoZSA9IG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KG91dGVyQ2FjaGVbIG5vZGUudW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIGRpZmYgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggbm9kZSA9PT0gZWxlbSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJbmNvcnBvcmF0ZSB0aGUgb2Zmc2V0LCB0aGVuIGNoZWNrIGFnYWluc3QgY3ljbGUgc2l6ZVxuXHRcdFx0XHRcdFx0ZGlmZiAtPSBsYXN0O1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRpZmYgPT09IGZpcnN0IHx8ICggZGlmZiAlIGZpcnN0ID09PSAwICYmIGRpZmYgLyBmaXJzdCA+PSAwICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRcIlBTRVVET1wiOiBmdW5jdGlvbiggcHNldWRvLCBhcmd1bWVudCApIHtcblx0XHRcdC8vIHBzZXVkby1jbGFzcyBuYW1lcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZVxuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNwc2V1ZG8tY2xhc3Nlc1xuXHRcdFx0Ly8gUHJpb3JpdGl6ZSBieSBjYXNlIHNlbnNpdGl2aXR5IGluIGNhc2UgY3VzdG9tIHBzZXVkb3MgYXJlIGFkZGVkIHdpdGggdXBwZXJjYXNlIGxldHRlcnNcblx0XHRcdC8vIFJlbWVtYmVyIHRoYXQgc2V0RmlsdGVycyBpbmhlcml0cyBmcm9tIHBzZXVkb3Ncblx0XHRcdHZhciBhcmdzLFxuXHRcdFx0XHRmbiA9IEV4cHIucHNldWRvc1sgcHNldWRvIF0gfHwgRXhwci5zZXRGaWx0ZXJzWyBwc2V1ZG8udG9Mb3dlckNhc2UoKSBdIHx8XG5cdFx0XHRcdFx0U2l6emxlLmVycm9yKCBcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIgKyBwc2V1ZG8gKTtcblxuXHRcdFx0Ly8gVGhlIHVzZXIgbWF5IHVzZSBjcmVhdGVQc2V1ZG8gdG8gaW5kaWNhdGUgdGhhdFxuXHRcdFx0Ly8gYXJndW1lbnRzIGFyZSBuZWVkZWQgdG8gY3JlYXRlIHRoZSBmaWx0ZXIgZnVuY3Rpb25cblx0XHRcdC8vIGp1c3QgYXMgU2l6emxlIGRvZXNcblx0XHRcdGlmICggZm5bIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0cmV0dXJuIGZuKCBhcmd1bWVudCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBCdXQgbWFpbnRhaW4gc3VwcG9ydCBmb3Igb2xkIHNpZ25hdHVyZXNcblx0XHRcdGlmICggZm4ubGVuZ3RoID4gMSApIHtcblx0XHRcdFx0YXJncyA9IFsgcHNldWRvLCBwc2V1ZG8sIFwiXCIsIGFyZ3VtZW50IF07XG5cdFx0XHRcdHJldHVybiBFeHByLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoIHBzZXVkby50b0xvd2VyQ2FzZSgpICkgP1xuXHRcdFx0XHRcdG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcyApIHtcblx0XHRcdFx0XHRcdHZhciBpZHgsXG5cdFx0XHRcdFx0XHRcdG1hdGNoZWQgPSBmbiggc2VlZCwgYXJndW1lbnQgKSxcblx0XHRcdFx0XHRcdFx0aSA9IG1hdGNoZWQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlkeCA9IGluZGV4T2YoIHNlZWQsIG1hdGNoZWRbaV0gKTtcblx0XHRcdFx0XHRcdFx0c2VlZFsgaWR4IF0gPSAhKCBtYXRjaGVzWyBpZHggXSA9IG1hdGNoZWRbaV0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSA6XG5cdFx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZm4oIGVsZW0sIDAsIGFyZ3MgKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm47XG5cdFx0fVxuXHR9LFxuXG5cdHBzZXVkb3M6IHtcblx0XHQvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3Ncblx0XHRcIm5vdFwiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdFx0Ly8gVHJpbSB0aGUgc2VsZWN0b3IgcGFzc2VkIHRvIGNvbXBpbGVcblx0XHRcdC8vIHRvIGF2b2lkIHRyZWF0aW5nIGxlYWRpbmcgYW5kIHRyYWlsaW5nXG5cdFx0XHQvLyBzcGFjZXMgYXMgY29tYmluYXRvcnNcblx0XHRcdHZhciBpbnB1dCA9IFtdLFxuXHRcdFx0XHRyZXN1bHRzID0gW10sXG5cdFx0XHRcdG1hdGNoZXIgPSBjb21waWxlKCBzZWxlY3Rvci5yZXBsYWNlKCBydHJpbSwgXCIkMVwiICkgKTtcblxuXHRcdFx0cmV0dXJuIG1hdGNoZXJbIGV4cGFuZG8gXSA/XG5cdFx0XHRcdG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcywgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBlbGVtLFxuXHRcdFx0XHRcdFx0dW5tYXRjaGVkID0gbWF0Y2hlciggc2VlZCwgbnVsbCwgeG1sLCBbXSApLFxuXHRcdFx0XHRcdFx0aSA9IHNlZWQubGVuZ3RoO1xuXG5cdFx0XHRcdFx0Ly8gTWF0Y2ggZWxlbWVudHMgdW5tYXRjaGVkIGJ5IGBtYXRjaGVyYFxuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoZWxlbSA9IHVubWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdHNlZWRbaV0gPSAhKG1hdGNoZXNbaV0gPSBlbGVtKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pIDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdFx0XHRpbnB1dFswXSA9IGVsZW07XG5cdFx0XHRcdFx0bWF0Y2hlciggaW5wdXQsIG51bGwsIHhtbCwgcmVzdWx0cyApO1xuXHRcdFx0XHRcdC8vIERvbid0IGtlZXAgdGhlIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cdFx0XHRcdFx0aW5wdXRbMF0gPSBudWxsO1xuXHRcdFx0XHRcdHJldHVybiAhcmVzdWx0cy5wb3AoKTtcblx0XHRcdFx0fTtcblx0XHR9KSxcblxuXHRcdFwiaGFzXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBTaXp6bGUoIHNlbGVjdG9yLCBlbGVtICkubGVuZ3RoID4gMDtcblx0XHRcdH07XG5cdFx0fSksXG5cblx0XHRcImNvbnRhaW5zXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggdGV4dCApIHtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0udGV4dENvbnRlbnQgfHwgZWxlbS5pbm5lclRleHQgfHwgZ2V0VGV4dCggZWxlbSApICkuaW5kZXhPZiggdGV4dCApID4gLTE7XG5cdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0Ly8gXCJXaGV0aGVyIGFuIGVsZW1lbnQgaXMgcmVwcmVzZW50ZWQgYnkgYSA6bGFuZygpIHNlbGVjdG9yXG5cdFx0Ly8gaXMgYmFzZWQgc29sZWx5IG9uIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWVcblx0XHQvLyBiZWluZyBlcXVhbCB0byB0aGUgaWRlbnRpZmllciBDLFxuXHRcdC8vIG9yIGJlZ2lubmluZyB3aXRoIHRoZSBpZGVudGlmaWVyIEMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgXCItXCIuXG5cdFx0Ly8gVGhlIG1hdGNoaW5nIG9mIEMgYWdhaW5zdCB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlIGlzIHBlcmZvcm1lZCBjYXNlLWluc2Vuc2l0aXZlbHkuXG5cdFx0Ly8gVGhlIGlkZW50aWZpZXIgQyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgdmFsaWQgbGFuZ3VhZ2UgbmFtZS5cIlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jbGFuZy1wc2V1ZG9cblx0XHRcImxhbmdcIjogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggbGFuZyApIHtcblx0XHRcdC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcblx0XHRcdGlmICggIXJpZGVudGlmaWVyLnRlc3QobGFuZyB8fCBcIlwiKSApIHtcblx0XHRcdFx0U2l6emxlLmVycm9yKCBcInVuc3VwcG9ydGVkIGxhbmc6IFwiICsgbGFuZyApO1xuXHRcdFx0fVxuXHRcdFx0bGFuZyA9IGxhbmcucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgZWxlbUxhbmc7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRpZiAoIChlbGVtTGFuZyA9IGRvY3VtZW50SXNIVE1MID9cblx0XHRcdFx0XHRcdGVsZW0ubGFuZyA6XG5cdFx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpIHx8IGVsZW0uZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSkgKSB7XG5cblx0XHRcdFx0XHRcdGVsZW1MYW5nID0gZWxlbUxhbmcudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtTGFuZyA9PT0gbGFuZyB8fCBlbGVtTGFuZy5pbmRleE9mKCBsYW5nICsgXCItXCIgKSA9PT0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gd2hpbGUgKCAoZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSkgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0Ly8gTWlzY2VsbGFuZW91c1xuXHRcdFwidGFyZ2V0XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cdFx0XHRyZXR1cm4gaGFzaCAmJiBoYXNoLnNsaWNlKCAxICkgPT09IGVsZW0uaWQ7XG5cdFx0fSxcblxuXHRcdFwicm9vdFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBkb2NFbGVtO1xuXHRcdH0sXG5cblx0XHRcImZvY3VzXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKCFkb2N1bWVudC5oYXNGb2N1cyB8fCBkb2N1bWVudC5oYXNGb2N1cygpKSAmJiAhIShlbGVtLnR5cGUgfHwgZWxlbS5ocmVmIHx8IH5lbGVtLnRhYkluZGV4KTtcblx0XHR9LFxuXG5cdFx0Ly8gQm9vbGVhbiBwcm9wZXJ0aWVzXG5cdFx0XCJlbmFibGVkXCI6IGNyZWF0ZURpc2FibGVkUHNldWRvKCBmYWxzZSApLFxuXHRcdFwiZGlzYWJsZWRcIjogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIHRydWUgKSxcblxuXHRcdFwiY2hlY2tlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdC8vIEluIENTUzMsIDpjaGVja2VkIHNob3VsZCByZXR1cm4gYm90aCBjaGVja2VkIGFuZCBzZWxlY3RlZCBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdHZhciBub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiAhIWVsZW0uY2hlY2tlZCkgfHwgKG5vZGVOYW1lID09PSBcIm9wdGlvblwiICYmICEhZWxlbS5zZWxlY3RlZCk7XG5cdFx0fSxcblxuXHRcdFwic2VsZWN0ZWRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHQvLyBBY2Nlc3NpbmcgdGhpcyBwcm9wZXJ0eSBtYWtlcyBzZWxlY3RlZC1ieS1kZWZhdWx0XG5cdFx0XHQvLyBvcHRpb25zIGluIFNhZmFyaSB3b3JrIHByb3Blcmx5XG5cdFx0XHRpZiAoIGVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0ZWxlbS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbGVtLnNlbGVjdGVkID09PSB0cnVlO1xuXHRcdH0sXG5cblx0XHQvLyBDb250ZW50c1xuXHRcdFwiZW1wdHlcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2VtcHR5LXBzZXVkb1xuXHRcdFx0Ly8gOmVtcHR5IGlzIG5lZ2F0ZWQgYnkgZWxlbWVudCAoMSkgb3IgY29udGVudCBub2RlcyAodGV4dDogMzsgY2RhdGE6IDQ7IGVudGl0eSByZWY6IDUpLFxuXHRcdFx0Ly8gICBidXQgbm90IGJ5IG90aGVycyAoY29tbWVudDogODsgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbjogNzsgZXRjLilcblx0XHRcdC8vIG5vZGVUeXBlIDwgNiB3b3JrcyBiZWNhdXNlIGF0dHJpYnV0ZXMgKDIpIGRvIG5vdCBhcHBlYXIgYXMgY2hpbGRyZW5cblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPCA2ICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdFwicGFyZW50XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICFFeHByLnBzZXVkb3NbXCJlbXB0eVwiXSggZWxlbSApO1xuXHRcdH0sXG5cblx0XHQvLyBFbGVtZW50L2lucHV0IHR5cGVzXG5cdFx0XCJoZWFkZXJcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmhlYWRlci50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdFwiaW5wdXRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmlucHV0cy50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdFwiYnV0dG9uXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gXCJidXR0b25cIiB8fCBuYW1lID09PSBcImJ1dHRvblwiO1xuXHRcdH0sXG5cblx0XHRcInRleHRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgYXR0cjtcblx0XHRcdHJldHVybiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiAmJlxuXHRcdFx0XHRlbGVtLnR5cGUgPT09IFwidGV4dFwiICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUU8OFxuXHRcdFx0XHQvLyBOZXcgSFRNTDUgYXR0cmlidXRlIHZhbHVlcyAoZS5nLiwgXCJzZWFyY2hcIikgYXBwZWFyIHdpdGggZWxlbS50eXBlID09PSBcInRleHRcIlxuXHRcdFx0XHQoIChhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PSBudWxsIHx8IGF0dHIudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0XCIgKTtcblx0XHR9LFxuXG5cdFx0Ly8gUG9zaXRpb24taW4tY29sbGVjdGlvblxuXHRcdFwiZmlyc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBbIDAgXTtcblx0XHR9KSxcblxuXHRcdFwibGFzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHJldHVybiBbIGxlbmd0aCAtIDEgXTtcblx0XHR9KSxcblxuXHRcdFwiZXFcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0cmV0dXJuIFsgYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudCBdO1xuXHRcdH0pLFxuXG5cdFx0XCJldmVuXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pLFxuXG5cdFx0XCJvZGRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHR2YXIgaSA9IDE7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkgKz0gMiApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSksXG5cblx0XHRcImx0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcblx0XHRcdHZhciBpID0gYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudDtcblx0XHRcdGZvciAoIDsgLS1pID49IDA7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KSxcblxuXHRcdFwiZ3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuXHRcdFx0Zm9yICggOyArK2kgPCBsZW5ndGg7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KVxuXHR9XG59O1xuXG5FeHByLnBzZXVkb3NbXCJudGhcIl0gPSBFeHByLnBzZXVkb3NbXCJlcVwiXTtcblxuLy8gQWRkIGJ1dHRvbi9pbnB1dCB0eXBlIHBzZXVkb3NcbmZvciAoIGkgaW4geyByYWRpbzogdHJ1ZSwgY2hlY2tib3g6IHRydWUsIGZpbGU6IHRydWUsIHBhc3N3b3JkOiB0cnVlLCBpbWFnZTogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUlucHV0UHNldWRvKCBpICk7XG59XG5mb3IgKCBpIGluIHsgc3VibWl0OiB0cnVlLCByZXNldDogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUJ1dHRvblBzZXVkbyggaSApO1xufVxuXG4vLyBFYXN5IEFQSSBmb3IgY3JlYXRpbmcgbmV3IHNldEZpbHRlcnNcbmZ1bmN0aW9uIHNldEZpbHRlcnMoKSB7fVxuc2V0RmlsdGVycy5wcm90b3R5cGUgPSBFeHByLmZpbHRlcnMgPSBFeHByLnBzZXVkb3M7XG5FeHByLnNldEZpbHRlcnMgPSBuZXcgc2V0RmlsdGVycygpO1xuXG50b2tlbml6ZSA9IFNpenpsZS50b2tlbml6ZSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgcGFyc2VPbmx5ICkge1xuXHR2YXIgbWF0Y2hlZCwgbWF0Y2gsIHRva2VucywgdHlwZSxcblx0XHRzb0ZhciwgZ3JvdXBzLCBwcmVGaWx0ZXJzLFxuXHRcdGNhY2hlZCA9IHRva2VuQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcblxuXHRpZiAoIGNhY2hlZCApIHtcblx0XHRyZXR1cm4gcGFyc2VPbmx5ID8gMCA6IGNhY2hlZC5zbGljZSggMCApO1xuXHR9XG5cblx0c29GYXIgPSBzZWxlY3Rvcjtcblx0Z3JvdXBzID0gW107XG5cdHByZUZpbHRlcnMgPSBFeHByLnByZUZpbHRlcjtcblxuXHR3aGlsZSAoIHNvRmFyICkge1xuXG5cdFx0Ly8gQ29tbWEgYW5kIGZpcnN0IHJ1blxuXHRcdGlmICggIW1hdGNoZWQgfHwgKG1hdGNoID0gcmNvbW1hLmV4ZWMoIHNvRmFyICkpICkge1xuXHRcdFx0aWYgKCBtYXRjaCApIHtcblx0XHRcdFx0Ly8gRG9uJ3QgY29uc3VtZSB0cmFpbGluZyBjb21tYXMgYXMgdmFsaWRcblx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hbMF0ubGVuZ3RoICkgfHwgc29GYXI7XG5cdFx0XHR9XG5cdFx0XHRncm91cHMucHVzaCggKHRva2VucyA9IFtdKSApO1xuXHRcdH1cblxuXHRcdG1hdGNoZWQgPSBmYWxzZTtcblxuXHRcdC8vIENvbWJpbmF0b3JzXG5cdFx0aWYgKCAobWF0Y2ggPSByY29tYmluYXRvcnMuZXhlYyggc29GYXIgKSkgKSB7XG5cdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cdFx0XHRcdC8vIENhc3QgZGVzY2VuZGFudCBjb21iaW5hdG9ycyB0byBzcGFjZVxuXHRcdFx0XHR0eXBlOiBtYXRjaFswXS5yZXBsYWNlKCBydHJpbSwgXCIgXCIgKVxuXHRcdFx0fSk7XG5cdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuXHRcdH1cblxuXHRcdC8vIEZpbHRlcnNcblx0XHRmb3IgKCB0eXBlIGluIEV4cHIuZmlsdGVyICkge1xuXHRcdFx0aWYgKCAobWF0Y2ggPSBtYXRjaEV4cHJbIHR5cGUgXS5leGVjKCBzb0ZhciApKSAmJiAoIXByZUZpbHRlcnNbIHR5cGUgXSB8fFxuXHRcdFx0XHQobWF0Y2ggPSBwcmVGaWx0ZXJzWyB0eXBlIF0oIG1hdGNoICkpKSApIHtcblx0XHRcdFx0bWF0Y2hlZCA9IG1hdGNoLnNoaWZ0KCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRcdG1hdGNoZXM6IG1hdGNoXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggIW1hdGNoZWQgKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgaW52YWxpZCBleGNlc3Ncblx0Ly8gaWYgd2UncmUganVzdCBwYXJzaW5nXG5cdC8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3Igb3IgcmV0dXJuIHRva2Vuc1xuXHRyZXR1cm4gcGFyc2VPbmx5ID9cblx0XHRzb0Zhci5sZW5ndGggOlxuXHRcdHNvRmFyID9cblx0XHRcdFNpenpsZS5lcnJvciggc2VsZWN0b3IgKSA6XG5cdFx0XHQvLyBDYWNoZSB0aGUgdG9rZW5zXG5cdFx0XHR0b2tlbkNhY2hlKCBzZWxlY3RvciwgZ3JvdXBzICkuc2xpY2UoIDAgKTtcbn07XG5cbmZ1bmN0aW9uIHRvU2VsZWN0b3IoIHRva2VucyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IHRva2Vucy5sZW5ndGgsXG5cdFx0c2VsZWN0b3IgPSBcIlwiO1xuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRzZWxlY3RvciArPSB0b2tlbnNbaV0udmFsdWU7XG5cdH1cblx0cmV0dXJuIHNlbGVjdG9yO1xufVxuXG5mdW5jdGlvbiBhZGRDb21iaW5hdG9yKCBtYXRjaGVyLCBjb21iaW5hdG9yLCBiYXNlICkge1xuXHR2YXIgZGlyID0gY29tYmluYXRvci5kaXIsXG5cdFx0c2tpcCA9IGNvbWJpbmF0b3IubmV4dCxcblx0XHRrZXkgPSBza2lwIHx8IGRpcixcblx0XHRjaGVja05vbkVsZW1lbnRzID0gYmFzZSAmJiBrZXkgPT09IFwicGFyZW50Tm9kZVwiLFxuXHRcdGRvbmVOYW1lID0gZG9uZSsrO1xuXG5cdHJldHVybiBjb21iaW5hdG9yLmZpcnN0ID9cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGNsb3Nlc3QgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fSA6XG5cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGFsbCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudHNcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIG9sZENhY2hlLCB1bmlxdWVDYWNoZSwgb3V0ZXJDYWNoZSxcblx0XHRcdFx0bmV3Q2FjaGUgPSBbIGRpcnJ1bnMsIGRvbmVOYW1lIF07XG5cblx0XHRcdC8vIFdlIGNhbid0IHNldCBhcmJpdHJhcnkgZGF0YSBvbiBYTUwgbm9kZXMsIHNvIHRoZXkgZG9uJ3QgYmVuZWZpdCBmcm9tIGNvbWJpbmF0b3IgY2FjaGluZ1xuXHRcdFx0aWYgKCB4bWwgKSB7XG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gZWxlbVsgZXhwYW5kbyBdIHx8IChlbGVtWyBleHBhbmRvIF0gPSB7fSk7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw5IG9ubHlcblx0XHRcdFx0XHRcdC8vIERlZmVuZCBhZ2FpbnN0IGNsb25lZCBhdHRyb3BlcnRpZXMgKGpRdWVyeSBnaC0xNzA5KVxuXHRcdFx0XHRcdFx0dW5pcXVlQ2FjaGUgPSBvdXRlckNhY2hlWyBlbGVtLnVuaXF1ZUlEIF0gfHwgKG91dGVyQ2FjaGVbIGVsZW0udW5pcXVlSUQgXSA9IHt9KTtcblxuXHRcdFx0XHRcdFx0aWYgKCBza2lwICYmIHNraXAgPT09IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSApIHtcblx0XHRcdFx0XHRcdFx0ZWxlbSA9IGVsZW1bIGRpciBdIHx8IGVsZW07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCAob2xkQ2FjaGUgPSB1bmlxdWVDYWNoZVsga2V5IF0pICYmXG5cdFx0XHRcdFx0XHRcdG9sZENhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgb2xkQ2FjaGVbIDEgXSA9PT0gZG9uZU5hbWUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQXNzaWduIHRvIG5ld0NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChuZXdDYWNoZVsgMiBdID0gb2xkQ2FjaGVbIDIgXSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXVzZSBuZXdjYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRcdHVuaXF1ZUNhY2hlWyBrZXkgXSA9IG5ld0NhY2hlO1xuXG5cdFx0XHRcdFx0XHRcdC8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuXHRcdFx0XHRcdFx0XHRpZiAoIChuZXdDYWNoZVsgMiBdID0gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkpICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICkge1xuXHRyZXR1cm4gbWF0Y2hlcnMubGVuZ3RoID4gMSA/XG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHZhciBpID0gbWF0Y2hlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggIW1hdGNoZXJzW2ldKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gOlxuXHRcdG1hdGNoZXJzWzBdO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBsZUNvbnRleHRzKCBzZWxlY3RvciwgY29udGV4dHMsIHJlc3VsdHMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBjb250ZXh0cy5sZW5ndGg7XG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFNpenpsZSggc2VsZWN0b3IsIGNvbnRleHRzW2ldLCByZXN1bHRzICk7XG5cdH1cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGNvbmRlbnNlKCB1bm1hdGNoZWQsIG1hcCwgZmlsdGVyLCBjb250ZXh0LCB4bWwgKSB7XG5cdHZhciBlbGVtLFxuXHRcdG5ld1VubWF0Y2hlZCA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGxlbiA9IHVubWF0Y2hlZC5sZW5ndGgsXG5cdFx0bWFwcGVkID0gbWFwICE9IG51bGw7XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAoZWxlbSA9IHVubWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRpZiAoICFmaWx0ZXIgfHwgZmlsdGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0bmV3VW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0aWYgKCBtYXBwZWQgKSB7XG5cdFx0XHRcdFx0bWFwLnB1c2goIGkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBuZXdVbm1hdGNoZWQ7XG59XG5cbmZ1bmN0aW9uIHNldE1hdGNoZXIoIHByZUZpbHRlciwgc2VsZWN0b3IsIG1hdGNoZXIsIHBvc3RGaWx0ZXIsIHBvc3RGaW5kZXIsIHBvc3RTZWxlY3RvciApIHtcblx0aWYgKCBwb3N0RmlsdGVyICYmICFwb3N0RmlsdGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0cG9zdEZpbHRlciA9IHNldE1hdGNoZXIoIHBvc3RGaWx0ZXIgKTtcblx0fVxuXHRpZiAoIHBvc3RGaW5kZXIgJiYgIXBvc3RGaW5kZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmluZGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICk7XG5cdH1cblx0cmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgcmVzdWx0cywgY29udGV4dCwgeG1sICkge1xuXHRcdHZhciB0ZW1wLCBpLCBlbGVtLFxuXHRcdFx0cHJlTWFwID0gW10sXG5cdFx0XHRwb3N0TWFwID0gW10sXG5cdFx0XHRwcmVleGlzdGluZyA9IHJlc3VsdHMubGVuZ3RoLFxuXG5cdFx0XHQvLyBHZXQgaW5pdGlhbCBlbGVtZW50cyBmcm9tIHNlZWQgb3IgY29udGV4dFxuXHRcdFx0ZWxlbXMgPSBzZWVkIHx8IG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yIHx8IFwiKlwiLCBjb250ZXh0Lm5vZGVUeXBlID8gWyBjb250ZXh0IF0gOiBjb250ZXh0LCBbXSApLFxuXG5cdFx0XHQvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cblx0XHRcdG1hdGNoZXJJbiA9IHByZUZpbHRlciAmJiAoIHNlZWQgfHwgIXNlbGVjdG9yICkgP1xuXHRcdFx0XHRjb25kZW5zZSggZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdGVsZW1zLFxuXG5cdFx0XHRtYXRjaGVyT3V0ID0gbWF0Y2hlciA/XG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgYSBwb3N0RmluZGVyLCBvciBmaWx0ZXJlZCBzZWVkLCBvciBub24tc2VlZCBwb3N0RmlsdGVyIG9yIHByZWV4aXN0aW5nIHJlc3VsdHMsXG5cdFx0XHRcdHBvc3RGaW5kZXIgfHwgKCBzZWVkID8gcHJlRmlsdGVyIDogcHJlZXhpc3RpbmcgfHwgcG9zdEZpbHRlciApID9cblxuXHRcdFx0XHRcdC8vIC4uLmludGVybWVkaWF0ZSBwcm9jZXNzaW5nIGlzIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdFtdIDpcblxuXHRcdFx0XHRcdC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxuXHRcdFx0XHRcdHJlc3VsdHMgOlxuXHRcdFx0XHRtYXRjaGVySW47XG5cblx0XHQvLyBGaW5kIHByaW1hcnkgbWF0Y2hlc1xuXHRcdGlmICggbWF0Y2hlciApIHtcblx0XHRcdG1hdGNoZXIoIG1hdGNoZXJJbiwgbWF0Y2hlck91dCwgY29udGV4dCwgeG1sICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcG9zdEZpbHRlclxuXHRcdGlmICggcG9zdEZpbHRlciApIHtcblx0XHRcdHRlbXAgPSBjb25kZW5zZSggbWF0Y2hlck91dCwgcG9zdE1hcCApO1xuXHRcdFx0cG9zdEZpbHRlciggdGVtcCwgW10sIGNvbnRleHQsIHhtbCApO1xuXG5cdFx0XHQvLyBVbi1tYXRjaCBmYWlsaW5nIGVsZW1lbnRzIGJ5IG1vdmluZyB0aGVtIGJhY2sgdG8gbWF0Y2hlckluXG5cdFx0XHRpID0gdGVtcC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAoZWxlbSA9IHRlbXBbaV0pICkge1xuXHRcdFx0XHRcdG1hdGNoZXJPdXRbIHBvc3RNYXBbaV0gXSA9ICEobWF0Y2hlckluWyBwb3N0TWFwW2ldIF0gPSBlbGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggc2VlZCApIHtcblx0XHRcdGlmICggcG9zdEZpbmRlciB8fCBwcmVGaWx0ZXIgKSB7XG5cdFx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblx0XHRcdFx0XHQvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcblx0XHRcdFx0XHR0ZW1wID0gW107XG5cdFx0XHRcdFx0aSA9IG1hdGNoZXJPdXQubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICkge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXN0b3JlIG1hdGNoZXJJbiBzaW5jZSBlbGVtIGlzIG5vdCB5ZXQgYSBmaW5hbCBtYXRjaFxuXHRcdFx0XHRcdFx0XHR0ZW1wLnB1c2goIChtYXRjaGVySW5baV0gPSBlbGVtKSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwb3N0RmluZGVyKCBudWxsLCAobWF0Y2hlck91dCA9IFtdKSwgdGVtcCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIG1hdGNoZWQgZWxlbWVudHMgZnJvbSBzZWVkIHRvIHJlc3VsdHMgdG8ga2VlcCB0aGVtIHN5bmNocm9uaXplZFxuXHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdGlmICggKGVsZW0gPSBtYXRjaGVyT3V0W2ldKSAmJlxuXHRcdFx0XHRcdFx0KHRlbXAgPSBwb3N0RmluZGVyID8gaW5kZXhPZiggc2VlZCwgZWxlbSApIDogcHJlTWFwW2ldKSA+IC0xICkge1xuXG5cdFx0XHRcdFx0XHRzZWVkW3RlbXBdID0gIShyZXN1bHRzW3RlbXBdID0gZWxlbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBBZGQgZWxlbWVudHMgdG8gcmVzdWx0cywgdGhyb3VnaCBwb3N0RmluZGVyIGlmIGRlZmluZWRcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlck91dCA9IGNvbmRlbnNlKFxuXHRcdFx0XHRtYXRjaGVyT3V0ID09PSByZXN1bHRzID9cblx0XHRcdFx0XHRtYXRjaGVyT3V0LnNwbGljZSggcHJlZXhpc3RpbmcsIG1hdGNoZXJPdXQubGVuZ3RoICkgOlxuXHRcdFx0XHRcdG1hdGNoZXJPdXRcblx0XHRcdCk7XG5cdFx0XHRpZiAoIHBvc3RGaW5kZXIgKSB7XG5cdFx0XHRcdHBvc3RGaW5kZXIoIG51bGwsIHJlc3VsdHMsIG1hdGNoZXJPdXQsIHhtbCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgbWF0Y2hlck91dCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMgKSB7XG5cdHZhciBjaGVja0NvbnRleHQsIG1hdGNoZXIsIGosXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcblx0XHRsZWFkaW5nUmVsYXRpdmUgPSBFeHByLnJlbGF0aXZlWyB0b2tlbnNbMF0udHlwZSBdLFxuXHRcdGltcGxpY2l0UmVsYXRpdmUgPSBsZWFkaW5nUmVsYXRpdmUgfHwgRXhwci5yZWxhdGl2ZVtcIiBcIl0sXG5cdFx0aSA9IGxlYWRpbmdSZWxhdGl2ZSA/IDEgOiAwLFxuXG5cdFx0Ly8gVGhlIGZvdW5kYXRpb25hbCBtYXRjaGVyIGVuc3VyZXMgdGhhdCBlbGVtZW50cyBhcmUgcmVhY2hhYmxlIGZyb20gdG9wLWxldmVsIGNvbnRleHQocylcblx0XHRtYXRjaENvbnRleHQgPSBhZGRDb21iaW5hdG9yKCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBjaGVja0NvbnRleHQ7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoQW55Q29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YoIGNoZWNrQ29udGV4dCwgZWxlbSApID4gLTE7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoZXJzID0gWyBmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIHJldCA9ICggIWxlYWRpbmdSZWxhdGl2ZSAmJiAoIHhtbCB8fCBjb250ZXh0ICE9PSBvdXRlcm1vc3RDb250ZXh0ICkgKSB8fCAoXG5cdFx0XHRcdChjaGVja0NvbnRleHQgPSBjb250ZXh0KS5ub2RlVHlwZSA/XG5cdFx0XHRcdFx0bWF0Y2hDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdFx0bWF0Y2hBbnlDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSApO1xuXHRcdFx0Ly8gQXZvaWQgaGFuZ2luZyBvbnRvIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cdFx0XHRjaGVja0NvbnRleHQgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IF07XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAobWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1tpXS50eXBlIF0pICkge1xuXHRcdFx0bWF0Y2hlcnMgPSBbIGFkZENvbWJpbmF0b3IoZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksIG1hdGNoZXIpIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXIgPSBFeHByLmZpbHRlclsgdG9rZW5zW2ldLnR5cGUgXS5hcHBseSggbnVsbCwgdG9rZW5zW2ldLm1hdGNoZXMgKTtcblxuXHRcdFx0Ly8gUmV0dXJuIHNwZWNpYWwgdXBvbiBzZWVpbmcgYSBwb3NpdGlvbmFsIG1hdGNoZXJcblx0XHRcdGlmICggbWF0Y2hlclsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBuZXh0IHJlbGF0aXZlIG9wZXJhdG9yIChpZiBhbnkpIGZvciBwcm9wZXIgaGFuZGxpbmdcblx0XHRcdFx0aiA9ICsraTtcblx0XHRcdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBFeHByLnJlbGF0aXZlWyB0b2tlbnNbal0udHlwZSBdICkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZXRNYXRjaGVyKFxuXHRcdFx0XHRcdGkgPiAxICYmIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApLFxuXHRcdFx0XHRcdGkgPiAxICYmIHRvU2VsZWN0b3IoXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGUgcHJlY2VkaW5nIHRva2VuIHdhcyBhIGRlc2NlbmRhbnQgY29tYmluYXRvciwgaW5zZXJ0IGFuIGltcGxpY2l0IGFueS1lbGVtZW50IGAqYFxuXHRcdFx0XHRcdFx0dG9rZW5zLnNsaWNlKCAwLCBpIC0gMSApLmNvbmNhdCh7IHZhbHVlOiB0b2tlbnNbIGkgLSAyIF0udHlwZSA9PT0gXCIgXCIgPyBcIipcIiA6IFwiXCIgfSlcblx0XHRcdFx0XHQpLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSxcblx0XHRcdFx0XHRtYXRjaGVyLFxuXHRcdFx0XHRcdGkgPCBqICYmIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMuc2xpY2UoIGksIGogKSApLFxuXHRcdFx0XHRcdGogPCBsZW4gJiYgbWF0Y2hlckZyb21Ub2tlbnMoICh0b2tlbnMgPSB0b2tlbnMuc2xpY2UoIGogKSkgKSxcblx0XHRcdFx0XHRqIDwgbGVuICYmIHRvU2VsZWN0b3IoIHRva2VucyApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVycy5wdXNoKCBtYXRjaGVyICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSB7XG5cdHZhciBieVNldCA9IHNldE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0YnlFbGVtZW50ID0gZWxlbWVudE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0c3VwZXJNYXRjaGVyID0gZnVuY3Rpb24oIHNlZWQsIGNvbnRleHQsIHhtbCwgcmVzdWx0cywgb3V0ZXJtb3N0ICkge1xuXHRcdFx0dmFyIGVsZW0sIGosIG1hdGNoZXIsXG5cdFx0XHRcdG1hdGNoZWRDb3VudCA9IDAsXG5cdFx0XHRcdGkgPSBcIjBcIixcblx0XHRcdFx0dW5tYXRjaGVkID0gc2VlZCAmJiBbXSxcblx0XHRcdFx0c2V0TWF0Y2hlZCA9IFtdLFxuXHRcdFx0XHRjb250ZXh0QmFja3VwID0gb3V0ZXJtb3N0Q29udGV4dCxcblx0XHRcdFx0Ly8gV2UgbXVzdCBhbHdheXMgaGF2ZSBlaXRoZXIgc2VlZCBlbGVtZW50cyBvciBvdXRlcm1vc3QgY29udGV4dFxuXHRcdFx0XHRlbGVtcyA9IHNlZWQgfHwgYnlFbGVtZW50ICYmIEV4cHIuZmluZFtcIlRBR1wiXSggXCIqXCIsIG91dGVybW9zdCApLFxuXHRcdFx0XHQvLyBVc2UgaW50ZWdlciBkaXJydW5zIGlmZiB0aGlzIGlzIHRoZSBvdXRlcm1vc3QgbWF0Y2hlclxuXHRcdFx0XHRkaXJydW5zVW5pcXVlID0gKGRpcnJ1bnMgKz0gY29udGV4dEJhY2t1cCA9PSBudWxsID8gMSA6IE1hdGgucmFuZG9tKCkgfHwgMC4xKSxcblx0XHRcdFx0bGVuID0gZWxlbXMubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHQgPT09IGRvY3VtZW50IHx8IGNvbnRleHQgfHwgb3V0ZXJtb3N0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgZWxlbWVudHMgcGFzc2luZyBlbGVtZW50TWF0Y2hlcnMgZGlyZWN0bHkgdG8gcmVzdWx0c1xuXHRcdFx0Ly8gU3VwcG9ydDogSUU8OSwgU2FmYXJpXG5cdFx0XHQvLyBUb2xlcmF0ZSBOb2RlTGlzdCBwcm9wZXJ0aWVzIChJRTogXCJsZW5ndGhcIjsgU2FmYXJpOiA8bnVtYmVyPikgbWF0Y2hpbmcgZWxlbWVudHMgYnkgaWRcblx0XHRcdGZvciAoIDsgaSAhPT0gbGVuICYmIChlbGVtID0gZWxlbXNbaV0pICE9IG51bGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBieUVsZW1lbnQgJiYgZWxlbSApIHtcblx0XHRcdFx0XHRqID0gMDtcblx0XHRcdFx0XHRpZiAoICFjb250ZXh0ICYmIGVsZW0ub3duZXJEb2N1bWVudCAhPT0gZG9jdW1lbnQgKSB7XG5cdFx0XHRcdFx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHRcdFx0XHRcdFx0eG1sID0gIWRvY3VtZW50SXNIVE1MO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR3aGlsZSAoIChtYXRjaGVyID0gZWxlbWVudE1hdGNoZXJzW2orK10pICkge1xuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0IHx8IGRvY3VtZW50LCB4bWwpICkge1xuXHRcdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRcdFx0ZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gVHJhY2sgdW5tYXRjaGVkIGVsZW1lbnRzIGZvciBzZXQgZmlsdGVyc1xuXHRcdFx0XHRpZiAoIGJ5U2V0ICkge1xuXHRcdFx0XHRcdC8vIFRoZXkgd2lsbCBoYXZlIGdvbmUgdGhyb3VnaCBhbGwgcG9zc2libGUgbWF0Y2hlcnNcblx0XHRcdFx0XHRpZiAoIChlbGVtID0gIW1hdGNoZXIgJiYgZWxlbSkgKSB7XG5cdFx0XHRcdFx0XHRtYXRjaGVkQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBMZW5ndGhlbiB0aGUgYXJyYXkgZm9yIGV2ZXJ5IGVsZW1lbnQsIG1hdGNoZWQgb3Igbm90XG5cdFx0XHRcdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0XHRcdFx0dW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gYGlgIGlzIG5vdyB0aGUgY291bnQgb2YgZWxlbWVudHMgdmlzaXRlZCBhYm92ZSwgYW5kIGFkZGluZyBpdCB0byBgbWF0Y2hlZENvdW50YFxuXHRcdFx0Ly8gbWFrZXMgdGhlIGxhdHRlciBub25uZWdhdGl2ZS5cblx0XHRcdG1hdGNoZWRDb3VudCArPSBpO1xuXG5cdFx0XHQvLyBBcHBseSBzZXQgZmlsdGVycyB0byB1bm1hdGNoZWQgZWxlbWVudHNcblx0XHRcdC8vIE5PVEU6IFRoaXMgY2FuIGJlIHNraXBwZWQgaWYgdGhlcmUgYXJlIG5vIHVubWF0Y2hlZCBlbGVtZW50cyAoaS5lLiwgYG1hdGNoZWRDb3VudGBcblx0XHRcdC8vIGVxdWFscyBgaWApLCB1bmxlc3Mgd2UgZGlkbid0IHZpc2l0IF9hbnlfIGVsZW1lbnRzIGluIHRoZSBhYm92ZSBsb29wIGJlY2F1c2Ugd2UgaGF2ZVxuXHRcdFx0Ly8gbm8gZWxlbWVudCBtYXRjaGVycyBhbmQgbm8gc2VlZC5cblx0XHRcdC8vIEluY3JlbWVudGluZyBhbiBpbml0aWFsbHktc3RyaW5nIFwiMFwiIGBpYCBhbGxvd3MgYGlgIHRvIHJlbWFpbiBhIHN0cmluZyBvbmx5IGluIHRoYXRcblx0XHRcdC8vIGNhc2UsIHdoaWNoIHdpbGwgcmVzdWx0IGluIGEgXCIwMFwiIGBtYXRjaGVkQ291bnRgIHRoYXQgZGlmZmVycyBmcm9tIGBpYCBidXQgaXMgYWxzb1xuXHRcdFx0Ly8gbnVtZXJpY2FsbHkgemVyby5cblx0XHRcdGlmICggYnlTZXQgJiYgaSAhPT0gbWF0Y2hlZENvdW50ICkge1xuXHRcdFx0XHRqID0gMDtcblx0XHRcdFx0d2hpbGUgKCAobWF0Y2hlciA9IHNldE1hdGNoZXJzW2orK10pICkge1xuXHRcdFx0XHRcdG1hdGNoZXIoIHVubWF0Y2hlZCwgc2V0TWF0Y2hlZCwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRcdFx0Ly8gUmVpbnRlZ3JhdGUgZWxlbWVudCBtYXRjaGVzIHRvIGVsaW1pbmF0ZSB0aGUgbmVlZCBmb3Igc29ydGluZ1xuXHRcdFx0XHRcdGlmICggbWF0Y2hlZENvdW50ID4gMCApIHtcblx0XHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoICEodW5tYXRjaGVkW2ldIHx8IHNldE1hdGNoZWRbaV0pICkge1xuXHRcdFx0XHRcdFx0XHRcdHNldE1hdGNoZWRbaV0gPSBwb3AuY2FsbCggcmVzdWx0cyApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRGlzY2FyZCBpbmRleCBwbGFjZWhvbGRlciB2YWx1ZXMgdG8gZ2V0IG9ubHkgYWN0dWFsIG1hdGNoZXNcblx0XHRcdFx0XHRzZXRNYXRjaGVkID0gY29uZGVuc2UoIHNldE1hdGNoZWQgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFkZCBtYXRjaGVzIHRvIHJlc3VsdHNcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2V0TWF0Y2hlZCApO1xuXG5cdFx0XHRcdC8vIFNlZWRsZXNzIHNldCBtYXRjaGVzIHN1Y2NlZWRpbmcgbXVsdGlwbGUgc3VjY2Vzc2Z1bCBtYXRjaGVycyBzdGlwdWxhdGUgc29ydGluZ1xuXHRcdFx0XHRpZiAoIG91dGVybW9zdCAmJiAhc2VlZCAmJiBzZXRNYXRjaGVkLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0XHQoIG1hdGNoZWRDb3VudCArIHNldE1hdGNoZXJzLmxlbmd0aCApID4gMSApIHtcblxuXHRcdFx0XHRcdFNpenpsZS51bmlxdWVTb3J0KCByZXN1bHRzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gT3ZlcnJpZGUgbWFuaXB1bGF0aW9uIG9mIGdsb2JhbHMgYnkgbmVzdGVkIG1hdGNoZXJzXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0ZGlycnVucyA9IGRpcnJ1bnNVbmlxdWU7XG5cdFx0XHRcdG91dGVybW9zdENvbnRleHQgPSBjb250ZXh0QmFja3VwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdW5tYXRjaGVkO1xuXHRcdH07XG5cblx0cmV0dXJuIGJ5U2V0ID9cblx0XHRtYXJrRnVuY3Rpb24oIHN1cGVyTWF0Y2hlciApIDpcblx0XHRzdXBlck1hdGNoZXI7XG59XG5cbmNvbXBpbGUgPSBTaXp6bGUuY29tcGlsZSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgbWF0Y2ggLyogSW50ZXJuYWwgVXNlIE9ubHkgKi8gKSB7XG5cdHZhciBpLFxuXHRcdHNldE1hdGNoZXJzID0gW10sXG5cdFx0ZWxlbWVudE1hdGNoZXJzID0gW10sXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZVsgc2VsZWN0b3IgKyBcIiBcIiBdO1xuXG5cdGlmICggIWNhY2hlZCApIHtcblx0XHQvLyBHZW5lcmF0ZSBhIGZ1bmN0aW9uIG9mIHJlY3Vyc2l2ZSBmdW5jdGlvbnMgdGhhdCBjYW4gYmUgdXNlZCB0byBjaGVjayBlYWNoIGVsZW1lbnRcblx0XHRpZiAoICFtYXRjaCApIHtcblx0XHRcdG1hdGNoID0gdG9rZW5pemUoIHNlbGVjdG9yICk7XG5cdFx0fVxuXHRcdGkgPSBtYXRjaC5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRjYWNoZWQgPSBtYXRjaGVyRnJvbVRva2VucyggbWF0Y2hbaV0gKTtcblx0XHRcdGlmICggY2FjaGVkWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdHNldE1hdGNoZXJzLnB1c2goIGNhY2hlZCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbWVudE1hdGNoZXJzLnB1c2goIGNhY2hlZCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhY2hlIHRoZSBjb21waWxlZCBmdW5jdGlvblxuXHRcdGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGUoIHNlbGVjdG9yLCBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSApO1xuXG5cdFx0Ly8gU2F2ZSBzZWxlY3RvciBhbmQgdG9rZW5pemF0aW9uXG5cdFx0Y2FjaGVkLnNlbGVjdG9yID0gc2VsZWN0b3I7XG5cdH1cblx0cmV0dXJuIGNhY2hlZDtcbn07XG5cbi8qKlxuICogQSBsb3ctbGV2ZWwgc2VsZWN0aW9uIGZ1bmN0aW9uIHRoYXQgd29ya3Mgd2l0aCBTaXp6bGUncyBjb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uc1xuICogQHBhcmFtIHtTdHJpbmd8RnVuY3Rpb259IHNlbGVjdG9yIEEgc2VsZWN0b3Igb3IgYSBwcmUtY29tcGlsZWRcbiAqICBzZWxlY3RvciBmdW5jdGlvbiBidWlsdCB3aXRoIFNpenpsZS5jb21waWxlXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNvbnRleHRcbiAqIEBwYXJhbSB7QXJyYXl9IFtyZXN1bHRzXVxuICogQHBhcmFtIHtBcnJheX0gW3NlZWRdIEEgc2V0IG9mIGVsZW1lbnRzIHRvIG1hdGNoIGFnYWluc3RcbiAqL1xuc2VsZWN0ID0gU2l6emxlLnNlbGVjdCA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApIHtcblx0dmFyIGksIHRva2VucywgdG9rZW4sIHR5cGUsIGZpbmQsXG5cdFx0Y29tcGlsZWQgPSB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiAmJiBzZWxlY3Rvcixcblx0XHRtYXRjaCA9ICFzZWVkICYmIHRva2VuaXplKCAoc2VsZWN0b3IgPSBjb21waWxlZC5zZWxlY3RvciB8fCBzZWxlY3RvcikgKTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBUcnkgdG8gbWluaW1pemUgb3BlcmF0aW9ucyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBzZWxlY3RvciBpbiB0aGUgbGlzdCBhbmQgbm8gc2VlZFxuXHQvLyAodGhlIGxhdHRlciBvZiB3aGljaCBndWFyYW50ZWVzIHVzIGNvbnRleHQpXG5cdGlmICggbWF0Y2gubGVuZ3RoID09PSAxICkge1xuXG5cdFx0Ly8gUmVkdWNlIGNvbnRleHQgaWYgdGhlIGxlYWRpbmcgY29tcG91bmQgc2VsZWN0b3IgaXMgYW4gSURcblx0XHR0b2tlbnMgPSBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwICk7XG5cdFx0aWYgKCB0b2tlbnMubGVuZ3RoID4gMiAmJiAodG9rZW4gPSB0b2tlbnNbMF0pLnR5cGUgPT09IFwiSURcIiAmJlxuXHRcdFx0XHRjb250ZXh0Lm5vZGVUeXBlID09PSA5ICYmIGRvY3VtZW50SXNIVE1MICYmIEV4cHIucmVsYXRpdmVbIHRva2Vuc1sxXS50eXBlIF0gKSB7XG5cblx0XHRcdGNvbnRleHQgPSAoIEV4cHIuZmluZFtcIklEXCJdKCB0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpLCBjb250ZXh0ICkgfHwgW10gKVswXTtcblx0XHRcdGlmICggIWNvbnRleHQgKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXG5cdFx0XHQvLyBQcmVjb21waWxlZCBtYXRjaGVycyB3aWxsIHN0aWxsIHZlcmlmeSBhbmNlc3RyeSwgc28gc3RlcCB1cCBhIGxldmVsXG5cdFx0XHR9IGVsc2UgaWYgKCBjb21waWxlZCApIHtcblx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQucGFyZW50Tm9kZTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSggdG9rZW5zLnNoaWZ0KCkudmFsdWUubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmV0Y2ggYSBzZWVkIHNldCBmb3IgcmlnaHQtdG8tbGVmdCBtYXRjaGluZ1xuXHRcdGkgPSBtYXRjaEV4cHJbXCJuZWVkc0NvbnRleHRcIl0udGVzdCggc2VsZWN0b3IgKSA/IDAgOiB0b2tlbnMubGVuZ3RoO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG9rZW4gPSB0b2tlbnNbaV07XG5cblx0XHRcdC8vIEFib3J0IGlmIHdlIGhpdCBhIGNvbWJpbmF0b3Jcblx0XHRcdGlmICggRXhwci5yZWxhdGl2ZVsgKHR5cGUgPSB0b2tlbi50eXBlKSBdICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICggKGZpbmQgPSBFeHByLmZpbmRbIHR5cGUgXSkgKSB7XG5cdFx0XHRcdC8vIFNlYXJjaCwgZXhwYW5kaW5nIGNvbnRleHQgZm9yIGxlYWRpbmcgc2libGluZyBjb21iaW5hdG9yc1xuXHRcdFx0XHRpZiAoIChzZWVkID0gZmluZChcblx0XHRcdFx0XHR0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICksXG5cdFx0XHRcdFx0cnNpYmxpbmcudGVzdCggdG9rZW5zWzBdLnR5cGUgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHRcdFx0XHQpKSApIHtcblxuXHRcdFx0XHRcdC8vIElmIHNlZWQgaXMgZW1wdHkgb3Igbm8gdG9rZW5zIHJlbWFpbiwgd2UgY2FuIHJldHVybiBlYXJseVxuXHRcdFx0XHRcdHRva2Vucy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdFx0XHRzZWxlY3RvciA9IHNlZWQubGVuZ3RoICYmIHRvU2VsZWN0b3IoIHRva2VucyApO1xuXHRcdFx0XHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2VlZCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcblx0Ly8gUHJvdmlkZSBgbWF0Y2hgIHRvIGF2b2lkIHJldG9rZW5pemF0aW9uIGlmIHdlIG1vZGlmaWVkIHRoZSBzZWxlY3RvciBhYm92ZVxuXHQoIGNvbXBpbGVkIHx8IGNvbXBpbGUoIHNlbGVjdG9yLCBtYXRjaCApICkoXG5cdFx0c2VlZCxcblx0XHRjb250ZXh0LFxuXHRcdCFkb2N1bWVudElzSFRNTCxcblx0XHRyZXN1bHRzLFxuXHRcdCFjb250ZXh0IHx8IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcblx0KTtcblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG4vLyBPbmUtdGltZSBhc3NpZ25tZW50c1xuXG4vLyBTb3J0IHN0YWJpbGl0eVxuc3VwcG9ydC5zb3J0U3RhYmxlID0gZXhwYW5kby5zcGxpdChcIlwiKS5zb3J0KCBzb3J0T3JkZXIgKS5qb2luKFwiXCIpID09PSBleHBhbmRvO1xuXG4vLyBTdXBwb3J0OiBDaHJvbWUgMTQtMzUrXG4vLyBBbHdheXMgYXNzdW1lIGR1cGxpY2F0ZXMgaWYgdGhleSBhcmVuJ3QgcGFzc2VkIHRvIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG5zdXBwb3J0LmRldGVjdER1cGxpY2F0ZXMgPSAhIWhhc0R1cGxpY2F0ZTtcblxuLy8gSW5pdGlhbGl6ZSBhZ2FpbnN0IHRoZSBkZWZhdWx0IGRvY3VtZW50XG5zZXREb2N1bWVudCgpO1xuXG4vLyBTdXBwb3J0OiBXZWJraXQ8NTM3LjMyIC0gU2FmYXJpIDYuMC4zL0Nocm9tZSAyNSAoZml4ZWQgaW4gQ2hyb21lIDI3KVxuLy8gRGV0YWNoZWQgbm9kZXMgY29uZm91bmRpbmdseSBmb2xsb3cgKmVhY2ggb3RoZXIqXG5zdXBwb3J0LnNvcnREZXRhY2hlZCA9IGFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdC8vIFNob3VsZCByZXR1cm4gMSwgYnV0IHJldHVybnMgNCAoZm9sbG93aW5nKVxuXHRyZXR1cm4gZWwuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmaWVsZHNldFwiKSApICYgMTtcbn0pO1xuXG4vLyBTdXBwb3J0OiBJRTw4XG4vLyBQcmV2ZW50IGF0dHJpYnV0ZS9wcm9wZXJ0eSBcImludGVycG9sYXRpb25cIlxuLy8gaHR0cHM6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9tczUzNjQyOSUyOFZTLjg1JTI5LmFzcHhcbmlmICggIWFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdGVsLmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+PC9hPlwiO1xuXHRyZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpID09PSBcIiNcIiA7XG59KSApIHtcblx0YWRkSGFuZGxlKCBcInR5cGV8aHJlZnxoZWlnaHR8d2lkdGhcIiwgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdGlmICggIWlzWE1MICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lLCBuYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwidHlwZVwiID8gMSA6IDIgKTtcblx0XHR9XG5cdH0pO1xufVxuXG4vLyBTdXBwb3J0OiBJRTw5XG4vLyBVc2UgZGVmYXVsdFZhbHVlIGluIHBsYWNlIG9mIGdldEF0dHJpYnV0ZShcInZhbHVlXCIpXG5pZiAoICFzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWFzc2VydChmdW5jdGlvbiggZWwgKSB7XG5cdGVsLmlubmVySFRNTCA9IFwiPGlucHV0Lz5cIjtcblx0ZWwuZmlyc3RDaGlsZC5zZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiwgXCJcIiApO1xuXHRyZXR1cm4gZWwuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBcIlwiO1xufSkgKSB7XG5cdGFkZEhhbmRsZSggXCJ2YWx1ZVwiLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0aWYgKCAhaXNYTUwgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHR9KTtcbn1cblxuLy8gU3VwcG9ydDogSUU8OVxuLy8gVXNlIGdldEF0dHJpYnV0ZU5vZGUgdG8gZmV0Y2ggYm9vbGVhbnMgd2hlbiBnZXRBdHRyaWJ1dGUgbGllc1xuaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBlbCApIHtcblx0cmV0dXJuIGVsLmdldEF0dHJpYnV0ZShcImRpc2FibGVkXCIpID09IG51bGw7XG59KSApIHtcblx0YWRkSGFuZGxlKCBib29sZWFucywgZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdHZhciB2YWw7XG5cdFx0aWYgKCAhaXNYTUwgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbVsgbmFtZSBdID09PSB0cnVlID8gbmFtZS50b0xvd2VyQ2FzZSgpIDpcblx0XHRcdFx0XHQodmFsID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKCBuYW1lICkpICYmIHZhbC5zcGVjaWZpZWQgP1xuXHRcdFx0XHRcdHZhbC52YWx1ZSA6XG5cdFx0XHRcdG51bGw7XG5cdFx0fVxuXHR9KTtcbn1cblxucmV0dXJuIFNpenpsZTtcblxufSkoIHdpbmRvdyApO1xuXG5cblxualF1ZXJ5LmZpbmQgPSBTaXp6bGU7XG5qUXVlcnkuZXhwciA9IFNpenpsZS5zZWxlY3RvcnM7XG5cbi8vIERlcHJlY2F0ZWRcbmpRdWVyeS5leHByWyBcIjpcIiBdID0galF1ZXJ5LmV4cHIucHNldWRvcztcbmpRdWVyeS51bmlxdWVTb3J0ID0galF1ZXJ5LnVuaXF1ZSA9IFNpenpsZS51bmlxdWVTb3J0O1xualF1ZXJ5LnRleHQgPSBTaXp6bGUuZ2V0VGV4dDtcbmpRdWVyeS5pc1hNTERvYyA9IFNpenpsZS5pc1hNTDtcbmpRdWVyeS5jb250YWlucyA9IFNpenpsZS5jb250YWlucztcbmpRdWVyeS5lc2NhcGVTZWxlY3RvciA9IFNpenpsZS5lc2NhcGU7XG5cblxuXG5cbnZhciBkaXIgPSBmdW5jdGlvbiggZWxlbSwgZGlyLCB1bnRpbCApIHtcblx0dmFyIG1hdGNoZWQgPSBbXSxcblx0XHR0cnVuY2F0ZSA9IHVudGlsICE9PSB1bmRlZmluZWQ7XG5cblx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICYmIGVsZW0ubm9kZVR5cGUgIT09IDkgKSB7XG5cdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0aWYgKCB0cnVuY2F0ZSAmJiBqUXVlcnkoIGVsZW0gKS5pcyggdW50aWwgKSApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIG1hdGNoZWQ7XG59O1xuXG5cbnZhciBzaWJsaW5ncyA9IGZ1bmN0aW9uKCBuLCBlbGVtICkge1xuXHR2YXIgbWF0Y2hlZCA9IFtdO1xuXG5cdGZvciAoIDsgbjsgbiA9IG4ubmV4dFNpYmxpbmcgKSB7XG5cdFx0aWYgKCBuLm5vZGVUeXBlID09PSAxICYmIG4gIT09IGVsZW0gKSB7XG5cdFx0XHRtYXRjaGVkLnB1c2goIG4gKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gbWF0Y2hlZDtcbn07XG5cblxudmFyIHJuZWVkc0NvbnRleHQgPSBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7XG5cbnZhciByc2luZ2xlVGFnID0gKCAvXjwoW2Etel1bXlxcL1xcMD46XFx4MjBcXHRcXHJcXG5cXGZdKilbXFx4MjBcXHRcXHJcXG5cXGZdKlxcLz8+KD86PFxcL1xcMT58KSQvaSApO1xuXG5cblxudmFyIHJpc1NpbXBsZSA9IC9eLlteOiNcXFtcXC4sXSokLztcblxuLy8gSW1wbGVtZW50IHRoZSBpZGVudGljYWwgZnVuY3Rpb25hbGl0eSBmb3IgZmlsdGVyIGFuZCBub3RcbmZ1bmN0aW9uIHdpbm5vdyggZWxlbWVudHMsIHF1YWxpZmllciwgbm90ICkge1xuXHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBxdWFsaWZpZXIgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiAhIXF1YWxpZmllci5jYWxsKCBlbGVtLCBpLCBlbGVtICkgIT09IG5vdDtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBTaW5nbGUgZWxlbWVudFxuXHRpZiAoIHF1YWxpZmllci5ub2RlVHlwZSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAoIGVsZW0gPT09IHF1YWxpZmllciApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gQXJyYXlsaWtlIG9mIGVsZW1lbnRzIChqUXVlcnksIGFyZ3VtZW50cywgQXJyYXkpXG5cdGlmICggdHlwZW9mIHF1YWxpZmllciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdyZXAoIGVsZW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAoIGluZGV4T2YuY2FsbCggcXVhbGlmaWVyLCBlbGVtICkgPiAtMSApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gU2ltcGxlIHNlbGVjdG9yIHRoYXQgY2FuIGJlIGZpbHRlcmVkIGRpcmVjdGx5LCByZW1vdmluZyBub24tRWxlbWVudHNcblx0aWYgKCByaXNTaW1wbGUudGVzdCggcXVhbGlmaWVyICkgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5maWx0ZXIoIHF1YWxpZmllciwgZWxlbWVudHMsIG5vdCApO1xuXHR9XG5cblx0Ly8gQ29tcGxleCBzZWxlY3RvciwgY29tcGFyZSB0aGUgdHdvIHNldHMsIHJlbW92aW5nIG5vbi1FbGVtZW50c1xuXHRxdWFsaWZpZXIgPSBqUXVlcnkuZmlsdGVyKCBxdWFsaWZpZXIsIGVsZW1lbnRzICk7XG5cdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiAoIGluZGV4T2YuY2FsbCggcXVhbGlmaWVyLCBlbGVtICkgPiAtMSApICE9PSBub3QgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMTtcblx0fSApO1xufVxuXG5qUXVlcnkuZmlsdGVyID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1zLCBub3QgKSB7XG5cdHZhciBlbGVtID0gZWxlbXNbIDAgXTtcblxuXHRpZiAoIG5vdCApIHtcblx0XHRleHByID0gXCI6bm90KFwiICsgZXhwciArIFwiKVwiO1xuXHR9XG5cblx0aWYgKCBlbGVtcy5sZW5ndGggPT09IDEgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBleHByICkgPyBbIGVsZW0gXSA6IFtdO1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXMoIGV4cHIsIGpRdWVyeS5ncmVwKCBlbGVtcywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGVsZW0ubm9kZVR5cGUgPT09IDE7XG5cdH0gKSApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRmaW5kOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGksIHJldCxcblx0XHRcdGxlbiA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0c2VsZiA9IHRoaXM7XG5cblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5KCBzZWxlY3RvciApLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHNlbGZbIGkgXSwgdGhpcyApICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICkgKTtcblx0XHR9XG5cblx0XHRyZXQgPSB0aGlzLnB1c2hTdGFjayggW10gKTtcblxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRqUXVlcnkuZmluZCggc2VsZWN0b3IsIHNlbGZbIGkgXSwgcmV0ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxlbiA+IDEgPyBqUXVlcnkudW5pcXVlU29ydCggcmV0ICkgOiByZXQ7XG5cdH0sXG5cdGZpbHRlcjogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgZmFsc2UgKSApO1xuXHR9LFxuXHRub3Q6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHdpbm5vdyggdGhpcywgc2VsZWN0b3IgfHwgW10sIHRydWUgKSApO1xuXHR9LFxuXHRpczogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiAhIXdpbm5vdyhcblx0XHRcdHRoaXMsXG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSBwb3NpdGlvbmFsL3JlbGF0aXZlIHNlbGVjdG9yLCBjaGVjayBtZW1iZXJzaGlwIGluIHRoZSByZXR1cm5lZCBzZXRcblx0XHRcdC8vIHNvICQoXCJwOmZpcnN0XCIpLmlzKFwicDpsYXN0XCIpIHdvbid0IHJldHVybiB0cnVlIGZvciBhIGRvYyB3aXRoIHR3byBcInBcIi5cblx0XHRcdHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiAmJiBybmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICkgP1xuXHRcdFx0XHRqUXVlcnkoIHNlbGVjdG9yICkgOlxuXHRcdFx0XHRzZWxlY3RvciB8fCBbXSxcblx0XHRcdGZhbHNlXG5cdFx0KS5sZW5ndGg7XG5cdH1cbn0gKTtcblxuXG4vLyBJbml0aWFsaXplIGEgalF1ZXJ5IG9iamVjdFxuXG5cbi8vIEEgY2VudHJhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgalF1ZXJ5KGRvY3VtZW50KVxudmFyIHJvb3RqUXVlcnksXG5cblx0Ly8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3Ncblx0Ly8gUHJpb3JpdGl6ZSAjaWQgb3ZlciA8dGFnPiB0byBhdm9pZCBYU1MgdmlhIGxvY2F0aW9uLmhhc2ggKCM5NTIxKVxuXHQvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAoIzExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcblx0Ly8gU2hvcnRjdXQgc2ltcGxlICNpZCBjYXNlIGZvciBzcGVlZFxuXHRycXVpY2tFeHByID0gL14oPzpcXHMqKDxbXFx3XFxXXSs+KVtePl0qfCMoW1xcdy1dKykpJC8sXG5cblx0aW5pdCA9IGpRdWVyeS5mbi5pbml0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0LCByb290ICkge1xuXHRcdHZhciBtYXRjaCwgZWxlbTtcblxuXHRcdC8vIEhBTkRMRTogJChcIlwiKSwgJChudWxsKSwgJCh1bmRlZmluZWQpLCAkKGZhbHNlKVxuXHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0Ly8gTWV0aG9kIGluaXQoKSBhY2NlcHRzIGFuIGFsdGVybmF0ZSByb290alF1ZXJ5XG5cdFx0Ly8gc28gbWlncmF0ZSBjYW4gc3VwcG9ydCBqUXVlcnkuc3ViIChnaC0yMTAxKVxuXHRcdHJvb3QgPSByb290IHx8IHJvb3RqUXVlcnk7XG5cblx0XHQvLyBIYW5kbGUgSFRNTCBzdHJpbmdzXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRpZiAoIHNlbGVjdG9yWyAwIF0gPT09IFwiPFwiICYmXG5cdFx0XHRcdHNlbGVjdG9yWyBzZWxlY3Rvci5sZW5ndGggLSAxIF0gPT09IFwiPlwiICYmXG5cdFx0XHRcdHNlbGVjdG9yLmxlbmd0aCA+PSAzICkge1xuXG5cdFx0XHRcdC8vIEFzc3VtZSB0aGF0IHN0cmluZ3MgdGhhdCBzdGFydCBhbmQgZW5kIHdpdGggPD4gYXJlIEhUTUwgYW5kIHNraXAgdGhlIHJlZ2V4IGNoZWNrXG5cdFx0XHRcdG1hdGNoID0gWyBudWxsLCBzZWxlY3RvciwgbnVsbCBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyggc2VsZWN0b3IgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWF0Y2ggaHRtbCBvciBtYWtlIHN1cmUgbm8gY29udGV4dCBpcyBzcGVjaWZpZWQgZm9yICNpZFxuXHRcdFx0aWYgKCBtYXRjaCAmJiAoIG1hdGNoWyAxIF0gfHwgIWNvbnRleHQgKSApIHtcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCkgLT4gJChhcnJheSlcblx0XHRcdFx0aWYgKCBtYXRjaFsgMSBdICkge1xuXHRcdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0IGluc3RhbmNlb2YgalF1ZXJ5ID8gY29udGV4dFsgMCBdIDogY29udGV4dDtcblxuXHRcdFx0XHRcdC8vIE9wdGlvbiB0byBydW4gc2NyaXB0cyBpcyB0cnVlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRcdC8vIEludGVudGlvbmFsbHkgbGV0IHRoZSBlcnJvciBiZSB0aHJvd24gaWYgcGFyc2VIVE1MIGlzIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLCBqUXVlcnkucGFyc2VIVE1MKFxuXHRcdFx0XHRcdFx0bWF0Y2hbIDEgXSxcblx0XHRcdFx0XHRcdGNvbnRleHQgJiYgY29udGV4dC5ub2RlVHlwZSA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogZG9jdW1lbnQsXG5cdFx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdFx0KSApO1xuXG5cdFx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwsIHByb3BzKVxuXHRcdFx0XHRcdGlmICggcnNpbmdsZVRhZy50ZXN0KCBtYXRjaFsgMSBdICkgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGNvbnRleHQgKSApIHtcblx0XHRcdFx0XHRcdGZvciAoIG1hdGNoIGluIGNvbnRleHQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUHJvcGVydGllcyBvZiBjb250ZXh0IGFyZSBjYWxsZWQgYXMgbWV0aG9kcyBpZiBwb3NzaWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB0aGlzWyBtYXRjaCBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpc1sgbWF0Y2ggXSggY29udGV4dFsgbWF0Y2ggXSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vIC4uLmFuZCBvdGhlcndpc2Ugc2V0IGFzIGF0dHJpYnV0ZXNcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmF0dHIoIG1hdGNoLCBjb250ZXh0WyBtYXRjaCBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoI2lkKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggbWF0Y2hbIDIgXSApO1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtICkge1xuXG5cdFx0XHRcdFx0XHQvLyBJbmplY3QgdGhlIGVsZW1lbnQgZGlyZWN0bHkgaW50byB0aGUgalF1ZXJ5IG9iamVjdFxuXHRcdFx0XHRcdFx0dGhpc1sgMCBdID0gZWxlbTtcblx0XHRcdFx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gSEFORExFOiAkKGV4cHIsICQoLi4uKSlcblx0XHRcdH0gZWxzZSBpZiAoICFjb250ZXh0IHx8IGNvbnRleHQuanF1ZXJ5ICkge1xuXHRcdFx0XHRyZXR1cm4gKCBjb250ZXh0IHx8IHJvb3QgKS5maW5kKCBzZWxlY3RvciApO1xuXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgY29udGV4dClcblx0XHRcdC8vICh3aGljaCBpcyBqdXN0IGVxdWl2YWxlbnQgdG86ICQoY29udGV4dCkuZmluZChleHByKVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IoIGNvbnRleHQgKS5maW5kKCBzZWxlY3RvciApO1xuXHRcdFx0fVxuXG5cdFx0Ly8gSEFORExFOiAkKERPTUVsZW1lbnQpXG5cdFx0fSBlbHNlIGlmICggc2VsZWN0b3Iubm9kZVR5cGUgKSB7XG5cdFx0XHR0aGlzWyAwIF0gPSBzZWxlY3Rvcjtcblx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0Ly8gSEFORExFOiAkKGZ1bmN0aW9uKVxuXHRcdC8vIFNob3J0Y3V0IGZvciBkb2N1bWVudCByZWFkeVxuXHRcdH0gZWxzZSBpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBzZWxlY3RvciApICkge1xuXHRcdFx0cmV0dXJuIHJvb3QucmVhZHkgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHJvb3QucmVhZHkoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHRcdC8vIEV4ZWN1dGUgaW1tZWRpYXRlbHkgaWYgcmVhZHkgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0c2VsZWN0b3IoIGpRdWVyeSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBqUXVlcnkubWFrZUFycmF5KCBzZWxlY3RvciwgdGhpcyApO1xuXHR9O1xuXG4vLyBHaXZlIHRoZSBpbml0IGZ1bmN0aW9uIHRoZSBqUXVlcnkgcHJvdG90eXBlIGZvciBsYXRlciBpbnN0YW50aWF0aW9uXG5pbml0LnByb3RvdHlwZSA9IGpRdWVyeS5mbjtcblxuLy8gSW5pdGlhbGl6ZSBjZW50cmFsIHJlZmVyZW5jZVxucm9vdGpRdWVyeSA9IGpRdWVyeSggZG9jdW1lbnQgKTtcblxuXG52YXIgcnBhcmVudHNwcmV2ID0gL14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sXG5cblx0Ly8gTWV0aG9kcyBndWFyYW50ZWVkIHRvIHByb2R1Y2UgYSB1bmlxdWUgc2V0IHdoZW4gc3RhcnRpbmcgZnJvbSBhIHVuaXF1ZSBzZXRcblx0Z3VhcmFudGVlZFVuaXF1ZSA9IHtcblx0XHRjaGlsZHJlbjogdHJ1ZSxcblx0XHRjb250ZW50czogdHJ1ZSxcblx0XHRuZXh0OiB0cnVlLFxuXHRcdHByZXY6IHRydWVcblx0fTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRoYXM6IGZ1bmN0aW9uKCB0YXJnZXQgKSB7XG5cdFx0dmFyIHRhcmdldHMgPSBqUXVlcnkoIHRhcmdldCwgdGhpcyApLFxuXHRcdFx0bCA9IHRhcmdldHMubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpID0gMDtcblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHRoaXMsIHRhcmdldHNbIGkgXSApICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGNsb3Nlc3Q6IGZ1bmN0aW9uKCBzZWxlY3RvcnMsIGNvbnRleHQgKSB7XG5cdFx0dmFyIGN1cixcblx0XHRcdGkgPSAwLFxuXHRcdFx0bCA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0bWF0Y2hlZCA9IFtdLFxuXHRcdFx0dGFyZ2V0cyA9IHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgJiYgalF1ZXJ5KCBzZWxlY3RvcnMgKTtcblxuXHRcdC8vIFBvc2l0aW9uYWwgc2VsZWN0b3JzIG5ldmVyIG1hdGNoLCBzaW5jZSB0aGVyZSdzIG5vIF9zZWxlY3Rpb25fIGNvbnRleHRcblx0XHRpZiAoICFybmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9ycyApICkge1xuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRmb3IgKCBjdXIgPSB0aGlzWyBpIF07IGN1ciAmJiBjdXIgIT09IGNvbnRleHQ7IGN1ciA9IGN1ci5wYXJlbnROb2RlICkge1xuXG5cdFx0XHRcdFx0Ly8gQWx3YXlzIHNraXAgZG9jdW1lbnQgZnJhZ21lbnRzXG5cdFx0XHRcdFx0aWYgKCBjdXIubm9kZVR5cGUgPCAxMSAmJiAoIHRhcmdldHMgP1xuXHRcdFx0XHRcdFx0dGFyZ2V0cy5pbmRleCggY3VyICkgPiAtMSA6XG5cblx0XHRcdFx0XHRcdC8vIERvbid0IHBhc3Mgbm9uLWVsZW1lbnRzIHRvIFNpenpsZVxuXHRcdFx0XHRcdFx0Y3VyLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdFx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggY3VyLCBzZWxlY3RvcnMgKSApICkge1xuXG5cdFx0XHRcdFx0XHRtYXRjaGVkLnB1c2goIGN1ciApO1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkLmxlbmd0aCA+IDEgPyBqUXVlcnkudW5pcXVlU29ydCggbWF0Y2hlZCApIDogbWF0Y2hlZCApO1xuXHR9LFxuXG5cdC8vIERldGVybWluZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHNldFxuXHRpbmRleDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBObyBhcmd1bWVudCwgcmV0dXJuIGluZGV4IGluIHBhcmVudFxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCB0aGlzWyAwIF0gJiYgdGhpc1sgMCBdLnBhcmVudE5vZGUgKSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XG5cdFx0fVxuXG5cdFx0Ly8gSW5kZXggaW4gc2VsZWN0b3Jcblx0XHRpZiAoIHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggalF1ZXJ5KCBlbGVtICksIHRoaXNbIDAgXSApO1xuXHRcdH1cblxuXHRcdC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuXHRcdHJldHVybiBpbmRleE9mLmNhbGwoIHRoaXMsXG5cblx0XHRcdC8vIElmIGl0IHJlY2VpdmVzIGEgalF1ZXJ5IG9iamVjdCwgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdXNlZFxuXHRcdFx0ZWxlbS5qcXVlcnkgPyBlbGVtWyAwIF0gOiBlbGVtXG5cdFx0KTtcblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soXG5cdFx0XHRqUXVlcnkudW5pcXVlU29ydChcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLmdldCgpLCBqUXVlcnkoIHNlbGVjdG9yLCBjb250ZXh0ICkgKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0YWRkQmFjazogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLmFkZCggc2VsZWN0b3IgPT0gbnVsbCA/XG5cdFx0XHR0aGlzLnByZXZPYmplY3QgOiB0aGlzLnByZXZPYmplY3QuZmlsdGVyKCBzZWxlY3RvciApXG5cdFx0KTtcblx0fVxufSApO1xuXG5mdW5jdGlvbiBzaWJsaW5nKCBjdXIsIGRpciApIHtcblx0d2hpbGUgKCAoIGN1ciA9IGN1clsgZGlyIF0gKSAmJiBjdXIubm9kZVR5cGUgIT09IDEgKSB7fVxuXHRyZXR1cm4gY3VyO1xufVxuXG5qUXVlcnkuZWFjaCgge1xuXHRwYXJlbnQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0cmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcblx0fSxcblx0cGFyZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIgKTtcblx0fSxcblx0cGFyZW50c1VudGlsOiBmdW5jdGlvbiggZWxlbSwgaSwgdW50aWwgKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIsIHVudGlsICk7XG5cdH0sXG5cdG5leHQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5nKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIgKTtcblx0fSxcblx0cHJldjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIgKTtcblx0fSxcblx0bmV4dEFsbDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XG5cdH0sXG5cdHByZXZBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIgKTtcblx0fSxcblx0bmV4dFVudGlsOiBmdW5jdGlvbiggZWxlbSwgaSwgdW50aWwgKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJuZXh0U2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRwcmV2VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRzaWJsaW5nczogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmdzKCAoIGVsZW0ucGFyZW50Tm9kZSB8fCB7fSApLmZpcnN0Q2hpbGQsIGVsZW0gKTtcblx0fSxcblx0Y2hpbGRyZW46IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5ncyggZWxlbS5maXJzdENoaWxkICk7XG5cdH0sXG5cdGNvbnRlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZWxlbS5jb250ZW50RG9jdW1lbnQgfHwgalF1ZXJ5Lm1lcmdlKCBbXSwgZWxlbS5jaGlsZE5vZGVzICk7XG5cdH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBmbiApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggdW50aWwsIHNlbGVjdG9yICkge1xuXHRcdHZhciBtYXRjaGVkID0galF1ZXJ5Lm1hcCggdGhpcywgZm4sIHVudGlsICk7XG5cblx0XHRpZiAoIG5hbWUuc2xpY2UoIC01ICkgIT09IFwiVW50aWxcIiApIHtcblx0XHRcdHNlbGVjdG9yID0gdW50aWw7XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWxlY3RvciAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRtYXRjaGVkID0galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIG1hdGNoZWQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZXNcblx0XHRcdGlmICggIWd1YXJhbnRlZWRVbmlxdWVbIG5hbWUgXSApIHtcblx0XHRcdFx0alF1ZXJ5LnVuaXF1ZVNvcnQoIG1hdGNoZWQgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV2ZXJzZSBvcmRlciBmb3IgcGFyZW50cyogYW5kIHByZXYtZGVyaXZhdGl2ZXNcblx0XHRcdGlmICggcnBhcmVudHNwcmV2LnRlc3QoIG5hbWUgKSApIHtcblx0XHRcdFx0bWF0Y2hlZC5yZXZlcnNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkICk7XG5cdH07XG59ICk7XG52YXIgcm5vdGh0bWx3aGl0ZSA9ICggL1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nICk7XG5cblxuXG4vLyBDb252ZXJ0IFN0cmluZy1mb3JtYXR0ZWQgb3B0aW9ucyBpbnRvIE9iamVjdC1mb3JtYXR0ZWQgb25lc1xuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIHtcblx0dmFyIG9iamVjdCA9IHt9O1xuXHRqUXVlcnkuZWFjaCggb3B0aW9ucy5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdLCBmdW5jdGlvbiggXywgZmxhZyApIHtcblx0XHRvYmplY3RbIGZsYWcgXSA9IHRydWU7XG5cdH0gKTtcblx0cmV0dXJuIG9iamVjdDtcbn1cblxuLypcbiAqIENyZWF0ZSBhIGNhbGxiYWNrIGxpc3QgdXNpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICpcbiAqXHRvcHRpb25zOiBhbiBvcHRpb25hbCBsaXN0IG9mIHNwYWNlLXNlcGFyYXRlZCBvcHRpb25zIHRoYXQgd2lsbCBjaGFuZ2UgaG93XG4gKlx0XHRcdHRoZSBjYWxsYmFjayBsaXN0IGJlaGF2ZXMgb3IgYSBtb3JlIHRyYWRpdGlvbmFsIG9wdGlvbiBvYmplY3RcbiAqXG4gKiBCeSBkZWZhdWx0IGEgY2FsbGJhY2sgbGlzdCB3aWxsIGFjdCBsaWtlIGFuIGV2ZW50IGNhbGxiYWNrIGxpc3QgYW5kIGNhbiBiZVxuICogXCJmaXJlZFwiIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFBvc3NpYmxlIG9wdGlvbnM6XG4gKlxuICpcdG9uY2U6XHRcdFx0d2lsbCBlbnN1cmUgdGhlIGNhbGxiYWNrIGxpc3QgY2FuIG9ubHkgYmUgZmlyZWQgb25jZSAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHRtZW1vcnk6XHRcdFx0d2lsbCBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHZhbHVlcyBhbmQgd2lsbCBjYWxsIGFueSBjYWxsYmFjayBhZGRlZFxuICpcdFx0XHRcdFx0YWZ0ZXIgdGhlIGxpc3QgaGFzIGJlZW4gZmlyZWQgcmlnaHQgYXdheSB3aXRoIHRoZSBsYXRlc3QgXCJtZW1vcml6ZWRcIlxuICpcdFx0XHRcdFx0dmFsdWVzIChsaWtlIGEgRGVmZXJyZWQpXG4gKlxuICpcdHVuaXF1ZTpcdFx0XHR3aWxsIGVuc3VyZSBhIGNhbGxiYWNrIGNhbiBvbmx5IGJlIGFkZGVkIG9uY2UgKG5vIGR1cGxpY2F0ZSBpbiB0aGUgbGlzdClcbiAqXG4gKlx0c3RvcE9uRmFsc2U6XHRpbnRlcnJ1cHQgY2FsbGluZ3Mgd2hlbiBhIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAqXG4gKi9cbmpRdWVyeS5DYWxsYmFja3MgPSBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHQvLyBDb252ZXJ0IG9wdGlvbnMgZnJvbSBTdHJpbmctZm9ybWF0dGVkIHRvIE9iamVjdC1mb3JtYXR0ZWQgaWYgbmVlZGVkXG5cdC8vICh3ZSBjaGVjayBpbiBjYWNoZSBmaXJzdClcblx0b3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiID9cblx0XHRjcmVhdGVPcHRpb25zKCBvcHRpb25zICkgOlxuXHRcdGpRdWVyeS5leHRlbmQoIHt9LCBvcHRpb25zICk7XG5cblx0dmFyIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcblx0XHRmaXJpbmcsXG5cblx0XHQvLyBMYXN0IGZpcmUgdmFsdWUgZm9yIG5vbi1mb3JnZXR0YWJsZSBsaXN0c1xuXHRcdG1lbW9yeSxcblxuXHRcdC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IHdhcyBhbHJlYWR5IGZpcmVkXG5cdFx0ZmlyZWQsXG5cblx0XHQvLyBGbGFnIHRvIHByZXZlbnQgZmlyaW5nXG5cdFx0bG9ja2VkLFxuXG5cdFx0Ly8gQWN0dWFsIGNhbGxiYWNrIGxpc3Rcblx0XHRsaXN0ID0gW10sXG5cblx0XHQvLyBRdWV1ZSBvZiBleGVjdXRpb24gZGF0YSBmb3IgcmVwZWF0YWJsZSBsaXN0c1xuXHRcdHF1ZXVlID0gW10sXG5cblx0XHQvLyBJbmRleCBvZiBjdXJyZW50bHkgZmlyaW5nIGNhbGxiYWNrIChtb2RpZmllZCBieSBhZGQvcmVtb3ZlIGFzIG5lZWRlZClcblx0XHRmaXJpbmdJbmRleCA9IC0xLFxuXG5cdFx0Ly8gRmlyZSBjYWxsYmFja3Ncblx0XHRmaXJlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEVuZm9yY2Ugc2luZ2xlLWZpcmluZ1xuXHRcdFx0bG9ja2VkID0gb3B0aW9ucy5vbmNlO1xuXG5cdFx0XHQvLyBFeGVjdXRlIGNhbGxiYWNrcyBmb3IgYWxsIHBlbmRpbmcgZXhlY3V0aW9ucyxcblx0XHRcdC8vIHJlc3BlY3RpbmcgZmlyaW5nSW5kZXggb3ZlcnJpZGVzIGFuZCBydW50aW1lIGNoYW5nZXNcblx0XHRcdGZpcmVkID0gZmlyaW5nID0gdHJ1ZTtcblx0XHRcdGZvciAoIDsgcXVldWUubGVuZ3RoOyBmaXJpbmdJbmRleCA9IC0xICkge1xuXHRcdFx0XHRtZW1vcnkgPSBxdWV1ZS5zaGlmdCgpO1xuXHRcdFx0XHR3aGlsZSAoICsrZmlyaW5nSW5kZXggPCBsaXN0Lmxlbmd0aCApIHtcblxuXHRcdFx0XHRcdC8vIFJ1biBjYWxsYmFjayBhbmQgY2hlY2sgZm9yIGVhcmx5IHRlcm1pbmF0aW9uXG5cdFx0XHRcdFx0aWYgKCBsaXN0WyBmaXJpbmdJbmRleCBdLmFwcGx5KCBtZW1vcnlbIDAgXSwgbWVtb3J5WyAxIF0gKSA9PT0gZmFsc2UgJiZcblx0XHRcdFx0XHRcdG9wdGlvbnMuc3RvcE9uRmFsc2UgKSB7XG5cblx0XHRcdFx0XHRcdC8vIEp1bXAgdG8gZW5kIGFuZCBmb3JnZXQgdGhlIGRhdGEgc28gLmFkZCBkb2Vzbid0IHJlLWZpcmVcblx0XHRcdFx0XHRcdGZpcmluZ0luZGV4ID0gbGlzdC5sZW5ndGg7XG5cdFx0XHRcdFx0XHRtZW1vcnkgPSBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gRm9yZ2V0IHRoZSBkYXRhIGlmIHdlJ3JlIGRvbmUgd2l0aCBpdFxuXHRcdFx0aWYgKCAhb3B0aW9ucy5tZW1vcnkgKSB7XG5cdFx0XHRcdG1lbW9yeSA9IGZhbHNlO1xuXHRcdFx0fVxuXG5cdFx0XHRmaXJpbmcgPSBmYWxzZTtcblxuXHRcdFx0Ly8gQ2xlYW4gdXAgaWYgd2UncmUgZG9uZSBmaXJpbmcgZm9yIGdvb2Rcblx0XHRcdGlmICggbG9ja2VkICkge1xuXG5cdFx0XHRcdC8vIEtlZXAgYW4gZW1wdHkgbGlzdCBpZiB3ZSBoYXZlIGRhdGEgZm9yIGZ1dHVyZSBhZGQgY2FsbHNcblx0XHRcdFx0aWYgKCBtZW1vcnkgKSB7XG5cdFx0XHRcdFx0bGlzdCA9IFtdO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSwgdGhpcyBvYmplY3QgaXMgc3BlbnRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaXN0ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBBY3R1YWwgQ2FsbGJhY2tzIG9iamVjdFxuXHRcdHNlbGYgPSB7XG5cblx0XHRcdC8vIEFkZCBhIGNhbGxiYWNrIG9yIGEgY29sbGVjdGlvbiBvZiBjYWxsYmFja3MgdG8gdGhlIGxpc3Rcblx0XHRcdGFkZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbGlzdCApIHtcblxuXHRcdFx0XHRcdC8vIElmIHdlIGhhdmUgbWVtb3J5IGZyb20gYSBwYXN0IHJ1biwgd2Ugc2hvdWxkIGZpcmUgYWZ0ZXIgYWRkaW5nXG5cdFx0XHRcdFx0aWYgKCBtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRcdGZpcmluZ0luZGV4ID0gbGlzdC5sZW5ndGggLSAxO1xuXHRcdFx0XHRcdFx0cXVldWUucHVzaCggbWVtb3J5ICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0KCBmdW5jdGlvbiBhZGQoIGFyZ3MgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZWFjaCggYXJncywgZnVuY3Rpb24oIF8sIGFyZyApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggYXJnICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCAhb3B0aW9ucy51bmlxdWUgfHwgIXNlbGYuaGFzKCBhcmcgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3QucHVzaCggYXJnICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBhcmcgJiYgYXJnLmxlbmd0aCAmJiBqUXVlcnkudHlwZSggYXJnICkgIT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBJbnNwZWN0IHJlY3Vyc2l2ZWx5XG5cdFx0XHRcdFx0XHRcdFx0YWRkKCBhcmcgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdH0gKSggYXJndW1lbnRzICk7XG5cblx0XHRcdFx0XHRpZiAoIG1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIFJlbW92ZSBhIGNhbGxiYWNrIGZyb20gdGhlIGxpc3Rcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBfLCBhcmcgKSB7XG5cdFx0XHRcdFx0dmFyIGluZGV4O1xuXHRcdFx0XHRcdHdoaWxlICggKCBpbmRleCA9IGpRdWVyeS5pbkFycmF5KCBhcmcsIGxpc3QsIGluZGV4ICkgKSA+IC0xICkge1xuXHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoIGluZGV4LCAxICk7XG5cblx0XHRcdFx0XHRcdC8vIEhhbmRsZSBmaXJpbmcgaW5kZXhlc1xuXHRcdFx0XHRcdFx0aWYgKCBpbmRleCA8PSBmaXJpbmdJbmRleCApIHtcblx0XHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXgtLTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDaGVjayBpZiBhIGdpdmVuIGNhbGxiYWNrIGlzIGluIHRoZSBsaXN0LlxuXHRcdFx0Ly8gSWYgbm8gYXJndW1lbnQgaXMgZ2l2ZW4sIHJldHVybiB3aGV0aGVyIG9yIG5vdCBsaXN0IGhhcyBjYWxsYmFja3MgYXR0YWNoZWQuXG5cdFx0XHRoYXM6IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRcdFx0cmV0dXJuIGZuID9cblx0XHRcdFx0XHRqUXVlcnkuaW5BcnJheSggZm4sIGxpc3QgKSA+IC0xIDpcblx0XHRcdFx0XHRsaXN0Lmxlbmd0aCA+IDA7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBSZW1vdmUgYWxsIGNhbGxiYWNrcyBmcm9tIHRoZSBsaXN0XG5cdFx0XHRlbXB0eTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbGlzdCApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBEaXNhYmxlIC5maXJlIGFuZCAuYWRkXG5cdFx0XHQvLyBBYm9ydCBhbnkgY3VycmVudC9wZW5kaW5nIGV4ZWN1dGlvbnNcblx0XHRcdC8vIENsZWFyIGFsbCBjYWxsYmFja3MgYW5kIHZhbHVlc1xuXHRcdFx0ZGlzYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxvY2tlZCA9IHF1ZXVlID0gW107XG5cdFx0XHRcdGxpc3QgPSBtZW1vcnkgPSBcIlwiO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHRkaXNhYmxlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhbGlzdDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIERpc2FibGUgLmZpcmVcblx0XHRcdC8vIEFsc28gZGlzYWJsZSAuYWRkIHVubGVzcyB3ZSBoYXZlIG1lbW9yeSAoc2luY2UgaXQgd291bGQgaGF2ZSBubyBlZmZlY3QpXG5cdFx0XHQvLyBBYm9ydCBhbnkgcGVuZGluZyBleGVjdXRpb25zXG5cdFx0XHRsb2NrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bG9ja2VkID0gcXVldWUgPSBbXTtcblx0XHRcdFx0aWYgKCAhbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0bGlzdCA9IG1lbW9yeSA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0bG9ja2VkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhbG9ja2VkO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2FsbCBhbGwgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGNvbnRleHQgYW5kIGFyZ3VtZW50c1xuXHRcdFx0ZmlyZVdpdGg6IGZ1bmN0aW9uKCBjb250ZXh0LCBhcmdzICkge1xuXHRcdFx0XHRpZiAoICFsb2NrZWQgKSB7XG5cdFx0XHRcdFx0YXJncyA9IGFyZ3MgfHwgW107XG5cdFx0XHRcdFx0YXJncyA9IFsgY29udGV4dCwgYXJncy5zbGljZSA/IGFyZ3Muc2xpY2UoKSA6IGFyZ3MgXTtcblx0XHRcdFx0XHRxdWV1ZS5wdXNoKCBhcmdzICk7XG5cdFx0XHRcdFx0aWYgKCAhZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyZSgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIENhbGwgYWxsIHRoZSBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gYXJndW1lbnRzXG5cdFx0XHRmaXJlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5maXJlV2l0aCggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gVG8ga25vdyBpZiB0aGUgY2FsbGJhY2tzIGhhdmUgYWxyZWFkeSBiZWVuIGNhbGxlZCBhdCBsZWFzdCBvbmNlXG5cdFx0XHRmaXJlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIWZpcmVkO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0cmV0dXJuIHNlbGY7XG59O1xuXG5cbmZ1bmN0aW9uIElkZW50aXR5KCB2ICkge1xuXHRyZXR1cm4gdjtcbn1cbmZ1bmN0aW9uIFRocm93ZXIoIGV4ICkge1xuXHR0aHJvdyBleDtcbn1cblxuZnVuY3Rpb24gYWRvcHRWYWx1ZSggdmFsdWUsIHJlc29sdmUsIHJlamVjdCApIHtcblx0dmFyIG1ldGhvZDtcblxuXHR0cnkge1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIHByb21pc2UgYXNwZWN0IGZpcnN0IHRvIHByaXZpbGVnZSBzeW5jaHJvbm91cyBiZWhhdmlvclxuXHRcdGlmICggdmFsdWUgJiYgalF1ZXJ5LmlzRnVuY3Rpb24oICggbWV0aG9kID0gdmFsdWUucHJvbWlzZSApICkgKSB7XG5cdFx0XHRtZXRob2QuY2FsbCggdmFsdWUgKS5kb25lKCByZXNvbHZlICkuZmFpbCggcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciB0aGVuYWJsZXNcblx0XHR9IGVsc2UgaWYgKCB2YWx1ZSAmJiBqUXVlcnkuaXNGdW5jdGlvbiggKCBtZXRob2QgPSB2YWx1ZS50aGVuICkgKSApIHtcblx0XHRcdG1ldGhvZC5jYWxsKCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciBub24tdGhlbmFibGVzXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA0LjAgb25seVxuXHRcdFx0Ly8gU3RyaWN0IG1vZGUgZnVuY3Rpb25zIGludm9rZWQgd2l0aG91dCAuY2FsbC8uYXBwbHkgZ2V0IGdsb2JhbC1vYmplY3QgY29udGV4dFxuXHRcdFx0cmVzb2x2ZS5jYWxsKCB1bmRlZmluZWQsIHZhbHVlICk7XG5cdFx0fVxuXG5cdC8vIEZvciBQcm9taXNlcy9BKywgY29udmVydCBleGNlcHRpb25zIGludG8gcmVqZWN0aW9uc1xuXHQvLyBTaW5jZSBqUXVlcnkud2hlbiBkb2Vzbid0IHVud3JhcCB0aGVuYWJsZXMsIHdlIGNhbiBza2lwIHRoZSBleHRyYSBjaGVja3MgYXBwZWFyaW5nIGluXG5cdC8vIERlZmVycmVkI3RoZW4gdG8gY29uZGl0aW9uYWxseSBzdXBwcmVzcyByZWplY3Rpb24uXG5cdH0gY2F0Y2ggKCB2YWx1ZSApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIG9ubHlcblx0XHQvLyBTdHJpY3QgbW9kZSBmdW5jdGlvbnMgaW52b2tlZCB3aXRob3V0IC5jYWxsLy5hcHBseSBnZXQgZ2xvYmFsLW9iamVjdCBjb250ZXh0XG5cdFx0cmVqZWN0LmNhbGwoIHVuZGVmaW5lZCwgdmFsdWUgKTtcblx0fVxufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0RGVmZXJyZWQ6IGZ1bmN0aW9uKCBmdW5jICkge1xuXHRcdHZhciB0dXBsZXMgPSBbXG5cblx0XHRcdFx0Ly8gYWN0aW9uLCBhZGQgbGlzdGVuZXIsIGNhbGxiYWNrcyxcblx0XHRcdFx0Ly8gLi4uIC50aGVuIGhhbmRsZXJzLCBhcmd1bWVudCBpbmRleCwgW2ZpbmFsIHN0YXRlXVxuXHRcdFx0XHRbIFwibm90aWZ5XCIsIFwicHJvZ3Jlc3NcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwibWVtb3J5XCIgKSwgMiBdLFxuXHRcdFx0XHRbIFwicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksIDAsIFwicmVzb2x2ZWRcIiBdLFxuXHRcdFx0XHRbIFwicmVqZWN0XCIsIFwiZmFpbFwiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSwgMSwgXCJyZWplY3RlZFwiIF1cblx0XHRcdF0sXG5cdFx0XHRzdGF0ZSA9IFwicGVuZGluZ1wiLFxuXHRcdFx0cHJvbWlzZSA9IHtcblx0XHRcdFx0c3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0YWx3YXlzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5kb25lKCBhcmd1bWVudHMgKS5mYWlsKCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJjYXRjaFwiOiBmdW5jdGlvbiggZm4gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2UudGhlbiggbnVsbCwgZm4gKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBLZWVwIHBpcGUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdHBpcGU6IGZ1bmN0aW9uKCAvKiBmbkRvbmUsIGZuRmFpbCwgZm5Qcm9ncmVzcyAqLyApIHtcblx0XHRcdFx0XHR2YXIgZm5zID0gYXJndW1lbnRzO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGpRdWVyeS5EZWZlcnJlZCggZnVuY3Rpb24oIG5ld0RlZmVyICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIGksIHR1cGxlICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIE1hcCB0dXBsZXMgKHByb2dyZXNzLCBkb25lLCBmYWlsKSB0byBhcmd1bWVudHMgKGRvbmUsIGZhaWwsIHByb2dyZXNzKVxuXHRcdFx0XHRcdFx0XHR2YXIgZm4gPSBqUXVlcnkuaXNGdW5jdGlvbiggZm5zWyB0dXBsZVsgNCBdIF0gKSAmJiBmbnNbIHR1cGxlWyA0IF0gXTtcblxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5wcm9ncmVzcyhmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5ub3RpZnkgfSlcblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQuZG9uZShmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZXNvbHZlIH0pXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLmZhaWwoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVqZWN0IH0pXG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMSBdIF0oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCA9IGZuICYmIGZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCByZXR1cm5lZC5wcm9taXNlICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC5wcm9taXNlKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnByb2dyZXNzKCBuZXdEZWZlci5ub3RpZnkgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZG9uZSggbmV3RGVmZXIucmVzb2x2ZSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5mYWlsKCBuZXdEZWZlci5yZWplY3QgKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXJbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRmbiA/IFsgcmV0dXJuZWQgXSA6IGFyZ3VtZW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRcdGZucyA9IG51bGw7XG5cdFx0XHRcdFx0fSApLnByb21pc2UoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0dGhlbjogZnVuY3Rpb24oIG9uRnVsZmlsbGVkLCBvblJlamVjdGVkLCBvblByb2dyZXNzICkge1xuXHRcdFx0XHRcdHZhciBtYXhEZXB0aCA9IDA7XG5cdFx0XHRcdFx0ZnVuY3Rpb24gcmVzb2x2ZSggZGVwdGgsIGRlZmVycmVkLCBoYW5kbGVyLCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgdGhhdCA9IHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0YXJncyA9IGFyZ3VtZW50cyxcblx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93ID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQsIHRoZW47XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjMuMy4zXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01OVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIGRvdWJsZS1yZXNvbHV0aW9uIGF0dGVtcHRzXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoIDwgbWF4RGVwdGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQgPSBoYW5kbGVyLmFwcGx5KCB0aGF0LCBhcmdzICk7XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjFcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTQ4XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkID09PSBkZWZlcnJlZC5wcm9taXNlKCkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoIFwiVGhlbmFibGUgc2VsZi1yZXNvbHV0aW9uXCIgKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbnMgMi4zLjMuMSwgMy41XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01NFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNzVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFJldHJpZXZlIGB0aGVuYCBvbmx5IG9uY2Vcblx0XHRcdFx0XHRcdFx0XHRcdHRoZW4gPSByZXR1cm5lZCAmJlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFByb21pc2VzL0ErIHNlY3Rpb24gMi4zLjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjRcblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBjaGVjayBvYmplY3RzIGFuZCBmdW5jdGlvbnMgZm9yIHRoZW5hYmlsaXR5XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggdHlwZW9mIHJldHVybmVkID09PSBcIm9iamVjdFwiIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHJldHVybmVkID09PSBcImZ1bmN0aW9uXCIgKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC50aGVuO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYSByZXR1cm5lZCB0aGVuYWJsZVxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdGhlbiApICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFNwZWNpYWwgcHJvY2Vzc29ycyAobm90aWZ5KSBqdXN0IHdhaXQgZm9yIHJlc29sdXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBzcGVjaWFsICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW4uY2FsbChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBUaHJvd2VyLCBzcGVjaWFsIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBhbHNvIGhvb2sgaW50byBwcm9ncmVzc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIGRpc3JlZ2FyZCBvbGRlciByZXNvbHV0aW9uIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1heERlcHRoKys7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbCApLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSggbWF4RGVwdGgsIGRlZmVycmVkLCBJZGVudGl0eSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgYWxsIG90aGVyIHJldHVybmVkIHZhbHVlc1xuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IHN1YnN0aXR1dGUgaGFuZGxlcnMgcGFzcyBvbiBjb250ZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGhhbmRsZXIgIT09IElkZW50aXR5ICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YXJncyA9IFsgcmV0dXJuZWQgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIFByb2Nlc3MgdGhlIHZhbHVlKHMpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIERlZmF1bHQgcHJvY2VzcyBpcyByZXNvbHZlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCggc3BlY2lhbCB8fCBkZWZlcnJlZC5yZXNvbHZlV2l0aCApKCB0aGF0LCBhcmdzICk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgbm9ybWFsIHByb2Nlc3NvcnMgKHJlc29sdmUpIGNhdGNoIGFuZCByZWplY3QgZXhjZXB0aW9uc1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MgPSBzcGVjaWFsID9cblx0XHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3cgOlxuXHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWlnaHRUaHJvdygpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2sgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayggZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzcy5zdGFja1RyYWNlICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjQuMVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTYxXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gSWdub3JlIHBvc3QtcmVzb2x1dGlvbiBleGNlcHRpb25zXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBkZXB0aCArIDEgPj0gbWF4RGVwdGggKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIE9ubHkgc3Vic3RpdHV0ZSBoYW5kbGVycyBwYXNzIG9uIGNvbnRleHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGFuZCBtdWx0aXBsZSB2YWx1ZXMgKG5vbi1zcGVjIGJlaGF2aW9yKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBoYW5kbGVyICE9PSBUaHJvd2VyICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhcmdzID0gWyBlIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIHRoYXQsIGFyZ3MgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH07XG5cblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjFcblx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNTdcblx0XHRcdFx0XHRcdFx0Ly8gUmUtcmVzb2x2ZSBwcm9taXNlcyBpbW1lZGlhdGVseSB0byBkb2RnZSBmYWxzZSByZWplY3Rpb24gZnJvbVxuXHRcdFx0XHRcdFx0XHQvLyBzdWJzZXF1ZW50IGVycm9yc1xuXHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoICkge1xuXHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIENhbGwgYW4gb3B0aW9uYWwgaG9vayB0byByZWNvcmQgdGhlIHN0YWNrLCBpbiBjYXNlIG9mIGV4Y2VwdGlvblxuXHRcdFx0XHRcdFx0XHRcdC8vIHNpbmNlIGl0J3Mgb3RoZXJ3aXNlIGxvc3Qgd2hlbiBleGVjdXRpb24gZ29lcyBhc3luY1xuXHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LkRlZmVycmVkLmdldFN0YWNrSG9vayApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3Muc3RhY2tUcmFjZSA9IGpRdWVyeS5EZWZlcnJlZC5nZXRTdGFja0hvb2soKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoIHByb2Nlc3MgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5LkRlZmVycmVkKCBmdW5jdGlvbiggbmV3RGVmZXIgKSB7XG5cblx0XHRcdFx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmlzRnVuY3Rpb24oIG9uUHJvZ3Jlc3MgKSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRvblByb2dyZXNzIDpcblx0XHRcdFx0XHRcdFx0XHRcdElkZW50aXR5LFxuXHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyLm5vdGlmeVdpdGhcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMSBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmlzRnVuY3Rpb24oIG9uRnVsZmlsbGVkICkgP1xuXHRcdFx0XHRcdFx0XHRcdFx0b25GdWxmaWxsZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0SWRlbnRpdHlcblx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0Ly8gcmVqZWN0ZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAyIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuaXNGdW5jdGlvbiggb25SZWplY3RlZCApID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uUmVqZWN0ZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhyb3dlclxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gKS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuXHRcdFx0XHQvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XG5cdFx0XHRcdHByb21pc2U6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iaiAhPSBudWxsID8galF1ZXJ5LmV4dGVuZCggb2JqLCBwcm9taXNlICkgOiBwcm9taXNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZGVmZXJyZWQgPSB7fTtcblxuXHRcdC8vIEFkZCBsaXN0LXNwZWNpZmljIG1ldGhvZHNcblx0XHRqUXVlcnkuZWFjaCggdHVwbGVzLCBmdW5jdGlvbiggaSwgdHVwbGUgKSB7XG5cdFx0XHR2YXIgbGlzdCA9IHR1cGxlWyAyIF0sXG5cdFx0XHRcdHN0YXRlU3RyaW5nID0gdHVwbGVbIDUgXTtcblxuXHRcdFx0Ly8gcHJvbWlzZS5wcm9ncmVzcyA9IGxpc3QuYWRkXG5cdFx0XHQvLyBwcm9taXNlLmRvbmUgPSBsaXN0LmFkZFxuXHRcdFx0Ly8gcHJvbWlzZS5mYWlsID0gbGlzdC5hZGRcblx0XHRcdHByb21pc2VbIHR1cGxlWyAxIF0gXSA9IGxpc3QuYWRkO1xuXG5cdFx0XHQvLyBIYW5kbGUgc3RhdGVcblx0XHRcdGlmICggc3RhdGVTdHJpbmcgKSB7XG5cdFx0XHRcdGxpc3QuYWRkKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBzdGF0ZSA9IFwicmVzb2x2ZWRcIiAoaS5lLiwgZnVsZmlsbGVkKVxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUgPSBcInJlamVjdGVkXCJcblx0XHRcdFx0XHRcdHN0YXRlID0gc3RhdGVTdHJpbmc7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdC8vIHJlamVjdGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0dHVwbGVzWyAzIC0gaSBdWyAyIF0uZGlzYWJsZSxcblxuXHRcdFx0XHRcdC8vIHByb2dyZXNzX2NhbGxiYWNrcy5sb2NrXG5cdFx0XHRcdFx0dHVwbGVzWyAwIF1bIDIgXS5sb2NrXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmZpcmVcblx0XHRcdC8vIGZ1bGZpbGxlZF9oYW5kbGVycy5maXJlXG5cdFx0XHQvLyByZWplY3RlZF9oYW5kbGVycy5maXJlXG5cdFx0XHRsaXN0LmFkZCggdHVwbGVbIDMgXS5maXJlICk7XG5cblx0XHRcdC8vIGRlZmVycmVkLm5vdGlmeSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5ub3RpZnlXaXRoKC4uLikgfVxuXHRcdFx0Ly8gZGVmZXJyZWQucmVzb2x2ZSA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZXNvbHZlV2l0aCguLi4pIH1cblx0XHRcdC8vIGRlZmVycmVkLnJlamVjdCA9IGZ1bmN0aW9uKCkgeyBkZWZlcnJlZC5yZWplY3RXaXRoKC4uLikgfVxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oIHRoaXMgPT09IGRlZmVycmVkID8gdW5kZWZpbmVkIDogdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gZGVmZXJyZWQubm90aWZ5V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdC8vIGRlZmVycmVkLnJlc29sdmVXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0V2l0aCA9IGxpc3QuZmlyZVdpdGhcblx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSA9IGxpc3QuZmlyZVdpdGg7XG5cdFx0fSApO1xuXG5cdFx0Ly8gTWFrZSB0aGUgZGVmZXJyZWQgYSBwcm9taXNlXG5cdFx0cHJvbWlzZS5wcm9taXNlKCBkZWZlcnJlZCApO1xuXG5cdFx0Ly8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxuXHRcdGlmICggZnVuYyApIHtcblx0XHRcdGZ1bmMuY2FsbCggZGVmZXJyZWQsIGRlZmVycmVkICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGRvbmUhXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9LFxuXG5cdC8vIERlZmVycmVkIGhlbHBlclxuXHR3aGVuOiBmdW5jdGlvbiggc2luZ2xlVmFsdWUgKSB7XG5cdFx0dmFyXG5cblx0XHRcdC8vIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xuXHRcdFx0cmVtYWluaW5nID0gYXJndW1lbnRzLmxlbmd0aCxcblxuXHRcdFx0Ly8gY291bnQgb2YgdW5wcm9jZXNzZWQgYXJndW1lbnRzXG5cdFx0XHRpID0gcmVtYWluaW5nLFxuXG5cdFx0XHQvLyBzdWJvcmRpbmF0ZSBmdWxmaWxsbWVudCBkYXRhXG5cdFx0XHRyZXNvbHZlQ29udGV4dHMgPSBBcnJheSggaSApLFxuXHRcdFx0cmVzb2x2ZVZhbHVlcyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApLFxuXG5cdFx0XHQvLyB0aGUgbWFzdGVyIERlZmVycmVkXG5cdFx0XHRtYXN0ZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblxuXHRcdFx0Ly8gc3Vib3JkaW5hdGUgY2FsbGJhY2sgZmFjdG9yeVxuXHRcdFx0dXBkYXRlRnVuYyA9IGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJlc29sdmVDb250ZXh0c1sgaSBdID0gdGhpcztcblx0XHRcdFx0XHRyZXNvbHZlVmFsdWVzWyBpIF0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApIDogdmFsdWU7XG5cdFx0XHRcdFx0aWYgKCAhKCAtLXJlbWFpbmluZyApICkge1xuXHRcdFx0XHRcdFx0bWFzdGVyLnJlc29sdmVXaXRoKCByZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9O1xuXG5cdFx0Ly8gU2luZ2xlLSBhbmQgZW1wdHkgYXJndW1lbnRzIGFyZSBhZG9wdGVkIGxpa2UgUHJvbWlzZS5yZXNvbHZlXG5cdFx0aWYgKCByZW1haW5pbmcgPD0gMSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHNpbmdsZVZhbHVlLCBtYXN0ZXIuZG9uZSggdXBkYXRlRnVuYyggaSApICkucmVzb2x2ZSwgbWFzdGVyLnJlamVjdCApO1xuXG5cdFx0XHQvLyBVc2UgLnRoZW4oKSB0byB1bndyYXAgc2Vjb25kYXJ5IHRoZW5hYmxlcyAoY2YuIGdoLTMwMDApXG5cdFx0XHRpZiAoIG1hc3Rlci5zdGF0ZSgpID09PSBcInBlbmRpbmdcIiB8fFxuXHRcdFx0XHRqUXVlcnkuaXNGdW5jdGlvbiggcmVzb2x2ZVZhbHVlc1sgaSBdICYmIHJlc29sdmVWYWx1ZXNbIGkgXS50aGVuICkgKSB7XG5cblx0XHRcdFx0cmV0dXJuIG1hc3Rlci50aGVuKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gTXVsdGlwbGUgYXJndW1lbnRzIGFyZSBhZ2dyZWdhdGVkIGxpa2UgUHJvbWlzZS5hbGwgYXJyYXkgZWxlbWVudHNcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGFkb3B0VmFsdWUoIHJlc29sdmVWYWx1ZXNbIGkgXSwgdXBkYXRlRnVuYyggaSApLCBtYXN0ZXIucmVqZWN0ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hc3Rlci5wcm9taXNlKCk7XG5cdH1cbn0gKTtcblxuXG4vLyBUaGVzZSB1c3VhbGx5IGluZGljYXRlIGEgcHJvZ3JhbW1lciBtaXN0YWtlIGR1cmluZyBkZXZlbG9wbWVudCxcbi8vIHdhcm4gYWJvdXQgdGhlbSBBU0FQIHJhdGhlciB0aGFuIHN3YWxsb3dpbmcgdGhlbSBieSBkZWZhdWx0LlxudmFyIHJlcnJvck5hbWVzID0gL14oRXZhbHxJbnRlcm5hbHxSYW5nZXxSZWZlcmVuY2V8U3ludGF4fFR5cGV8VVJJKUVycm9yJC87XG5cbmpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rID0gZnVuY3Rpb24oIGVycm9yLCBzdGFjayApIHtcblxuXHQvLyBTdXBwb3J0OiBJRSA4IC0gOSBvbmx5XG5cdC8vIENvbnNvbGUgZXhpc3RzIHdoZW4gZGV2IHRvb2xzIGFyZSBvcGVuLCB3aGljaCBjYW4gaGFwcGVuIGF0IGFueSB0aW1lXG5cdGlmICggd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUud2FybiAmJiBlcnJvciAmJiByZXJyb3JOYW1lcy50ZXN0KCBlcnJvci5uYW1lICkgKSB7XG5cdFx0d2luZG93LmNvbnNvbGUud2FybiggXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIiArIGVycm9yLm1lc3NhZ2UsIGVycm9yLnN0YWNrLCBzdGFjayApO1xuXHR9XG59O1xuXG5cblxuXG5qUXVlcnkucmVhZHlFeGNlcHRpb24gPSBmdW5jdGlvbiggZXJyb3IgKSB7XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fSApO1xufTtcblxuXG5cblxuLy8gVGhlIGRlZmVycmVkIHVzZWQgb24gRE9NIHJlYWR5XG52YXIgcmVhZHlMaXN0ID0galF1ZXJ5LkRlZmVycmVkKCk7XG5cbmpRdWVyeS5mbi5yZWFkeSA9IGZ1bmN0aW9uKCBmbiApIHtcblxuXHRyZWFkeUxpc3Rcblx0XHQudGhlbiggZm4gKVxuXG5cdFx0Ly8gV3JhcCBqUXVlcnkucmVhZHlFeGNlcHRpb24gaW4gYSBmdW5jdGlvbiBzbyB0aGF0IHRoZSBsb29rdXBcblx0XHQvLyBoYXBwZW5zIGF0IHRoZSB0aW1lIG9mIGVycm9yIGhhbmRsaW5nIGluc3RlYWQgb2YgY2FsbGJhY2tcblx0XHQvLyByZWdpc3RyYXRpb24uXG5cdFx0LmNhdGNoKCBmdW5jdGlvbiggZXJyb3IgKSB7XG5cdFx0XHRqUXVlcnkucmVhZHlFeGNlcHRpb24oIGVycm9yICk7XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIElzIHRoZSBET00gcmVhZHkgdG8gYmUgdXNlZD8gU2V0IHRvIHRydWUgb25jZSBpdCBvY2N1cnMuXG5cdGlzUmVhZHk6IGZhbHNlLFxuXG5cdC8vIEEgY291bnRlciB0byB0cmFjayBob3cgbWFueSBpdGVtcyB0byB3YWl0IGZvciBiZWZvcmVcblx0Ly8gdGhlIHJlYWR5IGV2ZW50IGZpcmVzLiBTZWUgIzY3ODFcblx0cmVhZHlXYWl0OiAxLFxuXG5cdC8vIEhvbGQgKG9yIHJlbGVhc2UpIHRoZSByZWFkeSBldmVudFxuXHRob2xkUmVhZHk6IGZ1bmN0aW9uKCBob2xkICkge1xuXHRcdGlmICggaG9sZCApIHtcblx0XHRcdGpRdWVyeS5yZWFkeVdhaXQrKztcblx0XHR9IGVsc2Uge1xuXHRcdFx0alF1ZXJ5LnJlYWR5KCB0cnVlICk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIEhhbmRsZSB3aGVuIHRoZSBET00gaXMgcmVhZHlcblx0cmVhZHk6IGZ1bmN0aW9uKCB3YWl0ICkge1xuXG5cdFx0Ly8gQWJvcnQgaWYgdGhlcmUgYXJlIHBlbmRpbmcgaG9sZHMgb3Igd2UncmUgYWxyZWFkeSByZWFkeVxuXHRcdGlmICggd2FpdCA9PT0gdHJ1ZSA/IC0talF1ZXJ5LnJlYWR5V2FpdCA6IGpRdWVyeS5pc1JlYWR5ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFJlbWVtYmVyIHRoYXQgdGhlIERPTSBpcyByZWFkeVxuXHRcdGpRdWVyeS5pc1JlYWR5ID0gdHJ1ZTtcblxuXHRcdC8vIElmIGEgbm9ybWFsIERPTSBSZWFkeSBldmVudCBmaXJlZCwgZGVjcmVtZW50LCBhbmQgd2FpdCBpZiBuZWVkIGJlXG5cdFx0aWYgKCB3YWl0ICE9PSB0cnVlICYmIC0talF1ZXJ5LnJlYWR5V2FpdCA+IDAgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gSWYgdGhlcmUgYXJlIGZ1bmN0aW9ucyBib3VuZCwgdG8gZXhlY3V0ZVxuXHRcdHJlYWR5TGlzdC5yZXNvbHZlV2l0aCggZG9jdW1lbnQsIFsgalF1ZXJ5IF0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkucmVhZHkudGhlbiA9IHJlYWR5TGlzdC50aGVuO1xuXG4vLyBUaGUgcmVhZHkgZXZlbnQgaGFuZGxlciBhbmQgc2VsZiBjbGVhbnVwIG1ldGhvZFxuZnVuY3Rpb24gY29tcGxldGVkKCkge1xuXHRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkICk7XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgY29tcGxldGVkICk7XG5cdGpRdWVyeS5yZWFkeSgpO1xufVxuXG4vLyBDYXRjaCBjYXNlcyB3aGVyZSAkKGRvY3VtZW50KS5yZWFkeSgpIGlzIGNhbGxlZFxuLy8gYWZ0ZXIgdGhlIGJyb3dzZXIgZXZlbnQgaGFzIGFscmVhZHkgb2NjdXJyZWQuXG4vLyBTdXBwb3J0OiBJRSA8PTkgLSAxMCBvbmx5XG4vLyBPbGRlciBJRSBzb21ldGltZXMgc2lnbmFscyBcImludGVyYWN0aXZlXCIgdG9vIHNvb25cbmlmICggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiIHx8XG5cdCggZG9jdW1lbnQucmVhZHlTdGF0ZSAhPT0gXCJsb2FkaW5nXCIgJiYgIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5kb1Njcm9sbCApICkge1xuXG5cdC8vIEhhbmRsZSBpdCBhc3luY2hyb25vdXNseSB0byBhbGxvdyBzY3JpcHRzIHRoZSBvcHBvcnR1bml0eSB0byBkZWxheSByZWFkeVxuXHR3aW5kb3cuc2V0VGltZW91dCggalF1ZXJ5LnJlYWR5ICk7XG5cbn0gZWxzZSB7XG5cblx0Ly8gVXNlIHRoZSBoYW5keSBldmVudCBjYWxsYmFja1xuXHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkICk7XG5cblx0Ly8gQSBmYWxsYmFjayB0byB3aW5kb3cub25sb2FkLCB0aGF0IHdpbGwgYWx3YXlzIHdvcmtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQgKTtcbn1cblxuXG5cblxuLy8gTXVsdGlmdW5jdGlvbmFsIG1ldGhvZCB0byBnZXQgYW5kIHNldCB2YWx1ZXMgb2YgYSBjb2xsZWN0aW9uXG4vLyBUaGUgdmFsdWUvcyBjYW4gb3B0aW9uYWxseSBiZSBleGVjdXRlZCBpZiBpdCdzIGEgZnVuY3Rpb25cbnZhciBhY2Nlc3MgPSBmdW5jdGlvbiggZWxlbXMsIGZuLCBrZXksIHZhbHVlLCBjaGFpbmFibGUsIGVtcHR5R2V0LCByYXcgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBlbGVtcy5sZW5ndGgsXG5cdFx0YnVsayA9IGtleSA9PSBudWxsO1xuXG5cdC8vIFNldHMgbWFueSB2YWx1ZXNcblx0aWYgKCBqUXVlcnkudHlwZSgga2V5ICkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblx0XHRmb3IgKCBpIGluIGtleSApIHtcblx0XHRcdGFjY2VzcyggZWxlbXMsIGZuLCBpLCBrZXlbIGkgXSwgdHJ1ZSwgZW1wdHlHZXQsIHJhdyApO1xuXHRcdH1cblxuXHQvLyBTZXRzIG9uZSB2YWx1ZVxuXHR9IGVsc2UgaWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdGNoYWluYWJsZSA9IHRydWU7XG5cblx0XHRpZiAoICFqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJhdyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBidWxrICkge1xuXG5cdFx0XHQvLyBCdWxrIG9wZXJhdGlvbnMgcnVuIGFnYWluc3QgdGhlIGVudGlyZSBzZXRcblx0XHRcdGlmICggcmF3ICkge1xuXHRcdFx0XHRmbi5jYWxsKCBlbGVtcywgdmFsdWUgKTtcblx0XHRcdFx0Zm4gPSBudWxsO1xuXG5cdFx0XHQvLyAuLi5leGNlcHQgd2hlbiBleGVjdXRpbmcgZnVuY3Rpb24gdmFsdWVzXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRidWxrID0gZm47XG5cdFx0XHRcdGZuID0gZnVuY3Rpb24oIGVsZW0sIGtleSwgdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGJ1bGsuY2FsbCggalF1ZXJ5KCBlbGVtICksIHZhbHVlICk7XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBmbiApIHtcblx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRmbihcblx0XHRcdFx0XHRlbGVtc1sgaSBdLCBrZXksIHJhdyA/XG5cdFx0XHRcdFx0dmFsdWUgOlxuXHRcdFx0XHRcdHZhbHVlLmNhbGwoIGVsZW1zWyBpIF0sIGksIGZuKCBlbGVtc1sgaSBdLCBrZXkgKSApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBjaGFpbmFibGUgKSB7XG5cdFx0cmV0dXJuIGVsZW1zO1xuXHR9XG5cblx0Ly8gR2V0c1xuXHRpZiAoIGJ1bGsgKSB7XG5cdFx0cmV0dXJuIGZuLmNhbGwoIGVsZW1zICk7XG5cdH1cblxuXHRyZXR1cm4gbGVuID8gZm4oIGVsZW1zWyAwIF0sIGtleSApIDogZW1wdHlHZXQ7XG59O1xudmFyIGFjY2VwdERhdGEgPSBmdW5jdGlvbiggb3duZXIgKSB7XG5cblx0Ly8gQWNjZXB0cyBvbmx5OlxuXHQvLyAgLSBOb2RlXG5cdC8vICAgIC0gTm9kZS5FTEVNRU5UX05PREVcblx0Ly8gICAgLSBOb2RlLkRPQ1VNRU5UX05PREVcblx0Ly8gIC0gT2JqZWN0XG5cdC8vICAgIC0gQW55XG5cdHJldHVybiBvd25lci5ub2RlVHlwZSA9PT0gMSB8fCBvd25lci5ub2RlVHlwZSA9PT0gOSB8fCAhKCArb3duZXIubm9kZVR5cGUgKTtcbn07XG5cblxuXG5cbmZ1bmN0aW9uIERhdGEoKSB7XG5cdHRoaXMuZXhwYW5kbyA9IGpRdWVyeS5leHBhbmRvICsgRGF0YS51aWQrKztcbn1cblxuRGF0YS51aWQgPSAxO1xuXG5EYXRhLnByb3RvdHlwZSA9IHtcblxuXHRjYWNoZTogZnVuY3Rpb24oIG93bmVyICkge1xuXG5cdFx0Ly8gQ2hlY2sgaWYgdGhlIG93bmVyIG9iamVjdCBhbHJlYWR5IGhhcyBhIGNhY2hlXG5cdFx0dmFyIHZhbHVlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0Ly8gSWYgbm90LCBjcmVhdGUgb25lXG5cdFx0aWYgKCAhdmFsdWUgKSB7XG5cdFx0XHR2YWx1ZSA9IHt9O1xuXG5cdFx0XHQvLyBXZSBjYW4gYWNjZXB0IGRhdGEgZm9yIG5vbi1lbGVtZW50IG5vZGVzIGluIG1vZGVybiBicm93c2Vycyxcblx0XHRcdC8vIGJ1dCB3ZSBzaG91bGQgbm90LCBzZWUgIzgzMzUuXG5cdFx0XHQvLyBBbHdheXMgcmV0dXJuIGFuIGVtcHR5IG9iamVjdC5cblx0XHRcdGlmICggYWNjZXB0RGF0YSggb3duZXIgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBpdCBpcyBhIG5vZGUgdW5saWtlbHkgdG8gYmUgc3RyaW5naWZ5LWVkIG9yIGxvb3BlZCBvdmVyXG5cdFx0XHRcdC8vIHVzZSBwbGFpbiBhc3NpZ25tZW50XG5cdFx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdID0gdmFsdWU7XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHNlY3VyZSBpdCBpbiBhIG5vbi1lbnVtZXJhYmxlIHByb3BlcnR5XG5cdFx0XHRcdC8vIGNvbmZpZ3VyYWJsZSBtdXN0IGJlIHRydWUgdG8gYWxsb3cgdGhlIHByb3BlcnR5IHRvIGJlXG5cdFx0XHRcdC8vIGRlbGV0ZWQgd2hlbiBkYXRhIGlzIHJlbW92ZWRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIG93bmVyLCB0aGlzLmV4cGFuZG8sIHtcblx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZSxcblx0XHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZVxuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZTtcblx0fSxcblx0c2V0OiBmdW5jdGlvbiggb3duZXIsIGRhdGEsIHZhbHVlICkge1xuXHRcdHZhciBwcm9wLFxuXHRcdFx0Y2FjaGUgPSB0aGlzLmNhY2hlKCBvd25lciApO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuXHRcdC8vIEFsd2F5cyB1c2UgY2FtZWxDYXNlIGtleSAoZ2gtMjI1Nylcblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Y2FjaGVbIGpRdWVyeS5jYW1lbENhc2UoIGRhdGEgKSBdID0gdmFsdWU7XG5cblx0XHQvLyBIYW5kbGU6IFsgb3duZXIsIHsgcHJvcGVydGllcyB9IF0gYXJnc1xuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIENvcHkgdGhlIHByb3BlcnRpZXMgb25lLWJ5LW9uZSB0byB0aGUgY2FjaGUgb2JqZWN0XG5cdFx0XHRmb3IgKCBwcm9wIGluIGRhdGEgKSB7XG5cdFx0XHRcdGNhY2hlWyBqUXVlcnkuY2FtZWxDYXNlKCBwcm9wICkgXSA9IGRhdGFbIHByb3AgXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9LFxuXHRnZXQ6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuXHRcdHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHR0aGlzLmNhY2hlKCBvd25lciApIDpcblxuXHRcdFx0Ly8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuXHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdICYmIG93bmVyWyB0aGlzLmV4cGFuZG8gXVsgalF1ZXJ5LmNhbWVsQ2FzZSgga2V5ICkgXTtcblx0fSxcblx0YWNjZXNzOiBmdW5jdGlvbiggb3duZXIsIGtleSwgdmFsdWUgKSB7XG5cblx0XHQvLyBJbiBjYXNlcyB3aGVyZSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIE5vIGtleSB3YXMgc3BlY2lmaWVkXG5cdFx0Ly8gICAyLiBBIHN0cmluZyBrZXkgd2FzIHNwZWNpZmllZCwgYnV0IG5vIHZhbHVlIHByb3ZpZGVkXG5cdFx0Ly9cblx0XHQvLyBUYWtlIHRoZSBcInJlYWRcIiBwYXRoIGFuZCBhbGxvdyB0aGUgZ2V0IG1ldGhvZCB0byBkZXRlcm1pbmVcblx0XHQvLyB3aGljaCB2YWx1ZSB0byByZXR1cm4sIHJlc3BlY3RpdmVseSBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIFRoZSBlbnRpcmUgY2FjaGUgb2JqZWN0XG5cdFx0Ly8gICAyLiBUaGUgZGF0YSBzdG9yZWQgYXQgdGhlIGtleVxuXHRcdC8vXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fFxuXHRcdFx0XHQoICgga2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIgKSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkgKSB7XG5cblx0XHRcdHJldHVybiB0aGlzLmdldCggb3duZXIsIGtleSApO1xuXHRcdH1cblxuXHRcdC8vIFdoZW4gdGhlIGtleSBpcyBub3QgYSBzdHJpbmcsIG9yIGJvdGggYSBrZXkgYW5kIHZhbHVlXG5cdFx0Ly8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIEFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG5cdFx0Ly8gICAyLiBBIGtleSBhbmQgdmFsdWVcblx0XHQvL1xuXHRcdHRoaXMuc2V0KCBvd25lciwga2V5LCB2YWx1ZSApO1xuXG5cdFx0Ly8gU2luY2UgdGhlIFwic2V0XCIgcGF0aCBjYW4gaGF2ZSB0d28gcG9zc2libGUgZW50cnkgcG9pbnRzXG5cdFx0Ly8gcmV0dXJuIHRoZSBleHBlY3RlZCBkYXRhIGJhc2VkIG9uIHdoaWNoIHBhdGggd2FzIHRha2VuWypdXG5cdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHR2YXIgaSxcblx0XHRcdGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0aWYgKCBjYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICgga2V5ICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQgYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBrZXlzXG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCBrZXkgKSApIHtcblxuXHRcdFx0XHQvLyBJZiBrZXkgaXMgYW4gYXJyYXkgb2Yga2V5cy4uLlxuXHRcdFx0XHQvLyBXZSBhbHdheXMgc2V0IGNhbWVsQ2FzZSBrZXlzLCBzbyByZW1vdmUgdGhhdC5cblx0XHRcdFx0a2V5ID0ga2V5Lm1hcCggalF1ZXJ5LmNhbWVsQ2FzZSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0a2V5ID0galF1ZXJ5LmNhbWVsQ2FzZSgga2V5ICk7XG5cblx0XHRcdFx0Ly8gSWYgYSBrZXkgd2l0aCB0aGUgc3BhY2VzIGV4aXN0cywgdXNlIGl0LlxuXHRcdFx0XHQvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuXHRcdFx0XHRrZXkgPSBrZXkgaW4gY2FjaGUgP1xuXHRcdFx0XHRcdFsga2V5IF0gOlxuXHRcdFx0XHRcdCgga2V5Lm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW10gKTtcblx0XHRcdH1cblxuXHRcdFx0aSA9IGtleS5sZW5ndGg7XG5cblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRkZWxldGUgY2FjaGVbIGtleVsgaSBdIF07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHRoZSBleHBhbmRvIGlmIHRoZXJlJ3Mgbm8gbW9yZSBkYXRhXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCB8fCBqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKSApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NVxuXHRcdFx0Ly8gV2Via2l0ICYgQmxpbmsgcGVyZm9ybWFuY2Ugc3VmZmVycyB3aGVuIGRlbGV0aW5nIHByb3BlcnRpZXNcblx0XHRcdC8vIGZyb20gRE9NIG5vZGVzLCBzbyBzZXQgdG8gdW5kZWZpbmVkIGluc3RlYWRcblx0XHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM3ODYwNyAoYnVnIHJlc3RyaWN0ZWQpXG5cdFx0XHRpZiAoIG93bmVyLm5vZGVUeXBlICkge1xuXHRcdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWxldGUgb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblx0aGFzRGF0YTogZnVuY3Rpb24oIG93bmVyICkge1xuXHRcdHZhciBjYWNoZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblx0XHRyZXR1cm4gY2FjaGUgIT09IHVuZGVmaW5lZCAmJiAhalF1ZXJ5LmlzRW1wdHlPYmplY3QoIGNhY2hlICk7XG5cdH1cbn07XG52YXIgZGF0YVByaXYgPSBuZXcgRGF0YSgpO1xuXG52YXIgZGF0YVVzZXIgPSBuZXcgRGF0YSgpO1xuXG5cblxuLy9cdEltcGxlbWVudGF0aW9uIFN1bW1hcnlcbi8vXG4vL1x0MS4gRW5mb3JjZSBBUEkgc3VyZmFjZSBhbmQgc2VtYW50aWMgY29tcGF0aWJpbGl0eSB3aXRoIDEuOS54IGJyYW5jaFxuLy9cdDIuIEltcHJvdmUgdGhlIG1vZHVsZSdzIG1haW50YWluYWJpbGl0eSBieSByZWR1Y2luZyB0aGUgc3RvcmFnZVxuLy9cdFx0cGF0aHMgdG8gYSBzaW5nbGUgbWVjaGFuaXNtLlxuLy9cdDMuIFVzZSB0aGUgc2FtZSBzaW5nbGUgbWVjaGFuaXNtIHRvIHN1cHBvcnQgXCJwcml2YXRlXCIgYW5kIFwidXNlclwiIGRhdGEuXG4vL1x0NC4gX05ldmVyXyBleHBvc2UgXCJwcml2YXRlXCIgZGF0YSB0byB1c2VyIGNvZGUgKFRPRE86IERyb3AgX2RhdGEsIF9yZW1vdmVEYXRhKVxuLy9cdDUuIEF2b2lkIGV4cG9zaW5nIGltcGxlbWVudGF0aW9uIGRldGFpbHMgb24gdXNlciBvYmplY3RzIChlZy4gZXhwYW5kbyBwcm9wZXJ0aWVzKVxuLy9cdDYuIFByb3ZpZGUgYSBjbGVhciBwYXRoIGZvciBpbXBsZW1lbnRhdGlvbiB1cGdyYWRlIHRvIFdlYWtNYXAgaW4gMjAxNFxuXG52YXIgcmJyYWNlID0gL14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFxuXHRybXVsdGlEYXNoID0gL1tBLVpdL2c7XG5cbmZ1bmN0aW9uIGdldERhdGEoIGRhdGEgKSB7XG5cdGlmICggZGF0YSA9PT0gXCJ0cnVlXCIgKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRpZiAoIGRhdGEgPT09IFwiZmFsc2VcIiApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoIGRhdGEgPT09IFwibnVsbFwiICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gT25seSBjb252ZXJ0IHRvIGEgbnVtYmVyIGlmIGl0IGRvZXNuJ3QgY2hhbmdlIHRoZSBzdHJpbmdcblx0aWYgKCBkYXRhID09PSArZGF0YSArIFwiXCIgKSB7XG5cdFx0cmV0dXJuICtkYXRhO1xuXHR9XG5cblx0aWYgKCByYnJhY2UudGVzdCggZGF0YSApICkge1xuXHRcdHJldHVybiBKU09OLnBhcnNlKCBkYXRhICk7XG5cdH1cblxuXHRyZXR1cm4gZGF0YTtcbn1cblxuZnVuY3Rpb24gZGF0YUF0dHIoIGVsZW0sIGtleSwgZGF0YSApIHtcblx0dmFyIG5hbWU7XG5cblx0Ly8gSWYgbm90aGluZyB3YXMgZm91bmQgaW50ZXJuYWxseSwgdHJ5IHRvIGZldGNoIGFueVxuXHQvLyBkYXRhIGZyb20gdGhlIEhUTUw1IGRhdGEtKiBhdHRyaWJ1dGVcblx0aWYgKCBkYXRhID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRuYW1lID0gXCJkYXRhLVwiICsga2V5LnJlcGxhY2UoIHJtdWx0aURhc2gsIFwiLSQmXCIgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGRhdGEgPSBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSApO1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRhdGEgPSBnZXREYXRhKCBkYXRhICk7XG5cdFx0XHR9IGNhdGNoICggZSApIHt9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGRhdGEgc28gaXQgaXNuJ3QgY2hhbmdlZCBsYXRlclxuXHRcdFx0ZGF0YVVzZXIuc2V0KCBlbGVtLCBrZXksIGRhdGEgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGE7XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0aGFzRGF0YTogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRhdGFVc2VyLmhhc0RhdGEoIGVsZW0gKSB8fCBkYXRhUHJpdi5oYXNEYXRhKCBlbGVtICk7XG5cdH0sXG5cblx0ZGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIGRhdGFVc2VyLmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFVc2VyLnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9LFxuXG5cdC8vIFRPRE86IE5vdyB0aGF0IGFsbCBjYWxscyB0byBfZGF0YSBhbmQgX3JlbW92ZURhdGEgaGF2ZSBiZWVuIHJlcGxhY2VkXG5cdC8vIHdpdGggZGlyZWN0IGNhbGxzIHRvIGRhdGFQcml2IG1ldGhvZHMsIHRoZXNlIGNhbiBiZSBkZXByZWNhdGVkLlxuXHRfZGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGRhdGEgKSB7XG5cdFx0cmV0dXJuIGRhdGFQcml2LmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdF9yZW1vdmVEYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIG5hbWUgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGRhdGE6IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdHZhciBpLCBuYW1lLCBkYXRhLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXSxcblx0XHRcdGF0dHJzID0gZWxlbSAmJiBlbGVtLmF0dHJpYnV0ZXM7XG5cblx0XHQvLyBHZXRzIGFsbCB2YWx1ZXNcblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCB0aGlzLmxlbmd0aCApIHtcblx0XHRcdFx0ZGF0YSA9IGRhdGFVc2VyLmdldCggZWxlbSApO1xuXG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAhZGF0YVByaXYuZ2V0KCBlbGVtLCBcImhhc0RhdGFBdHRyc1wiICkgKSB7XG5cdFx0XHRcdFx0aSA9IGF0dHJzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgMTEgb25seVxuXHRcdFx0XHRcdFx0Ly8gVGhlIGF0dHJzIGVsZW1lbnRzIGNhbiBiZSBudWxsICgjMTQ4OTQpXG5cdFx0XHRcdFx0XHRpZiAoIGF0dHJzWyBpIF0gKSB7XG5cdFx0XHRcdFx0XHRcdG5hbWUgPSBhdHRyc1sgaSBdLm5hbWU7XG5cdFx0XHRcdFx0XHRcdGlmICggbmFtZS5pbmRleE9mKCBcImRhdGEtXCIgKSA9PT0gMCApIHtcblx0XHRcdFx0XHRcdFx0XHRuYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggbmFtZS5zbGljZSggNSApICk7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YUF0dHIoIGVsZW0sIG5hbWUsIGRhdGFbIG5hbWUgXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdC8vIFNldHMgbXVsdGlwbGUgdmFsdWVzXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFVc2VyLnNldCggdGhpcywga2V5ICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGRhdGE7XG5cblx0XHRcdC8vIFRoZSBjYWxsaW5nIGpRdWVyeSBvYmplY3QgKGVsZW1lbnQgbWF0Y2hlcykgaXMgbm90IGVtcHR5XG5cdFx0XHQvLyAoYW5kIHRoZXJlZm9yZSBoYXMgYW4gZWxlbWVudCBhcHBlYXJzIGF0IHRoaXNbIDAgXSkgYW5kIHRoZVxuXHRcdFx0Ly8gYHZhbHVlYCBwYXJhbWV0ZXIgd2FzIG5vdCB1bmRlZmluZWQuIEFuIGVtcHR5IGpRdWVyeSBvYmplY3Rcblx0XHRcdC8vIHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGZvciBlbGVtID0gdGhpc1sgMCBdIHdoaWNoIHdpbGxcblx0XHRcdC8vIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhbiBhdHRlbXB0IHRvIHJlYWQgYSBkYXRhIGNhY2hlIGlzIG1hZGUuXG5cdFx0XHRpZiAoIGVsZW0gJiYgdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIGdldCBkYXRhIGZyb20gdGhlIGNhY2hlXG5cdFx0XHRcdC8vIFRoZSBrZXkgd2lsbCBhbHdheXMgYmUgY2FtZWxDYXNlZCBpbiBEYXRhXG5cdFx0XHRcdGRhdGEgPSBkYXRhVXNlci5nZXQoIGVsZW0sIGtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gXCJkaXNjb3ZlclwiIHRoZSBkYXRhIGluXG5cdFx0XHRcdC8vIEhUTUw1IGN1c3RvbSBkYXRhLSogYXR0cnNcblx0XHRcdFx0ZGF0YSA9IGRhdGFBdHRyKCBlbGVtLCBrZXkgKTtcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBXZSB0cmllZCByZWFsbHkgaGFyZCwgYnV0IHRoZSBkYXRhIGRvZXNuJ3QgZXhpc3QuXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IHRoZSBkYXRhLi4uXG5cdFx0XHR0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIFdlIGFsd2F5cyBzdG9yZSB0aGUgY2FtZWxDYXNlZCBrZXlcblx0XHRcdFx0ZGF0YVVzZXIuc2V0KCB0aGlzLCBrZXksIHZhbHVlICk7XG5cdFx0XHR9ICk7XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxLCBudWxsLCB0cnVlICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGtleSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGRhdGFVc2VyLnJlbW92ZSggdGhpcywga2V5ICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIHF1ZXVlO1xuXG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0dHlwZSA9ICggdHlwZSB8fCBcImZ4XCIgKSArIFwicXVldWVcIjtcblx0XHRcdHF1ZXVlID0gZGF0YVByaXYuZ2V0KCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdC8vIFNwZWVkIHVwIGRlcXVldWUgYnkgZ2V0dGluZyBvdXQgcXVpY2tseSBpZiB0aGlzIGlzIGp1c3QgYSBsb29rdXBcblx0XHRcdGlmICggZGF0YSApIHtcblx0XHRcdFx0aWYgKCAhcXVldWUgfHwgalF1ZXJ5LmlzQXJyYXkoIGRhdGEgKSApIHtcblx0XHRcdFx0XHRxdWV1ZSA9IGRhdGFQcml2LmFjY2VzcyggZWxlbSwgdHlwZSwgalF1ZXJ5Lm1ha2VBcnJheSggZGF0YSApICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cXVldWUucHVzaCggZGF0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcXVldWUgfHwgW107XG5cdFx0fVxuXHR9LFxuXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xuXHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggZWxlbSwgdHlwZSApLFxuXHRcdFx0c3RhcnRMZW5ndGggPSBxdWV1ZS5sZW5ndGgsXG5cdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCksXG5cdFx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgdHlwZSApLFxuXHRcdFx0bmV4dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggZWxlbSwgdHlwZSApO1xuXHRcdFx0fTtcblxuXHRcdC8vIElmIHRoZSBmeCBxdWV1ZSBpcyBkZXF1ZXVlZCwgYWx3YXlzIHJlbW92ZSB0aGUgcHJvZ3Jlc3Mgc2VudGluZWxcblx0XHRpZiAoIGZuID09PSBcImlucHJvZ3Jlc3NcIiApIHtcblx0XHRcdGZuID0gcXVldWUuc2hpZnQoKTtcblx0XHRcdHN0YXJ0TGVuZ3RoLS07XG5cdFx0fVxuXG5cdFx0aWYgKCBmbiApIHtcblxuXHRcdFx0Ly8gQWRkIGEgcHJvZ3Jlc3Mgc2VudGluZWwgdG8gcHJldmVudCB0aGUgZnggcXVldWUgZnJvbSBiZWluZ1xuXHRcdFx0Ly8gYXV0b21hdGljYWxseSBkZXF1ZXVlZFxuXHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgKSB7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoIFwiaW5wcm9ncmVzc1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENsZWFyIHVwIHRoZSBsYXN0IHF1ZXVlIHN0b3AgZnVuY3Rpb25cblx0XHRcdGRlbGV0ZSBob29rcy5zdG9wO1xuXHRcdFx0Zm4uY2FsbCggZWxlbSwgbmV4dCwgaG9va3MgKTtcblx0XHR9XG5cblx0XHRpZiAoICFzdGFydExlbmd0aCAmJiBob29rcyApIHtcblx0XHRcdGhvb2tzLmVtcHR5LmZpcmUoKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gTm90IHB1YmxpYyAtIGdlbmVyYXRlIGEgcXVldWVIb29rcyBvYmplY3QsIG9yIHJldHVybiB0aGUgY3VycmVudCBvbmVcblx0X3F1ZXVlSG9va3M6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xuXHRcdHZhciBrZXkgPSB0eXBlICsgXCJxdWV1ZUhvb2tzXCI7XG5cdFx0cmV0dXJuIGRhdGFQcml2LmdldCggZWxlbSwga2V5ICkgfHwgZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBrZXksIHtcblx0XHRcdGVtcHR5OiBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKS5hZGQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFsgdHlwZSArIFwicXVldWVcIiwga2V5IF0gKTtcblx0XHRcdH0gKVxuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHF1ZXVlOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgc2V0dGVyID0gMjtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRkYXRhID0gdHlwZTtcblx0XHRcdHR5cGUgPSBcImZ4XCI7XG5cdFx0XHRzZXR0ZXItLTtcblx0XHR9XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPCBzZXR0ZXIgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnF1ZXVlKCB0aGlzWyAwIF0sIHR5cGUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdHRoaXMgOlxuXHRcdFx0dGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBkYXRhICk7XG5cblx0XHRcdFx0Ly8gRW5zdXJlIGEgaG9va3MgZm9yIHRoaXMgcXVldWVcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgJiYgcXVldWVbIDAgXSAhPT0gXCJpbnByb2dyZXNzXCIgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHR9LFxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0fSApO1xuXHR9LFxuXHRjbGVhclF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdH0sXG5cblx0Ly8gR2V0IGEgcHJvbWlzZSByZXNvbHZlZCB3aGVuIHF1ZXVlcyBvZiBhIGNlcnRhaW4gdHlwZVxuXHQvLyBhcmUgZW1wdGllZCAoZnggaXMgdGhlIHR5cGUgYnkgZGVmYXVsdClcblx0cHJvbWlzZTogZnVuY3Rpb24oIHR5cGUsIG9iaiApIHtcblx0XHR2YXIgdG1wLFxuXHRcdFx0Y291bnQgPSAxLFxuXHRcdFx0ZGVmZXIgPSBqUXVlcnkuRGVmZXJyZWQoKSxcblx0XHRcdGVsZW1lbnRzID0gdGhpcyxcblx0XHRcdGkgPSB0aGlzLmxlbmd0aCxcblx0XHRcdHJlc29sdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhKCAtLWNvdW50ICkgKSB7XG5cdFx0XHRcdFx0ZGVmZXIucmVzb2x2ZVdpdGgoIGVsZW1lbnRzLCBbIGVsZW1lbnRzIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRvYmogPSB0eXBlO1xuXHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHR0bXAgPSBkYXRhUHJpdi5nZXQoIGVsZW1lbnRzWyBpIF0sIHR5cGUgKyBcInF1ZXVlSG9va3NcIiApO1xuXHRcdFx0aWYgKCB0bXAgJiYgdG1wLmVtcHR5ICkge1xuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0XHR0bXAuZW1wdHkuYWRkKCByZXNvbHZlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc29sdmUoKTtcblx0XHRyZXR1cm4gZGVmZXIucHJvbWlzZSggb2JqICk7XG5cdH1cbn0gKTtcbnZhciBwbnVtID0gKCAvWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLyApLnNvdXJjZTtcblxudmFyIHJjc3NOdW0gPSBuZXcgUmVnRXhwKCBcIl4oPzooWystXSk9fCkoXCIgKyBwbnVtICsgXCIpKFthLXolXSopJFwiLCBcImlcIiApO1xuXG5cbnZhciBjc3NFeHBhbmQgPSBbIFwiVG9wXCIsIFwiUmlnaHRcIiwgXCJCb3R0b21cIiwgXCJMZWZ0XCIgXTtcblxudmFyIGlzSGlkZGVuV2l0aGluVHJlZSA9IGZ1bmN0aW9uKCBlbGVtLCBlbCApIHtcblxuXHRcdC8vIGlzSGlkZGVuV2l0aGluVHJlZSBtaWdodCBiZSBjYWxsZWQgZnJvbSBqUXVlcnkjZmlsdGVyIGZ1bmN0aW9uO1xuXHRcdC8vIGluIHRoYXQgY2FzZSwgZWxlbWVudCB3aWxsIGJlIHNlY29uZCBhcmd1bWVudFxuXHRcdGVsZW0gPSBlbCB8fCBlbGVtO1xuXG5cdFx0Ly8gSW5saW5lIHN0eWxlIHRydW1wcyBhbGxcblx0XHRyZXR1cm4gZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fFxuXHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIlwiICYmXG5cblx0XHRcdC8vIE90aGVyd2lzZSwgY2hlY2sgY29tcHV0ZWQgc3R5bGVcblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00MyAtIDQ1XG5cdFx0XHQvLyBEaXNjb25uZWN0ZWQgZWxlbWVudHMgY2FuIGhhdmUgY29tcHV0ZWQgZGlzcGxheTogbm9uZSwgc28gZmlyc3QgY29uZmlybSB0aGF0IGVsZW0gaXNcblx0XHRcdC8vIGluIHRoZSBkb2N1bWVudC5cblx0XHRcdGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICkgJiZcblxuXHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSA9PT0gXCJub25lXCI7XG5cdH07XG5cbnZhciBzd2FwID0gZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrLCBhcmdzICkge1xuXHR2YXIgcmV0LCBuYW1lLFxuXHRcdG9sZCA9IHt9O1xuXG5cdC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0b2xkWyBuYW1lIF0gPSBlbGVtLnN0eWxlWyBuYW1lIF07XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb3B0aW9uc1sgbmFtZSBdO1xuXHR9XG5cblx0cmV0ID0gY2FsbGJhY2suYXBwbHkoIGVsZW0sIGFyZ3MgfHwgW10gKTtcblxuXHQvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IG9sZFsgbmFtZSBdO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn07XG5cblxuXG5cbmZ1bmN0aW9uIGFkanVzdENTUyggZWxlbSwgcHJvcCwgdmFsdWVQYXJ0cywgdHdlZW4gKSB7XG5cdHZhciBhZGp1c3RlZCxcblx0XHRzY2FsZSA9IDEsXG5cdFx0bWF4SXRlcmF0aW9ucyA9IDIwLFxuXHRcdGN1cnJlbnRWYWx1ZSA9IHR3ZWVuID9cblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdHdlZW4uY3VyKCk7XG5cdFx0XHR9IDpcblx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5LmNzcyggZWxlbSwgcHJvcCwgXCJcIiApO1xuXHRcdFx0fSxcblx0XHRpbml0aWFsID0gY3VycmVudFZhbHVlKCksXG5cdFx0dW5pdCA9IHZhbHVlUGFydHMgJiYgdmFsdWVQYXJ0c1sgMyBdIHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApLFxuXG5cdFx0Ly8gU3RhcnRpbmcgdmFsdWUgY29tcHV0YXRpb24gaXMgcmVxdWlyZWQgZm9yIHBvdGVudGlhbCB1bml0IG1pc21hdGNoZXNcblx0XHRpbml0aWFsSW5Vbml0ID0gKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gfHwgdW5pdCAhPT0gXCJweFwiICYmICtpbml0aWFsICkgJiZcblx0XHRcdHJjc3NOdW0uZXhlYyggalF1ZXJ5LmNzcyggZWxlbSwgcHJvcCApICk7XG5cblx0aWYgKCBpbml0aWFsSW5Vbml0ICYmIGluaXRpYWxJblVuaXRbIDMgXSAhPT0gdW5pdCApIHtcblxuXHRcdC8vIFRydXN0IHVuaXRzIHJlcG9ydGVkIGJ5IGpRdWVyeS5jc3Ncblx0XHR1bml0ID0gdW5pdCB8fCBpbml0aWFsSW5Vbml0WyAzIF07XG5cblx0XHQvLyBNYWtlIHN1cmUgd2UgdXBkYXRlIHRoZSB0d2VlbiBwcm9wZXJ0aWVzIGxhdGVyIG9uXG5cdFx0dmFsdWVQYXJ0cyA9IHZhbHVlUGFydHMgfHwgW107XG5cblx0XHQvLyBJdGVyYXRpdmVseSBhcHByb3hpbWF0ZSBmcm9tIGEgbm9uemVybyBzdGFydGluZyBwb2ludFxuXHRcdGluaXRpYWxJblVuaXQgPSAraW5pdGlhbCB8fCAxO1xuXG5cdFx0ZG8ge1xuXG5cdFx0XHQvLyBJZiBwcmV2aW91cyBpdGVyYXRpb24gemVyb2VkIG91dCwgZG91YmxlIHVudGlsIHdlIGdldCAqc29tZXRoaW5nKi5cblx0XHRcdC8vIFVzZSBzdHJpbmcgZm9yIGRvdWJsaW5nIHNvIHdlIGRvbid0IGFjY2lkZW50YWxseSBzZWUgc2NhbGUgYXMgdW5jaGFuZ2VkIGJlbG93XG5cdFx0XHRzY2FsZSA9IHNjYWxlIHx8IFwiLjVcIjtcblxuXHRcdFx0Ly8gQWRqdXN0IGFuZCBhcHBseVxuXHRcdFx0aW5pdGlhbEluVW5pdCA9IGluaXRpYWxJblVuaXQgLyBzY2FsZTtcblx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCwgaW5pdGlhbEluVW5pdCArIHVuaXQgKTtcblxuXHRcdC8vIFVwZGF0ZSBzY2FsZSwgdG9sZXJhdGluZyB6ZXJvIG9yIE5hTiBmcm9tIHR3ZWVuLmN1cigpXG5cdFx0Ly8gQnJlYWsgdGhlIGxvb3AgaWYgc2NhbGUgaXMgdW5jaGFuZ2VkIG9yIHBlcmZlY3QsIG9yIGlmIHdlJ3ZlIGp1c3QgaGFkIGVub3VnaC5cblx0XHR9IHdoaWxlIChcblx0XHRcdHNjYWxlICE9PSAoIHNjYWxlID0gY3VycmVudFZhbHVlKCkgLyBpbml0aWFsICkgJiYgc2NhbGUgIT09IDEgJiYgLS1tYXhJdGVyYXRpb25zXG5cdFx0KTtcblx0fVxuXG5cdGlmICggdmFsdWVQYXJ0cyApIHtcblx0XHRpbml0aWFsSW5Vbml0ID0gK2luaXRpYWxJblVuaXQgfHwgK2luaXRpYWwgfHwgMDtcblxuXHRcdC8vIEFwcGx5IHJlbGF0aXZlIG9mZnNldCAoKz0vLT0pIGlmIHNwZWNpZmllZFxuXHRcdGFkanVzdGVkID0gdmFsdWVQYXJ0c1sgMSBdID9cblx0XHRcdGluaXRpYWxJblVuaXQgKyAoIHZhbHVlUGFydHNbIDEgXSArIDEgKSAqIHZhbHVlUGFydHNbIDIgXSA6XG5cdFx0XHQrdmFsdWVQYXJ0c1sgMiBdO1xuXHRcdGlmICggdHdlZW4gKSB7XG5cdFx0XHR0d2Vlbi51bml0ID0gdW5pdDtcblx0XHRcdHR3ZWVuLnN0YXJ0ID0gaW5pdGlhbEluVW5pdDtcblx0XHRcdHR3ZWVuLmVuZCA9IGFkanVzdGVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYWRqdXN0ZWQ7XG59XG5cblxudmFyIGRlZmF1bHREaXNwbGF5TWFwID0ge307XG5cbmZ1bmN0aW9uIGdldERlZmF1bHREaXNwbGF5KCBlbGVtICkge1xuXHR2YXIgdGVtcCxcblx0XHRkb2MgPSBlbGVtLm93bmVyRG9jdW1lbnQsXG5cdFx0bm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLFxuXHRcdGRpc3BsYXkgPSBkZWZhdWx0RGlzcGxheU1hcFsgbm9kZU5hbWUgXTtcblxuXHRpZiAoIGRpc3BsYXkgKSB7XG5cdFx0cmV0dXJuIGRpc3BsYXk7XG5cdH1cblxuXHR0ZW1wID0gZG9jLmJvZHkuYXBwZW5kQ2hpbGQoIGRvYy5jcmVhdGVFbGVtZW50KCBub2RlTmFtZSApICk7XG5cdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCB0ZW1wLCBcImRpc3BsYXlcIiApO1xuXG5cdHRlbXAucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggdGVtcCApO1xuXG5cdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0ZGlzcGxheSA9IFwiYmxvY2tcIjtcblx0fVxuXHRkZWZhdWx0RGlzcGxheU1hcFsgbm9kZU5hbWUgXSA9IGRpc3BsYXk7XG5cblx0cmV0dXJuIGRpc3BsYXk7XG59XG5cbmZ1bmN0aW9uIHNob3dIaWRlKCBlbGVtZW50cywgc2hvdyApIHtcblx0dmFyIGRpc3BsYXksIGVsZW0sXG5cdFx0dmFsdWVzID0gW10sXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGVsZW1lbnRzLmxlbmd0aDtcblxuXHQvLyBEZXRlcm1pbmUgbmV3IGRpc3BsYXkgdmFsdWUgZm9yIGVsZW1lbnRzIHRoYXQgbmVlZCB0byBjaGFuZ2Vcblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRlbGVtID0gZWxlbWVudHNbIGluZGV4IF07XG5cdFx0aWYgKCAhZWxlbS5zdHlsZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGRpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG5cdFx0aWYgKCBzaG93ICkge1xuXG5cdFx0XHQvLyBTaW5jZSB3ZSBmb3JjZSB2aXNpYmlsaXR5IHVwb24gY2FzY2FkZS1oaWRkZW4gZWxlbWVudHMsIGFuIGltbWVkaWF0ZSAoYW5kIHNsb3cpXG5cdFx0XHQvLyBjaGVjayBpcyByZXF1aXJlZCBpbiB0aGlzIGZpcnN0IGxvb3AgdW5sZXNzIHdlIGhhdmUgYSBub25lbXB0eSBkaXNwbGF5IHZhbHVlIChlaXRoZXJcblx0XHRcdC8vIGlubGluZSBvciBhYm91dC10by1iZS1yZXN0b3JlZClcblx0XHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGRhdGFQcml2LmdldCggZWxlbSwgXCJkaXNwbGF5XCIgKSB8fCBudWxsO1xuXHRcdFx0XHRpZiAoICF2YWx1ZXNbIGluZGV4IF0gKSB7XG5cdFx0XHRcdFx0ZWxlbS5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKCBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtICkgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IGdldERlZmF1bHREaXNwbGF5KCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICggZGlzcGxheSAhPT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdHZhbHVlc1sgaW5kZXggXSA9IFwibm9uZVwiO1xuXG5cdFx0XHRcdC8vIFJlbWVtYmVyIHdoYXQgd2UncmUgb3ZlcndyaXRpbmdcblx0XHRcdFx0ZGF0YVByaXYuc2V0KCBlbGVtLCBcImRpc3BsYXlcIiwgZGlzcGxheSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFNldCB0aGUgZGlzcGxheSBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZWNvbmQgbG9vcCB0byBhdm9pZCBjb25zdGFudCByZWZsb3dcblx0Zm9yICggaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRpZiAoIHZhbHVlc1sgaW5kZXggXSAhPSBudWxsICkge1xuXHRcdFx0ZWxlbWVudHNbIGluZGV4IF0uc3R5bGUuZGlzcGxheSA9IHZhbHVlc1sgaW5kZXggXTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudHM7XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0c2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNob3dIaWRlKCB0aGlzLCB0cnVlICk7XG5cdH0sXG5cdGhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcyApO1xuXHR9LFxuXHR0b2dnbGU6IGZ1bmN0aW9uKCBzdGF0ZSApIHtcblx0XHRpZiAoIHR5cGVvZiBzdGF0ZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBpc0hpZGRlbldpdGhpblRyZWUoIHRoaXMgKSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuc2hvdygpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuaGlkZSgpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufSApO1xudmFyIHJjaGVja2FibGVUeXBlID0gKCAvXig/OmNoZWNrYm94fHJhZGlvKSQvaSApO1xuXG52YXIgcnRhZ05hbWUgPSAoIC88KFthLXpdW15cXC9cXDA+XFx4MjBcXHRcXHJcXG5cXGZdKykvaSApO1xuXG52YXIgcnNjcmlwdFR5cGUgPSAoIC9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2kgKTtcblxuXG5cbi8vIFdlIGhhdmUgdG8gY2xvc2UgdGhlc2UgdGFncyB0byBzdXBwb3J0IFhIVE1MICgjMTMyMDApXG52YXIgd3JhcE1hcCA9IHtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRvcHRpb246IFsgMSwgXCI8c2VsZWN0IG11bHRpcGxlPSdtdWx0aXBsZSc+XCIsIFwiPC9zZWxlY3Q+XCIgXSxcblxuXHQvLyBYSFRNTCBwYXJzZXJzIGRvIG5vdCBtYWdpY2FsbHkgaW5zZXJ0IGVsZW1lbnRzIGluIHRoZVxuXHQvLyBzYW1lIHdheSB0aGF0IHRhZyBzb3VwIHBhcnNlcnMgZG8uIFNvIHdlIGNhbm5vdCBzaG9ydGVuXG5cdC8vIHRoaXMgYnkgb21pdHRpbmcgPHRib2R5PiBvciBvdGhlciByZXF1aXJlZCBlbGVtZW50cy5cblx0dGhlYWQ6IFsgMSwgXCI8dGFibGU+XCIsIFwiPC90YWJsZT5cIiBdLFxuXHRjb2w6IFsgMiwgXCI8dGFibGU+PGNvbGdyb3VwPlwiLCBcIjwvY29sZ3JvdXA+PC90YWJsZT5cIiBdLFxuXHR0cjogWyAyLCBcIjx0YWJsZT48dGJvZHk+XCIsIFwiPC90Ym9keT48L3RhYmxlPlwiIF0sXG5cdHRkOiBbIDMsIFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsIFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCIgXSxcblxuXHRfZGVmYXVsdDogWyAwLCBcIlwiLCBcIlwiIF1cbn07XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG53cmFwTWFwLm9wdGdyb3VwID0gd3JhcE1hcC5vcHRpb247XG5cbndyYXBNYXAudGJvZHkgPSB3cmFwTWFwLnRmb290ID0gd3JhcE1hcC5jb2xncm91cCA9IHdyYXBNYXAuY2FwdGlvbiA9IHdyYXBNYXAudGhlYWQ7XG53cmFwTWFwLnRoID0gd3JhcE1hcC50ZDtcblxuXG5mdW5jdGlvbiBnZXRBbGwoIGNvbnRleHQsIHRhZyApIHtcblxuXHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdC8vIFVzZSB0eXBlb2YgdG8gYXZvaWQgemVyby1hcmd1bWVudCBtZXRob2QgaW52b2NhdGlvbiBvbiBob3N0IG9iamVjdHMgKCMxNTE1MSlcblx0dmFyIHJldDtcblxuXHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdHJldCA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyB8fCBcIipcIiApO1xuXG5cdH0gZWxzZSBpZiAoIHR5cGVvZiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0cmV0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCB0YWcgfHwgXCIqXCIgKTtcblxuXHR9IGVsc2Uge1xuXHRcdHJldCA9IFtdO1xuXHR9XG5cblx0aWYgKCB0YWcgPT09IHVuZGVmaW5lZCB8fCB0YWcgJiYgalF1ZXJ5Lm5vZGVOYW1lKCBjb250ZXh0LCB0YWcgKSApIHtcblx0XHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbIGNvbnRleHQgXSwgcmV0ICk7XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufVxuXG5cbi8vIE1hcmsgc2NyaXB0cyBhcyBoYXZpbmcgYWxyZWFkeSBiZWVuIGV2YWx1YXRlZFxuZnVuY3Rpb24gc2V0R2xvYmFsRXZhbCggZWxlbXMsIHJlZkVsZW1lbnRzICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bCA9IGVsZW1zLmxlbmd0aDtcblxuXHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0ZGF0YVByaXYuc2V0KFxuXHRcdFx0ZWxlbXNbIGkgXSxcblx0XHRcdFwiZ2xvYmFsRXZhbFwiLFxuXHRcdFx0IXJlZkVsZW1lbnRzIHx8IGRhdGFQcml2LmdldCggcmVmRWxlbWVudHNbIGkgXSwgXCJnbG9iYWxFdmFsXCIgKVxuXHRcdCk7XG5cdH1cbn1cblxuXG52YXIgcmh0bWwgPSAvPHwmIz9cXHcrOy87XG5cbmZ1bmN0aW9uIGJ1aWxkRnJhZ21lbnQoIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24sIGlnbm9yZWQgKSB7XG5cdHZhciBlbGVtLCB0bXAsIHRhZywgd3JhcCwgY29udGFpbnMsIGosXG5cdFx0ZnJhZ21lbnQgPSBjb250ZXh0LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRub2RlcyA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGVsZW0gPSBlbGVtc1sgaSBdO1xuXG5cdFx0aWYgKCBlbGVtIHx8IGVsZW0gPT09IDAgKSB7XG5cblx0XHRcdC8vIEFkZCBub2RlcyBkaXJlY3RseVxuXHRcdFx0aWYgKCBqUXVlcnkudHlwZSggZWxlbSApID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIGVsZW0ubm9kZVR5cGUgPyBbIGVsZW0gXSA6IGVsZW0gKTtcblxuXHRcdFx0Ly8gQ29udmVydCBub24taHRtbCBpbnRvIGEgdGV4dCBub2RlXG5cdFx0XHR9IGVsc2UgaWYgKCAhcmh0bWwudGVzdCggZWxlbSApICkge1xuXHRcdFx0XHRub2Rlcy5wdXNoKCBjb250ZXh0LmNyZWF0ZVRleHROb2RlKCBlbGVtICkgKTtcblxuXHRcdFx0Ly8gQ29udmVydCBodG1sIGludG8gRE9NIG5vZGVzXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0bXAgPSB0bXAgfHwgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGNvbnRleHQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICk7XG5cblx0XHRcdFx0Ly8gRGVzZXJpYWxpemUgYSBzdGFuZGFyZCByZXByZXNlbnRhdGlvblxuXHRcdFx0XHR0YWcgPSAoIHJ0YWdOYW1lLmV4ZWMoIGVsZW0gKSB8fCBbIFwiXCIsIFwiXCIgXSApWyAxIF0udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0d3JhcCA9IHdyYXBNYXBbIHRhZyBdIHx8IHdyYXBNYXAuX2RlZmF1bHQ7XG5cdFx0XHRcdHRtcC5pbm5lckhUTUwgPSB3cmFwWyAxIF0gKyBqUXVlcnkuaHRtbFByZWZpbHRlciggZWxlbSApICsgd3JhcFsgMiBdO1xuXG5cdFx0XHRcdC8vIERlc2NlbmQgdGhyb3VnaCB3cmFwcGVycyB0byB0aGUgcmlnaHQgY29udGVudFxuXHRcdFx0XHRqID0gd3JhcFsgMCBdO1xuXHRcdFx0XHR3aGlsZSAoIGotLSApIHtcblx0XHRcdFx0XHR0bXAgPSB0bXAubGFzdENoaWxkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBub2RlcywgdG1wLmNoaWxkTm9kZXMgKTtcblxuXHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgdG9wLWxldmVsIGNvbnRhaW5lclxuXHRcdFx0XHR0bXAgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuXG5cdFx0XHRcdC8vIEVuc3VyZSB0aGUgY3JlYXRlZCBub2RlcyBhcmUgb3JwaGFuZWQgKCMxMjM5Milcblx0XHRcdFx0dG1wLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZW1vdmUgd3JhcHBlciBmcm9tIGZyYWdtZW50XG5cdGZyYWdtZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuXHRpID0gMDtcblx0d2hpbGUgKCAoIGVsZW0gPSBub2Rlc1sgaSsrIF0gKSApIHtcblxuXHRcdC8vIFNraXAgZWxlbWVudHMgYWxyZWFkeSBpbiB0aGUgY29udGV4dCBjb2xsZWN0aW9uICh0cmFjLTQwODcpXG5cdFx0aWYgKCBzZWxlY3Rpb24gJiYgalF1ZXJ5LmluQXJyYXkoIGVsZW0sIHNlbGVjdGlvbiApID4gLTEgKSB7XG5cdFx0XHRpZiAoIGlnbm9yZWQgKSB7XG5cdFx0XHRcdGlnbm9yZWQucHVzaCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Y29udGFpbnMgPSBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApO1xuXG5cdFx0Ly8gQXBwZW5kIHRvIGZyYWdtZW50XG5cdFx0dG1wID0gZ2V0QWxsKCBmcmFnbWVudC5hcHBlbmRDaGlsZCggZWxlbSApLCBcInNjcmlwdFwiICk7XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0aWYgKCBjb250YWlucyApIHtcblx0XHRcdHNldEdsb2JhbEV2YWwoIHRtcCApO1xuXHRcdH1cblxuXHRcdC8vIENhcHR1cmUgZXhlY3V0YWJsZXNcblx0XHRpZiAoIHNjcmlwdHMgKSB7XG5cdFx0XHRqID0gMDtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gdG1wWyBqKysgXSApICkge1xuXHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIGVsZW0udHlwZSB8fCBcIlwiICkgKSB7XG5cdFx0XHRcdFx0c2NyaXB0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZnJhZ21lbnQ7XG59XG5cblxuKCBmdW5jdGlvbigpIHtcblx0dmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuXHRcdGRpdiA9IGZyYWdtZW50LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKSxcblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcblx0Ly8gQ2hlY2sgc3RhdGUgbG9zdCBpZiB0aGUgbmFtZSBpcyBzZXQgKCMxMTIxNylcblx0Ly8gU3VwcG9ydDogV2luZG93cyBXZWIgQXBwcyAoV1dBKVxuXHQvLyBgbmFtZWAgYW5kIGB0eXBlYCBtdXN0IHVzZSAuc2V0QXR0cmlidXRlIGZvciBXV0EgKCMxNDkwMSlcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJyYWRpb1wiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJjaGVja2VkXCIsIFwiY2hlY2tlZFwiICk7XG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwidFwiICk7XG5cblx0ZGl2LmFwcGVuZENoaWxkKCBpbnB1dCApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjEgb25seVxuXHQvLyBPbGRlciBXZWJLaXQgZG9lc24ndCBjbG9uZSBjaGVja2VkIHN0YXRlIGNvcnJlY3RseSBpbiBmcmFnbWVudHNcblx0c3VwcG9ydC5jaGVja0Nsb25lID0gZGl2LmNsb25lTm9kZSggdHJ1ZSApLmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5jaGVja2VkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNYWtlIHN1cmUgdGV4dGFyZWEgKGFuZCBjaGVja2JveCkgZGVmYXVsdFZhbHVlIGlzIHByb3Blcmx5IGNsb25lZFxuXHRkaXYuaW5uZXJIVE1MID0gXCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCI7XG5cdHN1cHBvcnQubm9DbG9uZUNoZWNrZWQgPSAhIWRpdi5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO1xufSApKCk7XG52YXIgZG9jdW1lbnRFbGVtZW50ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cblxudmFyXG5cdHJrZXlFdmVudCA9IC9ea2V5Lyxcblx0cm1vdXNlRXZlbnQgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnV8ZHJhZ3xkcm9wKXxjbGljay8sXG5cdHJ0eXBlbmFtZXNwYWNlID0gL14oW14uXSopKD86XFwuKC4rKXwpLztcblxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG4vLyBTZWUgIzEzMzkzIGZvciBtb3JlIGluZm9cbmZ1bmN0aW9uIHNhZmVBY3RpdmVFbGVtZW50KCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuXHR9IGNhdGNoICggZXJyICkgeyB9XG59XG5cbmZ1bmN0aW9uIG9uKCBlbGVtLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCBvbmUgKSB7XG5cdHZhciBvcmlnRm4sIHR5cGU7XG5cblx0Ly8gVHlwZXMgY2FuIGJlIGEgbWFwIG9mIHR5cGVzL2hhbmRsZXJzXG5cdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gKCB0eXBlcy1PYmplY3QsIHNlbGVjdG9yLCBkYXRhIClcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcy1PYmplY3QsIGRhdGEgKVxuXHRcdFx0ZGF0YSA9IGRhdGEgfHwgc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdG9uKCBlbGVtLCB0eXBlLCBzZWxlY3RvciwgZGF0YSwgdHlwZXNbIHR5cGUgXSwgb25lICk7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0aWYgKCBkYXRhID09IG51bGwgJiYgZm4gPT0gbnVsbCApIHtcblxuXHRcdC8vICggdHlwZXMsIGZuIClcblx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdGRhdGEgPSBzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICggZm4gPT0gbnVsbCApIHtcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcywgc2VsZWN0b3IsIGZuIClcblx0XHRcdGZuID0gZGF0YTtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gKCB0eXBlcywgZGF0YSwgZm4gKVxuXHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHR9XG5cdGlmICggZm4gPT09IGZhbHNlICkge1xuXHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdH0gZWxzZSBpZiAoICFmbiApIHtcblx0XHRyZXR1cm4gZWxlbTtcblx0fVxuXG5cdGlmICggb25lID09PSAxICkge1xuXHRcdG9yaWdGbiA9IGZuO1xuXHRcdGZuID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHQvLyBDYW4gdXNlIGFuIGVtcHR5IHNldCwgc2luY2UgZXZlbnQgY29udGFpbnMgdGhlIGluZm9cblx0XHRcdGpRdWVyeSgpLm9mZiggZXZlbnQgKTtcblx0XHRcdHJldHVybiBvcmlnRm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdH07XG5cblx0XHQvLyBVc2Ugc2FtZSBndWlkIHNvIGNhbGxlciBjYW4gcmVtb3ZlIHVzaW5nIG9yaWdGblxuXHRcdGZuLmd1aWQgPSBvcmlnRm4uZ3VpZCB8fCAoIG9yaWdGbi5ndWlkID0galF1ZXJ5Lmd1aWQrKyApO1xuXHR9XG5cdHJldHVybiBlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdGpRdWVyeS5ldmVudC5hZGQoIHRoaXMsIHR5cGVzLCBmbiwgZGF0YSwgc2VsZWN0b3IgKTtcblx0fSApO1xufVxuXG4vKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgbWFuYWdpbmcgZXZlbnRzIC0tIG5vdCBwYXJ0IG9mIHRoZSBwdWJsaWMgaW50ZXJmYWNlLlxuICogUHJvcHMgdG8gRGVhbiBFZHdhcmRzJyBhZGRFdmVudCBsaWJyYXJ5IGZvciBtYW55IG9mIHRoZSBpZGVhcy5cbiAqL1xualF1ZXJ5LmV2ZW50ID0ge1xuXG5cdGdsb2JhbDoge30sXG5cblx0YWRkOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIGRhdGEsIHNlbGVjdG9yICkge1xuXG5cdFx0dmFyIGhhbmRsZU9iakluLCBldmVudEhhbmRsZSwgdG1wLFxuXHRcdFx0ZXZlbnRzLCB0LCBoYW5kbGVPYmosXG5cdFx0XHRzcGVjaWFsLCBoYW5kbGVycywgdHlwZSwgbmFtZXNwYWNlcywgb3JpZ1R5cGUsXG5cdFx0XHRlbGVtRGF0YSA9IGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0Ly8gRG9uJ3QgYXR0YWNoIGV2ZW50cyB0byBub0RhdGEgb3IgdGV4dC9jb21tZW50IG5vZGVzIChidXQgYWxsb3cgcGxhaW4gb2JqZWN0cylcblx0XHRpZiAoICFlbGVtRGF0YSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYW4gb2JqZWN0IG9mIGN1c3RvbSBkYXRhIGluIGxpZXUgb2YgdGhlIGhhbmRsZXJcblx0XHRpZiAoIGhhbmRsZXIuaGFuZGxlciApIHtcblx0XHRcdGhhbmRsZU9iakluID0gaGFuZGxlcjtcblx0XHRcdGhhbmRsZXIgPSBoYW5kbGVPYmpJbi5oYW5kbGVyO1xuXHRcdFx0c2VsZWN0b3IgPSBoYW5kbGVPYmpJbi5zZWxlY3Rvcjtcblx0XHR9XG5cblx0XHQvLyBFbnN1cmUgdGhhdCBpbnZhbGlkIHNlbGVjdG9ycyB0aHJvdyBleGNlcHRpb25zIGF0IGF0dGFjaCB0aW1lXG5cdFx0Ly8gRXZhbHVhdGUgYWdhaW5zdCBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBlbGVtIGlzIGEgbm9uLWVsZW1lbnQgbm9kZSAoZS5nLiwgZG9jdW1lbnQpXG5cdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggZG9jdW1lbnRFbGVtZW50LCBzZWxlY3RvciApO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBoYW5kbGVyIGhhcyBhIHVuaXF1ZSBJRCwgdXNlZCB0byBmaW5kL3JlbW92ZSBpdCBsYXRlclxuXHRcdGlmICggIWhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdGhhbmRsZXIuZ3VpZCA9IGpRdWVyeS5ndWlkKys7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdCB0aGUgZWxlbWVudCdzIGV2ZW50IHN0cnVjdHVyZSBhbmQgbWFpbiBoYW5kbGVyLCBpZiB0aGlzIGlzIHRoZSBmaXJzdFxuXHRcdGlmICggISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgPSB7fTtcblx0XHR9XG5cdFx0aWYgKCAhKCBldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSApICkge1xuXHRcdFx0ZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUgPSBmdW5jdGlvbiggZSApIHtcblxuXHRcdFx0XHQvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuXHRcdFx0XHQvLyB3aGVuIGFuIGV2ZW50IGlzIGNhbGxlZCBhZnRlciBhIHBhZ2UgaGFzIHVubG9hZGVkXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiICYmIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgIT09IGUudHlwZSA/XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LmRpc3BhdGNoLmFwcGx5KCBlbGVtLCBhcmd1bWVudHMgKSA6IHVuZGVmaW5lZDtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gSGFuZGxlIG11bHRpcGxlIGV2ZW50cyBzZXBhcmF0ZWQgYnkgYSBzcGFjZVxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBUaGVyZSAqbXVzdCogYmUgYSB0eXBlLCBubyBhdHRhY2hpbmcgbmFtZXNwYWNlLW9ubHkgaGFuZGxlcnNcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBldmVudCBjaGFuZ2VzIGl0cyB0eXBlLCB1c2UgdGhlIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBjaGFuZ2VkIHR5cGVcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXG5cdFx0XHQvLyBJZiBzZWxlY3RvciBkZWZpbmVkLCBkZXRlcm1pbmUgc3BlY2lhbCBldmVudCBhcGkgdHlwZSwgb3RoZXJ3aXNlIGdpdmVuIHR5cGVcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblxuXHRcdFx0Ly8gVXBkYXRlIHNwZWNpYWwgYmFzZWQgb24gbmV3bHkgcmVzZXQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIGhhbmRsZU9iaiBpcyBwYXNzZWQgdG8gYWxsIGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRoYW5kbGVPYmogPSBqUXVlcnkuZXh0ZW5kKCB7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdG9yaWdUeXBlOiBvcmlnVHlwZSxcblx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0aGFuZGxlcjogaGFuZGxlcixcblx0XHRcdFx0Z3VpZDogaGFuZGxlci5ndWlkLFxuXHRcdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXG5cdFx0XHRcdG5lZWRzQ29udGV4dDogc2VsZWN0b3IgJiYgalF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICksXG5cdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApXG5cdFx0XHR9LCBoYW5kbGVPYmpJbiApO1xuXG5cdFx0XHQvLyBJbml0IHRoZSBldmVudCBoYW5kbGVyIHF1ZXVlIGlmIHdlJ3JlIHRoZSBmaXJzdFxuXHRcdFx0aWYgKCAhKCBoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdICkgKSB7XG5cdFx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gPSBbXTtcblx0XHRcdFx0aGFuZGxlcnMuZGVsZWdhdGVDb3VudCA9IDA7XG5cblx0XHRcdFx0Ly8gT25seSB1c2UgYWRkRXZlbnRMaXN0ZW5lciBpZiB0aGUgc3BlY2lhbCBldmVudHMgaGFuZGxlciByZXR1cm5zIGZhbHNlXG5cdFx0XHRcdGlmICggIXNwZWNpYWwuc2V0dXAgfHxcblx0XHRcdFx0XHRzcGVjaWFsLnNldHVwLmNhbGwoIGVsZW0sIGRhdGEsIG5hbWVzcGFjZXMsIGV2ZW50SGFuZGxlICkgPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdFx0aWYgKCBlbGVtLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGV2ZW50SGFuZGxlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggc3BlY2lhbC5hZGQgKSB7XG5cdFx0XHRcdHNwZWNpYWwuYWRkLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXG5cdFx0XHRcdGlmICggIWhhbmRsZU9iai5oYW5kbGVyLmd1aWQgKSB7XG5cdFx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCA9IGhhbmRsZXIuZ3VpZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgdG8gdGhlIGVsZW1lbnQncyBoYW5kbGVyIGxpc3QsIGRlbGVnYXRlcyBpbiBmcm9udFxuXHRcdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBoYW5kbGVycy5kZWxlZ2F0ZUNvdW50KyssIDAsIGhhbmRsZU9iaiApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aGFuZGxlcnMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEtlZXAgdHJhY2sgb2Ygd2hpY2ggZXZlbnRzIGhhdmUgZXZlciBiZWVuIHVzZWQsIGZvciBldmVudCBvcHRpbWl6YXRpb25cblx0XHRcdGpRdWVyeS5ldmVudC5nbG9iYWxbIHR5cGUgXSA9IHRydWU7XG5cdFx0fVxuXG5cdH0sXG5cblx0Ly8gRGV0YWNoIGFuIGV2ZW50IG9yIHNldCBvZiBldmVudHMgZnJvbSBhbiBlbGVtZW50XG5cdHJlbW92ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBzZWxlY3RvciwgbWFwcGVkVHlwZXMgKSB7XG5cblx0XHR2YXIgaiwgb3JpZ0NvdW50LCB0bXAsXG5cdFx0XHRldmVudHMsIHQsIGhhbmRsZU9iaixcblx0XHRcdHNwZWNpYWwsIGhhbmRsZXJzLCB0eXBlLCBuYW1lc3BhY2VzLCBvcmlnVHlwZSxcblx0XHRcdGVsZW1EYXRhID0gZGF0YVByaXYuaGFzRGF0YSggZWxlbSApICYmIGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0aWYgKCAhZWxlbURhdGEgfHwgISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gT25jZSBmb3IgZWFjaCB0eXBlLm5hbWVzcGFjZSBpbiB0eXBlczsgdHlwZSBtYXkgYmUgb21pdHRlZFxuXHRcdHR5cGVzID0gKCB0eXBlcyB8fCBcIlwiICkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbIHQgXSApIHx8IFtdO1xuXHRcdFx0dHlwZSA9IG9yaWdUeXBlID0gdG1wWyAxIF07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbIDIgXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKyB0eXBlc1sgdCBdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gfHwgW107XG5cdFx0XHR0bXAgPSB0bXBbIDIgXSAmJlxuXHRcdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKCBcIlxcXFwuKD86LipcXFxcLnwpXCIgKSArIFwiKFxcXFwufCQpXCIgKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG1hdGNoaW5nIGV2ZW50c1xuXHRcdFx0b3JpZ0NvdW50ID0gaiA9IGhhbmRsZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaiBdO1xuXG5cdFx0XHRcdGlmICggKCBtYXBwZWRUeXBlcyB8fCBvcmlnVHlwZSA9PT0gaGFuZGxlT2JqLm9yaWdUeXBlICkgJiZcblx0XHRcdFx0XHQoICFoYW5kbGVyIHx8IGhhbmRsZXIuZ3VpZCA9PT0gaGFuZGxlT2JqLmd1aWQgKSAmJlxuXHRcdFx0XHRcdCggIXRtcCB8fCB0bXAudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkgJiZcblx0XHRcdFx0XHQoICFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gaGFuZGxlT2JqLnNlbGVjdG9yIHx8XG5cdFx0XHRcdFx0XHRzZWxlY3RvciA9PT0gXCIqKlwiICYmIGhhbmRsZU9iai5zZWxlY3RvciApICkge1xuXHRcdFx0XHRcdGhhbmRsZXJzLnNwbGljZSggaiwgMSApO1xuXG5cdFx0XHRcdFx0aWYgKCBoYW5kbGVPYmouc2VsZWN0b3IgKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50LS07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggc3BlY2lhbC5yZW1vdmUgKSB7XG5cdFx0XHRcdFx0XHRzcGVjaWFsLnJlbW92ZS5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIGdlbmVyaWMgZXZlbnQgaGFuZGxlciBpZiB3ZSByZW1vdmVkIHNvbWV0aGluZyBhbmQgbm8gbW9yZSBoYW5kbGVycyBleGlzdFxuXHRcdFx0Ly8gKGF2b2lkcyBwb3RlbnRpYWwgZm9yIGVuZGxlc3MgcmVjdXJzaW9uIGR1cmluZyByZW1vdmFsIG9mIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMpXG5cdFx0XHRpZiAoIG9yaWdDb3VudCAmJiAhaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRpZiAoICFzcGVjaWFsLnRlYXJkb3duIHx8XG5cdFx0XHRcdFx0c3BlY2lhbC50ZWFyZG93bi5jYWxsKCBlbGVtLCBuYW1lc3BhY2VzLCBlbGVtRGF0YS5oYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cblx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGVsZW1EYXRhLmhhbmRsZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGV2ZW50c1sgdHlwZSBdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSBkYXRhIGFuZCB0aGUgZXhwYW5kbyBpZiBpdCdzIG5vIGxvbmdlciB1c2VkXG5cdFx0aWYgKCBqUXVlcnkuaXNFbXB0eU9iamVjdCggZXZlbnRzICkgKSB7XG5cdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGVsZW0sIFwiaGFuZGxlIGV2ZW50c1wiICk7XG5cdFx0fVxuXHR9LFxuXG5cdGRpc3BhdGNoOiBmdW5jdGlvbiggbmF0aXZlRXZlbnQgKSB7XG5cblx0XHQvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3Rcblx0XHR2YXIgZXZlbnQgPSBqUXVlcnkuZXZlbnQuZml4KCBuYXRpdmVFdmVudCApO1xuXG5cdFx0dmFyIGksIGosIHJldCwgbWF0Y2hlZCwgaGFuZGxlT2JqLCBoYW5kbGVyUXVldWUsXG5cdFx0XHRhcmdzID0gbmV3IEFycmF5KCBhcmd1bWVudHMubGVuZ3RoICksXG5cdFx0XHRoYW5kbGVycyA9ICggZGF0YVByaXYuZ2V0KCB0aGlzLCBcImV2ZW50c1wiICkgfHwge30gKVsgZXZlbnQudHlwZSBdIHx8IFtdLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyBldmVudC50eXBlIF0gfHwge307XG5cblx0XHQvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxuXHRcdGFyZ3NbIDAgXSA9IGV2ZW50O1xuXG5cdFx0Zm9yICggaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRhcmdzWyBpIF0gPSBhcmd1bWVudHNbIGkgXTtcblx0XHR9XG5cblx0XHRldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7XG5cblx0XHQvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG5cdFx0aWYgKCBzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGhhbmRsZXJzXG5cdFx0aGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwoIHRoaXMsIGV2ZW50LCBoYW5kbGVycyApO1xuXG5cdFx0Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoICggbWF0Y2hlZCA9IGhhbmRsZXJRdWV1ZVsgaSsrIF0gKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG5cblx0XHRcdGogPSAwO1xuXHRcdFx0d2hpbGUgKCAoIGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbIGorKyBdICkgJiZcblx0XHRcdFx0IWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cblx0XHRcdFx0Ly8gVHJpZ2dlcmVkIGV2ZW50IG11c3QgZWl0aGVyIDEpIGhhdmUgbm8gbmFtZXNwYWNlLCBvciAyKSBoYXZlIG5hbWVzcGFjZShzKVxuXHRcdFx0XHQvLyBhIHN1YnNldCBvciBlcXVhbCB0byB0aG9zZSBpbiB0aGUgYm91bmQgZXZlbnQgKGJvdGggY2FuIGhhdmUgbm8gbmFtZXNwYWNlKS5cblx0XHRcdFx0aWYgKCAhZXZlbnQucm5hbWVzcGFjZSB8fCBldmVudC5ybmFtZXNwYWNlLnRlc3QoIGhhbmRsZU9iai5uYW1lc3BhY2UgKSApIHtcblxuXHRcdFx0XHRcdGV2ZW50LmhhbmRsZU9iaiA9IGhhbmRsZU9iajtcblx0XHRcdFx0XHRldmVudC5kYXRhID0gaGFuZGxlT2JqLmRhdGE7XG5cblx0XHRcdFx0XHRyZXQgPSAoICggalF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGhhbmRsZU9iai5vcmlnVHlwZSBdIHx8IHt9ICkuaGFuZGxlIHx8XG5cdFx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlciApLmFwcGx5KCBtYXRjaGVkLmVsZW0sIGFyZ3MgKTtcblxuXHRcdFx0XHRcdGlmICggcmV0ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZXZlbnQucmVzdWx0ID0gcmV0ICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsIHRoZSBwb3N0RGlzcGF0Y2ggaG9vayBmb3IgdGhlIG1hcHBlZCB0eXBlXG5cdFx0aWYgKCBzcGVjaWFsLnBvc3REaXNwYXRjaCApIHtcblx0XHRcdHNwZWNpYWwucG9zdERpc3BhdGNoLmNhbGwoIHRoaXMsIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHRoYW5kbGVyczogZnVuY3Rpb24oIGV2ZW50LCBoYW5kbGVycyApIHtcblx0XHR2YXIgaSwgaGFuZGxlT2JqLCBzZWwsIG1hdGNoZWRIYW5kbGVycywgbWF0Y2hlZFNlbGVjdG9ycyxcblx0XHRcdGhhbmRsZXJRdWV1ZSA9IFtdLFxuXHRcdFx0ZGVsZWdhdGVDb3VudCA9IGhhbmRsZXJzLmRlbGVnYXRlQ291bnQsXG5cdFx0XHRjdXIgPSBldmVudC50YXJnZXQ7XG5cblx0XHQvLyBGaW5kIGRlbGVnYXRlIGhhbmRsZXJzXG5cdFx0aWYgKCBkZWxlZ2F0ZUNvdW50ICYmXG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OVxuXHRcdFx0Ly8gQmxhY2staG9sZSBTVkcgPHVzZT4gaW5zdGFuY2UgdHJlZXMgKHRyYWMtMTMxODApXG5cdFx0XHRjdXIubm9kZVR5cGUgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQyXG5cdFx0XHQvLyBTdXBwcmVzcyBzcGVjLXZpb2xhdGluZyBjbGlja3MgaW5kaWNhdGluZyBhIG5vbi1wcmltYXJ5IHBvaW50ZXIgYnV0dG9uICh0cmFjLTM4NjEpXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudC10eXBlLWNsaWNrXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG5cdFx0XHQvLyAuLi5idXQgbm90IGFycm93IGtleSBcImNsaWNrc1wiIG9mIHJhZGlvIGlucHV0cywgd2hpY2ggY2FuIGhhdmUgYGJ1dHRvbmAgLTEgKGdoLTIzNDMpXG5cdFx0XHQhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgZXZlbnQuYnV0dG9uID49IDEgKSApIHtcblxuXHRcdFx0Zm9yICggOyBjdXIgIT09IHRoaXM7IGN1ciA9IGN1ci5wYXJlbnROb2RlIHx8IHRoaXMgKSB7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgY2hlY2sgbm9uLWVsZW1lbnRzICgjMTMyMDgpXG5cdFx0XHRcdC8vIERvbid0IHByb2Nlc3MgY2xpY2tzIG9uIGRpc2FibGVkIGVsZW1lbnRzICgjNjkxMSwgIzgxNjUsICMxMTM4MiwgIzExNzY0KVxuXHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA9PT0gMSAmJiAhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgY3VyLmRpc2FibGVkID09PSB0cnVlICkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlZEhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0bWF0Y2hlZFNlbGVjdG9ycyA9IHt9O1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbIGkgXTtcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKCMxMzIwMylcblx0XHRcdFx0XHRcdHNlbCA9IGhhbmRsZU9iai5zZWxlY3RvciArIFwiIFwiO1xuXG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdID0gaGFuZGxlT2JqLm5lZWRzQ29udGV4dCA/XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCBzZWwsIHRoaXMgKS5pbmRleCggY3VyICkgPiAtMSA6XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmZpbmQoIHNlbCwgdGhpcywgbnVsbCwgWyBjdXIgXSApLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZWRIYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkSGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goIHsgZWxlbTogY3VyLCBoYW5kbGVyczogbWF0Y2hlZEhhbmRsZXJzIH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIHJlbWFpbmluZyAoZGlyZWN0bHktYm91bmQpIGhhbmRsZXJzXG5cdFx0Y3VyID0gdGhpcztcblx0XHRpZiAoIGRlbGVnYXRlQ291bnQgPCBoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRoYW5kbGVyUXVldWUucHVzaCggeyBlbGVtOiBjdXIsIGhhbmRsZXJzOiBoYW5kbGVycy5zbGljZSggZGVsZWdhdGVDb3VudCApIH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaGFuZGxlclF1ZXVlO1xuXHR9LFxuXG5cdGFkZFByb3A6IGZ1bmN0aW9uKCBuYW1lLCBob29rICkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSwgbmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblxuXHRcdFx0Z2V0OiBqUXVlcnkuaXNGdW5jdGlvbiggaG9vayApID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBob29rKCB0aGlzLm9yaWdpbmFsRXZlbnQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gOlxuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudFsgbmFtZSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggdGhpcywgbmFtZSwge1xuXHRcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHdyaXRhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGZpeDogZnVuY3Rpb24oIG9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0cmV0dXJuIG9yaWdpbmFsRXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0b3JpZ2luYWxFdmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCBvcmlnaW5hbEV2ZW50ICk7XG5cdH0sXG5cblx0c3BlY2lhbDoge1xuXHRcdGxvYWQ6IHtcblxuXHRcdFx0Ly8gUHJldmVudCB0cmlnZ2VyZWQgaW1hZ2UubG9hZCBldmVudHMgZnJvbSBidWJibGluZyB0byB3aW5kb3cubG9hZFxuXHRcdFx0bm9CdWJibGU6IHRydWVcblx0XHR9LFxuXHRcdGZvY3VzOiB7XG5cblx0XHRcdC8vIEZpcmUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuXHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggdGhpcyAhPT0gc2FmZUFjdGl2ZUVsZW1lbnQoKSAmJiB0aGlzLmZvY3VzICkge1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNpblwiXG5cdFx0fSxcblx0XHRibHVyOiB7XG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCB0aGlzID09PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmIHRoaXMuYmx1ciApIHtcblx0XHRcdFx0XHR0aGlzLmJsdXIoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNvdXRcIlxuXHRcdH0sXG5cdFx0Y2xpY2s6IHtcblxuXHRcdFx0Ly8gRm9yIGNoZWNrYm94LCBmaXJlIG5hdGl2ZSBldmVudCBzbyBjaGVja2VkIHN0YXRlIHdpbGwgYmUgcmlnaHRcblx0XHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIHRoaXMudHlwZSA9PT0gXCJjaGVja2JveFwiICYmIHRoaXMuY2xpY2sgJiYgalF1ZXJ5Lm5vZGVOYW1lKCB0aGlzLCBcImlucHV0XCIgKSApIHtcblx0XHRcdFx0XHR0aGlzLmNsaWNrKCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBGb3IgY3Jvc3MtYnJvd3NlciBjb25zaXN0ZW5jeSwgZG9uJ3QgZmlyZSBuYXRpdmUgLmNsaWNrKCkgb24gbGlua3Ncblx0XHRcdF9kZWZhdWx0OiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkubm9kZU5hbWUoIGV2ZW50LnRhcmdldCwgXCJhXCIgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0YmVmb3JldW5sb2FkOiB7XG5cdFx0XHRwb3N0RGlzcGF0Y2g6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDIwK1xuXHRcdFx0XHQvLyBGaXJlZm94IGRvZXNuJ3QgYWxlcnQgaWYgdGhlIHJldHVyblZhbHVlIGZpZWxkIGlzIG5vdCBzZXQuXG5cdFx0XHRcdGlmICggZXZlbnQucmVzdWx0ICE9PSB1bmRlZmluZWQgJiYgZXZlbnQub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRldmVudC5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZXZlbnQucmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiggZWxlbSwgdHlwZSwgaGFuZGxlICkge1xuXG5cdC8vIFRoaXMgXCJpZlwiIGlzIG5lZWRlZCBmb3IgcGxhaW4gb2JqZWN0c1xuXHRpZiAoIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcblx0XHRlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIGhhbmRsZSApO1xuXHR9XG59O1xuXG5qUXVlcnkuRXZlbnQgPSBmdW5jdGlvbiggc3JjLCBwcm9wcyApIHtcblxuXHQvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgdGhlICduZXcnIGtleXdvcmRcblx0aWYgKCAhKCB0aGlzIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50ICkgKSB7XG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuRXZlbnQoIHNyYywgcHJvcHMgKTtcblx0fVxuXG5cdC8vIEV2ZW50IG9iamVjdFxuXHRpZiAoIHNyYyAmJiBzcmMudHlwZSApIHtcblx0XHR0aGlzLm9yaWdpbmFsRXZlbnQgPSBzcmM7XG5cdFx0dGhpcy50eXBlID0gc3JjLnR5cGU7XG5cblx0XHQvLyBFdmVudHMgYnViYmxpbmcgdXAgdGhlIGRvY3VtZW50IG1heSBoYXZlIGJlZW4gbWFya2VkIGFzIHByZXZlbnRlZFxuXHRcdC8vIGJ5IGEgaGFuZGxlciBsb3dlciBkb3duIHRoZSB0cmVlOyByZWZsZWN0IHRoZSBjb3JyZWN0IHZhbHVlLlxuXHRcdHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gc3JjLmRlZmF1bHRQcmV2ZW50ZWQgfHxcblx0XHRcdFx0c3JjLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHVuZGVmaW5lZCAmJlxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seVxuXHRcdFx0XHRzcmMucmV0dXJuVmFsdWUgPT09IGZhbHNlID9cblx0XHRcdHJldHVyblRydWUgOlxuXHRcdFx0cmV0dXJuRmFsc2U7XG5cblx0XHQvLyBDcmVhdGUgdGFyZ2V0IHByb3BlcnRpZXNcblx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgPD02IC0gNyBvbmx5XG5cdFx0Ly8gVGFyZ2V0IHNob3VsZCBub3QgYmUgYSB0ZXh0IG5vZGUgKCM1MDQsICMxMzE0Mylcblx0XHR0aGlzLnRhcmdldCA9ICggc3JjLnRhcmdldCAmJiBzcmMudGFyZ2V0Lm5vZGVUeXBlID09PSAzICkgP1xuXHRcdFx0c3JjLnRhcmdldC5wYXJlbnROb2RlIDpcblx0XHRcdHNyYy50YXJnZXQ7XG5cblx0XHR0aGlzLmN1cnJlbnRUYXJnZXQgPSBzcmMuY3VycmVudFRhcmdldDtcblx0XHR0aGlzLnJlbGF0ZWRUYXJnZXQgPSBzcmMucmVsYXRlZFRhcmdldDtcblxuXHQvLyBFdmVudCB0eXBlXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50eXBlID0gc3JjO1xuXHR9XG5cblx0Ly8gUHV0IGV4cGxpY2l0bHkgcHJvdmlkZWQgcHJvcGVydGllcyBvbnRvIHRoZSBldmVudCBvYmplY3Rcblx0aWYgKCBwcm9wcyApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aGlzLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcblx0dGhpcy50aW1lU3RhbXAgPSBzcmMgJiYgc3JjLnRpbWVTdGFtcCB8fCBqUXVlcnkubm93KCk7XG5cblx0Ly8gTWFyayBpdCBhcyBmaXhlZFxuXHR0aGlzWyBqUXVlcnkuZXhwYW5kbyBdID0gdHJ1ZTtcbn07XG5cbi8vIGpRdWVyeS5FdmVudCBpcyBiYXNlZCBvbiBET00zIEV2ZW50cyBhcyBzcGVjaWZpZWQgYnkgdGhlIEVDTUFTY3JpcHQgTGFuZ3VhZ2UgQmluZGluZ1xuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDMvV0QtRE9NLUxldmVsLTMtRXZlbnRzLTIwMDMwMzMxL2VjbWEtc2NyaXB0LWJpbmRpbmcuaHRtbFxualF1ZXJ5LkV2ZW50LnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IGpRdWVyeS5FdmVudCxcblx0aXNEZWZhdWx0UHJldmVudGVkOiByZXR1cm5GYWxzZSxcblx0aXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cdGlzU2ltdWxhdGVkOiBmYWxzZSxcblxuXHRwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9LFxuXHRzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSxcblx0c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG59O1xuXG4vLyBJbmNsdWRlcyBhbGwgY29tbW9uIGV2ZW50IHByb3BzIGluY2x1ZGluZyBLZXlFdmVudCBhbmQgTW91c2VFdmVudCBzcGVjaWZpYyBwcm9wc1xualF1ZXJ5LmVhY2goIHtcblx0YWx0S2V5OiB0cnVlLFxuXHRidWJibGVzOiB0cnVlLFxuXHRjYW5jZWxhYmxlOiB0cnVlLFxuXHRjaGFuZ2VkVG91Y2hlczogdHJ1ZSxcblx0Y3RybEtleTogdHJ1ZSxcblx0ZGV0YWlsOiB0cnVlLFxuXHRldmVudFBoYXNlOiB0cnVlLFxuXHRtZXRhS2V5OiB0cnVlLFxuXHRwYWdlWDogdHJ1ZSxcblx0cGFnZVk6IHRydWUsXG5cdHNoaWZ0S2V5OiB0cnVlLFxuXHR2aWV3OiB0cnVlLFxuXHRcImNoYXJcIjogdHJ1ZSxcblx0Y2hhckNvZGU6IHRydWUsXG5cdGtleTogdHJ1ZSxcblx0a2V5Q29kZTogdHJ1ZSxcblx0YnV0dG9uOiB0cnVlLFxuXHRidXR0b25zOiB0cnVlLFxuXHRjbGllbnRYOiB0cnVlLFxuXHRjbGllbnRZOiB0cnVlLFxuXHRvZmZzZXRYOiB0cnVlLFxuXHRvZmZzZXRZOiB0cnVlLFxuXHRwb2ludGVySWQ6IHRydWUsXG5cdHBvaW50ZXJUeXBlOiB0cnVlLFxuXHRzY3JlZW5YOiB0cnVlLFxuXHRzY3JlZW5ZOiB0cnVlLFxuXHR0YXJnZXRUb3VjaGVzOiB0cnVlLFxuXHR0b0VsZW1lbnQ6IHRydWUsXG5cdHRvdWNoZXM6IHRydWUsXG5cblx0d2hpY2g6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHR2YXIgYnV0dG9uID0gZXZlbnQuYnV0dG9uO1xuXG5cdFx0Ly8gQWRkIHdoaWNoIGZvciBrZXkgZXZlbnRzXG5cdFx0aWYgKCBldmVudC53aGljaCA9PSBudWxsICYmIHJrZXlFdmVudC50ZXN0KCBldmVudC50eXBlICkgKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnQuY2hhckNvZGUgIT0gbnVsbCA/IGV2ZW50LmNoYXJDb2RlIDogZXZlbnQua2V5Q29kZTtcblx0XHR9XG5cblx0XHQvLyBBZGQgd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG5cdFx0aWYgKCAhZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQgJiYgcm1vdXNlRXZlbnQudGVzdCggZXZlbnQudHlwZSApICkge1xuXHRcdFx0aWYgKCBidXR0b24gJiAxICkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBidXR0b24gJiAyICkge1xuXHRcdFx0XHRyZXR1cm4gMztcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBidXR0b24gJiA0ICkge1xuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LndoaWNoO1xuXHR9XG59LCBqUXVlcnkuZXZlbnQuYWRkUHJvcCApO1xuXG4vLyBDcmVhdGUgbW91c2VlbnRlci9sZWF2ZSBldmVudHMgdXNpbmcgbW91c2VvdmVyL291dCBhbmQgZXZlbnQtdGltZSBjaGVja3Ncbi8vIHNvIHRoYXQgZXZlbnQgZGVsZWdhdGlvbiB3b3JrcyBpbiBqUXVlcnkuXG4vLyBEbyB0aGUgc2FtZSBmb3IgcG9pbnRlcmVudGVyL3BvaW50ZXJsZWF2ZSBhbmQgcG9pbnRlcm92ZXIvcG9pbnRlcm91dFxuLy9cbi8vIFN1cHBvcnQ6IFNhZmFyaSA3IG9ubHlcbi8vIFNhZmFyaSBzZW5kcyBtb3VzZWVudGVyIHRvbyBvZnRlbjsgc2VlOlxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDcwMjU4XG4vLyBmb3IgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBidWcgKGl0IGV4aXN0ZWQgaW4gb2xkZXIgQ2hyb21lIHZlcnNpb25zIGFzIHdlbGwpLlxualF1ZXJ5LmVhY2goIHtcblx0bW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIixcblx0bW91c2VsZWF2ZTogXCJtb3VzZW91dFwiLFxuXHRwb2ludGVyZW50ZXI6IFwicG9pbnRlcm92ZXJcIixcblx0cG9pbnRlcmxlYXZlOiBcInBvaW50ZXJvdXRcIlxufSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIG9yaWcgXSA9IHtcblx0XHRkZWxlZ2F0ZVR5cGU6IGZpeCxcblx0XHRiaW5kVHlwZTogZml4LFxuXG5cdFx0aGFuZGxlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgcmV0LFxuXHRcdFx0XHR0YXJnZXQgPSB0aGlzLFxuXHRcdFx0XHRyZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldCxcblx0XHRcdFx0aGFuZGxlT2JqID0gZXZlbnQuaGFuZGxlT2JqO1xuXG5cdFx0XHQvLyBGb3IgbW91c2VlbnRlci9sZWF2ZSBjYWxsIHRoZSBoYW5kbGVyIGlmIHJlbGF0ZWQgaXMgb3V0c2lkZSB0aGUgdGFyZ2V0LlxuXHRcdFx0Ly8gTkI6IE5vIHJlbGF0ZWRUYXJnZXQgaWYgdGhlIG1vdXNlIGxlZnQvZW50ZXJlZCB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdGlmICggIXJlbGF0ZWQgfHwgKCByZWxhdGVkICE9PSB0YXJnZXQgJiYgIWpRdWVyeS5jb250YWlucyggdGFyZ2V0LCByZWxhdGVkICkgKSApIHtcblx0XHRcdFx0ZXZlbnQudHlwZSA9IGhhbmRsZU9iai5vcmlnVHlwZTtcblx0XHRcdFx0cmV0ID0gaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRldmVudC50eXBlID0gZml4O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdH07XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHRvbjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIG9uKCB0aGlzLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG5cdH0sXG5cdG9uZTogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIG9uKCB0aGlzLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCAxICk7XG5cdH0sXG5cdG9mZjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZm4gKSB7XG5cdFx0dmFyIGhhbmRsZU9iaiwgdHlwZTtcblx0XHRpZiAoIHR5cGVzICYmIHR5cGVzLnByZXZlbnREZWZhdWx0ICYmIHR5cGVzLmhhbmRsZU9iaiApIHtcblxuXHRcdFx0Ly8gKCBldmVudCApICBkaXNwYXRjaGVkIGpRdWVyeS5FdmVudFxuXHRcdFx0aGFuZGxlT2JqID0gdHlwZXMuaGFuZGxlT2JqO1xuXHRcdFx0alF1ZXJ5KCB0eXBlcy5kZWxlZ2F0ZVRhcmdldCApLm9mZihcblx0XHRcdFx0aGFuZGxlT2JqLm5hbWVzcGFjZSA/XG5cdFx0XHRcdFx0aGFuZGxlT2JqLm9yaWdUeXBlICsgXCIuXCIgKyBoYW5kbGVPYmoubmFtZXNwYWNlIDpcblx0XHRcdFx0XHRoYW5kbGVPYmoub3JpZ1R5cGUsXG5cdFx0XHRcdGhhbmRsZU9iai5zZWxlY3Rvcixcblx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXJcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCB0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMtb2JqZWN0IFssIHNlbGVjdG9yXSApXG5cdFx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuXHRcdFx0XHR0aGlzLm9mZiggdHlwZSwgc2VsZWN0b3IsIHR5cGVzWyB0eXBlIF0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZiAoIHNlbGVjdG9yID09PSBmYWxzZSB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcyBbLCBmbl0gKVxuXHRcdFx0Zm4gPSBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRpZiAoIGZuID09PSBmYWxzZSApIHtcblx0XHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggdGhpcywgdHlwZXMsIGZuLCBzZWxlY3RvciApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5cbnZhclxuXG5cdC8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cblxuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2VzbGludC9lc2xpbnQvaXNzdWVzLzMyMjlcblx0cnhodG1sVGFnID0gLzwoPyFhcmVhfGJyfGNvbHxlbWJlZHxocnxpbWd8aW5wdXR8bGlua3xtZXRhfHBhcmFtKSgoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKVtePl0qKVxcLz4vZ2ksXG5cblx0LyogZXNsaW50LWVuYWJsZSAqL1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSwgRWRnZSAxMiAtIDEzXG5cdC8vIEluIElFL0VkZ2UgdXNpbmcgcmVnZXggZ3JvdXBzIGhlcmUgY2F1c2VzIHNldmVyZSBzbG93ZG93bnMuXG5cdC8vIFNlZSBodHRwczovL2Nvbm5lY3QubWljcm9zb2Z0LmNvbS9JRS9mZWVkYmFjay9kZXRhaWxzLzE3MzY1MTIvXG5cdHJub0lubmVyaHRtbCA9IC88c2NyaXB0fDxzdHlsZXw8bGluay9pLFxuXG5cdC8vIGNoZWNrZWQ9XCJjaGVja2VkXCIgb3IgY2hlY2tlZFxuXHRyY2hlY2tlZCA9IC9jaGVja2VkXFxzKig/OltePV18PVxccyouY2hlY2tlZC4pL2ksXG5cdHJzY3JpcHRUeXBlTWFza2VkID0gL150cnVlXFwvKC4qKS8sXG5cdHJjbGVhblNjcmlwdCA9IC9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZztcblxuZnVuY3Rpb24gbWFuaXB1bGF0aW9uVGFyZ2V0KCBlbGVtLCBjb250ZW50ICkge1xuXHRpZiAoIGpRdWVyeS5ub2RlTmFtZSggZWxlbSwgXCJ0YWJsZVwiICkgJiZcblx0XHRqUXVlcnkubm9kZU5hbWUoIGNvbnRlbnQubm9kZVR5cGUgIT09IDExID8gY29udGVudCA6IGNvbnRlbnQuZmlyc3RDaGlsZCwgXCJ0clwiICkgKSB7XG5cblx0XHRyZXR1cm4gZWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJ0Ym9keVwiIClbIDAgXSB8fCBlbGVtO1xuXHR9XG5cblx0cmV0dXJuIGVsZW07XG59XG5cbi8vIFJlcGxhY2UvcmVzdG9yZSB0aGUgdHlwZSBhdHRyaWJ1dGUgb2Ygc2NyaXB0IGVsZW1lbnRzIGZvciBzYWZlIERPTSBtYW5pcHVsYXRpb25cbmZ1bmN0aW9uIGRpc2FibGVTY3JpcHQoIGVsZW0gKSB7XG5cdGVsZW0udHlwZSA9ICggZWxlbS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICkgIT09IG51bGwgKSArIFwiL1wiICsgZWxlbS50eXBlO1xuXHRyZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVTY3JpcHQoIGVsZW0gKSB7XG5cdHZhciBtYXRjaCA9IHJzY3JpcHRUeXBlTWFza2VkLmV4ZWMoIGVsZW0udHlwZSApO1xuXG5cdGlmICggbWF0Y2ggKSB7XG5cdFx0ZWxlbS50eXBlID0gbWF0Y2hbIDEgXTtcblx0fSBlbHNlIHtcblx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSggXCJ0eXBlXCIgKTtcblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBjbG9uZUNvcHlFdmVudCggc3JjLCBkZXN0ICkge1xuXHR2YXIgaSwgbCwgdHlwZSwgcGRhdGFPbGQsIHBkYXRhQ3VyLCB1ZGF0YU9sZCwgdWRhdGFDdXIsIGV2ZW50cztcblxuXHRpZiAoIGRlc3Qubm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gMS4gQ29weSBwcml2YXRlIGRhdGE6IGV2ZW50cywgaGFuZGxlcnMsIGV0Yy5cblx0aWYgKCBkYXRhUHJpdi5oYXNEYXRhKCBzcmMgKSApIHtcblx0XHRwZGF0YU9sZCA9IGRhdGFQcml2LmFjY2Vzcyggc3JjICk7XG5cdFx0cGRhdGFDdXIgPSBkYXRhUHJpdi5zZXQoIGRlc3QsIHBkYXRhT2xkICk7XG5cdFx0ZXZlbnRzID0gcGRhdGFPbGQuZXZlbnRzO1xuXG5cdFx0aWYgKCBldmVudHMgKSB7XG5cdFx0XHRkZWxldGUgcGRhdGFDdXIuaGFuZGxlO1xuXHRcdFx0cGRhdGFDdXIuZXZlbnRzID0ge307XG5cblx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IGV2ZW50c1sgdHlwZSBdLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBkZXN0LCB0eXBlLCBldmVudHNbIHR5cGUgXVsgaSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyAyLiBDb3B5IHVzZXIgZGF0YVxuXHRpZiAoIGRhdGFVc2VyLmhhc0RhdGEoIHNyYyApICkge1xuXHRcdHVkYXRhT2xkID0gZGF0YVVzZXIuYWNjZXNzKCBzcmMgKTtcblx0XHR1ZGF0YUN1ciA9IGpRdWVyeS5leHRlbmQoIHt9LCB1ZGF0YU9sZCApO1xuXG5cdFx0ZGF0YVVzZXIuc2V0KCBkZXN0LCB1ZGF0YUN1ciApO1xuXHR9XG59XG5cbi8vIEZpeCBJRSBidWdzLCBzZWUgc3VwcG9ydCB0ZXN0c1xuZnVuY3Rpb24gZml4SW5wdXQoIHNyYywgZGVzdCApIHtcblx0dmFyIG5vZGVOYW1lID0gZGVzdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdC8vIEZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uLlxuXHRpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgcmNoZWNrYWJsZVR5cGUudGVzdCggc3JjLnR5cGUgKSApIHtcblx0XHRkZXN0LmNoZWNrZWQgPSBzcmMuY2hlY2tlZDtcblxuXHQvLyBGYWlscyB0byByZXR1cm4gdGhlIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgZGVmYXVsdCBzZWxlY3RlZCBzdGF0ZSB3aGVuIGNsb25pbmcgb3B0aW9uc1xuXHR9IGVsc2UgaWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5vZGVOYW1lID09PSBcInRleHRhcmVhXCIgKSB7XG5cdFx0ZGVzdC5kZWZhdWx0VmFsdWUgPSBzcmMuZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGRvbU1hbmlwKCBjb2xsZWN0aW9uLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCApIHtcblxuXHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdGFyZ3MgPSBjb25jYXQuYXBwbHkoIFtdLCBhcmdzICk7XG5cblx0dmFyIGZyYWdtZW50LCBmaXJzdCwgc2NyaXB0cywgaGFzU2NyaXB0cywgbm9kZSwgZG9jLFxuXHRcdGkgPSAwLFxuXHRcdGwgPSBjb2xsZWN0aW9uLmxlbmd0aCxcblx0XHRpTm9DbG9uZSA9IGwgLSAxLFxuXHRcdHZhbHVlID0gYXJnc1sgMCBdLFxuXHRcdGlzRnVuY3Rpb24gPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKTtcblxuXHQvLyBXZSBjYW4ndCBjbG9uZU5vZGUgZnJhZ21lbnRzIHRoYXQgY29udGFpbiBjaGVja2VkLCBpbiBXZWJLaXRcblx0aWYgKCBpc0Z1bmN0aW9uIHx8XG5cdFx0XHQoIGwgPiAxICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQhc3VwcG9ydC5jaGVja0Nsb25lICYmIHJjaGVja2VkLnRlc3QoIHZhbHVlICkgKSApIHtcblx0XHRyZXR1cm4gY29sbGVjdGlvbi5lYWNoKCBmdW5jdGlvbiggaW5kZXggKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGNvbGxlY3Rpb24uZXEoIGluZGV4ICk7XG5cdFx0XHRpZiAoIGlzRnVuY3Rpb24gKSB7XG5cdFx0XHRcdGFyZ3NbIDAgXSA9IHZhbHVlLmNhbGwoIHRoaXMsIGluZGV4LCBzZWxmLmh0bWwoKSApO1xuXHRcdFx0fVxuXHRcdFx0ZG9tTWFuaXAoIHNlbGYsIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkICk7XG5cdFx0fSApO1xuXHR9XG5cblx0aWYgKCBsICkge1xuXHRcdGZyYWdtZW50ID0gYnVpbGRGcmFnbWVudCggYXJncywgY29sbGVjdGlvblsgMCBdLm93bmVyRG9jdW1lbnQsIGZhbHNlLCBjb2xsZWN0aW9uLCBpZ25vcmVkICk7XG5cdFx0Zmlyc3QgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuXG5cdFx0aWYgKCBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdGZyYWdtZW50ID0gZmlyc3Q7XG5cdFx0fVxuXG5cdFx0Ly8gUmVxdWlyZSBlaXRoZXIgbmV3IGNvbnRlbnQgb3IgYW4gaW50ZXJlc3QgaW4gaWdub3JlZCBlbGVtZW50cyB0byBpbnZva2UgdGhlIGNhbGxiYWNrXG5cdFx0aWYgKCBmaXJzdCB8fCBpZ25vcmVkICkge1xuXHRcdFx0c2NyaXB0cyA9IGpRdWVyeS5tYXAoIGdldEFsbCggZnJhZ21lbnQsIFwic2NyaXB0XCIgKSwgZGlzYWJsZVNjcmlwdCApO1xuXHRcdFx0aGFzU2NyaXB0cyA9IHNjcmlwdHMubGVuZ3RoO1xuXG5cdFx0XHQvLyBVc2UgdGhlIG9yaWdpbmFsIGZyYWdtZW50IGZvciB0aGUgbGFzdCBpdGVtXG5cdFx0XHQvLyBpbnN0ZWFkIG9mIHRoZSBmaXJzdCBiZWNhdXNlIGl0IGNhbiBlbmQgdXBcblx0XHRcdC8vIGJlaW5nIGVtcHRpZWQgaW5jb3JyZWN0bHkgaW4gY2VydGFpbiBzaXR1YXRpb25zICgjODA3MCkuXG5cdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdG5vZGUgPSBmcmFnbWVudDtcblxuXHRcdFx0XHRpZiAoIGkgIT09IGlOb0Nsb25lICkge1xuXHRcdFx0XHRcdG5vZGUgPSBqUXVlcnkuY2xvbmUoIG5vZGUsIHRydWUsIHRydWUgKTtcblxuXHRcdFx0XHRcdC8vIEtlZXAgcmVmZXJlbmNlcyB0byBjbG9uZWQgc2NyaXB0cyBmb3IgbGF0ZXIgcmVzdG9yYXRpb25cblx0XHRcdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBzY3JpcHRzLCBnZXRBbGwoIG5vZGUsIFwic2NyaXB0XCIgKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwoIGNvbGxlY3Rpb25bIGkgXSwgbm9kZSwgaSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cdFx0XHRcdGRvYyA9IHNjcmlwdHNbIHNjcmlwdHMubGVuZ3RoIC0gMSBdLm93bmVyRG9jdW1lbnQ7XG5cblx0XHRcdFx0Ly8gUmVlbmFibGUgc2NyaXB0c1xuXHRcdFx0XHRqUXVlcnkubWFwKCBzY3JpcHRzLCByZXN0b3JlU2NyaXB0ICk7XG5cblx0XHRcdFx0Ly8gRXZhbHVhdGUgZXhlY3V0YWJsZSBzY3JpcHRzIG9uIGZpcnN0IGRvY3VtZW50IGluc2VydGlvblxuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGhhc1NjcmlwdHM7IGkrKyApIHtcblx0XHRcdFx0XHRub2RlID0gc2NyaXB0c1sgaSBdO1xuXHRcdFx0XHRcdGlmICggcnNjcmlwdFR5cGUudGVzdCggbm9kZS50eXBlIHx8IFwiXCIgKSAmJlxuXHRcdFx0XHRcdFx0IWRhdGFQcml2LmFjY2Vzcyggbm9kZSwgXCJnbG9iYWxFdmFsXCIgKSAmJlxuXHRcdFx0XHRcdFx0alF1ZXJ5LmNvbnRhaW5zKCBkb2MsIG5vZGUgKSApIHtcblxuXHRcdFx0XHRcdFx0aWYgKCBub2RlLnNyYyApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBPcHRpb25hbCBBSkFYIGRlcGVuZGVuY3ksIGJ1dCB3b24ndCBydW4gc2NyaXB0cyBpZiBub3QgcHJlc2VudFxuXHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5fZXZhbFVybCApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuX2V2YWxVcmwoIG5vZGUuc3JjICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdERPTUV2YWwoIG5vZGUudGV4dENvbnRlbnQucmVwbGFjZSggcmNsZWFuU2NyaXB0LCBcIlwiICksIGRvYyApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjb2xsZWN0aW9uO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoIGVsZW0sIHNlbGVjdG9yLCBrZWVwRGF0YSApIHtcblx0dmFyIG5vZGUsXG5cdFx0bm9kZXMgPSBzZWxlY3RvciA/IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCBlbGVtICkgOiBlbGVtLFxuXHRcdGkgPSAwO1xuXG5cdGZvciAoIDsgKCBub2RlID0gbm9kZXNbIGkgXSApICE9IG51bGw7IGkrKyApIHtcblx0XHRpZiAoICFrZWVwRGF0YSAmJiBub2RlLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBub2RlICkgKTtcblx0XHR9XG5cblx0XHRpZiAoIG5vZGUucGFyZW50Tm9kZSApIHtcblx0XHRcdGlmICgga2VlcERhdGEgJiYgalF1ZXJ5LmNvbnRhaW5zKCBub2RlLm93bmVyRG9jdW1lbnQsIG5vZGUgKSApIHtcblx0XHRcdFx0c2V0R2xvYmFsRXZhbCggZ2V0QWxsKCBub2RlLCBcInNjcmlwdFwiICkgKTtcblx0XHRcdH1cblx0XHRcdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggbm9kZSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdGh0bWxQcmVmaWx0ZXI6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdHJldHVybiBodG1sLnJlcGxhY2UoIHJ4aHRtbFRhZywgXCI8JDE+PC8kMj5cIiApO1xuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiggZWxlbSwgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKSB7XG5cdFx0dmFyIGksIGwsIHNyY0VsZW1lbnRzLCBkZXN0RWxlbWVudHMsXG5cdFx0XHRjbG9uZSA9IGVsZW0uY2xvbmVOb2RlKCB0cnVlICksXG5cdFx0XHRpblBhZ2UgPSBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApO1xuXG5cdFx0Ly8gRml4IElFIGNsb25pbmcgaXNzdWVzXG5cdFx0aWYgKCAhc3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCAmJiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgZWxlbS5ub2RlVHlwZSA9PT0gMTEgKSAmJlxuXHRcdFx0XHQhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIFdlIGVzY2hldyBTaXp6bGUgaGVyZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29uczogaHR0cHM6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuXHRcdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSApO1xuXHRcdFx0c3JjRWxlbWVudHMgPSBnZXRBbGwoIGVsZW0gKTtcblxuXHRcdFx0Zm9yICggaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZpeElucHV0KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcblx0XHRpZiAoIGRhdGFBbmRFdmVudHMgKSB7XG5cdFx0XHRpZiAoIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0XHRzcmNFbGVtZW50cyA9IHNyY0VsZW1lbnRzIHx8IGdldEFsbCggZWxlbSApO1xuXHRcdFx0XHRkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKCBjbG9uZSApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGNsb25lQ29weUV2ZW50KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbG9uZUNvcHlFdmVudCggZWxlbSwgY2xvbmUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSwgXCJzY3JpcHRcIiApO1xuXHRcdGlmICggZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCBkZXN0RWxlbWVudHMsICFpblBhZ2UgJiYgZ2V0QWxsKCBlbGVtLCBcInNjcmlwdFwiICkgKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIGNsb25lZCBzZXRcblx0XHRyZXR1cm4gY2xvbmU7XG5cdH0sXG5cblx0Y2xlYW5EYXRhOiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cdFx0dmFyIGRhdGEsIGVsZW0sIHR5cGUsXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWwsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKCBlbGVtID0gZWxlbXNbIGkgXSApICE9PSB1bmRlZmluZWQ7IGkrKyApIHtcblx0XHRcdGlmICggYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0XHRpZiAoICggZGF0YSA9IGVsZW1bIGRhdGFQcml2LmV4cGFuZG8gXSApICkge1xuXHRcdFx0XHRcdGlmICggZGF0YS5ldmVudHMgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCB0eXBlIGluIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIHNwZWNpYWxbIHR5cGUgXSApIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCBlbGVtLCB0eXBlICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gVGhpcyBpcyBhIHNob3J0Y3V0IHRvIGF2b2lkIGpRdWVyeS5ldmVudC5yZW1vdmUncyBvdmVyaGVhZFxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5yZW1vdmVFdmVudCggZWxlbSwgdHlwZSwgZGF0YS5oYW5kbGUgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTM1IC0gNDUrXG5cdFx0XHRcdFx0Ly8gQXNzaWduIHVuZGVmaW5lZCBpbnN0ZWFkIG9mIHVzaW5nIGRlbGV0ZSwgc2VlIERhdGEjcmVtb3ZlXG5cdFx0XHRcdFx0ZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdID0gdW5kZWZpbmVkO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggZWxlbVsgZGF0YVVzZXIuZXhwYW5kbyBdICkge1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHQvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcblx0XHRcdFx0XHRlbGVtWyBkYXRhVXNlci5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRkZXRhY2g6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gcmVtb3ZlKCB0aGlzLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiByZW1vdmUoIHRoaXMsIHNlbGVjdG9yICk7XG5cdH0sXG5cblx0dGV4dDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnRleHQoIHRoaXMgKSA6XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRcdHRoaXMudGV4dENvbnRlbnQgPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdGFwcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcblx0XHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdHByZXBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoIGVsZW0sIHRhcmdldC5maXJzdENoaWxkICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGJlZm9yZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0YWZ0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzLm5leHRTaWJsaW5nICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyAoIGVsZW0gPSB0aGlzWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0Ly8gUHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcblx0XHRcdFx0ZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uKCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuXHRcdGRlZXBEYXRhQW5kRXZlbnRzID0gZGVlcERhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGRhdGFBbmRFdmVudHMgOiBkZWVwRGF0YUFuZEV2ZW50cztcblxuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNsb25lKCB0aGlzLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApO1xuXHRcdH0gKTtcblx0fSxcblxuXHRodG1sOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF0gfHwge30sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHRsID0gdGhpcy5sZW5ndGg7XG5cblx0XHRcdGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pbm5lckhUTUw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcblx0XHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCggdmFsdWUgKSAmJlxuXHRcdFx0XHQhd3JhcE1hcFsgKCBydGFnTmFtZS5leGVjKCB2YWx1ZSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpIF0gKSB7XG5cblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuaHRtbFByZWZpbHRlciggdmFsdWUgKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRcdGVsZW0gPSB0aGlzWyBpIF0gfHwge307XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblx0XHRcdFx0XHRcdFx0ZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtID0gMDtcblxuXHRcdFx0XHQvLyBJZiB1c2luZyBpbm5lckhUTUwgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgdXNlIHRoZSBmYWxsYmFjayBtZXRob2Rcblx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5hcHBlbmQoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRyZXBsYWNlV2l0aDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGlnbm9yZWQgPSBbXTtcblxuXHRcdC8vIE1ha2UgdGhlIGNoYW5nZXMsIHJlcGxhY2luZyBlYWNoIG5vbi1pZ25vcmVkIGNvbnRleHQgZWxlbWVudCB3aXRoIHRoZSBuZXcgY29udGVudFxuXHRcdHJldHVybiBkb21NYW5pcCggdGhpcywgYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudE5vZGU7XG5cblx0XHRcdGlmICggalF1ZXJ5LmluQXJyYXkoIHRoaXMsIGlnbm9yZWQgKSA8IDAgKSB7XG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggdGhpcyApICk7XG5cdFx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRcdHBhcmVudC5yZXBsYWNlQ2hpbGQoIGVsZW0sIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gRm9yY2UgY2FsbGJhY2sgaW52b2NhdGlvblxuXHRcdH0sIGlnbm9yZWQgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCgge1xuXHRhcHBlbmRUbzogXCJhcHBlbmRcIixcblx0cHJlcGVuZFRvOiBcInByZXBlbmRcIixcblx0aW5zZXJ0QmVmb3JlOiBcImJlZm9yZVwiLFxuXHRpbnNlcnRBZnRlcjogXCJhZnRlclwiLFxuXHRyZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcbn0sIGZ1bmN0aW9uKCBuYW1lLCBvcmlnaW5hbCApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGVsZW1zLFxuXHRcdFx0cmV0ID0gW10sXG5cdFx0XHRpbnNlcnQgPSBqUXVlcnkoIHNlbGVjdG9yICksXG5cdFx0XHRsYXN0ID0gaW5zZXJ0Lmxlbmd0aCAtIDEsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgaSA8PSBsYXN0OyBpKysgKSB7XG5cdFx0XHRlbGVtcyA9IGkgPT09IGxhc3QgPyB0aGlzIDogdGhpcy5jbG9uZSggdHJ1ZSApO1xuXHRcdFx0alF1ZXJ5KCBpbnNlcnRbIGkgXSApWyBvcmlnaW5hbCBdKCBlbGVtcyApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0XHRcdC8vIC5nZXQoKSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdHB1c2guYXBwbHkoIHJldCwgZWxlbXMuZ2V0KCkgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHJldCApO1xuXHR9O1xufSApO1xudmFyIHJtYXJnaW4gPSAoIC9ebWFyZ2luLyApO1xuXG52YXIgcm51bW5vbnB4ID0gbmV3IFJlZ0V4cCggXCJeKFwiICsgcG51bSArIFwiKSg/IXB4KVthLXolXSskXCIsIFwiaVwiICk7XG5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seSwgRmlyZWZveCA8PTMwICgjMTUwOTgsICMxNDE1MClcblx0XHQvLyBJRSB0aHJvd3Mgb24gZWxlbWVudHMgY3JlYXRlZCBpbiBwb3B1cHNcblx0XHQvLyBGRiBtZWFud2hpbGUgdGhyb3dzIG9uIGZyYW1lIGVsZW1lbnRzIHRocm91Z2ggXCJkZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlXCJcblx0XHR2YXIgdmlldyA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcblxuXHRcdGlmICggIXZpZXcgfHwgIXZpZXcub3BlbmVyICkge1xuXHRcdFx0dmlldyA9IHdpbmRvdztcblx0XHR9XG5cblx0XHRyZXR1cm4gdmlldy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtICk7XG5cdH07XG5cblxuXG4oIGZ1bmN0aW9uKCkge1xuXG5cdC8vIEV4ZWN1dGluZyBib3RoIHBpeGVsUG9zaXRpb24gJiBib3hTaXppbmdSZWxpYWJsZSB0ZXN0cyByZXF1aXJlIG9ubHkgb25lIGxheW91dFxuXHQvLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuXHRmdW5jdGlvbiBjb21wdXRlU3R5bGVUZXN0cygpIHtcblxuXHRcdC8vIFRoaXMgaXMgYSBzaW5nbGV0b24sIHdlIG5lZWQgdG8gZXhlY3V0ZSBpdCBvbmx5IG9uY2Vcblx0XHRpZiAoICFkaXYgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZGl2LnN0eWxlLmNzc1RleHQgPVxuXHRcdFx0XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7XCIgK1xuXHRcdFx0XCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO1wiICtcblx0XHRcdFwibWFyZ2luOmF1dG87Ym9yZGVyOjFweDtwYWRkaW5nOjFweDtcIiArXG5cdFx0XHRcInRvcDoxJTt3aWR0aDo1MCVcIjtcblx0XHRkaXYuaW5uZXJIVE1MID0gXCJcIjtcblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApO1xuXG5cdFx0dmFyIGRpdlN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGRpdiApO1xuXHRcdHBpeGVsUG9zaXRpb25WYWwgPSBkaXZTdHlsZS50b3AgIT09IFwiMSVcIjtcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHksIEZpcmVmb3ggPD0zIC0gNDRcblx0XHRyZWxpYWJsZU1hcmdpbkxlZnRWYWwgPSBkaXZTdHlsZS5tYXJnaW5MZWZ0ID09PSBcIjJweFwiO1xuXHRcdGJveFNpemluZ1JlbGlhYmxlVmFsID0gZGl2U3R5bGUud2lkdGggPT09IFwiNHB4XCI7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5XG5cdFx0Ly8gU29tZSBzdHlsZXMgY29tZSBiYWNrIHdpdGggcGVyY2VudGFnZSB2YWx1ZXMsIGV2ZW4gdGhvdWdoIHRoZXkgc2hvdWxkbid0XG5cdFx0ZGl2LnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI1MCVcIjtcblx0XHRwaXhlbE1hcmdpblJpZ2h0VmFsID0gZGl2U3R5bGUubWFyZ2luUmlnaHQgPT09IFwiNHB4XCI7XG5cblx0XHRkb2N1bWVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoIGNvbnRhaW5lciApO1xuXG5cdFx0Ly8gTnVsbGlmeSB0aGUgZGl2IHNvIGl0IHdvdWxkbid0IGJlIHN0b3JlZCBpbiB0aGUgbWVtb3J5IGFuZFxuXHRcdC8vIGl0IHdpbGwgYWxzbyBiZSBhIHNpZ24gdGhhdCBjaGVja3MgYWxyZWFkeSBwZXJmb3JtZWRcblx0XHRkaXYgPSBudWxsO1xuXHR9XG5cblx0dmFyIHBpeGVsUG9zaXRpb25WYWwsIGJveFNpemluZ1JlbGlhYmxlVmFsLCBwaXhlbE1hcmdpblJpZ2h0VmFsLCByZWxpYWJsZU1hcmdpbkxlZnRWYWwsXG5cdFx0Y29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLFxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcblxuXHQvLyBGaW5pc2ggZWFybHkgaW4gbGltaXRlZCAobm9uLWJyb3dzZXIpIGVudmlyb25tZW50c1xuXHRpZiAoICFkaXYuc3R5bGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHQvLyBTdHlsZSBvZiBjbG9uZWQgZWxlbWVudCBhZmZlY3RzIHNvdXJjZSBlbGVtZW50IGNsb25lZCAoIzg5MDgpXG5cdGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiY29udGVudC1ib3hcIjtcblx0ZGl2LmNsb25lTm9kZSggdHJ1ZSApLnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJcIjtcblx0c3VwcG9ydC5jbGVhckNsb25lU3R5bGUgPSBkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPT09IFwiY29udGVudC1ib3hcIjtcblxuXHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyOjA7d2lkdGg6OHB4O2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDtcIiArXG5cdFx0XCJwYWRkaW5nOjA7bWFyZ2luLXRvcDoxcHg7cG9zaXRpb246YWJzb2x1dGVcIjtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBkaXYgKTtcblxuXHRqUXVlcnkuZXh0ZW5kKCBzdXBwb3J0LCB7XG5cdFx0cGl4ZWxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHBpeGVsUG9zaXRpb25WYWw7XG5cdFx0fSxcblx0XHRib3hTaXppbmdSZWxpYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIGJveFNpemluZ1JlbGlhYmxlVmFsO1xuXHRcdH0sXG5cdFx0cGl4ZWxNYXJnaW5SaWdodDogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHBpeGVsTWFyZ2luUmlnaHRWYWw7XG5cdFx0fSxcblx0XHRyZWxpYWJsZU1hcmdpbkxlZnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiByZWxpYWJsZU1hcmdpbkxlZnRWYWw7XG5cdFx0fVxuXHR9ICk7XG59ICkoKTtcblxuXG5mdW5jdGlvbiBjdXJDU1MoIGVsZW0sIG5hbWUsIGNvbXB1dGVkICkge1xuXHR2YXIgd2lkdGgsIG1pbldpZHRoLCBtYXhXaWR0aCwgcmV0LFxuXHRcdHN0eWxlID0gZWxlbS5zdHlsZTtcblxuXHRjb21wdXRlZCA9IGNvbXB1dGVkIHx8IGdldFN0eWxlcyggZWxlbSApO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdC8vIGdldFByb3BlcnR5VmFsdWUgaXMgb25seSBuZWVkZWQgZm9yIC5jc3MoJ2ZpbHRlcicpICgjMTI1MzcpXG5cdGlmICggY29tcHV0ZWQgKSB7XG5cdFx0cmV0ID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZSggbmFtZSApIHx8IGNvbXB1dGVkWyBuYW1lIF07XG5cblx0XHRpZiAoIHJldCA9PT0gXCJcIiAmJiAhalF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKSApIHtcblx0XHRcdHJldCA9IGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIEEgdHJpYnV0ZSB0byB0aGUgXCJhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXCJcblx0XHQvLyBBbmRyb2lkIEJyb3dzZXIgcmV0dXJucyBwZXJjZW50YWdlIGZvciBzb21lIHZhbHVlcyxcblx0XHQvLyBidXQgd2lkdGggc2VlbXMgdG8gYmUgcmVsaWFibHkgcGl4ZWxzLlxuXHRcdC8vIFRoaXMgaXMgYWdhaW5zdCB0aGUgQ1NTT00gZHJhZnQgc3BlYzpcblx0XHQvLyBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3Nzb20vI3Jlc29sdmVkLXZhbHVlc1xuXHRcdGlmICggIXN1cHBvcnQucGl4ZWxNYXJnaW5SaWdodCgpICYmIHJudW1ub25weC50ZXN0KCByZXQgKSAmJiBybWFyZ2luLnRlc3QoIG5hbWUgKSApIHtcblxuXHRcdFx0Ly8gUmVtZW1iZXIgdGhlIG9yaWdpbmFsIHZhbHVlc1xuXHRcdFx0d2lkdGggPSBzdHlsZS53aWR0aDtcblx0XHRcdG1pbldpZHRoID0gc3R5bGUubWluV2lkdGg7XG5cdFx0XHRtYXhXaWR0aCA9IHN0eWxlLm1heFdpZHRoO1xuXG5cdFx0XHQvLyBQdXQgaW4gdGhlIG5ldyB2YWx1ZXMgdG8gZ2V0IGEgY29tcHV0ZWQgdmFsdWUgb3V0XG5cdFx0XHRzdHlsZS5taW5XaWR0aCA9IHN0eWxlLm1heFdpZHRoID0gc3R5bGUud2lkdGggPSByZXQ7XG5cdFx0XHRyZXQgPSBjb21wdXRlZC53aWR0aDtcblxuXHRcdFx0Ly8gUmV2ZXJ0IHRoZSBjaGFuZ2VkIHZhbHVlc1xuXHRcdFx0c3R5bGUud2lkdGggPSB3aWR0aDtcblx0XHRcdHN0eWxlLm1pbldpZHRoID0gbWluV2lkdGg7XG5cdFx0XHRzdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiByZXQgIT09IHVuZGVmaW5lZCA/XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdFx0Ly8gSUUgcmV0dXJucyB6SW5kZXggdmFsdWUgYXMgYW4gaW50ZWdlci5cblx0XHRyZXQgKyBcIlwiIDpcblx0XHRyZXQ7XG59XG5cblxuZnVuY3Rpb24gYWRkR2V0SG9va0lmKCBjb25kaXRpb25GbiwgaG9va0ZuICkge1xuXG5cdC8vIERlZmluZSB0aGUgaG9vaywgd2UnbGwgY2hlY2sgb24gdGhlIGZpcnN0IHJ1biBpZiBpdCdzIHJlYWxseSBuZWVkZWQuXG5cdHJldHVybiB7XG5cdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggY29uZGl0aW9uRm4oKSApIHtcblxuXHRcdFx0XHQvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcblx0XHRcdFx0Ly8gdG8gbWlzc2luZyBkZXBlbmRlbmN5KSwgcmVtb3ZlIGl0LlxuXHRcdFx0XHRkZWxldGUgdGhpcy5nZXQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSG9vayBuZWVkZWQ7IHJlZGVmaW5lIGl0IHNvIHRoYXQgdGhlIHN1cHBvcnQgdGVzdCBpcyBub3QgZXhlY3V0ZWQgYWdhaW4uXG5cdFx0XHRyZXR1cm4gKCB0aGlzLmdldCA9IGhvb2tGbiApLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHR9XG5cdH07XG59XG5cblxudmFyXG5cblx0Ly8gU3dhcHBhYmxlIGlmIGRpc3BsYXkgaXMgbm9uZSBvciBzdGFydHMgd2l0aCB0YWJsZVxuXHQvLyBleGNlcHQgXCJ0YWJsZVwiLCBcInRhYmxlLWNlbGxcIiwgb3IgXCJ0YWJsZS1jYXB0aW9uXCJcblx0Ly8gU2VlIGhlcmUgZm9yIGRpc3BsYXkgdmFsdWVzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NTUy9kaXNwbGF5XG5cdHJkaXNwbGF5c3dhcCA9IC9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxcblx0Y3NzU2hvdyA9IHsgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiwgZGlzcGxheTogXCJibG9ja1wiIH0sXG5cdGNzc05vcm1hbFRyYW5zZm9ybSA9IHtcblx0XHRsZXR0ZXJTcGFjaW5nOiBcIjBcIixcblx0XHRmb250V2VpZ2h0OiBcIjQwMFwiXG5cdH0sXG5cblx0Y3NzUHJlZml4ZXMgPSBbIFwiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIiBdLFxuXHRlbXB0eVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLnN0eWxlO1xuXG4vLyBSZXR1cm4gYSBjc3MgcHJvcGVydHkgbWFwcGVkIHRvIGEgcG90ZW50aWFsbHkgdmVuZG9yIHByZWZpeGVkIHByb3BlcnR5XG5mdW5jdGlvbiB2ZW5kb3JQcm9wTmFtZSggbmFtZSApIHtcblxuXHQvLyBTaG9ydGN1dCBmb3IgbmFtZXMgdGhhdCBhcmUgbm90IHZlbmRvciBwcmVmaXhlZFxuXHRpZiAoIG5hbWUgaW4gZW1wdHlTdHlsZSApIHtcblx0XHRyZXR1cm4gbmFtZTtcblx0fVxuXG5cdC8vIENoZWNrIGZvciB2ZW5kb3IgcHJlZml4ZWQgbmFtZXNcblx0dmFyIGNhcE5hbWUgPSBuYW1lWyAwIF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoIDEgKSxcblx0XHRpID0gY3NzUHJlZml4ZXMubGVuZ3RoO1xuXG5cdHdoaWxlICggaS0tICkge1xuXHRcdG5hbWUgPSBjc3NQcmVmaXhlc1sgaSBdICsgY2FwTmFtZTtcblx0XHRpZiAoIG5hbWUgaW4gZW1wdHlTdHlsZSApIHtcblx0XHRcdHJldHVybiBuYW1lO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBzZXRQb3NpdGl2ZU51bWJlciggZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICkge1xuXG5cdC8vIEFueSByZWxhdGl2ZSAoKy8tKSB2YWx1ZXMgaGF2ZSBhbHJlYWR5IGJlZW5cblx0Ly8gbm9ybWFsaXplZCBhdCB0aGlzIHBvaW50XG5cdHZhciBtYXRjaGVzID0gcmNzc051bS5leGVjKCB2YWx1ZSApO1xuXHRyZXR1cm4gbWF0Y2hlcyA/XG5cblx0XHQvLyBHdWFyZCBhZ2FpbnN0IHVuZGVmaW5lZCBcInN1YnRyYWN0XCIsIGUuZy4sIHdoZW4gdXNlZCBhcyBpbiBjc3NIb29rc1xuXHRcdE1hdGgubWF4KCAwLCBtYXRjaGVzWyAyIF0gLSAoIHN1YnRyYWN0IHx8IDAgKSApICsgKCBtYXRjaGVzWyAzIF0gfHwgXCJweFwiICkgOlxuXHRcdHZhbHVlO1xufVxuXG5mdW5jdGlvbiBhdWdtZW50V2lkdGhPckhlaWdodCggZWxlbSwgbmFtZSwgZXh0cmEsIGlzQm9yZGVyQm94LCBzdHlsZXMgKSB7XG5cdHZhciBpLFxuXHRcdHZhbCA9IDA7XG5cblx0Ly8gSWYgd2UgYWxyZWFkeSBoYXZlIHRoZSByaWdodCBtZWFzdXJlbWVudCwgYXZvaWQgYXVnbWVudGF0aW9uXG5cdGlmICggZXh0cmEgPT09ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSApIHtcblx0XHRpID0gNDtcblxuXHQvLyBPdGhlcndpc2UgaW5pdGlhbGl6ZSBmb3IgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBwcm9wZXJ0aWVzXG5cdH0gZWxzZSB7XG5cdFx0aSA9IG5hbWUgPT09IFwid2lkdGhcIiA/IDEgOiAwO1xuXHR9XG5cblx0Zm9yICggOyBpIDwgNDsgaSArPSAyICkge1xuXG5cdFx0Ly8gQm90aCBib3ggbW9kZWxzIGV4Y2x1ZGUgbWFyZ2luLCBzbyBhZGQgaXQgaWYgd2Ugd2FudCBpdFxuXHRcdGlmICggZXh0cmEgPT09IFwibWFyZ2luXCIgKSB7XG5cdFx0XHR2YWwgKz0galF1ZXJ5LmNzcyggZWxlbSwgZXh0cmEgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBpc0JvcmRlckJveCApIHtcblxuXHRcdFx0Ly8gYm9yZGVyLWJveCBpbmNsdWRlcyBwYWRkaW5nLCBzbyByZW1vdmUgaXQgaWYgd2Ugd2FudCBjb250ZW50XG5cdFx0XHRpZiAoIGV4dHJhID09PSBcImNvbnRlbnRcIiApIHtcblx0XHRcdFx0dmFsIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBdCB0aGlzIHBvaW50LCBleHRyYSBpc24ndCBib3JkZXIgbm9yIG1hcmdpbiwgc28gcmVtb3ZlIGJvcmRlclxuXHRcdFx0aWYgKCBleHRyYSAhPT0gXCJtYXJnaW5cIiApIHtcblx0XHRcdFx0dmFsIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gQXQgdGhpcyBwb2ludCwgZXh0cmEgaXNuJ3QgY29udGVudCwgc28gYWRkIHBhZGRpbmdcblx0XHRcdHZhbCArPSBqUXVlcnkuY3NzKCBlbGVtLCBcInBhZGRpbmdcIiArIGNzc0V4cGFuZFsgaSBdLCB0cnVlLCBzdHlsZXMgKTtcblxuXHRcdFx0Ly8gQXQgdGhpcyBwb2ludCwgZXh0cmEgaXNuJ3QgY29udGVudCBub3IgcGFkZGluZywgc28gYWRkIGJvcmRlclxuXHRcdFx0aWYgKCBleHRyYSAhPT0gXCJwYWRkaW5nXCIgKSB7XG5cdFx0XHRcdHZhbCArPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kWyBpIF0gKyBcIldpZHRoXCIsIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhICkge1xuXG5cdC8vIFN0YXJ0IHdpdGggb2Zmc2V0IHByb3BlcnR5LCB3aGljaCBpcyBlcXVpdmFsZW50IHRvIHRoZSBib3JkZXItYm94IHZhbHVlXG5cdHZhciB2YWwsXG5cdFx0dmFsdWVJc0JvcmRlckJveCA9IHRydWUsXG5cdFx0c3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICksXG5cdFx0aXNCb3JkZXJCb3ggPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlXG5cdC8vIGluIElFIHRocm93cyBhbiBlcnJvci5cblx0aWYgKCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICkge1xuXHRcdHZhbCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KClbIG5hbWUgXTtcblx0fVxuXG5cdC8vIFNvbWUgbm9uLWh0bWwgZWxlbWVudHMgcmV0dXJuIHVuZGVmaW5lZCBmb3Igb2Zmc2V0V2lkdGgsIHNvIGNoZWNrIGZvciBudWxsL3VuZGVmaW5lZFxuXHQvLyBzdmcgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02NDkyODVcblx0Ly8gTWF0aE1MIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDkxNjY4XG5cdGlmICggdmFsIDw9IDAgfHwgdmFsID09IG51bGwgKSB7XG5cblx0XHQvLyBGYWxsIGJhY2sgdG8gY29tcHV0ZWQgdGhlbiB1bmNvbXB1dGVkIGNzcyBpZiBuZWNlc3Nhcnlcblx0XHR2YWwgPSBjdXJDU1MoIGVsZW0sIG5hbWUsIHN0eWxlcyApO1xuXHRcdGlmICggdmFsIDwgMCB8fCB2YWwgPT0gbnVsbCApIHtcblx0XHRcdHZhbCA9IGVsZW0uc3R5bGVbIG5hbWUgXTtcblx0XHR9XG5cblx0XHQvLyBDb21wdXRlZCB1bml0IGlzIG5vdCBwaXhlbHMuIFN0b3AgaGVyZSBhbmQgcmV0dXJuLlxuXHRcdGlmICggcm51bW5vbnB4LnRlc3QoIHZhbCApICkge1xuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cblx0XHQvLyBDaGVjayBmb3Igc3R5bGUgaW4gY2FzZSBhIGJyb3dzZXIgd2hpY2ggcmV0dXJucyB1bnJlbGlhYmxlIHZhbHVlc1xuXHRcdC8vIGZvciBnZXRDb21wdXRlZFN0eWxlIHNpbGVudGx5IGZhbGxzIGJhY2sgdG8gdGhlIHJlbGlhYmxlIGVsZW0uc3R5bGVcblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3ggJiZcblx0XHRcdCggc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpIHx8IHZhbCA9PT0gZWxlbS5zdHlsZVsgbmFtZSBdICk7XG5cblx0XHQvLyBOb3JtYWxpemUgXCJcIiwgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXG5cdFx0dmFsID0gcGFyc2VGbG9hdCggdmFsICkgfHwgMDtcblx0fVxuXG5cdC8vIFVzZSB0aGUgYWN0aXZlIGJveC1zaXppbmcgbW9kZWwgdG8gYWRkL3N1YnRyYWN0IGlycmVsZXZhbnQgc3R5bGVzXG5cdHJldHVybiAoIHZhbCArXG5cdFx0YXVnbWVudFdpZHRoT3JIZWlnaHQoXG5cdFx0XHRlbGVtLFxuXHRcdFx0bmFtZSxcblx0XHRcdGV4dHJhIHx8ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSxcblx0XHRcdHZhbHVlSXNCb3JkZXJCb3gsXG5cdFx0XHRzdHlsZXNcblx0XHQpXG5cdCkgKyBcInB4XCI7XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBBZGQgaW4gc3R5bGUgcHJvcGVydHkgaG9va3MgZm9yIG92ZXJyaWRpbmcgdGhlIGRlZmF1bHRcblx0Ly8gYmVoYXZpb3Igb2YgZ2V0dGluZyBhbmQgc2V0dGluZyBhIHN0eWxlIHByb3BlcnR5XG5cdGNzc0hvb2tzOiB7XG5cdFx0b3BhY2l0eToge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRcdFx0XHQvLyBXZSBzaG91bGQgYWx3YXlzIGdldCBhIG51bWJlciBiYWNrIGZyb20gb3BhY2l0eVxuXHRcdFx0XHRcdHZhciByZXQgPSBjdXJDU1MoIGVsZW0sIFwib3BhY2l0eVwiICk7XG5cdFx0XHRcdFx0cmV0dXJuIHJldCA9PT0gXCJcIiA/IFwiMVwiIDogcmV0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIERvbid0IGF1dG9tYXRpY2FsbHkgYWRkIFwicHhcIiB0byB0aGVzZSBwb3NzaWJseS11bml0bGVzcyBwcm9wZXJ0aWVzXG5cdGNzc051bWJlcjoge1xuXHRcdFwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnRcIjogdHJ1ZSxcblx0XHRcImNvbHVtbkNvdW50XCI6IHRydWUsXG5cdFx0XCJmaWxsT3BhY2l0eVwiOiB0cnVlLFxuXHRcdFwiZmxleEdyb3dcIjogdHJ1ZSxcblx0XHRcImZsZXhTaHJpbmtcIjogdHJ1ZSxcblx0XHRcImZvbnRXZWlnaHRcIjogdHJ1ZSxcblx0XHRcImxpbmVIZWlnaHRcIjogdHJ1ZSxcblx0XHRcIm9wYWNpdHlcIjogdHJ1ZSxcblx0XHRcIm9yZGVyXCI6IHRydWUsXG5cdFx0XCJvcnBoYW5zXCI6IHRydWUsXG5cdFx0XCJ3aWRvd3NcIjogdHJ1ZSxcblx0XHRcInpJbmRleFwiOiB0cnVlLFxuXHRcdFwiem9vbVwiOiB0cnVlXG5cdH0sXG5cblx0Ly8gQWRkIGluIHByb3BlcnRpZXMgd2hvc2UgbmFtZXMgeW91IHdpc2ggdG8gZml4IGJlZm9yZVxuXHQvLyBzZXR0aW5nIG9yIGdldHRpbmcgdGhlIHZhbHVlXG5cdGNzc1Byb3BzOiB7XG5cdFx0XCJmbG9hdFwiOiBcImNzc0Zsb2F0XCJcblx0fSxcblxuXHQvLyBHZXQgYW5kIHNldCB0aGUgc3R5bGUgcHJvcGVydHkgb24gYSBET00gTm9kZVxuXHRzdHlsZTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlLCBleHRyYSApIHtcblxuXHRcdC8vIERvbid0IHNldCBzdHlsZXMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXHRcdGlmICggIWVsZW0gfHwgZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4IHx8ICFlbGVtLnN0eWxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZVxuXHRcdHZhciByZXQsIHR5cGUsIGhvb2tzLFxuXHRcdFx0b3JpZ05hbWUgPSBqUXVlcnkuY2FtZWxDYXNlKCBuYW1lICksXG5cdFx0XHRzdHlsZSA9IGVsZW0uc3R5bGU7XG5cblx0XHRuYW1lID0galF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdIHx8XG5cdFx0XHQoIGpRdWVyeS5jc3NQcm9wc1sgb3JpZ05hbWUgXSA9IHZlbmRvclByb3BOYW1lKCBvcmlnTmFtZSApIHx8IG9yaWdOYW1lICk7XG5cblx0XHQvLyBHZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLCB0aGVuIHVucHJlZml4ZWQgdmVyc2lvblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuXHRcdFx0Ly8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKCM3MzQ1KVxuXHRcdFx0aWYgKCB0eXBlID09PSBcInN0cmluZ1wiICYmICggcmV0ID0gcmNzc051bS5leGVjKCB2YWx1ZSApICkgJiYgcmV0WyAxIF0gKSB7XG5cdFx0XHRcdHZhbHVlID0gYWRqdXN0Q1NTKCBlbGVtLCBuYW1lLCByZXQgKTtcblxuXHRcdFx0XHQvLyBGaXhlcyBidWcgIzkyMzdcblx0XHRcdFx0dHlwZSA9IFwibnVtYmVyXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IG51bGwgYW5kIE5hTiB2YWx1ZXMgYXJlbid0IHNldCAoIzcxMTYpXG5cdFx0XHRpZiAoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGEgbnVtYmVyIHdhcyBwYXNzZWQgaW4sIGFkZCB0aGUgdW5pdCAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxuXHRcdFx0aWYgKCB0eXBlID09PSBcIm51bWJlclwiICkge1xuXHRcdFx0XHR2YWx1ZSArPSByZXQgJiYgcmV0WyAzIF0gfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBvcmlnTmFtZSBdID8gXCJcIiA6IFwicHhcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBiYWNrZ3JvdW5kLSogcHJvcHMgYWZmZWN0IG9yaWdpbmFsIGNsb25lJ3MgdmFsdWVzXG5cdFx0XHRpZiAoICFzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSAmJiB2YWx1ZSA9PT0gXCJcIiAmJiBuYW1lLmluZGV4T2YoIFwiYmFja2dyb3VuZFwiICkgPT09IDAgKSB7XG5cdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSBcImluaGVyaXRcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCwgdXNlIHRoYXQgdmFsdWUsIG90aGVyd2lzZSBqdXN0IHNldCB0aGUgc3BlY2lmaWVkIHZhbHVlXG5cdFx0XHRpZiAoICFob29rcyB8fCAhKCBcInNldFwiIGluIGhvb2tzICkgfHxcblx0XHRcdFx0KCB2YWx1ZSA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIGV4dHJhICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBub24tY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXHRcdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdCggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBmYWxzZSwgZXh0cmEgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIGp1c3QgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBvYmplY3Rcblx0XHRcdHJldHVybiBzdHlsZVsgbmFtZSBdO1xuXHRcdH1cblx0fSxcblxuXHRjc3M6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBleHRyYSwgc3R5bGVzICkge1xuXHRcdHZhciB2YWwsIG51bSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIG5hbWUgKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZVxuXHRcdG5hbWUgPSBqUXVlcnkuY3NzUHJvcHNbIG9yaWdOYW1lIF0gfHxcblx0XHRcdCggalF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIG9yaWdOYW1lICkgfHwgb3JpZ05hbWUgKTtcblxuXHRcdC8vIFRyeSBwcmVmaXhlZCBuYW1lIGZvbGxvd2VkIGJ5IHRoZSB1bnByZWZpeGVkIG5hbWVcblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcblxuXHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsID0gaG9va3MuZ2V0KCBlbGVtLCB0cnVlLCBleHRyYSApO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSwgaWYgYSB3YXkgdG8gZ2V0IHRoZSBjb21wdXRlZCB2YWx1ZSBleGlzdHMsIHVzZSB0aGF0XG5cdFx0aWYgKCB2YWwgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgbmFtZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0Ly8gQ29udmVydCBcIm5vcm1hbFwiIHRvIGNvbXB1dGVkIHZhbHVlXG5cdFx0aWYgKCB2YWwgPT09IFwibm9ybWFsXCIgJiYgbmFtZSBpbiBjc3NOb3JtYWxUcmFuc2Zvcm0gKSB7XG5cdFx0XHR2YWwgPSBjc3NOb3JtYWxUcmFuc2Zvcm1bIG5hbWUgXTtcblx0XHR9XG5cblx0XHQvLyBNYWtlIG51bWVyaWMgaWYgZm9yY2VkIG9yIGEgcXVhbGlmaWVyIHdhcyBwcm92aWRlZCBhbmQgdmFsIGxvb2tzIG51bWVyaWNcblx0XHRpZiAoIGV4dHJhID09PSBcIlwiIHx8IGV4dHJhICkge1xuXHRcdFx0bnVtID0gcGFyc2VGbG9hdCggdmFsICk7XG5cdFx0XHRyZXR1cm4gZXh0cmEgPT09IHRydWUgfHwgaXNGaW5pdGUoIG51bSApID8gbnVtIHx8IDAgOiB2YWw7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJoZWlnaHRcIiwgXCJ3aWR0aFwiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIG5hbWUgXSA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCwgZXh0cmEgKSB7XG5cdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXG5cdFx0XHRcdC8vIENlcnRhaW4gZWxlbWVudHMgY2FuIGhhdmUgZGltZW5zaW9uIGluZm8gaWYgd2UgaW52aXNpYmx5IHNob3cgdGhlbVxuXHRcdFx0XHQvLyBidXQgaXQgbXVzdCBoYXZlIGEgY3VycmVudCBkaXNwbGF5IHN0eWxlIHRoYXQgd291bGQgYmVuZWZpdFxuXHRcdFx0XHRyZXR1cm4gcmRpc3BsYXlzd2FwLnRlc3QoIGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgKSAmJlxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDgrXG5cdFx0XHRcdFx0Ly8gVGFibGUgY29sdW1ucyBpbiBTYWZhcmkgaGF2ZSBub24temVybyBvZmZzZXRXaWR0aCAmIHplcm9cblx0XHRcdFx0XHQvLyBnZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCB1bmxlc3MgZGlzcGxheSBpcyBjaGFuZ2VkLlxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHRcdFx0XHRcdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGEgZGlzY29ubmVjdGVkIG5vZGVcblx0XHRcdFx0XHQvLyBpbiBJRSB0aHJvd3MgYW4gZXJyb3IuXG5cdFx0XHRcdFx0KCAhZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCB8fCAhZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCApID9cblx0XHRcdFx0XHRcdHN3YXAoIGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgbmFtZSwgZXh0cmEgKTtcblx0XHRcdFx0XHRcdH0gKSA6XG5cdFx0XHRcdFx0XHRnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSB7XG5cdFx0XHR2YXIgbWF0Y2hlcyxcblx0XHRcdFx0c3R5bGVzID0gZXh0cmEgJiYgZ2V0U3R5bGVzKCBlbGVtICksXG5cdFx0XHRcdHN1YnRyYWN0ID0gZXh0cmEgJiYgYXVnbWVudFdpZHRoT3JIZWlnaHQoXG5cdFx0XHRcdFx0ZWxlbSxcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdGV4dHJhLFxuXHRcdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCIsXG5cdFx0XHRcdFx0c3R5bGVzXG5cdFx0XHRcdCk7XG5cblx0XHRcdC8vIENvbnZlcnQgdG8gcGl4ZWxzIGlmIHZhbHVlIGFkanVzdG1lbnQgaXMgbmVlZGVkXG5cdFx0XHRpZiAoIHN1YnRyYWN0ICYmICggbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmXG5cdFx0XHRcdCggbWF0Y2hlc1sgMyBdIHx8IFwicHhcIiApICE9PSBcInB4XCIgKSB7XG5cblx0XHRcdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRcdHZhbHVlID0galF1ZXJ5LmNzcyggZWxlbSwgbmFtZSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0UG9zaXRpdmVOdW1iZXIoIGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCApO1xuXHRcdH1cblx0fTtcbn0gKTtcblxualF1ZXJ5LmNzc0hvb2tzLm1hcmdpbkxlZnQgPSBhZGRHZXRIb29rSWYoIHN1cHBvcnQucmVsaWFibGVNYXJnaW5MZWZ0LFxuXHRmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdHJldHVybiAoIHBhcnNlRmxvYXQoIGN1ckNTUyggZWxlbSwgXCJtYXJnaW5MZWZ0XCIgKSApIHx8XG5cdFx0XHRcdGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCAtXG5cdFx0XHRcdFx0c3dhcCggZWxlbSwgeyBtYXJnaW5MZWZ0OiAwIH0sIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcblx0XHRcdFx0XHR9IClcblx0XHRcdFx0KSArIFwicHhcIjtcblx0XHR9XG5cdH1cbik7XG5cbi8vIFRoZXNlIGhvb2tzIGFyZSB1c2VkIGJ5IGFuaW1hdGUgdG8gZXhwYW5kIHByb3BlcnRpZXNcbmpRdWVyeS5lYWNoKCB7XG5cdG1hcmdpbjogXCJcIixcblx0cGFkZGluZzogXCJcIixcblx0Ym9yZGVyOiBcIldpZHRoXCJcbn0sIGZ1bmN0aW9uKCBwcmVmaXgsIHN1ZmZpeCApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXSA9IHtcblx0XHRleHBhbmQ6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBpID0gMCxcblx0XHRcdFx0ZXhwYW5kZWQgPSB7fSxcblxuXHRcdFx0XHQvLyBBc3N1bWVzIGEgc2luZ2xlIG51bWJlciBpZiBub3QgYSBzdHJpbmdcblx0XHRcdFx0cGFydHMgPSB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgPyB2YWx1ZS5zcGxpdCggXCIgXCIgKSA6IFsgdmFsdWUgXTtcblxuXHRcdFx0Zm9yICggOyBpIDwgNDsgaSsrICkge1xuXHRcdFx0XHRleHBhbmRlZFsgcHJlZml4ICsgY3NzRXhwYW5kWyBpIF0gKyBzdWZmaXggXSA9XG5cdFx0XHRcdFx0cGFydHNbIGkgXSB8fCBwYXJ0c1sgaSAtIDIgXSB8fCBwYXJ0c1sgMCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZXhwYW5kZWQ7XG5cdFx0fVxuXHR9O1xuXG5cdGlmICggIXJtYXJnaW4udGVzdCggcHJlZml4ICkgKSB7XG5cdFx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXS5zZXQgPSBzZXRQb3NpdGl2ZU51bWJlcjtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGNzczogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdHZhciBzdHlsZXMsIGxlbixcblx0XHRcdFx0bWFwID0ge30sXG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCBuYW1lICkgKSB7XG5cdFx0XHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApO1xuXHRcdFx0XHRsZW4gPSBuYW1lLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRtYXBbIG5hbWVbIGkgXSBdID0galF1ZXJ5LmNzcyggZWxlbSwgbmFtZVsgaSBdLCBmYWxzZSwgc3R5bGVzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSwgdmFsdWUgKSA6XG5cdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIG5hbWUgKTtcblx0XHR9LCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fVxufSApO1xuXG5cbmZ1bmN0aW9uIFR3ZWVuKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApIHtcblx0cmV0dXJuIG5ldyBUd2Vlbi5wcm90b3R5cGUuaW5pdCggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcgKTtcbn1cbmpRdWVyeS5Ud2VlbiA9IFR3ZWVuO1xuXG5Ud2Vlbi5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBUd2Vlbixcblx0aW5pdDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nLCB1bml0ICkge1xuXHRcdHRoaXMuZWxlbSA9IGVsZW07XG5cdFx0dGhpcy5wcm9wID0gcHJvcDtcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBqUXVlcnkuZWFzaW5nLl9kZWZhdWx0O1xuXHRcdHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cdFx0dGhpcy5zdGFydCA9IHRoaXMubm93ID0gdGhpcy5jdXIoKTtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0XHR0aGlzLnVuaXQgPSB1bml0IHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApO1xuXHR9LFxuXHRjdXI6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRyZXR1cm4gaG9va3MgJiYgaG9va3MuZ2V0ID9cblx0XHRcdGhvb2tzLmdldCggdGhpcyApIDpcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5nZXQoIHRoaXMgKTtcblx0fSxcblx0cnVuOiBmdW5jdGlvbiggcGVyY2VudCApIHtcblx0XHR2YXIgZWFzZWQsXG5cdFx0XHRob29rcyA9IFR3ZWVuLnByb3BIb29rc1sgdGhpcy5wcm9wIF07XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5kdXJhdGlvbiApIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBqUXVlcnkuZWFzaW5nWyB0aGlzLmVhc2luZyBdKFxuXHRcdFx0XHRwZXJjZW50LCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKiBwZXJjZW50LCAwLCAxLCB0aGlzLm9wdGlvbnMuZHVyYXRpb25cblx0XHRcdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMucG9zID0gZWFzZWQgPSBwZXJjZW50O1xuXHRcdH1cblx0XHR0aGlzLm5vdyA9ICggdGhpcy5lbmQgLSB0aGlzLnN0YXJ0ICkgKiBlYXNlZCArIHRoaXMuc3RhcnQ7XG5cblx0XHRpZiAoIHRoaXMub3B0aW9ucy5zdGVwICkge1xuXHRcdFx0dGhpcy5vcHRpb25zLnN0ZXAuY2FsbCggdGhpcy5lbGVtLCB0aGlzLm5vdywgdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgaG9va3Muc2V0ICkge1xuXHRcdFx0aG9va3Muc2V0KCB0aGlzICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdFR3ZWVuLnByb3BIb29rcy5fZGVmYXVsdC5zZXQoIHRoaXMgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn07XG5cblR3ZWVuLnByb3RvdHlwZS5pbml0LnByb3RvdHlwZSA9IFR3ZWVuLnByb3RvdHlwZTtcblxuVHdlZW4ucHJvcEhvb2tzID0ge1xuXHRfZGVmYXVsdDoge1xuXHRcdGdldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdFx0dmFyIHJlc3VsdDtcblxuXHRcdFx0Ly8gVXNlIGEgcHJvcGVydHkgb24gdGhlIGVsZW1lbnQgZGlyZWN0bHkgd2hlbiBpdCBpcyBub3QgYSBET00gZWxlbWVudCxcblx0XHRcdC8vIG9yIHdoZW4gdGhlcmUgaXMgbm8gbWF0Y2hpbmcgc3R5bGUgcHJvcGVydHkgdGhhdCBleGlzdHMuXG5cdFx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgIT09IDEgfHxcblx0XHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdICE9IG51bGwgJiYgdHdlZW4uZWxlbS5zdHlsZVsgdHdlZW4ucHJvcCBdID09IG51bGwgKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIGFzIGEgM3JkIHBhcmFtZXRlciB0byAuY3NzIHdpbGwgYXV0b21hdGljYWxseVxuXHRcdFx0Ly8gYXR0ZW1wdCBhIHBhcnNlRmxvYXQgYW5kIGZhbGxiYWNrIHRvIGEgc3RyaW5nIGlmIHRoZSBwYXJzZSBmYWlscy5cblx0XHRcdC8vIFNpbXBsZSB2YWx1ZXMgc3VjaCBhcyBcIjEwcHhcIiBhcmUgcGFyc2VkIHRvIEZsb2F0O1xuXHRcdFx0Ly8gY29tcGxleCB2YWx1ZXMgc3VjaCBhcyBcInJvdGF0ZSgxcmFkKVwiIGFyZSByZXR1cm5lZCBhcy1pcy5cblx0XHRcdHJlc3VsdCA9IGpRdWVyeS5jc3MoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIFwiXCIgKTtcblxuXHRcdFx0Ly8gRW1wdHkgc3RyaW5ncywgbnVsbCwgdW5kZWZpbmVkIGFuZCBcImF1dG9cIiBhcmUgY29udmVydGVkIHRvIDAuXG5cdFx0XHRyZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXG5cdFx0XHQvLyBVc2Ugc3RlcCBob29rIGZvciBiYWNrIGNvbXBhdC5cblx0XHRcdC8vIFVzZSBjc3NIb29rIGlmIGl0cyB0aGVyZS5cblx0XHRcdC8vIFVzZSAuc3R5bGUgaWYgYXZhaWxhYmxlIGFuZCB1c2UgcGxhaW4gcHJvcGVydGllcyB3aGVyZSBhdmFpbGFibGUuXG5cdFx0XHRpZiAoIGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS5meC5zdGVwWyB0d2Vlbi5wcm9wIF0oIHR3ZWVuICk7XG5cdFx0XHR9IGVsc2UgaWYgKCB0d2Vlbi5lbGVtLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdCggdHdlZW4uZWxlbS5zdHlsZVsgalF1ZXJ5LmNzc1Byb3BzWyB0d2Vlbi5wcm9wIF0gXSAhPSBudWxsIHx8XG5cdFx0XHRcdFx0alF1ZXJ5LmNzc0hvb2tzWyB0d2Vlbi5wcm9wIF0gKSApIHtcblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCB0d2Vlbi5ub3cgKyB0d2Vlbi51bml0ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuLy8gUGFuaWMgYmFzZWQgYXBwcm9hY2ggdG8gc2V0dGluZyB0aGluZ3Mgb24gZGlzY29ubmVjdGVkIG5vZGVzXG5Ud2Vlbi5wcm9wSG9va3Muc2Nyb2xsVG9wID0gVHdlZW4ucHJvcEhvb2tzLnNjcm9sbExlZnQgPSB7XG5cdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAmJiB0d2Vlbi5lbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZWFzaW5nID0ge1xuXHRsaW5lYXI6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiBwO1xuXHR9LFxuXHRzd2luZzogZnVuY3Rpb24oIHAgKSB7XG5cdFx0cmV0dXJuIDAuNSAtIE1hdGguY29zKCBwICogTWF0aC5QSSApIC8gMjtcblx0fSxcblx0X2RlZmF1bHQ6IFwic3dpbmdcIlxufTtcblxualF1ZXJ5LmZ4ID0gVHdlZW4ucHJvdG90eXBlLmluaXQ7XG5cbi8vIEJhY2sgY29tcGF0IDwxLjggZXh0ZW5zaW9uIHBvaW50XG5qUXVlcnkuZnguc3RlcCA9IHt9O1xuXG5cblxuXG52YXJcblx0ZnhOb3csIHRpbWVySWQsXG5cdHJmeHR5cGVzID0gL14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFxuXHRycnVuID0gL3F1ZXVlSG9va3MkLztcblxuZnVuY3Rpb24gcmFmKCkge1xuXHRpZiAoIHRpbWVySWQgKSB7XG5cdFx0d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSggcmFmICk7XG5cdFx0alF1ZXJ5LmZ4LnRpY2soKTtcblx0fVxufVxuXG4vLyBBbmltYXRpb25zIGNyZWF0ZWQgc3luY2hyb25vdXNseSB3aWxsIHJ1biBzeW5jaHJvbm91c2x5XG5mdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcblx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdGZ4Tm93ID0gdW5kZWZpbmVkO1xuXHR9ICk7XG5cdHJldHVybiAoIGZ4Tm93ID0galF1ZXJ5Lm5vdygpICk7XG59XG5cbi8vIEdlbmVyYXRlIHBhcmFtZXRlcnMgdG8gY3JlYXRlIGEgc3RhbmRhcmQgYW5pbWF0aW9uXG5mdW5jdGlvbiBnZW5GeCggdHlwZSwgaW5jbHVkZVdpZHRoICkge1xuXHR2YXIgd2hpY2gsXG5cdFx0aSA9IDAsXG5cdFx0YXR0cnMgPSB7IGhlaWdodDogdHlwZSB9O1xuXG5cdC8vIElmIHdlIGluY2x1ZGUgd2lkdGgsIHN0ZXAgdmFsdWUgaXMgMSB0byBkbyBhbGwgY3NzRXhwYW5kIHZhbHVlcyxcblx0Ly8gb3RoZXJ3aXNlIHN0ZXAgdmFsdWUgaXMgMiB0byBza2lwIG92ZXIgTGVmdCBhbmQgUmlnaHRcblx0aW5jbHVkZVdpZHRoID0gaW5jbHVkZVdpZHRoID8gMSA6IDA7XG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiAtIGluY2x1ZGVXaWR0aCApIHtcblx0XHR3aGljaCA9IGNzc0V4cGFuZFsgaSBdO1xuXHRcdGF0dHJzWyBcIm1hcmdpblwiICsgd2hpY2ggXSA9IGF0dHJzWyBcInBhZGRpbmdcIiArIHdoaWNoIF0gPSB0eXBlO1xuXHR9XG5cblx0aWYgKCBpbmNsdWRlV2lkdGggKSB7XG5cdFx0YXR0cnMub3BhY2l0eSA9IGF0dHJzLndpZHRoID0gdHlwZTtcblx0fVxuXG5cdHJldHVybiBhdHRycztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHdlZW4oIHZhbHVlLCBwcm9wLCBhbmltYXRpb24gKSB7XG5cdHZhciB0d2Vlbixcblx0XHRjb2xsZWN0aW9uID0gKCBBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSB8fCBbXSApLmNvbmNhdCggQW5pbWF0aW9uLnR3ZWVuZXJzWyBcIipcIiBdICksXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGlmICggKCB0d2VlbiA9IGNvbGxlY3Rpb25bIGluZGV4IF0uY2FsbCggYW5pbWF0aW9uLCBwcm9wLCB2YWx1ZSApICkgKSB7XG5cblx0XHRcdC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHByb3BlcnR5XG5cdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcmVmaWx0ZXIoIGVsZW0sIHByb3BzLCBvcHRzICkge1xuXHR2YXIgcHJvcCwgdmFsdWUsIHRvZ2dsZSwgaG9va3MsIG9sZGZpcmUsIHByb3BUd2VlbiwgcmVzdG9yZURpc3BsYXksIGRpc3BsYXksXG5cdFx0aXNCb3ggPSBcIndpZHRoXCIgaW4gcHJvcHMgfHwgXCJoZWlnaHRcIiBpbiBwcm9wcyxcblx0XHRhbmltID0gdGhpcyxcblx0XHRvcmlnID0ge30sXG5cdFx0c3R5bGUgPSBlbGVtLnN0eWxlLFxuXHRcdGhpZGRlbiA9IGVsZW0ubm9kZVR5cGUgJiYgaXNIaWRkZW5XaXRoaW5UcmVlKCBlbGVtICksXG5cdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZnhzaG93XCIgKTtcblxuXHQvLyBRdWV1ZS1za2lwcGluZyBhbmltYXRpb25zIGhpamFjayB0aGUgZnggaG9va3Ncblx0aWYgKCAhb3B0cy5xdWV1ZSApIHtcblx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgXCJmeFwiICk7XG5cdFx0aWYgKCBob29rcy51bnF1ZXVlZCA9PSBudWxsICkge1xuXHRcdFx0aG9va3MudW5xdWV1ZWQgPSAwO1xuXHRcdFx0b2xkZmlyZSA9IGhvb2tzLmVtcHR5LmZpcmU7XG5cdFx0XHRob29rcy5lbXB0eS5maXJlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggIWhvb2tzLnVucXVldWVkICkge1xuXHRcdFx0XHRcdG9sZGZpcmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHR9XG5cdFx0aG9va3MudW5xdWV1ZWQrKztcblxuXHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRW5zdXJlIHRoZSBjb21wbGV0ZSBoYW5kbGVyIGlzIGNhbGxlZCBiZWZvcmUgdGhpcyBjb21wbGV0ZXNcblx0XHRcdGFuaW0uYWx3YXlzKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0aG9va3MudW5xdWV1ZWQtLTtcblx0XHRcdFx0aWYgKCAhalF1ZXJ5LnF1ZXVlKCBlbGVtLCBcImZ4XCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gRGV0ZWN0IHNob3cvaGlkZSBhbmltYXRpb25zXG5cdGZvciAoIHByb3AgaW4gcHJvcHMgKSB7XG5cdFx0dmFsdWUgPSBwcm9wc1sgcHJvcCBdO1xuXHRcdGlmICggcmZ4dHlwZXMudGVzdCggdmFsdWUgKSApIHtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgcHJvcCBdO1xuXHRcdFx0dG9nZ2xlID0gdG9nZ2xlIHx8IHZhbHVlID09PSBcInRvZ2dsZVwiO1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gKCBoaWRkZW4gPyBcImhpZGVcIiA6IFwic2hvd1wiICkgKSB7XG5cblx0XHRcdFx0Ly8gUHJldGVuZCB0byBiZSBoaWRkZW4gaWYgdGhpcyBpcyBhIFwic2hvd1wiIGFuZFxuXHRcdFx0XHQvLyB0aGVyZSBpcyBzdGlsbCBkYXRhIGZyb20gYSBzdG9wcGVkIHNob3cvaGlkZVxuXHRcdFx0XHRpZiAoIHZhbHVlID09PSBcInNob3dcIiAmJiBkYXRhU2hvdyAmJiBkYXRhU2hvd1sgcHJvcCBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0aGlkZGVuID0gdHJ1ZTtcblxuXHRcdFx0XHQvLyBJZ25vcmUgYWxsIG90aGVyIG5vLW9wIHNob3cvaGlkZSBkYXRhXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG9yaWdbIHByb3AgXSA9IGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gfHwgalF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQmFpbCBvdXQgaWYgdGhpcyBpcyBhIG5vLW9wIGxpa2UgLmhpZGUoKS5oaWRlKClcblx0cHJvcFR3ZWVuID0gIWpRdWVyeS5pc0VtcHR5T2JqZWN0KCBwcm9wcyApO1xuXHRpZiAoICFwcm9wVHdlZW4gJiYgalF1ZXJ5LmlzRW1wdHlPYmplY3QoIG9yaWcgKSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBSZXN0cmljdCBcIm92ZXJmbG93XCIgYW5kIFwiZGlzcGxheVwiIHN0eWxlcyBkdXJpbmcgYm94IGFuaW1hdGlvbnNcblx0aWYgKCBpc0JveCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEsIEVkZ2UgMTIgLSAxM1xuXHRcdC8vIFJlY29yZCBhbGwgMyBvdmVyZmxvdyBhdHRyaWJ1dGVzIGJlY2F1c2UgSUUgZG9lcyBub3QgaW5mZXIgdGhlIHNob3J0aGFuZFxuXHRcdC8vIGZyb20gaWRlbnRpY2FsbHktdmFsdWVkIG92ZXJmbG93WCBhbmQgb3ZlcmZsb3dZXG5cdFx0b3B0cy5vdmVyZmxvdyA9IFsgc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZIF07XG5cblx0XHQvLyBJZGVudGlmeSBhIGRpc3BsYXkgdHlwZSwgcHJlZmVycmluZyBvbGQgc2hvdy9oaWRlIGRhdGEgb3ZlciB0aGUgQ1NTIGNhc2NhZGVcblx0XHRyZXN0b3JlRGlzcGxheSA9IGRhdGFTaG93ICYmIGRhdGFTaG93LmRpc3BsYXk7XG5cdFx0aWYgKCByZXN0b3JlRGlzcGxheSA9PSBudWxsICkge1xuXHRcdFx0cmVzdG9yZURpc3BsYXkgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0fVxuXHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ICkge1xuXHRcdFx0XHRkaXNwbGF5ID0gcmVzdG9yZURpc3BsYXk7XG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEdldCBub25lbXB0eSB2YWx1ZShzKSBieSB0ZW1wb3JhcmlseSBmb3JjaW5nIHZpc2liaWxpdHlcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdLCB0cnVlICk7XG5cdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZWxlbS5zdHlsZS5kaXNwbGF5IHx8IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHRcdFx0c2hvd0hpZGUoIFsgZWxlbSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQW5pbWF0ZSBpbmxpbmUgZWxlbWVudHMgYXMgaW5saW5lLWJsb2NrXG5cdFx0aWYgKCBkaXNwbGF5ID09PSBcImlubGluZVwiIHx8IGRpc3BsYXkgPT09IFwiaW5saW5lLWJsb2NrXCIgJiYgcmVzdG9yZURpc3BsYXkgIT0gbnVsbCApIHtcblx0XHRcdGlmICggalF1ZXJ5LmNzcyggZWxlbSwgXCJmbG9hdFwiICkgPT09IFwibm9uZVwiICkge1xuXG5cdFx0XHRcdC8vIFJlc3RvcmUgdGhlIG9yaWdpbmFsIGRpc3BsYXkgdmFsdWUgYXQgdGhlIGVuZCBvZiBwdXJlIHNob3cvaGlkZSBhbmltYXRpb25zXG5cdFx0XHRcdGlmICggIXByb3BUd2VlbiApIHtcblx0XHRcdFx0XHRhbmltLmRvbmUoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHRpZiAoIHJlc3RvcmVEaXNwbGF5ID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRkaXNwbGF5ID0gc3R5bGUuZGlzcGxheTtcblx0XHRcdFx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZGlzcGxheSA9PT0gXCJub25lXCIgPyBcIlwiIDogZGlzcGxheTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBvcHRzLm92ZXJmbG93ICkge1xuXHRcdHN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cdFx0XHRzdHlsZS5vdmVyZmxvdyA9IG9wdHMub3ZlcmZsb3dbIDAgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WCA9IG9wdHMub3ZlcmZsb3dbIDEgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WSA9IG9wdHMub3ZlcmZsb3dbIDIgXTtcblx0XHR9ICk7XG5cdH1cblxuXHQvLyBJbXBsZW1lbnQgc2hvdy9oaWRlIGFuaW1hdGlvbnNcblx0cHJvcFR3ZWVuID0gZmFsc2U7XG5cdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblxuXHRcdC8vIEdlbmVyYWwgc2hvdy9oaWRlIHNldHVwIGZvciB0aGlzIGVsZW1lbnQgYW5pbWF0aW9uXG5cdFx0aWYgKCAhcHJvcFR3ZWVuICkge1xuXHRcdFx0aWYgKCBkYXRhU2hvdyApIHtcblx0XHRcdFx0aWYgKCBcImhpZGRlblwiIGluIGRhdGFTaG93ICkge1xuXHRcdFx0XHRcdGhpZGRlbiA9IGRhdGFTaG93LmhpZGRlbjtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF0YVNob3cgPSBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIFwiZnhzaG93XCIsIHsgZGlzcGxheTogcmVzdG9yZURpc3BsYXkgfSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdG9yZSBoaWRkZW4vdmlzaWJsZSBmb3IgdG9nZ2xlIHNvIGAuc3RvcCgpLnRvZ2dsZSgpYCBcInJldmVyc2VzXCJcblx0XHRcdGlmICggdG9nZ2xlICkge1xuXHRcdFx0XHRkYXRhU2hvdy5oaWRkZW4gPSAhaGlkZGVuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTaG93IGVsZW1lbnRzIGJlZm9yZSBhbmltYXRpbmcgdGhlbVxuXHRcdFx0aWYgKCBoaWRkZW4gKSB7XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSwgdHJ1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuXHRcdFx0YW5pbS5kb25lKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuXHRcdFx0XHQvLyBUaGUgZmluYWwgc3RlcCBvZiBhIFwiaGlkZVwiIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBoaWRpbmcgdGhlIGVsZW1lbnRcblx0XHRcdFx0aWYgKCAhaGlkZGVuICkge1xuXHRcdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgXCJmeHNob3dcIiApO1xuXHRcdFx0XHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBvcmlnWyBwcm9wIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdC8vIFBlci1wcm9wZXJ0eSBzZXR1cFxuXHRcdHByb3BUd2VlbiA9IGNyZWF0ZVR3ZWVuKCBoaWRkZW4gPyBkYXRhU2hvd1sgcHJvcCBdIDogMCwgcHJvcCwgYW5pbSApO1xuXHRcdGlmICggISggcHJvcCBpbiBkYXRhU2hvdyApICkge1xuXHRcdFx0ZGF0YVNob3dbIHByb3AgXSA9IHByb3BUd2Vlbi5zdGFydDtcblx0XHRcdGlmICggaGlkZGVuICkge1xuXHRcdFx0XHRwcm9wVHdlZW4uZW5kID0gcHJvcFR3ZWVuLnN0YXJ0O1xuXHRcdFx0XHRwcm9wVHdlZW4uc3RhcnQgPSAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBwcm9wRmlsdGVyKCBwcm9wcywgc3BlY2lhbEVhc2luZyApIHtcblx0dmFyIGluZGV4LCBuYW1lLCBlYXNpbmcsIHZhbHVlLCBob29rcztcblxuXHQvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3Ncblx0Zm9yICggaW5kZXggaW4gcHJvcHMgKSB7XG5cdFx0bmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIGluZGV4ICk7XG5cdFx0ZWFzaW5nID0gc3BlY2lhbEVhc2luZ1sgbmFtZSBdO1xuXHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF07XG5cdFx0aWYgKCBqUXVlcnkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdGVhc2luZyA9IHZhbHVlWyAxIF07XG5cdFx0XHR2YWx1ZSA9IHByb3BzWyBpbmRleCBdID0gdmFsdWVbIDAgXTtcblx0XHR9XG5cblx0XHRpZiAoIGluZGV4ICE9PSBuYW1lICkge1xuXHRcdFx0cHJvcHNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBpbmRleCBdO1xuXHRcdH1cblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF07XG5cdFx0aWYgKCBob29rcyAmJiBcImV4cGFuZFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsdWUgPSBob29rcy5leHBhbmQoIHZhbHVlICk7XG5cdFx0XHRkZWxldGUgcHJvcHNbIG5hbWUgXTtcblxuXHRcdFx0Ly8gTm90IHF1aXRlICQuZXh0ZW5kLCB0aGlzIHdvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBrZXlzLlxuXHRcdFx0Ly8gUmV1c2luZyAnaW5kZXgnIGJlY2F1c2Ugd2UgaGF2ZSB0aGUgY29ycmVjdCBcIm5hbWVcIlxuXHRcdFx0Zm9yICggaW5kZXggaW4gdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggISggaW5kZXggaW4gcHJvcHMgKSApIHtcblx0XHRcdFx0XHRwcm9wc1sgaW5kZXggXSA9IHZhbHVlWyBpbmRleCBdO1xuXHRcdFx0XHRcdHNwZWNpYWxFYXNpbmdbIGluZGV4IF0gPSBlYXNpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BlY2lhbEVhc2luZ1sgbmFtZSBdID0gZWFzaW5nO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBBbmltYXRpb24oIGVsZW0sIHByb3BlcnRpZXMsIG9wdGlvbnMgKSB7XG5cdHZhciByZXN1bHQsXG5cdFx0c3RvcHBlZCxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gQW5pbWF0aW9uLnByZWZpbHRlcnMubGVuZ3RoLFxuXHRcdGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCkuYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRG9uJ3QgbWF0Y2ggZWxlbSBpbiB0aGUgOmFuaW1hdGVkIHNlbGVjdG9yXG5cdFx0XHRkZWxldGUgdGljay5lbGVtO1xuXHRcdH0gKSxcblx0XHR0aWNrID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIHN0b3BwZWQgKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHRcdHZhciBjdXJyZW50VGltZSA9IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG5cdFx0XHRcdHJlbWFpbmluZyA9IE1hdGgubWF4KCAwLCBhbmltYXRpb24uc3RhcnRUaW1lICsgYW5pbWF0aW9uLmR1cmF0aW9uIC0gY3VycmVudFRpbWUgKSxcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDIuMyBvbmx5XG5cdFx0XHRcdC8vIEFyY2hhaWMgY3Jhc2ggYnVnIHdvbid0IGFsbG93IHVzIHRvIHVzZSBgMSAtICggMC41IHx8IDAgKWAgKCMxMjQ5Nylcblx0XHRcdFx0dGVtcCA9IHJlbWFpbmluZyAvIGFuaW1hdGlvbi5kdXJhdGlvbiB8fCAwLFxuXHRcdFx0XHRwZXJjZW50ID0gMSAtIHRlbXAsXG5cdFx0XHRcdGluZGV4ID0gMCxcblx0XHRcdFx0bGVuZ3RoID0gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGg7XG5cblx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCBwZXJjZW50ICk7XG5cdFx0XHR9XG5cblx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBwZXJjZW50LCByZW1haW5pbmcgXSApO1xuXG5cdFx0XHRpZiAoIHBlcmNlbnQgPCAxICYmIGxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIHJlbWFpbmluZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiBdICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2UoIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRwcm9wczogalF1ZXJ5LmV4dGVuZCgge30sIHByb3BlcnRpZXMgKSxcblx0XHRcdG9wdHM6IGpRdWVyeS5leHRlbmQoIHRydWUsIHtcblx0XHRcdFx0c3BlY2lhbEVhc2luZzoge30sXG5cdFx0XHRcdGVhc2luZzogalF1ZXJ5LmVhc2luZy5fZGVmYXVsdFxuXHRcdFx0fSwgb3B0aW9ucyApLFxuXHRcdFx0b3JpZ2luYWxQcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuXHRcdFx0b3JpZ2luYWxPcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lOiBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0ZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG5cdFx0XHR0d2VlbnM6IFtdLFxuXHRcdFx0Y3JlYXRlVHdlZW46IGZ1bmN0aW9uKCBwcm9wLCBlbmQgKSB7XG5cdFx0XHRcdHZhciB0d2VlbiA9IGpRdWVyeS5Ud2VlbiggZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCxcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmdbIHByb3AgXSB8fCBhbmltYXRpb24ub3B0cy5lYXNpbmcgKTtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVucy5wdXNoKCB0d2VlbiApO1xuXHRcdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0XHR9LFxuXHRcdFx0c3RvcDogZnVuY3Rpb24oIGdvdG9FbmQgKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IDAsXG5cblx0XHRcdFx0XHQvLyBJZiB3ZSBhcmUgZ29pbmcgdG8gdGhlIGVuZCwgd2Ugd2FudCB0byBydW4gYWxsIHRoZSB0d2VlbnNcblx0XHRcdFx0XHQvLyBvdGhlcndpc2Ugd2Ugc2tpcCB0aGlzIHBhcnRcblx0XHRcdFx0XHRsZW5ndGggPSBnb3RvRW5kID8gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGggOiAwO1xuXHRcdFx0XHRpZiAoIHN0b3BwZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RvcHBlZCA9IHRydWU7XG5cdFx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIDEgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlc29sdmUgd2hlbiB3ZSBwbGF5ZWQgdGhlIGxhc3QgZnJhbWU7IG90aGVyd2lzZSwgcmVqZWN0XG5cdFx0XHRcdGlmICggZ290b0VuZCApIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgMSwgMCBdICk7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBnb3RvRW5kIF0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fSApLFxuXHRcdHByb3BzID0gYW5pbWF0aW9uLnByb3BzO1xuXG5cdHByb3BGaWx0ZXIoIHByb3BzLCBhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nICk7XG5cblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRyZXN1bHQgPSBBbmltYXRpb24ucHJlZmlsdGVyc1sgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIGVsZW0sIHByb3BzLCBhbmltYXRpb24ub3B0cyApO1xuXHRcdGlmICggcmVzdWx0ICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggcmVzdWx0LnN0b3AgKSApIHtcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCBhbmltYXRpb24uZWxlbSwgYW5pbWF0aW9uLm9wdHMucXVldWUgKS5zdG9wID1cblx0XHRcdFx0XHRqUXVlcnkucHJveHkoIHJlc3VsdC5zdG9wLCByZXN1bHQgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9XG5cblx0alF1ZXJ5Lm1hcCggcHJvcHMsIGNyZWF0ZVR3ZWVuLCBhbmltYXRpb24gKTtcblxuXHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBhbmltYXRpb24ub3B0cy5zdGFydCApICkge1xuXHRcdGFuaW1hdGlvbi5vcHRzLnN0YXJ0LmNhbGwoIGVsZW0sIGFuaW1hdGlvbiApO1xuXHR9XG5cblx0alF1ZXJ5LmZ4LnRpbWVyKFxuXHRcdGpRdWVyeS5leHRlbmQoIHRpY2ssIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRhbmltOiBhbmltYXRpb24sXG5cdFx0XHRxdWV1ZTogYW5pbWF0aW9uLm9wdHMucXVldWVcblx0XHR9IClcblx0KTtcblxuXHQvLyBhdHRhY2ggY2FsbGJhY2tzIGZyb20gb3B0aW9uc1xuXHRyZXR1cm4gYW5pbWF0aW9uLnByb2dyZXNzKCBhbmltYXRpb24ub3B0cy5wcm9ncmVzcyApXG5cdFx0LmRvbmUoIGFuaW1hdGlvbi5vcHRzLmRvbmUsIGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlIClcblx0XHQuZmFpbCggYW5pbWF0aW9uLm9wdHMuZmFpbCApXG5cdFx0LmFsd2F5cyggYW5pbWF0aW9uLm9wdHMuYWx3YXlzICk7XG59XG5cbmpRdWVyeS5BbmltYXRpb24gPSBqUXVlcnkuZXh0ZW5kKCBBbmltYXRpb24sIHtcblxuXHR0d2VlbmVyczoge1xuXHRcdFwiKlwiOiBbIGZ1bmN0aW9uKCBwcm9wLCB2YWx1ZSApIHtcblx0XHRcdHZhciB0d2VlbiA9IHRoaXMuY3JlYXRlVHdlZW4oIHByb3AsIHZhbHVlICk7XG5cdFx0XHRhZGp1c3RDU1MoIHR3ZWVuLmVsZW0sIHByb3AsIHJjc3NOdW0uZXhlYyggdmFsdWUgKSwgdHdlZW4gKTtcblx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHR9IF1cblx0fSxcblxuXHR0d2VlbmVyOiBmdW5jdGlvbiggcHJvcHMsIGNhbGxiYWNrICkge1xuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHByb3BzICkgKSB7XG5cdFx0XHRjYWxsYmFjayA9IHByb3BzO1xuXHRcdFx0cHJvcHMgPSBbIFwiKlwiIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb3BzID0gcHJvcHMubWF0Y2goIHJub3RodG1sd2hpdGUgKTtcblx0XHR9XG5cblx0XHR2YXIgcHJvcCxcblx0XHRcdGluZGV4ID0gMCxcblx0XHRcdGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRwcm9wID0gcHJvcHNbIGluZGV4IF07XG5cdFx0XHRBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXSA9IEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdIHx8IFtdO1xuXHRcdFx0QW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0udW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH0sXG5cblx0cHJlZmlsdGVyczogWyBkZWZhdWx0UHJlZmlsdGVyIF0sXG5cblx0cHJlZmlsdGVyOiBmdW5jdGlvbiggY2FsbGJhY2ssIHByZXBlbmQgKSB7XG5cdFx0aWYgKCBwcmVwZW5kICkge1xuXHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMudW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0QW5pbWF0aW9uLnByZWZpbHRlcnMucHVzaCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH1cbn0gKTtcblxualF1ZXJ5LnNwZWVkID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGZuICkge1xuXHR2YXIgb3B0ID0gc3BlZWQgJiYgdHlwZW9mIHNwZWVkID09PSBcIm9iamVjdFwiID8galF1ZXJ5LmV4dGVuZCgge30sIHNwZWVkICkgOiB7XG5cdFx0Y29tcGxldGU6IGZuIHx8ICFmbiAmJiBlYXNpbmcgfHxcblx0XHRcdGpRdWVyeS5pc0Z1bmN0aW9uKCBzcGVlZCApICYmIHNwZWVkLFxuXHRcdGR1cmF0aW9uOiBzcGVlZCxcblx0XHRlYXNpbmc6IGZuICYmIGVhc2luZyB8fCBlYXNpbmcgJiYgIWpRdWVyeS5pc0Z1bmN0aW9uKCBlYXNpbmcgKSAmJiBlYXNpbmdcblx0fTtcblxuXHQvLyBHbyB0byB0aGUgZW5kIHN0YXRlIGlmIGZ4IGFyZSBvZmYgb3IgaWYgZG9jdW1lbnQgaXMgaGlkZGVuXG5cdGlmICggalF1ZXJ5LmZ4Lm9mZiB8fCBkb2N1bWVudC5oaWRkZW4gKSB7XG5cdFx0b3B0LmR1cmF0aW9uID0gMDtcblxuXHR9IGVsc2Uge1xuXHRcdGlmICggdHlwZW9mIG9wdC5kdXJhdGlvbiAhPT0gXCJudW1iZXJcIiApIHtcblx0XHRcdGlmICggb3B0LmR1cmF0aW9uIGluIGpRdWVyeS5meC5zcGVlZHMgKSB7XG5cdFx0XHRcdG9wdC5kdXJhdGlvbiA9IGpRdWVyeS5meC5zcGVlZHNbIG9wdC5kdXJhdGlvbiBdO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzLl9kZWZhdWx0O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIE5vcm1hbGl6ZSBvcHQucXVldWUgLSB0cnVlL3VuZGVmaW5lZC9udWxsIC0+IFwiZnhcIlxuXHRpZiAoIG9wdC5xdWV1ZSA9PSBudWxsIHx8IG9wdC5xdWV1ZSA9PT0gdHJ1ZSApIHtcblx0XHRvcHQucXVldWUgPSBcImZ4XCI7XG5cdH1cblxuXHQvLyBRdWV1ZWluZ1xuXHRvcHQub2xkID0gb3B0LmNvbXBsZXRlO1xuXG5cdG9wdC5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIG9wdC5vbGQgKSApIHtcblx0XHRcdG9wdC5vbGQuY2FsbCggdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggb3B0LnF1ZXVlICkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIG9wdC5xdWV1ZSApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gb3B0O1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRmYWRlVG86IGZ1bmN0aW9uKCBzcGVlZCwgdG8sIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cblx0XHQvLyBTaG93IGFueSBoaWRkZW4gZWxlbWVudHMgYWZ0ZXIgc2V0dGluZyBvcGFjaXR5IHRvIDBcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoIGlzSGlkZGVuV2l0aGluVHJlZSApLmNzcyggXCJvcGFjaXR5XCIsIDAgKS5zaG93KClcblxuXHRcdFx0Ly8gQW5pbWF0ZSB0byB0aGUgdmFsdWUgc3BlY2lmaWVkXG5cdFx0XHQuZW5kKCkuYW5pbWF0ZSggeyBvcGFjaXR5OiB0byB9LCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9LFxuXHRhbmltYXRlOiBmdW5jdGlvbiggcHJvcCwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0dmFyIGVtcHR5ID0galF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3AgKSxcblx0XHRcdG9wdGFsbCA9IGpRdWVyeS5zcGVlZCggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSxcblx0XHRcdGRvQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gT3BlcmF0ZSBvbiBhIGNvcHkgb2YgcHJvcCBzbyBwZXItcHJvcGVydHkgZWFzaW5nIHdvbid0IGJlIGxvc3Rcblx0XHRcdFx0dmFyIGFuaW0gPSBBbmltYXRpb24oIHRoaXMsIGpRdWVyeS5leHRlbmQoIHt9LCBwcm9wICksIG9wdGFsbCApO1xuXG5cdFx0XHRcdC8vIEVtcHR5IGFuaW1hdGlvbnMsIG9yIGZpbmlzaGluZyByZXNvbHZlcyBpbW1lZGlhdGVseVxuXHRcdFx0XHRpZiAoIGVtcHR5IHx8IGRhdGFQcml2LmdldCggdGhpcywgXCJmaW5pc2hcIiApICkge1xuXHRcdFx0XHRcdGFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZG9BbmltYXRpb24uZmluaXNoID0gZG9BbmltYXRpb247XG5cblx0XHRyZXR1cm4gZW1wdHkgfHwgb3B0YWxsLnF1ZXVlID09PSBmYWxzZSA/XG5cdFx0XHR0aGlzLmVhY2goIGRvQW5pbWF0aW9uICkgOlxuXHRcdFx0dGhpcy5xdWV1ZSggb3B0YWxsLnF1ZXVlLCBkb0FuaW1hdGlvbiApO1xuXHR9LFxuXHRzdG9wOiBmdW5jdGlvbiggdHlwZSwgY2xlYXJRdWV1ZSwgZ290b0VuZCApIHtcblx0XHR2YXIgc3RvcFF1ZXVlID0gZnVuY3Rpb24oIGhvb2tzICkge1xuXHRcdFx0dmFyIHN0b3AgPSBob29rcy5zdG9wO1xuXHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRzdG9wKCBnb3RvRW5kICk7XG5cdFx0fTtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRnb3RvRW5kID0gY2xlYXJRdWV1ZTtcblx0XHRcdGNsZWFyUXVldWUgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBjbGVhclF1ZXVlICYmIHR5cGUgIT09IGZhbHNlICkge1xuXHRcdFx0dGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZGVxdWV1ZSA9IHRydWUsXG5cdFx0XHRcdGluZGV4ID0gdHlwZSAhPSBudWxsICYmIHR5cGUgKyBcInF1ZXVlSG9va3NcIixcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcblx0XHRcdFx0ZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApO1xuXG5cdFx0XHRpZiAoIGluZGV4ICkge1xuXHRcdFx0XHRpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICkge1xuXHRcdFx0XHRcdHN0b3BRdWV1ZSggZGF0YVsgaW5kZXggXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKCBpbmRleCBpbiBkYXRhICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgJiYgcnJ1bi50ZXN0KCBpbmRleCApICkge1xuXHRcdFx0XHRcdFx0c3RvcFF1ZXVlKCBkYXRhWyBpbmRleCBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiZcblx0XHRcdFx0XHQoIHR5cGUgPT0gbnVsbCB8fCB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUgKSApIHtcblxuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIGdvdG9FbmQgKTtcblx0XHRcdFx0XHRkZXF1ZXVlID0gZmFsc2U7XG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGFydCB0aGUgbmV4dCBpbiB0aGUgcXVldWUgaWYgdGhlIGxhc3Qgc3RlcCB3YXNuJ3QgZm9yY2VkLlxuXHRcdFx0Ly8gVGltZXJzIGN1cnJlbnRseSB3aWxsIGNhbGwgdGhlaXIgY29tcGxldGUgY2FsbGJhY2tzLCB3aGljaFxuXHRcdFx0Ly8gd2lsbCBkZXF1ZXVlIGJ1dCBvbmx5IGlmIHRoZXkgd2VyZSBnb3RvRW5kLlxuXHRcdFx0aWYgKCBkZXF1ZXVlIHx8ICFnb3RvRW5kICkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblx0ZmluaXNoOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRpZiAoIHR5cGUgIT09IGZhbHNlICkge1xuXHRcdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCxcblx0XHRcdFx0ZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApLFxuXHRcdFx0XHRxdWV1ZSA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlXCIgXSxcblx0XHRcdFx0aG9va3MgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZUhvb2tzXCIgXSxcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcblx0XHRcdFx0bGVuZ3RoID0gcXVldWUgPyBxdWV1ZS5sZW5ndGggOiAwO1xuXG5cdFx0XHQvLyBFbmFibGUgZmluaXNoaW5nIGZsYWcgb24gcHJpdmF0ZSBkYXRhXG5cdFx0XHRkYXRhLmZpbmlzaCA9IHRydWU7XG5cblx0XHRcdC8vIEVtcHR5IHRoZSBxdWV1ZSBmaXJzdFxuXHRcdFx0alF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBbXSApO1xuXG5cdFx0XHRpZiAoIGhvb2tzICYmIGhvb2tzLnN0b3AgKSB7XG5cdFx0XHRcdGhvb2tzLnN0b3AuY2FsbCggdGhpcywgdHJ1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb29rIGZvciBhbnkgYWN0aXZlIGFuaW1hdGlvbnMsIGFuZCBmaW5pc2ggdGhlbVxuXHRcdFx0Zm9yICggaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOyApIHtcblx0XHRcdFx0aWYgKCB0aW1lcnNbIGluZGV4IF0uZWxlbSA9PT0gdGhpcyAmJiB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUgKSB7XG5cdFx0XHRcdFx0dGltZXJzWyBpbmRleCBdLmFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHRcdHRpbWVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9vayBmb3IgYW55IGFuaW1hdGlvbnMgaW4gdGhlIG9sZCBxdWV1ZSBhbmQgZmluaXNoIHRoZW1cblx0XHRcdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGlmICggcXVldWVbIGluZGV4IF0gJiYgcXVldWVbIGluZGV4IF0uZmluaXNoICkge1xuXHRcdFx0XHRcdHF1ZXVlWyBpbmRleCBdLmZpbmlzaC5jYWxsKCB0aGlzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gVHVybiBvZmYgZmluaXNoaW5nIGZsYWdcblx0XHRcdGRlbGV0ZSBkYXRhLmZpbmlzaDtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiIF0sIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHR2YXIgY3NzRm4gPSBqUXVlcnkuZm5bIG5hbWUgXTtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHNwZWVkID09IG51bGwgfHwgdHlwZW9mIHNwZWVkID09PSBcImJvb2xlYW5cIiA/XG5cdFx0XHRjc3NGbi5hcHBseSggdGhpcywgYXJndW1lbnRzICkgOlxuXHRcdFx0dGhpcy5hbmltYXRlKCBnZW5GeCggbmFtZSwgdHJ1ZSApLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9O1xufSApO1xuXG4vLyBHZW5lcmF0ZSBzaG9ydGN1dHMgZm9yIGN1c3RvbSBhbmltYXRpb25zXG5qUXVlcnkuZWFjaCgge1xuXHRzbGlkZURvd246IGdlbkZ4KCBcInNob3dcIiApLFxuXHRzbGlkZVVwOiBnZW5GeCggXCJoaWRlXCIgKSxcblx0c2xpZGVUb2dnbGU6IGdlbkZ4KCBcInRvZ2dsZVwiICksXG5cdGZhZGVJbjogeyBvcGFjaXR5OiBcInNob3dcIiB9LFxuXHRmYWRlT3V0OiB7IG9wYWNpdHk6IFwiaGlkZVwiIH0sXG5cdGZhZGVUb2dnbGU6IHsgb3BhY2l0eTogXCJ0b2dnbGVcIiB9XG59LCBmdW5jdGlvbiggbmFtZSwgcHJvcHMgKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLmFuaW1hdGUoIHByb3BzLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9O1xufSApO1xuXG5qUXVlcnkudGltZXJzID0gW107XG5qUXVlcnkuZngudGljayA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgdGltZXIsXG5cdFx0aSA9IDAsXG5cdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycztcblxuXHRmeE5vdyA9IGpRdWVyeS5ub3coKTtcblxuXHRmb3IgKCA7IGkgPCB0aW1lcnMubGVuZ3RoOyBpKysgKSB7XG5cdFx0dGltZXIgPSB0aW1lcnNbIGkgXTtcblxuXHRcdC8vIENoZWNrcyB0aGUgdGltZXIgaGFzIG5vdCBhbHJlYWR5IGJlZW4gcmVtb3ZlZFxuXHRcdGlmICggIXRpbWVyKCkgJiYgdGltZXJzWyBpIF0gPT09IHRpbWVyICkge1xuXHRcdFx0dGltZXJzLnNwbGljZSggaS0tLCAxICk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhdGltZXJzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkuZnguc3RvcCgpO1xuXHR9XG5cdGZ4Tm93ID0gdW5kZWZpbmVkO1xufTtcblxualF1ZXJ5LmZ4LnRpbWVyID0gZnVuY3Rpb24oIHRpbWVyICkge1xuXHRqUXVlcnkudGltZXJzLnB1c2goIHRpbWVyICk7XG5cdGlmICggdGltZXIoKSApIHtcblx0XHRqUXVlcnkuZnguc3RhcnQoKTtcblx0fSBlbHNlIHtcblx0XHRqUXVlcnkudGltZXJzLnBvcCgpO1xuXHR9XG59O1xuXG5qUXVlcnkuZnguaW50ZXJ2YWwgPSAxMztcbmpRdWVyeS5meC5zdGFydCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoICF0aW1lcklkICkge1xuXHRcdHRpbWVySWQgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lID9cblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHJhZiApIDpcblx0XHRcdHdpbmRvdy5zZXRJbnRlcnZhbCggalF1ZXJ5LmZ4LnRpY2ssIGpRdWVyeS5meC5pbnRlcnZhbCApO1xuXHR9XG59O1xuXG5qUXVlcnkuZnguc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSApIHtcblx0XHR3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoIHRpbWVySWQgKTtcblx0fSBlbHNlIHtcblx0XHR3aW5kb3cuY2xlYXJJbnRlcnZhbCggdGltZXJJZCApO1xuXHR9XG5cblx0dGltZXJJZCA9IG51bGw7XG59O1xuXG5qUXVlcnkuZnguc3BlZWRzID0ge1xuXHRzbG93OiA2MDAsXG5cdGZhc3Q6IDIwMCxcblxuXHQvLyBEZWZhdWx0IHNwZWVkXG5cdF9kZWZhdWx0OiA0MDBcbn07XG5cblxuLy8gQmFzZWQgb2ZmIG9mIHRoZSBwbHVnaW4gYnkgQ2xpbnQgSGVsZmVycywgd2l0aCBwZXJtaXNzaW9uLlxuLy8gaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMTAwMzI0MDE0NzQ3L2h0dHA6Ly9ibGluZHNpZ25hbHMuY29tL2luZGV4LnBocC8yMDA5LzA3L2pxdWVyeS1kZWxheS9cbmpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uKCB0aW1lLCB0eXBlICkge1xuXHR0aW1lID0galF1ZXJ5LmZ4ID8galF1ZXJ5LmZ4LnNwZWVkc1sgdGltZSBdIHx8IHRpbWUgOiB0aW1lO1xuXHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUsIGZ1bmN0aW9uKCBuZXh0LCBob29rcyApIHtcblx0XHR2YXIgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCBuZXh0LCB0aW1lICk7XG5cdFx0aG9va3Muc3RvcCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdH07XG5cdH0gKTtcbn07XG5cblxuKCBmdW5jdGlvbigpIHtcblx0dmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICksXG5cdFx0c2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJzZWxlY3RcIiApLFxuXHRcdG9wdCA9IHNlbGVjdC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJvcHRpb25cIiApICk7XG5cblx0aW5wdXQudHlwZSA9IFwiY2hlY2tib3hcIjtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4zIG9ubHlcblx0Ly8gRGVmYXVsdCB2YWx1ZSBmb3IgYSBjaGVja2JveCBzaG91bGQgYmUgXCJvblwiXG5cdHN1cHBvcnQuY2hlY2tPbiA9IGlucHV0LnZhbHVlICE9PSBcIlwiO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBNdXN0IGFjY2VzcyBzZWxlY3RlZEluZGV4IHRvIG1ha2UgZGVmYXVsdCBvcHRpb25zIHNlbGVjdFxuXHRzdXBwb3J0Lm9wdFNlbGVjdGVkID0gb3B0LnNlbGVjdGVkO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHQvLyBBbiBpbnB1dCBsb3NlcyBpdHMgdmFsdWUgYWZ0ZXIgYmVjb21pbmcgYSByYWRpb1xuXHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXHRpbnB1dC52YWx1ZSA9IFwidFwiO1xuXHRpbnB1dC50eXBlID0gXCJyYWRpb1wiO1xuXHRzdXBwb3J0LnJhZGlvVmFsdWUgPSBpbnB1dC52YWx1ZSA9PT0gXCJ0XCI7XG59ICkoKTtcblxuXG52YXIgYm9vbEhvb2ssXG5cdGF0dHJIYW5kbGUgPSBqUXVlcnkuZXhwci5hdHRySGFuZGxlO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGF0dHI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkuYXR0ciwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggdGhpcywgbmFtZSApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdGF0dHI6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHR2YXIgcmV0LCBob29rcyxcblx0XHRcdG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRcdC8vIERvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblx0XHRpZiAoIG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEZhbGxiYWNrIHRvIHByb3Agd2hlbiBhdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgPT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnByb3AoIGVsZW0sIG5hbWUsIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXR0cmlidXRlIGhvb2tzIGFyZSBkZXRlcm1pbmVkIGJ5IHRoZSBsb3dlcmNhc2UgdmVyc2lvblxuXHRcdC8vIEdyYWIgbmVjZXNzYXJ5IGhvb2sgaWYgb25lIGlzIGRlZmluZWRcblx0XHRpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblx0XHRcdGhvb2tzID0galF1ZXJ5LmF0dHJIb29rc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gfHxcblx0XHRcdFx0KCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnRlc3QoIG5hbWUgKSA/IGJvb2xIb29rIDogdW5kZWZpbmVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gbnVsbCApIHtcblx0XHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggbmFtZSwgdmFsdWUgKyBcIlwiICk7XG5cdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXG5cdFx0cmV0ID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgbmFtZSApO1xuXG5cdFx0Ly8gTm9uLWV4aXN0ZW50IGF0dHJpYnV0ZXMgcmV0dXJuIG51bGwsIHdlIG5vcm1hbGl6ZSB0byB1bmRlZmluZWRcblx0XHRyZXR1cm4gcmV0ID09IG51bGwgPyB1bmRlZmluZWQgOiByZXQ7XG5cdH0sXG5cblx0YXR0ckhvb2tzOiB7XG5cdFx0dHlwZToge1xuXHRcdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggIXN1cHBvcnQucmFkaW9WYWx1ZSAmJiB2YWx1ZSA9PT0gXCJyYWRpb1wiICYmXG5cdFx0XHRcdFx0alF1ZXJ5Lm5vZGVOYW1lKCBlbGVtLCBcImlucHV0XCIgKSApIHtcblx0XHRcdFx0XHR2YXIgdmFsID0gZWxlbS52YWx1ZTtcblx0XHRcdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIHZhbHVlICk7XG5cdFx0XHRcdFx0aWYgKCB2YWwgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLnZhbHVlID0gdmFsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdHZhciBuYW1lLFxuXHRcdFx0aSA9IDAsXG5cblx0XHRcdC8vIEF0dHJpYnV0ZSBuYW1lcyBjYW4gY29udGFpbiBub24tSFRNTCB3aGl0ZXNwYWNlIGNoYXJhY3RlcnNcblx0XHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3N5bnRheC5odG1sI2F0dHJpYnV0ZXMtMlxuXHRcdFx0YXR0ck5hbWVzID0gdmFsdWUgJiYgdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKTtcblxuXHRcdGlmICggYXR0ck5hbWVzICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHR3aGlsZSAoICggbmFtZSA9IGF0dHJOYW1lc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0ZWxlbS5yZW1vdmVBdHRyaWJ1dGUoIG5hbWUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxuLy8gSG9va3MgZm9yIGJvb2xlYW4gYXR0cmlidXRlc1xuYm9vbEhvb2sgPSB7XG5cdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBuYW1lICkge1xuXHRcdGlmICggdmFsdWUgPT09IGZhbHNlICkge1xuXG5cdFx0XHQvLyBSZW1vdmUgYm9vbGVhbiBhdHRyaWJ1dGVzIHdoZW4gc2V0IHRvIGZhbHNlXG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRlbGVtLnNldEF0dHJpYnV0ZSggbmFtZSwgbmFtZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gbmFtZTtcblx0fVxufTtcblxualF1ZXJ5LmVhY2goIGpRdWVyeS5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKCAvXFx3Ky9nICksIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHR2YXIgZ2V0dGVyID0gYXR0ckhhbmRsZVsgbmFtZSBdIHx8IGpRdWVyeS5maW5kLmF0dHI7XG5cblx0YXR0ckhhbmRsZVsgbmFtZSBdID0gZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdHZhciByZXQsIGhhbmRsZSxcblx0XHRcdGxvd2VyY2FzZU5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0XHRpZiAoICFpc1hNTCApIHtcblxuXHRcdFx0Ly8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcCBieSB0ZW1wb3JhcmlseSByZW1vdmluZyB0aGlzIGZ1bmN0aW9uIGZyb20gdGhlIGdldHRlclxuXHRcdFx0aGFuZGxlID0gYXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdO1xuXHRcdFx0YXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdID0gcmV0O1xuXHRcdFx0cmV0ID0gZ2V0dGVyKCBlbGVtLCBuYW1lLCBpc1hNTCApICE9IG51bGwgP1xuXHRcdFx0XHRsb3dlcmNhc2VOYW1lIDpcblx0XHRcdFx0bnVsbDtcblx0XHRcdGF0dHJIYW5kbGVbIGxvd2VyY2FzZU5hbWUgXSA9IGhhbmRsZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcbn0gKTtcblxuXG5cblxudmFyIHJmb2N1c2FibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyY2xpY2thYmxlID0gL14oPzphfGFyZWEpJC9pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHByb3A6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkucHJvcCwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlUHJvcDogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGUgdGhpc1sgalF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lIF07XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0cHJvcDogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBwcm9wZXJ0aWVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cblx0XHRcdC8vIEZpeCBuYW1lIGFuZCBhdHRhY2ggaG9va3Ncblx0XHRcdG5hbWUgPSBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWU7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5wcm9wSG9va3NbIG5hbWUgXTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKCBlbGVtWyBuYW1lIF0gPSB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgbmFtZSApICkgIT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblxuXHRcdHJldHVybiBlbGVtWyBuYW1lIF07XG5cdH0sXG5cblx0cHJvcEhvb2tzOiB7XG5cdFx0dGFiSW5kZXg6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHRcdFx0XHQvLyBlbGVtLnRhYkluZGV4IGRvZXNuJ3QgYWx3YXlzIHJldHVybiB0aGVcblx0XHRcdFx0Ly8gY29ycmVjdCB2YWx1ZSB3aGVuIGl0IGhhc24ndCBiZWVuIGV4cGxpY2l0bHkgc2V0XG5cdFx0XHRcdC8vIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDE0MTExNjIzMzM0Ny9odHRwOi8vZmx1aWRwcm9qZWN0Lm9yZy9ibG9nLzIwMDgvMDEvMDkvZ2V0dGluZy1zZXR0aW5nLWFuZC1yZW1vdmluZy10YWJpbmRleC12YWx1ZXMtd2l0aC1qYXZhc2NyaXB0L1xuXHRcdFx0XHQvLyBVc2UgcHJvcGVyIGF0dHJpYnV0ZSByZXRyaWV2YWwoIzEyMDcyKVxuXHRcdFx0XHR2YXIgdGFiaW5kZXggPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInRhYmluZGV4XCIgKTtcblxuXHRcdFx0XHRpZiAoIHRhYmluZGV4ICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXJzZUludCggdGFiaW5kZXgsIDEwICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cmZvY3VzYWJsZS50ZXN0KCBlbGVtLm5vZGVOYW1lICkgfHxcblx0XHRcdFx0XHRyY2xpY2thYmxlLnRlc3QoIGVsZW0ubm9kZU5hbWUgKSAmJlxuXHRcdFx0XHRcdGVsZW0uaHJlZlxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cHJvcEZpeDoge1xuXHRcdFwiZm9yXCI6IFwiaHRtbEZvclwiLFxuXHRcdFwiY2xhc3NcIjogXCJjbGFzc05hbWVcIlxuXHR9XG59ICk7XG5cbi8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuLy8gQWNjZXNzaW5nIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5XG4vLyBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gcmVzcGVjdCBzZXR0aW5nIHNlbGVjdGVkXG4vLyBvbiB0aGUgb3B0aW9uXG4vLyBUaGUgZ2V0dGVyIGVuc3VyZXMgYSBkZWZhdWx0IG9wdGlvbiBpcyBzZWxlY3RlZFxuLy8gd2hlbiBpbiBhbiBvcHRncm91cFxuLy8gZXNsaW50IHJ1bGUgXCJuby11bnVzZWQtZXhwcmVzc2lvbnNcIiBpcyBkaXNhYmxlZCBmb3IgdGhpcyBjb2RlXG4vLyBzaW5jZSBpdCBjb25zaWRlcnMgc3VjaCBhY2Nlc3Npb25zIG5vb3BcbmlmICggIXN1cHBvcnQub3B0U2VsZWN0ZWQgKSB7XG5cdGpRdWVyeS5wcm9wSG9va3Muc2VsZWN0ZWQgPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0LyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRwYXJlbnQuc2VsZWN0ZWRJbmRleDtcblxuXHRcdFx0XHRpZiAoIHBhcmVudC5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmpRdWVyeS5lYWNoKCBbXG5cdFwidGFiSW5kZXhcIixcblx0XCJyZWFkT25seVwiLFxuXHRcIm1heExlbmd0aFwiLFxuXHRcImNlbGxTcGFjaW5nXCIsXG5cdFwiY2VsbFBhZGRpbmdcIixcblx0XCJyb3dTcGFuXCIsXG5cdFwiY29sU3BhblwiLFxuXHRcInVzZU1hcFwiLFxuXHRcImZyYW1lQm9yZGVyXCIsXG5cdFwiY29udGVudEVkaXRhYmxlXCJcbl0sIGZ1bmN0aW9uKCkge1xuXHRqUXVlcnkucHJvcEZpeFsgdGhpcy50b0xvd2VyQ2FzZSgpIF0gPSB0aGlzO1xufSApO1xuXG5cblxuXG5cdC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFjY29yZGluZyB0byBIVE1MIHNwZWNcblx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW5mcmFzdHJ1Y3R1cmUuaHRtbCNzdHJpcC1hbmQtY29sbGFwc2Utd2hpdGVzcGFjZVxuXHRmdW5jdGlvbiBzdHJpcEFuZENvbGxhcHNlKCB2YWx1ZSApIHtcblx0XHR2YXIgdG9rZW5zID0gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblx0XHRyZXR1cm4gdG9rZW5zLmpvaW4oIFwiIFwiICk7XG5cdH1cblxuXG5mdW5jdGlvbiBnZXRDbGFzcyggZWxlbSApIHtcblx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlICYmIGVsZW0uZ2V0QXR0cmlidXRlKCBcImNsYXNzXCIgKSB8fCBcIlwiO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGFkZENsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzZXMsIGVsZW0sIGN1ciwgY3VyVmFsdWUsIGNsYXp6LCBqLCBmaW5hbFZhbHVlLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFkZENsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCBnZXRDbGFzcyggdGhpcyApICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSApIHtcblx0XHRcdGNsYXNzZXMgPSB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXG5cdFx0XHR3aGlsZSAoICggZWxlbSA9IHRoaXNbIGkrKyBdICkgKSB7XG5cdFx0XHRcdGN1clZhbHVlID0gZ2V0Q2xhc3MoIGVsZW0gKTtcblx0XHRcdFx0Y3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAoIGNsYXp6ID0gY2xhc3Nlc1sgaisrIF0gKSApIHtcblx0XHRcdFx0XHRcdGlmICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0Y3VyICs9IGNsYXp6ICsgXCIgXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZSggY3VyICk7XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSApIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZW1vdmVDbGFzczogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBjbGFzc2VzLCBlbGVtLCBjdXIsIGN1clZhbHVlLCBjbGF6eiwgaiwgZmluYWxWYWx1ZSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBqICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5yZW1vdmVDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgZ2V0Q2xhc3MoIHRoaXMgKSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmF0dHIoIFwiY2xhc3NcIiwgXCJcIiApO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlICkge1xuXHRcdFx0Y2xhc3NlcyA9IHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cblx0XHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdFx0Y3VyVmFsdWUgPSBnZXRDbGFzcyggZWxlbSApO1xuXG5cdFx0XHRcdC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXG5cdFx0XHRcdGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKCBcIiBcIiArIHN0cmlwQW5kQ29sbGFwc2UoIGN1clZhbHVlICkgKyBcIiBcIiApO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdHdoaWxlICggKCBjbGF6eiA9IGNsYXNzZXNbIGorKyBdICkgKSB7XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSAqYWxsKiBpbnN0YW5jZXNcblx0XHRcdFx0XHRcdHdoaWxlICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciA9IGN1ci5yZXBsYWNlKCBcIiBcIiArIGNsYXp6ICsgXCIgXCIsIFwiIFwiICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZSggY3VyICk7XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSApIHtcblx0XHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR0b2dnbGVDbGFzczogZnVuY3Rpb24oIHZhbHVlLCBzdGF0ZVZhbCApIHtcblx0XHR2YXIgdHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuXHRcdGlmICggdHlwZW9mIHN0YXRlVmFsID09PSBcImJvb2xlYW5cIiAmJiB0eXBlID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIHN0YXRlVmFsID8gdGhpcy5hZGRDbGFzcyggdmFsdWUgKSA6IHRoaXMucmVtb3ZlQ2xhc3MoIHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyhcblx0XHRcdFx0XHR2YWx1ZS5jYWxsKCB0aGlzLCBpLCBnZXRDbGFzcyggdGhpcyApLCBzdGF0ZVZhbCApLFxuXHRcdFx0XHRcdHN0YXRlVmFsXG5cdFx0XHRcdCk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgY2xhc3NOYW1lLCBpLCBzZWxmLCBjbGFzc05hbWVzO1xuXG5cdFx0XHRpZiAoIHR5cGUgPT09IFwic3RyaW5nXCIgKSB7XG5cblx0XHRcdFx0Ly8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcblx0XHRcdFx0aSA9IDA7XG5cdFx0XHRcdHNlbGYgPSBqUXVlcnkoIHRoaXMgKTtcblx0XHRcdFx0Y2xhc3NOYW1lcyA9IHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cblx0XHRcdFx0d2hpbGUgKCAoIGNsYXNzTmFtZSA9IGNsYXNzTmFtZXNbIGkrKyBdICkgKSB7XG5cblx0XHRcdFx0XHQvLyBDaGVjayBlYWNoIGNsYXNzTmFtZSBnaXZlbiwgc3BhY2Ugc2VwYXJhdGVkIGxpc3Rcblx0XHRcdFx0XHRpZiAoIHNlbGYuaGFzQ2xhc3MoIGNsYXNzTmFtZSApICkge1xuXHRcdFx0XHRcdFx0c2VsZi5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuYWRkQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBUb2dnbGUgd2hvbGUgY2xhc3MgbmFtZVxuXHRcdFx0fSBlbHNlIGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0eXBlID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gZ2V0Q2xhc3MoIHRoaXMgKTtcblx0XHRcdFx0aWYgKCBjbGFzc05hbWUgKSB7XG5cblx0XHRcdFx0XHQvLyBTdG9yZSBjbGFzc05hbWUgaWYgc2V0XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiwgY2xhc3NOYW1lICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBjbGFzcyBuYW1lIG9yIGlmIHdlJ3JlIHBhc3NlZCBgZmFsc2VgLFxuXHRcdFx0XHQvLyB0aGVuIHJlbW92ZSB0aGUgd2hvbGUgY2xhc3NuYW1lIChpZiB0aGVyZSB3YXMgb25lLCB0aGUgYWJvdmUgc2F2ZWQgaXQpLlxuXHRcdFx0XHQvLyBPdGhlcndpc2UgYnJpbmcgYmFjayB3aGF0ZXZlciB3YXMgcHJldmlvdXNseSBzYXZlZCAoaWYgYW55dGhpbmcpLFxuXHRcdFx0XHQvLyBmYWxsaW5nIGJhY2sgdG8gdGhlIGVtcHR5IHN0cmluZyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXG5cdFx0XHRcdGlmICggdGhpcy5zZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIixcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSB8fCB2YWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0XHRcdFx0XCJcIiA6XG5cdFx0XHRcdFx0XHRkYXRhUHJpdi5nZXQoIHRoaXMsIFwiX19jbGFzc05hbWVfX1wiICkgfHwgXCJcIlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0aGFzQ2xhc3M6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgY2xhc3NOYW1lLCBlbGVtLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRjbGFzc05hbWUgPSBcIiBcIiArIHNlbGVjdG9yICsgXCIgXCI7XG5cdFx0d2hpbGUgKCAoIGVsZW0gPSB0aGlzWyBpKysgXSApICkge1xuXHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdCggXCIgXCIgKyBzdHJpcEFuZENvbGxhcHNlKCBnZXRDbGFzcyggZWxlbSApICkgKyBcIiBcIiApLmluZGV4T2YoIGNsYXNzTmFtZSApID4gLTEgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBycmV0dXJuID0gL1xcci9nO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHZhbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBob29rcywgcmV0LCBpc0Z1bmN0aW9uLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXTtcblxuXHRcdGlmICggIWFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzWyBlbGVtLnR5cGUgXSB8fFxuXHRcdFx0XHRcdGpRdWVyeS52YWxIb29rc1sgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIF07XG5cblx0XHRcdFx0aWYgKCBob29rcyAmJlxuXHRcdFx0XHRcdFwiZ2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0XHQoIHJldCA9IGhvb2tzLmdldCggZWxlbSwgXCJ2YWx1ZVwiICkgKSAhPT0gdW5kZWZpbmVkXG5cdFx0XHRcdCkge1xuXHRcdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXQgPSBlbGVtLnZhbHVlO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSBtb3N0IGNvbW1vbiBzdHJpbmcgY2FzZXNcblx0XHRcdFx0aWYgKCB0eXBlb2YgcmV0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHRcdHJldHVybiByZXQucmVwbGFjZSggcnJldHVybiwgXCJcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSGFuZGxlIGNhc2VzIHdoZXJlIHZhbHVlIGlzIG51bGwvdW5kZWYgb3IgbnVtYmVyXG5cdFx0XHRcdHJldHVybiByZXQgPT0gbnVsbCA/IFwiXCIgOiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpc0Z1bmN0aW9uID0galF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdHZhciB2YWw7XG5cblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGlzRnVuY3Rpb24gKSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlLmNhbGwoIHRoaXMsIGksIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWwgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVHJlYXQgbnVsbC91bmRlZmluZWQgYXMgXCJcIjsgY29udmVydCBudW1iZXJzIHRvIHN0cmluZ1xuXHRcdFx0aWYgKCB2YWwgPT0gbnVsbCApIHtcblx0XHRcdFx0dmFsID0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiApIHtcblx0XHRcdFx0dmFsICs9IFwiXCI7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWwgKSApIHtcblx0XHRcdFx0dmFsID0galF1ZXJ5Lm1hcCggdmFsLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzWyB0aGlzLnR5cGUgXSB8fCBqUXVlcnkudmFsSG9va3NbIHRoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKSBdO1xuXG5cdFx0XHQvLyBJZiBzZXQgcmV0dXJucyB1bmRlZmluZWQsIGZhbGwgYmFjayB0byBub3JtYWwgc2V0dGluZ1xuXHRcdFx0aWYgKCAhaG9va3MgfHwgISggXCJzZXRcIiBpbiBob29rcyApIHx8IGhvb2tzLnNldCggdGhpcywgdmFsLCBcInZhbHVlXCIgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHZhbEhvb2tzOiB7XG5cdFx0b3B0aW9uOiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHRcdHZhciB2YWwgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInZhbHVlXCIgKTtcblx0XHRcdFx0cmV0dXJuIHZhbCAhPSBudWxsID9cblx0XHRcdFx0XHR2YWwgOlxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExIG9ubHlcblx0XHRcdFx0XHQvLyBvcHRpb24udGV4dCB0aHJvd3MgZXhjZXB0aW9ucyAoIzE0Njg2LCAjMTQ4NTgpXG5cdFx0XHRcdFx0Ly8gU3RyaXAgYW5kIGNvbGxhcHNlIHdoaXRlc3BhY2Vcblx0XHRcdFx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnLyNzdHJpcC1hbmQtY29sbGFwc2Utd2hpdGVzcGFjZVxuXHRcdFx0XHRcdHN0cmlwQW5kQ29sbGFwc2UoIGpRdWVyeS50ZXh0KCBlbGVtICkgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNlbGVjdDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHZhbHVlLCBvcHRpb24sIGksXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHRpbmRleCA9IGVsZW0uc2VsZWN0ZWRJbmRleCxcblx0XHRcdFx0XHRvbmUgPSBlbGVtLnR5cGUgPT09IFwic2VsZWN0LW9uZVwiLFxuXHRcdFx0XHRcdHZhbHVlcyA9IG9uZSA/IG51bGwgOiBbXSxcblx0XHRcdFx0XHRtYXggPSBvbmUgPyBpbmRleCArIDEgOiBvcHRpb25zLmxlbmd0aDtcblxuXHRcdFx0XHRpZiAoIGluZGV4IDwgMCApIHtcblx0XHRcdFx0XHRpID0gbWF4O1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aSA9IG9uZSA/IGluZGV4IDogMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIHNlbGVjdGVkIG9wdGlvbnNcblx0XHRcdFx0Zm9yICggOyBpIDwgbWF4OyBpKysgKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHRcdFx0XHQvLyBJRTgtOSBkb2Vzbid0IHVwZGF0ZSBzZWxlY3RlZCBhZnRlciBmb3JtIHJlc2V0ICgjMjU1MSlcblx0XHRcdFx0XHRpZiAoICggb3B0aW9uLnNlbGVjdGVkIHx8IGkgPT09IGluZGV4ICkgJiZcblxuXHRcdFx0XHRcdFx0XHQvLyBEb24ndCByZXR1cm4gb3B0aW9ucyB0aGF0IGFyZSBkaXNhYmxlZCBvciBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG5cdFx0XHRcdFx0XHRcdCFvcHRpb24uZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRcdFx0KCAhb3B0aW9uLnBhcmVudE5vZGUuZGlzYWJsZWQgfHxcblx0XHRcdFx0XHRcdFx0XHQhalF1ZXJ5Lm5vZGVOYW1lKCBvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSBzcGVjaWZpYyB2YWx1ZSBmb3IgdGhlIG9wdGlvblxuXHRcdFx0XHRcdFx0dmFsdWUgPSBqUXVlcnkoIG9wdGlvbiApLnZhbCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBXZSBkb24ndCBuZWVkIGFuIGFycmF5IGZvciBvbmUgc2VsZWN0c1xuXHRcdFx0XHRcdFx0aWYgKCBvbmUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTXVsdGktU2VsZWN0cyByZXR1cm4gYW4gYXJyYXlcblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIG9wdGlvblNldCwgb3B0aW9uLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0dmFsdWVzID0galF1ZXJ5Lm1ha2VBcnJheSggdmFsdWUgKSxcblx0XHRcdFx0XHRpID0gb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tY29uZC1hc3NpZ24gKi9cblxuXHRcdFx0XHRcdGlmICggb3B0aW9uLnNlbGVjdGVkID1cblx0XHRcdFx0XHRcdGpRdWVyeS5pbkFycmF5KCBqUXVlcnkudmFsSG9va3Mub3B0aW9uLmdldCggb3B0aW9uICksIHZhbHVlcyApID4gLTFcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdG9wdGlvblNldCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblx0XHRcdFx0aWYgKCAhb3B0aW9uU2V0ICkge1xuXHRcdFx0XHRcdGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIFJhZGlvcyBhbmQgY2hlY2tib3hlcyBnZXR0ZXIvc2V0dGVyXG5qUXVlcnkuZWFjaCggWyBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiBdLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0gPSB7XG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0XHRyZXR1cm4gKCBlbGVtLmNoZWNrZWQgPSBqUXVlcnkuaW5BcnJheSggalF1ZXJ5KCBlbGVtICkudmFsKCksIHZhbHVlICkgPiAtMSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0aWYgKCAhc3VwcG9ydC5jaGVja09uICkge1xuXHRcdGpRdWVyeS52YWxIb29rc1sgdGhpcyBdLmdldCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZ2V0QXR0cmlidXRlKCBcInZhbHVlXCIgKSA9PT0gbnVsbCA/IFwib25cIiA6IGVsZW0udmFsdWU7XG5cdFx0fTtcblx0fVxufSApO1xuXG5cblxuXG4vLyBSZXR1cm4galF1ZXJ5IGZvciBhdHRyaWJ1dGVzLW9ubHkgaW5jbHVzaW9uXG5cblxudmFyIHJmb2N1c01vcnBoID0gL14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvO1xuXG5qUXVlcnkuZXh0ZW5kKCBqUXVlcnkuZXZlbnQsIHtcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggZXZlbnQsIGRhdGEsIGVsZW0sIG9ubHlIYW5kbGVycyApIHtcblxuXHRcdHZhciBpLCBjdXIsIHRtcCwgYnViYmxlVHlwZSwgb250eXBlLCBoYW5kbGUsIHNwZWNpYWwsXG5cdFx0XHRldmVudFBhdGggPSBbIGVsZW0gfHwgZG9jdW1lbnQgXSxcblx0XHRcdHR5cGUgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwidHlwZVwiICkgPyBldmVudC50eXBlIDogZXZlbnQsXG5cdFx0XHRuYW1lc3BhY2VzID0gaGFzT3duLmNhbGwoIGV2ZW50LCBcIm5hbWVzcGFjZVwiICkgPyBldmVudC5uYW1lc3BhY2Uuc3BsaXQoIFwiLlwiICkgOiBbXTtcblxuXHRcdGN1ciA9IHRtcCA9IGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50O1xuXG5cdFx0Ly8gRG9uJ3QgZG8gZXZlbnRzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBmb2N1cy9ibHVyIG1vcnBocyB0byBmb2N1c2luL291dDsgZW5zdXJlIHdlJ3JlIG5vdCBmaXJpbmcgdGhlbSByaWdodCBub3dcblx0XHRpZiAoIHJmb2N1c01vcnBoLnRlc3QoIHR5cGUgKyBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlLmluZGV4T2YoIFwiLlwiICkgPiAtMSApIHtcblxuXHRcdFx0Ly8gTmFtZXNwYWNlZCB0cmlnZ2VyOyBjcmVhdGUgYSByZWdleHAgdG8gbWF0Y2ggZXZlbnQgdHlwZSBpbiBoYW5kbGUoKVxuXHRcdFx0bmFtZXNwYWNlcyA9IHR5cGUuc3BsaXQoIFwiLlwiICk7XG5cdFx0XHR0eXBlID0gbmFtZXNwYWNlcy5zaGlmdCgpO1xuXHRcdFx0bmFtZXNwYWNlcy5zb3J0KCk7XG5cdFx0fVxuXHRcdG9udHlwZSA9IHR5cGUuaW5kZXhPZiggXCI6XCIgKSA8IDAgJiYgXCJvblwiICsgdHlwZTtcblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhIGpRdWVyeS5FdmVudCBvYmplY3QsIE9iamVjdCwgb3IganVzdCBhbiBldmVudCB0eXBlIHN0cmluZ1xuXHRcdGV2ZW50ID0gZXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0ZXZlbnQgOlxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCggdHlwZSwgdHlwZW9mIGV2ZW50ID09PSBcIm9iamVjdFwiICYmIGV2ZW50ICk7XG5cblx0XHQvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXG5cdFx0ZXZlbnQuaXNUcmlnZ2VyID0gb25seUhhbmRsZXJzID8gMiA6IDM7XG5cdFx0ZXZlbnQubmFtZXNwYWNlID0gbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApO1xuXHRcdGV2ZW50LnJuYW1lc3BhY2UgPSBldmVudC5uYW1lc3BhY2UgP1xuXHRcdFx0bmV3IFJlZ0V4cCggXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbiggXCJcXFxcLig/Oi4qXFxcXC58KVwiICkgKyBcIihcXFxcLnwkKVwiICkgOlxuXHRcdFx0bnVsbDtcblxuXHRcdC8vIENsZWFuIHVwIHRoZSBldmVudCBpbiBjYXNlIGl0IGlzIGJlaW5nIHJldXNlZFxuXHRcdGV2ZW50LnJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHRpZiAoICFldmVudC50YXJnZXQgKSB7XG5cdFx0XHRldmVudC50YXJnZXQgPSBlbGVtO1xuXHRcdH1cblxuXHRcdC8vIENsb25lIGFueSBpbmNvbWluZyBkYXRhIGFuZCBwcmVwZW5kIHRoZSBldmVudCwgY3JlYXRpbmcgdGhlIGhhbmRsZXIgYXJnIGxpc3Rcblx0XHRkYXRhID0gZGF0YSA9PSBudWxsID9cblx0XHRcdFsgZXZlbnQgXSA6XG5cdFx0XHRqUXVlcnkubWFrZUFycmF5KCBkYXRhLCBbIGV2ZW50IF0gKTtcblxuXHRcdC8vIEFsbG93IHNwZWNpYWwgZXZlbnRzIHRvIGRyYXcgb3V0c2lkZSB0aGUgbGluZXNcblx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgc3BlY2lhbC50cmlnZ2VyICYmIHNwZWNpYWwudHJpZ2dlci5hcHBseSggZWxlbSwgZGF0YSApID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgZXZlbnQgcHJvcGFnYXRpb24gcGF0aCBpbiBhZHZhbmNlLCBwZXIgVzNDIGV2ZW50cyBzcGVjICgjOTk1MSlcblx0XHQvLyBCdWJibGUgdXAgdG8gZG9jdW1lbnQsIHRoZW4gdG8gd2luZG93OyB3YXRjaCBmb3IgYSBnbG9iYWwgb3duZXJEb2N1bWVudCB2YXIgKCM5NzI0KVxuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiAhc3BlY2lhbC5ub0J1YmJsZSAmJiAhalF1ZXJ5LmlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdGJ1YmJsZVR5cGUgPSBzcGVjaWFsLmRlbGVnYXRlVHlwZSB8fCB0eXBlO1xuXHRcdFx0aWYgKCAhcmZvY3VzTW9ycGgudGVzdCggYnViYmxlVHlwZSArIHR5cGUgKSApIHtcblx0XHRcdFx0Y3VyID0gY3VyLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKCA7IGN1cjsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCBjdXIgKTtcblx0XHRcdFx0dG1wID0gY3VyO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPbmx5IGFkZCB3aW5kb3cgaWYgd2UgZ290IHRvIGRvY3VtZW50IChlLmcuLCBub3QgcGxhaW4gb2JqIG9yIGRldGFjaGVkIERPTSlcblx0XHRcdGlmICggdG1wID09PSAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCApICkge1xuXHRcdFx0XHRldmVudFBhdGgucHVzaCggdG1wLmRlZmF1bHRWaWV3IHx8IHRtcC5wYXJlbnRXaW5kb3cgfHwgd2luZG93ICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRmlyZSBoYW5kbGVycyBvbiB0aGUgZXZlbnQgcGF0aFxuXHRcdGkgPSAwO1xuXHRcdHdoaWxlICggKCBjdXIgPSBldmVudFBhdGhbIGkrKyBdICkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cblx0XHRcdGV2ZW50LnR5cGUgPSBpID4gMSA/XG5cdFx0XHRcdGJ1YmJsZVR5cGUgOlxuXHRcdFx0XHRzcGVjaWFsLmJpbmRUeXBlIHx8IHR5cGU7XG5cblx0XHRcdC8vIGpRdWVyeSBoYW5kbGVyXG5cdFx0XHRoYW5kbGUgPSAoIGRhdGFQcml2LmdldCggY3VyLCBcImV2ZW50c1wiICkgfHwge30gKVsgZXZlbnQudHlwZSBdICYmXG5cdFx0XHRcdGRhdGFQcml2LmdldCggY3VyLCBcImhhbmRsZVwiICk7XG5cdFx0XHRpZiAoIGhhbmRsZSApIHtcblx0XHRcdFx0aGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTmF0aXZlIGhhbmRsZXJcblx0XHRcdGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbIG9udHlwZSBdO1xuXHRcdFx0aWYgKCBoYW5kbGUgJiYgaGFuZGxlLmFwcGx5ICYmIGFjY2VwdERhdGEoIGN1ciApICkge1xuXHRcdFx0XHRldmVudC5yZXN1bHQgPSBoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0XHRpZiAoIGV2ZW50LnJlc3VsdCA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRldmVudC50eXBlID0gdHlwZTtcblxuXHRcdC8vIElmIG5vYm9keSBwcmV2ZW50ZWQgdGhlIGRlZmF1bHQgYWN0aW9uLCBkbyBpdCBub3dcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpICkge1xuXG5cdFx0XHRpZiAoICggIXNwZWNpYWwuX2RlZmF1bHQgfHxcblx0XHRcdFx0c3BlY2lhbC5fZGVmYXVsdC5hcHBseSggZXZlbnRQYXRoLnBvcCgpLCBkYXRhICkgPT09IGZhbHNlICkgJiZcblx0XHRcdFx0YWNjZXB0RGF0YSggZWxlbSApICkge1xuXG5cdFx0XHRcdC8vIENhbGwgYSBuYXRpdmUgRE9NIG1ldGhvZCBvbiB0aGUgdGFyZ2V0IHdpdGggdGhlIHNhbWUgbmFtZSBhcyB0aGUgZXZlbnQuXG5cdFx0XHRcdC8vIERvbid0IGRvIGRlZmF1bHQgYWN0aW9ucyBvbiB3aW5kb3csIHRoYXQncyB3aGVyZSBnbG9iYWwgdmFyaWFibGVzIGJlICgjNjE3MClcblx0XHRcdFx0aWYgKCBvbnR5cGUgJiYgalF1ZXJ5LmlzRnVuY3Rpb24oIGVsZW1bIHR5cGUgXSApICYmICFqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSApIHtcblxuXHRcdFx0XHRcdC8vIERvbid0IHJlLXRyaWdnZXIgYW4gb25GT08gZXZlbnQgd2hlbiB3ZSBjYWxsIGl0cyBGT08oKSBtZXRob2Rcblx0XHRcdFx0XHR0bXAgPSBlbGVtWyBvbnR5cGUgXTtcblxuXHRcdFx0XHRcdGlmICggdG1wICkge1xuXHRcdFx0XHRcdFx0ZWxlbVsgb250eXBlIF0gPSBudWxsO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFByZXZlbnQgcmUtdHJpZ2dlcmluZyBvZiB0aGUgc2FtZSBldmVudCwgc2luY2Ugd2UgYWxyZWFkeSBidWJibGVkIGl0IGFib3ZlXG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHR5cGU7XG5cdFx0XHRcdFx0ZWxlbVsgdHlwZSBdKCk7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRcdGlmICggdG1wICkge1xuXHRcdFx0XHRcdFx0ZWxlbVsgb250eXBlIF0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHQvLyBQaWdneWJhY2sgb24gYSBkb25vciBldmVudCB0byBzaW11bGF0ZSBhIGRpZmZlcmVudCBvbmVcblx0Ly8gVXNlZCBvbmx5IGZvciBgZm9jdXMoaW4gfCBvdXQpYCBldmVudHNcblx0c2ltdWxhdGU6IGZ1bmN0aW9uKCB0eXBlLCBlbGVtLCBldmVudCApIHtcblx0XHR2YXIgZSA9IGpRdWVyeS5leHRlbmQoXG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCksXG5cdFx0XHRldmVudCxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0aXNTaW11bGF0ZWQ6IHRydWVcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIGUsIG51bGwsIGVsZW0gKTtcblx0fVxuXG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCB0aGlzICk7XG5cdFx0fSApO1xuXHR9LFxuXHR0cmlnZ2VySGFuZGxlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF07XG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCBlbGVtLCB0cnVlICk7XG5cdFx0fVxuXHR9XG59ICk7XG5cblxualF1ZXJ5LmVhY2goICggXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgcmVzaXplIHNjcm9sbCBjbGljayBkYmxjbGljayBcIiArXG5cdFwibW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgXCIgK1xuXHRcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY29udGV4dG1lbnVcIiApLnNwbGl0KCBcIiBcIiApLFxuXHRmdW5jdGlvbiggaSwgbmFtZSApIHtcblxuXHQvLyBIYW5kbGUgZXZlbnQgYmluZGluZ1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgP1xuXHRcdFx0dGhpcy5vbiggbmFtZSwgbnVsbCwgZGF0YSwgZm4gKSA6XG5cdFx0XHR0aGlzLnRyaWdnZXIoIG5hbWUgKTtcblx0fTtcbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRob3ZlcjogZnVuY3Rpb24oIGZuT3ZlciwgZm5PdXQgKSB7XG5cdFx0cmV0dXJuIHRoaXMubW91c2VlbnRlciggZm5PdmVyICkubW91c2VsZWF2ZSggZm5PdXQgfHwgZm5PdmVyICk7XG5cdH1cbn0gKTtcblxuXG5cblxuc3VwcG9ydC5mb2N1c2luID0gXCJvbmZvY3VzaW5cIiBpbiB3aW5kb3c7XG5cblxuLy8gU3VwcG9ydDogRmlyZWZveCA8PTQ0XG4vLyBGaXJlZm94IGRvZXNuJ3QgaGF2ZSBmb2N1cyhpbiB8IG91dCkgZXZlbnRzXG4vLyBSZWxhdGVkIHRpY2tldCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTY4Nzc4N1xuLy9cbi8vIFN1cHBvcnQ6IENocm9tZSA8PTQ4IC0gNDksIFNhZmFyaSA8PTkuMCAtIDkuMVxuLy8gZm9jdXMoaW4gfCBvdXQpIGV2ZW50cyBmaXJlIGFmdGVyIGZvY3VzICYgYmx1ciBldmVudHMsXG4vLyB3aGljaCBpcyBzcGVjIHZpb2xhdGlvbiAtIGh0dHA6Ly93d3cudzMub3JnL1RSL0RPTS1MZXZlbC0zLUV2ZW50cy8jZXZlbnRzLWZvY3VzZXZlbnQtZXZlbnQtb3JkZXJcbi8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ5ODU3XG5pZiAoICFzdXBwb3J0LmZvY3VzaW4gKSB7XG5cdGpRdWVyeS5lYWNoKCB7IGZvY3VzOiBcImZvY3VzaW5cIiwgYmx1cjogXCJmb2N1c291dFwiIH0sIGZ1bmN0aW9uKCBvcmlnLCBmaXggKSB7XG5cblx0XHQvLyBBdHRhY2ggYSBzaW5nbGUgY2FwdHVyaW5nIGhhbmRsZXIgb24gdGhlIGRvY3VtZW50IHdoaWxlIHNvbWVvbmUgd2FudHMgZm9jdXNpbi9mb2N1c291dFxuXHRcdHZhciBoYW5kbGVyID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnNpbXVsYXRlKCBmaXgsIGV2ZW50LnRhcmdldCwgalF1ZXJ5LmV2ZW50LmZpeCggZXZlbnQgKSApO1xuXHRcdH07XG5cblx0XHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgZml4IF0gPSB7XG5cdFx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcyxcblx0XHRcdFx0XHRhdHRhY2hlcyA9IGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXggKTtcblxuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0XHRkb2MuYWRkRXZlbnRMaXN0ZW5lciggb3JpZywgaGFuZGxlciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXgsICggYXR0YWNoZXMgfHwgMCApICsgMSApO1xuXHRcdFx0fSxcblx0XHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRcdGF0dGFjaGVzID0gZGF0YVByaXYuYWNjZXNzKCBkb2MsIGZpeCApIC0gMTtcblxuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0XHRkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lciggb3JpZywgaGFuZGxlciwgdHJ1ZSApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZG9jLCBmaXggKTtcblxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRhdGFQcml2LmFjY2VzcyggZG9jLCBmaXgsIGF0dGFjaGVzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9ICk7XG59XG52YXIgbG9jYXRpb24gPSB3aW5kb3cubG9jYXRpb247XG5cbnZhciBub25jZSA9IGpRdWVyeS5ub3coKTtcblxudmFyIHJxdWVyeSA9ICggL1xcPy8gKTtcblxuXG5cbi8vIENyb3NzLWJyb3dzZXIgeG1sIHBhcnNpbmdcbmpRdWVyeS5wYXJzZVhNTCA9IGZ1bmN0aW9uKCBkYXRhICkge1xuXHR2YXIgeG1sO1xuXHRpZiAoICFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcblx0Ly8gSUUgdGhyb3dzIG9uIHBhcnNlRnJvbVN0cmluZyB3aXRoIGludmFsaWQgaW5wdXQuXG5cdHRyeSB7XG5cdFx0eG1sID0gKCBuZXcgd2luZG93LkRPTVBhcnNlcigpICkucGFyc2VGcm9tU3RyaW5nKCBkYXRhLCBcInRleHQveG1sXCIgKTtcblx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0eG1sID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aWYgKCAheG1sIHx8IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJwYXJzZXJlcnJvclwiICkubGVuZ3RoICkge1xuXHRcdGpRdWVyeS5lcnJvciggXCJJbnZhbGlkIFhNTDogXCIgKyBkYXRhICk7XG5cdH1cblx0cmV0dXJuIHhtbDtcbn07XG5cblxudmFyXG5cdHJicmFja2V0ID0gL1xcW1xcXSQvLFxuXHRyQ1JMRiA9IC9cXHI/XFxuL2csXG5cdHJzdWJtaXR0ZXJUeXBlcyA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxcblx0cnN1Ym1pdHRhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO1xuXG5mdW5jdGlvbiBidWlsZFBhcmFtcyggcHJlZml4LCBvYmosIHRyYWRpdGlvbmFsLCBhZGQgKSB7XG5cdHZhciBuYW1lO1xuXG5cdGlmICggalF1ZXJ5LmlzQXJyYXkoIG9iaiApICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIGFycmF5IGl0ZW0uXG5cdFx0alF1ZXJ5LmVhY2goIG9iaiwgZnVuY3Rpb24oIGksIHYgKSB7XG5cdFx0XHRpZiAoIHRyYWRpdGlvbmFsIHx8IHJicmFja2V0LnRlc3QoIHByZWZpeCApICkge1xuXG5cdFx0XHRcdC8vIFRyZWF0IGVhY2ggYXJyYXkgaXRlbSBhcyBhIHNjYWxhci5cblx0XHRcdFx0YWRkKCBwcmVmaXgsIHYgKTtcblxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBJdGVtIGlzIG5vbi1zY2FsYXIgKGFycmF5IG9yIG9iamVjdCksIGVuY29kZSBpdHMgbnVtZXJpYyBpbmRleC5cblx0XHRcdFx0YnVpbGRQYXJhbXMoXG5cdFx0XHRcdFx0cHJlZml4ICsgXCJbXCIgKyAoIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiICYmIHYgIT0gbnVsbCA/IGkgOiBcIlwiICkgKyBcIl1cIixcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdHRyYWRpdGlvbmFsLFxuXHRcdFx0XHRcdGFkZFxuXHRcdFx0XHQpO1xuXHRcdFx0fVxuXHRcdH0gKTtcblxuXHR9IGVsc2UgaWYgKCAhdHJhZGl0aW9uYWwgJiYgalF1ZXJ5LnR5cGUoIG9iaiApID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCArIFwiW1wiICsgbmFtZSArIFwiXVwiLCBvYmpbIG5hbWUgXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gU2VyaWFsaXplIHNjYWxhciBpdGVtLlxuXHRcdGFkZCggcHJlZml4LCBvYmogKTtcblx0fVxufVxuXG4vLyBTZXJpYWxpemUgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cyBvciBhIHNldCBvZlxuLy8ga2V5L3ZhbHVlcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG5qUXVlcnkucGFyYW0gPSBmdW5jdGlvbiggYSwgdHJhZGl0aW9uYWwgKSB7XG5cdHZhciBwcmVmaXgsXG5cdFx0cyA9IFtdLFxuXHRcdGFkZCA9IGZ1bmN0aW9uKCBrZXksIHZhbHVlT3JGdW5jdGlvbiApIHtcblxuXHRcdFx0Ly8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaW52b2tlIGl0IGFuZCB1c2UgaXRzIHJldHVybiB2YWx1ZVxuXHRcdFx0dmFyIHZhbHVlID0galF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlT3JGdW5jdGlvbiApID9cblx0XHRcdFx0dmFsdWVPckZ1bmN0aW9uKCkgOlxuXHRcdFx0XHR2YWx1ZU9yRnVuY3Rpb247XG5cblx0XHRcdHNbIHMubGVuZ3RoIF0gPSBlbmNvZGVVUklDb21wb25lbnQoIGtleSApICsgXCI9XCIgK1xuXHRcdFx0XHRlbmNvZGVVUklDb21wb25lbnQoIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKTtcblx0XHR9O1xuXG5cdC8vIElmIGFuIGFycmF5IHdhcyBwYXNzZWQgaW4sIGFzc3VtZSB0aGF0IGl0IGlzIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMuXG5cdGlmICggalF1ZXJ5LmlzQXJyYXkoIGEgKSB8fCAoIGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggYSApICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgdGhlIGZvcm0gZWxlbWVudHNcblx0XHRqUXVlcnkuZWFjaCggYSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRhZGQoIHRoaXMubmFtZSwgdGhpcy52YWx1ZSApO1xuXHRcdH0gKTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gSWYgdHJhZGl0aW9uYWwsIGVuY29kZSB0aGUgXCJvbGRcIiB3YXkgKHRoZSB3YXkgMS4zLjIgb3Igb2xkZXJcblx0XHQvLyBkaWQgaXQpLCBvdGhlcndpc2UgZW5jb2RlIHBhcmFtcyByZWN1cnNpdmVseS5cblx0XHRmb3IgKCBwcmVmaXggaW4gYSApIHtcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXgsIGFbIHByZWZpeCBdLCB0cmFkaXRpb25hbCwgYWRkICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSByZXN1bHRpbmcgc2VyaWFsaXphdGlvblxuXHRyZXR1cm4gcy5qb2luKCBcIiZcIiApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRzZXJpYWxpemU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnkucGFyYW0oIHRoaXMuc2VyaWFsaXplQXJyYXkoKSApO1xuXHR9LFxuXHRzZXJpYWxpemVBcnJheTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gQ2FuIGFkZCBwcm9wSG9vayBmb3IgXCJlbGVtZW50c1wiIHRvIGZpbHRlciBvciBhZGQgZm9ybSBlbGVtZW50c1xuXHRcdFx0dmFyIGVsZW1lbnRzID0galF1ZXJ5LnByb3AoIHRoaXMsIFwiZWxlbWVudHNcIiApO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnRzID8galF1ZXJ5Lm1ha2VBcnJheSggZWxlbWVudHMgKSA6IHRoaXM7XG5cdFx0fSApXG5cdFx0LmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHlwZSA9IHRoaXMudHlwZTtcblxuXHRcdFx0Ly8gVXNlIC5pcyggXCI6ZGlzYWJsZWRcIiApIHNvIHRoYXQgZmllbGRzZXRbZGlzYWJsZWRdIHdvcmtzXG5cdFx0XHRyZXR1cm4gdGhpcy5uYW1lICYmICFqUXVlcnkoIHRoaXMgKS5pcyggXCI6ZGlzYWJsZWRcIiApICYmXG5cdFx0XHRcdHJzdWJtaXR0YWJsZS50ZXN0KCB0aGlzLm5vZGVOYW1lICkgJiYgIXJzdWJtaXR0ZXJUeXBlcy50ZXN0KCB0eXBlICkgJiZcblx0XHRcdFx0KCB0aGlzLmNoZWNrZWQgfHwgIXJjaGVja2FibGVUeXBlLnRlc3QoIHR5cGUgKSApO1xuXHRcdH0gKVxuXHRcdC5tYXAoIGZ1bmN0aW9uKCBpLCBlbGVtICkge1xuXHRcdFx0dmFyIHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXG5cdFx0XHRpZiAoIHZhbCA9PSBudWxsICkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBqUXVlcnkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyBuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZSggckNSTEYsIFwiXFxyXFxuXCIgKSB9O1xuXHRcdH0gKS5nZXQoKTtcblx0fVxufSApO1xuXG5cbnZhclxuXHRyMjAgPSAvJTIwL2csXG5cdHJoYXNoID0gLyMuKiQvLFxuXHRyYW50aUNhY2hlID0gLyhbPyZdKV89W14mXSovLFxuXHRyaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvbWcsXG5cblx0Ly8gIzc2NTMsICM4MTI1LCAjODE1MjogbG9jYWwgcHJvdG9jb2wgZGV0ZWN0aW9uXG5cdHJsb2NhbFByb3RvY29sID0gL14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sXG5cdHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxuXHRycHJvdG9jb2wgPSAvXlxcL1xcLy8sXG5cblx0LyogUHJlZmlsdGVyc1xuXHQgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuXHQgKiAyKSBUaGVzZSBhcmUgY2FsbGVkOlxuXHQgKiAgICAtIEJFRk9SRSBhc2tpbmcgZm9yIGEgdHJhbnNwb3J0XG5cdCAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcblx0ICogMykga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiA0KSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHRwcmVmaWx0ZXJzID0ge30sXG5cblx0LyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuXHQgKiAxKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDIpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHR0cmFuc3BvcnRzID0ge30sXG5cblx0Ly8gQXZvaWQgY29tbWVudC1wcm9sb2cgY2hhciBzZXF1ZW5jZSAoIzEwMDk4KTsgbXVzdCBhcHBlYXNlIGxpbnQgYW5kIGV2YWRlIGNvbXByZXNzaW9uXG5cdGFsbFR5cGVzID0gXCIqL1wiLmNvbmNhdCggXCIqXCIgKSxcblxuXHQvLyBBbmNob3IgdGFnIGZvciBwYXJzaW5nIHRoZSBkb2N1bWVudCBvcmlnaW5cblx0b3JpZ2luQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblx0b3JpZ2luQW5jaG9yLmhyZWYgPSBsb2NhdGlvbi5ocmVmO1xuXG4vLyBCYXNlIFwiY29uc3RydWN0b3JcIiBmb3IgalF1ZXJ5LmFqYXhQcmVmaWx0ZXIgYW5kIGpRdWVyeS5hamF4VHJhbnNwb3J0XG5mdW5jdGlvbiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHN0cnVjdHVyZSApIHtcblxuXHQvLyBkYXRhVHlwZUV4cHJlc3Npb24gaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIFwiKlwiXG5cdHJldHVybiBmdW5jdGlvbiggZGF0YVR5cGVFeHByZXNzaW9uLCBmdW5jICkge1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YVR5cGVFeHByZXNzaW9uICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0ZnVuYyA9IGRhdGFUeXBlRXhwcmVzc2lvbjtcblx0XHRcdGRhdGFUeXBlRXhwcmVzc2lvbiA9IFwiKlwiO1xuXHRcdH1cblxuXHRcdHZhciBkYXRhVHlwZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0ZGF0YVR5cGVzID0gZGF0YVR5cGVFeHByZXNzaW9uLnRvTG93ZXJDYXNlKCkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGZ1bmMgKSApIHtcblxuXHRcdFx0Ly8gRm9yIGVhY2ggZGF0YVR5cGUgaW4gdGhlIGRhdGFUeXBlRXhwcmVzc2lvblxuXHRcdFx0d2hpbGUgKCAoIGRhdGFUeXBlID0gZGF0YVR5cGVzWyBpKysgXSApICkge1xuXG5cdFx0XHRcdC8vIFByZXBlbmQgaWYgcmVxdWVzdGVkXG5cdFx0XHRcdGlmICggZGF0YVR5cGVbIDAgXSA9PT0gXCIrXCIgKSB7XG5cdFx0XHRcdFx0ZGF0YVR5cGUgPSBkYXRhVHlwZS5zbGljZSggMSApIHx8IFwiKlwiO1xuXHRcdFx0XHRcdCggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkudW5zaGlmdCggZnVuYyApO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBhcHBlbmRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQoIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSA9IHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSApLnB1c2goIGZ1bmMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuLy8gQmFzZSBpbnNwZWN0aW9uIGZ1bmN0aW9uIGZvciBwcmVmaWx0ZXJzIGFuZCB0cmFuc3BvcnRzXG5mdW5jdGlvbiBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlLCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSICkge1xuXG5cdHZhciBpbnNwZWN0ZWQgPSB7fSxcblx0XHRzZWVraW5nVHJhbnNwb3J0ID0gKCBzdHJ1Y3R1cmUgPT09IHRyYW5zcG9ydHMgKTtcblxuXHRmdW5jdGlvbiBpbnNwZWN0KCBkYXRhVHlwZSApIHtcblx0XHR2YXIgc2VsZWN0ZWQ7XG5cdFx0aW5zcGVjdGVkWyBkYXRhVHlwZSBdID0gdHJ1ZTtcblx0XHRqUXVlcnkuZWFjaCggc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdLCBmdW5jdGlvbiggXywgcHJlZmlsdGVyT3JGYWN0b3J5ICkge1xuXHRcdFx0dmFyIGRhdGFUeXBlT3JUcmFuc3BvcnQgPSBwcmVmaWx0ZXJPckZhY3RvcnkoIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKTtcblx0XHRcdGlmICggdHlwZW9mIGRhdGFUeXBlT3JUcmFuc3BvcnQgPT09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0IXNlZWtpbmdUcmFuc3BvcnQgJiYgIWluc3BlY3RlZFsgZGF0YVR5cGVPclRyYW5zcG9ydCBdICkge1xuXG5cdFx0XHRcdG9wdGlvbnMuZGF0YVR5cGVzLnVuc2hpZnQoIGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdFx0aW5zcGVjdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKCBzZWVraW5nVHJhbnNwb3J0ICkge1xuXHRcdFx0XHRyZXR1cm4gISggc2VsZWN0ZWQgPSBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHRcdHJldHVybiBzZWxlY3RlZDtcblx0fVxuXG5cdHJldHVybiBpbnNwZWN0KCBvcHRpb25zLmRhdGFUeXBlc1sgMCBdICkgfHwgIWluc3BlY3RlZFsgXCIqXCIgXSAmJiBpbnNwZWN0KCBcIipcIiApO1xufVxuXG4vLyBBIHNwZWNpYWwgZXh0ZW5kIGZvciBhamF4IG9wdGlvbnNcbi8vIHRoYXQgdGFrZXMgXCJmbGF0XCIgb3B0aW9ucyAobm90IHRvIGJlIGRlZXAgZXh0ZW5kZWQpXG4vLyBGaXhlcyAjOTg4N1xuZnVuY3Rpb24gYWpheEV4dGVuZCggdGFyZ2V0LCBzcmMgKSB7XG5cdHZhciBrZXksIGRlZXAsXG5cdFx0ZmxhdE9wdGlvbnMgPSBqUXVlcnkuYWpheFNldHRpbmdzLmZsYXRPcHRpb25zIHx8IHt9O1xuXG5cdGZvciAoIGtleSBpbiBzcmMgKSB7XG5cdFx0aWYgKCBzcmNbIGtleSBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHQoIGZsYXRPcHRpb25zWyBrZXkgXSA/IHRhcmdldCA6ICggZGVlcCB8fCAoIGRlZXAgPSB7fSApICkgKVsga2V5IF0gPSBzcmNbIGtleSBdO1xuXHRcdH1cblx0fVxuXHRpZiAoIGRlZXAgKSB7XG5cdFx0alF1ZXJ5LmV4dGVuZCggdHJ1ZSwgdGFyZ2V0LCBkZWVwICk7XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG4vKiBIYW5kbGVzIHJlc3BvbnNlcyB0byBhbiBhamF4IHJlcXVlc3Q6XG4gKiAtIGZpbmRzIHRoZSByaWdodCBkYXRhVHlwZSAobWVkaWF0ZXMgYmV0d2VlbiBjb250ZW50LXR5cGUgYW5kIGV4cGVjdGVkIGRhdGFUeXBlKVxuICogLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIGFqYXhIYW5kbGVSZXNwb25zZXMoIHMsIGpxWEhSLCByZXNwb25zZXMgKSB7XG5cblx0dmFyIGN0LCB0eXBlLCBmaW5hbERhdGFUeXBlLCBmaXJzdERhdGFUeXBlLFxuXHRcdGNvbnRlbnRzID0gcy5jb250ZW50cyxcblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcztcblxuXHQvLyBSZW1vdmUgYXV0byBkYXRhVHlwZSBhbmQgZ2V0IGNvbnRlbnQtdHlwZSBpbiB0aGUgcHJvY2Vzc1xuXHR3aGlsZSAoIGRhdGFUeXBlc1sgMCBdID09PSBcIipcIiApIHtcblx0XHRkYXRhVHlwZXMuc2hpZnQoKTtcblx0XHRpZiAoIGN0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRjdCA9IHMubWltZVR5cGUgfHwganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggYSBrbm93biBjb250ZW50LXR5cGVcblx0aWYgKCBjdCApIHtcblx0XHRmb3IgKCB0eXBlIGluIGNvbnRlbnRzICkge1xuXHRcdFx0aWYgKCBjb250ZW50c1sgdHlwZSBdICYmIGNvbnRlbnRzWyB0eXBlIF0udGVzdCggY3QgKSApIHtcblx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHR5cGUgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSByZXNwb25zZSBmb3IgdGhlIGV4cGVjdGVkIGRhdGFUeXBlXG5cdGlmICggZGF0YVR5cGVzWyAwIF0gaW4gcmVzcG9uc2VzICkge1xuXHRcdGZpbmFsRGF0YVR5cGUgPSBkYXRhVHlwZXNbIDAgXTtcblx0fSBlbHNlIHtcblxuXHRcdC8vIFRyeSBjb252ZXJ0aWJsZSBkYXRhVHlwZXNcblx0XHRmb3IgKCB0eXBlIGluIHJlc3BvbnNlcyApIHtcblx0XHRcdGlmICggIWRhdGFUeXBlc1sgMCBdIHx8IHMuY29udmVydGVyc1sgdHlwZSArIFwiIFwiICsgZGF0YVR5cGVzWyAwIF0gXSApIHtcblx0XHRcdFx0ZmluYWxEYXRhVHlwZSA9IHR5cGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhZmlyc3REYXRhVHlwZSApIHtcblx0XHRcdFx0Zmlyc3REYXRhVHlwZSA9IHR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gT3IganVzdCB1c2UgZmlyc3Qgb25lXG5cdFx0ZmluYWxEYXRhVHlwZSA9IGZpbmFsRGF0YVR5cGUgfHwgZmlyc3REYXRhVHlwZTtcblx0fVxuXG5cdC8vIElmIHdlIGZvdW5kIGEgZGF0YVR5cGVcblx0Ly8gV2UgYWRkIHRoZSBkYXRhVHlwZSB0byB0aGUgbGlzdCBpZiBuZWVkZWRcblx0Ly8gYW5kIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuXHRpZiAoIGZpbmFsRGF0YVR5cGUgKSB7XG5cdFx0aWYgKCBmaW5hbERhdGFUeXBlICE9PSBkYXRhVHlwZXNbIDAgXSApIHtcblx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCBmaW5hbERhdGFUeXBlICk7XG5cdFx0fVxuXHRcdHJldHVybiByZXNwb25zZXNbIGZpbmFsRGF0YVR5cGUgXTtcblx0fVxufVxuXG4vKiBDaGFpbiBjb252ZXJzaW9ucyBnaXZlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIG9yaWdpbmFsIHJlc3BvbnNlXG4gKiBBbHNvIHNldHMgdGhlIHJlc3BvbnNlWFhYIGZpZWxkcyBvbiB0aGUganFYSFIgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICkge1xuXHR2YXIgY29udjIsIGN1cnJlbnQsIGNvbnYsIHRtcCwgcHJldixcblx0XHRjb252ZXJ0ZXJzID0ge30sXG5cblx0XHQvLyBXb3JrIHdpdGggYSBjb3B5IG9mIGRhdGFUeXBlcyBpbiBjYXNlIHdlIG5lZWQgdG8gbW9kaWZ5IGl0IGZvciBjb252ZXJzaW9uXG5cdFx0ZGF0YVR5cGVzID0gcy5kYXRhVHlwZXMuc2xpY2UoKTtcblxuXHQvLyBDcmVhdGUgY29udmVydGVycyBtYXAgd2l0aCBsb3dlcmNhc2VkIGtleXNcblx0aWYgKCBkYXRhVHlwZXNbIDEgXSApIHtcblx0XHRmb3IgKCBjb252IGluIHMuY29udmVydGVycyApIHtcblx0XHRcdGNvbnZlcnRlcnNbIGNvbnYudG9Mb3dlckNhc2UoKSBdID0gcy5jb252ZXJ0ZXJzWyBjb252IF07XG5cdFx0fVxuXHR9XG5cblx0Y3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG5cdC8vIENvbnZlcnQgdG8gZWFjaCBzZXF1ZW50aWFsIGRhdGFUeXBlXG5cdHdoaWxlICggY3VycmVudCApIHtcblxuXHRcdGlmICggcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdICkge1xuXHRcdFx0anFYSFJbIHMucmVzcG9uc2VGaWVsZHNbIGN1cnJlbnQgXSBdID0gcmVzcG9uc2U7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgdGhlIGRhdGFGaWx0ZXIgaWYgcHJvdmlkZWRcblx0XHRpZiAoICFwcmV2ICYmIGlzU3VjY2VzcyAmJiBzLmRhdGFGaWx0ZXIgKSB7XG5cdFx0XHRyZXNwb25zZSA9IHMuZGF0YUZpbHRlciggcmVzcG9uc2UsIHMuZGF0YVR5cGUgKTtcblx0XHR9XG5cblx0XHRwcmV2ID0gY3VycmVudDtcblx0XHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0XHRpZiAoIGN1cnJlbnQgKSB7XG5cblx0XHRcdC8vIFRoZXJlJ3Mgb25seSB3b3JrIHRvIGRvIGlmIGN1cnJlbnQgZGF0YVR5cGUgaXMgbm9uLWF1dG9cblx0XHRcdGlmICggY3VycmVudCA9PT0gXCIqXCIgKSB7XG5cblx0XHRcdFx0Y3VycmVudCA9IHByZXY7XG5cblx0XHRcdC8vIENvbnZlcnQgcmVzcG9uc2UgaWYgcHJldiBkYXRhVHlwZSBpcyBub24tYXV0byBhbmQgZGlmZmVycyBmcm9tIGN1cnJlbnRcblx0XHRcdH0gZWxzZSBpZiAoIHByZXYgIT09IFwiKlwiICYmIHByZXYgIT09IGN1cnJlbnQgKSB7XG5cblx0XHRcdFx0Ly8gU2VlayBhIGRpcmVjdCBjb252ZXJ0ZXJcblx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIHByZXYgKyBcIiBcIiArIGN1cnJlbnQgXSB8fCBjb252ZXJ0ZXJzWyBcIiogXCIgKyBjdXJyZW50IF07XG5cblx0XHRcdFx0Ly8gSWYgbm9uZSBmb3VuZCwgc2VlayBhIHBhaXJcblx0XHRcdFx0aWYgKCAhY29udiApIHtcblx0XHRcdFx0XHRmb3IgKCBjb252MiBpbiBjb252ZXJ0ZXJzICkge1xuXG5cdFx0XHRcdFx0XHQvLyBJZiBjb252MiBvdXRwdXRzIGN1cnJlbnRcblx0XHRcdFx0XHRcdHRtcCA9IGNvbnYyLnNwbGl0KCBcIiBcIiApO1xuXHRcdFx0XHRcdFx0aWYgKCB0bXBbIDEgXSA9PT0gY3VycmVudCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcblx0XHRcdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIHByZXYgKyBcIiBcIiArIHRtcFsgMCBdIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZXJzWyBcIiogXCIgKyB0bXBbIDAgXSBdO1xuXHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBDb25kZW5zZSBlcXVpdmFsZW5jZSBjb252ZXJ0ZXJzXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBjb252ID09PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIGNvbnYyIF07XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIGluc2VydCB0aGUgaW50ZXJtZWRpYXRlIGRhdGFUeXBlXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggY29udmVydGVyc1sgY29udjIgXSAhPT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnQgPSB0bXBbIDAgXTtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCB0bXBbIDEgXSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFwcGx5IGNvbnZlcnRlciAoaWYgbm90IGFuIGVxdWl2YWxlbmNlKVxuXHRcdFx0XHRpZiAoIGNvbnYgIT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHQvLyBVbmxlc3MgZXJyb3JzIGFyZSBhbGxvd2VkIHRvIGJ1YmJsZSwgY2F0Y2ggYW5kIHJldHVybiB0aGVtXG5cdFx0XHRcdFx0aWYgKCBjb252ICYmIHMudGhyb3dzICkge1xuXHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBjb252KCByZXNwb25zZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0XHRzdGF0ZTogXCJwYXJzZXJlcnJvclwiLFxuXHRcdFx0XHRcdFx0XHRcdGVycm9yOiBjb252ID8gZSA6IFwiTm8gY29udmVyc2lvbiBmcm9tIFwiICsgcHJldiArIFwiIHRvIFwiICsgY3VycmVudFxuXHRcdFx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7IHN0YXRlOiBcInN1Y2Nlc3NcIiwgZGF0YTogcmVzcG9uc2UgfTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIENvdW50ZXIgZm9yIGhvbGRpbmcgdGhlIG51bWJlciBvZiBhY3RpdmUgcXVlcmllc1xuXHRhY3RpdmU6IDAsXG5cblx0Ly8gTGFzdC1Nb2RpZmllZCBoZWFkZXIgY2FjaGUgZm9yIG5leHQgcmVxdWVzdFxuXHRsYXN0TW9kaWZpZWQ6IHt9LFxuXHRldGFnOiB7fSxcblxuXHRhamF4U2V0dGluZ3M6IHtcblx0XHR1cmw6IGxvY2F0aW9uLmhyZWYsXG5cdFx0dHlwZTogXCJHRVRcIixcblx0XHRpc0xvY2FsOiBybG9jYWxQcm90b2NvbC50ZXN0KCBsb2NhdGlvbi5wcm90b2NvbCApLFxuXHRcdGdsb2JhbDogdHJ1ZSxcblx0XHRwcm9jZXNzRGF0YTogdHJ1ZSxcblx0XHRhc3luYzogdHJ1ZSxcblx0XHRjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLThcIixcblxuXHRcdC8qXG5cdFx0dGltZW91dDogMCxcblx0XHRkYXRhOiBudWxsLFxuXHRcdGRhdGFUeXBlOiBudWxsLFxuXHRcdHVzZXJuYW1lOiBudWxsLFxuXHRcdHBhc3N3b3JkOiBudWxsLFxuXHRcdGNhY2hlOiBudWxsLFxuXHRcdHRocm93czogZmFsc2UsXG5cdFx0dHJhZGl0aW9uYWw6IGZhbHNlLFxuXHRcdGhlYWRlcnM6IHt9LFxuXHRcdCovXG5cblx0XHRhY2NlcHRzOiB7XG5cdFx0XHRcIipcIjogYWxsVHlwZXMsXG5cdFx0XHR0ZXh0OiBcInRleHQvcGxhaW5cIixcblx0XHRcdGh0bWw6IFwidGV4dC9odG1sXCIsXG5cdFx0XHR4bWw6IFwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLFxuXHRcdFx0anNvbjogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIlxuXHRcdH0sXG5cblx0XHRjb250ZW50czoge1xuXHRcdFx0eG1sOiAvXFxieG1sXFxiLyxcblx0XHRcdGh0bWw6IC9cXGJodG1sLyxcblx0XHRcdGpzb246IC9cXGJqc29uXFxiL1xuXHRcdH0sXG5cblx0XHRyZXNwb25zZUZpZWxkczoge1xuXHRcdFx0eG1sOiBcInJlc3BvbnNlWE1MXCIsXG5cdFx0XHR0ZXh0OiBcInJlc3BvbnNlVGV4dFwiLFxuXHRcdFx0anNvbjogXCJyZXNwb25zZUpTT05cIlxuXHRcdH0sXG5cblx0XHQvLyBEYXRhIGNvbnZlcnRlcnNcblx0XHQvLyBLZXlzIHNlcGFyYXRlIHNvdXJjZSAob3IgY2F0Y2hhbGwgXCIqXCIpIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG5cdFx0Y29udmVydGVyczoge1xuXG5cdFx0XHQvLyBDb252ZXJ0IGFueXRoaW5nIHRvIHRleHRcblx0XHRcdFwiKiB0ZXh0XCI6IFN0cmluZyxcblxuXHRcdFx0Ly8gVGV4dCB0byBodG1sICh0cnVlID0gbm8gdHJhbnNmb3JtYXRpb24pXG5cdFx0XHRcInRleHQgaHRtbFwiOiB0cnVlLFxuXG5cdFx0XHQvLyBFdmFsdWF0ZSB0ZXh0IGFzIGEganNvbiBleHByZXNzaW9uXG5cdFx0XHRcInRleHQganNvblwiOiBKU09OLnBhcnNlLFxuXG5cdFx0XHQvLyBQYXJzZSB0ZXh0IGFzIHhtbFxuXHRcdFx0XCJ0ZXh0IHhtbFwiOiBqUXVlcnkucGFyc2VYTUxcblx0XHR9LFxuXG5cdFx0Ly8gRm9yIG9wdGlvbnMgdGhhdCBzaG91bGRuJ3QgYmUgZGVlcCBleHRlbmRlZDpcblx0XHQvLyB5b3UgY2FuIGFkZCB5b3VyIG93biBjdXN0b20gb3B0aW9ucyBoZXJlIGlmXG5cdFx0Ly8gYW5kIHdoZW4geW91IGNyZWF0ZSBvbmUgdGhhdCBzaG91bGRuJ3QgYmVcblx0XHQvLyBkZWVwIGV4dGVuZGVkIChzZWUgYWpheEV4dGVuZClcblx0XHRmbGF0T3B0aW9uczoge1xuXHRcdFx0dXJsOiB0cnVlLFxuXHRcdFx0Y29udGV4dDogdHJ1ZVxuXHRcdH1cblx0fSxcblxuXHQvLyBDcmVhdGVzIGEgZnVsbCBmbGVkZ2VkIHNldHRpbmdzIG9iamVjdCBpbnRvIHRhcmdldFxuXHQvLyB3aXRoIGJvdGggYWpheFNldHRpbmdzIGFuZCBzZXR0aW5ncyBmaWVsZHMuXG5cdC8vIElmIHRhcmdldCBpcyBvbWl0dGVkLCB3cml0ZXMgaW50byBhamF4U2V0dGluZ3MuXG5cdGFqYXhTZXR1cDogZnVuY3Rpb24oIHRhcmdldCwgc2V0dGluZ3MgKSB7XG5cdFx0cmV0dXJuIHNldHRpbmdzID9cblxuXHRcdFx0Ly8gQnVpbGRpbmcgYSBzZXR0aW5ncyBvYmplY3Rcblx0XHRcdGFqYXhFeHRlbmQoIGFqYXhFeHRlbmQoIHRhcmdldCwgalF1ZXJ5LmFqYXhTZXR0aW5ncyApLCBzZXR0aW5ncyApIDpcblxuXHRcdFx0Ly8gRXh0ZW5kaW5nIGFqYXhTZXR0aW5nc1xuXHRcdFx0YWpheEV4dGVuZCggalF1ZXJ5LmFqYXhTZXR0aW5ncywgdGFyZ2V0ICk7XG5cdH0sXG5cblx0YWpheFByZWZpbHRlcjogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzICksXG5cdGFqYXhUcmFuc3BvcnQ6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggdHJhbnNwb3J0cyApLFxuXG5cdC8vIE1haW4gbWV0aG9kXG5cdGFqYXg6IGZ1bmN0aW9uKCB1cmwsIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBJZiB1cmwgaXMgYW4gb2JqZWN0LCBzaW11bGF0ZSBwcmUtMS41IHNpZ25hdHVyZVxuXHRcdGlmICggdHlwZW9mIHVybCA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdG9wdGlvbnMgPSB1cmw7XG5cdFx0XHR1cmwgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gRm9yY2Ugb3B0aW9ucyB0byBiZSBhbiBvYmplY3Rcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdHZhciB0cmFuc3BvcnQsXG5cblx0XHRcdC8vIFVSTCB3aXRob3V0IGFudGktY2FjaGUgcGFyYW1cblx0XHRcdGNhY2hlVVJMLFxuXG5cdFx0XHQvLyBSZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNTdHJpbmcsXG5cdFx0XHRyZXNwb25zZUhlYWRlcnMsXG5cblx0XHRcdC8vIHRpbWVvdXQgaGFuZGxlXG5cdFx0XHR0aW1lb3V0VGltZXIsXG5cblx0XHRcdC8vIFVybCBjbGVhbnVwIHZhclxuXHRcdFx0dXJsQW5jaG9yLFxuXG5cdFx0XHQvLyBSZXF1ZXN0IHN0YXRlIChiZWNvbWVzIGZhbHNlIHVwb24gc2VuZCBhbmQgdHJ1ZSB1cG9uIGNvbXBsZXRpb24pXG5cdFx0XHRjb21wbGV0ZWQsXG5cblx0XHRcdC8vIFRvIGtub3cgaWYgZ2xvYmFsIGV2ZW50cyBhcmUgdG8gYmUgZGlzcGF0Y2hlZFxuXHRcdFx0ZmlyZUdsb2JhbHMsXG5cblx0XHRcdC8vIExvb3AgdmFyaWFibGVcblx0XHRcdGksXG5cblx0XHRcdC8vIHVuY2FjaGVkIHBhcnQgb2YgdGhlIHVybFxuXHRcdFx0dW5jYWNoZWQsXG5cblx0XHRcdC8vIENyZWF0ZSB0aGUgZmluYWwgb3B0aW9ucyBvYmplY3Rcblx0XHRcdHMgPSBqUXVlcnkuYWpheFNldHVwKCB7fSwgb3B0aW9ucyApLFxuXG5cdFx0XHQvLyBDYWxsYmFja3MgY29udGV4dFxuXHRcdFx0Y2FsbGJhY2tDb250ZXh0ID0gcy5jb250ZXh0IHx8IHMsXG5cblx0XHRcdC8vIENvbnRleHQgZm9yIGdsb2JhbCBldmVudHMgaXMgY2FsbGJhY2tDb250ZXh0IGlmIGl0IGlzIGEgRE9NIG5vZGUgb3IgalF1ZXJ5IGNvbGxlY3Rpb25cblx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dCA9IHMuY29udGV4dCAmJlxuXHRcdFx0XHQoIGNhbGxiYWNrQ29udGV4dC5ub2RlVHlwZSB8fCBjYWxsYmFja0NvbnRleHQuanF1ZXJ5ICkgP1xuXHRcdFx0XHRcdGpRdWVyeSggY2FsbGJhY2tDb250ZXh0ICkgOlxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudCxcblxuXHRcdFx0Ly8gRGVmZXJyZWRzXG5cdFx0XHRkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZCA9IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXG5cdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0c3RhdHVzQ29kZSA9IHMuc3RhdHVzQ29kZSB8fCB7fSxcblxuXHRcdFx0Ly8gSGVhZGVycyAodGhleSBhcmUgc2VudCBhbGwgYXQgb25jZSlcblx0XHRcdHJlcXVlc3RIZWFkZXJzID0ge30sXG5cdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXG5cblx0XHRcdC8vIERlZmF1bHQgYWJvcnQgbWVzc2FnZVxuXHRcdFx0c3RyQWJvcnQgPSBcImNhbmNlbGVkXCIsXG5cblx0XHRcdC8vIEZha2UgeGhyXG5cdFx0XHRqcVhIUiA9IHtcblx0XHRcdFx0cmVhZHlTdGF0ZTogMCxcblxuXHRcdFx0XHQvLyBCdWlsZHMgaGVhZGVycyBoYXNodGFibGUgaWYgbmVlZGVkXG5cdFx0XHRcdGdldFJlc3BvbnNlSGVhZGVyOiBmdW5jdGlvbigga2V5ICkge1xuXHRcdFx0XHRcdHZhciBtYXRjaDtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0XHRcdGlmICggIXJlc3BvbnNlSGVhZGVycyApIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzID0ge307XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKCBtYXRjaCA9IHJoZWFkZXJzLmV4ZWMoIHJlc3BvbnNlSGVhZGVyc1N0cmluZyApICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCkgXSA9IG1hdGNoWyAyIF07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdG1hdGNoID0gcmVzcG9uc2VIZWFkZXJzWyBrZXkudG9Mb3dlckNhc2UoKSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2ggPT0gbnVsbCA/IG51bGwgOiBtYXRjaDtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBSYXcgc3RyaW5nXG5cdFx0XHRcdGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbXBsZXRlZCA/IHJlc3BvbnNlSGVhZGVyc1N0cmluZyA6IG51bGw7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FjaGVzIHRoZSBoZWFkZXJcblx0XHRcdFx0c2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRuYW1lID0gcmVxdWVzdEhlYWRlcnNOYW1lc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gPVxuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSB8fCBuYW1lO1xuXHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBPdmVycmlkZXMgcmVzcG9uc2UgY29udGVudC10eXBlIGhlYWRlclxuXHRcdFx0XHRvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0cy5taW1lVHlwZSA9IHR5cGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRcdHN0YXR1c0NvZGU6IGZ1bmN0aW9uKCBtYXAgKSB7XG5cdFx0XHRcdFx0dmFyIGNvZGU7XG5cdFx0XHRcdFx0aWYgKCBtYXAgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBFeGVjdXRlIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja3Ncblx0XHRcdFx0XHRcdFx0anFYSFIuYWx3YXlzKCBtYXBbIGpxWEhSLnN0YXR1cyBdICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIExhenktYWRkIHRoZSBuZXcgY2FsbGJhY2tzIGluIGEgd2F5IHRoYXQgcHJlc2VydmVzIG9sZCBvbmVzXG5cdFx0XHRcdFx0XHRcdGZvciAoIGNvZGUgaW4gbWFwICkge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXR1c0NvZGVbIGNvZGUgXSA9IFsgc3RhdHVzQ29kZVsgY29kZSBdLCBtYXBbIGNvZGUgXSBdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhbmNlbCB0aGUgcmVxdWVzdFxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24oIHN0YXR1c1RleHQgKSB7XG5cdFx0XHRcdFx0dmFyIGZpbmFsVGV4dCA9IHN0YXR1c1RleHQgfHwgc3RyQWJvcnQ7XG5cdFx0XHRcdFx0aWYgKCB0cmFuc3BvcnQgKSB7XG5cdFx0XHRcdFx0XHR0cmFuc3BvcnQuYWJvcnQoIGZpbmFsVGV4dCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb25lKCAwLCBmaW5hbFRleHQgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdC8vIEF0dGFjaCBkZWZlcnJlZHNcblx0XHRkZWZlcnJlZC5wcm9taXNlKCBqcVhIUiApO1xuXG5cdFx0Ly8gQWRkIHByb3RvY29sIGlmIG5vdCBwcm92aWRlZCAocHJlZmlsdGVycyBtaWdodCBleHBlY3QgaXQpXG5cdFx0Ly8gSGFuZGxlIGZhbHN5IHVybCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0ICgjMTAwOTM6IGNvbnNpc3RlbmN5IHdpdGggb2xkIHNpZ25hdHVyZSlcblx0XHQvLyBXZSBhbHNvIHVzZSB0aGUgdXJsIHBhcmFtZXRlciBpZiBhdmFpbGFibGVcblx0XHRzLnVybCA9ICggKCB1cmwgfHwgcy51cmwgfHwgbG9jYXRpb24uaHJlZiApICsgXCJcIiApXG5cdFx0XHQucmVwbGFjZSggcnByb3RvY29sLCBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiApO1xuXG5cdFx0Ly8gQWxpYXMgbWV0aG9kIG9wdGlvbiB0byB0eXBlIGFzIHBlciB0aWNrZXQgIzEyMDA0XG5cdFx0cy50eXBlID0gb3B0aW9ucy5tZXRob2QgfHwgb3B0aW9ucy50eXBlIHx8IHMubWV0aG9kIHx8IHMudHlwZTtcblxuXHRcdC8vIEV4dHJhY3QgZGF0YVR5cGVzIGxpc3Rcblx0XHRzLmRhdGFUeXBlcyA9ICggcy5kYXRhVHlwZSB8fCBcIipcIiApLnRvTG93ZXJDYXNlKCkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbIFwiXCIgXTtcblxuXHRcdC8vIEEgY3Jvc3MtZG9tYWluIHJlcXVlc3QgaXMgaW4gb3JkZXIgd2hlbiB0aGUgb3JpZ2luIGRvZXNuJ3QgbWF0Y2ggdGhlIGN1cnJlbnQgb3JpZ2luLlxuXHRcdGlmICggcy5jcm9zc0RvbWFpbiA9PSBudWxsICkge1xuXHRcdFx0dXJsQW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJhXCIgKTtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEsIEVkZ2UgMTIgLSAxM1xuXHRcdFx0Ly8gSUUgdGhyb3dzIGV4Y2VwdGlvbiBvbiBhY2Nlc3NpbmcgdGhlIGhyZWYgcHJvcGVydHkgaWYgdXJsIGlzIG1hbGZvcm1lZCxcblx0XHRcdC8vIGUuZy4gaHR0cDovL2V4YW1wbGUuY29tOjgweC9cblx0XHRcdHRyeSB7XG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gcy51cmw7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD04IC0gMTEgb25seVxuXHRcdFx0XHQvLyBBbmNob3IncyBob3N0IHByb3BlcnR5IGlzbid0IGNvcnJlY3RseSBzZXQgd2hlbiBzLnVybCBpcyByZWxhdGl2ZVxuXHRcdFx0XHR1cmxBbmNob3IuaHJlZiA9IHVybEFuY2hvci5ocmVmO1xuXHRcdFx0XHRzLmNyb3NzRG9tYWluID0gb3JpZ2luQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgb3JpZ2luQW5jaG9yLmhvc3QgIT09XG5cdFx0XHRcdFx0dXJsQW5jaG9yLnByb3RvY29sICsgXCIvL1wiICsgdXJsQW5jaG9yLmhvc3Q7XG5cdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBhbiBlcnJvciBwYXJzaW5nIHRoZSBVUkwsIGFzc3VtZSBpdCBpcyBjcm9zc0RvbWFpbixcblx0XHRcdFx0Ly8gaXQgY2FuIGJlIHJlamVjdGVkIGJ5IHRoZSB0cmFuc3BvcnQgaWYgaXQgaXMgaW52YWxpZFxuXHRcdFx0XHRzLmNyb3NzRG9tYWluID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IGRhdGEgaWYgbm90IGFscmVhZHkgYSBzdHJpbmdcblx0XHRpZiAoIHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmIHR5cGVvZiBzLmRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRzLmRhdGEgPSBqUXVlcnkucGFyYW0oIHMuZGF0YSwgcy50cmFkaXRpb25hbCApO1xuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHByZWZpbHRlcnNcblx0XHRpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggcHJlZmlsdGVycywgcywgb3B0aW9ucywganFYSFIgKTtcblxuXHRcdC8vIElmIHJlcXVlc3Qgd2FzIGFib3J0ZWQgaW5zaWRlIGEgcHJlZmlsdGVyLCBzdG9wIHRoZXJlXG5cdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0fVxuXG5cdFx0Ly8gV2UgY2FuIGZpcmUgZ2xvYmFsIGV2ZW50cyBhcyBvZiBub3cgaWYgYXNrZWQgdG9cblx0XHQvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAoIzE1MTE4KVxuXHRcdGZpcmVHbG9iYWxzID0galF1ZXJ5LmV2ZW50ICYmIHMuZ2xvYmFsO1xuXG5cdFx0Ly8gV2F0Y2ggZm9yIGEgbmV3IHNldCBvZiByZXF1ZXN0c1xuXHRcdGlmICggZmlyZUdsb2JhbHMgJiYgalF1ZXJ5LmFjdGl2ZSsrID09PSAwICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheFN0YXJ0XCIgKTtcblx0XHR9XG5cblx0XHQvLyBVcHBlcmNhc2UgdGhlIHR5cGVcblx0XHRzLnR5cGUgPSBzLnR5cGUudG9VcHBlckNhc2UoKTtcblxuXHRcdC8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG5cdFx0cy5oYXNDb250ZW50ID0gIXJub0NvbnRlbnQudGVzdCggcy50eXBlICk7XG5cblx0XHQvLyBTYXZlIHRoZSBVUkwgaW4gY2FzZSB3ZSdyZSB0b3lpbmcgd2l0aCB0aGUgSWYtTW9kaWZpZWQtU2luY2Vcblx0XHQvLyBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIgbGF0ZXIgb25cblx0XHQvLyBSZW1vdmUgaGFzaCB0byBzaW1wbGlmeSB1cmwgbWFuaXB1bGF0aW9uXG5cdFx0Y2FjaGVVUkwgPSBzLnVybC5yZXBsYWNlKCByaGFzaCwgXCJcIiApO1xuXG5cdFx0Ly8gTW9yZSBvcHRpb25zIGhhbmRsaW5nIGZvciByZXF1ZXN0cyB3aXRoIG5vIGNvbnRlbnRcblx0XHRpZiAoICFzLmhhc0NvbnRlbnQgKSB7XG5cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBoYXNoIHNvIHdlIGNhbiBwdXQgaXQgYmFja1xuXHRcdFx0dW5jYWNoZWQgPSBzLnVybC5zbGljZSggY2FjaGVVUkwubGVuZ3RoICk7XG5cblx0XHRcdC8vIElmIGRhdGEgaXMgYXZhaWxhYmxlLCBhcHBlbmQgZGF0YSB0byB1cmxcblx0XHRcdGlmICggcy5kYXRhICkge1xuXHRcdFx0XHRjYWNoZVVSTCArPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgcy5kYXRhO1xuXG5cdFx0XHRcdC8vICM5NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcblx0XHRcdFx0ZGVsZXRlIHMuZGF0YTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIG9yIHVwZGF0ZSBhbnRpLWNhY2hlIHBhcmFtIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCBzLmNhY2hlID09PSBmYWxzZSApIHtcblx0XHRcdFx0Y2FjaGVVUkwgPSBjYWNoZVVSTC5yZXBsYWNlKCByYW50aUNhY2hlLCBcIiQxXCIgKTtcblx0XHRcdFx0dW5jYWNoZWQgPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgXCJfPVwiICsgKCBub25jZSsrICkgKyB1bmNhY2hlZDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUHV0IGhhc2ggYW5kIGFudGktY2FjaGUgb24gdGhlIFVSTCB0aGF0IHdpbGwgYmUgcmVxdWVzdGVkIChnaC0xNzMyKVxuXHRcdFx0cy51cmwgPSBjYWNoZVVSTCArIHVuY2FjaGVkO1xuXG5cdFx0Ly8gQ2hhbmdlICclMjAnIHRvICcrJyBpZiB0aGlzIGlzIGVuY29kZWQgZm9ybSBib2R5IGNvbnRlbnQgKGdoLTI2NTgpXG5cdFx0fSBlbHNlIGlmICggcy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiZcblx0XHRcdCggcy5jb250ZW50VHlwZSB8fCBcIlwiICkuaW5kZXhPZiggXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiApID09PSAwICkge1xuXHRcdFx0cy5kYXRhID0gcy5kYXRhLnJlcGxhY2UoIHIyMCwgXCIrXCIgKTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuXHRcdGlmICggcy5pZk1vZGlmaWVkICkge1xuXHRcdFx0aWYgKCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICkge1xuXHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIklmLU1vZGlmaWVkLVNpbmNlXCIsIGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gKTtcblx0XHRcdH1cblx0XHRcdGlmICggalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gKSB7XG5cdFx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiSWYtTm9uZS1NYXRjaFwiLCBqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgY29ycmVjdCBoZWFkZXIsIGlmIGRhdGEgaXMgYmVpbmcgc2VudFxuXHRcdGlmICggcy5kYXRhICYmIHMuaGFzQ29udGVudCAmJiBzLmNvbnRlbnRUeXBlICE9PSBmYWxzZSB8fCBvcHRpb25zLmNvbnRlbnRUeXBlICkge1xuXHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJDb250ZW50LVR5cGVcIiwgcy5jb250ZW50VHlwZSApO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgQWNjZXB0cyBoZWFkZXIgZm9yIHRoZSBzZXJ2ZXIsIGRlcGVuZGluZyBvbiB0aGUgZGF0YVR5cGVcblx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFxuXHRcdFx0XCJBY2NlcHRcIixcblx0XHRcdHMuZGF0YVR5cGVzWyAwIF0gJiYgcy5hY2NlcHRzWyBzLmRhdGFUeXBlc1sgMCBdIF0gP1xuXHRcdFx0XHRzLmFjY2VwdHNbIHMuZGF0YVR5cGVzWyAwIF0gXSArXG5cdFx0XHRcdFx0KCBzLmRhdGFUeXBlc1sgMCBdICE9PSBcIipcIiA/IFwiLCBcIiArIGFsbFR5cGVzICsgXCI7IHE9MC4wMVwiIDogXCJcIiApIDpcblx0XHRcdFx0cy5hY2NlcHRzWyBcIipcIiBdXG5cdFx0KTtcblxuXHRcdC8vIENoZWNrIGZvciBoZWFkZXJzIG9wdGlvblxuXHRcdGZvciAoIGkgaW4gcy5oZWFkZXJzICkge1xuXHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggaSwgcy5oZWFkZXJzWyBpIF0gKTtcblx0XHR9XG5cblx0XHQvLyBBbGxvdyBjdXN0b20gaGVhZGVycy9taW1ldHlwZXMgYW5kIGVhcmx5IGFib3J0XG5cdFx0aWYgKCBzLmJlZm9yZVNlbmQgJiZcblx0XHRcdCggcy5iZWZvcmVTZW5kLmNhbGwoIGNhbGxiYWNrQ29udGV4dCwganFYSFIsIHMgKSA9PT0gZmFsc2UgfHwgY29tcGxldGVkICkgKSB7XG5cblx0XHRcdC8vIEFib3J0IGlmIG5vdCBkb25lIGFscmVhZHkgYW5kIHJldHVyblxuXHRcdFx0cmV0dXJuIGpxWEhSLmFib3J0KCk7XG5cdFx0fVxuXG5cdFx0Ly8gQWJvcnRpbmcgaXMgbm8gbG9uZ2VyIGEgY2FuY2VsbGF0aW9uXG5cdFx0c3RyQWJvcnQgPSBcImFib3J0XCI7XG5cblx0XHQvLyBJbnN0YWxsIGNhbGxiYWNrcyBvbiBkZWZlcnJlZHNcblx0XHRjb21wbGV0ZURlZmVycmVkLmFkZCggcy5jb21wbGV0ZSApO1xuXHRcdGpxWEhSLmRvbmUoIHMuc3VjY2VzcyApO1xuXHRcdGpxWEhSLmZhaWwoIHMuZXJyb3IgKTtcblxuXHRcdC8vIEdldCB0cmFuc3BvcnRcblx0XHR0cmFuc3BvcnQgPSBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggdHJhbnNwb3J0cywgcywgb3B0aW9ucywganFYSFIgKTtcblxuXHRcdC8vIElmIG5vIHRyYW5zcG9ydCwgd2UgYXV0by1hYm9ydFxuXHRcdGlmICggIXRyYW5zcG9ydCApIHtcblx0XHRcdGRvbmUoIC0xLCBcIk5vIFRyYW5zcG9ydFwiICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGpxWEhSLnJlYWR5U3RhdGUgPSAxO1xuXG5cdFx0XHQvLyBTZW5kIGdsb2JhbCBldmVudFxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheFNlbmRcIiwgWyBqcVhIUiwgcyBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIHJlcXVlc3Qgd2FzIGFib3J0ZWQgaW5zaWRlIGFqYXhTZW5kLCBzdG9wIHRoZXJlXG5cdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0cmV0dXJuIGpxWEhSO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBUaW1lb3V0XG5cdFx0XHRpZiAoIHMuYXN5bmMgJiYgcy50aW1lb3V0ID4gMCApIHtcblx0XHRcdFx0dGltZW91dFRpbWVyID0gd2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGpxWEhSLmFib3J0KCBcInRpbWVvdXRcIiApO1xuXHRcdFx0XHR9LCBzLnRpbWVvdXQgKTtcblx0XHRcdH1cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29tcGxldGVkID0gZmFsc2U7XG5cdFx0XHRcdHRyYW5zcG9ydC5zZW5kKCByZXF1ZXN0SGVhZGVycywgZG9uZSApO1xuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0Ly8gUmV0aHJvdyBwb3N0LWNvbXBsZXRpb24gZXhjZXB0aW9uc1xuXHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUHJvcGFnYXRlIG90aGVycyBhcyByZXN1bHRzXG5cdFx0XHRcdGRvbmUoIC0xLCBlICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbGJhY2sgZm9yIHdoZW4gZXZlcnl0aGluZyBpcyBkb25lXG5cdFx0ZnVuY3Rpb24gZG9uZSggc3RhdHVzLCBuYXRpdmVTdGF0dXNUZXh0LCByZXNwb25zZXMsIGhlYWRlcnMgKSB7XG5cdFx0XHR2YXIgaXNTdWNjZXNzLCBzdWNjZXNzLCBlcnJvciwgcmVzcG9uc2UsIG1vZGlmaWVkLFxuXHRcdFx0XHRzdGF0dXNUZXh0ID0gbmF0aXZlU3RhdHVzVGV4dDtcblxuXHRcdFx0Ly8gSWdub3JlIHJlcGVhdCBpbnZvY2F0aW9uc1xuXHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29tcGxldGVkID0gdHJ1ZTtcblxuXHRcdFx0Ly8gQ2xlYXIgdGltZW91dCBpZiBpdCBleGlzdHNcblx0XHRcdGlmICggdGltZW91dFRpbWVyICkge1xuXHRcdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KCB0aW1lb3V0VGltZXIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRGVyZWZlcmVuY2UgdHJhbnNwb3J0IGZvciBlYXJseSBnYXJiYWdlIGNvbGxlY3Rpb25cblx0XHRcdC8vIChubyBtYXR0ZXIgaG93IGxvbmcgdGhlIGpxWEhSIG9iamVjdCB3aWxsIGJlIHVzZWQpXG5cdFx0XHR0cmFuc3BvcnQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdC8vIENhY2hlIHJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyA9IGhlYWRlcnMgfHwgXCJcIjtcblxuXHRcdFx0Ly8gU2V0IHJlYWR5U3RhdGVcblx0XHRcdGpxWEhSLnJlYWR5U3RhdGUgPSBzdGF0dXMgPiAwID8gNCA6IDA7XG5cblx0XHRcdC8vIERldGVybWluZSBpZiBzdWNjZXNzZnVsXG5cdFx0XHRpc1N1Y2Nlc3MgPSBzdGF0dXMgPj0gMjAwICYmIHN0YXR1cyA8IDMwMCB8fCBzdGF0dXMgPT09IDMwNDtcblxuXHRcdFx0Ly8gR2V0IHJlc3BvbnNlIGRhdGFcblx0XHRcdGlmICggcmVzcG9uc2VzICkge1xuXHRcdFx0XHRyZXNwb25zZSA9IGFqYXhIYW5kbGVSZXNwb25zZXMoIHMsIGpxWEhSLCByZXNwb25zZXMgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udmVydCBubyBtYXR0ZXIgd2hhdCAodGhhdCB3YXkgcmVzcG9uc2VYWFggZmllbGRzIGFyZSBhbHdheXMgc2V0KVxuXHRcdFx0cmVzcG9uc2UgPSBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKTtcblxuXHRcdFx0Ly8gSWYgc3VjY2Vzc2Z1bCwgaGFuZGxlIHR5cGUgY2hhaW5pbmdcblx0XHRcdGlmICggaXNTdWNjZXNzICkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0XHRcdGlmICggcy5pZk1vZGlmaWVkICkge1xuXHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiTGFzdC1Nb2RpZmllZFwiICk7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJldGFnXCIgKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiBubyBjb250ZW50XG5cdFx0XHRcdGlmICggc3RhdHVzID09PSAyMDQgfHwgcy50eXBlID09PSBcIkhFQURcIiApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJub2NvbnRlbnRcIjtcblxuXHRcdFx0XHQvLyBpZiBub3QgbW9kaWZpZWRcblx0XHRcdFx0fSBlbHNlIGlmICggc3RhdHVzID09PSAzMDQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm90bW9kaWZpZWRcIjtcblxuXHRcdFx0XHQvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdGU7XG5cdFx0XHRcdFx0c3VjY2VzcyA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRcdFx0ZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcblx0XHRcdFx0XHRpc1N1Y2Nlc3MgPSAhZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gRXh0cmFjdCBlcnJvciBmcm9tIHN0YXR1c1RleHQgYW5kIG5vcm1hbGl6ZSBmb3Igbm9uLWFib3J0c1xuXHRcdFx0XHRlcnJvciA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdGlmICggc3RhdHVzIHx8ICFzdGF0dXNUZXh0ICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcImVycm9yXCI7XG5cdFx0XHRcdFx0aWYgKCBzdGF0dXMgPCAwICkge1xuXHRcdFx0XHRcdFx0c3RhdHVzID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IGRhdGEgZm9yIHRoZSBmYWtlIHhociBvYmplY3Rcblx0XHRcdGpxWEhSLnN0YXR1cyA9IHN0YXR1cztcblx0XHRcdGpxWEhSLnN0YXR1c1RleHQgPSAoIG5hdGl2ZVN0YXR1c1RleHQgfHwgc3RhdHVzVGV4dCApICsgXCJcIjtcblxuXHRcdFx0Ly8gU3VjY2Vzcy9FcnJvclxuXHRcdFx0aWYgKCBpc1N1Y2Nlc3MgKSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsgc3VjY2Vzcywgc3RhdHVzVGV4dCwganFYSFIgXSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0LCBlcnJvciBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRqcVhIUi5zdGF0dXNDb2RlKCBzdGF0dXNDb2RlICk7XG5cdFx0XHRzdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggaXNTdWNjZXNzID8gXCJhamF4U3VjY2Vzc1wiIDogXCJhamF4RXJyb3JcIixcblx0XHRcdFx0XHRbIGpxWEhSLCBzLCBpc1N1Y2Nlc3MgPyBzdWNjZXNzIDogZXJyb3IgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb21wbGV0ZVxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZC5maXJlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0IF0gKTtcblxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheENvbXBsZXRlXCIsIFsganFYSFIsIHMgXSApO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSB0aGUgZ2xvYmFsIEFKQVggY291bnRlclxuXHRcdFx0XHRpZiAoICEoIC0talF1ZXJ5LmFjdGl2ZSApICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdG9wXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBqcVhIUjtcblx0fSxcblxuXHRnZXRKU09OOiBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCBkYXRhLCBjYWxsYmFjaywgXCJqc29uXCIgKTtcblx0fSxcblxuXHRnZXRTY3JpcHQ6IGZ1bmN0aW9uKCB1cmwsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ2V0KCB1cmwsIHVuZGVmaW5lZCwgY2FsbGJhY2ssIFwic2NyaXB0XCIgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcImdldFwiLCBcInBvc3RcIiBdLCBmdW5jdGlvbiggaSwgbWV0aG9kICkge1xuXHRqUXVlcnlbIG1ldGhvZCBdID0gZnVuY3Rpb24oIHVybCwgZGF0YSwgY2FsbGJhY2ssIHR5cGUgKSB7XG5cblx0XHQvLyBTaGlmdCBhcmd1bWVudHMgaWYgZGF0YSBhcmd1bWVudCB3YXMgb21pdHRlZFxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGRhdGEgKSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IGNhbGxiYWNrO1xuXHRcdFx0Y2FsbGJhY2sgPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBUaGUgdXJsIGNhbiBiZSBhbiBvcHRpb25zIG9iamVjdCAod2hpY2ggdGhlbiBtdXN0IGhhdmUgLnVybClcblx0XHRyZXR1cm4galF1ZXJ5LmFqYXgoIGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0dHlwZTogbWV0aG9kLFxuXHRcdFx0ZGF0YVR5cGU6IHR5cGUsXG5cdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0c3VjY2VzczogY2FsbGJhY2tcblx0XHR9LCBqUXVlcnkuaXNQbGFpbk9iamVjdCggdXJsICkgJiYgdXJsICkgKTtcblx0fTtcbn0gKTtcblxuXG5qUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiggdXJsICkge1xuXHRyZXR1cm4galF1ZXJ5LmFqYXgoIHtcblx0XHR1cmw6IHVybCxcblxuXHRcdC8vIE1ha2UgdGhpcyBleHBsaWNpdCwgc2luY2UgdXNlciBjYW4gb3ZlcnJpZGUgdGhpcyB0aHJvdWdoIGFqYXhTZXR1cCAoIzExMjY0KVxuXHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0ZGF0YVR5cGU6IFwic2NyaXB0XCIsXG5cdFx0Y2FjaGU6IHRydWUsXG5cdFx0YXN5bmM6IGZhbHNlLFxuXHRcdGdsb2JhbDogZmFsc2UsXG5cdFx0XCJ0aHJvd3NcIjogdHJ1ZVxuXHR9ICk7XG59O1xuXG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0d3JhcEFsbDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIHdyYXA7XG5cblx0XHRpZiAoIHRoaXNbIDAgXSApIHtcblx0XHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGh0bWwgKSApIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwuY2FsbCggdGhpc1sgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRoZSBlbGVtZW50cyB0byB3cmFwIHRoZSB0YXJnZXQgYXJvdW5kXG5cdFx0XHR3cmFwID0galF1ZXJ5KCBodG1sLCB0aGlzWyAwIF0ub3duZXJEb2N1bWVudCApLmVxKCAwICkuY2xvbmUoIHRydWUgKTtcblxuXHRcdFx0aWYgKCB0aGlzWyAwIF0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0d3JhcC5pbnNlcnRCZWZvcmUoIHRoaXNbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHR3cmFwLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gdGhpcztcblxuXHRcdFx0XHR3aGlsZSAoIGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQgKSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZWxlbTtcblx0XHRcdH0gKS5hcHBlbmQoIHRoaXMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR3cmFwSW5uZXI6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGh0bWwgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwSW5uZXIoIGh0bWwuY2FsbCggdGhpcywgaSApICk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGpRdWVyeSggdGhpcyApLFxuXHRcdFx0XHRjb250ZW50cyA9IHNlbGYuY29udGVudHMoKTtcblxuXHRcdFx0aWYgKCBjb250ZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRlbnRzLndyYXBBbGwoIGh0bWwgKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5hcHBlbmQoIGh0bWwgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0d3JhcDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIGlzRnVuY3Rpb24gPSBqUXVlcnkuaXNGdW5jdGlvbiggaHRtbCApO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwQWxsKCBpc0Z1bmN0aW9uID8gaHRtbC5jYWxsKCB0aGlzLCBpICkgOiBodG1sICk7XG5cdFx0fSApO1xuXHR9LFxuXG5cdHVud3JhcDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHRoaXMucGFyZW50KCBzZWxlY3RvciApLm5vdCggXCJib2R5XCIgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnJlcGxhY2VXaXRoKCB0aGlzLmNoaWxkTm9kZXMgKTtcblx0XHR9ICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmhpZGRlbiA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4gIWpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSggZWxlbSApO1xufTtcbmpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4gISEoIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApO1xufTtcblxuXG5cblxualF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIgPSBmdW5jdGlvbigpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuXHR9IGNhdGNoICggZSApIHt9XG59O1xuXG52YXIgeGhyU3VjY2Vzc1N0YXR1cyA9IHtcblxuXHRcdC8vIEZpbGUgcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgY29kZSAwLCBhc3N1bWUgMjAwXG5cdFx0MDogMjAwLFxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHQvLyAjMTQ1MDogc29tZXRpbWVzIElFIHJldHVybnMgMTIyMyB3aGVuIGl0IHNob3VsZCBiZSAyMDRcblx0XHQxMjIzOiAyMDRcblx0fSxcblx0eGhyU3VwcG9ydGVkID0galF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIoKTtcblxuc3VwcG9ydC5jb3JzID0gISF4aHJTdXBwb3J0ZWQgJiYgKCBcIndpdGhDcmVkZW50aWFsc1wiIGluIHhoclN1cHBvcnRlZCApO1xuc3VwcG9ydC5hamF4ID0geGhyU3VwcG9ydGVkID0gISF4aHJTdXBwb3J0ZWQ7XG5cbmpRdWVyeS5hamF4VHJhbnNwb3J0KCBmdW5jdGlvbiggb3B0aW9ucyApIHtcblx0dmFyIGNhbGxiYWNrLCBlcnJvckNhbGxiYWNrO1xuXG5cdC8vIENyb3NzIGRvbWFpbiBvbmx5IGFsbG93ZWQgaWYgc3VwcG9ydGVkIHRocm91Z2ggWE1MSHR0cFJlcXVlc3Rcblx0aWYgKCBzdXBwb3J0LmNvcnMgfHwgeGhyU3VwcG9ydGVkICYmICFvcHRpb25zLmNyb3NzRG9tYWluICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZW5kOiBmdW5jdGlvbiggaGVhZGVycywgY29tcGxldGUgKSB7XG5cdFx0XHRcdHZhciBpLFxuXHRcdFx0XHRcdHhociA9IG9wdGlvbnMueGhyKCk7XG5cblx0XHRcdFx0eGhyLm9wZW4oXG5cdFx0XHRcdFx0b3B0aW9ucy50eXBlLFxuXHRcdFx0XHRcdG9wdGlvbnMudXJsLFxuXHRcdFx0XHRcdG9wdGlvbnMuYXN5bmMsXG5cdFx0XHRcdFx0b3B0aW9ucy51c2VybmFtZSxcblx0XHRcdFx0XHRvcHRpb25zLnBhc3N3b3JkXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gQXBwbHkgY3VzdG9tIGZpZWxkcyBpZiBwcm92aWRlZFxuXHRcdFx0XHRpZiAoIG9wdGlvbnMueGhyRmllbGRzICkge1xuXHRcdFx0XHRcdGZvciAoIGkgaW4gb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdFx0XHR4aHJbIGkgXSA9IG9wdGlvbnMueGhyRmllbGRzWyBpIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gT3ZlcnJpZGUgbWltZSB0eXBlIGlmIG5lZWRlZFxuXHRcdFx0XHRpZiAoIG9wdGlvbnMubWltZVR5cGUgJiYgeGhyLm92ZXJyaWRlTWltZVR5cGUgKSB7XG5cdFx0XHRcdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUoIG9wdGlvbnMubWltZVR5cGUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFgtUmVxdWVzdGVkLVdpdGggaGVhZGVyXG5cdFx0XHRcdC8vIEZvciBjcm9zcy1kb21haW4gcmVxdWVzdHMsIHNlZWluZyBhcyBjb25kaXRpb25zIGZvciBhIHByZWZsaWdodCBhcmVcblx0XHRcdFx0Ly8gYWtpbiB0byBhIGppZ3NhdyBwdXp6bGUsIHdlIHNpbXBseSBuZXZlciBzZXQgaXQgdG8gYmUgc3VyZS5cblx0XHRcdFx0Ly8gKGl0IGNhbiBhbHdheXMgYmUgc2V0IG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgb3IgZXZlbiB1c2luZyBhamF4U2V0dXApXG5cdFx0XHRcdC8vIEZvciBzYW1lLWRvbWFpbiByZXF1ZXN0cywgd29uJ3QgY2hhbmdlIGhlYWRlciBpZiBhbHJlYWR5IHByb3ZpZGVkLlxuXHRcdFx0XHRpZiAoICFvcHRpb25zLmNyb3NzRG9tYWluICYmICFoZWFkZXJzWyBcIlgtUmVxdWVzdGVkLVdpdGhcIiBdICkge1xuXHRcdFx0XHRcdGhlYWRlcnNbIFwiWC1SZXF1ZXN0ZWQtV2l0aFwiIF0gPSBcIlhNTEh0dHBSZXF1ZXN0XCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTZXQgaGVhZGVyc1xuXHRcdFx0XHRmb3IgKCBpIGluIGhlYWRlcnMgKSB7XG5cdFx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoIGksIGhlYWRlcnNbIGkgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2FsbGJhY2tcblx0XHRcdFx0Y2FsbGJhY2sgPSBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayA9IGVycm9yQ2FsbGJhY2sgPSB4aHIub25sb2FkID1cblx0XHRcdFx0XHRcdFx0XHR4aHIub25lcnJvciA9IHhoci5vbmFib3J0ID0geGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0eXBlID09PSBcImFib3J0XCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0eGhyLmFib3J0KCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGUgPT09IFwiZXJyb3JcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0Ly8gT24gYSBtYW51YWwgbmF0aXZlIGFib3J0LCBJRTkgdGhyb3dzXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXJyb3JzIG9uIGFueSBwcm9wZXJ0eSBhY2Nlc3MgdGhhdCBpcyBub3QgcmVhZHlTdGF0ZVxuXHRcdFx0XHRcdFx0XHRcdGlmICggdHlwZW9mIHhoci5zdGF0dXMgIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggMCwgXCJlcnJvclwiICk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEZpbGU6IHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIDA7IHNlZSAjODYwNSwgIzE0MjA3XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXNUZXh0XG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZShcblx0XHRcdFx0XHRcdFx0XHRcdHhoclN1Y2Nlc3NTdGF0dXNbIHhoci5zdGF0dXMgXSB8fCB4aHIuc3RhdHVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHQsXG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBJRTkgaGFzIG5vIFhIUjIgYnV0IHRocm93cyBvbiBiaW5hcnkgKHRyYWMtMTE0MjYpXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBGb3IgWEhSMiBub24tdGV4dCwgbGV0IHRoZSBjYWxsZXIgaGFuZGxlIGl0IChnaC0yNDk4KVxuXHRcdFx0XHRcdFx0XHRcdFx0KCB4aHIucmVzcG9uc2VUeXBlIHx8IFwidGV4dFwiICkgIT09IFwidGV4dFwiICB8fFxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHhoci5yZXNwb25zZVRleHQgIT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IGJpbmFyeTogeGhyLnJlc3BvbnNlIH0gOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7IHRleHQ6IHhoci5yZXNwb25zZVRleHQgfSxcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vIExpc3RlbiB0byBldmVudHNcblx0XHRcdFx0eGhyLm9ubG9hZCA9IGNhbGxiYWNrKCk7XG5cdFx0XHRcdGVycm9yQ2FsbGJhY2sgPSB4aHIub25lcnJvciA9IGNhbGxiYWNrKCBcImVycm9yXCIgKTtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHRcdFx0Ly8gVXNlIG9ucmVhZHlzdGF0ZWNoYW5nZSB0byByZXBsYWNlIG9uYWJvcnRcblx0XHRcdFx0Ly8gdG8gaGFuZGxlIHVuY2F1Z2h0IGFib3J0c1xuXHRcdFx0XHRpZiAoIHhoci5vbmFib3J0ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0eGhyLm9uYWJvcnQgPSBlcnJvckNhbGxiYWNrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgcmVhZHlTdGF0ZSBiZWZvcmUgdGltZW91dCBhcyBpdCBjaGFuZ2VzXG5cdFx0XHRcdFx0XHRpZiAoIHhoci5yZWFkeVN0YXRlID09PSA0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEFsbG93IG9uZXJyb3IgdG8gYmUgY2FsbGVkIGZpcnN0LFxuXHRcdFx0XHRcdFx0XHQvLyBidXQgdGhhdCB3aWxsIG5vdCBoYW5kbGUgYSBuYXRpdmUgYWJvcnRcblx0XHRcdFx0XHRcdFx0Ly8gQWxzbywgc2F2ZSBlcnJvckNhbGxiYWNrIHRvIGEgdmFyaWFibGVcblx0XHRcdFx0XHRcdFx0Ly8gYXMgeGhyLm9uZXJyb3IgY2Fubm90IGJlIGFjY2Vzc2VkXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JDYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgdGhlIGFib3J0IGNhbGxiYWNrXG5cdFx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2soIFwiYWJvcnRcIiApO1xuXG5cdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHQvLyBEbyBzZW5kIHRoZSByZXF1ZXN0ICh0aGlzIG1heSByYWlzZSBhbiBleGNlcHRpb24pXG5cdFx0XHRcdFx0eGhyLnNlbmQoIG9wdGlvbnMuaGFzQ29udGVudCAmJiBvcHRpb25zLmRhdGEgfHwgbnVsbCApO1xuXHRcdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRcdC8vICMxNDY4MzogT25seSByZXRocm93IGlmIHRoaXMgaGFzbid0IGJlZW4gbm90aWZpZWQgYXMgYW4gZXJyb3IgeWV0XG5cdFx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRhYm9ydDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn0gKTtcblxuXG5cblxuLy8gUHJldmVudCBhdXRvLWV4ZWN1dGlvbiBvZiBzY3JpcHRzIHdoZW4gbm8gZXhwbGljaXQgZGF0YVR5cGUgd2FzIHByb3ZpZGVkIChTZWUgZ2gtMjQzMilcbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBmdW5jdGlvbiggcyApIHtcblx0aWYgKCBzLmNyb3NzRG9tYWluICkge1xuXHRcdHMuY29udGVudHMuc2NyaXB0ID0gZmFsc2U7XG5cdH1cbn0gKTtcblxuLy8gSW5zdGFsbCBzY3JpcHQgZGF0YVR5cGVcbmpRdWVyeS5hamF4U2V0dXAoIHtcblx0YWNjZXB0czoge1xuXHRcdHNjcmlwdDogXCJ0ZXh0L2phdmFzY3JpcHQsIGFwcGxpY2F0aW9uL2phdmFzY3JpcHQsIFwiICtcblx0XHRcdFwiYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJcblx0fSxcblx0Y29udGVudHM6IHtcblx0XHRzY3JpcHQ6IC9cXGIoPzpqYXZhfGVjbWEpc2NyaXB0XFxiL1xuXHR9LFxuXHRjb252ZXJ0ZXJzOiB7XG5cdFx0XCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRcdGpRdWVyeS5nbG9iYWxFdmFsKCB0ZXh0ICk7XG5cdFx0XHRyZXR1cm4gdGV4dDtcblx0XHR9XG5cdH1cbn0gKTtcblxuLy8gSGFuZGxlIGNhY2hlJ3Mgc3BlY2lhbCBjYXNlIGFuZCBjcm9zc0RvbWFpblxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIFwic2NyaXB0XCIsIGZ1bmN0aW9uKCBzICkge1xuXHRpZiAoIHMuY2FjaGUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRzLmNhY2hlID0gZmFsc2U7XG5cdH1cblx0aWYgKCBzLmNyb3NzRG9tYWluICkge1xuXHRcdHMudHlwZSA9IFwiR0VUXCI7XG5cdH1cbn0gKTtcblxuLy8gQmluZCBzY3JpcHQgdGFnIGhhY2sgdHJhbnNwb3J0XG5qUXVlcnkuYWpheFRyYW5zcG9ydCggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cblx0Ly8gVGhpcyB0cmFuc3BvcnQgb25seSBkZWFscyB3aXRoIGNyb3NzIGRvbWFpbiByZXF1ZXN0c1xuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0dmFyIHNjcmlwdCwgY2FsbGJhY2s7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbmQ6IGZ1bmN0aW9uKCBfLCBjb21wbGV0ZSApIHtcblx0XHRcdFx0c2NyaXB0ID0galF1ZXJ5KCBcIjxzY3JpcHQ+XCIgKS5wcm9wKCB7XG5cdFx0XHRcdFx0Y2hhcnNldDogcy5zY3JpcHRDaGFyc2V0LFxuXHRcdFx0XHRcdHNyYzogcy51cmxcblx0XHRcdFx0fSApLm9uKFxuXHRcdFx0XHRcdFwibG9hZCBlcnJvclwiLFxuXHRcdFx0XHRcdGNhbGxiYWNrID0gZnVuY3Rpb24oIGV2dCApIHtcblx0XHRcdFx0XHRcdHNjcmlwdC5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmICggZXZ0ICkge1xuXHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggZXZ0LnR5cGUgPT09IFwiZXJyb3JcIiA/IDQwNCA6IDIwMCwgZXZ0LnR5cGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gVXNlIG5hdGl2ZSBET00gbWFuaXB1bGF0aW9uIHRvIGF2b2lkIG91ciBkb21NYW5pcCBBSkFYIHRyaWNrZXJ5XG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHNjcmlwdFsgMCBdICk7XG5cdFx0XHR9LFxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBvbGRDYWxsYmFja3MgPSBbXSxcblx0cmpzb25wID0gLyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztcblxuLy8gRGVmYXVsdCBqc29ucCBzZXR0aW5nc1xualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRqc29ucDogXCJjYWxsYmFja1wiLFxuXHRqc29ucENhbGxiYWNrOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY2FsbGJhY2sgPSBvbGRDYWxsYmFja3MucG9wKCkgfHwgKCBqUXVlcnkuZXhwYW5kbyArIFwiX1wiICsgKCBub25jZSsrICkgKTtcblx0XHR0aGlzWyBjYWxsYmFjayBdID0gdHJ1ZTtcblx0XHRyZXR1cm4gY2FsbGJhY2s7XG5cdH1cbn0gKTtcblxuLy8gRGV0ZWN0LCBub3JtYWxpemUgb3B0aW9ucyBhbmQgaW5zdGFsbCBjYWxsYmFja3MgZm9yIGpzb25wIHJlcXVlc3RzXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJqc29uIGpzb25wXCIsIGZ1bmN0aW9uKCBzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUiApIHtcblxuXHR2YXIgY2FsbGJhY2tOYW1lLCBvdmVyd3JpdHRlbiwgcmVzcG9uc2VDb250YWluZXIsXG5cdFx0anNvblByb3AgPSBzLmpzb25wICE9PSBmYWxzZSAmJiAoIHJqc29ucC50ZXN0KCBzLnVybCApID9cblx0XHRcdFwidXJsXCIgOlxuXHRcdFx0dHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJlxuXHRcdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApXG5cdFx0XHRcdFx0LmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCAmJlxuXHRcdFx0XHRyanNvbnAudGVzdCggcy5kYXRhICkgJiYgXCJkYXRhXCJcblx0XHQpO1xuXG5cdC8vIEhhbmRsZSBpZmYgdGhlIGV4cGVjdGVkIGRhdGEgdHlwZSBpcyBcImpzb25wXCIgb3Igd2UgaGF2ZSBhIHBhcmFtZXRlciB0byBzZXRcblx0aWYgKCBqc29uUHJvcCB8fCBzLmRhdGFUeXBlc1sgMCBdID09PSBcImpzb25wXCIgKSB7XG5cblx0XHQvLyBHZXQgY2FsbGJhY2sgbmFtZSwgcmVtZW1iZXJpbmcgcHJlZXhpc3RpbmcgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGl0XG5cdFx0Y2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0galF1ZXJ5LmlzRnVuY3Rpb24oIHMuanNvbnBDYWxsYmFjayApID9cblx0XHRcdHMuanNvbnBDYWxsYmFjaygpIDpcblx0XHRcdHMuanNvbnBDYWxsYmFjaztcblxuXHRcdC8vIEluc2VydCBjYWxsYmFjayBpbnRvIHVybCBvciBmb3JtIGRhdGFcblx0XHRpZiAoIGpzb25Qcm9wICkge1xuXHRcdFx0c1sganNvblByb3AgXSA9IHNbIGpzb25Qcm9wIF0ucmVwbGFjZSggcmpzb25wLCBcIiQxXCIgKyBjYWxsYmFja05hbWUgKTtcblx0XHR9IGVsc2UgaWYgKCBzLmpzb25wICE9PSBmYWxzZSApIHtcblx0XHRcdHMudXJsICs9ICggcnF1ZXJ5LnRlc3QoIHMudXJsICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmpzb25wICsgXCI9XCIgKyBjYWxsYmFja05hbWU7XG5cdFx0fVxuXG5cdFx0Ly8gVXNlIGRhdGEgY29udmVydGVyIHRvIHJldHJpZXZlIGpzb24gYWZ0ZXIgc2NyaXB0IGV4ZWN1dGlvblxuXHRcdHMuY29udmVydGVyc1sgXCJzY3JpcHQganNvblwiIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggIXJlc3BvbnNlQ29udGFpbmVyICkge1xuXHRcdFx0XHRqUXVlcnkuZXJyb3IoIGNhbGxiYWNrTmFtZSArIFwiIHdhcyBub3QgY2FsbGVkXCIgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNwb25zZUNvbnRhaW5lclsgMCBdO1xuXHRcdH07XG5cblx0XHQvLyBGb3JjZSBqc29uIGRhdGFUeXBlXG5cdFx0cy5kYXRhVHlwZXNbIDAgXSA9IFwianNvblwiO1xuXG5cdFx0Ly8gSW5zdGFsbCBjYWxsYmFja1xuXHRcdG92ZXJ3cml0dGVuID0gd2luZG93WyBjYWxsYmFja05hbWUgXTtcblx0XHR3aW5kb3dbIGNhbGxiYWNrTmFtZSBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IGFyZ3VtZW50cztcblx0XHR9O1xuXG5cdFx0Ly8gQ2xlYW4tdXAgZnVuY3Rpb24gKGZpcmVzIGFmdGVyIGNvbnZlcnRlcnMpXG5cdFx0anFYSFIuYWx3YXlzKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gSWYgcHJldmlvdXMgdmFsdWUgZGlkbid0IGV4aXN0IC0gcmVtb3ZlIGl0XG5cdFx0XHRpZiAoIG92ZXJ3cml0dGVuID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGpRdWVyeSggd2luZG93ICkucmVtb3ZlUHJvcCggY2FsbGJhY2tOYW1lICk7XG5cblx0XHRcdC8vIE90aGVyd2lzZSByZXN0b3JlIHByZWV4aXN0aW5nIHZhbHVlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR3aW5kb3dbIGNhbGxiYWNrTmFtZSBdID0gb3ZlcndyaXR0ZW47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNhdmUgYmFjayBhcyBmcmVlXG5cdFx0XHRpZiAoIHNbIGNhbGxiYWNrTmFtZSBdICkge1xuXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHJlLXVzaW5nIHRoZSBvcHRpb25zIGRvZXNuJ3Qgc2NyZXcgdGhpbmdzIGFyb3VuZFxuXHRcdFx0XHRzLmpzb25wQ2FsbGJhY2sgPSBvcmlnaW5hbFNldHRpbmdzLmpzb25wQ2FsbGJhY2s7XG5cblx0XHRcdFx0Ly8gU2F2ZSB0aGUgY2FsbGJhY2sgbmFtZSBmb3IgZnV0dXJlIHVzZVxuXHRcdFx0XHRvbGRDYWxsYmFja3MucHVzaCggY2FsbGJhY2tOYW1lICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbGwgaWYgaXQgd2FzIGEgZnVuY3Rpb24gYW5kIHdlIGhhdmUgYSByZXNwb25zZVxuXHRcdFx0aWYgKCByZXNwb25zZUNvbnRhaW5lciAmJiBqUXVlcnkuaXNGdW5jdGlvbiggb3ZlcndyaXR0ZW4gKSApIHtcblx0XHRcdFx0b3ZlcndyaXR0ZW4oIHJlc3BvbnNlQ29udGFpbmVyWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzcG9uc2VDb250YWluZXIgPSBvdmVyd3JpdHRlbiA9IHVuZGVmaW5lZDtcblx0XHR9ICk7XG5cblx0XHQvLyBEZWxlZ2F0ZSB0byBzY3JpcHRcblx0XHRyZXR1cm4gXCJzY3JpcHRcIjtcblx0fVxufSApO1xuXG5cblxuXG4vLyBTdXBwb3J0OiBTYWZhcmkgOCBvbmx5XG4vLyBJbiBTYWZhcmkgOCBkb2N1bWVudHMgY3JlYXRlZCB2aWEgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50XG4vLyBjb2xsYXBzZSBzaWJsaW5nIGZvcm1zOiB0aGUgc2Vjb25kIG9uZSBiZWNvbWVzIGEgY2hpbGQgb2YgdGhlIGZpcnN0IG9uZS5cbi8vIEJlY2F1c2Ugb2YgdGhhdCwgdGhpcyBzZWN1cml0eSBtZWFzdXJlIGhhcyB0byBiZSBkaXNhYmxlZCBpbiBTYWZhcmkgOC5cbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzczMzdcbnN1cHBvcnQuY3JlYXRlSFRNTERvY3VtZW50ID0gKCBmdW5jdGlvbigpIHtcblx0dmFyIGJvZHkgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoIFwiXCIgKS5ib2R5O1xuXHRib2R5LmlubmVySFRNTCA9IFwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIjtcblx0cmV0dXJuIGJvZHkuY2hpbGROb2Rlcy5sZW5ndGggPT09IDI7XG59ICkoKTtcblxuXG4vLyBBcmd1bWVudCBcImRhdGFcIiBzaG91bGQgYmUgc3RyaW5nIG9mIGh0bWxcbi8vIGNvbnRleHQgKG9wdGlvbmFsKTogSWYgc3BlY2lmaWVkLCB0aGUgZnJhZ21lbnQgd2lsbCBiZSBjcmVhdGVkIGluIHRoaXMgY29udGV4dCxcbi8vIGRlZmF1bHRzIHRvIGRvY3VtZW50XG4vLyBrZWVwU2NyaXB0cyAob3B0aW9uYWwpOiBJZiB0cnVlLCB3aWxsIGluY2x1ZGUgc2NyaXB0cyBwYXNzZWQgaW4gdGhlIGh0bWwgc3RyaW5nXG5qUXVlcnkucGFyc2VIVE1MID0gZnVuY3Rpb24oIGRhdGEsIGNvbnRleHQsIGtlZXBTY3JpcHRzICkge1xuXHRpZiAoIHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRrZWVwU2NyaXB0cyA9IGNvbnRleHQ7XG5cdFx0Y29udGV4dCA9IGZhbHNlO1xuXHR9XG5cblx0dmFyIGJhc2UsIHBhcnNlZCwgc2NyaXB0cztcblxuXHRpZiAoICFjb250ZXh0ICkge1xuXG5cdFx0Ly8gU3RvcCBzY3JpcHRzIG9yIGlubGluZSBldmVudCBoYW5kbGVycyBmcm9tIGJlaW5nIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG5cdFx0Ly8gYnkgdXNpbmcgZG9jdW1lbnQuaW1wbGVtZW50YXRpb25cblx0XHRpZiAoIHN1cHBvcnQuY3JlYXRlSFRNTERvY3VtZW50ICkge1xuXHRcdFx0Y29udGV4dCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCggXCJcIiApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIGJhc2UgaHJlZiBmb3IgdGhlIGNyZWF0ZWQgZG9jdW1lbnRcblx0XHRcdC8vIHNvIGFueSBwYXJzZWQgZWxlbWVudHMgd2l0aCBVUkxzXG5cdFx0XHQvLyBhcmUgYmFzZWQgb24gdGhlIGRvY3VtZW50J3MgVVJMIChnaC0yOTY1KVxuXHRcdFx0YmFzZSA9IGNvbnRleHQuY3JlYXRlRWxlbWVudCggXCJiYXNlXCIgKTtcblx0XHRcdGJhc2UuaHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cdFx0XHRjb250ZXh0LmhlYWQuYXBwZW5kQ2hpbGQoIGJhc2UgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGV4dCA9IGRvY3VtZW50O1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlZCA9IHJzaW5nbGVUYWcuZXhlYyggZGF0YSApO1xuXHRzY3JpcHRzID0gIWtlZXBTY3JpcHRzICYmIFtdO1xuXG5cdC8vIFNpbmdsZSB0YWdcblx0aWYgKCBwYXJzZWQgKSB7XG5cdFx0cmV0dXJuIFsgY29udGV4dC5jcmVhdGVFbGVtZW50KCBwYXJzZWRbIDEgXSApIF07XG5cdH1cblxuXHRwYXJzZWQgPSBidWlsZEZyYWdtZW50KCBbIGRhdGEgXSwgY29udGV4dCwgc2NyaXB0cyApO1xuXG5cdGlmICggc2NyaXB0cyAmJiBzY3JpcHRzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkoIHNjcmlwdHMgKS5yZW1vdmUoKTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnkubWVyZ2UoIFtdLCBwYXJzZWQuY2hpbGROb2RlcyApO1xufTtcblxuXG4vKipcbiAqIExvYWQgYSB1cmwgaW50byBhIHBhZ2VcbiAqL1xualF1ZXJ5LmZuLmxvYWQgPSBmdW5jdGlvbiggdXJsLCBwYXJhbXMsIGNhbGxiYWNrICkge1xuXHR2YXIgc2VsZWN0b3IsIHR5cGUsIHJlc3BvbnNlLFxuXHRcdHNlbGYgPSB0aGlzLFxuXHRcdG9mZiA9IHVybC5pbmRleE9mKCBcIiBcIiApO1xuXG5cdGlmICggb2ZmID4gLTEgKSB7XG5cdFx0c2VsZWN0b3IgPSBzdHJpcEFuZENvbGxhcHNlKCB1cmwuc2xpY2UoIG9mZiApICk7XG5cdFx0dXJsID0gdXJsLnNsaWNlKCAwLCBvZmYgKTtcblx0fVxuXG5cdC8vIElmIGl0J3MgYSBmdW5jdGlvblxuXHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBwYXJhbXMgKSApIHtcblxuXHRcdC8vIFdlIGFzc3VtZSB0aGF0IGl0J3MgdGhlIGNhbGxiYWNrXG5cdFx0Y2FsbGJhY2sgPSBwYXJhbXM7XG5cdFx0cGFyYW1zID0gdW5kZWZpbmVkO1xuXG5cdC8vIE90aGVyd2lzZSwgYnVpbGQgYSBwYXJhbSBzdHJpbmdcblx0fSBlbHNlIGlmICggcGFyYW1zICYmIHR5cGVvZiBwYXJhbXMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0dHlwZSA9IFwiUE9TVFwiO1xuXHR9XG5cblx0Ly8gSWYgd2UgaGF2ZSBlbGVtZW50cyB0byBtb2RpZnksIG1ha2UgdGhlIHJlcXVlc3Rcblx0aWYgKCBzZWxmLmxlbmd0aCA+IDAgKSB7XG5cdFx0alF1ZXJ5LmFqYXgoIHtcblx0XHRcdHVybDogdXJsLFxuXG5cdFx0XHQvLyBJZiBcInR5cGVcIiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHRoZW4gXCJHRVRcIiBtZXRob2Qgd2lsbCBiZSB1c2VkLlxuXHRcdFx0Ly8gTWFrZSB2YWx1ZSBvZiB0aGlzIGZpZWxkIGV4cGxpY2l0IHNpbmNlXG5cdFx0XHQvLyB1c2VyIGNhbiBvdmVycmlkZSBpdCB0aHJvdWdoIGFqYXhTZXR1cCBtZXRob2Rcblx0XHRcdHR5cGU6IHR5cGUgfHwgXCJHRVRcIixcblx0XHRcdGRhdGFUeXBlOiBcImh0bWxcIixcblx0XHRcdGRhdGE6IHBhcmFtc1xuXHRcdH0gKS5kb25lKCBmdW5jdGlvbiggcmVzcG9uc2VUZXh0ICkge1xuXG5cdFx0XHQvLyBTYXZlIHJlc3BvbnNlIGZvciB1c2UgaW4gY29tcGxldGUgY2FsbGJhY2tcblx0XHRcdHJlc3BvbnNlID0gYXJndW1lbnRzO1xuXG5cdFx0XHRzZWxmLmh0bWwoIHNlbGVjdG9yID9cblxuXHRcdFx0XHQvLyBJZiBhIHNlbGVjdG9yIHdhcyBzcGVjaWZpZWQsIGxvY2F0ZSB0aGUgcmlnaHQgZWxlbWVudHMgaW4gYSBkdW1teSBkaXZcblx0XHRcdFx0Ly8gRXhjbHVkZSBzY3JpcHRzIHRvIGF2b2lkIElFICdQZXJtaXNzaW9uIERlbmllZCcgZXJyb3JzXG5cdFx0XHRcdGpRdWVyeSggXCI8ZGl2PlwiICkuYXBwZW5kKCBqUXVlcnkucGFyc2VIVE1MKCByZXNwb25zZVRleHQgKSApLmZpbmQoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSB1c2UgdGhlIGZ1bGwgcmVzdWx0XG5cdFx0XHRcdHJlc3BvbnNlVGV4dCApO1xuXG5cdFx0Ly8gSWYgdGhlIHJlcXVlc3Qgc3VjY2VlZHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImRhdGFcIiwgXCJzdGF0dXNcIiwgXCJqcVhIUlwiXG5cdFx0Ly8gYnV0IHRoZXkgYXJlIGlnbm9yZWQgYmVjYXVzZSByZXNwb25zZSB3YXMgc2V0IGFib3ZlLlxuXHRcdC8vIElmIGl0IGZhaWxzLCB0aGlzIGZ1bmN0aW9uIGdldHMgXCJqcVhIUlwiLCBcInN0YXR1c1wiLCBcImVycm9yXCJcblx0XHR9ICkuYWx3YXlzKCBjYWxsYmFjayAmJiBmdW5jdGlvbigganFYSFIsIHN0YXR1cyApIHtcblx0XHRcdHNlbGYuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCB0aGlzLCByZXNwb25zZSB8fCBbIGpxWEhSLnJlc3BvbnNlVGV4dCwgc3RhdHVzLCBqcVhIUiBdICk7XG5cdFx0XHR9ICk7XG5cdFx0fSApO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5cblxuXG4vLyBBdHRhY2ggYSBidW5jaCBvZiBmdW5jdGlvbnMgZm9yIGhhbmRsaW5nIGNvbW1vbiBBSkFYIGV2ZW50c1xualF1ZXJ5LmVhY2goIFtcblx0XCJhamF4U3RhcnRcIixcblx0XCJhamF4U3RvcFwiLFxuXHRcImFqYXhDb21wbGV0ZVwiLFxuXHRcImFqYXhFcnJvclwiLFxuXHRcImFqYXhTdWNjZXNzXCIsXG5cdFwiYWpheFNlbmRcIlxuXSwgZnVuY3Rpb24oIGksIHR5cGUgKSB7XG5cdGpRdWVyeS5mblsgdHlwZSBdID0gZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlLCBmbiApO1xuXHR9O1xufSApO1xuXG5cblxuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmFuaW1hdGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiBqUXVlcnkuZ3JlcCggalF1ZXJ5LnRpbWVycywgZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiBlbGVtID09PSBmbi5lbGVtO1xuXHR9ICkubGVuZ3RoO1xufTtcblxuXG5cblxuLyoqXG4gKiBHZXRzIGEgd2luZG93IGZyb20gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBnZXRXaW5kb3coIGVsZW0gKSB7XG5cdHJldHVybiBqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XG59XG5cbmpRdWVyeS5vZmZzZXQgPSB7XG5cdHNldE9mZnNldDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGkgKSB7XG5cdFx0dmFyIGN1clBvc2l0aW9uLCBjdXJMZWZ0LCBjdXJDU1NUb3AsIGN1clRvcCwgY3VyT2Zmc2V0LCBjdXJDU1NMZWZ0LCBjYWxjdWxhdGVQb3NpdGlvbixcblx0XHRcdHBvc2l0aW9uID0galF1ZXJ5LmNzcyggZWxlbSwgXCJwb3NpdGlvblwiICksXG5cdFx0XHRjdXJFbGVtID0galF1ZXJ5KCBlbGVtICksXG5cdFx0XHRwcm9wcyA9IHt9O1xuXG5cdFx0Ly8gU2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuXHRcdGlmICggcG9zaXRpb24gPT09IFwic3RhdGljXCIgKSB7XG5cdFx0XHRlbGVtLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH1cblxuXHRcdGN1ck9mZnNldCA9IGN1ckVsZW0ub2Zmc2V0KCk7XG5cdFx0Y3VyQ1NTVG9wID0galF1ZXJ5LmNzcyggZWxlbSwgXCJ0b3BcIiApO1xuXHRcdGN1ckNTU0xlZnQgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImxlZnRcIiApO1xuXHRcdGNhbGN1bGF0ZVBvc2l0aW9uID0gKCBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiIHx8IHBvc2l0aW9uID09PSBcImZpeGVkXCIgKSAmJlxuXHRcdFx0KCBjdXJDU1NUb3AgKyBjdXJDU1NMZWZ0ICkuaW5kZXhPZiggXCJhdXRvXCIgKSA+IC0xO1xuXG5cdFx0Ly8gTmVlZCB0byBiZSBhYmxlIHRvIGNhbGN1bGF0ZSBwb3NpdGlvbiBpZiBlaXRoZXJcblx0XHQvLyB0b3Agb3IgbGVmdCBpcyBhdXRvIGFuZCBwb3NpdGlvbiBpcyBlaXRoZXIgYWJzb2x1dGUgb3IgZml4ZWRcblx0XHRpZiAoIGNhbGN1bGF0ZVBvc2l0aW9uICkge1xuXHRcdFx0Y3VyUG9zaXRpb24gPSBjdXJFbGVtLnBvc2l0aW9uKCk7XG5cdFx0XHRjdXJUb3AgPSBjdXJQb3NpdGlvbi50b3A7XG5cdFx0XHRjdXJMZWZ0ID0gY3VyUG9zaXRpb24ubGVmdDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJUb3AgPSBwYXJzZUZsb2F0KCBjdXJDU1NUb3AgKSB8fCAwO1xuXHRcdFx0Y3VyTGVmdCA9IHBhcnNlRmxvYXQoIGN1ckNTU0xlZnQgKSB8fCAwO1xuXHRcdH1cblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIG9wdGlvbnMgKSApIHtcblxuXHRcdFx0Ly8gVXNlIGpRdWVyeS5leHRlbmQgaGVyZSB0byBhbGxvdyBtb2RpZmljYXRpb24gb2YgY29vcmRpbmF0ZXMgYXJndW1lbnQgKGdoLTE4NDgpXG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucy5jYWxsKCBlbGVtLCBpLCBqUXVlcnkuZXh0ZW5kKCB7fSwgY3VyT2Zmc2V0ICkgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdGlvbnMudG9wICE9IG51bGwgKSB7XG5cdFx0XHRwcm9wcy50b3AgPSAoIG9wdGlvbnMudG9wIC0gY3VyT2Zmc2V0LnRvcCApICsgY3VyVG9wO1xuXHRcdH1cblx0XHRpZiAoIG9wdGlvbnMubGVmdCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMubGVmdCA9ICggb3B0aW9ucy5sZWZ0IC0gY3VyT2Zmc2V0LmxlZnQgKSArIGN1ckxlZnQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBcInVzaW5nXCIgaW4gb3B0aW9ucyApIHtcblx0XHRcdG9wdGlvbnMudXNpbmcuY2FsbCggZWxlbSwgcHJvcHMgKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJFbGVtLmNzcyggcHJvcHMgKTtcblx0XHR9XG5cdH1cbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0b2Zmc2V0OiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHRcdC8vIFByZXNlcnZlIGNoYWluaW5nIGZvciBzZXR0ZXJcblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9ucyA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0dGhpcyA6XG5cdFx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5Lm9mZnNldC5zZXRPZmZzZXQoIHRoaXMsIG9wdGlvbnMsIGkgKTtcblx0XHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHZhciBkb2NFbGVtLCB3aW4sIHJlY3QsIGRvYyxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF07XG5cblx0XHRpZiAoICFlbGVtICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuXHRcdC8vIFJ1bm5pbmcgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IG9uIGFcblx0XHQvLyBkaXNjb25uZWN0ZWQgbm9kZSBpbiBJRSB0aHJvd3MgYW4gZXJyb3Jcblx0XHRpZiAoICFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cdFx0fVxuXG5cdFx0cmVjdCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHQvLyBNYWtlIHN1cmUgZWxlbWVudCBpcyBub3QgaGlkZGVuIChkaXNwbGF5OiBub25lKVxuXHRcdGlmICggcmVjdC53aWR0aCB8fCByZWN0LmhlaWdodCApIHtcblx0XHRcdGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcblx0XHRcdHdpbiA9IGdldFdpbmRvdyggZG9jICk7XG5cdFx0XHRkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0dG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuXHRcdFx0XHRsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHplcm9zIGZvciBkaXNjb25uZWN0ZWQgYW5kIGhpZGRlbiBlbGVtZW50cyAoZ2gtMjMxMClcblx0XHRyZXR1cm4gcmVjdDtcblx0fSxcblxuXHRwb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhdGhpc1sgMCBdICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBvZmZzZXRQYXJlbnQsIG9mZnNldCxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRwYXJlbnRPZmZzZXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG5cdFx0Ly8gRml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHdpbmRvdyAocGFyZW50T2Zmc2V0ID0ge3RvcDowLCBsZWZ0OiAwfSxcblx0XHQvLyBiZWNhdXNlIGl0IGlzIGl0cyBvbmx5IG9mZnNldCBwYXJlbnRcblx0XHRpZiAoIGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApID09PSBcImZpeGVkXCIgKSB7XG5cblx0XHRcdC8vIEFzc3VtZSBnZXRCb3VuZGluZ0NsaWVudFJlY3QgaXMgdGhlcmUgd2hlbiBjb21wdXRlZCBwb3NpdGlvbiBpcyBmaXhlZFxuXHRcdFx0b2Zmc2V0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG5cdFx0XHRvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCgpO1xuXG5cdFx0XHQvLyBHZXQgY29ycmVjdCBvZmZzZXRzXG5cdFx0XHRvZmZzZXQgPSB0aGlzLm9mZnNldCgpO1xuXHRcdFx0aWYgKCAhalF1ZXJ5Lm5vZGVOYW1lKCBvZmZzZXRQYXJlbnRbIDAgXSwgXCJodG1sXCIgKSApIHtcblx0XHRcdFx0cGFyZW50T2Zmc2V0ID0gb2Zmc2V0UGFyZW50Lm9mZnNldCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcblx0XHRcdHBhcmVudE9mZnNldCA9IHtcblx0XHRcdFx0dG9wOiBwYXJlbnRPZmZzZXQudG9wICsgalF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50WyAwIF0sIFwiYm9yZGVyVG9wV2lkdGhcIiwgdHJ1ZSApLFxuXHRcdFx0XHRsZWZ0OiBwYXJlbnRPZmZzZXQubGVmdCArIGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudFsgMCBdLCBcImJvcmRlckxlZnRXaWR0aFwiLCB0cnVlIClcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0Ly8gU3VidHJhY3QgcGFyZW50IG9mZnNldHMgYW5kIGVsZW1lbnQgbWFyZ2luc1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IG9mZnNldC50b3AgLSBwYXJlbnRPZmZzZXQudG9wIC0galF1ZXJ5LmNzcyggZWxlbSwgXCJtYXJnaW5Ub3BcIiwgdHJ1ZSApLFxuXHRcdFx0bGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luTGVmdFwiLCB0cnVlIClcblx0XHR9O1xuXHR9LFxuXG5cdC8vIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGRvY3VtZW50RWxlbWVudCBpbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuXHQvLyAxKSBGb3IgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWUgd2l0aG91dCBvZmZzZXRQYXJlbnQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuXG5cdC8vICAgIGRvY3VtZW50RWxlbWVudCBvZiB0aGUgcGFyZW50IHdpbmRvd1xuXHQvLyAyKSBGb3IgdGhlIGhpZGRlbiBvciBkZXRhY2hlZCBlbGVtZW50XG5cdC8vIDMpIEZvciBib2R5IG9yIGh0bWwgZWxlbWVudCwgaS5lLiBpbiBjYXNlIG9mIHRoZSBodG1sIG5vZGUgLSBpdCB3aWxsIHJldHVybiBpdHNlbGZcblx0Ly9cblx0Ly8gYnV0IHRob3NlIGV4Y2VwdGlvbnMgd2VyZSBuZXZlciBwcmVzZW50ZWQgYXMgYSByZWFsIGxpZmUgdXNlLWNhc2VzXG5cdC8vIGFuZCBtaWdodCBiZSBjb25zaWRlcmVkIGFzIG1vcmUgcHJlZmVyYWJsZSByZXN1bHRzLlxuXHQvL1xuXHQvLyBUaGlzIGxvZ2ljLCBob3dldmVyLCBpcyBub3QgZ3VhcmFudGVlZCBhbmQgY2FuIGNoYW5nZSBhdCBhbnkgcG9pbnQgaW4gdGhlIGZ1dHVyZVxuXHRvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb2Zmc2V0UGFyZW50ID0gdGhpcy5vZmZzZXRQYXJlbnQ7XG5cblx0XHRcdHdoaWxlICggb2Zmc2V0UGFyZW50ICYmIGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiICkgPT09IFwic3RhdGljXCIgKSB7XG5cdFx0XHRcdG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnRFbGVtZW50O1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG4vLyBDcmVhdGUgc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IHNjcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIiwgc2Nyb2xsVG9wOiBcInBhZ2VZT2Zmc2V0XCIgfSwgZnVuY3Rpb24oIG1ldGhvZCwgcHJvcCApIHtcblx0dmFyIHRvcCA9IFwicGFnZVlPZmZzZXRcIiA9PT0gcHJvcDtcblxuXHRqUXVlcnkuZm5bIG1ldGhvZCBdID0gZnVuY3Rpb24oIHZhbCApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgbWV0aG9kLCB2YWwgKSB7XG5cdFx0XHR2YXIgd2luID0gZ2V0V2luZG93KCBlbGVtICk7XG5cblx0XHRcdGlmICggdmFsID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiB3aW4gPyB3aW5bIHByb3AgXSA6IGVsZW1bIG1ldGhvZCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHdpbiApIHtcblx0XHRcdFx0d2luLnNjcm9sbFRvKFxuXHRcdFx0XHRcdCF0b3AgPyB2YWwgOiB3aW4ucGFnZVhPZmZzZXQsXG5cdFx0XHRcdFx0dG9wID8gdmFsIDogd2luLnBhZ2VZT2Zmc2V0XG5cdFx0XHRcdCk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1bIG1ldGhvZCBdID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0sIG1ldGhvZCwgdmFsLCBhcmd1bWVudHMubGVuZ3RoICk7XG5cdH07XG59ICk7XG5cbi8vIFN1cHBvcnQ6IFNhZmFyaSA8PTcgLSA5LjEsIENocm9tZSA8PTM3IC0gNDlcbi8vIEFkZCB0aGUgdG9wL2xlZnQgY3NzSG9va3MgdXNpbmcgalF1ZXJ5LmZuLnBvc2l0aW9uXG4vLyBXZWJraXQgYnVnOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkwODRcbi8vIEJsaW5rIGJ1ZzogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTg5MzQ3XG4vLyBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgcGVyY2VudCB3aGVuIHNwZWNpZmllZCBmb3IgdG9wL2xlZnQvYm90dG9tL3JpZ2h0O1xuLy8gcmF0aGVyIHRoYW4gbWFrZSB0aGUgY3NzIG1vZHVsZSBkZXBlbmQgb24gdGhlIG9mZnNldCBtb2R1bGUsIGp1c3QgY2hlY2sgZm9yIGl0IGhlcmVcbmpRdWVyeS5lYWNoKCBbIFwidG9wXCIsIFwibGVmdFwiIF0sIGZ1bmN0aW9uKCBpLCBwcm9wICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIHByb3AgXSA9IGFkZEdldEhvb2tJZiggc3VwcG9ydC5waXhlbFBvc2l0aW9uLFxuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcblx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cdFx0XHRcdGNvbXB1dGVkID0gY3VyQ1NTKCBlbGVtLCBwcm9wICk7XG5cblx0XHRcdFx0Ly8gSWYgY3VyQ1NTIHJldHVybnMgcGVyY2VudGFnZSwgZmFsbGJhY2sgdG8gb2Zmc2V0XG5cdFx0XHRcdHJldHVybiBybnVtbm9ucHgudGVzdCggY29tcHV0ZWQgKSA/XG5cdFx0XHRcdFx0alF1ZXJ5KCBlbGVtICkucG9zaXRpb24oKVsgcHJvcCBdICsgXCJweFwiIDpcblx0XHRcdFx0XHRjb21wdXRlZDtcblx0XHRcdH1cblx0XHR9XG5cdCk7XG59ICk7XG5cblxuLy8gQ3JlYXRlIGlubmVySGVpZ2h0LCBpbm5lcldpZHRoLCBoZWlnaHQsIHdpZHRoLCBvdXRlckhlaWdodCBhbmQgb3V0ZXJXaWR0aCBtZXRob2RzXG5qUXVlcnkuZWFjaCggeyBIZWlnaHQ6IFwiaGVpZ2h0XCIsIFdpZHRoOiBcIndpZHRoXCIgfSwgZnVuY3Rpb24oIG5hbWUsIHR5cGUgKSB7XG5cdGpRdWVyeS5lYWNoKCB7IHBhZGRpbmc6IFwiaW5uZXJcIiArIG5hbWUsIGNvbnRlbnQ6IHR5cGUsIFwiXCI6IFwib3V0ZXJcIiArIG5hbWUgfSxcblx0XHRmdW5jdGlvbiggZGVmYXVsdEV4dHJhLCBmdW5jTmFtZSApIHtcblxuXHRcdC8vIE1hcmdpbiBpcyBvbmx5IGZvciBvdXRlckhlaWdodCwgb3V0ZXJXaWR0aFxuXHRcdGpRdWVyeS5mblsgZnVuY05hbWUgXSA9IGZ1bmN0aW9uKCBtYXJnaW4sIHZhbHVlICkge1xuXHRcdFx0dmFyIGNoYWluYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggJiYgKCBkZWZhdWx0RXh0cmEgfHwgdHlwZW9mIG1hcmdpbiAhPT0gXCJib29sZWFuXCIgKSxcblx0XHRcdFx0ZXh0cmEgPSBkZWZhdWx0RXh0cmEgfHwgKCBtYXJnaW4gPT09IHRydWUgfHwgdmFsdWUgPT09IHRydWUgPyBcIm1hcmdpblwiIDogXCJib3JkZXJcIiApO1xuXG5cdFx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgdHlwZSwgdmFsdWUgKSB7XG5cdFx0XHRcdHZhciBkb2M7XG5cblx0XHRcdFx0aWYgKCBqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSApIHtcblxuXHRcdFx0XHRcdC8vICQoIHdpbmRvdyApLm91dGVyV2lkdGgvSGVpZ2h0IHJldHVybiB3L2ggaW5jbHVkaW5nIHNjcm9sbGJhcnMgKGdoLTE3MjkpXG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmNOYW1lLmluZGV4T2YoIFwib3V0ZXJcIiApID09PSAwID9cblx0XHRcdFx0XHRcdGVsZW1bIFwiaW5uZXJcIiArIG5hbWUgXSA6XG5cdFx0XHRcdFx0XHRlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFsgXCJjbGllbnRcIiArIG5hbWUgXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEdldCBkb2N1bWVudCB3aWR0aCBvciBoZWlnaHRcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdGRvYyA9IGVsZW0uZG9jdW1lbnRFbGVtZW50O1xuXG5cdFx0XHRcdFx0Ly8gRWl0aGVyIHNjcm9sbFtXaWR0aC9IZWlnaHRdIG9yIG9mZnNldFtXaWR0aC9IZWlnaHRdIG9yIGNsaWVudFtXaWR0aC9IZWlnaHRdLFxuXHRcdFx0XHRcdC8vIHdoaWNoZXZlciBpcyBncmVhdGVzdFxuXHRcdFx0XHRcdHJldHVybiBNYXRoLm1heChcblx0XHRcdFx0XHRcdGVsZW0uYm9keVsgXCJzY3JvbGxcIiArIG5hbWUgXSwgZG9jWyBcInNjcm9sbFwiICsgbmFtZSBdLFxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcIm9mZnNldFwiICsgbmFtZSBdLCBkb2NbIFwib2Zmc2V0XCIgKyBuYW1lIF0sXG5cdFx0XHRcdFx0XHRkb2NbIFwiY2xpZW50XCIgKyBuYW1lIF1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuXG5cdFx0XHRcdFx0Ly8gR2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudCwgcmVxdWVzdGluZyBidXQgbm90IGZvcmNpbmcgcGFyc2VGbG9hdFxuXHRcdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIHR5cGUsIGV4dHJhICkgOlxuXG5cdFx0XHRcdFx0Ly8gU2V0IHdpZHRoIG9yIGhlaWdodCBvbiB0aGUgZWxlbWVudFxuXHRcdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgdHlwZSwgdmFsdWUsIGV4dHJhICk7XG5cdFx0XHR9LCB0eXBlLCBjaGFpbmFibGUgPyBtYXJnaW4gOiB1bmRlZmluZWQsIGNoYWluYWJsZSApO1xuXHRcdH07XG5cdH0gKTtcbn0gKTtcblxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cblx0YmluZDogZnVuY3Rpb24oIHR5cGVzLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZXMsIG51bGwsIGRhdGEsIGZuICk7XG5cdH0sXG5cdHVuYmluZDogZnVuY3Rpb24oIHR5cGVzLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vZmYoIHR5cGVzLCBudWxsLCBmbiApO1xuXHR9LFxuXG5cdGRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZXMsIHNlbGVjdG9yLCBkYXRhLCBmbiApO1xuXHR9LFxuXHR1bmRlbGVnYXRlOiBmdW5jdGlvbiggc2VsZWN0b3IsIHR5cGVzLCBmbiApIHtcblxuXHRcdC8vICggbmFtZXNwYWNlICkgb3IgKCBzZWxlY3RvciwgdHlwZXMgWywgZm5dIClcblx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/XG5cdFx0XHR0aGlzLm9mZiggc2VsZWN0b3IsIFwiKipcIiApIDpcblx0XHRcdHRoaXMub2ZmKCB0eXBlcywgc2VsZWN0b3IgfHwgXCIqKlwiLCBmbiApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5wYXJzZUpTT04gPSBKU09OLnBhcnNlO1xuXG5cblxuXG4vLyBSZWdpc3RlciBhcyBhIG5hbWVkIEFNRCBtb2R1bGUsIHNpbmNlIGpRdWVyeSBjYW4gYmUgY29uY2F0ZW5hdGVkIHdpdGggb3RoZXJcbi8vIGZpbGVzIHRoYXQgbWF5IHVzZSBkZWZpbmUsIGJ1dCBub3QgdmlhIGEgcHJvcGVyIGNvbmNhdGVuYXRpb24gc2NyaXB0IHRoYXRcbi8vIHVuZGVyc3RhbmRzIGFub255bW91cyBBTUQgbW9kdWxlcy4gQSBuYW1lZCBBTUQgaXMgc2FmZXN0IGFuZCBtb3N0IHJvYnVzdFxuLy8gd2F5IHRvIHJlZ2lzdGVyLiBMb3dlcmNhc2UganF1ZXJ5IGlzIHVzZWQgYmVjYXVzZSBBTUQgbW9kdWxlIG5hbWVzIGFyZVxuLy8gZGVyaXZlZCBmcm9tIGZpbGUgbmFtZXMsIGFuZCBqUXVlcnkgaXMgbm9ybWFsbHkgZGVsaXZlcmVkIGluIGEgbG93ZXJjYXNlXG4vLyBmaWxlIG5hbWUuIERvIHRoaXMgYWZ0ZXIgY3JlYXRpbmcgdGhlIGdsb2JhbCBzbyB0aGF0IGlmIGFuIEFNRCBtb2R1bGUgd2FudHNcbi8vIHRvIGNhbGwgbm9Db25mbGljdCB0byBoaWRlIHRoaXMgdmVyc2lvbiBvZiBqUXVlcnksIGl0IHdpbGwgd29yay5cblxuLy8gTm90ZSB0aGF0IGZvciBtYXhpbXVtIHBvcnRhYmlsaXR5LCBsaWJyYXJpZXMgdGhhdCBhcmUgbm90IGpRdWVyeSBzaG91bGRcbi8vIGRlY2xhcmUgdGhlbXNlbHZlcyBhcyBhbm9ueW1vdXMgbW9kdWxlcywgYW5kIGF2b2lkIHNldHRpbmcgYSBnbG9iYWwgaWYgYW5cbi8vIEFNRCBsb2FkZXIgaXMgcHJlc2VudC4galF1ZXJ5IGlzIGEgc3BlY2lhbCBjYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vanJidXJrZS9yZXF1aXJlanMvd2lraS9VcGRhdGluZy1leGlzdGluZy1saWJyYXJpZXMjd2lraS1hbm9uXG5cbmlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cdGRlZmluZSggXCJqcXVlcnlcIiwgW10sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnk7XG5cdH0gKTtcbn1cblxuXG5cblxudmFyXG5cblx0Ly8gTWFwIG92ZXIgalF1ZXJ5IGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF9qUXVlcnkgPSB3aW5kb3cualF1ZXJ5LFxuXG5cdC8vIE1hcCBvdmVyIHRoZSAkIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF8kID0gd2luZG93LiQ7XG5cbmpRdWVyeS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oIGRlZXAgKSB7XG5cdGlmICggd2luZG93LiQgPT09IGpRdWVyeSApIHtcblx0XHR3aW5kb3cuJCA9IF8kO1xuXHR9XG5cblx0aWYgKCBkZWVwICYmIHdpbmRvdy5qUXVlcnkgPT09IGpRdWVyeSApIHtcblx0XHR3aW5kb3cualF1ZXJ5ID0gX2pRdWVyeTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnk7XG59O1xuXG4vLyBFeHBvc2UgalF1ZXJ5IGFuZCAkIGlkZW50aWZpZXJzLCBldmVuIGluIEFNRFxuLy8gKCM3MTAyI2NvbW1lbnQ6MTAsIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L3B1bGwvNTU3KVxuLy8gYW5kIENvbW1vbkpTIGZvciBicm93c2VyIGVtdWxhdG9ycyAoIzEzNTY2KVxuaWYgKCAhbm9HbG9iYWwgKSB7XG5cdHdpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9IGpRdWVyeTtcbn1cblxuXG5cblxuXG5yZXR1cm4galF1ZXJ5O1xufSApO1xuIiwiZnVuY3Rpb24gZ2VuZXJhdGVQcm9kdWN0cygpIHtcclxuICBjb25zdCBza2lsbHMgPSBbJ0phdmFTY3JpcHQnLCAnQ1NTJywgJ1NBU1MnLCAnTm9kZScsICdBbmd1bGFyIDInLCAnVlVFJ107XHJcblxyXG4gIHJldHVybiBza2lsbHMubWFwKGdlbmVyYXRlUHJvZHVjdCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdlbmVyYXRlUHJvZHVjdCggc2tpbGwsIGkgKSAge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaWQgICAgICAgICA6IGkgKyAxLFxyXG4gICAgICB0aXRsZSAgICAgIDogYE1hc3RlcmluZyAke3NraWxsfWAsXHJcbiAgICAgIGRlc2NyaXB0aW9uOiBgJHtza2lsbH0gbG9yZW0gIGlwc3VtIGRraGQgZGFrbGhkIGRha2hkayBkYWtoZGsgZGFgLFxyXG4gICAgICBwcmljZSAgICAgIDogKGkgKyAxKSAqIDEwXHJcbiAgICB9XHJcbiAgfVxyXG5cclxudmFyIHByb2R1Y3RzID0gW107XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9kdWN0cygpIHtcclxuICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAvLyBzaW1wbGUgY2FjaGluZyBtZWNoYW5pc21cclxuICAgIGlmKCBwcm9kdWN0cy5sZW5ndGggKSB7XHJcbiAgICAgIHJlc29sdmUocHJvZHVjdHMpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHByb2R1Y3RzID0gZ2VuZXJhdGVQcm9kdWN0cygpO1xyXG4gICAgICAgIHJlc29sdmUocHJvZHVjdHMpO1xyXG4gICAgICB9LCAyMDAwKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2R1Y3RCeUlkKCBwcm9kdWN0SWQgKSB7XHJcbiAgcmV0dXJuIGdldFByb2R1Y3RzKCkudGhlbihwcm9kdWN0cyA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmluZChwcm9kdWN0ID0+IHByb2R1Y3RJZCA9PT0gcHJvZHVjdC5pZCk7XHJcbiAgICByZXR1cm4gcHJvZHVjdDtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvZHVjdChwcm9kdWN0TmFtZSkge1xyXG4gIHByb2R1Y3RzLnB1c2goZ2VuZXJhdGVQcm9kdWN0KHByb2R1Y3ROYW1lLCBwcm9kdWN0cy5sZW5ndGgpKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldFByb2R1Y3RzLFxyXG4gIGdldFByb2R1Y3RCeUlkLFxyXG4gIGFkZFByb2R1Y3RcclxufSIsIi8vIGNhcnQuc2VydmljZS5qc1xyXG5cclxudmFyIGNhcnRJdGVtcyA9IFtdO1xyXG5cclxuY29uc3QgZ2V0Q2FydEl0ZW1zID0gKCkgPT4gY2FydEl0ZW1zO1xyXG5cclxuY29uc3QgYWRkVG9DYXJ0ID0gaXRlbSA9PiB7XHJcbiAgY29uc3QgaXRlbUluQ2FydCA9IGNhcnRJdGVtcy5maW5kKGN1cnJlbnRJdGVtID0+IGl0ZW0uaWQgPT09IGN1cnJlbnRJdGVtLmlkKTtcclxuICBpZiggaXRlbUluQ2FydCApIHtcclxuICAgIGl0ZW1JbkNhcnQucXVhbnRpdHkrKztcclxuICB9IGVsc2Uge1xyXG4gICAgaXRlbS5xdWFudGl0eSA9IDE7XHJcbiAgICBjYXJ0SXRlbXMucHVzaChpdGVtKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IHN1YnN0cmFjdEZyb21DYXJ0ID0gaXRlbUlkID0+IHtcclxuICBjb25zdCBpdGVtSW5kZXggPSBjYXJ0SXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gaXRlbUlkKTtcclxuICBpZiggaXRlbUluZGV4ID4gLTEgKSB7XHJcbiAgICBpZiggY2FydEl0ZW1zW2l0ZW1JbmRleF0ucXVhbnRpdHkgPiAxICkge1xyXG4gICAgICBjYXJ0SXRlbXNbaXRlbUluZGV4XS5xdWFudGl0eS0tO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2FydEl0ZW1zLnNwbGljZShpdGVtSW5kZXgsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgY2xlYXJJdGVtID0gaXRlbUlkID0+IHtcclxuICBjb25zdCBpdGVtSW5kZXggPSBjYXJ0SXRlbXMuZmluZEluZGV4KGl0ZW0gPT4gaXRlbS5pZCA9PT0gaXRlbUlkKTtcclxuICBpZiggaXRlbUluZGV4ID4gLTEgKSB7XHJcbiAgICBjYXJ0SXRlbXMuc3BsaWNlKGl0ZW1JbmRleCwgMSk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBnZXRDYXJ0VG90YWwgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGNhcnRJdGVtcy5yZWR1Y2UoKCBhY2MsIGl0ZW0gKSA9PiB7XHJcbiAgICByZXR1cm4gYWNjICsgKGl0ZW0ucXVhbnRpdHkgKiBpdGVtLnByaWNlKTtcclxuICB9LCAwKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHN1YnN0cmFjdEZyb21DYXJ0LFxyXG4gIGdldENhcnRJdGVtcyxcclxuICBjbGVhckl0ZW0sXHJcbiAgYWRkVG9DYXJ0LFxyXG4gIGdldENhcnRUb3RhbFxyXG59IiwiY29uc3QgZ2V0UHJvZHVjdFRwbCA9IHByb2R1Y3QgPT4ge1xyXG4gIHJldHVybiBgXHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgcHJvZHVjdFwiIGRhdGEtaWQ9XCIke3Byb2R1Y3QuaWR9XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWltYWdlXCI+XHJcbiAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzcz1cImltYWdlIGlzLTRieTNcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cDovL3BsYWNlaG9sZC5pdC8zMDB4MTYwXCIgYWx0PVwiY29kaW5nIGFjYWRlbXkgc3RvcmVcIj5cclxuICAgICAgICAgICAgICA8L2ZpZ3VyZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTVcIj4ke3Byb2R1Y3QudGl0bGV9PC9wPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8cD4ke3Byb2R1Y3QuZGVzY3JpcHRpb259PC9wPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UHJpY2U6IDxiPiR7cHJvZHVjdC5wcmljZX0kPC9iPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxicj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1lbmRcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtcHJpbWFyeVwiIGRhdGEtYWRkPis8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtd2FybmluZ1wiIGRhdGEtc3Vic3RyYWN0Pi08L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICBgXHJcbn1cclxuXHJcbmNvbnN0IGdldENhcnRUcGwgPSBpdGVtID0+IHtcclxuICByZXR1cm4gYFxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIGlzLWZ1bGx3aWR0aFwiIGRhdGEtaWQ9XCIke2l0ZW0uaWR9XCI+XHJcbiAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cImNhcmQtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcmQtaGVhZGVyLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICR7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICBRdWFudGl0eTogJHtpdGVtLnF1YW50aXR5fVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cImNhcmQtZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNhcmQtZm9vdGVyLWl0ZW1cIiBkYXRhLWFkZD4rPC9hPlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWZvb3Rlci1pdGVtXCIgZGF0YS1zdWJzPi08L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImNhcmQtZm9vdGVyLWl0ZW1cIiBkYXRhLWNsZWFyPkNsZWFyPC9hPlxyXG4gICAgICAgICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICBgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXRQcm9kdWN0VHBsLFxyXG4gIGdldENhcnRUcGxcclxufSIsImltcG9ydCAnLi9zdHlsZS5zY3NzJ1xyXG5cclxuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcclxuXHJcblxyXG5pbXBvcnQgc3RvcmVTZXJ2aWNlIGZyb20gJy4vc3RvcmUuc2VydmljZSc7XHJcbmltcG9ydCBjYXJ0U2VydmljZSBmcm9tICcuL2NhcnQuc2VydmljZSc7XHJcbmltcG9ydCB0ZW1wbGF0ZXMgZnJvbSAnLi90ZW1wbGF0ZXMnO1xyXG5cclxuY29uc3QgZ2VuZXJhdGVQcm9kdWN0c0RPTSA9IHByb2R1Y3RzID0+IHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0cycpO1xyXG4gIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gIGZvciAobGV0IHByb2R1Y3Qgb2YgcHJvZHVjdHMpIHtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcclxuICAgIHRlbXBsYXRlLmlubmVySFRNTCA9IHRlbXBsYXRlcy5nZXRQcm9kdWN0VHBsKHByb2R1Y3QpO1xyXG4gICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudCk7XHJcbiAgfVxyXG4gIGVsLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxufVxyXG5cclxuY29uc3QgZ2VuZXJhdGVDYXJ0SXRlbXNET00gPSBpdGVtcyA9PiB7XHJcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1pdGVtcycpO1xyXG4gICQoZWwpLmVtcHR5KCk7XHJcbiAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgZm9yIChsZXQgaXRlbSBvZiBpdGVtcykge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xyXG4gICAgdGVtcGxhdGUuaW5uZXJIVE1MID0gdGVtcGxhdGVzLmdldENhcnRUcGwoaXRlbSk7XHJcbiAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50KTtcclxuICB9XHJcbiAgZWwuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xyXG59XHJcblxyXG5jb25zdCBoaWRlTG9hZGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG4gIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuXHJcbmNvbnN0IGNsaWNrSGFuZGxlcnMgPSAoKSA9PiB7XHJcbiAgLy8gU2hvcCBCdXR0b25zXHJcbiAgJCgnW2RhdGEtYWRkXScpLm9uKCdjbGljaycsIGFkZFRvQ2FydCk7XHJcbiAgJCgnW2RhdGEtc3Vic3RyYWN0XScpLm9uKCdjbGljaycsIHN1YnN0cmFjdEZyb21DYXJ0QnRucyk7XHJcblxyXG4gIC8vIENhcnQgQnV0dG9uc1xyXG4gIC8vIFdlIHVzZSBKcXVlcnkgc3R5bGUgZXZlbnQgZGVsZWdhdGlvbiBoZXJlLCBhcyB0aG9zZSBidXR0b25zIFxyXG4gIC8vIGFyZSBub3QgaW4gdGhlIGRvbSB5ZXQsIHNvIHdlIHNldCBhIHNpbmdsZSBjbGljayBoYW5kbGVyIG9uIHRoZSBwYXJlbnRcclxuICAkKCcuY2FydC1pdGVtcycpLm9uKCdjbGljaycsICdbZGF0YS1hZGRdJywgYWRkVG9DYXJ0KTtcclxuICAkKCcuY2FydC1pdGVtcycpLm9uKCdjbGljaycsICdbZGF0YS1zdWJzXScsIHN1YnN0cmFjdEZyb21DYXJ0QnRucyk7XHJcbiAgJCgnLmNhcnQtaXRlbXMnKS5vbignY2xpY2snLCAnW2RhdGEtY2xlYXJdJywgY2xlYXJJdGVtKTtcclxuXHJcbiAgJCgnW2RhdGEtYWRkLXByb2R1Y3QtYnRuXScpLm9uKCdjbGljaycsICgpID0+IHtcclxuICAgIHZhciBwcm9kdWN0TmFtZSA9IHByb21wdCgnUHJvZHVjdCBOYW1lPycpO1xyXG4gICAgc3RvcmVTZXJ2aWNlLmFkZFByb2R1Y3QocHJvZHVjdE5hbWUpO1xyXG4gICAgcmVuZGVyU3RvcmUoKTtcclxuICB9KVxyXG5cclxufVxyXG5cclxuY29uc3QgYWRkVG9DYXJ0ID0gZnVuY3Rpb24gKCkge1xyXG4gIGNvbnN0IHByb2R1Y3RJZCA9ICQodGhpcykuY2xvc2VzdCgnW2RhdGEtaWRdJykuZGF0YSgnaWQnKTtcclxuICBzdG9yZVNlcnZpY2UuZ2V0UHJvZHVjdEJ5SWQocHJvZHVjdElkKS50aGVuKHByb2R1Y3QgPT4ge1xyXG4gICAgY29uc3QgeyBpZCwgdGl0bGUsIHByaWNlIH0gPSBwcm9kdWN0O1xyXG4gICAgY2FydFNlcnZpY2UuYWRkVG9DYXJ0KHtcclxuICAgICAgaWQsXHJcbiAgICAgIHRpdGxlLFxyXG4gICAgICBwcmljZVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmVuZGVyQ2FydCgpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5jb25zdCBzdWJzdHJhY3RGcm9tQ2FydEJ0bnMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgY29uc3QgcHJvZHVjdElkID0gJCh0aGlzKS5jbG9zZXN0KCdbZGF0YS1pZF0nKS5kYXRhKCdpZCcpO1xyXG4gIGNhcnRTZXJ2aWNlLnN1YnN0cmFjdEZyb21DYXJ0KHByb2R1Y3RJZCk7XHJcbiAgcmVuZGVyQ2FydCgpO1xyXG5cclxufTtcclxuXHJcbmNvbnN0IGNsZWFySXRlbSA9IGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBwcm9kdWN0SWQgPSAkKHRoaXMpLmNsb3Nlc3QoJ1tkYXRhLWlkXScpLmRhdGEoJ2lkJyk7XHJcbiAgY2FydFNlcnZpY2UuY2xlYXJJdGVtKHByb2R1Y3RJZCk7XHJcbiAgcmVuZGVyQ2FydCgpO1xyXG5cclxufVxyXG5cclxuY29uc3QgcmVuZGVyQ2FydCA9ICgpID0+IHtcclxuICBnZW5lcmF0ZUNhcnRJdGVtc0RPTShjYXJ0U2VydmljZS5nZXRDYXJ0SXRlbXMoKSk7XHJcbiAgcmVuZGVyQ2FydFRvdGFsKCk7XHJcbiAgc2hvd0NhcnRTdGF0dXMoKTtcclxufVxyXG5cclxuY29uc3QgcmVuZGVyQ2FydFRvdGFsID0gKCkgPT4ge1xyXG4gIGNvbnN0ICRlbCA9ICQoJ1tkYXRhLWNhcnQtdG90YWxdJyk7XHJcbiAgJGVsLnRleHQoY2FydFNlcnZpY2UuZ2V0Q2FydFRvdGFsKCkpO1xyXG59XHJcblxyXG5jb25zdCBzaG93Q2FydFN0YXR1cyA9ICgpID0+IHtcclxuICBjb25zdCBlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xyXG4gIGlmIChjYXJ0U2VydmljZS5nZXRDYXJ0SXRlbXMoKS5sZW5ndGgpIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVuZGVyU3RvcmUgPSAoKSA9PiB7XHJcbiAgc3RvcmVTZXJ2aWNlLmdldFByb2R1Y3RzKCkudGhlbihwcm9kdWN0cyA9PiB7XHJcbiAgICBnZW5lcmF0ZVByb2R1Y3RzRE9NKHByb2R1Y3RzKTtcclxuICAgIGNsaWNrSGFuZGxlcnMoKTtcclxuICAgIGhpZGVMb2FkZXIoKTtcclxuICB9KTtcclxuXHJcbn1cclxuXHJcbnJlbmRlclN0b3JlKCk7XHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJ0aGlzIiwiZ2VuZXJhdGVQcm9kdWN0cyIsInNraWxscyIsIm1hcCIsImdlbmVyYXRlUHJvZHVjdCIsInNraWxsIiwiaSIsInByb2R1Y3RzIiwiZ2V0UHJvZHVjdHMiLCJQcm9taXNlIiwibGVuZ3RoIiwiZ2V0UHJvZHVjdEJ5SWQiLCJwcm9kdWN0SWQiLCJ0aGVuIiwicHJvZHVjdCIsImZpbmQiLCJpZCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0TmFtZSIsInB1c2giLCJjYXJ0SXRlbXMiLCJnZXRDYXJ0SXRlbXMiLCJhZGRUb0NhcnQiLCJpdGVtSW5DYXJ0IiwiaXRlbSIsImN1cnJlbnRJdGVtIiwicXVhbnRpdHkiLCJzdWJzdHJhY3RGcm9tQ2FydCIsIml0ZW1JbmRleCIsImZpbmRJbmRleCIsIml0ZW1JZCIsInNwbGljZSIsImNsZWFySXRlbSIsImdldENhcnRUb3RhbCIsInJlZHVjZSIsImFjYyIsInByaWNlIiwiZ2V0UHJvZHVjdFRwbCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJnZXRDYXJ0VHBsIiwiZ2VuZXJhdGVQcm9kdWN0c0RPTSIsImVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwidGVtcGxhdGUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwidGVtcGxhdGVzIiwiYXBwZW5kQ2hpbGQiLCJjb250ZW50IiwiZ2VuZXJhdGVDYXJ0SXRlbXNET00iLCJlbXB0eSIsIml0ZW1zIiwiaGlkZUxvYWRlciIsInN0eWxlIiwiZGlzcGxheSIsImNsaWNrSGFuZGxlcnMiLCJvbiIsInN1YnN0cmFjdEZyb21DYXJ0QnRucyIsInByb21wdCIsIiQiLCJjbG9zZXN0IiwiZGF0YSIsInJlbmRlckNhcnQiLCJjYXJ0U2VydmljZSIsInJlbmRlckNhcnRUb3RhbCIsIiRlbCIsInRleHQiLCJzaG93Q2FydFN0YXR1cyIsInJlbmRlclN0b3JlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWFBLEVBQUUsVUFBVSxNQUFNLEVBQUUsT0FBTyxHQUFHOztDQUU3QixZQUFZLENBQUM7O0NBRWIsS0FBSyxPQUFPLE1BQU0sS0FBSyxRQUFRLElBQUksT0FBTyxNQUFNLENBQUMsT0FBTyxLQUFLLFFBQVEsR0FBRzs7Ozs7Ozs7O0VBU3ZFLGNBQWMsR0FBRyxNQUFNLENBQUMsUUFBUTtHQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtHQUN2QixVQUFVLENBQUMsR0FBRztJQUNiLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHO0tBQ2xCLE1BQU0sSUFBSSxLQUFLLEVBQUUsMENBQTBDLEVBQUUsQ0FBQztLQUM5RDtJQUNELE9BQU8sT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7RUFDSCxNQUFNO0VBQ04sT0FBTyxFQUFFLE1BQU0sRUFBRSxDQUFDO0VBQ2xCOzs7Q0FHRCxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsR0FBRyxNQUFNLEdBQUdBLGNBQUksRUFBRSxVQUFVLE1BQU0sRUFBRSxRQUFRLEdBQUc7Ozs7OztBQU1qRixZQUFZLENBQUM7O0FBRWIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDOztBQUViLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7O0FBRS9CLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUM7O0FBRXJDLElBQUksS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7O0FBRXRCLElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7O0FBRXhCLElBQUksSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7O0FBRXBCLElBQUksT0FBTyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7O0FBRTFCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQzs7QUFFcEIsSUFBSSxRQUFRLEdBQUcsVUFBVSxDQUFDLFFBQVEsQ0FBQzs7QUFFbkMsSUFBSSxNQUFNLEdBQUcsVUFBVSxDQUFDLGNBQWMsQ0FBQzs7QUFFdkMsSUFBSSxVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQzs7QUFFakMsSUFBSSxvQkFBb0IsR0FBRyxVQUFVLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDOztBQUVyRCxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7Ozs7Q0FJaEIsU0FBUyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRztFQUM3QixHQUFHLEdBQUcsR0FBRyxJQUFJLFFBQVEsQ0FBQzs7RUFFdEIsSUFBSSxNQUFNLEdBQUcsR0FBRyxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7RUFFM0MsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7RUFDbkIsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsQ0FBQztFQUNoRTs7Ozs7OztBQU9GO0NBQ0MsT0FBTyxHQUFHLE9BQU87OztDQUdqQixNQUFNLEdBQUcsVUFBVSxRQUFRLEVBQUUsT0FBTyxHQUFHOzs7O0VBSXRDLE9BQU8sSUFBSSxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLENBQUM7RUFDL0M7Ozs7Q0FJRCxLQUFLLEdBQUcsb0NBQW9DOzs7Q0FHNUMsU0FBUyxHQUFHLE9BQU87Q0FDbkIsVUFBVSxHQUFHLFdBQVc7OztDQUd4QixVQUFVLEdBQUcsVUFBVSxHQUFHLEVBQUUsTUFBTSxHQUFHO0VBQ3BDLE9BQU8sTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO0VBQzVCLENBQUM7O0FBRUgsTUFBTSxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsU0FBUyxHQUFHOzs7Q0FHOUIsTUFBTSxFQUFFLE9BQU87O0NBRWYsV0FBVyxFQUFFLE1BQU07OztDQUduQixNQUFNLEVBQUUsQ0FBQzs7Q0FFVCxPQUFPLEVBQUUsV0FBVztFQUNuQixPQUFPLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7RUFDMUI7Ozs7Q0FJRCxHQUFHLEVBQUUsVUFBVSxHQUFHLEdBQUc7OztFQUdwQixLQUFLLEdBQUcsSUFBSSxJQUFJLEdBQUc7R0FDbEIsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0dBQzFCOzs7RUFHRCxPQUFPLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxFQUFFLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0VBQ3pEOzs7O0NBSUQsU0FBUyxFQUFFLFVBQVUsS0FBSyxHQUFHOzs7RUFHNUIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLENBQUM7OztFQUdwRCxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzs7O0VBR3RCLE9BQU8sR0FBRyxDQUFDO0VBQ1g7OztDQUdELElBQUksRUFBRSxVQUFVLFFBQVEsR0FBRztFQUMxQixPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxDQUFDO0VBQ3JDOztDQUVELEdBQUcsRUFBRSxVQUFVLFFBQVEsR0FBRztFQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsVUFBVSxJQUFJLEVBQUUsQ0FBQyxHQUFHO0dBQzVELE9BQU8sUUFBUSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO0dBQ3RDLEVBQUUsRUFBRSxDQUFDO0VBQ047O0NBRUQsS0FBSyxFQUFFLFdBQVc7RUFDakIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLENBQUM7RUFDeEQ7O0NBRUQsS0FBSyxFQUFFLFdBQVc7RUFDakIsT0FBTyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0VBQ3BCOztDQUVELElBQUksRUFBRSxXQUFXO0VBQ2hCLE9BQU8sSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0VBQ3JCOztDQUVELEVBQUUsRUFBRSxVQUFVLENBQUMsR0FBRztFQUNqQixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTTtHQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLENBQUM7RUFDOUIsT0FBTyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDO0VBQ2hFOztDQUVELEdBQUcsRUFBRSxXQUFXO0VBQ2YsT0FBTyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztFQUM3Qzs7OztDQUlELElBQUksRUFBRSxJQUFJO0NBQ1YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO0NBQ2QsTUFBTSxFQUFFLEdBQUcsQ0FBQyxNQUFNO0NBQ2xCLENBQUM7O0FBRUYsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sR0FBRyxXQUFXO0NBQzdDLElBQUksT0FBTyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLO0VBQy9DLE1BQU0sR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRTtFQUM3QixDQUFDLEdBQUcsQ0FBQztFQUNMLE1BQU0sR0FBRyxTQUFTLENBQUMsTUFBTTtFQUN6QixJQUFJLEdBQUcsS0FBSyxDQUFDOzs7Q0FHZCxLQUFLLE9BQU8sTUFBTSxLQUFLLFNBQVMsR0FBRztFQUNsQyxJQUFJLEdBQUcsTUFBTSxDQUFDOzs7RUFHZCxNQUFNLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztFQUM5QixDQUFDLEVBQUUsQ0FBQztFQUNKOzs7Q0FHRCxLQUFLLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUUsTUFBTSxFQUFFLEdBQUc7RUFDakUsTUFBTSxHQUFHLEVBQUUsQ0FBQztFQUNaOzs7Q0FHRCxLQUFLLENBQUMsS0FBSyxNQUFNLEdBQUc7RUFDbkIsTUFBTSxHQUFHLElBQUksQ0FBQztFQUNkLENBQUMsRUFBRSxDQUFDO0VBQ0o7O0NBRUQsUUFBUSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHOzs7RUFHekIsS0FBSyxFQUFFLE9BQU8sR0FBRyxTQUFTLEVBQUUsQ0FBQyxFQUFFLE1BQU0sSUFBSSxHQUFHOzs7R0FHM0MsTUFBTSxJQUFJLElBQUksT0FBTyxHQUFHO0lBQ3ZCLEdBQUcsR0FBRyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7SUFDckIsSUFBSSxHQUFHLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7O0lBR3ZCLEtBQUssTUFBTSxLQUFLLElBQUksR0FBRztLQUN0QixTQUFTO0tBQ1Q7OztJQUdELEtBQUssSUFBSSxJQUFJLElBQUksTUFBTSxNQUFNLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRTtPQUNoRCxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUc7O0tBRTdDLEtBQUssV0FBVyxHQUFHO01BQ2xCLFdBQVcsR0FBRyxLQUFLLENBQUM7TUFDcEIsS0FBSyxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7O01BRWhELE1BQU07TUFDTixLQUFLLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxhQUFhLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsQ0FBQztNQUN0RDs7O0tBR0QsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQzs7O0tBR3BELE1BQU0sS0FBSyxJQUFJLEtBQUssU0FBUyxHQUFHO0tBQ2hDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUM7S0FDdEI7SUFDRDtHQUNEO0VBQ0Q7OztDQUdELE9BQU8sTUFBTSxDQUFDO0NBQ2QsQ0FBQzs7QUFFRixNQUFNLENBQUMsTUFBTSxFQUFFOzs7Q0FHZCxPQUFPLEVBQUUsUUFBUSxHQUFHLEVBQUUsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRTs7O0NBR3BFLE9BQU8sRUFBRSxJQUFJOztDQUViLEtBQUssRUFBRSxVQUFVLEdBQUcsR0FBRztFQUN0QixNQUFNLElBQUksS0FBSyxFQUFFLEdBQUcsRUFBRSxDQUFDO0VBQ3ZCOztDQUVELElBQUksRUFBRSxXQUFXLEVBQUU7O0NBRW5CLFVBQVUsRUFBRSxVQUFVLEdBQUcsR0FBRztFQUMzQixPQUFPLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssVUFBVSxDQUFDO0VBQ3pDOztDQUVELE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTzs7Q0FFdEIsUUFBUSxFQUFFLFVBQVUsR0FBRyxHQUFHO0VBQ3pCLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssR0FBRyxDQUFDLE1BQU0sQ0FBQztFQUN6Qzs7Q0FFRCxTQUFTLEVBQUUsVUFBVSxHQUFHLEdBQUc7Ozs7O0VBSzFCLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7RUFDOUIsT0FBTyxFQUFFLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLFFBQVE7Ozs7O0dBSzlDLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxVQUFVLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQztFQUNuQzs7Q0FFRCxhQUFhLEVBQUUsVUFBVSxHQUFHLEdBQUc7RUFDOUIsSUFBSSxLQUFLLEVBQUUsSUFBSSxDQUFDOzs7O0VBSWhCLEtBQUssQ0FBQyxHQUFHLElBQUksUUFBUSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsS0FBSyxpQkFBaUIsR0FBRztHQUN6RCxPQUFPLEtBQUssQ0FBQztHQUNiOztFQUVELEtBQUssR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUM7OztFQUd4QixLQUFLLENBQUMsS0FBSyxHQUFHO0dBQ2IsT0FBTyxJQUFJLENBQUM7R0FDWjs7O0VBR0QsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUM7RUFDaEUsT0FBTyxPQUFPLElBQUksS0FBSyxVQUFVLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxvQkFBb0IsQ0FBQztFQUN0Rjs7Q0FFRCxhQUFhLEVBQUUsVUFBVSxHQUFHLEdBQUc7Ozs7RUFJOUIsSUFBSSxJQUFJLENBQUM7O0VBRVQsTUFBTSxJQUFJLElBQUksR0FBRyxHQUFHO0dBQ25CLE9BQU8sS0FBSyxDQUFDO0dBQ2I7RUFDRCxPQUFPLElBQUksQ0FBQztFQUNaOztDQUVELElBQUksRUFBRSxVQUFVLEdBQUcsR0FBRztFQUNyQixLQUFLLEdBQUcsSUFBSSxJQUFJLEdBQUc7R0FDbEIsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDO0dBQ2hCOzs7RUFHRCxPQUFPLE9BQU8sR0FBRyxLQUFLLFFBQVEsSUFBSSxPQUFPLEdBQUcsS0FBSyxVQUFVO0dBQzFELFVBQVUsRUFBRSxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksUUFBUTtHQUM5QyxPQUFPLEdBQUcsQ0FBQztFQUNaOzs7Q0FHRCxVQUFVLEVBQUUsVUFBVSxJQUFJLEdBQUc7RUFDNUIsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO0VBQ2hCOzs7OztDQUtELFNBQVMsRUFBRSxVQUFVLE1BQU0sR0FBRztFQUM3QixPQUFPLE1BQU0sQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLENBQUM7RUFDNUU7O0NBRUQsUUFBUSxFQUFFLFVBQVUsSUFBSSxFQUFFLElBQUksR0FBRztFQUNoQyxPQUFPLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7RUFDM0U7O0NBRUQsSUFBSSxFQUFFLFVBQVUsR0FBRyxFQUFFLFFBQVEsR0FBRztFQUMvQixJQUFJLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDOztFQUVsQixLQUFLLFdBQVcsRUFBRSxHQUFHLEVBQUUsR0FBRztHQUN6QixNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztHQUNwQixRQUFRLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUc7SUFDekIsS0FBSyxRQUFRLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEtBQUssS0FBSyxHQUFHO0tBQ3ZELE1BQU07S0FDTjtJQUNEO0dBQ0QsTUFBTTtHQUNOLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRztJQUNoQixLQUFLLFFBQVEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxLQUFLLEdBQUc7S0FDdkQsTUFBTTtLQUNOO0lBQ0Q7R0FDRDs7RUFFRCxPQUFPLEdBQUcsQ0FBQztFQUNYOzs7Q0FHRCxJQUFJLEVBQUUsVUFBVSxJQUFJLEdBQUc7RUFDdEIsT0FBTyxJQUFJLElBQUksSUFBSTtHQUNsQixFQUFFO0dBQ0YsRUFBRSxJQUFJLEdBQUcsRUFBRSxHQUFHLE9BQU8sRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDcEM7OztDQUdELFNBQVMsRUFBRSxVQUFVLEdBQUcsRUFBRSxPQUFPLEdBQUc7RUFDbkMsSUFBSSxHQUFHLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQzs7RUFFeEIsS0FBSyxHQUFHLElBQUksSUFBSSxHQUFHO0dBQ2xCLEtBQUssV0FBVyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRSxHQUFHO0lBQ25DLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRztLQUNoQixPQUFPLEdBQUcsS0FBSyxRQUFRO0tBQ3ZCLEVBQUUsR0FBRyxFQUFFLEdBQUcsR0FBRztLQUNiLENBQUM7SUFDRixNQUFNO0lBQ04sSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdEI7R0FDRDs7RUFFRCxPQUFPLEdBQUcsQ0FBQztFQUNYOztDQUVELE9BQU8sRUFBRSxVQUFVLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHO0VBQ2pDLE9BQU8sR0FBRyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDdkQ7Ozs7Q0FJRCxLQUFLLEVBQUUsVUFBVSxLQUFLLEVBQUUsTUFBTSxHQUFHO0VBQ2hDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU07R0FDdkIsQ0FBQyxHQUFHLENBQUM7R0FDTCxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7RUFFbEIsUUFBUSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHO0dBQ3RCLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLE1BQU0sRUFBRSxDQUFDLEVBQUUsQ0FBQztHQUMzQjs7RUFFRCxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7RUFFakIsT0FBTyxLQUFLLENBQUM7RUFDYjs7Q0FFRCxJQUFJLEVBQUUsVUFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sR0FBRztFQUN6QyxJQUFJLGVBQWU7R0FDbEIsT0FBTyxHQUFHLEVBQUU7R0FDWixDQUFDLEdBQUcsQ0FBQztHQUNMLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTTtHQUNyQixjQUFjLEdBQUcsQ0FBQyxNQUFNLENBQUM7Ozs7RUFJMUIsUUFBUSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHO0dBQ3pCLGVBQWUsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUM7R0FDN0MsS0FBSyxlQUFlLEtBQUssY0FBYyxHQUFHO0lBQ3pDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7SUFDM0I7R0FDRDs7RUFFRCxPQUFPLE9BQU8sQ0FBQztFQUNmOzs7Q0FHRCxHQUFHLEVBQUUsVUFBVSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRztFQUNyQyxJQUFJLE1BQU0sRUFBRSxLQUFLO0dBQ2hCLENBQUMsR0FBRyxDQUFDO0dBQ0wsR0FBRyxHQUFHLEVBQUUsQ0FBQzs7O0VBR1YsS0FBSyxXQUFXLEVBQUUsS0FBSyxFQUFFLEdBQUc7R0FDM0IsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUM7R0FDdEIsUUFBUSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHO0lBQ3pCLEtBQUssR0FBRyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7SUFFdkMsS0FBSyxLQUFLLElBQUksSUFBSSxHQUFHO0tBQ3BCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7S0FDbEI7SUFDRDs7O0dBR0QsTUFBTTtHQUNOLE1BQU0sQ0FBQyxJQUFJLEtBQUssR0FBRztJQUNsQixLQUFLLEdBQUcsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7O0lBRXZDLEtBQUssS0FBSyxJQUFJLElBQUksR0FBRztLQUNwQixHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ2xCO0lBQ0Q7R0FDRDs7O0VBR0QsT0FBTyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQztFQUMvQjs7O0NBR0QsSUFBSSxFQUFFLENBQUM7Ozs7Q0FJUCxLQUFLLEVBQUUsVUFBVSxFQUFFLEVBQUUsT0FBTyxHQUFHO0VBQzlCLElBQUksR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLENBQUM7O0VBRXJCLEtBQUssT0FBTyxPQUFPLEtBQUssUUFBUSxHQUFHO0dBQ2xDLEdBQUcsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUM7R0FDcEIsT0FBTyxHQUFHLEVBQUUsQ0FBQztHQUNiLEVBQUUsR0FBRyxHQUFHLENBQUM7R0FDVDs7OztFQUlELEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLEVBQUUsRUFBRSxHQUFHO0dBQy9CLE9BQU8sU0FBUyxDQUFDO0dBQ2pCOzs7RUFHRCxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUM7RUFDbEMsS0FBSyxHQUFHLFdBQVc7R0FDbEIsT0FBTyxFQUFFLENBQUMsS0FBSyxFQUFFLE9BQU8sSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsQ0FBQztHQUMzRSxDQUFDOzs7RUFHRixLQUFLLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7O0VBRWhELE9BQU8sS0FBSyxDQUFDO0VBQ2I7O0NBRUQsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHOzs7O0NBSWIsT0FBTyxFQUFFLE9BQU87Q0FDaEIsRUFBRSxDQUFDOztBQUVKLEtBQUssT0FBTyxNQUFNLEtBQUssVUFBVSxHQUFHO0NBQ25DLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Q0FDdEQ7OztBQUdELE1BQU0sQ0FBQyxJQUFJLEVBQUUsc0VBQXNFLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRTtBQUNoRyxVQUFVLENBQUMsRUFBRSxJQUFJLEdBQUc7Q0FDbkIsVUFBVSxFQUFFLFVBQVUsR0FBRyxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0NBQzNELEVBQUUsQ0FBQzs7QUFFSixTQUFTLFdBQVcsRUFBRSxHQUFHLEdBQUc7Ozs7OztDQU0zQixJQUFJLE1BQU0sR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLFFBQVEsSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU07RUFDbEQsSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7O0NBRTNCLEtBQUssSUFBSSxLQUFLLFVBQVUsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxHQUFHO0VBQ3BELE9BQU8sS0FBSyxDQUFDO0VBQ2I7O0NBRUQsT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLE1BQU0sS0FBSyxDQUFDO0VBQ3RDLE9BQU8sTUFBTSxLQUFLLFFBQVEsSUFBSSxNQUFNLEdBQUcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUM7Q0FDbkU7QUFDRCxJQUFJLE1BQU07Ozs7Ozs7Ozs7O0FBV1YsQ0FBQyxVQUFVLE1BQU0sR0FBRzs7QUFFcEIsSUFBSSxDQUFDO0NBQ0osT0FBTztDQUNQLElBQUk7Q0FDSixPQUFPO0NBQ1AsS0FBSztDQUNMLFFBQVE7Q0FDUixPQUFPO0NBQ1AsTUFBTTtDQUNOLGdCQUFnQjtDQUNoQixTQUFTO0NBQ1QsWUFBWTs7O0NBR1osV0FBVztDQUNYLFFBQVE7Q0FDUixPQUFPO0NBQ1AsY0FBYztDQUNkLFNBQVM7Q0FDVCxhQUFhO0NBQ2IsT0FBTztDQUNQLFFBQVE7OztDQUdSLE9BQU8sR0FBRyxRQUFRLEdBQUcsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO0NBQ25DLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUTtDQUM5QixPQUFPLEdBQUcsQ0FBQztDQUNYLElBQUksR0FBRyxDQUFDO0NBQ1IsVUFBVSxHQUFHLFdBQVcsRUFBRTtDQUMxQixVQUFVLEdBQUcsV0FBVyxFQUFFO0NBQzFCLGFBQWEsR0FBRyxXQUFXLEVBQUU7Q0FDN0IsU0FBUyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRztFQUM1QixLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUc7R0FDZCxZQUFZLEdBQUcsSUFBSSxDQUFDO0dBQ3BCO0VBQ0QsT0FBTyxDQUFDLENBQUM7RUFDVDs7O0NBR0QsTUFBTSxHQUFHLENBQUMsRUFBRSxFQUFFLGNBQWM7Q0FDNUIsR0FBRyxHQUFHLEVBQUU7Q0FDUixHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUc7Q0FDYixXQUFXLEdBQUcsR0FBRyxDQUFDLElBQUk7Q0FDdEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJO0NBQ2YsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLOzs7Q0FHakIsT0FBTyxHQUFHLFVBQVUsSUFBSSxFQUFFLElBQUksR0FBRztFQUNoQyxJQUFJLENBQUMsR0FBRyxDQUFDO0dBQ1IsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7RUFDbkIsUUFBUSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxHQUFHO0dBQ3RCLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksR0FBRztJQUN2QixPQUFPLENBQUMsQ0FBQztJQUNUO0dBQ0Q7RUFDRCxPQUFPLENBQUMsQ0FBQyxDQUFDO0VBQ1Y7O0NBRUQsUUFBUSxHQUFHLDRIQUE0SDs7Ozs7Q0FLdkksVUFBVSxHQUFHLHFCQUFxQjs7O0NBR2xDLFVBQVUsR0FBRywrQkFBK0I7OztDQUc1QyxVQUFVLEdBQUcsS0FBSyxHQUFHLFVBQVUsR0FBRyxJQUFJLEdBQUcsVUFBVSxHQUFHLE1BQU0sR0FBRyxVQUFVOztFQUV4RSxlQUFlLEdBQUcsVUFBVTs7RUFFNUIsMERBQTBELEdBQUcsVUFBVSxHQUFHLE1BQU0sR0FBRyxVQUFVO0VBQzdGLE1BQU07O0NBRVAsT0FBTyxHQUFHLElBQUksR0FBRyxVQUFVLEdBQUcsVUFBVTs7O0VBR3ZDLHVEQUF1RDs7RUFFdkQsMEJBQTBCLEdBQUcsVUFBVSxHQUFHLE1BQU07O0VBRWhELElBQUk7RUFDSixRQUFROzs7Q0FHVCxXQUFXLEdBQUcsSUFBSSxNQUFNLEVBQUUsVUFBVSxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUU7Q0FDakQsS0FBSyxHQUFHLElBQUksTUFBTSxFQUFFLEdBQUcsR0FBRyxVQUFVLEdBQUcsNkJBQTZCLEdBQUcsVUFBVSxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUU7O0NBRS9GLE1BQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxHQUFHLEdBQUcsVUFBVSxHQUFHLElBQUksR0FBRyxVQUFVLEdBQUcsR0FBRyxFQUFFO0NBQ2pFLFlBQVksR0FBRyxJQUFJLE1BQU0sRUFBRSxHQUFHLEdBQUcsVUFBVSxHQUFHLFVBQVUsR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLFVBQVUsR0FBRyxHQUFHLEVBQUU7O0NBRWhHLGdCQUFnQixHQUFHLElBQUksTUFBTSxFQUFFLEdBQUcsR0FBRyxVQUFVLEdBQUcsZ0JBQWdCLEdBQUcsVUFBVSxHQUFHLE1BQU0sRUFBRSxHQUFHLEVBQUU7O0NBRS9GLE9BQU8sR0FBRyxJQUFJLE1BQU0sRUFBRSxPQUFPLEVBQUU7Q0FDL0IsV0FBVyxHQUFHLElBQUksTUFBTSxFQUFFLEdBQUcsR0FBRyxVQUFVLEdBQUcsR0FBRyxFQUFFOztDQUVsRCxTQUFTLEdBQUc7RUFDWCxJQUFJLEVBQUUsSUFBSSxNQUFNLEVBQUUsS0FBSyxHQUFHLFVBQVUsR0FBRyxHQUFHLEVBQUU7RUFDNUMsT0FBTyxFQUFFLElBQUksTUFBTSxFQUFFLE9BQU8sR0FBRyxVQUFVLEdBQUcsR0FBRyxFQUFFO0VBQ2pELEtBQUssRUFBRSxJQUFJLE1BQU0sRUFBRSxJQUFJLEdBQUcsVUFBVSxHQUFHLE9BQU8sRUFBRTtFQUNoRCxNQUFNLEVBQUUsSUFBSSxNQUFNLEVBQUUsR0FBRyxHQUFHLFVBQVUsRUFBRTtFQUN0QyxRQUFRLEVBQUUsSUFBSSxNQUFNLEVBQUUsR0FBRyxHQUFHLE9BQU8sRUFBRTtFQUNyQyxPQUFPLEVBQUUsSUFBSSxNQUFNLEVBQUUsd0RBQXdELEdBQUcsVUFBVTtHQUN6Riw4QkFBOEIsR0FBRyxVQUFVLEdBQUcsYUFBYSxHQUFHLFVBQVU7R0FDeEUsWUFBWSxHQUFHLFVBQVUsR0FBRyxRQUFRLEVBQUUsR0FBRyxFQUFFO0VBQzVDLE1BQU0sRUFBRSxJQUFJLE1BQU0sRUFBRSxNQUFNLEdBQUcsUUFBUSxHQUFHLElBQUksRUFBRSxHQUFHLEVBQUU7OztFQUduRCxjQUFjLEVBQUUsSUFBSSxNQUFNLEVBQUUsR0FBRyxHQUFHLFVBQVUsR0FBRyxrREFBa0Q7R0FDaEcsVUFBVSxHQUFHLGtCQUFrQixHQUFHLFVBQVUsR0FBRyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7RUFDekU7O0NBRUQsT0FBTyxHQUFHLHFDQUFxQztDQUMvQyxPQUFPLEdBQUcsUUFBUTs7Q0FFbEIsT0FBTyxHQUFHLHdCQUF3Qjs7O0NBR2xDLFVBQVUsR0FBRyxrQ0FBa0M7O0NBRS9DLFFBQVEsR0FBRyxNQUFNOzs7O0NBSWpCLFNBQVMsR0FBRyxJQUFJLE1BQU0sRUFBRSxvQkFBb0IsR0FBRyxVQUFVLEdBQUcsS0FBSyxHQUFHLFVBQVUsR0FBRyxNQUFNLEVBQUUsSUFBSSxFQUFFO0NBQy9GLFNBQVMsR0FBRyxVQUFVLENBQUMsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEdBQUc7RUFDckQsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUM7Ozs7RUFJcEMsT0FBTyxJQUFJLEtBQUssSUFBSSxJQUFJLGlCQUFpQjtHQUN4QyxPQUFPO0dBQ1AsSUFBSSxHQUFHLENBQUM7O0lBRVAsTUFBTSxDQUFDLFlBQVksRUFBRSxJQUFJLEdBQUcsT0FBTyxFQUFFOztJQUVyQyxNQUFNLENBQUMsWUFBWSxFQUFFLElBQUksSUFBSSxFQUFFLEdBQUcsTUFBTSxFQUFFLElBQUksR0FBRyxLQUFLLEdBQUcsTUFBTSxFQUFFLENBQUM7RUFDcEU7Ozs7Q0FJRCxVQUFVLEdBQUcscURBQXFEO0NBQ2xFLFVBQVUsR0FBRyxVQUFVLEVBQUUsRUFBRSxXQUFXLEdBQUc7RUFDeEMsS0FBSyxXQUFXLEdBQUc7OztHQUdsQixLQUFLLEVBQUUsS0FBSyxJQUFJLEdBQUc7SUFDbEIsT0FBTyxRQUFRLENBQUM7SUFDaEI7OztHQUdELE9BQU8sRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUM7R0FDdEY7OztFQUdELE9BQU8sSUFBSSxHQUFHLEVBQUUsQ0FBQztFQUNqQjs7Ozs7O0NBTUQsYUFBYSxHQUFHLFdBQVc7RUFDMUIsV0FBVyxFQUFFLENBQUM7RUFDZDs7Q0FFRCxnQkFBZ0IsR0FBRyxhQUFhO0VBQy9CLFVBQVUsSUFBSSxHQUFHO0dBQ2hCLE9BQU8sSUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEtBQUssTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLElBQUksSUFBSSxDQUFDLENBQUM7R0FDckU7RUFDRCxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRTtFQUNyQyxDQUFDOzs7QUFHSCxJQUFJO0NBQ0gsSUFBSSxDQUFDLEtBQUs7R0FDUixHQUFHLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsVUFBVSxFQUFFO0VBQzVDLFlBQVksQ0FBQyxVQUFVO0VBQ3ZCLENBQUM7OztDQUdGLEdBQUcsRUFBRSxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsQ0FBQztDQUMvQyxDQUFDLFFBQVEsQ0FBQyxHQUFHO0NBQ2IsSUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNOzs7RUFHekIsVUFBVSxNQUFNLEVBQUUsR0FBRyxHQUFHO0dBQ3ZCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztHQUM3Qzs7OztFQUlELFVBQVUsTUFBTSxFQUFFLEdBQUcsR0FBRztHQUN2QixJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTTtJQUNwQixDQUFDLEdBQUcsQ0FBQyxDQUFDOztHQUVQLFNBQVMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRTtHQUNyQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7R0FDdEI7RUFDRCxDQUFDO0NBQ0Y7O0FBRUQsU0FBUyxNQUFNLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxHQUFHO0NBQ25ELElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsV0FBVztFQUM5QyxVQUFVLEdBQUcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxhQUFhOzs7RUFHN0MsUUFBUSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzs7Q0FFM0MsT0FBTyxHQUFHLE9BQU8sSUFBSSxFQUFFLENBQUM7OztDQUd4QixLQUFLLE9BQU8sUUFBUSxLQUFLLFFBQVEsSUFBSSxDQUFDLFFBQVE7RUFDN0MsUUFBUSxLQUFLLENBQUMsSUFBSSxRQUFRLEtBQUssQ0FBQyxJQUFJLFFBQVEsS0FBSyxFQUFFLEdBQUc7O0VBRXRELE9BQU8sT0FBTyxDQUFDO0VBQ2Y7OztDQUdELEtBQUssQ0FBQyxJQUFJLEdBQUc7O0VBRVosS0FBSyxFQUFFLE9BQU8sR0FBRyxPQUFPLENBQUMsYUFBYSxJQUFJLE9BQU8sR0FBRyxZQUFZLE9BQU8sUUFBUSxHQUFHO0dBQ2pGLFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztHQUN2QjtFQUNELE9BQU8sR0FBRyxPQUFPLElBQUksUUFBUSxDQUFDOztFQUU5QixLQUFLLGNBQWMsR0FBRzs7OztHQUlyQixLQUFLLFFBQVEsS0FBSyxFQUFFLEtBQUssS0FBSyxHQUFHLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRzs7O0lBRy9ELE1BQU0sQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSTs7O0tBR3JCLEtBQUssUUFBUSxLQUFLLENBQUMsR0FBRztNQUNyQixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxJQUFJOzs7OztPQUszQyxLQUFLLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHO1FBQ3BCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDckIsT0FBTyxPQUFPLENBQUM7UUFDZjtPQUNELE1BQU07T0FDTixPQUFPLE9BQU8sQ0FBQztPQUNmOzs7TUFHRCxNQUFNOzs7OztNQUtOLEtBQUssVUFBVSxLQUFLLElBQUksR0FBRyxVQUFVLENBQUMsY0FBYyxFQUFFLENBQUMsRUFBRSxDQUFDO09BQ3pELFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO09BQ3pCLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHOztPQUVoQixPQUFPLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO09BQ3JCLE9BQU8sT0FBTyxDQUFDO09BQ2Y7TUFDRDs7O0tBR0QsTUFBTSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRztLQUN0QixJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsb0JBQW9CLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQztLQUNoRSxPQUFPLE9BQU8sQ0FBQzs7O0tBR2YsTUFBTSxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsc0JBQXNCO0tBQzNELE9BQU8sQ0FBQyxzQkFBc0IsR0FBRzs7S0FFakMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxDQUFDLHNCQUFzQixFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7S0FDM0QsT0FBTyxPQUFPLENBQUM7S0FDZjtJQUNEOzs7R0FHRCxLQUFLLE9BQU8sQ0FBQyxHQUFHO0lBQ2YsQ0FBQyxhQUFhLEVBQUUsUUFBUSxHQUFHLEdBQUcsRUFBRTtLQUMvQixDQUFDLFNBQVMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRzs7SUFFOUMsS0FBSyxRQUFRLEtBQUssQ0FBQyxHQUFHO0tBQ3JCLFVBQVUsR0FBRyxPQUFPLENBQUM7S0FDckIsV0FBVyxHQUFHLFFBQVEsQ0FBQzs7Ozs7O0tBTXZCLE1BQU0sS0FBSyxPQUFPLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsR0FBRzs7O0tBR3pELE1BQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUk7TUFDM0MsR0FBRyxHQUFHLEdBQUcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDO01BQzVDLE1BQU07TUFDTixPQUFPLENBQUMsWUFBWSxFQUFFLElBQUksR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLENBQUM7TUFDOUM7OztLQUdELE1BQU0sR0FBRyxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7S0FDOUIsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7S0FDbEIsUUFBUSxDQUFDLEVBQUUsR0FBRztNQUNiLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxVQUFVLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7TUFDdEQ7S0FDRCxXQUFXLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQzs7O0tBR2pDLFVBQVUsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLFdBQVcsRUFBRSxPQUFPLENBQUMsVUFBVSxFQUFFO01BQzFFLE9BQU8sQ0FBQztLQUNUOztJQUVELEtBQUssV0FBVyxHQUFHO0tBQ2xCLElBQUk7TUFDSCxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU87T0FDbEIsVUFBVSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRTtPQUMxQyxDQUFDO01BQ0YsT0FBTyxPQUFPLENBQUM7TUFDZixDQUFDLFFBQVEsUUFBUSxHQUFHO01BQ3BCLFNBQVM7TUFDVCxLQUFLLEdBQUcsS0FBSyxPQUFPLEdBQUc7T0FDdEIsT0FBTyxDQUFDLGVBQWUsRUFBRSxJQUFJLEVBQUUsQ0FBQztPQUNoQztNQUNEO0tBQ0Q7SUFDRDtHQUNEO0VBQ0Q7OztDQUdELE9BQU8sTUFBTSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7Q0FDekU7Ozs7Ozs7O0FBUUQsU0FBUyxXQUFXLEdBQUc7Q0FDdEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDOztDQUVkLFNBQVMsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLEdBQUc7O0VBRTVCLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsR0FBRzs7R0FFaEQsT0FBTyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7R0FDN0I7RUFDRCxRQUFRLEtBQUssRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsS0FBSyxFQUFFO0VBQ3BDO0NBQ0QsT0FBTyxLQUFLLENBQUM7Q0FDYjs7Ozs7O0FBTUQsU0FBUyxZQUFZLEVBQUUsRUFBRSxHQUFHO0NBQzNCLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUM7Q0FDckIsT0FBTyxFQUFFLENBQUM7Q0FDVjs7Ozs7O0FBTUQsU0FBUyxNQUFNLEVBQUUsRUFBRSxHQUFHO0NBQ3JCLElBQUksRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7O0NBRTVDLElBQUk7RUFDSCxPQUFPLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7RUFDbEIsQ0FBQyxPQUFPLENBQUMsRUFBRTtFQUNYLE9BQU8sS0FBSyxDQUFDO0VBQ2IsU0FBUzs7RUFFVCxLQUFLLEVBQUUsQ0FBQyxVQUFVLEdBQUc7R0FDcEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUM7R0FDaEM7O0VBRUQsRUFBRSxHQUFHLElBQUksQ0FBQztFQUNWO0NBQ0Q7Ozs7Ozs7QUFPRCxTQUFTLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxHQUFHO0NBQ3BDLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0VBQ3pCLENBQUMsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDOztDQUVoQixRQUFRLENBQUMsRUFBRSxHQUFHO0VBQ2IsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUM7RUFDcEM7Q0FDRDs7Ozs7Ozs7QUFRRCxTQUFTLFlBQVksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHO0NBQzdCLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO0VBQ2YsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUM7R0FDakQsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDOzs7Q0FHaEMsS0FBSyxJQUFJLEdBQUc7RUFDWCxPQUFPLElBQUksQ0FBQztFQUNaOzs7Q0FHRCxLQUFLLEdBQUcsR0FBRztFQUNWLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxXQUFXLElBQUk7R0FDakMsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHO0lBQ2hCLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDVjtHQUNEO0VBQ0Q7O0NBRUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQ2xCOzs7Ozs7QUFNRCxTQUFTLGlCQUFpQixFQUFFLElBQUksR0FBRztDQUNsQyxPQUFPLFVBQVUsSUFBSSxHQUFHO0VBQ3ZCLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7RUFDdkMsT0FBTyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDO0VBQzlDLENBQUM7Q0FDRjs7Ozs7O0FBTUQsU0FBUyxrQkFBa0IsRUFBRSxJQUFJLEdBQUc7Q0FDbkMsT0FBTyxVQUFVLElBQUksR0FBRztFQUN2QixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO0VBQ3ZDLE9BQU8sQ0FBQyxJQUFJLEtBQUssT0FBTyxJQUFJLElBQUksS0FBSyxRQUFRLEtBQUssSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUM7RUFDckUsQ0FBQztDQUNGOzs7Ozs7QUFNRCxTQUFTLG9CQUFvQixFQUFFLFFBQVEsR0FBRzs7O0NBR3pDLE9BQU8sVUFBVSxJQUFJLEdBQUc7Ozs7O0VBS3ZCLEtBQUssTUFBTSxJQUFJLElBQUksR0FBRzs7Ozs7Ozs7O0dBU3JCLEtBQUssSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssR0FBRzs7O0lBR2pELEtBQUssT0FBTyxJQUFJLElBQUksR0FBRztLQUN0QixLQUFLLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVSxHQUFHO01BQ2pDLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO01BQzdDLE1BQU07TUFDTixPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxDQUFDO01BQ2xDO0tBQ0Q7Ozs7SUFJRCxPQUFPLElBQUksQ0FBQyxVQUFVLEtBQUssUUFBUTs7OztLQUlsQyxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsUUFBUTtNQUM1QixnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsS0FBSyxRQUFRLENBQUM7SUFDeEM7O0dBRUQsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQzs7Ozs7R0FLbEMsTUFBTSxLQUFLLE9BQU8sSUFBSSxJQUFJLEdBQUc7R0FDN0IsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsQ0FBQztHQUNsQzs7O0VBR0QsT0FBTyxLQUFLLENBQUM7RUFDYixDQUFDO0NBQ0Y7Ozs7OztBQU1ELFNBQVMsc0JBQXNCLEVBQUUsRUFBRSxHQUFHO0NBQ3JDLE9BQU8sWUFBWSxDQUFDLFVBQVUsUUFBUSxHQUFHO0VBQ3hDLFFBQVEsR0FBRyxDQUFDLFFBQVEsQ0FBQztFQUNyQixPQUFPLFlBQVksQ0FBQyxVQUFVLElBQUksRUFBRSxPQUFPLEdBQUc7R0FDN0MsSUFBSSxDQUFDO0lBQ0osWUFBWSxHQUFHLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUU7SUFDOUMsQ0FBQyxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7OztHQUd6QixRQUFRLENBQUMsRUFBRSxHQUFHO0lBQ2IsS0FBSyxJQUFJLEdBQUcsQ0FBQyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO0tBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUNsQztJQUNEO0dBQ0QsQ0FBQyxDQUFDO0VBQ0gsQ0FBQyxDQUFDO0NBQ0g7Ozs7Ozs7QUFPRCxTQUFTLFdBQVcsRUFBRSxPQUFPLEdBQUc7Q0FDL0IsT0FBTyxPQUFPLElBQUksT0FBTyxPQUFPLENBQUMsb0JBQW9CLEtBQUssV0FBVyxJQUFJLE9BQU8sQ0FBQztDQUNqRjs7O0FBR0QsT0FBTyxHQUFHLE1BQU0sQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOzs7Ozs7O0FBTzlCLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLFVBQVUsSUFBSSxHQUFHOzs7Q0FHdkMsSUFBSSxlQUFlLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUUsZUFBZSxDQUFDO0NBQzNFLE9BQU8sZUFBZSxHQUFHLGVBQWUsQ0FBQyxRQUFRLEtBQUssTUFBTSxHQUFHLEtBQUssQ0FBQztDQUNyRSxDQUFDOzs7Ozs7O0FBT0YsV0FBVyxHQUFHLE1BQU0sQ0FBQyxXQUFXLEdBQUcsVUFBVSxJQUFJLEdBQUc7Q0FDbkQsSUFBSSxVQUFVLEVBQUUsU0FBUztFQUN4QixHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxHQUFHLFlBQVksQ0FBQzs7O0NBR3hELEtBQUssR0FBRyxLQUFLLFFBQVEsSUFBSSxHQUFHLENBQUMsUUFBUSxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEdBQUc7RUFDckUsT0FBTyxRQUFRLENBQUM7RUFDaEI7OztDQUdELFFBQVEsR0FBRyxHQUFHLENBQUM7Q0FDZixPQUFPLEdBQUcsUUFBUSxDQUFDLGVBQWUsQ0FBQztDQUNuQyxjQUFjLEdBQUcsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUM7Ozs7Q0FJcEMsS0FBSyxZQUFZLEtBQUssUUFBUTtHQUM1QixTQUFTLEdBQUcsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFNBQVMsQ0FBQyxHQUFHLEtBQUssU0FBUyxHQUFHOzs7RUFHcEUsS0FBSyxTQUFTLENBQUMsZ0JBQWdCLEdBQUc7R0FDakMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFFLENBQUM7OztHQUc3RCxNQUFNLEtBQUssU0FBUyxDQUFDLFdBQVcsR0FBRztHQUNuQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsQ0FBQztHQUNuRDtFQUNEOzs7Ozs7OztDQVFELE9BQU8sQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHO0VBQzFDLEVBQUUsQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDO0VBQ25CLE9BQU8sQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0VBQ3JDLENBQUMsQ0FBQzs7Ozs7O0NBTUgsT0FBTyxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRztFQUNwRCxFQUFFLENBQUMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztFQUM3QyxPQUFPLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztFQUM1QyxDQUFDLENBQUM7OztDQUdILE9BQU8sQ0FBQyxzQkFBc0IsR0FBRyxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDOzs7Ozs7Q0FNakYsT0FBTyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsVUFBVSxFQUFFLEdBQUc7RUFDdkMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDO0VBQ3ZDLE9BQU8sQ0FBQyxRQUFRLENBQUMsaUJBQWlCLElBQUksQ0FBQyxRQUFRLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO0VBQ3BGLENBQUMsQ0FBQzs7O0NBR0gsS0FBSyxPQUFPLENBQUMsT0FBTyxHQUFHO0VBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsVUFBVSxFQUFFLEdBQUc7R0FDbEMsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUM7R0FDaEQsT0FBTyxVQUFVLElBQUksR0FBRztJQUN2QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssTUFBTSxDQUFDO0lBQzFDLENBQUM7R0FDRixDQUFDO0VBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxVQUFVLEVBQUUsRUFBRSxPQUFPLEdBQUc7R0FDekMsS0FBSyxPQUFPLE9BQU8sQ0FBQyxjQUFjLEtBQUssV0FBVyxJQUFJLGNBQWMsR0FBRztJQUN0RSxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3hDLE9BQU8sSUFBSSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBQzVCO0dBQ0QsQ0FBQztFQUNGLE1BQU07RUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLFVBQVUsRUFBRSxHQUFHO0dBQ25DLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxDQUFDO0dBQ2hELE9BQU8sVUFBVSxJQUFJLEdBQUc7SUFDdkIsSUFBSSxJQUFJLEdBQUcsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssV0FBVztLQUN0RCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsT0FBTyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUM7SUFDckMsQ0FBQztHQUNGLENBQUM7Ozs7RUFJRixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsRUFBRSxFQUFFLE9BQU8sR0FBRztHQUN6QyxLQUFLLE9BQU8sT0FBTyxDQUFDLGNBQWMsS0FBSyxXQUFXLElBQUksY0FBYyxHQUFHO0lBQ3RFLElBQUksSUFBSSxFQUFFLENBQUMsRUFBRSxLQUFLO0tBQ2pCLElBQUksR0FBRyxPQUFPLENBQUMsY0FBYyxFQUFFLEVBQUUsRUFBRSxDQUFDOztJQUVyQyxLQUFLLElBQUksR0FBRzs7O0tBR1gsSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUNuQyxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEVBQUUsR0FBRztNQUNoQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7TUFDaEI7OztLQUdELEtBQUssR0FBRyxPQUFPLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxFQUFFLENBQUM7S0FDeEMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNOLFNBQVMsSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJO01BQzdCLElBQUksR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDbkMsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLEdBQUc7T0FDaEMsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDO09BQ2hCO01BQ0Q7S0FDRDs7SUFFRCxPQUFPLEVBQUUsQ0FBQztJQUNWO0dBQ0QsQ0FBQztFQUNGOzs7Q0FHRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0I7RUFDOUMsVUFBVSxHQUFHLEVBQUUsT0FBTyxHQUFHO0dBQ3hCLEtBQUssT0FBTyxPQUFPLENBQUMsb0JBQW9CLEtBQUssV0FBVyxHQUFHO0lBQzFELE9BQU8sT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxDQUFDOzs7SUFHM0MsTUFBTSxLQUFLLE9BQU8sQ0FBQyxHQUFHLEdBQUc7SUFDekIsT0FBTyxPQUFPLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDdkM7R0FDRDs7RUFFRCxVQUFVLEdBQUcsRUFBRSxPQUFPLEdBQUc7R0FDeEIsSUFBSSxJQUFJO0lBQ1AsR0FBRyxHQUFHLEVBQUU7SUFDUixDQUFDLEdBQUcsQ0FBQzs7SUFFTCxPQUFPLEdBQUcsT0FBTyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRSxDQUFDOzs7R0FHL0MsS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHO0lBQ2xCLFNBQVMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJO0tBQy9CLEtBQUssSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLEdBQUc7TUFDMUIsR0FBRyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztNQUNqQjtLQUNEOztJQUVELE9BQU8sR0FBRyxDQUFDO0lBQ1g7R0FDRCxPQUFPLE9BQU8sQ0FBQztHQUNmLENBQUM7OztDQUdILElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLHNCQUFzQixJQUFJLFVBQVUsU0FBUyxFQUFFLE9BQU8sR0FBRztFQUNyRixLQUFLLE9BQU8sT0FBTyxDQUFDLHNCQUFzQixLQUFLLFdBQVcsSUFBSSxjQUFjLEdBQUc7R0FDOUUsT0FBTyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsU0FBUyxFQUFFLENBQUM7R0FDbkQ7RUFDRCxDQUFDOzs7Ozs7OztDQVFGLGFBQWEsR0FBRyxFQUFFLENBQUM7Ozs7Ozs7Q0FPbkIsU0FBUyxHQUFHLEVBQUUsQ0FBQzs7Q0FFZixNQUFNLE9BQU8sQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsSUFBSTs7O0VBR2hFLE1BQU0sQ0FBQyxVQUFVLEVBQUUsR0FBRzs7Ozs7O0dBTXJCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxFQUFFLENBQUMsU0FBUyxHQUFHLFNBQVMsR0FBRyxPQUFPLEdBQUcsUUFBUTtJQUNuRSxjQUFjLEdBQUcsT0FBTyxHQUFHLDJCQUEyQjtJQUN0RCx3Q0FBd0MsQ0FBQzs7Ozs7O0dBTTFDLEtBQUssRUFBRSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUMsTUFBTSxHQUFHO0lBQ3pELFNBQVMsQ0FBQyxJQUFJLEVBQUUsUUFBUSxHQUFHLFVBQVUsR0FBRyxjQUFjLEVBQUUsQ0FBQztJQUN6RDs7OztHQUlELEtBQUssQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHO0lBQ2hELFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLFVBQVUsR0FBRyxZQUFZLEdBQUcsUUFBUSxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQ3JFOzs7R0FHRCxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLE9BQU8sR0FBRyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHO0lBQzlELFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckI7Ozs7O0dBS0QsS0FBSyxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEdBQUc7SUFDOUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzQjs7Ozs7R0FLRCxLQUFLLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLElBQUksR0FBRyxPQUFPLEdBQUcsSUFBSSxFQUFFLENBQUMsTUFBTSxHQUFHO0lBQzNELFNBQVMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0I7R0FDRCxDQUFDLENBQUM7O0VBRUgsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHO0dBQ3JCLEVBQUUsQ0FBQyxTQUFTLEdBQUcscUNBQXFDO0lBQ25ELGdEQUFnRCxDQUFDOzs7O0dBSWxELElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7R0FDNUMsS0FBSyxDQUFDLFlBQVksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUM7R0FDdkMsRUFBRSxDQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDOzs7O0dBSXBELEtBQUssRUFBRSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sR0FBRztJQUM3QyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sR0FBRyxVQUFVLEdBQUcsYUFBYSxFQUFFLENBQUM7SUFDdEQ7Ozs7R0FJRCxLQUFLLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxHQUFHO0lBQ25ELFNBQVMsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQzFDOzs7O0dBSUQsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO0dBQzFDLEtBQUssRUFBRSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEdBQUc7SUFDcEQsU0FBUyxDQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLENBQUM7SUFDMUM7OztHQUdELEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztHQUM1QixTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0dBQ3ZCLENBQUMsQ0FBQztFQUNIOztDQUVELE1BQU0sT0FBTyxDQUFDLGVBQWUsR0FBRyxPQUFPLENBQUMsSUFBSSxHQUFHLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTztFQUN2RSxPQUFPLENBQUMscUJBQXFCO0VBQzdCLE9BQU8sQ0FBQyxrQkFBa0I7RUFDMUIsT0FBTyxDQUFDLGdCQUFnQjtFQUN4QixPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSTs7RUFFaEMsTUFBTSxDQUFDLFVBQVUsRUFBRSxHQUFHOzs7R0FHckIsT0FBTyxDQUFDLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDOzs7O0dBSXBELE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDO0dBQ2hDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxDQUFDO0dBQ3BDLENBQUMsQ0FBQztFQUNIOztDQUVELFNBQVMsR0FBRyxTQUFTLENBQUMsTUFBTSxJQUFJLElBQUksTUFBTSxFQUFFLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztDQUNsRSxhQUFhLEdBQUcsYUFBYSxDQUFDLE1BQU0sSUFBSSxJQUFJLE1BQU0sRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Ozs7Q0FJOUUsVUFBVSxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLHVCQUF1QixFQUFFLENBQUM7Ozs7O0NBSzdELFFBQVEsR0FBRyxVQUFVLElBQUksT0FBTyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsUUFBUSxFQUFFO0VBQ3hELFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRztHQUNoQixJQUFJLEtBQUssR0FBRyxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxHQUFHLENBQUM7SUFDbkQsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDO0dBQ3pCLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxRQUFRLEtBQUssQ0FBQztJQUNoRCxLQUFLLENBQUMsUUFBUTtLQUNiLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO0tBQ3JCLENBQUMsQ0FBQyx1QkFBdUIsSUFBSSxDQUFDLENBQUMsdUJBQXVCLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRTtJQUNuRSxDQUFDLENBQUM7R0FDSDtFQUNELFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRztHQUNoQixLQUFLLENBQUMsR0FBRztJQUNSLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLElBQUk7S0FDNUIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHO01BQ2QsT0FBTyxJQUFJLENBQUM7TUFDWjtLQUNEO0lBQ0Q7R0FDRCxPQUFPLEtBQUssQ0FBQztHQUNiLENBQUM7Ozs7OztDQU1ILFNBQVMsR0FBRyxVQUFVO0NBQ3RCLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRzs7O0VBR2hCLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRztHQUNkLFlBQVksR0FBRyxJQUFJLENBQUM7R0FDcEIsT0FBTyxDQUFDLENBQUM7R0FDVDs7O0VBR0QsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLEdBQUcsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUM7RUFDdEUsS0FBSyxPQUFPLEdBQUc7R0FDZCxPQUFPLE9BQU8sQ0FBQztHQUNmOzs7RUFHRCxPQUFPLEdBQUcsRUFBRSxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsYUFBYSxJQUFJLENBQUMsRUFBRTtHQUM5RCxDQUFDLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxFQUFFOzs7R0FHOUIsQ0FBQyxDQUFDOzs7RUFHSCxLQUFLLE9BQU8sR0FBRyxDQUFDO0lBQ2QsQ0FBQyxPQUFPLENBQUMsWUFBWSxJQUFJLENBQUMsQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLEVBQUUsS0FBSyxPQUFPLENBQUMsR0FBRzs7O0dBR3hFLEtBQUssQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsYUFBYSxLQUFLLFlBQVksSUFBSSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxHQUFHO0lBQ3RGLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDVjtHQUNELEtBQUssQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsYUFBYSxLQUFLLFlBQVksSUFBSSxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxHQUFHO0lBQ3RGLE9BQU8sQ0FBQyxDQUFDO0lBQ1Q7OztHQUdELE9BQU8sU0FBUztNQUNiLE9BQU8sRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLEdBQUcsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUU7SUFDbkQsQ0FBQyxDQUFDO0dBQ0g7O0VBRUQsT0FBTyxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUM1QjtDQUNELFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRzs7RUFFaEIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHO0dBQ2QsWUFBWSxHQUFHLElBQUksQ0FBQztHQUNwQixPQUFPLENBQUMsQ0FBQztHQUNUOztFQUVELElBQUksR0FBRztHQUNOLENBQUMsR0FBRyxDQUFDO0dBQ0wsR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVO0dBQ2xCLEdBQUcsR0FBRyxDQUFDLENBQUMsVUFBVTtHQUNsQixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUU7R0FDVixFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQzs7O0VBR1osS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsR0FBRztHQUNuQixPQUFPLENBQUMsS0FBSyxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBQ3pCLENBQUMsS0FBSyxRQUFRLEdBQUcsQ0FBQztJQUNsQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ1IsR0FBRyxHQUFHLENBQUM7SUFDUCxTQUFTO01BQ1AsT0FBTyxFQUFFLFNBQVMsRUFBRSxDQUFDLEVBQUUsR0FBRyxPQUFPLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRTtJQUNuRCxDQUFDLENBQUM7OztHQUdILE1BQU0sS0FBSyxHQUFHLEtBQUssR0FBRyxHQUFHO0dBQ3pCLE9BQU8sWUFBWSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztHQUM1Qjs7O0VBR0QsR0FBRyxHQUFHLENBQUMsQ0FBQztFQUNSLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLElBQUk7R0FDaEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQztHQUNsQjtFQUNELEdBQUcsR0FBRyxDQUFDLENBQUM7RUFDUixTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsVUFBVSxJQUFJO0dBQ2hDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7R0FDbEI7OztFQUdELFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRztHQUN6QixDQUFDLEVBQUUsQ0FBQztHQUNKOztFQUVELE9BQU8sQ0FBQzs7R0FFUCxZQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTs7O0dBRzVCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0dBQzNCLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxZQUFZLEdBQUcsQ0FBQztHQUMxQixDQUFDLENBQUM7RUFDSCxDQUFDOztDQUVGLE9BQU8sUUFBUSxDQUFDO0NBQ2hCLENBQUM7O0FBRUYsTUFBTSxDQUFDLE9BQU8sR0FBRyxVQUFVLElBQUksRUFBRSxRQUFRLEdBQUc7Q0FDM0MsT0FBTyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLENBQUM7Q0FDNUMsQ0FBQzs7QUFFRixNQUFNLENBQUMsZUFBZSxHQUFHLFVBQVUsSUFBSSxFQUFFLElBQUksR0FBRzs7Q0FFL0MsS0FBSyxFQUFFLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxPQUFPLFFBQVEsR0FBRztFQUNsRCxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7RUFDcEI7OztDQUdELElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxDQUFDOztDQUVsRCxLQUFLLE9BQU8sQ0FBQyxlQUFlLElBQUksY0FBYztFQUM3QyxDQUFDLGFBQWEsRUFBRSxJQUFJLEdBQUcsR0FBRyxFQUFFO0lBQzFCLENBQUMsYUFBYSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtJQUMvQyxDQUFDLFNBQVMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRzs7RUFFaEQsSUFBSTtHQUNILElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOzs7R0FHckMsS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLGlCQUFpQjs7O0tBR25DLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEtBQUssRUFBRSxHQUFHO0lBQ2xELE9BQU8sR0FBRyxDQUFDO0lBQ1g7R0FDRCxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUU7RUFDZDs7Q0FFRCxPQUFPLE1BQU0sRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztDQUMzRCxDQUFDOztBQUVGLE1BQU0sQ0FBQyxRQUFRLEdBQUcsVUFBVSxPQUFPLEVBQUUsSUFBSSxHQUFHOztDQUUzQyxLQUFLLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxPQUFPLE9BQU8sUUFBUSxHQUFHO0VBQ3hELFdBQVcsRUFBRSxPQUFPLEVBQUUsQ0FBQztFQUN2QjtDQUNELE9BQU8sUUFBUSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztDQUNqQyxDQUFDOztBQUVGLE1BQU0sQ0FBQyxJQUFJLEdBQUcsVUFBVSxJQUFJLEVBQUUsSUFBSSxHQUFHOztDQUVwQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLE9BQU8sUUFBUSxHQUFHO0VBQ2xELFdBQVcsRUFBRSxJQUFJLEVBQUUsQ0FBQztFQUNwQjs7Q0FFRCxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTs7RUFFN0MsR0FBRyxHQUFHLEVBQUUsSUFBSSxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO0dBQzdELEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFO0dBQ2pDLFNBQVMsQ0FBQzs7Q0FFWixPQUFPLEdBQUcsS0FBSyxTQUFTO0VBQ3ZCLEdBQUc7RUFDSCxPQUFPLENBQUMsVUFBVSxJQUFJLENBQUMsY0FBYztHQUNwQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksRUFBRTtHQUN6QixDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLFNBQVM7SUFDbkQsR0FBRyxDQUFDLEtBQUs7SUFDVCxJQUFJLENBQUM7Q0FDUixDQUFDOztBQUVGLE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVSxHQUFHLEdBQUc7Q0FDL0IsT0FBTyxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQztDQUNwRCxDQUFDOztBQUVGLE1BQU0sQ0FBQyxLQUFLLEdBQUcsVUFBVSxHQUFHLEdBQUc7Q0FDOUIsTUFBTSxJQUFJLEtBQUssRUFBRSx5Q0FBeUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztDQUNuRSxDQUFDOzs7Ozs7QUFNRixNQUFNLENBQUMsVUFBVSxHQUFHLFVBQVUsT0FBTyxHQUFHO0NBQ3ZDLElBQUksSUFBSTtFQUNQLFVBQVUsR0FBRyxFQUFFO0VBQ2YsQ0FBQyxHQUFHLENBQUM7RUFDTCxDQUFDLEdBQUcsQ0FBQyxDQUFDOzs7Q0FHUCxZQUFZLEdBQUcsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUM7Q0FDekMsU0FBUyxHQUFHLENBQUMsT0FBTyxDQUFDLFVBQVUsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO0NBQ3RELE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUM7O0NBRTFCLEtBQUssWUFBWSxHQUFHO0VBQ25CLFNBQVMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJO0dBQy9CLEtBQUssSUFBSSxLQUFLLE9BQU8sRUFBRSxDQUFDLEVBQUUsR0FBRztJQUM1QixDQUFDLEdBQUcsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQztJQUN6QjtHQUNEO0VBQ0QsUUFBUSxDQUFDLEVBQUUsR0FBRztHQUNiLE9BQU8sQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDO0dBQ3JDO0VBQ0Q7Ozs7Q0FJRCxTQUFTLEdBQUcsSUFBSSxDQUFDOztDQUVqQixPQUFPLE9BQU8sQ0FBQztDQUNmLENBQUM7Ozs7OztBQU1GLE9BQU8sR0FBRyxNQUFNLENBQUMsT0FBTyxHQUFHLFVBQVUsSUFBSSxHQUFHO0NBQzNDLElBQUksSUFBSTtFQUNQLEdBQUcsR0FBRyxFQUFFO0VBQ1IsQ0FBQyxHQUFHLENBQUM7RUFDTCxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7Q0FFMUIsS0FBSyxDQUFDLFFBQVEsR0FBRzs7RUFFaEIsU0FBUyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUk7O0dBRTVCLEdBQUcsSUFBSSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUM7R0FDdkI7RUFDRCxNQUFNLEtBQUssUUFBUSxLQUFLLENBQUMsSUFBSSxRQUFRLEtBQUssQ0FBQyxJQUFJLFFBQVEsS0FBSyxFQUFFLEdBQUc7OztFQUdqRSxLQUFLLE9BQU8sSUFBSSxDQUFDLFdBQVcsS0FBSyxRQUFRLEdBQUc7R0FDM0MsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO0dBQ3hCLE1BQU07O0dBRU4sTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLEdBQUc7SUFDN0QsR0FBRyxJQUFJLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUN2QjtHQUNEO0VBQ0QsTUFBTSxLQUFLLFFBQVEsS0FBSyxDQUFDLElBQUksUUFBUSxLQUFLLENBQUMsR0FBRztFQUM5QyxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7RUFDdEI7OztDQUdELE9BQU8sR0FBRyxDQUFDO0NBQ1gsQ0FBQzs7QUFFRixJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsR0FBRzs7O0NBR3pCLFdBQVcsRUFBRSxFQUFFOztDQUVmLFlBQVksRUFBRSxZQUFZOztDQUUxQixLQUFLLEVBQUUsU0FBUzs7Q0FFaEIsVUFBVSxFQUFFLEVBQUU7O0NBRWQsSUFBSSxFQUFFLEVBQUU7O0NBRVIsUUFBUSxFQUFFO0VBQ1QsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0VBQ3ZDLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxZQUFZLEVBQUU7RUFDMUIsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7RUFDNUMsR0FBRyxFQUFFLEVBQUUsR0FBRyxFQUFFLGlCQUFpQixFQUFFO0VBQy9COztDQUVELFNBQVMsRUFBRTtFQUNWLE1BQU0sRUFBRSxVQUFVLEtBQUssR0FBRztHQUN6QixLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLENBQUM7OztHQUdwRCxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQzs7R0FFdEYsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxHQUFHO0lBQ3hCLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUNoQzs7R0FFRCxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDO0dBQzNCOztFQUVELE9BQU8sRUFBRSxVQUFVLEtBQUssR0FBRzs7Ozs7Ozs7Ozs7R0FXMUIsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzs7R0FFbEMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLLEdBQUc7O0lBRXZDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUc7S0FDaEIsTUFBTSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUN6Qjs7OztJQUlELEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRSxDQUFDO0lBQzFHLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUM7OztJQUc5RCxNQUFNLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHO0lBQ3RCLE1BQU0sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDekI7O0dBRUQsT0FBTyxLQUFLLENBQUM7R0FDYjs7RUFFRCxRQUFRLEVBQUUsVUFBVSxLQUFLLEdBQUc7R0FDM0IsSUFBSSxNQUFNO0lBQ1QsUUFBUSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQzs7R0FFbEMsS0FBSyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHO0lBQzFDLE9BQU8sSUFBSSxDQUFDO0lBQ1o7OztHQUdELEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHO0lBQ2YsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDOzs7SUFHdEMsTUFBTSxLQUFLLFFBQVEsSUFBSSxPQUFPLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRTs7S0FFOUMsTUFBTSxHQUFHLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7O0tBRXBDLE1BQU0sR0FBRyxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsTUFBTSxHQUFHLE1BQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRzs7O0lBR2pGLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUN2QyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsTUFBTSxFQUFFLENBQUM7SUFDdkM7OztHQUdELE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7R0FDM0I7RUFDRDs7Q0FFRCxNQUFNLEVBQUU7O0VBRVAsS0FBSyxFQUFFLFVBQVUsZ0JBQWdCLEdBQUc7R0FDbkMsSUFBSSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztHQUM5RSxPQUFPLGdCQUFnQixLQUFLLEdBQUc7SUFDOUIsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUU7SUFDM0IsVUFBVSxJQUFJLEdBQUc7S0FDaEIsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLEtBQUssUUFBUSxDQUFDO0tBQ2pFLENBQUM7R0FDSDs7RUFFRCxPQUFPLEVBQUUsVUFBVSxTQUFTLEdBQUc7R0FDOUIsSUFBSSxPQUFPLEdBQUcsVUFBVSxFQUFFLFNBQVMsR0FBRyxHQUFHLEVBQUUsQ0FBQzs7R0FFNUMsT0FBTyxPQUFPO0lBQ2IsQ0FBQyxPQUFPLEdBQUcsSUFBSSxNQUFNLEVBQUUsS0FBSyxHQUFHLFVBQVUsR0FBRyxHQUFHLEdBQUcsU0FBUyxHQUFHLEdBQUcsR0FBRyxVQUFVLEdBQUcsS0FBSyxFQUFFO0lBQ3hGLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVSxJQUFJLEdBQUc7S0FDdkMsT0FBTyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxPQUFPLElBQUksQ0FBQyxZQUFZLEtBQUssV0FBVyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUM7S0FDNUosQ0FBQyxDQUFDO0dBQ0o7O0VBRUQsTUFBTSxFQUFFLFVBQVUsSUFBSSxFQUFFLFFBQVEsRUFBRSxLQUFLLEdBQUc7R0FDekMsT0FBTyxVQUFVLElBQUksR0FBRztJQUN2QixJQUFJLE1BQU0sR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQzs7SUFFdkMsS0FBSyxNQUFNLElBQUksSUFBSSxHQUFHO0tBQ3JCLE9BQU8sUUFBUSxLQUFLLElBQUksQ0FBQztLQUN6QjtJQUNELEtBQUssQ0FBQyxRQUFRLEdBQUc7S0FDaEIsT0FBTyxJQUFJLENBQUM7S0FDWjs7SUFFRCxNQUFNLElBQUksRUFBRSxDQUFDOztJQUViLE9BQU8sUUFBUSxLQUFLLEdBQUcsR0FBRyxNQUFNLEtBQUssS0FBSztLQUN6QyxRQUFRLEtBQUssSUFBSSxHQUFHLE1BQU0sS0FBSyxLQUFLO0tBQ3BDLFFBQVEsS0FBSyxJQUFJLEdBQUcsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztLQUMxRCxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUN6RCxRQUFRLEtBQUssSUFBSSxHQUFHLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEtBQUs7S0FDcEUsUUFBUSxLQUFLLElBQUksR0FBRyxFQUFFLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxFQUFFLFdBQVcsRUFBRSxHQUFHLEVBQUUsR0FBRyxHQUFHLEdBQUcsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM1RixRQUFRLEtBQUssSUFBSSxHQUFHLE1BQU0sS0FBSyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsS0FBSyxLQUFLLEdBQUcsR0FBRztLQUMzRixLQUFLLENBQUM7SUFDUCxDQUFDO0dBQ0Y7O0VBRUQsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksR0FBRztHQUN0RCxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxLQUFLO0lBQ3hDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssTUFBTTtJQUNyQyxNQUFNLEdBQUcsSUFBSSxLQUFLLFNBQVMsQ0FBQzs7R0FFN0IsT0FBTyxLQUFLLEtBQUssQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDOzs7SUFHL0IsVUFBVSxJQUFJLEdBQUc7S0FDaEIsT0FBTyxDQUFDLENBQUMsSUFBSSxD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QU0sSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUc7T0FDM0IsS0FBSyxPQUFPLEVBQUUsSUFBSSxFQUFFLEdBQUc7UUFDdEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDOzs7UUFHbEMsTUFBTTtRQUNOLE1BQU0sQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDOUM7T0FDRDtNQUNEOzs7O0tBSUQsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUM7S0FDckM7SUFDRCxLQUFLLElBQUksRUFBRSxRQUFRLENBQUMsT0FBTyxFQUFFLEdBQUc7Ozs7S0FJL0IsSUFBSSxFQUFFLFFBQVEsQ0FBQyxPQUFPLEVBQUUsR0FBRyxTQUFTLENBQUM7S0FDckM7SUFDRDtHQUNEO0VBQ0Q7Q0FDRCxFQUFFLENBQUM7O0FBRUosTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUU7Q0FDakIsTUFBTSxFQUFFLFVBQVUsUUFBUSxHQUFHO0VBQzVCLE9BQU8sTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7RUFDdEM7O0NBRUQsTUFBTSxFQUFFLFVBQVUsUUFBUSxHQUFHO0VBQzVCLE9BQU8sTUFBTSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsQ0FBQztFQUNoQzs7Q0FFRCxJQUFJLEVBQUUsVUFBVSxLQUFLLEdBQUc7RUFDdkIsT0FBTyxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsS0FBSyxHQUFHO0dBQ3RDLE9BQU8sS0FBSyxLQUFLLFNBQVM7SUFDekIsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7SUFDbkIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksRUFBRSxXQUFXO0tBQzdCLEtBQUssSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxFQUFFLElBQUksSUFBSSxDQUFD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QUFJLEdBQUcsS0FBSyxJQUFJLEtBQUssRUFBRTtJQUNqQyxFQUFFLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLE9BQU8sU0FBUyxHQUFHOztJQUU1RCxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDO0lBQ3RCOztHQUVELE1BQU07OztHQUdOLEtBQUssS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLO0lBQzNCLEVBQUUsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsT0FBTyxTQUFTLEdBQUc7O0lBRTFELE9BQU8sR0FBRyxDQUFDO0lBQ1g7OztHQUdELE9BQU8sS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO0dBQ3JCO0VBQ0Q7O0NBRUQsR0FBRyxFQUFFLFVBQVUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxHQUFHO0VBQzFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLO0dBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxDQUFDOzs7RUFHckMsSUFBSSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFO0tBQy9CLE1BQU0sQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsY0FBYyxFQUFFLFFBQVEsRUFBRSxJQUFJLFFBQVEsRUFBRSxDQUFDOzs7RUFHMUUsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQzs7O0VBRy9ELEtBQUssS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLEdBQUc7R0FDOUIsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQztHQUNyQzs7O0VBR0QsS0FBSyxHQUFHLEtBQUssU0FBUyxHQUFHO0dBQ3hCLEdBQUcs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RUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEdBQUc7SUFDN0UsT0FBTyxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNoQzs7Ozs7O0dBTUQsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDOzs7R0FHbEQsT0FBTyxDQUFDLE1BQU0sSUFBSSxNQUFNLEtBQUssTUFBTSxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUM7R0FDakQ7RUFDRCxHQUFHLEVBQUUsVUFBVSxLQUFLLEdBQUc7Ozs7O0dBS3RCLEtBQUssTUFBTSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxHQUFHO0lBQ25DLE1BQU0sQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQztJQUN0QyxNQUFNLEtBQUssS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQztNQUNsQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLElBQUk7S0FDMUQsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUUsR0FBRztJQUNuQyxNQUFNLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMvRCxNQUFNO0lBQ04sS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FB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LElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDOzs7R0FHbkIsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDOztHQUUvQixLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxHQUFHO0lBQzFCLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM5Qjs7O0dBR0QsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsSUFBSTtJQUN2QyxLQUFLLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxJQUFJLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLEtBQUssSUFBSSxHQUFHO0tBQ3RFLE1BQU0sRUFBRSxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0tBQ2xDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDO0tBQzFCO0lBQ0Q7OztHQUdELE1BQU0sS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHO0lBQzFDLEtBQUssS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxNQUFNLEdBQUc7S0FDOUMsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7S0FDbkM7SUFDRDs7O0dBR0QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0dBQ25CLEVBQUUsQ0FBQztFQUNKO0NBQ0QsRUFBRSxDQUFDOztBQUVKLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxFQUFFLFVBQVUsQ0FBQyxFQUFFLElBQUksR0FBRztDQUM5RCxJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxF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
