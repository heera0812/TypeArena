
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model PlayerSession
 * 
 */
export type PlayerSession = $Result.DefaultSelection<Prisma.$PlayerSessionPayload>
/**
 * Model Competition
 * 
 */
export type Competition = $Result.DefaultSelection<Prisma.$CompetitionPayload>
/**
 * Model CompetitionParticipant
 * 
 */
export type CompetitionParticipant = $Result.DefaultSelection<Prisma.$CompetitionParticipantPayload>
/**
 * Model Paragraph
 * 
 */
export type Paragraph = $Result.DefaultSelection<Prisma.$ParagraphPayload>
/**
 * Model Result
 * 
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.playerSession`: Exposes CRUD operations for the **PlayerSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlayerSessions
    * const playerSessions = await prisma.playerSession.findMany()
    * ```
    */
  get playerSession(): Prisma.PlayerSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competition`: Exposes CRUD operations for the **Competition** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Competitions
    * const competitions = await prisma.competition.findMany()
    * ```
    */
  get competition(): Prisma.CompetitionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.competitionParticipant`: Exposes CRUD operations for the **CompetitionParticipant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompetitionParticipants
    * const competitionParticipants = await prisma.competitionParticipant.findMany()
    * ```
    */
  get competitionParticipant(): Prisma.CompetitionParticipantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paragraph`: Exposes CRUD operations for the **Paragraph** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paragraphs
    * const paragraphs = await prisma.paragraph.findMany()
    * ```
    */
  get paragraph(): Prisma.ParagraphDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    PlayerSession: 'PlayerSession',
    Competition: 'Competition',
    CompetitionParticipant: 'CompetitionParticipant',
    Paragraph: 'Paragraph',
    Result: 'Result'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "playerSession" | "competition" | "competitionParticipant" | "paragraph" | "result"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      PlayerSession: {
        payload: Prisma.$PlayerSessionPayload<ExtArgs>
        fields: Prisma.PlayerSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          findFirst: {
            args: Prisma.PlayerSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          findMany: {
            args: Prisma.PlayerSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>[]
          }
          create: {
            args: Prisma.PlayerSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          createMany: {
            args: Prisma.PlayerSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>[]
          }
          delete: {
            args: Prisma.PlayerSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          update: {
            args: Prisma.PlayerSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          deleteMany: {
            args: Prisma.PlayerSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>[]
          }
          upsert: {
            args: Prisma.PlayerSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerSessionPayload>
          }
          aggregate: {
            args: Prisma.PlayerSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayerSession>
          }
          groupBy: {
            args: Prisma.PlayerSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerSessionCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerSessionCountAggregateOutputType> | number
          }
        }
      }
      Competition: {
        payload: Prisma.$CompetitionPayload<ExtArgs>
        fields: Prisma.CompetitionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findFirst: {
            args: Prisma.CompetitionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          findMany: {
            args: Prisma.CompetitionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          create: {
            args: Prisma.CompetitionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          createMany: {
            args: Prisma.CompetitionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          delete: {
            args: Prisma.CompetitionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          update: {
            args: Prisma.CompetitionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionPayload>
          }
          aggregate: {
            args: Prisma.CompetitionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetition>
          }
          groupBy: {
            args: Prisma.CompetitionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionCountAggregateOutputType> | number
          }
        }
      }
      CompetitionParticipant: {
        payload: Prisma.$CompetitionParticipantPayload<ExtArgs>
        fields: Prisma.CompetitionParticipantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompetitionParticipantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompetitionParticipantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          findFirst: {
            args: Prisma.CompetitionParticipantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompetitionParticipantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          findMany: {
            args: Prisma.CompetitionParticipantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>[]
          }
          create: {
            args: Prisma.CompetitionParticipantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          createMany: {
            args: Prisma.CompetitionParticipantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompetitionParticipantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>[]
          }
          delete: {
            args: Prisma.CompetitionParticipantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          update: {
            args: Prisma.CompetitionParticipantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          deleteMany: {
            args: Prisma.CompetitionParticipantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompetitionParticipantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompetitionParticipantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>[]
          }
          upsert: {
            args: Prisma.CompetitionParticipantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompetitionParticipantPayload>
          }
          aggregate: {
            args: Prisma.CompetitionParticipantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompetitionParticipant>
          }
          groupBy: {
            args: Prisma.CompetitionParticipantGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompetitionParticipantGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompetitionParticipantCountArgs<ExtArgs>
            result: $Utils.Optional<CompetitionParticipantCountAggregateOutputType> | number
          }
        }
      }
      Paragraph: {
        payload: Prisma.$ParagraphPayload<ExtArgs>
        fields: Prisma.ParagraphFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ParagraphFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ParagraphFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          findFirst: {
            args: Prisma.ParagraphFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ParagraphFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          findMany: {
            args: Prisma.ParagraphFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>[]
          }
          create: {
            args: Prisma.ParagraphCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          createMany: {
            args: Prisma.ParagraphCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ParagraphCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>[]
          }
          delete: {
            args: Prisma.ParagraphDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          update: {
            args: Prisma.ParagraphUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          deleteMany: {
            args: Prisma.ParagraphDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ParagraphUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ParagraphUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>[]
          }
          upsert: {
            args: Prisma.ParagraphUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ParagraphPayload>
          }
          aggregate: {
            args: Prisma.ParagraphAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateParagraph>
          }
          groupBy: {
            args: Prisma.ParagraphGroupByArgs<ExtArgs>
            result: $Utils.Optional<ParagraphGroupByOutputType>[]
          }
          count: {
            args: Prisma.ParagraphCountArgs<ExtArgs>
            result: $Utils.Optional<ParagraphCountAggregateOutputType> | number
          }
        }
      }
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResultCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResultUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    playerSession?: PlayerSessionOmit
    competition?: CompetitionOmit
    competitionParticipant?: CompetitionParticipantOmit
    paragraph?: ParagraphOmit
    result?: ResultOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AdminCountOutputType
   */

  export type AdminCountOutputType = {
    competitions: number
  }

  export type AdminCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitions?: boolean | AdminCountOutputTypeCountCompetitionsArgs
  }

  // Custom InputTypes
  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminCountOutputType
     */
    select?: AdminCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminCountOutputType without action
   */
  export type AdminCountOutputTypeCountCompetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
  }


  /**
   * Count Type PlayerSessionCountOutputType
   */

  export type PlayerSessionCountOutputType = {
    participations: number
  }

  export type PlayerSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participations?: boolean | PlayerSessionCountOutputTypeCountParticipationsArgs
  }

  // Custom InputTypes
  /**
   * PlayerSessionCountOutputType without action
   */
  export type PlayerSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSessionCountOutputType
     */
    select?: PlayerSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerSessionCountOutputType without action
   */
  export type PlayerSessionCountOutputTypeCountParticipationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionParticipantWhereInput
  }


  /**
   * Count Type CompetitionCountOutputType
   */

  export type CompetitionCountOutputType = {
    participants: number
    results: number
  }

  export type CompetitionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participants?: boolean | CompetitionCountOutputTypeCountParticipantsArgs
    results?: boolean | CompetitionCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionCountOutputType
     */
    select?: CompetitionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountParticipantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionParticipantWhereInput
  }

  /**
   * CompetitionCountOutputType without action
   */
  export type CompetitionCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }


  /**
   * Count Type CompetitionParticipantCountOutputType
   */

  export type CompetitionParticipantCountOutputType = {
    results: number
  }

  export type CompetitionParticipantCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    results?: boolean | CompetitionParticipantCountOutputTypeCountResultsArgs
  }

  // Custom InputTypes
  /**
   * CompetitionParticipantCountOutputType without action
   */
  export type CompetitionParticipantCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipantCountOutputType
     */
    select?: CompetitionParticipantCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompetitionParticipantCountOutputType without action
   */
  export type CompetitionParticipantCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }


  /**
   * Count Type ParagraphCountOutputType
   */

  export type ParagraphCountOutputType = {
    competitions: number
  }

  export type ParagraphCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitions?: boolean | ParagraphCountOutputTypeCountCompetitionsArgs
  }

  // Custom InputTypes
  /**
   * ParagraphCountOutputType without action
   */
  export type ParagraphCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ParagraphCountOutputType
     */
    select?: ParagraphCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ParagraphCountOutputType without action
   */
  export type ParagraphCountOutputTypeCountCompetitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    username: string | null
    passwordHash: string | null
    createdAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    username: number
    passwordHash: number
    createdAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    username?: true
    passwordHash?: true
    createdAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    username: string
    passwordHash: string
    createdAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
    competitions?: boolean | Admin$competitionsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    username?: boolean
    passwordHash?: boolean
    createdAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "passwordHash" | "createdAt", ExtArgs["result"]["admin"]>
  export type AdminInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitions?: boolean | Admin$competitionsArgs<ExtArgs>
    _count?: boolean | AdminCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {
      competitions: Prisma.$CompetitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      passwordHash: string
      createdAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competitions<T extends Admin$competitionsArgs<ExtArgs> = {}>(args?: Subset<T, Admin$competitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly username: FieldRef<"Admin", 'String'>
    readonly passwordHash: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin.competitions
   */
  export type Admin$competitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    cursor?: CompetitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminInclude<ExtArgs> | null
  }


  /**
   * Model PlayerSession
   */

  export type AggregatePlayerSession = {
    _count: PlayerSessionCountAggregateOutputType | null
    _min: PlayerSessionMinAggregateOutputType | null
    _max: PlayerSessionMaxAggregateOutputType | null
  }

  export type PlayerSessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    name: string | null
    scholarNumber: string | null
    mandal: string | null
    semester: string | null
    avatarId: string | null
    createdAt: Date | null
    lastSeenAt: Date | null
  }

  export type PlayerSessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    name: string | null
    scholarNumber: string | null
    mandal: string | null
    semester: string | null
    avatarId: string | null
    createdAt: Date | null
    lastSeenAt: Date | null
  }

  export type PlayerSessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    name: number
    scholarNumber: number
    mandal: number
    semester: number
    avatarId: number
    createdAt: number
    lastSeenAt: number
    _all: number
  }


  export type PlayerSessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    name?: true
    scholarNumber?: true
    mandal?: true
    semester?: true
    avatarId?: true
    createdAt?: true
    lastSeenAt?: true
  }

  export type PlayerSessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    name?: true
    scholarNumber?: true
    mandal?: true
    semester?: true
    avatarId?: true
    createdAt?: true
    lastSeenAt?: true
  }

  export type PlayerSessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    name?: true
    scholarNumber?: true
    mandal?: true
    semester?: true
    avatarId?: true
    createdAt?: true
    lastSeenAt?: true
    _all?: true
  }

  export type PlayerSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerSession to aggregate.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: PlayerSessionOrderByWithRelationInput | PlayerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlayerSessions
    **/
    _count?: true | PlayerSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerSessionMaxAggregateInputType
  }

  export type GetPlayerSessionAggregateType<T extends PlayerSessionAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayerSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayerSession[P]>
      : GetScalarType<T[P], AggregatePlayerSession[P]>
  }




  export type PlayerSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerSessionWhereInput
    orderBy?: PlayerSessionOrderByWithAggregationInput | PlayerSessionOrderByWithAggregationInput[]
    by: PlayerSessionScalarFieldEnum[] | PlayerSessionScalarFieldEnum
    having?: PlayerSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerSessionCountAggregateInputType | true
    _min?: PlayerSessionMinAggregateInputType
    _max?: PlayerSessionMaxAggregateInputType
  }

  export type PlayerSessionGroupByOutputType = {
    id: string
    sessionToken: string
    name: string
    scholarNumber: string
    mandal: string
    semester: string
    avatarId: string
    createdAt: Date
    lastSeenAt: Date
    _count: PlayerSessionCountAggregateOutputType | null
    _min: PlayerSessionMinAggregateOutputType | null
    _max: PlayerSessionMaxAggregateOutputType | null
  }

  type GetPlayerSessionGroupByPayload<T extends PlayerSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerSessionGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerSessionGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    name?: boolean
    scholarNumber?: boolean
    mandal?: boolean
    semester?: boolean
    avatarId?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
    participations?: boolean | PlayerSession$participationsArgs<ExtArgs>
    _count?: boolean | PlayerSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playerSession"]>

  export type PlayerSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    name?: boolean
    scholarNumber?: boolean
    mandal?: boolean
    semester?: boolean
    avatarId?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
  }, ExtArgs["result"]["playerSession"]>

  export type PlayerSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    name?: boolean
    scholarNumber?: boolean
    mandal?: boolean
    semester?: boolean
    avatarId?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
  }, ExtArgs["result"]["playerSession"]>

  export type PlayerSessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    name?: boolean
    scholarNumber?: boolean
    mandal?: boolean
    semester?: boolean
    avatarId?: boolean
    createdAt?: boolean
    lastSeenAt?: boolean
  }

  export type PlayerSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "name" | "scholarNumber" | "mandal" | "semester" | "avatarId" | "createdAt" | "lastSeenAt", ExtArgs["result"]["playerSession"]>
  export type PlayerSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    participations?: boolean | PlayerSession$participationsArgs<ExtArgs>
    _count?: boolean | PlayerSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlayerSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlayerSession"
    objects: {
      participations: Prisma.$CompetitionParticipantPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      name: string
      scholarNumber: string
      mandal: string
      semester: string
      avatarId: string
      createdAt: Date
      lastSeenAt: Date
    }, ExtArgs["result"]["playerSession"]>
    composites: {}
  }

  type PlayerSessionGetPayload<S extends boolean | null | undefined | PlayerSessionDefaultArgs> = $Result.GetResult<Prisma.$PlayerSessionPayload, S>

  type PlayerSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerSessionCountAggregateInputType | true
    }

  export interface PlayerSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlayerSession'], meta: { name: 'PlayerSession' } }
    /**
     * Find zero or one PlayerSession that matches the filter.
     * @param {PlayerSessionFindUniqueArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerSessionFindUniqueArgs>(args: SelectSubset<T, PlayerSessionFindUniqueArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PlayerSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerSessionFindUniqueOrThrowArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionFindFirstArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerSessionFindFirstArgs>(args?: SelectSubset<T, PlayerSessionFindFirstArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PlayerSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionFindFirstOrThrowArgs} args - Arguments to find a PlayerSession
     * @example
     * // Get one PlayerSession
     * const playerSession = await prisma.playerSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PlayerSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlayerSessions
     * const playerSessions = await prisma.playerSession.findMany()
     * 
     * // Get first 10 PlayerSessions
     * const playerSessions = await prisma.playerSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerSessionWithIdOnly = await prisma.playerSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerSessionFindManyArgs>(args?: SelectSubset<T, PlayerSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PlayerSession.
     * @param {PlayerSessionCreateArgs} args - Arguments to create a PlayerSession.
     * @example
     * // Create one PlayerSession
     * const PlayerSession = await prisma.playerSession.create({
     *   data: {
     *     // ... data to create a PlayerSession
     *   }
     * })
     * 
     */
    create<T extends PlayerSessionCreateArgs>(args: SelectSubset<T, PlayerSessionCreateArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PlayerSessions.
     * @param {PlayerSessionCreateManyArgs} args - Arguments to create many PlayerSessions.
     * @example
     * // Create many PlayerSessions
     * const playerSession = await prisma.playerSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerSessionCreateManyArgs>(args?: SelectSubset<T, PlayerSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PlayerSessions and returns the data saved in the database.
     * @param {PlayerSessionCreateManyAndReturnArgs} args - Arguments to create many PlayerSessions.
     * @example
     * // Create many PlayerSessions
     * const playerSession = await prisma.playerSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PlayerSessions and only return the `id`
     * const playerSessionWithIdOnly = await prisma.playerSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PlayerSession.
     * @param {PlayerSessionDeleteArgs} args - Arguments to delete one PlayerSession.
     * @example
     * // Delete one PlayerSession
     * const PlayerSession = await prisma.playerSession.delete({
     *   where: {
     *     // ... filter to delete one PlayerSession
     *   }
     * })
     * 
     */
    delete<T extends PlayerSessionDeleteArgs>(args: SelectSubset<T, PlayerSessionDeleteArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PlayerSession.
     * @param {PlayerSessionUpdateArgs} args - Arguments to update one PlayerSession.
     * @example
     * // Update one PlayerSession
     * const playerSession = await prisma.playerSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerSessionUpdateArgs>(args: SelectSubset<T, PlayerSessionUpdateArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PlayerSessions.
     * @param {PlayerSessionDeleteManyArgs} args - Arguments to filter PlayerSessions to delete.
     * @example
     * // Delete a few PlayerSessions
     * const { count } = await prisma.playerSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerSessionDeleteManyArgs>(args?: SelectSubset<T, PlayerSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlayerSessions
     * const playerSession = await prisma.playerSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerSessionUpdateManyArgs>(args: SelectSubset<T, PlayerSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlayerSessions and returns the data updated in the database.
     * @param {PlayerSessionUpdateManyAndReturnArgs} args - Arguments to update many PlayerSessions.
     * @example
     * // Update many PlayerSessions
     * const playerSession = await prisma.playerSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PlayerSessions and only return the `id`
     * const playerSessionWithIdOnly = await prisma.playerSession.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PlayerSession.
     * @param {PlayerSessionUpsertArgs} args - Arguments to update or create a PlayerSession.
     * @example
     * // Update or create a PlayerSession
     * const playerSession = await prisma.playerSession.upsert({
     *   create: {
     *     // ... data to create a PlayerSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlayerSession we want to update
     *   }
     * })
     */
    upsert<T extends PlayerSessionUpsertArgs>(args: SelectSubset<T, PlayerSessionUpsertArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PlayerSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionCountArgs} args - Arguments to filter PlayerSessions to count.
     * @example
     * // Count the number of PlayerSessions
     * const count = await prisma.playerSession.count({
     *   where: {
     *     // ... the filter for the PlayerSessions we want to count
     *   }
     * })
    **/
    count<T extends PlayerSessionCountArgs>(
      args?: Subset<T, PlayerSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlayerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlayerSessionAggregateArgs>(args: Subset<T, PlayerSessionAggregateArgs>): Prisma.PrismaPromise<GetPlayerSessionAggregateType<T>>

    /**
     * Group by PlayerSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerSessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlayerSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerSessionGroupByArgs['orderBy'] }
        : { orderBy?: PlayerSessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlayerSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlayerSession model
   */
  readonly fields: PlayerSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlayerSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    participations<T extends PlayerSession$participationsArgs<ExtArgs> = {}>(args?: Subset<T, PlayerSession$participationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PlayerSession model
   */
  interface PlayerSessionFieldRefs {
    readonly id: FieldRef<"PlayerSession", 'String'>
    readonly sessionToken: FieldRef<"PlayerSession", 'String'>
    readonly name: FieldRef<"PlayerSession", 'String'>
    readonly scholarNumber: FieldRef<"PlayerSession", 'String'>
    readonly mandal: FieldRef<"PlayerSession", 'String'>
    readonly semester: FieldRef<"PlayerSession", 'String'>
    readonly avatarId: FieldRef<"PlayerSession", 'String'>
    readonly createdAt: FieldRef<"PlayerSession", 'DateTime'>
    readonly lastSeenAt: FieldRef<"PlayerSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PlayerSession findUnique
   */
  export type PlayerSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where: PlayerSessionWhereUniqueInput
  }

  /**
   * PlayerSession findUniqueOrThrow
   */
  export type PlayerSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where: PlayerSessionWhereUniqueInput
  }

  /**
   * PlayerSession findFirst
   */
  export type PlayerSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: PlayerSessionOrderByWithRelationInput | PlayerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSessions.
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSessions.
     */
    distinct?: PlayerSessionScalarFieldEnum | PlayerSessionScalarFieldEnum[]
  }

  /**
   * PlayerSession findFirstOrThrow
   */
  export type PlayerSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSession to fetch.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: PlayerSessionOrderByWithRelationInput | PlayerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlayerSessions.
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlayerSessions.
     */
    distinct?: PlayerSessionScalarFieldEnum | PlayerSessionScalarFieldEnum[]
  }

  /**
   * PlayerSession findMany
   */
  export type PlayerSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter, which PlayerSessions to fetch.
     */
    where?: PlayerSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlayerSessions to fetch.
     */
    orderBy?: PlayerSessionOrderByWithRelationInput | PlayerSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlayerSessions.
     */
    cursor?: PlayerSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlayerSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlayerSessions.
     */
    skip?: number
    distinct?: PlayerSessionScalarFieldEnum | PlayerSessionScalarFieldEnum[]
  }

  /**
   * PlayerSession create
   */
  export type PlayerSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a PlayerSession.
     */
    data: XOR<PlayerSessionCreateInput, PlayerSessionUncheckedCreateInput>
  }

  /**
   * PlayerSession createMany
   */
  export type PlayerSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlayerSessions.
     */
    data: PlayerSessionCreateManyInput | PlayerSessionCreateManyInput[]
  }

  /**
   * PlayerSession createManyAndReturn
   */
  export type PlayerSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * The data used to create many PlayerSessions.
     */
    data: PlayerSessionCreateManyInput | PlayerSessionCreateManyInput[]
  }

  /**
   * PlayerSession update
   */
  export type PlayerSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a PlayerSession.
     */
    data: XOR<PlayerSessionUpdateInput, PlayerSessionUncheckedUpdateInput>
    /**
     * Choose, which PlayerSession to update.
     */
    where: PlayerSessionWhereUniqueInput
  }

  /**
   * PlayerSession updateMany
   */
  export type PlayerSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlayerSessions.
     */
    data: XOR<PlayerSessionUpdateManyMutationInput, PlayerSessionUncheckedUpdateManyInput>
    /**
     * Filter which PlayerSessions to update
     */
    where?: PlayerSessionWhereInput
    /**
     * Limit how many PlayerSessions to update.
     */
    limit?: number
  }

  /**
   * PlayerSession updateManyAndReturn
   */
  export type PlayerSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * The data used to update PlayerSessions.
     */
    data: XOR<PlayerSessionUpdateManyMutationInput, PlayerSessionUncheckedUpdateManyInput>
    /**
     * Filter which PlayerSessions to update
     */
    where?: PlayerSessionWhereInput
    /**
     * Limit how many PlayerSessions to update.
     */
    limit?: number
  }

  /**
   * PlayerSession upsert
   */
  export type PlayerSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the PlayerSession to update in case it exists.
     */
    where: PlayerSessionWhereUniqueInput
    /**
     * In case the PlayerSession found by the `where` argument doesn't exist, create a new PlayerSession with this data.
     */
    create: XOR<PlayerSessionCreateInput, PlayerSessionUncheckedCreateInput>
    /**
     * In case the PlayerSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerSessionUpdateInput, PlayerSessionUncheckedUpdateInput>
  }

  /**
   * PlayerSession delete
   */
  export type PlayerSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
    /**
     * Filter which PlayerSession to delete.
     */
    where: PlayerSessionWhereUniqueInput
  }

  /**
   * PlayerSession deleteMany
   */
  export type PlayerSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlayerSessions to delete
     */
    where?: PlayerSessionWhereInput
    /**
     * Limit how many PlayerSessions to delete.
     */
    limit?: number
  }

  /**
   * PlayerSession.participations
   */
  export type PlayerSession$participationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    where?: CompetitionParticipantWhereInput
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    cursor?: CompetitionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionParticipantScalarFieldEnum | CompetitionParticipantScalarFieldEnum[]
  }

  /**
   * PlayerSession without action
   */
  export type PlayerSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerSession
     */
    select?: PlayerSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PlayerSession
     */
    omit?: PlayerSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerSessionInclude<ExtArgs> | null
  }


  /**
   * Model Competition
   */

  export type AggregateCompetition = {
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  export type CompetitionAvgAggregateOutputType = {
    duration: number | null
  }

  export type CompetitionSumAggregateOutputType = {
    duration: number | null
  }

  export type CompetitionMinAggregateOutputType = {
    id: string | null
    name: string | null
    roomCode: string | null
    language: string | null
    gameMode: string | null
    difficulty: string | null
    duration: number | null
    paragraphId: string | null
    status: string | null
    createdBy: string | null
    startAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
  }

  export type CompetitionMaxAggregateOutputType = {
    id: string | null
    name: string | null
    roomCode: string | null
    language: string | null
    gameMode: string | null
    difficulty: string | null
    duration: number | null
    paragraphId: string | null
    status: string | null
    createdBy: string | null
    startAt: Date | null
    endedAt: Date | null
    createdAt: Date | null
  }

  export type CompetitionCountAggregateOutputType = {
    id: number
    name: number
    roomCode: number
    language: number
    gameMode: number
    difficulty: number
    duration: number
    paragraphId: number
    status: number
    createdBy: number
    startAt: number
    endedAt: number
    createdAt: number
    _all: number
  }


  export type CompetitionAvgAggregateInputType = {
    duration?: true
  }

  export type CompetitionSumAggregateInputType = {
    duration?: true
  }

  export type CompetitionMinAggregateInputType = {
    id?: true
    name?: true
    roomCode?: true
    language?: true
    gameMode?: true
    difficulty?: true
    duration?: true
    paragraphId?: true
    status?: true
    createdBy?: true
    startAt?: true
    endedAt?: true
    createdAt?: true
  }

  export type CompetitionMaxAggregateInputType = {
    id?: true
    name?: true
    roomCode?: true
    language?: true
    gameMode?: true
    difficulty?: true
    duration?: true
    paragraphId?: true
    status?: true
    createdBy?: true
    startAt?: true
    endedAt?: true
    createdAt?: true
  }

  export type CompetitionCountAggregateInputType = {
    id?: true
    name?: true
    roomCode?: true
    language?: true
    gameMode?: true
    difficulty?: true
    duration?: true
    paragraphId?: true
    status?: true
    createdBy?: true
    startAt?: true
    endedAt?: true
    createdAt?: true
    _all?: true
  }

  export type CompetitionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competition to aggregate.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Competitions
    **/
    _count?: true | CompetitionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompetitionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompetitionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionMaxAggregateInputType
  }

  export type GetCompetitionAggregateType<T extends CompetitionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetition]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetition[P]>
      : GetScalarType<T[P], AggregateCompetition[P]>
  }




  export type CompetitionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithAggregationInput | CompetitionOrderByWithAggregationInput[]
    by: CompetitionScalarFieldEnum[] | CompetitionScalarFieldEnum
    having?: CompetitionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionCountAggregateInputType | true
    _avg?: CompetitionAvgAggregateInputType
    _sum?: CompetitionSumAggregateInputType
    _min?: CompetitionMinAggregateInputType
    _max?: CompetitionMaxAggregateInputType
  }

  export type CompetitionGroupByOutputType = {
    id: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration: number | null
    paragraphId: string
    status: string
    createdBy: string
    startAt: Date | null
    endedAt: Date | null
    createdAt: Date
    _count: CompetitionCountAggregateOutputType | null
    _avg: CompetitionAvgAggregateOutputType | null
    _sum: CompetitionSumAggregateOutputType | null
    _min: CompetitionMinAggregateOutputType | null
    _max: CompetitionMaxAggregateOutputType | null
  }

  type GetCompetitionGroupByPayload<T extends CompetitionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roomCode?: boolean
    language?: boolean
    gameMode?: boolean
    difficulty?: boolean
    duration?: boolean
    paragraphId?: boolean
    status?: boolean
    createdBy?: boolean
    startAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    paragraph?: boolean | ParagraphDefaultArgs<ExtArgs>
    participants?: boolean | Competition$participantsArgs<ExtArgs>
    results?: boolean | Competition$resultsArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roomCode?: boolean
    language?: boolean
    gameMode?: boolean
    difficulty?: boolean
    duration?: boolean
    paragraphId?: boolean
    status?: boolean
    createdBy?: boolean
    startAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    paragraph?: boolean | ParagraphDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    roomCode?: boolean
    language?: boolean
    gameMode?: boolean
    difficulty?: boolean
    duration?: boolean
    paragraphId?: boolean
    status?: boolean
    createdBy?: boolean
    startAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    paragraph?: boolean | ParagraphDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competition"]>

  export type CompetitionSelectScalar = {
    id?: boolean
    name?: boolean
    roomCode?: boolean
    language?: boolean
    gameMode?: boolean
    difficulty?: boolean
    duration?: boolean
    paragraphId?: boolean
    status?: boolean
    createdBy?: boolean
    startAt?: boolean
    endedAt?: boolean
    createdAt?: boolean
  }

  export type CompetitionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "roomCode" | "language" | "gameMode" | "difficulty" | "duration" | "paragraphId" | "status" | "createdBy" | "startAt" | "endedAt" | "createdAt", ExtArgs["result"]["competition"]>
  export type CompetitionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    paragraph?: boolean | ParagraphDefaultArgs<ExtArgs>
    participants?: boolean | Competition$participantsArgs<ExtArgs>
    results?: boolean | Competition$resultsArgs<ExtArgs>
    _count?: boolean | CompetitionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    paragraph?: boolean | ParagraphDefaultArgs<ExtArgs>
  }
  export type CompetitionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    admin?: boolean | AdminDefaultArgs<ExtArgs>
    paragraph?: boolean | ParagraphDefaultArgs<ExtArgs>
  }

  export type $CompetitionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Competition"
    objects: {
      admin: Prisma.$AdminPayload<ExtArgs>
      paragraph: Prisma.$ParagraphPayload<ExtArgs>
      participants: Prisma.$CompetitionParticipantPayload<ExtArgs>[]
      results: Prisma.$ResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      roomCode: string
      language: string
      gameMode: string
      difficulty: string
      duration: number | null
      paragraphId: string
      status: string
      createdBy: string
      startAt: Date | null
      endedAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["competition"]>
    composites: {}
  }

  type CompetitionGetPayload<S extends boolean | null | undefined | CompetitionDefaultArgs> = $Result.GetResult<Prisma.$CompetitionPayload, S>

  type CompetitionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionCountAggregateInputType | true
    }

  export interface CompetitionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Competition'], meta: { name: 'Competition' } }
    /**
     * Find zero or one Competition that matches the filter.
     * @param {CompetitionFindUniqueArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionFindUniqueArgs>(args: SelectSubset<T, CompetitionFindUniqueArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Competition that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionFindUniqueOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionFindFirstArgs>(args?: SelectSubset<T, CompetitionFindFirstArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Competition that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindFirstOrThrowArgs} args - Arguments to find a Competition
     * @example
     * // Get one Competition
     * const competition = await prisma.competition.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Competitions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Competitions
     * const competitions = await prisma.competition.findMany()
     * 
     * // Get first 10 Competitions
     * const competitions = await prisma.competition.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionWithIdOnly = await prisma.competition.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionFindManyArgs>(args?: SelectSubset<T, CompetitionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Competition.
     * @param {CompetitionCreateArgs} args - Arguments to create a Competition.
     * @example
     * // Create one Competition
     * const Competition = await prisma.competition.create({
     *   data: {
     *     // ... data to create a Competition
     *   }
     * })
     * 
     */
    create<T extends CompetitionCreateArgs>(args: SelectSubset<T, CompetitionCreateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Competitions.
     * @param {CompetitionCreateManyArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionCreateManyArgs>(args?: SelectSubset<T, CompetitionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Competitions and returns the data saved in the database.
     * @param {CompetitionCreateManyAndReturnArgs} args - Arguments to create many Competitions.
     * @example
     * // Create many Competitions
     * const competition = await prisma.competition.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Competition.
     * @param {CompetitionDeleteArgs} args - Arguments to delete one Competition.
     * @example
     * // Delete one Competition
     * const Competition = await prisma.competition.delete({
     *   where: {
     *     // ... filter to delete one Competition
     *   }
     * })
     * 
     */
    delete<T extends CompetitionDeleteArgs>(args: SelectSubset<T, CompetitionDeleteArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Competition.
     * @param {CompetitionUpdateArgs} args - Arguments to update one Competition.
     * @example
     * // Update one Competition
     * const competition = await prisma.competition.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionUpdateArgs>(args: SelectSubset<T, CompetitionUpdateArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Competitions.
     * @param {CompetitionDeleteManyArgs} args - Arguments to filter Competitions to delete.
     * @example
     * // Delete a few Competitions
     * const { count } = await prisma.competition.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionDeleteManyArgs>(args?: SelectSubset<T, CompetitionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionUpdateManyArgs>(args: SelectSubset<T, CompetitionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Competitions and returns the data updated in the database.
     * @param {CompetitionUpdateManyAndReturnArgs} args - Arguments to update many Competitions.
     * @example
     * // Update many Competitions
     * const competition = await prisma.competition.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Competitions and only return the `id`
     * const competitionWithIdOnly = await prisma.competition.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompetitionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Competition.
     * @param {CompetitionUpsertArgs} args - Arguments to update or create a Competition.
     * @example
     * // Update or create a Competition
     * const competition = await prisma.competition.upsert({
     *   create: {
     *     // ... data to create a Competition
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Competition we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionUpsertArgs>(args: SelectSubset<T, CompetitionUpsertArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Competitions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionCountArgs} args - Arguments to filter Competitions to count.
     * @example
     * // Count the number of Competitions
     * const count = await prisma.competition.count({
     *   where: {
     *     // ... the filter for the Competitions we want to count
     *   }
     * })
    **/
    count<T extends CompetitionCountArgs>(
      args?: Subset<T, CompetitionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionAggregateArgs>(args: Subset<T, CompetitionAggregateArgs>): Prisma.PrismaPromise<GetCompetitionAggregateType<T>>

    /**
     * Group by Competition.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetitionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetitionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Competition model
   */
  readonly fields: CompetitionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Competition.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    admin<T extends AdminDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminDefaultArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    paragraph<T extends ParagraphDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ParagraphDefaultArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participants<T extends Competition$participantsArgs<ExtArgs> = {}>(args?: Subset<T, Competition$participantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends Competition$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Competition$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Competition model
   */
  interface CompetitionFieldRefs {
    readonly id: FieldRef<"Competition", 'String'>
    readonly name: FieldRef<"Competition", 'String'>
    readonly roomCode: FieldRef<"Competition", 'String'>
    readonly language: FieldRef<"Competition", 'String'>
    readonly gameMode: FieldRef<"Competition", 'String'>
    readonly difficulty: FieldRef<"Competition", 'String'>
    readonly duration: FieldRef<"Competition", 'Int'>
    readonly paragraphId: FieldRef<"Competition", 'String'>
    readonly status: FieldRef<"Competition", 'String'>
    readonly createdBy: FieldRef<"Competition", 'String'>
    readonly startAt: FieldRef<"Competition", 'DateTime'>
    readonly endedAt: FieldRef<"Competition", 'DateTime'>
    readonly createdAt: FieldRef<"Competition", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Competition findUnique
   */
  export type CompetitionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findUniqueOrThrow
   */
  export type CompetitionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition findFirst
   */
  export type CompetitionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findFirstOrThrow
   */
  export type CompetitionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competition to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Competitions.
     */
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition findMany
   */
  export type CompetitionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter, which Competitions to fetch.
     */
    where?: CompetitionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Competitions to fetch.
     */
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Competitions.
     */
    cursor?: CompetitionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Competitions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Competitions.
     */
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Competition create
   */
  export type CompetitionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to create a Competition.
     */
    data: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
  }

  /**
   * Competition createMany
   */
  export type CompetitionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
  }

  /**
   * Competition createManyAndReturn
   */
  export type CompetitionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to create many Competitions.
     */
    data: CompetitionCreateManyInput | CompetitionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competition update
   */
  export type CompetitionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The data needed to update a Competition.
     */
    data: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
    /**
     * Choose, which Competition to update.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition updateMany
   */
  export type CompetitionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
  }

  /**
   * Competition updateManyAndReturn
   */
  export type CompetitionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * The data used to update Competitions.
     */
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyInput>
    /**
     * Filter which Competitions to update
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Competition upsert
   */
  export type CompetitionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * The filter to search for the Competition to update in case it exists.
     */
    where: CompetitionWhereUniqueInput
    /**
     * In case the Competition found by the `where` argument doesn't exist, create a new Competition with this data.
     */
    create: XOR<CompetitionCreateInput, CompetitionUncheckedCreateInput>
    /**
     * In case the Competition was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionUpdateInput, CompetitionUncheckedUpdateInput>
  }

  /**
   * Competition delete
   */
  export type CompetitionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    /**
     * Filter which Competition to delete.
     */
    where: CompetitionWhereUniqueInput
  }

  /**
   * Competition deleteMany
   */
  export type CompetitionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Competitions to delete
     */
    where?: CompetitionWhereInput
    /**
     * Limit how many Competitions to delete.
     */
    limit?: number
  }

  /**
   * Competition.participants
   */
  export type Competition$participantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    where?: CompetitionParticipantWhereInput
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    cursor?: CompetitionParticipantWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionParticipantScalarFieldEnum | CompetitionParticipantScalarFieldEnum[]
  }

  /**
   * Competition.results
   */
  export type Competition$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Competition without action
   */
  export type CompetitionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
  }


  /**
   * Model CompetitionParticipant
   */

  export type AggregateCompetitionParticipant = {
    _count: CompetitionParticipantCountAggregateOutputType | null
    _min: CompetitionParticipantMinAggregateOutputType | null
    _max: CompetitionParticipantMaxAggregateOutputType | null
  }

  export type CompetitionParticipantMinAggregateOutputType = {
    id: string | null
    competitionId: string | null
    playerSessionId: string | null
    ready: boolean | null
    connectionStatus: string | null
    joinedAt: Date | null
    finishedAt: Date | null
  }

  export type CompetitionParticipantMaxAggregateOutputType = {
    id: string | null
    competitionId: string | null
    playerSessionId: string | null
    ready: boolean | null
    connectionStatus: string | null
    joinedAt: Date | null
    finishedAt: Date | null
  }

  export type CompetitionParticipantCountAggregateOutputType = {
    id: number
    competitionId: number
    playerSessionId: number
    ready: number
    connectionStatus: number
    joinedAt: number
    finishedAt: number
    _all: number
  }


  export type CompetitionParticipantMinAggregateInputType = {
    id?: true
    competitionId?: true
    playerSessionId?: true
    ready?: true
    connectionStatus?: true
    joinedAt?: true
    finishedAt?: true
  }

  export type CompetitionParticipantMaxAggregateInputType = {
    id?: true
    competitionId?: true
    playerSessionId?: true
    ready?: true
    connectionStatus?: true
    joinedAt?: true
    finishedAt?: true
  }

  export type CompetitionParticipantCountAggregateInputType = {
    id?: true
    competitionId?: true
    playerSessionId?: true
    ready?: true
    connectionStatus?: true
    joinedAt?: true
    finishedAt?: true
    _all?: true
  }

  export type CompetitionParticipantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionParticipant to aggregate.
     */
    where?: CompetitionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionParticipants to fetch.
     */
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompetitionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompetitionParticipants
    **/
    _count?: true | CompetitionParticipantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompetitionParticipantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompetitionParticipantMaxAggregateInputType
  }

  export type GetCompetitionParticipantAggregateType<T extends CompetitionParticipantAggregateArgs> = {
        [P in keyof T & keyof AggregateCompetitionParticipant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompetitionParticipant[P]>
      : GetScalarType<T[P], AggregateCompetitionParticipant[P]>
  }




  export type CompetitionParticipantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompetitionParticipantWhereInput
    orderBy?: CompetitionParticipantOrderByWithAggregationInput | CompetitionParticipantOrderByWithAggregationInput[]
    by: CompetitionParticipantScalarFieldEnum[] | CompetitionParticipantScalarFieldEnum
    having?: CompetitionParticipantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompetitionParticipantCountAggregateInputType | true
    _min?: CompetitionParticipantMinAggregateInputType
    _max?: CompetitionParticipantMaxAggregateInputType
  }

  export type CompetitionParticipantGroupByOutputType = {
    id: string
    competitionId: string
    playerSessionId: string
    ready: boolean
    connectionStatus: string
    joinedAt: Date
    finishedAt: Date | null
    _count: CompetitionParticipantCountAggregateOutputType | null
    _min: CompetitionParticipantMinAggregateOutputType | null
    _max: CompetitionParticipantMaxAggregateOutputType | null
  }

  type GetCompetitionParticipantGroupByPayload<T extends CompetitionParticipantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompetitionParticipantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompetitionParticipantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompetitionParticipantGroupByOutputType[P]>
            : GetScalarType<T[P], CompetitionParticipantGroupByOutputType[P]>
        }
      >
    >


  export type CompetitionParticipantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    playerSessionId?: boolean
    ready?: boolean
    connectionStatus?: boolean
    joinedAt?: boolean
    finishedAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    playerSession?: boolean | PlayerSessionDefaultArgs<ExtArgs>
    results?: boolean | CompetitionParticipant$resultsArgs<ExtArgs>
    _count?: boolean | CompetitionParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionParticipant"]>

  export type CompetitionParticipantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    playerSessionId?: boolean
    ready?: boolean
    connectionStatus?: boolean
    joinedAt?: boolean
    finishedAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    playerSession?: boolean | PlayerSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionParticipant"]>

  export type CompetitionParticipantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    playerSessionId?: boolean
    ready?: boolean
    connectionStatus?: boolean
    joinedAt?: boolean
    finishedAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    playerSession?: boolean | PlayerSessionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["competitionParticipant"]>

  export type CompetitionParticipantSelectScalar = {
    id?: boolean
    competitionId?: boolean
    playerSessionId?: boolean
    ready?: boolean
    connectionStatus?: boolean
    joinedAt?: boolean
    finishedAt?: boolean
  }

  export type CompetitionParticipantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competitionId" | "playerSessionId" | "ready" | "connectionStatus" | "joinedAt" | "finishedAt", ExtArgs["result"]["competitionParticipant"]>
  export type CompetitionParticipantInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    playerSession?: boolean | PlayerSessionDefaultArgs<ExtArgs>
    results?: boolean | CompetitionParticipant$resultsArgs<ExtArgs>
    _count?: boolean | CompetitionParticipantCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompetitionParticipantIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    playerSession?: boolean | PlayerSessionDefaultArgs<ExtArgs>
  }
  export type CompetitionParticipantIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    playerSession?: boolean | PlayerSessionDefaultArgs<ExtArgs>
  }

  export type $CompetitionParticipantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompetitionParticipant"
    objects: {
      competition: Prisma.$CompetitionPayload<ExtArgs>
      playerSession: Prisma.$PlayerSessionPayload<ExtArgs>
      results: Prisma.$ResultPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competitionId: string
      playerSessionId: string
      ready: boolean
      connectionStatus: string
      joinedAt: Date
      finishedAt: Date | null
    }, ExtArgs["result"]["competitionParticipant"]>
    composites: {}
  }

  type CompetitionParticipantGetPayload<S extends boolean | null | undefined | CompetitionParticipantDefaultArgs> = $Result.GetResult<Prisma.$CompetitionParticipantPayload, S>

  type CompetitionParticipantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompetitionParticipantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompetitionParticipantCountAggregateInputType | true
    }

  export interface CompetitionParticipantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompetitionParticipant'], meta: { name: 'CompetitionParticipant' } }
    /**
     * Find zero or one CompetitionParticipant that matches the filter.
     * @param {CompetitionParticipantFindUniqueArgs} args - Arguments to find a CompetitionParticipant
     * @example
     * // Get one CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompetitionParticipantFindUniqueArgs>(args: SelectSubset<T, CompetitionParticipantFindUniqueArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompetitionParticipant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompetitionParticipantFindUniqueOrThrowArgs} args - Arguments to find a CompetitionParticipant
     * @example
     * // Get one CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompetitionParticipantFindUniqueOrThrowArgs>(args: SelectSubset<T, CompetitionParticipantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionParticipant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantFindFirstArgs} args - Arguments to find a CompetitionParticipant
     * @example
     * // Get one CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompetitionParticipantFindFirstArgs>(args?: SelectSubset<T, CompetitionParticipantFindFirstArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompetitionParticipant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantFindFirstOrThrowArgs} args - Arguments to find a CompetitionParticipant
     * @example
     * // Get one CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompetitionParticipantFindFirstOrThrowArgs>(args?: SelectSubset<T, CompetitionParticipantFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompetitionParticipants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompetitionParticipants
     * const competitionParticipants = await prisma.competitionParticipant.findMany()
     * 
     * // Get first 10 CompetitionParticipants
     * const competitionParticipants = await prisma.competitionParticipant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const competitionParticipantWithIdOnly = await prisma.competitionParticipant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompetitionParticipantFindManyArgs>(args?: SelectSubset<T, CompetitionParticipantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompetitionParticipant.
     * @param {CompetitionParticipantCreateArgs} args - Arguments to create a CompetitionParticipant.
     * @example
     * // Create one CompetitionParticipant
     * const CompetitionParticipant = await prisma.competitionParticipant.create({
     *   data: {
     *     // ... data to create a CompetitionParticipant
     *   }
     * })
     * 
     */
    create<T extends CompetitionParticipantCreateArgs>(args: SelectSubset<T, CompetitionParticipantCreateArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompetitionParticipants.
     * @param {CompetitionParticipantCreateManyArgs} args - Arguments to create many CompetitionParticipants.
     * @example
     * // Create many CompetitionParticipants
     * const competitionParticipant = await prisma.competitionParticipant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompetitionParticipantCreateManyArgs>(args?: SelectSubset<T, CompetitionParticipantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompetitionParticipants and returns the data saved in the database.
     * @param {CompetitionParticipantCreateManyAndReturnArgs} args - Arguments to create many CompetitionParticipants.
     * @example
     * // Create many CompetitionParticipants
     * const competitionParticipant = await prisma.competitionParticipant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompetitionParticipants and only return the `id`
     * const competitionParticipantWithIdOnly = await prisma.competitionParticipant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompetitionParticipantCreateManyAndReturnArgs>(args?: SelectSubset<T, CompetitionParticipantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompetitionParticipant.
     * @param {CompetitionParticipantDeleteArgs} args - Arguments to delete one CompetitionParticipant.
     * @example
     * // Delete one CompetitionParticipant
     * const CompetitionParticipant = await prisma.competitionParticipant.delete({
     *   where: {
     *     // ... filter to delete one CompetitionParticipant
     *   }
     * })
     * 
     */
    delete<T extends CompetitionParticipantDeleteArgs>(args: SelectSubset<T, CompetitionParticipantDeleteArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompetitionParticipant.
     * @param {CompetitionParticipantUpdateArgs} args - Arguments to update one CompetitionParticipant.
     * @example
     * // Update one CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompetitionParticipantUpdateArgs>(args: SelectSubset<T, CompetitionParticipantUpdateArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompetitionParticipants.
     * @param {CompetitionParticipantDeleteManyArgs} args - Arguments to filter CompetitionParticipants to delete.
     * @example
     * // Delete a few CompetitionParticipants
     * const { count } = await prisma.competitionParticipant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompetitionParticipantDeleteManyArgs>(args?: SelectSubset<T, CompetitionParticipantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompetitionParticipants
     * const competitionParticipant = await prisma.competitionParticipant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompetitionParticipantUpdateManyArgs>(args: SelectSubset<T, CompetitionParticipantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompetitionParticipants and returns the data updated in the database.
     * @param {CompetitionParticipantUpdateManyAndReturnArgs} args - Arguments to update many CompetitionParticipants.
     * @example
     * // Update many CompetitionParticipants
     * const competitionParticipant = await prisma.competitionParticipant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompetitionParticipants and only return the `id`
     * const competitionParticipantWithIdOnly = await prisma.competitionParticipant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompetitionParticipantUpdateManyAndReturnArgs>(args: SelectSubset<T, CompetitionParticipantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompetitionParticipant.
     * @param {CompetitionParticipantUpsertArgs} args - Arguments to update or create a CompetitionParticipant.
     * @example
     * // Update or create a CompetitionParticipant
     * const competitionParticipant = await prisma.competitionParticipant.upsert({
     *   create: {
     *     // ... data to create a CompetitionParticipant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompetitionParticipant we want to update
     *   }
     * })
     */
    upsert<T extends CompetitionParticipantUpsertArgs>(args: SelectSubset<T, CompetitionParticipantUpsertArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompetitionParticipants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantCountArgs} args - Arguments to filter CompetitionParticipants to count.
     * @example
     * // Count the number of CompetitionParticipants
     * const count = await prisma.competitionParticipant.count({
     *   where: {
     *     // ... the filter for the CompetitionParticipants we want to count
     *   }
     * })
    **/
    count<T extends CompetitionParticipantCountArgs>(
      args?: Subset<T, CompetitionParticipantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompetitionParticipantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompetitionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompetitionParticipantAggregateArgs>(args: Subset<T, CompetitionParticipantAggregateArgs>): Prisma.PrismaPromise<GetCompetitionParticipantAggregateType<T>>

    /**
     * Group by CompetitionParticipant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompetitionParticipantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompetitionParticipantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompetitionParticipantGroupByArgs['orderBy'] }
        : { orderBy?: CompetitionParticipantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompetitionParticipantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompetitionParticipantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompetitionParticipant model
   */
  readonly fields: CompetitionParticipantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompetitionParticipant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompetitionParticipantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competition<T extends CompetitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionDefaultArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    playerSession<T extends PlayerSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerSessionDefaultArgs<ExtArgs>>): Prisma__PlayerSessionClient<$Result.GetResult<Prisma.$PlayerSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    results<T extends CompetitionParticipant$resultsArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionParticipant$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompetitionParticipant model
   */
  interface CompetitionParticipantFieldRefs {
    readonly id: FieldRef<"CompetitionParticipant", 'String'>
    readonly competitionId: FieldRef<"CompetitionParticipant", 'String'>
    readonly playerSessionId: FieldRef<"CompetitionParticipant", 'String'>
    readonly ready: FieldRef<"CompetitionParticipant", 'Boolean'>
    readonly connectionStatus: FieldRef<"CompetitionParticipant", 'String'>
    readonly joinedAt: FieldRef<"CompetitionParticipant", 'DateTime'>
    readonly finishedAt: FieldRef<"CompetitionParticipant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompetitionParticipant findUnique
   */
  export type CompetitionParticipantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionParticipant to fetch.
     */
    where: CompetitionParticipantWhereUniqueInput
  }

  /**
   * CompetitionParticipant findUniqueOrThrow
   */
  export type CompetitionParticipantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionParticipant to fetch.
     */
    where: CompetitionParticipantWhereUniqueInput
  }

  /**
   * CompetitionParticipant findFirst
   */
  export type CompetitionParticipantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionParticipant to fetch.
     */
    where?: CompetitionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionParticipants to fetch.
     */
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionParticipants.
     */
    cursor?: CompetitionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionParticipants.
     */
    distinct?: CompetitionParticipantScalarFieldEnum | CompetitionParticipantScalarFieldEnum[]
  }

  /**
   * CompetitionParticipant findFirstOrThrow
   */
  export type CompetitionParticipantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionParticipant to fetch.
     */
    where?: CompetitionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionParticipants to fetch.
     */
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompetitionParticipants.
     */
    cursor?: CompetitionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionParticipants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompetitionParticipants.
     */
    distinct?: CompetitionParticipantScalarFieldEnum | CompetitionParticipantScalarFieldEnum[]
  }

  /**
   * CompetitionParticipant findMany
   */
  export type CompetitionParticipantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter, which CompetitionParticipants to fetch.
     */
    where?: CompetitionParticipantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompetitionParticipants to fetch.
     */
    orderBy?: CompetitionParticipantOrderByWithRelationInput | CompetitionParticipantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompetitionParticipants.
     */
    cursor?: CompetitionParticipantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompetitionParticipants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompetitionParticipants.
     */
    skip?: number
    distinct?: CompetitionParticipantScalarFieldEnum | CompetitionParticipantScalarFieldEnum[]
  }

  /**
   * CompetitionParticipant create
   */
  export type CompetitionParticipantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to create a CompetitionParticipant.
     */
    data: XOR<CompetitionParticipantCreateInput, CompetitionParticipantUncheckedCreateInput>
  }

  /**
   * CompetitionParticipant createMany
   */
  export type CompetitionParticipantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompetitionParticipants.
     */
    data: CompetitionParticipantCreateManyInput | CompetitionParticipantCreateManyInput[]
  }

  /**
   * CompetitionParticipant createManyAndReturn
   */
  export type CompetitionParticipantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * The data used to create many CompetitionParticipants.
     */
    data: CompetitionParticipantCreateManyInput | CompetitionParticipantCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionParticipant update
   */
  export type CompetitionParticipantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * The data needed to update a CompetitionParticipant.
     */
    data: XOR<CompetitionParticipantUpdateInput, CompetitionParticipantUncheckedUpdateInput>
    /**
     * Choose, which CompetitionParticipant to update.
     */
    where: CompetitionParticipantWhereUniqueInput
  }

  /**
   * CompetitionParticipant updateMany
   */
  export type CompetitionParticipantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompetitionParticipants.
     */
    data: XOR<CompetitionParticipantUpdateManyMutationInput, CompetitionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionParticipants to update
     */
    where?: CompetitionParticipantWhereInput
    /**
     * Limit how many CompetitionParticipants to update.
     */
    limit?: number
  }

  /**
   * CompetitionParticipant updateManyAndReturn
   */
  export type CompetitionParticipantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * The data used to update CompetitionParticipants.
     */
    data: XOR<CompetitionParticipantUpdateManyMutationInput, CompetitionParticipantUncheckedUpdateManyInput>
    /**
     * Filter which CompetitionParticipants to update
     */
    where?: CompetitionParticipantWhereInput
    /**
     * Limit how many CompetitionParticipants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompetitionParticipant upsert
   */
  export type CompetitionParticipantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * The filter to search for the CompetitionParticipant to update in case it exists.
     */
    where: CompetitionParticipantWhereUniqueInput
    /**
     * In case the CompetitionParticipant found by the `where` argument doesn't exist, create a new CompetitionParticipant with this data.
     */
    create: XOR<CompetitionParticipantCreateInput, CompetitionParticipantUncheckedCreateInput>
    /**
     * In case the CompetitionParticipant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompetitionParticipantUpdateInput, CompetitionParticipantUncheckedUpdateInput>
  }

  /**
   * CompetitionParticipant delete
   */
  export type CompetitionParticipantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
    /**
     * Filter which CompetitionParticipant to delete.
     */
    where: CompetitionParticipantWhereUniqueInput
  }

  /**
   * CompetitionParticipant deleteMany
   */
  export type CompetitionParticipantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompetitionParticipants to delete
     */
    where?: CompetitionParticipantWhereInput
    /**
     * Limit how many CompetitionParticipants to delete.
     */
    limit?: number
  }

  /**
   * CompetitionParticipant.results
   */
  export type CompetitionParticipant$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * CompetitionParticipant without action
   */
  export type CompetitionParticipantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompetitionParticipant
     */
    select?: CompetitionParticipantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompetitionParticipant
     */
    omit?: CompetitionParticipantOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionParticipantInclude<ExtArgs> | null
  }


  /**
   * Model Paragraph
   */

  export type AggregateParagraph = {
    _count: ParagraphCountAggregateOutputType | null
    _min: ParagraphMinAggregateOutputType | null
    _max: ParagraphMaxAggregateOutputType | null
  }

  export type ParagraphMinAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    language: string | null
    difficulty: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParagraphMaxAggregateOutputType = {
    id: string | null
    title: string | null
    content: string | null
    language: string | null
    difficulty: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ParagraphCountAggregateOutputType = {
    id: number
    title: number
    content: number
    language: number
    difficulty: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ParagraphMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    language?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParagraphMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    language?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ParagraphCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    language?: true
    difficulty?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ParagraphAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paragraph to aggregate.
     */
    where?: ParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paragraphs to fetch.
     */
    orderBy?: ParagraphOrderByWithRelationInput | ParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paragraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paragraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paragraphs
    **/
    _count?: true | ParagraphCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ParagraphMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ParagraphMaxAggregateInputType
  }

  export type GetParagraphAggregateType<T extends ParagraphAggregateArgs> = {
        [P in keyof T & keyof AggregateParagraph]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateParagraph[P]>
      : GetScalarType<T[P], AggregateParagraph[P]>
  }




  export type ParagraphGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ParagraphWhereInput
    orderBy?: ParagraphOrderByWithAggregationInput | ParagraphOrderByWithAggregationInput[]
    by: ParagraphScalarFieldEnum[] | ParagraphScalarFieldEnum
    having?: ParagraphScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ParagraphCountAggregateInputType | true
    _min?: ParagraphMinAggregateInputType
    _max?: ParagraphMaxAggregateInputType
  }

  export type ParagraphGroupByOutputType = {
    id: string
    title: string
    content: string
    language: string
    difficulty: string
    createdAt: Date
    updatedAt: Date
    _count: ParagraphCountAggregateOutputType | null
    _min: ParagraphMinAggregateOutputType | null
    _max: ParagraphMaxAggregateOutputType | null
  }

  type GetParagraphGroupByPayload<T extends ParagraphGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ParagraphGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ParagraphGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ParagraphGroupByOutputType[P]>
            : GetScalarType<T[P], ParagraphGroupByOutputType[P]>
        }
      >
    >


  export type ParagraphSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    language?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    competitions?: boolean | Paragraph$competitionsArgs<ExtArgs>
    _count?: boolean | ParagraphCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paragraph"]>

  export type ParagraphSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    language?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paragraph"]>

  export type ParagraphSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    language?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paragraph"]>

  export type ParagraphSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    language?: boolean
    difficulty?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ParagraphOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "language" | "difficulty" | "createdAt" | "updatedAt", ExtArgs["result"]["paragraph"]>
  export type ParagraphInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competitions?: boolean | Paragraph$competitionsArgs<ExtArgs>
    _count?: boolean | ParagraphCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ParagraphIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ParagraphIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ParagraphPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paragraph"
    objects: {
      competitions: Prisma.$CompetitionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      content: string
      language: string
      difficulty: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paragraph"]>
    composites: {}
  }

  type ParagraphGetPayload<S extends boolean | null | undefined | ParagraphDefaultArgs> = $Result.GetResult<Prisma.$ParagraphPayload, S>

  type ParagraphCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ParagraphFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ParagraphCountAggregateInputType | true
    }

  export interface ParagraphDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paragraph'], meta: { name: 'Paragraph' } }
    /**
     * Find zero or one Paragraph that matches the filter.
     * @param {ParagraphFindUniqueArgs} args - Arguments to find a Paragraph
     * @example
     * // Get one Paragraph
     * const paragraph = await prisma.paragraph.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ParagraphFindUniqueArgs>(args: SelectSubset<T, ParagraphFindUniqueArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paragraph that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ParagraphFindUniqueOrThrowArgs} args - Arguments to find a Paragraph
     * @example
     * // Get one Paragraph
     * const paragraph = await prisma.paragraph.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ParagraphFindUniqueOrThrowArgs>(args: SelectSubset<T, ParagraphFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paragraph that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphFindFirstArgs} args - Arguments to find a Paragraph
     * @example
     * // Get one Paragraph
     * const paragraph = await prisma.paragraph.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ParagraphFindFirstArgs>(args?: SelectSubset<T, ParagraphFindFirstArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paragraph that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphFindFirstOrThrowArgs} args - Arguments to find a Paragraph
     * @example
     * // Get one Paragraph
     * const paragraph = await prisma.paragraph.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ParagraphFindFirstOrThrowArgs>(args?: SelectSubset<T, ParagraphFindFirstOrThrowArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paragraphs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paragraphs
     * const paragraphs = await prisma.paragraph.findMany()
     * 
     * // Get first 10 Paragraphs
     * const paragraphs = await prisma.paragraph.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paragraphWithIdOnly = await prisma.paragraph.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ParagraphFindManyArgs>(args?: SelectSubset<T, ParagraphFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paragraph.
     * @param {ParagraphCreateArgs} args - Arguments to create a Paragraph.
     * @example
     * // Create one Paragraph
     * const Paragraph = await prisma.paragraph.create({
     *   data: {
     *     // ... data to create a Paragraph
     *   }
     * })
     * 
     */
    create<T extends ParagraphCreateArgs>(args: SelectSubset<T, ParagraphCreateArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paragraphs.
     * @param {ParagraphCreateManyArgs} args - Arguments to create many Paragraphs.
     * @example
     * // Create many Paragraphs
     * const paragraph = await prisma.paragraph.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ParagraphCreateManyArgs>(args?: SelectSubset<T, ParagraphCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paragraphs and returns the data saved in the database.
     * @param {ParagraphCreateManyAndReturnArgs} args - Arguments to create many Paragraphs.
     * @example
     * // Create many Paragraphs
     * const paragraph = await prisma.paragraph.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paragraphs and only return the `id`
     * const paragraphWithIdOnly = await prisma.paragraph.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ParagraphCreateManyAndReturnArgs>(args?: SelectSubset<T, ParagraphCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paragraph.
     * @param {ParagraphDeleteArgs} args - Arguments to delete one Paragraph.
     * @example
     * // Delete one Paragraph
     * const Paragraph = await prisma.paragraph.delete({
     *   where: {
     *     // ... filter to delete one Paragraph
     *   }
     * })
     * 
     */
    delete<T extends ParagraphDeleteArgs>(args: SelectSubset<T, ParagraphDeleteArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paragraph.
     * @param {ParagraphUpdateArgs} args - Arguments to update one Paragraph.
     * @example
     * // Update one Paragraph
     * const paragraph = await prisma.paragraph.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ParagraphUpdateArgs>(args: SelectSubset<T, ParagraphUpdateArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paragraphs.
     * @param {ParagraphDeleteManyArgs} args - Arguments to filter Paragraphs to delete.
     * @example
     * // Delete a few Paragraphs
     * const { count } = await prisma.paragraph.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ParagraphDeleteManyArgs>(args?: SelectSubset<T, ParagraphDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paragraphs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paragraphs
     * const paragraph = await prisma.paragraph.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ParagraphUpdateManyArgs>(args: SelectSubset<T, ParagraphUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paragraphs and returns the data updated in the database.
     * @param {ParagraphUpdateManyAndReturnArgs} args - Arguments to update many Paragraphs.
     * @example
     * // Update many Paragraphs
     * const paragraph = await prisma.paragraph.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paragraphs and only return the `id`
     * const paragraphWithIdOnly = await prisma.paragraph.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ParagraphUpdateManyAndReturnArgs>(args: SelectSubset<T, ParagraphUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paragraph.
     * @param {ParagraphUpsertArgs} args - Arguments to update or create a Paragraph.
     * @example
     * // Update or create a Paragraph
     * const paragraph = await prisma.paragraph.upsert({
     *   create: {
     *     // ... data to create a Paragraph
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paragraph we want to update
     *   }
     * })
     */
    upsert<T extends ParagraphUpsertArgs>(args: SelectSubset<T, ParagraphUpsertArgs<ExtArgs>>): Prisma__ParagraphClient<$Result.GetResult<Prisma.$ParagraphPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paragraphs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphCountArgs} args - Arguments to filter Paragraphs to count.
     * @example
     * // Count the number of Paragraphs
     * const count = await prisma.paragraph.count({
     *   where: {
     *     // ... the filter for the Paragraphs we want to count
     *   }
     * })
    **/
    count<T extends ParagraphCountArgs>(
      args?: Subset<T, ParagraphCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ParagraphCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paragraph.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ParagraphAggregateArgs>(args: Subset<T, ParagraphAggregateArgs>): Prisma.PrismaPromise<GetParagraphAggregateType<T>>

    /**
     * Group by Paragraph.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ParagraphGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ParagraphGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ParagraphGroupByArgs['orderBy'] }
        : { orderBy?: ParagraphGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ParagraphGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetParagraphGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paragraph model
   */
  readonly fields: ParagraphFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paragraph.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ParagraphClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competitions<T extends Paragraph$competitionsArgs<ExtArgs> = {}>(args?: Subset<T, Paragraph$competitionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paragraph model
   */
  interface ParagraphFieldRefs {
    readonly id: FieldRef<"Paragraph", 'String'>
    readonly title: FieldRef<"Paragraph", 'String'>
    readonly content: FieldRef<"Paragraph", 'String'>
    readonly language: FieldRef<"Paragraph", 'String'>
    readonly difficulty: FieldRef<"Paragraph", 'String'>
    readonly createdAt: FieldRef<"Paragraph", 'DateTime'>
    readonly updatedAt: FieldRef<"Paragraph", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Paragraph findUnique
   */
  export type ParagraphFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter, which Paragraph to fetch.
     */
    where: ParagraphWhereUniqueInput
  }

  /**
   * Paragraph findUniqueOrThrow
   */
  export type ParagraphFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter, which Paragraph to fetch.
     */
    where: ParagraphWhereUniqueInput
  }

  /**
   * Paragraph findFirst
   */
  export type ParagraphFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter, which Paragraph to fetch.
     */
    where?: ParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paragraphs to fetch.
     */
    orderBy?: ParagraphOrderByWithRelationInput | ParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paragraphs.
     */
    cursor?: ParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paragraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paragraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paragraphs.
     */
    distinct?: ParagraphScalarFieldEnum | ParagraphScalarFieldEnum[]
  }

  /**
   * Paragraph findFirstOrThrow
   */
  export type ParagraphFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter, which Paragraph to fetch.
     */
    where?: ParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paragraphs to fetch.
     */
    orderBy?: ParagraphOrderByWithRelationInput | ParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paragraphs.
     */
    cursor?: ParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paragraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paragraphs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paragraphs.
     */
    distinct?: ParagraphScalarFieldEnum | ParagraphScalarFieldEnum[]
  }

  /**
   * Paragraph findMany
   */
  export type ParagraphFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter, which Paragraphs to fetch.
     */
    where?: ParagraphWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paragraphs to fetch.
     */
    orderBy?: ParagraphOrderByWithRelationInput | ParagraphOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paragraphs.
     */
    cursor?: ParagraphWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paragraphs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paragraphs.
     */
    skip?: number
    distinct?: ParagraphScalarFieldEnum | ParagraphScalarFieldEnum[]
  }

  /**
   * Paragraph create
   */
  export type ParagraphCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * The data needed to create a Paragraph.
     */
    data: XOR<ParagraphCreateInput, ParagraphUncheckedCreateInput>
  }

  /**
   * Paragraph createMany
   */
  export type ParagraphCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paragraphs.
     */
    data: ParagraphCreateManyInput | ParagraphCreateManyInput[]
  }

  /**
   * Paragraph createManyAndReturn
   */
  export type ParagraphCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * The data used to create many Paragraphs.
     */
    data: ParagraphCreateManyInput | ParagraphCreateManyInput[]
  }

  /**
   * Paragraph update
   */
  export type ParagraphUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * The data needed to update a Paragraph.
     */
    data: XOR<ParagraphUpdateInput, ParagraphUncheckedUpdateInput>
    /**
     * Choose, which Paragraph to update.
     */
    where: ParagraphWhereUniqueInput
  }

  /**
   * Paragraph updateMany
   */
  export type ParagraphUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paragraphs.
     */
    data: XOR<ParagraphUpdateManyMutationInput, ParagraphUncheckedUpdateManyInput>
    /**
     * Filter which Paragraphs to update
     */
    where?: ParagraphWhereInput
    /**
     * Limit how many Paragraphs to update.
     */
    limit?: number
  }

  /**
   * Paragraph updateManyAndReturn
   */
  export type ParagraphUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * The data used to update Paragraphs.
     */
    data: XOR<ParagraphUpdateManyMutationInput, ParagraphUncheckedUpdateManyInput>
    /**
     * Filter which Paragraphs to update
     */
    where?: ParagraphWhereInput
    /**
     * Limit how many Paragraphs to update.
     */
    limit?: number
  }

  /**
   * Paragraph upsert
   */
  export type ParagraphUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * The filter to search for the Paragraph to update in case it exists.
     */
    where: ParagraphWhereUniqueInput
    /**
     * In case the Paragraph found by the `where` argument doesn't exist, create a new Paragraph with this data.
     */
    create: XOR<ParagraphCreateInput, ParagraphUncheckedCreateInput>
    /**
     * In case the Paragraph was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ParagraphUpdateInput, ParagraphUncheckedUpdateInput>
  }

  /**
   * Paragraph delete
   */
  export type ParagraphDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
    /**
     * Filter which Paragraph to delete.
     */
    where: ParagraphWhereUniqueInput
  }

  /**
   * Paragraph deleteMany
   */
  export type ParagraphDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paragraphs to delete
     */
    where?: ParagraphWhereInput
    /**
     * Limit how many Paragraphs to delete.
     */
    limit?: number
  }

  /**
   * Paragraph.competitions
   */
  export type Paragraph$competitionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Competition
     */
    select?: CompetitionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Competition
     */
    omit?: CompetitionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompetitionInclude<ExtArgs> | null
    where?: CompetitionWhereInput
    orderBy?: CompetitionOrderByWithRelationInput | CompetitionOrderByWithRelationInput[]
    cursor?: CompetitionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompetitionScalarFieldEnum | CompetitionScalarFieldEnum[]
  }

  /**
   * Paragraph without action
   */
  export type ParagraphDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paragraph
     */
    select?: ParagraphSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paragraph
     */
    omit?: ParagraphOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ParagraphInclude<ExtArgs> | null
  }


  /**
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    grossWpm: number | null
    netWpm: number | null
    cpm: number | null
    accuracy: number | null
    errors: number | null
    completionPercentage: number | null
    finalRank: number | null
    finishTime: number | null
  }

  export type ResultSumAggregateOutputType = {
    grossWpm: number | null
    netWpm: number | null
    cpm: number | null
    accuracy: number | null
    errors: number | null
    completionPercentage: number | null
    finalRank: number | null
    finishTime: number | null
  }

  export type ResultMinAggregateOutputType = {
    id: string | null
    competitionId: string | null
    participantId: string | null
    grossWpm: number | null
    netWpm: number | null
    cpm: number | null
    accuracy: number | null
    errors: number | null
    completionPercentage: number | null
    finalRank: number | null
    finishTime: number | null
    createdAt: Date | null
  }

  export type ResultMaxAggregateOutputType = {
    id: string | null
    competitionId: string | null
    participantId: string | null
    grossWpm: number | null
    netWpm: number | null
    cpm: number | null
    accuracy: number | null
    errors: number | null
    completionPercentage: number | null
    finalRank: number | null
    finishTime: number | null
    createdAt: Date | null
  }

  export type ResultCountAggregateOutputType = {
    id: number
    competitionId: number
    participantId: number
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank: number
    finishTime: number
    createdAt: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    grossWpm?: true
    netWpm?: true
    cpm?: true
    accuracy?: true
    errors?: true
    completionPercentage?: true
    finalRank?: true
    finishTime?: true
  }

  export type ResultSumAggregateInputType = {
    grossWpm?: true
    netWpm?: true
    cpm?: true
    accuracy?: true
    errors?: true
    completionPercentage?: true
    finalRank?: true
    finishTime?: true
  }

  export type ResultMinAggregateInputType = {
    id?: true
    competitionId?: true
    participantId?: true
    grossWpm?: true
    netWpm?: true
    cpm?: true
    accuracy?: true
    errors?: true
    completionPercentage?: true
    finalRank?: true
    finishTime?: true
    createdAt?: true
  }

  export type ResultMaxAggregateInputType = {
    id?: true
    competitionId?: true
    participantId?: true
    grossWpm?: true
    netWpm?: true
    cpm?: true
    accuracy?: true
    errors?: true
    completionPercentage?: true
    finalRank?: true
    finishTime?: true
    createdAt?: true
  }

  export type ResultCountAggregateInputType = {
    id?: true
    competitionId?: true
    participantId?: true
    grossWpm?: true
    netWpm?: true
    cpm?: true
    accuracy?: true
    errors?: true
    completionPercentage?: true
    finalRank?: true
    finishTime?: true
    createdAt?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    id: string
    competitionId: string
    participantId: string
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank: number | null
    finishTime: number | null
    createdAt: Date
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    participantId?: boolean
    grossWpm?: boolean
    netWpm?: boolean
    cpm?: boolean
    accuracy?: boolean
    errors?: boolean
    completionPercentage?: boolean
    finalRank?: boolean
    finishTime?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    participant?: boolean | CompetitionParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    participantId?: boolean
    grossWpm?: boolean
    netWpm?: boolean
    cpm?: boolean
    accuracy?: boolean
    errors?: boolean
    completionPercentage?: boolean
    finalRank?: boolean
    finishTime?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    participant?: boolean | CompetitionParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    competitionId?: boolean
    participantId?: boolean
    grossWpm?: boolean
    netWpm?: boolean
    cpm?: boolean
    accuracy?: boolean
    errors?: boolean
    completionPercentage?: boolean
    finalRank?: boolean
    finishTime?: boolean
    createdAt?: boolean
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    participant?: boolean | CompetitionParticipantDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>

  export type ResultSelectScalar = {
    id?: boolean
    competitionId?: boolean
    participantId?: boolean
    grossWpm?: boolean
    netWpm?: boolean
    cpm?: boolean
    accuracy?: boolean
    errors?: boolean
    completionPercentage?: boolean
    finalRank?: boolean
    finishTime?: boolean
    createdAt?: boolean
  }

  export type ResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "competitionId" | "participantId" | "grossWpm" | "netWpm" | "cpm" | "accuracy" | "errors" | "completionPercentage" | "finalRank" | "finishTime" | "createdAt", ExtArgs["result"]["result"]>
  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    participant?: boolean | CompetitionParticipantDefaultArgs<ExtArgs>
  }
  export type ResultIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    participant?: boolean | CompetitionParticipantDefaultArgs<ExtArgs>
  }
  export type ResultIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    competition?: boolean | CompetitionDefaultArgs<ExtArgs>
    participant?: boolean | CompetitionParticipantDefaultArgs<ExtArgs>
  }

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      competition: Prisma.$CompetitionPayload<ExtArgs>
      participant: Prisma.$CompetitionParticipantPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      competitionId: string
      participantId: string
      grossWpm: number
      netWpm: number
      cpm: number
      accuracy: number
      errors: number
      completionPercentage: number
      finalRank: number | null
      finishTime: number | null
      createdAt: Date
    }, ExtArgs["result"]["result"]>
    composites: {}
  }

  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultFindUniqueArgs>(args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Result that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultFindFirstArgs>(args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultWithIdOnly = await prisma.result.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultFindManyArgs>(args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
     */
    create<T extends ResultCreateArgs>(args: SelectSubset<T, ResultCreateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {ResultCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultCreateManyArgs>(args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Results and returns the data saved in the database.
     * @param {ResultCreateManyAndReturnArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Results and only return the `id`
     * const resultWithIdOnly = await prisma.result.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResultCreateManyAndReturnArgs>(args?: SelectSubset<T, ResultCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
     */
    delete<T extends ResultDeleteArgs>(args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultUpdateArgs>(args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultDeleteManyArgs>(args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultUpdateManyArgs>(args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results and returns the data updated in the database.
     * @param {ResultUpdateManyAndReturnArgs} args - Arguments to update many Results.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Results and only return the `id`
     * const resultWithIdOnly = await prisma.result.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ResultUpdateManyAndReturnArgs>(args: SelectSubset<T, ResultUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
     */
    upsert<T extends ResultUpsertArgs>(args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    competition<T extends CompetitionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionDefaultArgs<ExtArgs>>): Prisma__CompetitionClient<$Result.GetResult<Prisma.$CompetitionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    participant<T extends CompetitionParticipantDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompetitionParticipantDefaultArgs<ExtArgs>>): Prisma__CompetitionParticipantClient<$Result.GetResult<Prisma.$CompetitionParticipantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Result model
   */
  interface ResultFieldRefs {
    readonly id: FieldRef<"Result", 'String'>
    readonly competitionId: FieldRef<"Result", 'String'>
    readonly participantId: FieldRef<"Result", 'String'>
    readonly grossWpm: FieldRef<"Result", 'Int'>
    readonly netWpm: FieldRef<"Result", 'Int'>
    readonly cpm: FieldRef<"Result", 'Int'>
    readonly accuracy: FieldRef<"Result", 'Float'>
    readonly errors: FieldRef<"Result", 'Int'>
    readonly completionPercentage: FieldRef<"Result", 'Float'>
    readonly finalRank: FieldRef<"Result", 'Int'>
    readonly finishTime: FieldRef<"Result", 'Int'>
    readonly createdAt: FieldRef<"Result", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }

  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
  }

  /**
   * Result createManyAndReturn
   */
  export type ResultCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
  }

  /**
   * Result updateManyAndReturn
   */
  export type ResultUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }

  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to delete.
     */
    limit?: number
  }

  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AdminScalarFieldEnum: {
    id: 'id',
    username: 'username',
    passwordHash: 'passwordHash',
    createdAt: 'createdAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const PlayerSessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    name: 'name',
    scholarNumber: 'scholarNumber',
    mandal: 'mandal',
    semester: 'semester',
    avatarId: 'avatarId',
    createdAt: 'createdAt',
    lastSeenAt: 'lastSeenAt'
  };

  export type PlayerSessionScalarFieldEnum = (typeof PlayerSessionScalarFieldEnum)[keyof typeof PlayerSessionScalarFieldEnum]


  export const CompetitionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    roomCode: 'roomCode',
    language: 'language',
    gameMode: 'gameMode',
    difficulty: 'difficulty',
    duration: 'duration',
    paragraphId: 'paragraphId',
    status: 'status',
    createdBy: 'createdBy',
    startAt: 'startAt',
    endedAt: 'endedAt',
    createdAt: 'createdAt'
  };

  export type CompetitionScalarFieldEnum = (typeof CompetitionScalarFieldEnum)[keyof typeof CompetitionScalarFieldEnum]


  export const CompetitionParticipantScalarFieldEnum: {
    id: 'id',
    competitionId: 'competitionId',
    playerSessionId: 'playerSessionId',
    ready: 'ready',
    connectionStatus: 'connectionStatus',
    joinedAt: 'joinedAt',
    finishedAt: 'finishedAt'
  };

  export type CompetitionParticipantScalarFieldEnum = (typeof CompetitionParticipantScalarFieldEnum)[keyof typeof CompetitionParticipantScalarFieldEnum]


  export const ParagraphScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    language: 'language',
    difficulty: 'difficulty',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ParagraphScalarFieldEnum = (typeof ParagraphScalarFieldEnum)[keyof typeof ParagraphScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    id: 'id',
    competitionId: 'competitionId',
    participantId: 'participantId',
    grossWpm: 'grossWpm',
    netWpm: 'netWpm',
    cpm: 'cpm',
    accuracy: 'accuracy',
    errors: 'errors',
    completionPercentage: 'completionPercentage',
    finalRank: 'finalRank',
    finishTime: 'finishTime',
    createdAt: 'createdAt'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    username?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    competitions?: CompetitionListRelationFilter
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    competitions?: CompetitionOrderByRelationAggregateInput
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    passwordHash?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    competitions?: CompetitionListRelationFilter
  }, "id" | "username">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    username?: StringWithAggregatesFilter<"Admin"> | string
    passwordHash?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type PlayerSessionWhereInput = {
    AND?: PlayerSessionWhereInput | PlayerSessionWhereInput[]
    OR?: PlayerSessionWhereInput[]
    NOT?: PlayerSessionWhereInput | PlayerSessionWhereInput[]
    id?: StringFilter<"PlayerSession"> | string
    sessionToken?: StringFilter<"PlayerSession"> | string
    name?: StringFilter<"PlayerSession"> | string
    scholarNumber?: StringFilter<"PlayerSession"> | string
    mandal?: StringFilter<"PlayerSession"> | string
    semester?: StringFilter<"PlayerSession"> | string
    avatarId?: StringFilter<"PlayerSession"> | string
    createdAt?: DateTimeFilter<"PlayerSession"> | Date | string
    lastSeenAt?: DateTimeFilter<"PlayerSession"> | Date | string
    participations?: CompetitionParticipantListRelationFilter
  }

  export type PlayerSessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    name?: SortOrder
    scholarNumber?: SortOrder
    mandal?: SortOrder
    semester?: SortOrder
    avatarId?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    participations?: CompetitionParticipantOrderByRelationAggregateInput
  }

  export type PlayerSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: PlayerSessionWhereInput | PlayerSessionWhereInput[]
    OR?: PlayerSessionWhereInput[]
    NOT?: PlayerSessionWhereInput | PlayerSessionWhereInput[]
    name?: StringFilter<"PlayerSession"> | string
    scholarNumber?: StringFilter<"PlayerSession"> | string
    mandal?: StringFilter<"PlayerSession"> | string
    semester?: StringFilter<"PlayerSession"> | string
    avatarId?: StringFilter<"PlayerSession"> | string
    createdAt?: DateTimeFilter<"PlayerSession"> | Date | string
    lastSeenAt?: DateTimeFilter<"PlayerSession"> | Date | string
    participations?: CompetitionParticipantListRelationFilter
  }, "id" | "sessionToken">

  export type PlayerSessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    name?: SortOrder
    scholarNumber?: SortOrder
    mandal?: SortOrder
    semester?: SortOrder
    avatarId?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
    _count?: PlayerSessionCountOrderByAggregateInput
    _max?: PlayerSessionMaxOrderByAggregateInput
    _min?: PlayerSessionMinOrderByAggregateInput
  }

  export type PlayerSessionScalarWhereWithAggregatesInput = {
    AND?: PlayerSessionScalarWhereWithAggregatesInput | PlayerSessionScalarWhereWithAggregatesInput[]
    OR?: PlayerSessionScalarWhereWithAggregatesInput[]
    NOT?: PlayerSessionScalarWhereWithAggregatesInput | PlayerSessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlayerSession"> | string
    sessionToken?: StringWithAggregatesFilter<"PlayerSession"> | string
    name?: StringWithAggregatesFilter<"PlayerSession"> | string
    scholarNumber?: StringWithAggregatesFilter<"PlayerSession"> | string
    mandal?: StringWithAggregatesFilter<"PlayerSession"> | string
    semester?: StringWithAggregatesFilter<"PlayerSession"> | string
    avatarId?: StringWithAggregatesFilter<"PlayerSession"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PlayerSession"> | Date | string
    lastSeenAt?: DateTimeWithAggregatesFilter<"PlayerSession"> | Date | string
  }

  export type CompetitionWhereInput = {
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    id?: StringFilter<"Competition"> | string
    name?: StringFilter<"Competition"> | string
    roomCode?: StringFilter<"Competition"> | string
    language?: StringFilter<"Competition"> | string
    gameMode?: StringFilter<"Competition"> | string
    difficulty?: StringFilter<"Competition"> | string
    duration?: IntNullableFilter<"Competition"> | number | null
    paragraphId?: StringFilter<"Competition"> | string
    status?: StringFilter<"Competition"> | string
    createdBy?: StringFilter<"Competition"> | string
    startAt?: DateTimeNullableFilter<"Competition"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Competition"> | Date | string | null
    createdAt?: DateTimeFilter<"Competition"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    paragraph?: XOR<ParagraphScalarRelationFilter, ParagraphWhereInput>
    participants?: CompetitionParticipantListRelationFilter
    results?: ResultListRelationFilter
  }

  export type CompetitionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    roomCode?: SortOrder
    language?: SortOrder
    gameMode?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrderInput | SortOrder
    paragraphId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    startAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    admin?: AdminOrderByWithRelationInput
    paragraph?: ParagraphOrderByWithRelationInput
    participants?: CompetitionParticipantOrderByRelationAggregateInput
    results?: ResultOrderByRelationAggregateInput
  }

  export type CompetitionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    roomCode?: string
    AND?: CompetitionWhereInput | CompetitionWhereInput[]
    OR?: CompetitionWhereInput[]
    NOT?: CompetitionWhereInput | CompetitionWhereInput[]
    name?: StringFilter<"Competition"> | string
    language?: StringFilter<"Competition"> | string
    gameMode?: StringFilter<"Competition"> | string
    difficulty?: StringFilter<"Competition"> | string
    duration?: IntNullableFilter<"Competition"> | number | null
    paragraphId?: StringFilter<"Competition"> | string
    status?: StringFilter<"Competition"> | string
    createdBy?: StringFilter<"Competition"> | string
    startAt?: DateTimeNullableFilter<"Competition"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Competition"> | Date | string | null
    createdAt?: DateTimeFilter<"Competition"> | Date | string
    admin?: XOR<AdminScalarRelationFilter, AdminWhereInput>
    paragraph?: XOR<ParagraphScalarRelationFilter, ParagraphWhereInput>
    participants?: CompetitionParticipantListRelationFilter
    results?: ResultListRelationFilter
  }, "id" | "roomCode">

  export type CompetitionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    roomCode?: SortOrder
    language?: SortOrder
    gameMode?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrderInput | SortOrder
    paragraphId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    startAt?: SortOrderInput | SortOrder
    endedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompetitionCountOrderByAggregateInput
    _avg?: CompetitionAvgOrderByAggregateInput
    _max?: CompetitionMaxOrderByAggregateInput
    _min?: CompetitionMinOrderByAggregateInput
    _sum?: CompetitionSumOrderByAggregateInput
  }

  export type CompetitionScalarWhereWithAggregatesInput = {
    AND?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    OR?: CompetitionScalarWhereWithAggregatesInput[]
    NOT?: CompetitionScalarWhereWithAggregatesInput | CompetitionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Competition"> | string
    name?: StringWithAggregatesFilter<"Competition"> | string
    roomCode?: StringWithAggregatesFilter<"Competition"> | string
    language?: StringWithAggregatesFilter<"Competition"> | string
    gameMode?: StringWithAggregatesFilter<"Competition"> | string
    difficulty?: StringWithAggregatesFilter<"Competition"> | string
    duration?: IntNullableWithAggregatesFilter<"Competition"> | number | null
    paragraphId?: StringWithAggregatesFilter<"Competition"> | string
    status?: StringWithAggregatesFilter<"Competition"> | string
    createdBy?: StringWithAggregatesFilter<"Competition"> | string
    startAt?: DateTimeNullableWithAggregatesFilter<"Competition"> | Date | string | null
    endedAt?: DateTimeNullableWithAggregatesFilter<"Competition"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Competition"> | Date | string
  }

  export type CompetitionParticipantWhereInput = {
    AND?: CompetitionParticipantWhereInput | CompetitionParticipantWhereInput[]
    OR?: CompetitionParticipantWhereInput[]
    NOT?: CompetitionParticipantWhereInput | CompetitionParticipantWhereInput[]
    id?: StringFilter<"CompetitionParticipant"> | string
    competitionId?: StringFilter<"CompetitionParticipant"> | string
    playerSessionId?: StringFilter<"CompetitionParticipant"> | string
    ready?: BoolFilter<"CompetitionParticipant"> | boolean
    connectionStatus?: StringFilter<"CompetitionParticipant"> | string
    joinedAt?: DateTimeFilter<"CompetitionParticipant"> | Date | string
    finishedAt?: DateTimeNullableFilter<"CompetitionParticipant"> | Date | string | null
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    playerSession?: XOR<PlayerSessionScalarRelationFilter, PlayerSessionWhereInput>
    results?: ResultListRelationFilter
  }

  export type CompetitionParticipantOrderByWithRelationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    playerSessionId?: SortOrder
    ready?: SortOrder
    connectionStatus?: SortOrder
    joinedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    competition?: CompetitionOrderByWithRelationInput
    playerSession?: PlayerSessionOrderByWithRelationInput
    results?: ResultOrderByRelationAggregateInput
  }

  export type CompetitionParticipantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    competitionId_playerSessionId?: CompetitionParticipantCompetitionIdPlayerSessionIdCompoundUniqueInput
    AND?: CompetitionParticipantWhereInput | CompetitionParticipantWhereInput[]
    OR?: CompetitionParticipantWhereInput[]
    NOT?: CompetitionParticipantWhereInput | CompetitionParticipantWhereInput[]
    competitionId?: StringFilter<"CompetitionParticipant"> | string
    playerSessionId?: StringFilter<"CompetitionParticipant"> | string
    ready?: BoolFilter<"CompetitionParticipant"> | boolean
    connectionStatus?: StringFilter<"CompetitionParticipant"> | string
    joinedAt?: DateTimeFilter<"CompetitionParticipant"> | Date | string
    finishedAt?: DateTimeNullableFilter<"CompetitionParticipant"> | Date | string | null
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    playerSession?: XOR<PlayerSessionScalarRelationFilter, PlayerSessionWhereInput>
    results?: ResultListRelationFilter
  }, "id" | "competitionId_playerSessionId">

  export type CompetitionParticipantOrderByWithAggregationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    playerSessionId?: SortOrder
    ready?: SortOrder
    connectionStatus?: SortOrder
    joinedAt?: SortOrder
    finishedAt?: SortOrderInput | SortOrder
    _count?: CompetitionParticipantCountOrderByAggregateInput
    _max?: CompetitionParticipantMaxOrderByAggregateInput
    _min?: CompetitionParticipantMinOrderByAggregateInput
  }

  export type CompetitionParticipantScalarWhereWithAggregatesInput = {
    AND?: CompetitionParticipantScalarWhereWithAggregatesInput | CompetitionParticipantScalarWhereWithAggregatesInput[]
    OR?: CompetitionParticipantScalarWhereWithAggregatesInput[]
    NOT?: CompetitionParticipantScalarWhereWithAggregatesInput | CompetitionParticipantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompetitionParticipant"> | string
    competitionId?: StringWithAggregatesFilter<"CompetitionParticipant"> | string
    playerSessionId?: StringWithAggregatesFilter<"CompetitionParticipant"> | string
    ready?: BoolWithAggregatesFilter<"CompetitionParticipant"> | boolean
    connectionStatus?: StringWithAggregatesFilter<"CompetitionParticipant"> | string
    joinedAt?: DateTimeWithAggregatesFilter<"CompetitionParticipant"> | Date | string
    finishedAt?: DateTimeNullableWithAggregatesFilter<"CompetitionParticipant"> | Date | string | null
  }

  export type ParagraphWhereInput = {
    AND?: ParagraphWhereInput | ParagraphWhereInput[]
    OR?: ParagraphWhereInput[]
    NOT?: ParagraphWhereInput | ParagraphWhereInput[]
    id?: StringFilter<"Paragraph"> | string
    title?: StringFilter<"Paragraph"> | string
    content?: StringFilter<"Paragraph"> | string
    language?: StringFilter<"Paragraph"> | string
    difficulty?: StringFilter<"Paragraph"> | string
    createdAt?: DateTimeFilter<"Paragraph"> | Date | string
    updatedAt?: DateTimeFilter<"Paragraph"> | Date | string
    competitions?: CompetitionListRelationFilter
  }

  export type ParagraphOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    language?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    competitions?: CompetitionOrderByRelationAggregateInput
  }

  export type ParagraphWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ParagraphWhereInput | ParagraphWhereInput[]
    OR?: ParagraphWhereInput[]
    NOT?: ParagraphWhereInput | ParagraphWhereInput[]
    title?: StringFilter<"Paragraph"> | string
    content?: StringFilter<"Paragraph"> | string
    language?: StringFilter<"Paragraph"> | string
    difficulty?: StringFilter<"Paragraph"> | string
    createdAt?: DateTimeFilter<"Paragraph"> | Date | string
    updatedAt?: DateTimeFilter<"Paragraph"> | Date | string
    competitions?: CompetitionListRelationFilter
  }, "id">

  export type ParagraphOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    language?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ParagraphCountOrderByAggregateInput
    _max?: ParagraphMaxOrderByAggregateInput
    _min?: ParagraphMinOrderByAggregateInput
  }

  export type ParagraphScalarWhereWithAggregatesInput = {
    AND?: ParagraphScalarWhereWithAggregatesInput | ParagraphScalarWhereWithAggregatesInput[]
    OR?: ParagraphScalarWhereWithAggregatesInput[]
    NOT?: ParagraphScalarWhereWithAggregatesInput | ParagraphScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Paragraph"> | string
    title?: StringWithAggregatesFilter<"Paragraph"> | string
    content?: StringWithAggregatesFilter<"Paragraph"> | string
    language?: StringWithAggregatesFilter<"Paragraph"> | string
    difficulty?: StringWithAggregatesFilter<"Paragraph"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Paragraph"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Paragraph"> | Date | string
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    id?: StringFilter<"Result"> | string
    competitionId?: StringFilter<"Result"> | string
    participantId?: StringFilter<"Result"> | string
    grossWpm?: IntFilter<"Result"> | number
    netWpm?: IntFilter<"Result"> | number
    cpm?: IntFilter<"Result"> | number
    accuracy?: FloatFilter<"Result"> | number
    errors?: IntFilter<"Result"> | number
    completionPercentage?: FloatFilter<"Result"> | number
    finalRank?: IntNullableFilter<"Result"> | number | null
    finishTime?: IntNullableFilter<"Result"> | number | null
    createdAt?: DateTimeFilter<"Result"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    participant?: XOR<CompetitionParticipantScalarRelationFilter, CompetitionParticipantWhereInput>
  }

  export type ResultOrderByWithRelationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    participantId?: SortOrder
    grossWpm?: SortOrder
    netWpm?: SortOrder
    cpm?: SortOrder
    accuracy?: SortOrder
    errors?: SortOrder
    completionPercentage?: SortOrder
    finalRank?: SortOrderInput | SortOrder
    finishTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    competition?: CompetitionOrderByWithRelationInput
    participant?: CompetitionParticipantOrderByWithRelationInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    competitionId?: StringFilter<"Result"> | string
    participantId?: StringFilter<"Result"> | string
    grossWpm?: IntFilter<"Result"> | number
    netWpm?: IntFilter<"Result"> | number
    cpm?: IntFilter<"Result"> | number
    accuracy?: FloatFilter<"Result"> | number
    errors?: IntFilter<"Result"> | number
    completionPercentage?: FloatFilter<"Result"> | number
    finalRank?: IntNullableFilter<"Result"> | number | null
    finishTime?: IntNullableFilter<"Result"> | number | null
    createdAt?: DateTimeFilter<"Result"> | Date | string
    competition?: XOR<CompetitionScalarRelationFilter, CompetitionWhereInput>
    participant?: XOR<CompetitionParticipantScalarRelationFilter, CompetitionParticipantWhereInput>
  }, "id">

  export type ResultOrderByWithAggregationInput = {
    id?: SortOrder
    competitionId?: SortOrder
    participantId?: SortOrder
    grossWpm?: SortOrder
    netWpm?: SortOrder
    cpm?: SortOrder
    accuracy?: SortOrder
    errors?: SortOrder
    completionPercentage?: SortOrder
    finalRank?: SortOrderInput | SortOrder
    finishTime?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Result"> | string
    competitionId?: StringWithAggregatesFilter<"Result"> | string
    participantId?: StringWithAggregatesFilter<"Result"> | string
    grossWpm?: IntWithAggregatesFilter<"Result"> | number
    netWpm?: IntWithAggregatesFilter<"Result"> | number
    cpm?: IntWithAggregatesFilter<"Result"> | number
    accuracy?: FloatWithAggregatesFilter<"Result"> | number
    errors?: IntWithAggregatesFilter<"Result"> | number
    completionPercentage?: FloatWithAggregatesFilter<"Result"> | number
    finalRank?: IntNullableWithAggregatesFilter<"Result"> | number | null
    finishTime?: IntNullableWithAggregatesFilter<"Result"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Result"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    competitions?: CompetitionCreateNestedManyWithoutAdminInput
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
    competitions?: CompetitionUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitions?: CompetitionUpdateManyWithoutAdminNestedInput
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitions?: CompetitionUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminCreateManyInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSessionCreateInput = {
    id?: string
    sessionToken: string
    name: string
    scholarNumber: string
    mandal: string
    semester: string
    avatarId: string
    createdAt?: Date | string
    lastSeenAt?: Date | string
    participations?: CompetitionParticipantCreateNestedManyWithoutPlayerSessionInput
  }

  export type PlayerSessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    name: string
    scholarNumber: string
    mandal: string
    semester: string
    avatarId: string
    createdAt?: Date | string
    lastSeenAt?: Date | string
    participations?: CompetitionParticipantUncheckedCreateNestedManyWithoutPlayerSessionInput
  }

  export type PlayerSessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scholarNumber?: StringFieldUpdateOperationsInput | string
    mandal?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    avatarId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: CompetitionParticipantUpdateManyWithoutPlayerSessionNestedInput
  }

  export type PlayerSessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scholarNumber?: StringFieldUpdateOperationsInput | string
    mandal?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    avatarId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participations?: CompetitionParticipantUncheckedUpdateManyWithoutPlayerSessionNestedInput
  }

  export type PlayerSessionCreateManyInput = {
    id?: string
    sessionToken: string
    name: string
    scholarNumber: string
    mandal: string
    semester: string
    avatarId: string
    createdAt?: Date | string
    lastSeenAt?: Date | string
  }

  export type PlayerSessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scholarNumber?: StringFieldUpdateOperationsInput | string
    mandal?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    avatarId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scholarNumber?: StringFieldUpdateOperationsInput | string
    mandal?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    avatarId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCreateInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    status: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutCompetitionsInput
    paragraph: ParagraphCreateNestedOneWithoutCompetitionsInput
    participants?: CompetitionParticipantCreateNestedManyWithoutCompetitionInput
    results?: ResultCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    paragraphId: string
    status: string
    createdBy: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    participants?: CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput
    results?: ResultUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutCompetitionsNestedInput
    paragraph?: ParagraphUpdateOneRequiredWithoutCompetitionsNestedInput
    participants?: CompetitionParticipantUpdateManyWithoutCompetitionNestedInput
    results?: ResultUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    paragraphId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: CompetitionParticipantUncheckedUpdateManyWithoutCompetitionNestedInput
    results?: ResultUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionCreateManyInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    paragraphId: string
    status: string
    createdBy: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CompetitionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    paragraphId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionParticipantCreateInput = {
    id?: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
    competition: CompetitionCreateNestedOneWithoutParticipantsInput
    playerSession: PlayerSessionCreateNestedOneWithoutParticipationsInput
    results?: ResultCreateNestedManyWithoutParticipantInput
  }

  export type CompetitionParticipantUncheckedCreateInput = {
    id?: string
    competitionId: string
    playerSessionId: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
    results?: ResultUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type CompetitionParticipantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competition?: CompetitionUpdateOneRequiredWithoutParticipantsNestedInput
    playerSession?: PlayerSessionUpdateOneRequiredWithoutParticipationsNestedInput
    results?: ResultUpdateManyWithoutParticipantNestedInput
  }

  export type CompetitionParticipantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    playerSessionId?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: ResultUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type CompetitionParticipantCreateManyInput = {
    id?: string
    competitionId: string
    playerSessionId: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type CompetitionParticipantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionParticipantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    playerSessionId?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ParagraphCreateInput = {
    id?: string
    title: string
    content: string
    language: string
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    competitions?: CompetitionCreateNestedManyWithoutParagraphInput
  }

  export type ParagraphUncheckedCreateInput = {
    id?: string
    title: string
    content: string
    language: string
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
    competitions?: CompetitionUncheckedCreateNestedManyWithoutParagraphInput
  }

  export type ParagraphUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitions?: CompetitionUpdateManyWithoutParagraphNestedInput
  }

  export type ParagraphUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competitions?: CompetitionUncheckedUpdateManyWithoutParagraphNestedInput
  }

  export type ParagraphCreateManyInput = {
    id?: string
    title: string
    content: string
    language: string
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParagraphUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParagraphUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateInput = {
    id?: string
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank?: number | null
    finishTime?: number | null
    createdAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutResultsInput
    participant: CompetitionParticipantCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateInput = {
    id?: string
    competitionId: string
    participantId: string
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank?: number | null
    finishTime?: number | null
    createdAt?: Date | string
  }

  export type ResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossWpm?: IntFieldUpdateOperationsInput | number
    netWpm?: IntFieldUpdateOperationsInput | number
    cpm?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    finalRank?: NullableIntFieldUpdateOperationsInput | number | null
    finishTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutResultsNestedInput
    participant?: CompetitionParticipantUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    grossWpm?: IntFieldUpdateOperationsInput | number
    netWpm?: IntFieldUpdateOperationsInput | number
    cpm?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    finalRank?: NullableIntFieldUpdateOperationsInput | number | null
    finishTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateManyInput = {
    id?: string
    competitionId: string
    participantId: string
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank?: number | null
    finishTime?: number | null
    createdAt?: Date | string
  }

  export type ResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossWpm?: IntFieldUpdateOperationsInput | number
    netWpm?: IntFieldUpdateOperationsInput | number
    cpm?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    finalRank?: NullableIntFieldUpdateOperationsInput | number | null
    finishTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    grossWpm?: IntFieldUpdateOperationsInput | number
    netWpm?: IntFieldUpdateOperationsInput | number
    cpm?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    finalRank?: NullableIntFieldUpdateOperationsInput | number | null
    finishTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CompetitionListRelationFilter = {
    every?: CompetitionWhereInput
    some?: CompetitionWhereInput
    none?: CompetitionWhereInput
  }

  export type CompetitionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    passwordHash?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CompetitionParticipantListRelationFilter = {
    every?: CompetitionParticipantWhereInput
    some?: CompetitionParticipantWhereInput
    none?: CompetitionParticipantWhereInput
  }

  export type CompetitionParticipantOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerSessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    name?: SortOrder
    scholarNumber?: SortOrder
    mandal?: SortOrder
    semester?: SortOrder
    avatarId?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type PlayerSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    name?: SortOrder
    scholarNumber?: SortOrder
    mandal?: SortOrder
    semester?: SortOrder
    avatarId?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type PlayerSessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    name?: SortOrder
    scholarNumber?: SortOrder
    mandal?: SortOrder
    semester?: SortOrder
    avatarId?: SortOrder
    createdAt?: SortOrder
    lastSeenAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AdminScalarRelationFilter = {
    is?: AdminWhereInput
    isNot?: AdminWhereInput
  }

  export type ParagraphScalarRelationFilter = {
    is?: ParagraphWhereInput
    isNot?: ParagraphWhereInput
  }

  export type ResultListRelationFilter = {
    every?: ResultWhereInput
    some?: ResultWhereInput
    none?: ResultWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompetitionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roomCode?: SortOrder
    language?: SortOrder
    gameMode?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    paragraphId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    startAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type CompetitionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roomCode?: SortOrder
    language?: SortOrder
    gameMode?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    paragraphId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    startAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    roomCode?: SortOrder
    language?: SortOrder
    gameMode?: SortOrder
    difficulty?: SortOrder
    duration?: SortOrder
    paragraphId?: SortOrder
    status?: SortOrder
    createdBy?: SortOrder
    startAt?: SortOrder
    endedAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CompetitionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CompetitionScalarRelationFilter = {
    is?: CompetitionWhereInput
    isNot?: CompetitionWhereInput
  }

  export type PlayerSessionScalarRelationFilter = {
    is?: PlayerSessionWhereInput
    isNot?: PlayerSessionWhereInput
  }

  export type CompetitionParticipantCompetitionIdPlayerSessionIdCompoundUniqueInput = {
    competitionId: string
    playerSessionId: string
  }

  export type CompetitionParticipantCountOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    playerSessionId?: SortOrder
    ready?: SortOrder
    connectionStatus?: SortOrder
    joinedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type CompetitionParticipantMaxOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    playerSessionId?: SortOrder
    ready?: SortOrder
    connectionStatus?: SortOrder
    joinedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type CompetitionParticipantMinOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    playerSessionId?: SortOrder
    ready?: SortOrder
    connectionStatus?: SortOrder
    joinedAt?: SortOrder
    finishedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ParagraphCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    language?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParagraphMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    language?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ParagraphMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    language?: SortOrder
    difficulty?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CompetitionParticipantScalarRelationFilter = {
    is?: CompetitionParticipantWhereInput
    isNot?: CompetitionParticipantWhereInput
  }

  export type ResultCountOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    participantId?: SortOrder
    grossWpm?: SortOrder
    netWpm?: SortOrder
    cpm?: SortOrder
    accuracy?: SortOrder
    errors?: SortOrder
    completionPercentage?: SortOrder
    finalRank?: SortOrder
    finishTime?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    grossWpm?: SortOrder
    netWpm?: SortOrder
    cpm?: SortOrder
    accuracy?: SortOrder
    errors?: SortOrder
    completionPercentage?: SortOrder
    finalRank?: SortOrder
    finishTime?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    participantId?: SortOrder
    grossWpm?: SortOrder
    netWpm?: SortOrder
    cpm?: SortOrder
    accuracy?: SortOrder
    errors?: SortOrder
    completionPercentage?: SortOrder
    finalRank?: SortOrder
    finishTime?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    id?: SortOrder
    competitionId?: SortOrder
    participantId?: SortOrder
    grossWpm?: SortOrder
    netWpm?: SortOrder
    cpm?: SortOrder
    accuracy?: SortOrder
    errors?: SortOrder
    completionPercentage?: SortOrder
    finalRank?: SortOrder
    finishTime?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    grossWpm?: SortOrder
    netWpm?: SortOrder
    cpm?: SortOrder
    accuracy?: SortOrder
    errors?: SortOrder
    completionPercentage?: SortOrder
    finalRank?: SortOrder
    finishTime?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CompetitionCreateNestedManyWithoutAdminInput = {
    create?: XOR<CompetitionCreateWithoutAdminInput, CompetitionUncheckedCreateWithoutAdminInput> | CompetitionCreateWithoutAdminInput[] | CompetitionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutAdminInput | CompetitionCreateOrConnectWithoutAdminInput[]
    createMany?: CompetitionCreateManyAdminInputEnvelope
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type CompetitionUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<CompetitionCreateWithoutAdminInput, CompetitionUncheckedCreateWithoutAdminInput> | CompetitionCreateWithoutAdminInput[] | CompetitionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutAdminInput | CompetitionCreateOrConnectWithoutAdminInput[]
    createMany?: CompetitionCreateManyAdminInputEnvelope
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CompetitionUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CompetitionCreateWithoutAdminInput, CompetitionUncheckedCreateWithoutAdminInput> | CompetitionCreateWithoutAdminInput[] | CompetitionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutAdminInput | CompetitionCreateOrConnectWithoutAdminInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutAdminInput | CompetitionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CompetitionCreateManyAdminInputEnvelope
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutAdminInput | CompetitionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutAdminInput | CompetitionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type CompetitionUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<CompetitionCreateWithoutAdminInput, CompetitionUncheckedCreateWithoutAdminInput> | CompetitionCreateWithoutAdminInput[] | CompetitionUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutAdminInput | CompetitionCreateOrConnectWithoutAdminInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutAdminInput | CompetitionUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: CompetitionCreateManyAdminInputEnvelope
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutAdminInput | CompetitionUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutAdminInput | CompetitionUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type CompetitionParticipantCreateNestedManyWithoutPlayerSessionInput = {
    create?: XOR<CompetitionParticipantCreateWithoutPlayerSessionInput, CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput> | CompetitionParticipantCreateWithoutPlayerSessionInput[] | CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutPlayerSessionInput | CompetitionParticipantCreateOrConnectWithoutPlayerSessionInput[]
    createMany?: CompetitionParticipantCreateManyPlayerSessionInputEnvelope
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
  }

  export type CompetitionParticipantUncheckedCreateNestedManyWithoutPlayerSessionInput = {
    create?: XOR<CompetitionParticipantCreateWithoutPlayerSessionInput, CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput> | CompetitionParticipantCreateWithoutPlayerSessionInput[] | CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutPlayerSessionInput | CompetitionParticipantCreateOrConnectWithoutPlayerSessionInput[]
    createMany?: CompetitionParticipantCreateManyPlayerSessionInputEnvelope
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
  }

  export type CompetitionParticipantUpdateManyWithoutPlayerSessionNestedInput = {
    create?: XOR<CompetitionParticipantCreateWithoutPlayerSessionInput, CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput> | CompetitionParticipantCreateWithoutPlayerSessionInput[] | CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutPlayerSessionInput | CompetitionParticipantCreateOrConnectWithoutPlayerSessionInput[]
    upsert?: CompetitionParticipantUpsertWithWhereUniqueWithoutPlayerSessionInput | CompetitionParticipantUpsertWithWhereUniqueWithoutPlayerSessionInput[]
    createMany?: CompetitionParticipantCreateManyPlayerSessionInputEnvelope
    set?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    disconnect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    delete?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    update?: CompetitionParticipantUpdateWithWhereUniqueWithoutPlayerSessionInput | CompetitionParticipantUpdateWithWhereUniqueWithoutPlayerSessionInput[]
    updateMany?: CompetitionParticipantUpdateManyWithWhereWithoutPlayerSessionInput | CompetitionParticipantUpdateManyWithWhereWithoutPlayerSessionInput[]
    deleteMany?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
  }

  export type CompetitionParticipantUncheckedUpdateManyWithoutPlayerSessionNestedInput = {
    create?: XOR<CompetitionParticipantCreateWithoutPlayerSessionInput, CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput> | CompetitionParticipantCreateWithoutPlayerSessionInput[] | CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutPlayerSessionInput | CompetitionParticipantCreateOrConnectWithoutPlayerSessionInput[]
    upsert?: CompetitionParticipantUpsertWithWhereUniqueWithoutPlayerSessionInput | CompetitionParticipantUpsertWithWhereUniqueWithoutPlayerSessionInput[]
    createMany?: CompetitionParticipantCreateManyPlayerSessionInputEnvelope
    set?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    disconnect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    delete?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    update?: CompetitionParticipantUpdateWithWhereUniqueWithoutPlayerSessionInput | CompetitionParticipantUpdateWithWhereUniqueWithoutPlayerSessionInput[]
    updateMany?: CompetitionParticipantUpdateManyWithWhereWithoutPlayerSessionInput | CompetitionParticipantUpdateManyWithWhereWithoutPlayerSessionInput[]
    deleteMany?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
  }

  export type AdminCreateNestedOneWithoutCompetitionsInput = {
    create?: XOR<AdminCreateWithoutCompetitionsInput, AdminUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCompetitionsInput
    connect?: AdminWhereUniqueInput
  }

  export type ParagraphCreateNestedOneWithoutCompetitionsInput = {
    create?: XOR<ParagraphCreateWithoutCompetitionsInput, ParagraphUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: ParagraphCreateOrConnectWithoutCompetitionsInput
    connect?: ParagraphWhereUniqueInput
  }

  export type CompetitionParticipantCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput> | CompetitionParticipantCreateWithoutCompetitionInput[] | CompetitionParticipantUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutCompetitionInput | CompetitionParticipantCreateOrConnectWithoutCompetitionInput[]
    createMany?: CompetitionParticipantCreateManyCompetitionInputEnvelope
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
  }

  export type ResultCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<ResultCreateWithoutCompetitionInput, ResultUncheckedCreateWithoutCompetitionInput> | ResultCreateWithoutCompetitionInput[] | ResultUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutCompetitionInput | ResultCreateOrConnectWithoutCompetitionInput[]
    createMany?: ResultCreateManyCompetitionInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput> | CompetitionParticipantCreateWithoutCompetitionInput[] | CompetitionParticipantUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutCompetitionInput | CompetitionParticipantCreateOrConnectWithoutCompetitionInput[]
    createMany?: CompetitionParticipantCreateManyCompetitionInputEnvelope
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutCompetitionInput = {
    create?: XOR<ResultCreateWithoutCompetitionInput, ResultUncheckedCreateWithoutCompetitionInput> | ResultCreateWithoutCompetitionInput[] | ResultUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutCompetitionInput | ResultCreateOrConnectWithoutCompetitionInput[]
    createMany?: ResultCreateManyCompetitionInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AdminUpdateOneRequiredWithoutCompetitionsNestedInput = {
    create?: XOR<AdminCreateWithoutCompetitionsInput, AdminUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: AdminCreateOrConnectWithoutCompetitionsInput
    upsert?: AdminUpsertWithoutCompetitionsInput
    connect?: AdminWhereUniqueInput
    update?: XOR<XOR<AdminUpdateToOneWithWhereWithoutCompetitionsInput, AdminUpdateWithoutCompetitionsInput>, AdminUncheckedUpdateWithoutCompetitionsInput>
  }

  export type ParagraphUpdateOneRequiredWithoutCompetitionsNestedInput = {
    create?: XOR<ParagraphCreateWithoutCompetitionsInput, ParagraphUncheckedCreateWithoutCompetitionsInput>
    connectOrCreate?: ParagraphCreateOrConnectWithoutCompetitionsInput
    upsert?: ParagraphUpsertWithoutCompetitionsInput
    connect?: ParagraphWhereUniqueInput
    update?: XOR<XOR<ParagraphUpdateToOneWithWhereWithoutCompetitionsInput, ParagraphUpdateWithoutCompetitionsInput>, ParagraphUncheckedUpdateWithoutCompetitionsInput>
  }

  export type CompetitionParticipantUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput> | CompetitionParticipantCreateWithoutCompetitionInput[] | CompetitionParticipantUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutCompetitionInput | CompetitionParticipantCreateOrConnectWithoutCompetitionInput[]
    upsert?: CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput | CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: CompetitionParticipantCreateManyCompetitionInputEnvelope
    set?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    disconnect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    delete?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    update?: CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput | CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput | CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
  }

  export type ResultUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<ResultCreateWithoutCompetitionInput, ResultUncheckedCreateWithoutCompetitionInput> | ResultCreateWithoutCompetitionInput[] | ResultUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutCompetitionInput | ResultCreateOrConnectWithoutCompetitionInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutCompetitionInput | ResultUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: ResultCreateManyCompetitionInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutCompetitionInput | ResultUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutCompetitionInput | ResultUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type CompetitionParticipantUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput> | CompetitionParticipantCreateWithoutCompetitionInput[] | CompetitionParticipantUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutCompetitionInput | CompetitionParticipantCreateOrConnectWithoutCompetitionInput[]
    upsert?: CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput | CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: CompetitionParticipantCreateManyCompetitionInputEnvelope
    set?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    disconnect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    delete?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    connect?: CompetitionParticipantWhereUniqueInput | CompetitionParticipantWhereUniqueInput[]
    update?: CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput | CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput | CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutCompetitionNestedInput = {
    create?: XOR<ResultCreateWithoutCompetitionInput, ResultUncheckedCreateWithoutCompetitionInput> | ResultCreateWithoutCompetitionInput[] | ResultUncheckedCreateWithoutCompetitionInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutCompetitionInput | ResultCreateOrConnectWithoutCompetitionInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutCompetitionInput | ResultUpsertWithWhereUniqueWithoutCompetitionInput[]
    createMany?: ResultCreateManyCompetitionInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutCompetitionInput | ResultUpdateWithWhereUniqueWithoutCompetitionInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutCompetitionInput | ResultUpdateManyWithWhereWithoutCompetitionInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type CompetitionCreateNestedOneWithoutParticipantsInput = {
    create?: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutParticipantsInput
    connect?: CompetitionWhereUniqueInput
  }

  export type PlayerSessionCreateNestedOneWithoutParticipationsInput = {
    create?: XOR<PlayerSessionCreateWithoutParticipationsInput, PlayerSessionUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: PlayerSessionCreateOrConnectWithoutParticipationsInput
    connect?: PlayerSessionWhereUniqueInput
  }

  export type ResultCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput> | ResultCreateWithoutParticipantInput[] | ResultUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutParticipantInput | ResultCreateOrConnectWithoutParticipantInput[]
    createMany?: ResultCreateManyParticipantInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutParticipantInput = {
    create?: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput> | ResultCreateWithoutParticipantInput[] | ResultUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutParticipantInput | ResultCreateOrConnectWithoutParticipantInput[]
    createMany?: ResultCreateManyParticipantInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CompetitionUpdateOneRequiredWithoutParticipantsNestedInput = {
    create?: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutParticipantsInput
    upsert?: CompetitionUpsertWithoutParticipantsInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<XOR<CompetitionUpdateToOneWithWhereWithoutParticipantsInput, CompetitionUpdateWithoutParticipantsInput>, CompetitionUncheckedUpdateWithoutParticipantsInput>
  }

  export type PlayerSessionUpdateOneRequiredWithoutParticipationsNestedInput = {
    create?: XOR<PlayerSessionCreateWithoutParticipationsInput, PlayerSessionUncheckedCreateWithoutParticipationsInput>
    connectOrCreate?: PlayerSessionCreateOrConnectWithoutParticipationsInput
    upsert?: PlayerSessionUpsertWithoutParticipationsInput
    connect?: PlayerSessionWhereUniqueInput
    update?: XOR<XOR<PlayerSessionUpdateToOneWithWhereWithoutParticipationsInput, PlayerSessionUpdateWithoutParticipationsInput>, PlayerSessionUncheckedUpdateWithoutParticipationsInput>
  }

  export type ResultUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput> | ResultCreateWithoutParticipantInput[] | ResultUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutParticipantInput | ResultCreateOrConnectWithoutParticipantInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutParticipantInput | ResultUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ResultCreateManyParticipantInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutParticipantInput | ResultUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutParticipantInput | ResultUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutParticipantNestedInput = {
    create?: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput> | ResultCreateWithoutParticipantInput[] | ResultUncheckedCreateWithoutParticipantInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutParticipantInput | ResultCreateOrConnectWithoutParticipantInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutParticipantInput | ResultUpsertWithWhereUniqueWithoutParticipantInput[]
    createMany?: ResultCreateManyParticipantInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutParticipantInput | ResultUpdateWithWhereUniqueWithoutParticipantInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutParticipantInput | ResultUpdateManyWithWhereWithoutParticipantInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type CompetitionCreateNestedManyWithoutParagraphInput = {
    create?: XOR<CompetitionCreateWithoutParagraphInput, CompetitionUncheckedCreateWithoutParagraphInput> | CompetitionCreateWithoutParagraphInput[] | CompetitionUncheckedCreateWithoutParagraphInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutParagraphInput | CompetitionCreateOrConnectWithoutParagraphInput[]
    createMany?: CompetitionCreateManyParagraphInputEnvelope
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type CompetitionUncheckedCreateNestedManyWithoutParagraphInput = {
    create?: XOR<CompetitionCreateWithoutParagraphInput, CompetitionUncheckedCreateWithoutParagraphInput> | CompetitionCreateWithoutParagraphInput[] | CompetitionUncheckedCreateWithoutParagraphInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutParagraphInput | CompetitionCreateOrConnectWithoutParagraphInput[]
    createMany?: CompetitionCreateManyParagraphInputEnvelope
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
  }

  export type CompetitionUpdateManyWithoutParagraphNestedInput = {
    create?: XOR<CompetitionCreateWithoutParagraphInput, CompetitionUncheckedCreateWithoutParagraphInput> | CompetitionCreateWithoutParagraphInput[] | CompetitionUncheckedCreateWithoutParagraphInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutParagraphInput | CompetitionCreateOrConnectWithoutParagraphInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutParagraphInput | CompetitionUpsertWithWhereUniqueWithoutParagraphInput[]
    createMany?: CompetitionCreateManyParagraphInputEnvelope
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutParagraphInput | CompetitionUpdateWithWhereUniqueWithoutParagraphInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutParagraphInput | CompetitionUpdateManyWithWhereWithoutParagraphInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type CompetitionUncheckedUpdateManyWithoutParagraphNestedInput = {
    create?: XOR<CompetitionCreateWithoutParagraphInput, CompetitionUncheckedCreateWithoutParagraphInput> | CompetitionCreateWithoutParagraphInput[] | CompetitionUncheckedCreateWithoutParagraphInput[]
    connectOrCreate?: CompetitionCreateOrConnectWithoutParagraphInput | CompetitionCreateOrConnectWithoutParagraphInput[]
    upsert?: CompetitionUpsertWithWhereUniqueWithoutParagraphInput | CompetitionUpsertWithWhereUniqueWithoutParagraphInput[]
    createMany?: CompetitionCreateManyParagraphInputEnvelope
    set?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    disconnect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    delete?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    connect?: CompetitionWhereUniqueInput | CompetitionWhereUniqueInput[]
    update?: CompetitionUpdateWithWhereUniqueWithoutParagraphInput | CompetitionUpdateWithWhereUniqueWithoutParagraphInput[]
    updateMany?: CompetitionUpdateManyWithWhereWithoutParagraphInput | CompetitionUpdateManyWithWhereWithoutParagraphInput[]
    deleteMany?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
  }

  export type CompetitionCreateNestedOneWithoutResultsInput = {
    create?: XOR<CompetitionCreateWithoutResultsInput, CompetitionUncheckedCreateWithoutResultsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutResultsInput
    connect?: CompetitionWhereUniqueInput
  }

  export type CompetitionParticipantCreateNestedOneWithoutResultsInput = {
    create?: XOR<CompetitionParticipantCreateWithoutResultsInput, CompetitionParticipantUncheckedCreateWithoutResultsInput>
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutResultsInput
    connect?: CompetitionParticipantWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CompetitionUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<CompetitionCreateWithoutResultsInput, CompetitionUncheckedCreateWithoutResultsInput>
    connectOrCreate?: CompetitionCreateOrConnectWithoutResultsInput
    upsert?: CompetitionUpsertWithoutResultsInput
    connect?: CompetitionWhereUniqueInput
    update?: XOR<XOR<CompetitionUpdateToOneWithWhereWithoutResultsInput, CompetitionUpdateWithoutResultsInput>, CompetitionUncheckedUpdateWithoutResultsInput>
  }

  export type CompetitionParticipantUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<CompetitionParticipantCreateWithoutResultsInput, CompetitionParticipantUncheckedCreateWithoutResultsInput>
    connectOrCreate?: CompetitionParticipantCreateOrConnectWithoutResultsInput
    upsert?: CompetitionParticipantUpsertWithoutResultsInput
    connect?: CompetitionParticipantWhereUniqueInput
    update?: XOR<XOR<CompetitionParticipantUpdateToOneWithWhereWithoutResultsInput, CompetitionParticipantUpdateWithoutResultsInput>, CompetitionParticipantUncheckedUpdateWithoutResultsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CompetitionCreateWithoutAdminInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    status: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    paragraph: ParagraphCreateNestedOneWithoutCompetitionsInput
    participants?: CompetitionParticipantCreateNestedManyWithoutCompetitionInput
    results?: ResultCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutAdminInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    paragraphId: string
    status: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    participants?: CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput
    results?: ResultUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutAdminInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutAdminInput, CompetitionUncheckedCreateWithoutAdminInput>
  }

  export type CompetitionCreateManyAdminInputEnvelope = {
    data: CompetitionCreateManyAdminInput | CompetitionCreateManyAdminInput[]
  }

  export type CompetitionUpsertWithWhereUniqueWithoutAdminInput = {
    where: CompetitionWhereUniqueInput
    update: XOR<CompetitionUpdateWithoutAdminInput, CompetitionUncheckedUpdateWithoutAdminInput>
    create: XOR<CompetitionCreateWithoutAdminInput, CompetitionUncheckedCreateWithoutAdminInput>
  }

  export type CompetitionUpdateWithWhereUniqueWithoutAdminInput = {
    where: CompetitionWhereUniqueInput
    data: XOR<CompetitionUpdateWithoutAdminInput, CompetitionUncheckedUpdateWithoutAdminInput>
  }

  export type CompetitionUpdateManyWithWhereWithoutAdminInput = {
    where: CompetitionScalarWhereInput
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyWithoutAdminInput>
  }

  export type CompetitionScalarWhereInput = {
    AND?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
    OR?: CompetitionScalarWhereInput[]
    NOT?: CompetitionScalarWhereInput | CompetitionScalarWhereInput[]
    id?: StringFilter<"Competition"> | string
    name?: StringFilter<"Competition"> | string
    roomCode?: StringFilter<"Competition"> | string
    language?: StringFilter<"Competition"> | string
    gameMode?: StringFilter<"Competition"> | string
    difficulty?: StringFilter<"Competition"> | string
    duration?: IntNullableFilter<"Competition"> | number | null
    paragraphId?: StringFilter<"Competition"> | string
    status?: StringFilter<"Competition"> | string
    createdBy?: StringFilter<"Competition"> | string
    startAt?: DateTimeNullableFilter<"Competition"> | Date | string | null
    endedAt?: DateTimeNullableFilter<"Competition"> | Date | string | null
    createdAt?: DateTimeFilter<"Competition"> | Date | string
  }

  export type CompetitionParticipantCreateWithoutPlayerSessionInput = {
    id?: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
    competition: CompetitionCreateNestedOneWithoutParticipantsInput
    results?: ResultCreateNestedManyWithoutParticipantInput
  }

  export type CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput = {
    id?: string
    competitionId: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
    results?: ResultUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type CompetitionParticipantCreateOrConnectWithoutPlayerSessionInput = {
    where: CompetitionParticipantWhereUniqueInput
    create: XOR<CompetitionParticipantCreateWithoutPlayerSessionInput, CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput>
  }

  export type CompetitionParticipantCreateManyPlayerSessionInputEnvelope = {
    data: CompetitionParticipantCreateManyPlayerSessionInput | CompetitionParticipantCreateManyPlayerSessionInput[]
  }

  export type CompetitionParticipantUpsertWithWhereUniqueWithoutPlayerSessionInput = {
    where: CompetitionParticipantWhereUniqueInput
    update: XOR<CompetitionParticipantUpdateWithoutPlayerSessionInput, CompetitionParticipantUncheckedUpdateWithoutPlayerSessionInput>
    create: XOR<CompetitionParticipantCreateWithoutPlayerSessionInput, CompetitionParticipantUncheckedCreateWithoutPlayerSessionInput>
  }

  export type CompetitionParticipantUpdateWithWhereUniqueWithoutPlayerSessionInput = {
    where: CompetitionParticipantWhereUniqueInput
    data: XOR<CompetitionParticipantUpdateWithoutPlayerSessionInput, CompetitionParticipantUncheckedUpdateWithoutPlayerSessionInput>
  }

  export type CompetitionParticipantUpdateManyWithWhereWithoutPlayerSessionInput = {
    where: CompetitionParticipantScalarWhereInput
    data: XOR<CompetitionParticipantUpdateManyMutationInput, CompetitionParticipantUncheckedUpdateManyWithoutPlayerSessionInput>
  }

  export type CompetitionParticipantScalarWhereInput = {
    AND?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
    OR?: CompetitionParticipantScalarWhereInput[]
    NOT?: CompetitionParticipantScalarWhereInput | CompetitionParticipantScalarWhereInput[]
    id?: StringFilter<"CompetitionParticipant"> | string
    competitionId?: StringFilter<"CompetitionParticipant"> | string
    playerSessionId?: StringFilter<"CompetitionParticipant"> | string
    ready?: BoolFilter<"CompetitionParticipant"> | boolean
    connectionStatus?: StringFilter<"CompetitionParticipant"> | string
    joinedAt?: DateTimeFilter<"CompetitionParticipant"> | Date | string
    finishedAt?: DateTimeNullableFilter<"CompetitionParticipant"> | Date | string | null
  }

  export type AdminCreateWithoutCompetitionsInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type AdminUncheckedCreateWithoutCompetitionsInput = {
    id?: string
    username: string
    passwordHash: string
    createdAt?: Date | string
  }

  export type AdminCreateOrConnectWithoutCompetitionsInput = {
    where: AdminWhereUniqueInput
    create: XOR<AdminCreateWithoutCompetitionsInput, AdminUncheckedCreateWithoutCompetitionsInput>
  }

  export type ParagraphCreateWithoutCompetitionsInput = {
    id?: string
    title: string
    content: string
    language: string
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParagraphUncheckedCreateWithoutCompetitionsInput = {
    id?: string
    title: string
    content: string
    language: string
    difficulty: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ParagraphCreateOrConnectWithoutCompetitionsInput = {
    where: ParagraphWhereUniqueInput
    create: XOR<ParagraphCreateWithoutCompetitionsInput, ParagraphUncheckedCreateWithoutCompetitionsInput>
  }

  export type CompetitionParticipantCreateWithoutCompetitionInput = {
    id?: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
    playerSession: PlayerSessionCreateNestedOneWithoutParticipationsInput
    results?: ResultCreateNestedManyWithoutParticipantInput
  }

  export type CompetitionParticipantUncheckedCreateWithoutCompetitionInput = {
    id?: string
    playerSessionId: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
    results?: ResultUncheckedCreateNestedManyWithoutParticipantInput
  }

  export type CompetitionParticipantCreateOrConnectWithoutCompetitionInput = {
    where: CompetitionParticipantWhereUniqueInput
    create: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput>
  }

  export type CompetitionParticipantCreateManyCompetitionInputEnvelope = {
    data: CompetitionParticipantCreateManyCompetitionInput | CompetitionParticipantCreateManyCompetitionInput[]
  }

  export type ResultCreateWithoutCompetitionInput = {
    id?: string
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank?: number | null
    finishTime?: number | null
    createdAt?: Date | string
    participant: CompetitionParticipantCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutCompetitionInput = {
    id?: string
    participantId: string
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank?: number | null
    finishTime?: number | null
    createdAt?: Date | string
  }

  export type ResultCreateOrConnectWithoutCompetitionInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutCompetitionInput, ResultUncheckedCreateWithoutCompetitionInput>
  }

  export type ResultCreateManyCompetitionInputEnvelope = {
    data: ResultCreateManyCompetitionInput | ResultCreateManyCompetitionInput[]
  }

  export type AdminUpsertWithoutCompetitionsInput = {
    update: XOR<AdminUpdateWithoutCompetitionsInput, AdminUncheckedUpdateWithoutCompetitionsInput>
    create: XOR<AdminCreateWithoutCompetitionsInput, AdminUncheckedCreateWithoutCompetitionsInput>
    where?: AdminWhereInput
  }

  export type AdminUpdateToOneWithWhereWithoutCompetitionsInput = {
    where?: AdminWhereInput
    data: XOR<AdminUpdateWithoutCompetitionsInput, AdminUncheckedUpdateWithoutCompetitionsInput>
  }

  export type AdminUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParagraphUpsertWithoutCompetitionsInput = {
    update: XOR<ParagraphUpdateWithoutCompetitionsInput, ParagraphUncheckedUpdateWithoutCompetitionsInput>
    create: XOR<ParagraphCreateWithoutCompetitionsInput, ParagraphUncheckedCreateWithoutCompetitionsInput>
    where?: ParagraphWhereInput
  }

  export type ParagraphUpdateToOneWithWhereWithoutCompetitionsInput = {
    where?: ParagraphWhereInput
    data: XOR<ParagraphUpdateWithoutCompetitionsInput, ParagraphUncheckedUpdateWithoutCompetitionsInput>
  }

  export type ParagraphUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ParagraphUncheckedUpdateWithoutCompetitionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionParticipantUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: CompetitionParticipantWhereUniqueInput
    update: XOR<CompetitionParticipantUpdateWithoutCompetitionInput, CompetitionParticipantUncheckedUpdateWithoutCompetitionInput>
    create: XOR<CompetitionParticipantCreateWithoutCompetitionInput, CompetitionParticipantUncheckedCreateWithoutCompetitionInput>
  }

  export type CompetitionParticipantUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: CompetitionParticipantWhereUniqueInput
    data: XOR<CompetitionParticipantUpdateWithoutCompetitionInput, CompetitionParticipantUncheckedUpdateWithoutCompetitionInput>
  }

  export type CompetitionParticipantUpdateManyWithWhereWithoutCompetitionInput = {
    where: CompetitionParticipantScalarWhereInput
    data: XOR<CompetitionParticipantUpdateManyMutationInput, CompetitionParticipantUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type ResultUpsertWithWhereUniqueWithoutCompetitionInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutCompetitionInput, ResultUncheckedUpdateWithoutCompetitionInput>
    create: XOR<ResultCreateWithoutCompetitionInput, ResultUncheckedCreateWithoutCompetitionInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutCompetitionInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutCompetitionInput, ResultUncheckedUpdateWithoutCompetitionInput>
  }

  export type ResultUpdateManyWithWhereWithoutCompetitionInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutCompetitionInput>
  }

  export type ResultScalarWhereInput = {
    AND?: ResultScalarWhereInput | ResultScalarWhereInput[]
    OR?: ResultScalarWhereInput[]
    NOT?: ResultScalarWhereInput | ResultScalarWhereInput[]
    id?: StringFilter<"Result"> | string
    competitionId?: StringFilter<"Result"> | string
    participantId?: StringFilter<"Result"> | string
    grossWpm?: IntFilter<"Result"> | number
    netWpm?: IntFilter<"Result"> | number
    cpm?: IntFilter<"Result"> | number
    accuracy?: FloatFilter<"Result"> | number
    errors?: IntFilter<"Result"> | number
    completionPercentage?: FloatFilter<"Result"> | number
    finalRank?: IntNullableFilter<"Result"> | number | null
    finishTime?: IntNullableFilter<"Result"> | number | null
    createdAt?: DateTimeFilter<"Result"> | Date | string
  }

  export type CompetitionCreateWithoutParticipantsInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    status: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutCompetitionsInput
    paragraph: ParagraphCreateNestedOneWithoutCompetitionsInput
    results?: ResultCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutParticipantsInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    paragraphId: string
    status: string
    createdBy: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    results?: ResultUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutParticipantsInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
  }

  export type PlayerSessionCreateWithoutParticipationsInput = {
    id?: string
    sessionToken: string
    name: string
    scholarNumber: string
    mandal: string
    semester: string
    avatarId: string
    createdAt?: Date | string
    lastSeenAt?: Date | string
  }

  export type PlayerSessionUncheckedCreateWithoutParticipationsInput = {
    id?: string
    sessionToken: string
    name: string
    scholarNumber: string
    mandal: string
    semester: string
    avatarId: string
    createdAt?: Date | string
    lastSeenAt?: Date | string
  }

  export type PlayerSessionCreateOrConnectWithoutParticipationsInput = {
    where: PlayerSessionWhereUniqueInput
    create: XOR<PlayerSessionCreateWithoutParticipationsInput, PlayerSessionUncheckedCreateWithoutParticipationsInput>
  }

  export type ResultCreateWithoutParticipantInput = {
    id?: string
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank?: number | null
    finishTime?: number | null
    createdAt?: Date | string
    competition: CompetitionCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutParticipantInput = {
    id?: string
    competitionId: string
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank?: number | null
    finishTime?: number | null
    createdAt?: Date | string
  }

  export type ResultCreateOrConnectWithoutParticipantInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput>
  }

  export type ResultCreateManyParticipantInputEnvelope = {
    data: ResultCreateManyParticipantInput | ResultCreateManyParticipantInput[]
  }

  export type CompetitionUpsertWithoutParticipantsInput = {
    update: XOR<CompetitionUpdateWithoutParticipantsInput, CompetitionUncheckedUpdateWithoutParticipantsInput>
    create: XOR<CompetitionCreateWithoutParticipantsInput, CompetitionUncheckedCreateWithoutParticipantsInput>
    where?: CompetitionWhereInput
  }

  export type CompetitionUpdateToOneWithWhereWithoutParticipantsInput = {
    where?: CompetitionWhereInput
    data: XOR<CompetitionUpdateWithoutParticipantsInput, CompetitionUncheckedUpdateWithoutParticipantsInput>
  }

  export type CompetitionUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutCompetitionsNestedInput
    paragraph?: ParagraphUpdateOneRequiredWithoutCompetitionsNestedInput
    results?: ResultUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutParticipantsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    paragraphId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    results?: ResultUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type PlayerSessionUpsertWithoutParticipationsInput = {
    update: XOR<PlayerSessionUpdateWithoutParticipationsInput, PlayerSessionUncheckedUpdateWithoutParticipationsInput>
    create: XOR<PlayerSessionCreateWithoutParticipationsInput, PlayerSessionUncheckedCreateWithoutParticipationsInput>
    where?: PlayerSessionWhereInput
  }

  export type PlayerSessionUpdateToOneWithWhereWithoutParticipationsInput = {
    where?: PlayerSessionWhereInput
    data: XOR<PlayerSessionUpdateWithoutParticipationsInput, PlayerSessionUncheckedUpdateWithoutParticipationsInput>
  }

  export type PlayerSessionUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scholarNumber?: StringFieldUpdateOperationsInput | string
    mandal?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    avatarId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlayerSessionUncheckedUpdateWithoutParticipationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    scholarNumber?: StringFieldUpdateOperationsInput | string
    mandal?: StringFieldUpdateOperationsInput | string
    semester?: StringFieldUpdateOperationsInput | string
    avatarId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUpsertWithWhereUniqueWithoutParticipantInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutParticipantInput, ResultUncheckedUpdateWithoutParticipantInput>
    create: XOR<ResultCreateWithoutParticipantInput, ResultUncheckedCreateWithoutParticipantInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutParticipantInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutParticipantInput, ResultUncheckedUpdateWithoutParticipantInput>
  }

  export type ResultUpdateManyWithWhereWithoutParticipantInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutParticipantInput>
  }

  export type CompetitionCreateWithoutParagraphInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    status: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutCompetitionsInput
    participants?: CompetitionParticipantCreateNestedManyWithoutCompetitionInput
    results?: ResultCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutParagraphInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    status: string
    createdBy: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    participants?: CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput
    results?: ResultUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutParagraphInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutParagraphInput, CompetitionUncheckedCreateWithoutParagraphInput>
  }

  export type CompetitionCreateManyParagraphInputEnvelope = {
    data: CompetitionCreateManyParagraphInput | CompetitionCreateManyParagraphInput[]
  }

  export type CompetitionUpsertWithWhereUniqueWithoutParagraphInput = {
    where: CompetitionWhereUniqueInput
    update: XOR<CompetitionUpdateWithoutParagraphInput, CompetitionUncheckedUpdateWithoutParagraphInput>
    create: XOR<CompetitionCreateWithoutParagraphInput, CompetitionUncheckedCreateWithoutParagraphInput>
  }

  export type CompetitionUpdateWithWhereUniqueWithoutParagraphInput = {
    where: CompetitionWhereUniqueInput
    data: XOR<CompetitionUpdateWithoutParagraphInput, CompetitionUncheckedUpdateWithoutParagraphInput>
  }

  export type CompetitionUpdateManyWithWhereWithoutParagraphInput = {
    where: CompetitionScalarWhereInput
    data: XOR<CompetitionUpdateManyMutationInput, CompetitionUncheckedUpdateManyWithoutParagraphInput>
  }

  export type CompetitionCreateWithoutResultsInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    status: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    admin: AdminCreateNestedOneWithoutCompetitionsInput
    paragraph: ParagraphCreateNestedOneWithoutCompetitionsInput
    participants?: CompetitionParticipantCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionUncheckedCreateWithoutResultsInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    paragraphId: string
    status: string
    createdBy: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
    participants?: CompetitionParticipantUncheckedCreateNestedManyWithoutCompetitionInput
  }

  export type CompetitionCreateOrConnectWithoutResultsInput = {
    where: CompetitionWhereUniqueInput
    create: XOR<CompetitionCreateWithoutResultsInput, CompetitionUncheckedCreateWithoutResultsInput>
  }

  export type CompetitionParticipantCreateWithoutResultsInput = {
    id?: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
    competition: CompetitionCreateNestedOneWithoutParticipantsInput
    playerSession: PlayerSessionCreateNestedOneWithoutParticipationsInput
  }

  export type CompetitionParticipantUncheckedCreateWithoutResultsInput = {
    id?: string
    competitionId: string
    playerSessionId: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type CompetitionParticipantCreateOrConnectWithoutResultsInput = {
    where: CompetitionParticipantWhereUniqueInput
    create: XOR<CompetitionParticipantCreateWithoutResultsInput, CompetitionParticipantUncheckedCreateWithoutResultsInput>
  }

  export type CompetitionUpsertWithoutResultsInput = {
    update: XOR<CompetitionUpdateWithoutResultsInput, CompetitionUncheckedUpdateWithoutResultsInput>
    create: XOR<CompetitionCreateWithoutResultsInput, CompetitionUncheckedCreateWithoutResultsInput>
    where?: CompetitionWhereInput
  }

  export type CompetitionUpdateToOneWithWhereWithoutResultsInput = {
    where?: CompetitionWhereInput
    data: XOR<CompetitionUpdateWithoutResultsInput, CompetitionUncheckedUpdateWithoutResultsInput>
  }

  export type CompetitionUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutCompetitionsNestedInput
    paragraph?: ParagraphUpdateOneRequiredWithoutCompetitionsNestedInput
    participants?: CompetitionParticipantUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    paragraphId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: CompetitionParticipantUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionParticipantUpsertWithoutResultsInput = {
    update: XOR<CompetitionParticipantUpdateWithoutResultsInput, CompetitionParticipantUncheckedUpdateWithoutResultsInput>
    create: XOR<CompetitionParticipantCreateWithoutResultsInput, CompetitionParticipantUncheckedCreateWithoutResultsInput>
    where?: CompetitionParticipantWhereInput
  }

  export type CompetitionParticipantUpdateToOneWithWhereWithoutResultsInput = {
    where?: CompetitionParticipantWhereInput
    data: XOR<CompetitionParticipantUpdateWithoutResultsInput, CompetitionParticipantUncheckedUpdateWithoutResultsInput>
  }

  export type CompetitionParticipantUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competition?: CompetitionUpdateOneRequiredWithoutParticipantsNestedInput
    playerSession?: PlayerSessionUpdateOneRequiredWithoutParticipationsNestedInput
  }

  export type CompetitionParticipantUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    playerSessionId?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionCreateManyAdminInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    paragraphId: string
    status: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CompetitionUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    paragraph?: ParagraphUpdateOneRequiredWithoutCompetitionsNestedInput
    participants?: CompetitionParticipantUpdateManyWithoutCompetitionNestedInput
    results?: ResultUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    paragraphId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: CompetitionParticipantUncheckedUpdateManyWithoutCompetitionNestedInput
    results?: ResultUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    paragraphId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionParticipantCreateManyPlayerSessionInput = {
    id?: string
    competitionId: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type CompetitionParticipantUpdateWithoutPlayerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    competition?: CompetitionUpdateOneRequiredWithoutParticipantsNestedInput
    results?: ResultUpdateManyWithoutParticipantNestedInput
  }

  export type CompetitionParticipantUncheckedUpdateWithoutPlayerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: ResultUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type CompetitionParticipantUncheckedUpdateManyWithoutPlayerSessionInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompetitionParticipantCreateManyCompetitionInput = {
    id?: string
    playerSessionId: string
    ready?: boolean
    connectionStatus: string
    joinedAt?: Date | string
    finishedAt?: Date | string | null
  }

  export type ResultCreateManyCompetitionInput = {
    id?: string
    participantId: string
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank?: number | null
    finishTime?: number | null
    createdAt?: Date | string
  }

  export type CompetitionParticipantUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    playerSession?: PlayerSessionUpdateOneRequiredWithoutParticipationsNestedInput
    results?: ResultUpdateManyWithoutParticipantNestedInput
  }

  export type CompetitionParticipantUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerSessionId?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    results?: ResultUncheckedUpdateManyWithoutParticipantNestedInput
  }

  export type CompetitionParticipantUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerSessionId?: StringFieldUpdateOperationsInput | string
    ready?: BoolFieldUpdateOperationsInput | boolean
    connectionStatus?: StringFieldUpdateOperationsInput | string
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResultUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossWpm?: IntFieldUpdateOperationsInput | number
    netWpm?: IntFieldUpdateOperationsInput | number
    cpm?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    finalRank?: NullableIntFieldUpdateOperationsInput | number | null
    finishTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participant?: CompetitionParticipantUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    grossWpm?: IntFieldUpdateOperationsInput | number
    netWpm?: IntFieldUpdateOperationsInput | number
    cpm?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    finalRank?: NullableIntFieldUpdateOperationsInput | number | null
    finishTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyWithoutCompetitionInput = {
    id?: StringFieldUpdateOperationsInput | string
    participantId?: StringFieldUpdateOperationsInput | string
    grossWpm?: IntFieldUpdateOperationsInput | number
    netWpm?: IntFieldUpdateOperationsInput | number
    cpm?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    finalRank?: NullableIntFieldUpdateOperationsInput | number | null
    finishTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultCreateManyParticipantInput = {
    id?: string
    competitionId: string
    grossWpm: number
    netWpm: number
    cpm: number
    accuracy: number
    errors: number
    completionPercentage: number
    finalRank?: number | null
    finishTime?: number | null
    createdAt?: Date | string
  }

  export type ResultUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    grossWpm?: IntFieldUpdateOperationsInput | number
    netWpm?: IntFieldUpdateOperationsInput | number
    cpm?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    finalRank?: NullableIntFieldUpdateOperationsInput | number | null
    finishTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    competition?: CompetitionUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    grossWpm?: IntFieldUpdateOperationsInput | number
    netWpm?: IntFieldUpdateOperationsInput | number
    cpm?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    finalRank?: NullableIntFieldUpdateOperationsInput | number | null
    finishTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUncheckedUpdateManyWithoutParticipantInput = {
    id?: StringFieldUpdateOperationsInput | string
    competitionId?: StringFieldUpdateOperationsInput | string
    grossWpm?: IntFieldUpdateOperationsInput | number
    netWpm?: IntFieldUpdateOperationsInput | number
    cpm?: IntFieldUpdateOperationsInput | number
    accuracy?: FloatFieldUpdateOperationsInput | number
    errors?: IntFieldUpdateOperationsInput | number
    completionPercentage?: FloatFieldUpdateOperationsInput | number
    finalRank?: NullableIntFieldUpdateOperationsInput | number | null
    finishTime?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompetitionCreateManyParagraphInput = {
    id?: string
    name: string
    roomCode: string
    language: string
    gameMode: string
    difficulty: string
    duration?: number | null
    status: string
    createdBy: string
    startAt?: Date | string | null
    endedAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CompetitionUpdateWithoutParagraphInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminUpdateOneRequiredWithoutCompetitionsNestedInput
    participants?: CompetitionParticipantUpdateManyWithoutCompetitionNestedInput
    results?: ResultUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateWithoutParagraphInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    participants?: CompetitionParticipantUncheckedUpdateManyWithoutCompetitionNestedInput
    results?: ResultUncheckedUpdateManyWithoutCompetitionNestedInput
  }

  export type CompetitionUncheckedUpdateManyWithoutParagraphInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    roomCode?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    gameMode?: StringFieldUpdateOperationsInput | string
    difficulty?: StringFieldUpdateOperationsInput | string
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    status?: StringFieldUpdateOperationsInput | string
    createdBy?: StringFieldUpdateOperationsInput | string
    startAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}