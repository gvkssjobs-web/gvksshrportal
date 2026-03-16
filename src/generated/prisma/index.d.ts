
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
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Resignation
 * 
 */
export type Resignation = $Result.DefaultSelection<Prisma.$ResignationPayload>
/**
 * Model LeaveRequest
 * 
 */
export type LeaveRequest = $Result.DefaultSelection<Prisma.$LeaveRequestPayload>
/**
 * Model Attendance
 * 
 */
export type Attendance = $Result.DefaultSelection<Prisma.$AttendancePayload>
/**
 * Model Salary
 * 
 */
export type Salary = $Result.DefaultSelection<Prisma.$SalaryPayload>
/**
 * Model PayrollRecord
 * 
 */
export type PayrollRecord = $Result.DefaultSelection<Prisma.$PayrollRecordPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Departments
 * const departments = await prisma.department.findMany()
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
   * // Fetch zero or more Departments
   * const departments = await prisma.department.findMany()
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
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.resignation`: Exposes CRUD operations for the **Resignation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Resignations
    * const resignations = await prisma.resignation.findMany()
    * ```
    */
  get resignation(): Prisma.ResignationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveRequest`: Exposes CRUD operations for the **LeaveRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveRequests
    * const leaveRequests = await prisma.leaveRequest.findMany()
    * ```
    */
  get leaveRequest(): Prisma.LeaveRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.attendance`: Exposes CRUD operations for the **Attendance** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Attendances
    * const attendances = await prisma.attendance.findMany()
    * ```
    */
  get attendance(): Prisma.AttendanceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.salary`: Exposes CRUD operations for the **Salary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Salaries
    * const salaries = await prisma.salary.findMany()
    * ```
    */
  get salary(): Prisma.SalaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payrollRecord`: Exposes CRUD operations for the **PayrollRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PayrollRecords
    * const payrollRecords = await prisma.payrollRecord.findMany()
    * ```
    */
  get payrollRecord(): Prisma.PayrollRecordDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
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
    Department: 'Department',
    User: 'User',
    Education: 'Education',
    Resignation: 'Resignation',
    LeaveRequest: 'LeaveRequest',
    Attendance: 'Attendance',
    Salary: 'Salary',
    PayrollRecord: 'PayrollRecord'
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
      modelProps: "department" | "user" | "education" | "resignation" | "leaveRequest" | "attendance" | "salary" | "payrollRecord"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Resignation: {
        payload: Prisma.$ResignationPayload<ExtArgs>
        fields: Prisma.ResignationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResignationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResignationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload>
          }
          findFirst: {
            args: Prisma.ResignationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResignationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload>
          }
          findMany: {
            args: Prisma.ResignationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload>[]
          }
          create: {
            args: Prisma.ResignationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload>
          }
          createMany: {
            args: Prisma.ResignationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ResignationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload>[]
          }
          delete: {
            args: Prisma.ResignationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload>
          }
          update: {
            args: Prisma.ResignationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload>
          }
          deleteMany: {
            args: Prisma.ResignationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResignationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ResignationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload>[]
          }
          upsert: {
            args: Prisma.ResignationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResignationPayload>
          }
          aggregate: {
            args: Prisma.ResignationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResignation>
          }
          groupBy: {
            args: Prisma.ResignationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResignationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResignationCountArgs<ExtArgs>
            result: $Utils.Optional<ResignationCountAggregateOutputType> | number
          }
        }
      }
      LeaveRequest: {
        payload: Prisma.$LeaveRequestPayload<ExtArgs>
        fields: Prisma.LeaveRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          findFirst: {
            args: Prisma.LeaveRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          findMany: {
            args: Prisma.LeaveRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          create: {
            args: Prisma.LeaveRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          createMany: {
            args: Prisma.LeaveRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          delete: {
            args: Prisma.LeaveRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          update: {
            args: Prisma.LeaveRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          deleteMany: {
            args: Prisma.LeaveRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>[]
          }
          upsert: {
            args: Prisma.LeaveRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveRequestPayload>
          }
          aggregate: {
            args: Prisma.LeaveRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveRequest>
          }
          groupBy: {
            args: Prisma.LeaveRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveRequestCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveRequestCountAggregateOutputType> | number
          }
        }
      }
      Attendance: {
        payload: Prisma.$AttendancePayload<ExtArgs>
        fields: Prisma.AttendanceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AttendanceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AttendanceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findFirst: {
            args: Prisma.AttendanceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AttendanceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          findMany: {
            args: Prisma.AttendanceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          create: {
            args: Prisma.AttendanceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          createMany: {
            args: Prisma.AttendanceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AttendanceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          delete: {
            args: Prisma.AttendanceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          update: {
            args: Prisma.AttendanceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          deleteMany: {
            args: Prisma.AttendanceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AttendanceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AttendanceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>[]
          }
          upsert: {
            args: Prisma.AttendanceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AttendancePayload>
          }
          aggregate: {
            args: Prisma.AttendanceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAttendance>
          }
          groupBy: {
            args: Prisma.AttendanceGroupByArgs<ExtArgs>
            result: $Utils.Optional<AttendanceGroupByOutputType>[]
          }
          count: {
            args: Prisma.AttendanceCountArgs<ExtArgs>
            result: $Utils.Optional<AttendanceCountAggregateOutputType> | number
          }
        }
      }
      Salary: {
        payload: Prisma.$SalaryPayload<ExtArgs>
        fields: Prisma.SalaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          findFirst: {
            args: Prisma.SalaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          findMany: {
            args: Prisma.SalaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>[]
          }
          create: {
            args: Prisma.SalaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          createMany: {
            args: Prisma.SalaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>[]
          }
          delete: {
            args: Prisma.SalaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          update: {
            args: Prisma.SalaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          deleteMany: {
            args: Prisma.SalaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>[]
          }
          upsert: {
            args: Prisma.SalaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalaryPayload>
          }
          aggregate: {
            args: Prisma.SalaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalary>
          }
          groupBy: {
            args: Prisma.SalaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalaryCountArgs<ExtArgs>
            result: $Utils.Optional<SalaryCountAggregateOutputType> | number
          }
        }
      }
      PayrollRecord: {
        payload: Prisma.$PayrollRecordPayload<ExtArgs>
        fields: Prisma.PayrollRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayrollRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayrollRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload>
          }
          findFirst: {
            args: Prisma.PayrollRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayrollRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload>
          }
          findMany: {
            args: Prisma.PayrollRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload>[]
          }
          create: {
            args: Prisma.PayrollRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload>
          }
          createMany: {
            args: Prisma.PayrollRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PayrollRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload>[]
          }
          delete: {
            args: Prisma.PayrollRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload>
          }
          update: {
            args: Prisma.PayrollRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload>
          }
          deleteMany: {
            args: Prisma.PayrollRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayrollRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PayrollRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload>[]
          }
          upsert: {
            args: Prisma.PayrollRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayrollRecordPayload>
          }
          aggregate: {
            args: Prisma.PayrollRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayrollRecord>
          }
          groupBy: {
            args: Prisma.PayrollRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayrollRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.PayrollRecordCountArgs<ExtArgs>
            result: $Utils.Optional<PayrollRecordCountAggregateOutputType> | number
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
    department?: DepartmentOmit
    user?: UserOmit
    education?: EducationOmit
    resignation?: ResignationOmit
    leaveRequest?: LeaveRequestOmit
    attendance?: AttendanceOmit
    salary?: SalaryOmit
    payrollRecord?: PayrollRecordOmit
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
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    users: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leaveRequests: number
    approvedLeaves: number
    attendances: number
    salaries: number
    payrolls: number
    resignations: number
    educations: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaveRequests?: boolean | UserCountOutputTypeCountLeaveRequestsArgs
    approvedLeaves?: boolean | UserCountOutputTypeCountApprovedLeavesArgs
    attendances?: boolean | UserCountOutputTypeCountAttendancesArgs
    salaries?: boolean | UserCountOutputTypeCountSalariesArgs
    payrolls?: boolean | UserCountOutputTypeCountPayrollsArgs
    resignations?: boolean | UserCountOutputTypeCountResignationsArgs
    educations?: boolean | UserCountOutputTypeCountEducationsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAttendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSalariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPayrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollRecordWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResignationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResignationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEducationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Department$usersArgs<ExtArgs> = {}>(args?: Subset<T, Department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.users
   */
  export type Department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    marriageStatus: string | null
    photo: string | null
    aadharNumber: string | null
    bankAccount: string | null
    panNumber: string | null
    passportNumber: string | null
    dlNumber: string | null
    addressHNo: string | null
    city: string | null
    state: string | null
    pincode: string | null
    phoneNumber: string | null
    emergencyContactNumber: string | null
    emergencyContactWhose: string | null
    emergencyContactRelation: string | null
    native: string | null
    fatherName: string | null
    fatherOccupation: string | null
    motherName: string | null
    motherOccupation: string | null
    motherTongue: string | null
    qualification: string | null
    experience: string | null
    previousDesignation: string | null
    currentDesignation: string | null
    role: string | null
    status: string | null
    departmentId: string | null
    joiningDate: Date | null
    relievingDate: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    firstName: string | null
    middleName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    marriageStatus: string | null
    photo: string | null
    aadharNumber: string | null
    bankAccount: string | null
    panNumber: string | null
    passportNumber: string | null
    dlNumber: string | null
    addressHNo: string | null
    city: string | null
    state: string | null
    pincode: string | null
    phoneNumber: string | null
    emergencyContactNumber: string | null
    emergencyContactWhose: string | null
    emergencyContactRelation: string | null
    native: string | null
    fatherName: string | null
    fatherOccupation: string | null
    motherName: string | null
    motherOccupation: string | null
    motherTongue: string | null
    qualification: string | null
    experience: string | null
    previousDesignation: string | null
    currentDesignation: string | null
    role: string | null
    status: string | null
    departmentId: string | null
    joiningDate: Date | null
    relievingDate: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    firstName: number
    middleName: number
    lastName: number
    dateOfBirth: number
    marriageStatus: number
    photo: number
    aadharNumber: number
    bankAccount: number
    panNumber: number
    passportNumber: number
    dlNumber: number
    addressHNo: number
    city: number
    state: number
    pincode: number
    phoneNumber: number
    emergencyContactNumber: number
    emergencyContactWhose: number
    emergencyContactRelation: number
    native: number
    fatherName: number
    fatherOccupation: number
    motherName: number
    motherOccupation: number
    motherTongue: number
    qualification: number
    experience: number
    previousDesignation: number
    currentDesignation: number
    role: number
    status: number
    departmentId: number
    joiningDate: number
    relievingDate: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    dateOfBirth?: true
    marriageStatus?: true
    photo?: true
    aadharNumber?: true
    bankAccount?: true
    panNumber?: true
    passportNumber?: true
    dlNumber?: true
    addressHNo?: true
    city?: true
    state?: true
    pincode?: true
    phoneNumber?: true
    emergencyContactNumber?: true
    emergencyContactWhose?: true
    emergencyContactRelation?: true
    native?: true
    fatherName?: true
    fatherOccupation?: true
    motherName?: true
    motherOccupation?: true
    motherTongue?: true
    qualification?: true
    experience?: true
    previousDesignation?: true
    currentDesignation?: true
    role?: true
    status?: true
    departmentId?: true
    joiningDate?: true
    relievingDate?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    dateOfBirth?: true
    marriageStatus?: true
    photo?: true
    aadharNumber?: true
    bankAccount?: true
    panNumber?: true
    passportNumber?: true
    dlNumber?: true
    addressHNo?: true
    city?: true
    state?: true
    pincode?: true
    phoneNumber?: true
    emergencyContactNumber?: true
    emergencyContactWhose?: true
    emergencyContactRelation?: true
    native?: true
    fatherName?: true
    fatherOccupation?: true
    motherName?: true
    motherOccupation?: true
    motherTongue?: true
    qualification?: true
    experience?: true
    previousDesignation?: true
    currentDesignation?: true
    role?: true
    status?: true
    departmentId?: true
    joiningDate?: true
    relievingDate?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    firstName?: true
    middleName?: true
    lastName?: true
    dateOfBirth?: true
    marriageStatus?: true
    photo?: true
    aadharNumber?: true
    bankAccount?: true
    panNumber?: true
    passportNumber?: true
    dlNumber?: true
    addressHNo?: true
    city?: true
    state?: true
    pincode?: true
    phoneNumber?: true
    emergencyContactNumber?: true
    emergencyContactWhose?: true
    emergencyContactRelation?: true
    native?: true
    fatherName?: true
    fatherOccupation?: true
    motherName?: true
    motherOccupation?: true
    motherTongue?: true
    qualification?: true
    experience?: true
    previousDesignation?: true
    currentDesignation?: true
    role?: true
    status?: true
    departmentId?: true
    joiningDate?: true
    relievingDate?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string
    password: string
    firstName: string | null
    middleName: string | null
    lastName: string | null
    dateOfBirth: Date | null
    marriageStatus: string | null
    photo: string | null
    aadharNumber: string | null
    bankAccount: string | null
    panNumber: string | null
    passportNumber: string | null
    dlNumber: string | null
    addressHNo: string | null
    city: string | null
    state: string | null
    pincode: string | null
    phoneNumber: string | null
    emergencyContactNumber: string | null
    emergencyContactWhose: string | null
    emergencyContactRelation: string | null
    native: string | null
    fatherName: string | null
    fatherOccupation: string | null
    motherName: string | null
    motherOccupation: string | null
    motherTongue: string | null
    qualification: string | null
    experience: string | null
    previousDesignation: string | null
    currentDesignation: string | null
    role: string
    status: string
    departmentId: string | null
    joiningDate: Date | null
    relievingDate: Date | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    marriageStatus?: boolean
    photo?: boolean
    aadharNumber?: boolean
    bankAccount?: boolean
    panNumber?: boolean
    passportNumber?: boolean
    dlNumber?: boolean
    addressHNo?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    phoneNumber?: boolean
    emergencyContactNumber?: boolean
    emergencyContactWhose?: boolean
    emergencyContactRelation?: boolean
    native?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherTongue?: boolean
    qualification?: boolean
    experience?: boolean
    previousDesignation?: boolean
    currentDesignation?: boolean
    role?: boolean
    status?: boolean
    departmentId?: boolean
    joiningDate?: boolean
    relievingDate?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    leaveRequests?: boolean | User$leaveRequestsArgs<ExtArgs>
    approvedLeaves?: boolean | User$approvedLeavesArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    salaries?: boolean | User$salariesArgs<ExtArgs>
    payrolls?: boolean | User$payrollsArgs<ExtArgs>
    resignations?: boolean | User$resignationsArgs<ExtArgs>
    educations?: boolean | User$educationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    marriageStatus?: boolean
    photo?: boolean
    aadharNumber?: boolean
    bankAccount?: boolean
    panNumber?: boolean
    passportNumber?: boolean
    dlNumber?: boolean
    addressHNo?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    phoneNumber?: boolean
    emergencyContactNumber?: boolean
    emergencyContactWhose?: boolean
    emergencyContactRelation?: boolean
    native?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherTongue?: boolean
    qualification?: boolean
    experience?: boolean
    previousDesignation?: boolean
    currentDesignation?: boolean
    role?: boolean
    status?: boolean
    departmentId?: boolean
    joiningDate?: boolean
    relievingDate?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    marriageStatus?: boolean
    photo?: boolean
    aadharNumber?: boolean
    bankAccount?: boolean
    panNumber?: boolean
    passportNumber?: boolean
    dlNumber?: boolean
    addressHNo?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    phoneNumber?: boolean
    emergencyContactNumber?: boolean
    emergencyContactWhose?: boolean
    emergencyContactRelation?: boolean
    native?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherTongue?: boolean
    qualification?: boolean
    experience?: boolean
    previousDesignation?: boolean
    currentDesignation?: boolean
    role?: boolean
    status?: boolean
    departmentId?: boolean
    joiningDate?: boolean
    relievingDate?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    firstName?: boolean
    middleName?: boolean
    lastName?: boolean
    dateOfBirth?: boolean
    marriageStatus?: boolean
    photo?: boolean
    aadharNumber?: boolean
    bankAccount?: boolean
    panNumber?: boolean
    passportNumber?: boolean
    dlNumber?: boolean
    addressHNo?: boolean
    city?: boolean
    state?: boolean
    pincode?: boolean
    phoneNumber?: boolean
    emergencyContactNumber?: boolean
    emergencyContactWhose?: boolean
    emergencyContactRelation?: boolean
    native?: boolean
    fatherName?: boolean
    fatherOccupation?: boolean
    motherName?: boolean
    motherOccupation?: boolean
    motherTongue?: boolean
    qualification?: boolean
    experience?: boolean
    previousDesignation?: boolean
    currentDesignation?: boolean
    role?: boolean
    status?: boolean
    departmentId?: boolean
    joiningDate?: boolean
    relievingDate?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "password" | "firstName" | "middleName" | "lastName" | "dateOfBirth" | "marriageStatus" | "photo" | "aadharNumber" | "bankAccount" | "panNumber" | "passportNumber" | "dlNumber" | "addressHNo" | "city" | "state" | "pincode" | "phoneNumber" | "emergencyContactNumber" | "emergencyContactWhose" | "emergencyContactRelation" | "native" | "fatherName" | "fatherOccupation" | "motherName" | "motherOccupation" | "motherTongue" | "qualification" | "experience" | "previousDesignation" | "currentDesignation" | "role" | "status" | "departmentId" | "joiningDate" | "relievingDate", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    leaveRequests?: boolean | User$leaveRequestsArgs<ExtArgs>
    approvedLeaves?: boolean | User$approvedLeavesArgs<ExtArgs>
    attendances?: boolean | User$attendancesArgs<ExtArgs>
    salaries?: boolean | User$salariesArgs<ExtArgs>
    payrolls?: boolean | User$payrollsArgs<ExtArgs>
    resignations?: boolean | User$resignationsArgs<ExtArgs>
    educations?: boolean | User$educationsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      leaveRequests: Prisma.$LeaveRequestPayload<ExtArgs>[]
      approvedLeaves: Prisma.$LeaveRequestPayload<ExtArgs>[]
      attendances: Prisma.$AttendancePayload<ExtArgs>[]
      salaries: Prisma.$SalaryPayload<ExtArgs>[]
      payrolls: Prisma.$PayrollRecordPayload<ExtArgs>[]
      resignations: Prisma.$ResignationPayload<ExtArgs>[]
      educations: Prisma.$EducationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      password: string
      firstName: string | null
      middleName: string | null
      lastName: string | null
      dateOfBirth: Date | null
      marriageStatus: string | null
      photo: string | null
      aadharNumber: string | null
      bankAccount: string | null
      panNumber: string | null
      passportNumber: string | null
      dlNumber: string | null
      addressHNo: string | null
      city: string | null
      state: string | null
      pincode: string | null
      phoneNumber: string | null
      emergencyContactNumber: string | null
      emergencyContactWhose: string | null
      emergencyContactRelation: string | null
      native: string | null
      fatherName: string | null
      fatherOccupation: string | null
      motherName: string | null
      motherOccupation: string | null
      motherTongue: string | null
      qualification: string | null
      experience: string | null
      previousDesignation: string | null
      currentDesignation: string | null
      role: string
      status: string
      departmentId: string | null
      joiningDate: Date | null
      relievingDate: Date | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends User$departmentArgs<ExtArgs> = {}>(args?: Subset<T, User$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leaveRequests<T extends User$leaveRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$leaveRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedLeaves<T extends User$approvedLeavesArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedLeavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    attendances<T extends User$attendancesArgs<ExtArgs> = {}>(args?: Subset<T, User$attendancesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    salaries<T extends User$salariesArgs<ExtArgs> = {}>(args?: Subset<T, User$salariesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payrolls<T extends User$payrollsArgs<ExtArgs> = {}>(args?: Subset<T, User$payrollsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    resignations<T extends User$resignationsArgs<ExtArgs> = {}>(args?: Subset<T, User$resignationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    educations<T extends User$educationsArgs<ExtArgs> = {}>(args?: Subset<T, User$educationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly middleName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly dateOfBirth: FieldRef<"User", 'DateTime'>
    readonly marriageStatus: FieldRef<"User", 'String'>
    readonly photo: FieldRef<"User", 'String'>
    readonly aadharNumber: FieldRef<"User", 'String'>
    readonly bankAccount: FieldRef<"User", 'String'>
    readonly panNumber: FieldRef<"User", 'String'>
    readonly passportNumber: FieldRef<"User", 'String'>
    readonly dlNumber: FieldRef<"User", 'String'>
    readonly addressHNo: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly state: FieldRef<"User", 'String'>
    readonly pincode: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly emergencyContactNumber: FieldRef<"User", 'String'>
    readonly emergencyContactWhose: FieldRef<"User", 'String'>
    readonly emergencyContactRelation: FieldRef<"User", 'String'>
    readonly native: FieldRef<"User", 'String'>
    readonly fatherName: FieldRef<"User", 'String'>
    readonly fatherOccupation: FieldRef<"User", 'String'>
    readonly motherName: FieldRef<"User", 'String'>
    readonly motherOccupation: FieldRef<"User", 'String'>
    readonly motherTongue: FieldRef<"User", 'String'>
    readonly qualification: FieldRef<"User", 'String'>
    readonly experience: FieldRef<"User", 'String'>
    readonly previousDesignation: FieldRef<"User", 'String'>
    readonly currentDesignation: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly departmentId: FieldRef<"User", 'String'>
    readonly joiningDate: FieldRef<"User", 'DateTime'>
    readonly relievingDate: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.department
   */
  export type User$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * User.leaveRequests
   */
  export type User$leaveRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    cursor?: LeaveRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * User.approvedLeaves
   */
  export type User$approvedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    cursor?: LeaveRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * User.attendances
   */
  export type User$attendancesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    cursor?: AttendanceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * User.salaries
   */
  export type User$salariesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    where?: SalaryWhereInput
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    cursor?: SalaryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[]
  }

  /**
   * User.payrolls
   */
  export type User$payrollsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
    where?: PayrollRecordWhereInput
    orderBy?: PayrollRecordOrderByWithRelationInput | PayrollRecordOrderByWithRelationInput[]
    cursor?: PayrollRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayrollRecordScalarFieldEnum | PayrollRecordScalarFieldEnum[]
  }

  /**
   * User.resignations
   */
  export type User$resignationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
    where?: ResignationWhereInput
    orderBy?: ResignationOrderByWithRelationInput | ResignationOrderByWithRelationInput[]
    cursor?: ResignationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResignationScalarFieldEnum | ResignationScalarFieldEnum[]
  }

  /**
   * User.educations
   */
  export type User$educationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    level: string | null
    collegeName: string | null
    rollNumber: string | null
    yearPassout: string | null
    marksScored: string | null
    marksOutOf: string | null
    cgpaScored: string | null
    cgpaOutOf: string | null
    currentBacklogs: string | null
    historyBacklogs: string | null
    breaksInAcademics: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    level: string | null
    collegeName: string | null
    rollNumber: string | null
    yearPassout: string | null
    marksScored: string | null
    marksOutOf: string | null
    cgpaScored: string | null
    cgpaOutOf: string | null
    currentBacklogs: string | null
    historyBacklogs: string | null
    breaksInAcademics: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    userId: number
    level: number
    collegeName: number
    rollNumber: number
    yearPassout: number
    marksScored: number
    marksOutOf: number
    cgpaScored: number
    cgpaOutOf: number
    currentBacklogs: number
    historyBacklogs: number
    breaksInAcademics: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    userId?: true
    level?: true
    collegeName?: true
    rollNumber?: true
    yearPassout?: true
    marksScored?: true
    marksOutOf?: true
    cgpaScored?: true
    cgpaOutOf?: true
    currentBacklogs?: true
    historyBacklogs?: true
    breaksInAcademics?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    userId?: true
    level?: true
    collegeName?: true
    rollNumber?: true
    yearPassout?: true
    marksScored?: true
    marksOutOf?: true
    cgpaScored?: true
    cgpaOutOf?: true
    currentBacklogs?: true
    historyBacklogs?: true
    breaksInAcademics?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    userId?: true
    level?: true
    collegeName?: true
    rollNumber?: true
    yearPassout?: true
    marksScored?: true
    marksOutOf?: true
    cgpaScored?: true
    cgpaOutOf?: true
    currentBacklogs?: true
    historyBacklogs?: true
    breaksInAcademics?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    userId: string
    level: string
    collegeName: string | null
    rollNumber: string | null
    yearPassout: string | null
    marksScored: string | null
    marksOutOf: string | null
    cgpaScored: string | null
    cgpaOutOf: string | null
    currentBacklogs: string | null
    historyBacklogs: string | null
    breaksInAcademics: string | null
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    level?: boolean
    collegeName?: boolean
    rollNumber?: boolean
    yearPassout?: boolean
    marksScored?: boolean
    marksOutOf?: boolean
    cgpaScored?: boolean
    cgpaOutOf?: boolean
    currentBacklogs?: boolean
    historyBacklogs?: boolean
    breaksInAcademics?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    level?: boolean
    collegeName?: boolean
    rollNumber?: boolean
    yearPassout?: boolean
    marksScored?: boolean
    marksOutOf?: boolean
    cgpaScored?: boolean
    cgpaOutOf?: boolean
    currentBacklogs?: boolean
    historyBacklogs?: boolean
    breaksInAcademics?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    level?: boolean
    collegeName?: boolean
    rollNumber?: boolean
    yearPassout?: boolean
    marksScored?: boolean
    marksOutOf?: boolean
    cgpaScored?: boolean
    cgpaOutOf?: boolean
    currentBacklogs?: boolean
    historyBacklogs?: boolean
    breaksInAcademics?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    userId?: boolean
    level?: boolean
    collegeName?: boolean
    rollNumber?: boolean
    yearPassout?: boolean
    marksScored?: boolean
    marksOutOf?: boolean
    cgpaScored?: boolean
    cgpaOutOf?: boolean
    currentBacklogs?: boolean
    historyBacklogs?: boolean
    breaksInAcademics?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "level" | "collegeName" | "rollNumber" | "yearPassout" | "marksScored" | "marksOutOf" | "cgpaScored" | "cgpaOutOf" | "currentBacklogs" | "historyBacklogs" | "breaksInAcademics", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      level: string
      collegeName: string | null
      rollNumber: string | null
      yearPassout: string | null
      marksScored: string | null
      marksOutOf: string | null
      cgpaScored: string | null
      cgpaOutOf: string | null
      currentBacklogs: string | null
      historyBacklogs: string | null
      breaksInAcademics: string | null
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
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
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
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
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Education model
   */
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly userId: FieldRef<"Education", 'String'>
    readonly level: FieldRef<"Education", 'String'>
    readonly collegeName: FieldRef<"Education", 'String'>
    readonly rollNumber: FieldRef<"Education", 'String'>
    readonly yearPassout: FieldRef<"Education", 'String'>
    readonly marksScored: FieldRef<"Education", 'String'>
    readonly marksOutOf: FieldRef<"Education", 'String'>
    readonly cgpaScored: FieldRef<"Education", 'String'>
    readonly cgpaOutOf: FieldRef<"Education", 'String'>
    readonly currentBacklogs: FieldRef<"Education", 'String'>
    readonly historyBacklogs: FieldRef<"Education", 'String'>
    readonly breaksInAcademics: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Resignation
   */

  export type AggregateResignation = {
    _count: ResignationCountAggregateOutputType | null
    _min: ResignationMinAggregateOutputType | null
    _max: ResignationMaxAggregateOutputType | null
  }

  export type ResignationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    explanation: string | null
    status: string | null
    createdAt: Date | null
    approvedById: string | null
    approvedAt: Date | null
  }

  export type ResignationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    explanation: string | null
    status: string | null
    createdAt: Date | null
    approvedById: string | null
    approvedAt: Date | null
  }

  export type ResignationCountAggregateOutputType = {
    id: number
    userId: number
    userName: number
    explanation: number
    status: number
    createdAt: number
    approvedById: number
    approvedAt: number
    _all: number
  }


  export type ResignationMinAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    explanation?: true
    status?: true
    createdAt?: true
    approvedById?: true
    approvedAt?: true
  }

  export type ResignationMaxAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    explanation?: true
    status?: true
    createdAt?: true
    approvedById?: true
    approvedAt?: true
  }

  export type ResignationCountAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    explanation?: true
    status?: true
    createdAt?: true
    approvedById?: true
    approvedAt?: true
    _all?: true
  }

  export type ResignationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resignation to aggregate.
     */
    where?: ResignationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resignations to fetch.
     */
    orderBy?: ResignationOrderByWithRelationInput | ResignationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResignationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resignations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resignations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Resignations
    **/
    _count?: true | ResignationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResignationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResignationMaxAggregateInputType
  }

  export type GetResignationAggregateType<T extends ResignationAggregateArgs> = {
        [P in keyof T & keyof AggregateResignation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResignation[P]>
      : GetScalarType<T[P], AggregateResignation[P]>
  }




  export type ResignationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResignationWhereInput
    orderBy?: ResignationOrderByWithAggregationInput | ResignationOrderByWithAggregationInput[]
    by: ResignationScalarFieldEnum[] | ResignationScalarFieldEnum
    having?: ResignationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResignationCountAggregateInputType | true
    _min?: ResignationMinAggregateInputType
    _max?: ResignationMaxAggregateInputType
  }

  export type ResignationGroupByOutputType = {
    id: string
    userId: string
    userName: string
    explanation: string
    status: string
    createdAt: Date
    approvedById: string | null
    approvedAt: Date | null
    _count: ResignationCountAggregateOutputType | null
    _min: ResignationMinAggregateOutputType | null
    _max: ResignationMaxAggregateOutputType | null
  }

  type GetResignationGroupByPayload<T extends ResignationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResignationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResignationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResignationGroupByOutputType[P]>
            : GetScalarType<T[P], ResignationGroupByOutputType[P]>
        }
      >
    >


  export type ResignationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    explanation?: boolean
    status?: boolean
    createdAt?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resignation"]>

  export type ResignationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    explanation?: boolean
    status?: boolean
    createdAt?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resignation"]>

  export type ResignationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    explanation?: boolean
    status?: boolean
    createdAt?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["resignation"]>

  export type ResignationSelectScalar = {
    id?: boolean
    userId?: boolean
    userName?: boolean
    explanation?: boolean
    status?: boolean
    createdAt?: boolean
    approvedById?: boolean
    approvedAt?: boolean
  }

  export type ResignationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userName" | "explanation" | "status" | "createdAt" | "approvedById" | "approvedAt", ExtArgs["result"]["resignation"]>
  export type ResignationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResignationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ResignationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResignationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Resignation"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userName: string
      explanation: string
      status: string
      createdAt: Date
      approvedById: string | null
      approvedAt: Date | null
    }, ExtArgs["result"]["resignation"]>
    composites: {}
  }

  type ResignationGetPayload<S extends boolean | null | undefined | ResignationDefaultArgs> = $Result.GetResult<Prisma.$ResignationPayload, S>

  type ResignationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResignationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResignationCountAggregateInputType | true
    }

  export interface ResignationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Resignation'], meta: { name: 'Resignation' } }
    /**
     * Find zero or one Resignation that matches the filter.
     * @param {ResignationFindUniqueArgs} args - Arguments to find a Resignation
     * @example
     * // Get one Resignation
     * const resignation = await prisma.resignation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResignationFindUniqueArgs>(args: SelectSubset<T, ResignationFindUniqueArgs<ExtArgs>>): Prisma__ResignationClient<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Resignation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResignationFindUniqueOrThrowArgs} args - Arguments to find a Resignation
     * @example
     * // Get one Resignation
     * const resignation = await prisma.resignation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResignationFindUniqueOrThrowArgs>(args: SelectSubset<T, ResignationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResignationClient<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resignation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResignationFindFirstArgs} args - Arguments to find a Resignation
     * @example
     * // Get one Resignation
     * const resignation = await prisma.resignation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResignationFindFirstArgs>(args?: SelectSubset<T, ResignationFindFirstArgs<ExtArgs>>): Prisma__ResignationClient<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Resignation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResignationFindFirstOrThrowArgs} args - Arguments to find a Resignation
     * @example
     * // Get one Resignation
     * const resignation = await prisma.resignation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResignationFindFirstOrThrowArgs>(args?: SelectSubset<T, ResignationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResignationClient<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Resignations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResignationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Resignations
     * const resignations = await prisma.resignation.findMany()
     * 
     * // Get first 10 Resignations
     * const resignations = await prisma.resignation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resignationWithIdOnly = await prisma.resignation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResignationFindManyArgs>(args?: SelectSubset<T, ResignationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Resignation.
     * @param {ResignationCreateArgs} args - Arguments to create a Resignation.
     * @example
     * // Create one Resignation
     * const Resignation = await prisma.resignation.create({
     *   data: {
     *     // ... data to create a Resignation
     *   }
     * })
     * 
     */
    create<T extends ResignationCreateArgs>(args: SelectSubset<T, ResignationCreateArgs<ExtArgs>>): Prisma__ResignationClient<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Resignations.
     * @param {ResignationCreateManyArgs} args - Arguments to create many Resignations.
     * @example
     * // Create many Resignations
     * const resignation = await prisma.resignation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResignationCreateManyArgs>(args?: SelectSubset<T, ResignationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Resignations and returns the data saved in the database.
     * @param {ResignationCreateManyAndReturnArgs} args - Arguments to create many Resignations.
     * @example
     * // Create many Resignations
     * const resignation = await prisma.resignation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Resignations and only return the `id`
     * const resignationWithIdOnly = await prisma.resignation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ResignationCreateManyAndReturnArgs>(args?: SelectSubset<T, ResignationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Resignation.
     * @param {ResignationDeleteArgs} args - Arguments to delete one Resignation.
     * @example
     * // Delete one Resignation
     * const Resignation = await prisma.resignation.delete({
     *   where: {
     *     // ... filter to delete one Resignation
     *   }
     * })
     * 
     */
    delete<T extends ResignationDeleteArgs>(args: SelectSubset<T, ResignationDeleteArgs<ExtArgs>>): Prisma__ResignationClient<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Resignation.
     * @param {ResignationUpdateArgs} args - Arguments to update one Resignation.
     * @example
     * // Update one Resignation
     * const resignation = await prisma.resignation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResignationUpdateArgs>(args: SelectSubset<T, ResignationUpdateArgs<ExtArgs>>): Prisma__ResignationClient<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Resignations.
     * @param {ResignationDeleteManyArgs} args - Arguments to filter Resignations to delete.
     * @example
     * // Delete a few Resignations
     * const { count } = await prisma.resignation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResignationDeleteManyArgs>(args?: SelectSubset<T, ResignationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resignations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResignationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Resignations
     * const resignation = await prisma.resignation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResignationUpdateManyArgs>(args: SelectSubset<T, ResignationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Resignations and returns the data updated in the database.
     * @param {ResignationUpdateManyAndReturnArgs} args - Arguments to update many Resignations.
     * @example
     * // Update many Resignations
     * const resignation = await prisma.resignation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Resignations and only return the `id`
     * const resignationWithIdOnly = await prisma.resignation.updateManyAndReturn({
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
    updateManyAndReturn<T extends ResignationUpdateManyAndReturnArgs>(args: SelectSubset<T, ResignationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Resignation.
     * @param {ResignationUpsertArgs} args - Arguments to update or create a Resignation.
     * @example
     * // Update or create a Resignation
     * const resignation = await prisma.resignation.upsert({
     *   create: {
     *     // ... data to create a Resignation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Resignation we want to update
     *   }
     * })
     */
    upsert<T extends ResignationUpsertArgs>(args: SelectSubset<T, ResignationUpsertArgs<ExtArgs>>): Prisma__ResignationClient<$Result.GetResult<Prisma.$ResignationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Resignations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResignationCountArgs} args - Arguments to filter Resignations to count.
     * @example
     * // Count the number of Resignations
     * const count = await prisma.resignation.count({
     *   where: {
     *     // ... the filter for the Resignations we want to count
     *   }
     * })
    **/
    count<T extends ResignationCountArgs>(
      args?: Subset<T, ResignationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResignationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Resignation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResignationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResignationAggregateArgs>(args: Subset<T, ResignationAggregateArgs>): Prisma.PrismaPromise<GetResignationAggregateType<T>>

    /**
     * Group by Resignation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResignationGroupByArgs} args - Group by arguments.
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
      T extends ResignationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResignationGroupByArgs['orderBy'] }
        : { orderBy?: ResignationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResignationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResignationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Resignation model
   */
  readonly fields: ResignationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Resignation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResignationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Resignation model
   */
  interface ResignationFieldRefs {
    readonly id: FieldRef<"Resignation", 'String'>
    readonly userId: FieldRef<"Resignation", 'String'>
    readonly userName: FieldRef<"Resignation", 'String'>
    readonly explanation: FieldRef<"Resignation", 'String'>
    readonly status: FieldRef<"Resignation", 'String'>
    readonly createdAt: FieldRef<"Resignation", 'DateTime'>
    readonly approvedById: FieldRef<"Resignation", 'String'>
    readonly approvedAt: FieldRef<"Resignation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Resignation findUnique
   */
  export type ResignationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
    /**
     * Filter, which Resignation to fetch.
     */
    where: ResignationWhereUniqueInput
  }

  /**
   * Resignation findUniqueOrThrow
   */
  export type ResignationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
    /**
     * Filter, which Resignation to fetch.
     */
    where: ResignationWhereUniqueInput
  }

  /**
   * Resignation findFirst
   */
  export type ResignationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
    /**
     * Filter, which Resignation to fetch.
     */
    where?: ResignationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resignations to fetch.
     */
    orderBy?: ResignationOrderByWithRelationInput | ResignationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resignations.
     */
    cursor?: ResignationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resignations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resignations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resignations.
     */
    distinct?: ResignationScalarFieldEnum | ResignationScalarFieldEnum[]
  }

  /**
   * Resignation findFirstOrThrow
   */
  export type ResignationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
    /**
     * Filter, which Resignation to fetch.
     */
    where?: ResignationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resignations to fetch.
     */
    orderBy?: ResignationOrderByWithRelationInput | ResignationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Resignations.
     */
    cursor?: ResignationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resignations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resignations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Resignations.
     */
    distinct?: ResignationScalarFieldEnum | ResignationScalarFieldEnum[]
  }

  /**
   * Resignation findMany
   */
  export type ResignationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
    /**
     * Filter, which Resignations to fetch.
     */
    where?: ResignationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Resignations to fetch.
     */
    orderBy?: ResignationOrderByWithRelationInput | ResignationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Resignations.
     */
    cursor?: ResignationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Resignations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Resignations.
     */
    skip?: number
    distinct?: ResignationScalarFieldEnum | ResignationScalarFieldEnum[]
  }

  /**
   * Resignation create
   */
  export type ResignationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
    /**
     * The data needed to create a Resignation.
     */
    data: XOR<ResignationCreateInput, ResignationUncheckedCreateInput>
  }

  /**
   * Resignation createMany
   */
  export type ResignationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Resignations.
     */
    data: ResignationCreateManyInput | ResignationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Resignation createManyAndReturn
   */
  export type ResignationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * The data used to create many Resignations.
     */
    data: ResignationCreateManyInput | ResignationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resignation update
   */
  export type ResignationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
    /**
     * The data needed to update a Resignation.
     */
    data: XOR<ResignationUpdateInput, ResignationUncheckedUpdateInput>
    /**
     * Choose, which Resignation to update.
     */
    where: ResignationWhereUniqueInput
  }

  /**
   * Resignation updateMany
   */
  export type ResignationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Resignations.
     */
    data: XOR<ResignationUpdateManyMutationInput, ResignationUncheckedUpdateManyInput>
    /**
     * Filter which Resignations to update
     */
    where?: ResignationWhereInput
    /**
     * Limit how many Resignations to update.
     */
    limit?: number
  }

  /**
   * Resignation updateManyAndReturn
   */
  export type ResignationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * The data used to update Resignations.
     */
    data: XOR<ResignationUpdateManyMutationInput, ResignationUncheckedUpdateManyInput>
    /**
     * Filter which Resignations to update
     */
    where?: ResignationWhereInput
    /**
     * Limit how many Resignations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Resignation upsert
   */
  export type ResignationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
    /**
     * The filter to search for the Resignation to update in case it exists.
     */
    where: ResignationWhereUniqueInput
    /**
     * In case the Resignation found by the `where` argument doesn't exist, create a new Resignation with this data.
     */
    create: XOR<ResignationCreateInput, ResignationUncheckedCreateInput>
    /**
     * In case the Resignation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResignationUpdateInput, ResignationUncheckedUpdateInput>
  }

  /**
   * Resignation delete
   */
  export type ResignationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
    /**
     * Filter which Resignation to delete.
     */
    where: ResignationWhereUniqueInput
  }

  /**
   * Resignation deleteMany
   */
  export type ResignationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Resignations to delete
     */
    where?: ResignationWhereInput
    /**
     * Limit how many Resignations to delete.
     */
    limit?: number
  }

  /**
   * Resignation without action
   */
  export type ResignationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Resignation
     */
    select?: ResignationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Resignation
     */
    omit?: ResignationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResignationInclude<ExtArgs> | null
  }


  /**
   * Model LeaveRequest
   */

  export type AggregateLeaveRequest = {
    _count: LeaveRequestCountAggregateOutputType | null
    _min: LeaveRequestMinAggregateOutputType | null
    _max: LeaveRequestMaxAggregateOutputType | null
  }

  export type LeaveRequestMinAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    type: string | null
    startDate: string | null
    endDate: string | null
    reason: string | null
    status: string | null
    createdAt: Date | null
    approvedById: string | null
    approvedAt: Date | null
    rejectedAt: Date | null
  }

  export type LeaveRequestMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    userName: string | null
    type: string | null
    startDate: string | null
    endDate: string | null
    reason: string | null
    status: string | null
    createdAt: Date | null
    approvedById: string | null
    approvedAt: Date | null
    rejectedAt: Date | null
  }

  export type LeaveRequestCountAggregateOutputType = {
    id: number
    userId: number
    userName: number
    type: number
    startDate: number
    endDate: number
    reason: number
    status: number
    createdAt: number
    approvedById: number
    approvedAt: number
    rejectedAt: number
    _all: number
  }


  export type LeaveRequestMinAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    type?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
    approvedById?: true
    approvedAt?: true
    rejectedAt?: true
  }

  export type LeaveRequestMaxAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    type?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
    approvedById?: true
    approvedAt?: true
    rejectedAt?: true
  }

  export type LeaveRequestCountAggregateInputType = {
    id?: true
    userId?: true
    userName?: true
    type?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
    approvedById?: true
    approvedAt?: true
    rejectedAt?: true
    _all?: true
  }

  export type LeaveRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveRequest to aggregate.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveRequests
    **/
    _count?: true | LeaveRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveRequestMaxAggregateInputType
  }

  export type GetLeaveRequestAggregateType<T extends LeaveRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveRequest[P]>
      : GetScalarType<T[P], AggregateLeaveRequest[P]>
  }




  export type LeaveRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveRequestWhereInput
    orderBy?: LeaveRequestOrderByWithAggregationInput | LeaveRequestOrderByWithAggregationInput[]
    by: LeaveRequestScalarFieldEnum[] | LeaveRequestScalarFieldEnum
    having?: LeaveRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveRequestCountAggregateInputType | true
    _min?: LeaveRequestMinAggregateInputType
    _max?: LeaveRequestMaxAggregateInputType
  }

  export type LeaveRequestGroupByOutputType = {
    id: string
    userId: string
    userName: string
    type: string
    startDate: string
    endDate: string
    reason: string
    status: string
    createdAt: Date
    approvedById: string | null
    approvedAt: Date | null
    rejectedAt: Date | null
    _count: LeaveRequestCountAggregateOutputType | null
    _min: LeaveRequestMinAggregateOutputType | null
    _max: LeaveRequestMaxAggregateOutputType | null
  }

  type GetLeaveRequestGroupByPayload<T extends LeaveRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveRequestGroupByOutputType[P]>
        }
      >
    >


  export type LeaveRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    rejectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    rejectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    userName?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    rejectedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
  }, ExtArgs["result"]["leaveRequest"]>

  export type LeaveRequestSelectScalar = {
    id?: boolean
    userId?: boolean
    userName?: boolean
    type?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    approvedById?: boolean
    approvedAt?: boolean
    rejectedAt?: boolean
  }

  export type LeaveRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "userName" | "type" | "startDate" | "endDate" | "reason" | "status" | "createdAt" | "approvedById" | "approvedAt" | "rejectedAt", ExtArgs["result"]["leaveRequest"]>
  export type LeaveRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
  }
  export type LeaveRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
  }
  export type LeaveRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    approvedBy?: boolean | LeaveRequest$approvedByArgs<ExtArgs>
  }

  export type $LeaveRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveRequest"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      approvedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      userName: string
      type: string
      startDate: string
      endDate: string
      reason: string
      status: string
      createdAt: Date
      approvedById: string | null
      approvedAt: Date | null
      rejectedAt: Date | null
    }, ExtArgs["result"]["leaveRequest"]>
    composites: {}
  }

  type LeaveRequestGetPayload<S extends boolean | null | undefined | LeaveRequestDefaultArgs> = $Result.GetResult<Prisma.$LeaveRequestPayload, S>

  type LeaveRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveRequestCountAggregateInputType | true
    }

  export interface LeaveRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveRequest'], meta: { name: 'LeaveRequest' } }
    /**
     * Find zero or one LeaveRequest that matches the filter.
     * @param {LeaveRequestFindUniqueArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveRequestFindUniqueArgs>(args: SelectSubset<T, LeaveRequestFindUniqueArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveRequestFindUniqueOrThrowArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindFirstArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveRequestFindFirstArgs>(args?: SelectSubset<T, LeaveRequestFindFirstArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindFirstOrThrowArgs} args - Arguments to find a LeaveRequest
     * @example
     * // Get one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveRequests
     * const leaveRequests = await prisma.leaveRequest.findMany()
     * 
     * // Get first 10 LeaveRequests
     * const leaveRequests = await prisma.leaveRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveRequestWithIdOnly = await prisma.leaveRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveRequestFindManyArgs>(args?: SelectSubset<T, LeaveRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveRequest.
     * @param {LeaveRequestCreateArgs} args - Arguments to create a LeaveRequest.
     * @example
     * // Create one LeaveRequest
     * const LeaveRequest = await prisma.leaveRequest.create({
     *   data: {
     *     // ... data to create a LeaveRequest
     *   }
     * })
     * 
     */
    create<T extends LeaveRequestCreateArgs>(args: SelectSubset<T, LeaveRequestCreateArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveRequests.
     * @param {LeaveRequestCreateManyArgs} args - Arguments to create many LeaveRequests.
     * @example
     * // Create many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveRequestCreateManyArgs>(args?: SelectSubset<T, LeaveRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveRequests and returns the data saved in the database.
     * @param {LeaveRequestCreateManyAndReturnArgs} args - Arguments to create many LeaveRequests.
     * @example
     * // Create many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveRequests and only return the `id`
     * const leaveRequestWithIdOnly = await prisma.leaveRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveRequest.
     * @param {LeaveRequestDeleteArgs} args - Arguments to delete one LeaveRequest.
     * @example
     * // Delete one LeaveRequest
     * const LeaveRequest = await prisma.leaveRequest.delete({
     *   where: {
     *     // ... filter to delete one LeaveRequest
     *   }
     * })
     * 
     */
    delete<T extends LeaveRequestDeleteArgs>(args: SelectSubset<T, LeaveRequestDeleteArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveRequest.
     * @param {LeaveRequestUpdateArgs} args - Arguments to update one LeaveRequest.
     * @example
     * // Update one LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveRequestUpdateArgs>(args: SelectSubset<T, LeaveRequestUpdateArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveRequests.
     * @param {LeaveRequestDeleteManyArgs} args - Arguments to filter LeaveRequests to delete.
     * @example
     * // Delete a few LeaveRequests
     * const { count } = await prisma.leaveRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveRequestDeleteManyArgs>(args?: SelectSubset<T, LeaveRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveRequestUpdateManyArgs>(args: SelectSubset<T, LeaveRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveRequests and returns the data updated in the database.
     * @param {LeaveRequestUpdateManyAndReturnArgs} args - Arguments to update many LeaveRequests.
     * @example
     * // Update many LeaveRequests
     * const leaveRequest = await prisma.leaveRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveRequests and only return the `id`
     * const leaveRequestWithIdOnly = await prisma.leaveRequest.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaveRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveRequest.
     * @param {LeaveRequestUpsertArgs} args - Arguments to update or create a LeaveRequest.
     * @example
     * // Update or create a LeaveRequest
     * const leaveRequest = await prisma.leaveRequest.upsert({
     *   create: {
     *     // ... data to create a LeaveRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveRequest we want to update
     *   }
     * })
     */
    upsert<T extends LeaveRequestUpsertArgs>(args: SelectSubset<T, LeaveRequestUpsertArgs<ExtArgs>>): Prisma__LeaveRequestClient<$Result.GetResult<Prisma.$LeaveRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestCountArgs} args - Arguments to filter LeaveRequests to count.
     * @example
     * // Count the number of LeaveRequests
     * const count = await prisma.leaveRequest.count({
     *   where: {
     *     // ... the filter for the LeaveRequests we want to count
     *   }
     * })
    **/
    count<T extends LeaveRequestCountArgs>(
      args?: Subset<T, LeaveRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveRequestAggregateArgs>(args: Subset<T, LeaveRequestAggregateArgs>): Prisma.PrismaPromise<GetLeaveRequestAggregateType<T>>

    /**
     * Group by LeaveRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveRequestGroupByArgs} args - Group by arguments.
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
      T extends LeaveRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveRequestGroupByArgs['orderBy'] }
        : { orderBy?: LeaveRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveRequest model
   */
  readonly fields: LeaveRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    approvedBy<T extends LeaveRequest$approvedByArgs<ExtArgs> = {}>(args?: Subset<T, LeaveRequest$approvedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeaveRequest model
   */
  interface LeaveRequestFieldRefs {
    readonly id: FieldRef<"LeaveRequest", 'String'>
    readonly userId: FieldRef<"LeaveRequest", 'String'>
    readonly userName: FieldRef<"LeaveRequest", 'String'>
    readonly type: FieldRef<"LeaveRequest", 'String'>
    readonly startDate: FieldRef<"LeaveRequest", 'String'>
    readonly endDate: FieldRef<"LeaveRequest", 'String'>
    readonly reason: FieldRef<"LeaveRequest", 'String'>
    readonly status: FieldRef<"LeaveRequest", 'String'>
    readonly createdAt: FieldRef<"LeaveRequest", 'DateTime'>
    readonly approvedById: FieldRef<"LeaveRequest", 'String'>
    readonly approvedAt: FieldRef<"LeaveRequest", 'DateTime'>
    readonly rejectedAt: FieldRef<"LeaveRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LeaveRequest findUnique
   */
  export type LeaveRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest findUniqueOrThrow
   */
  export type LeaveRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest findFirst
   */
  export type LeaveRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest findFirstOrThrow
   */
  export type LeaveRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequest to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveRequests.
     */
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest findMany
   */
  export type LeaveRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter, which LeaveRequests to fetch.
     */
    where?: LeaveRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveRequests to fetch.
     */
    orderBy?: LeaveRequestOrderByWithRelationInput | LeaveRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveRequests.
     */
    cursor?: LeaveRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveRequests.
     */
    skip?: number
    distinct?: LeaveRequestScalarFieldEnum | LeaveRequestScalarFieldEnum[]
  }

  /**
   * LeaveRequest create
   */
  export type LeaveRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveRequest.
     */
    data: XOR<LeaveRequestCreateInput, LeaveRequestUncheckedCreateInput>
  }

  /**
   * LeaveRequest createMany
   */
  export type LeaveRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveRequests.
     */
    data: LeaveRequestCreateManyInput | LeaveRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveRequest createManyAndReturn
   */
  export type LeaveRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveRequests.
     */
    data: LeaveRequestCreateManyInput | LeaveRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveRequest update
   */
  export type LeaveRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveRequest.
     */
    data: XOR<LeaveRequestUpdateInput, LeaveRequestUncheckedUpdateInput>
    /**
     * Choose, which LeaveRequest to update.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest updateMany
   */
  export type LeaveRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveRequests.
     */
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyInput>
    /**
     * Filter which LeaveRequests to update
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to update.
     */
    limit?: number
  }

  /**
   * LeaveRequest updateManyAndReturn
   */
  export type LeaveRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * The data used to update LeaveRequests.
     */
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyInput>
    /**
     * Filter which LeaveRequests to update
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveRequest upsert
   */
  export type LeaveRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveRequest to update in case it exists.
     */
    where: LeaveRequestWhereUniqueInput
    /**
     * In case the LeaveRequest found by the `where` argument doesn't exist, create a new LeaveRequest with this data.
     */
    create: XOR<LeaveRequestCreateInput, LeaveRequestUncheckedCreateInput>
    /**
     * In case the LeaveRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveRequestUpdateInput, LeaveRequestUncheckedUpdateInput>
  }

  /**
   * LeaveRequest delete
   */
  export type LeaveRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
    /**
     * Filter which LeaveRequest to delete.
     */
    where: LeaveRequestWhereUniqueInput
  }

  /**
   * LeaveRequest deleteMany
   */
  export type LeaveRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveRequests to delete
     */
    where?: LeaveRequestWhereInput
    /**
     * Limit how many LeaveRequests to delete.
     */
    limit?: number
  }

  /**
   * LeaveRequest.approvedBy
   */
  export type LeaveRequest$approvedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LeaveRequest without action
   */
  export type LeaveRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveRequest
     */
    select?: LeaveRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveRequest
     */
    omit?: LeaveRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveRequestInclude<ExtArgs> | null
  }


  /**
   * Model Attendance
   */

  export type AggregateAttendance = {
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  export type AttendanceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    checkIn: Date | null
    checkOut: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type AttendanceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    date: Date | null
    checkIn: Date | null
    checkOut: Date | null
    status: string | null
    createdAt: Date | null
  }

  export type AttendanceCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    checkIn: number
    checkOut: number
    status: number
    createdAt: number
    _all: number
  }


  export type AttendanceMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    checkIn?: true
    checkOut?: true
    status?: true
    createdAt?: true
  }

  export type AttendanceMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    checkIn?: true
    checkOut?: true
    status?: true
    createdAt?: true
  }

  export type AttendanceCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    checkIn?: true
    checkOut?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type AttendanceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendance to aggregate.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Attendances
    **/
    _count?: true | AttendanceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AttendanceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AttendanceMaxAggregateInputType
  }

  export type GetAttendanceAggregateType<T extends AttendanceAggregateArgs> = {
        [P in keyof T & keyof AggregateAttendance]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAttendance[P]>
      : GetScalarType<T[P], AggregateAttendance[P]>
  }




  export type AttendanceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AttendanceWhereInput
    orderBy?: AttendanceOrderByWithAggregationInput | AttendanceOrderByWithAggregationInput[]
    by: AttendanceScalarFieldEnum[] | AttendanceScalarFieldEnum
    having?: AttendanceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AttendanceCountAggregateInputType | true
    _min?: AttendanceMinAggregateInputType
    _max?: AttendanceMaxAggregateInputType
  }

  export type AttendanceGroupByOutputType = {
    id: string
    userId: string
    date: Date
    checkIn: Date | null
    checkOut: Date | null
    status: string
    createdAt: Date
    _count: AttendanceCountAggregateOutputType | null
    _min: AttendanceMinAggregateOutputType | null
    _max: AttendanceMaxAggregateOutputType | null
  }

  type GetAttendanceGroupByPayload<T extends AttendanceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AttendanceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AttendanceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
            : GetScalarType<T[P], AttendanceGroupByOutputType[P]>
        }
      >
    >


  export type AttendanceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["attendance"]>

  export type AttendanceSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    checkIn?: boolean
    checkOut?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type AttendanceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "date" | "checkIn" | "checkOut" | "status" | "createdAt", ExtArgs["result"]["attendance"]>
  export type AttendanceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AttendanceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AttendancePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Attendance"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      date: Date
      checkIn: Date | null
      checkOut: Date | null
      status: string
      createdAt: Date
    }, ExtArgs["result"]["attendance"]>
    composites: {}
  }

  type AttendanceGetPayload<S extends boolean | null | undefined | AttendanceDefaultArgs> = $Result.GetResult<Prisma.$AttendancePayload, S>

  type AttendanceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AttendanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AttendanceCountAggregateInputType | true
    }

  export interface AttendanceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Attendance'], meta: { name: 'Attendance' } }
    /**
     * Find zero or one Attendance that matches the filter.
     * @param {AttendanceFindUniqueArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AttendanceFindUniqueArgs>(args: SelectSubset<T, AttendanceFindUniqueArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Attendance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AttendanceFindUniqueOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AttendanceFindUniqueOrThrowArgs>(args: SelectSubset<T, AttendanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AttendanceFindFirstArgs>(args?: SelectSubset<T, AttendanceFindFirstArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Attendance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindFirstOrThrowArgs} args - Arguments to find a Attendance
     * @example
     * // Get one Attendance
     * const attendance = await prisma.attendance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AttendanceFindFirstOrThrowArgs>(args?: SelectSubset<T, AttendanceFindFirstOrThrowArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Attendances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Attendances
     * const attendances = await prisma.attendance.findMany()
     * 
     * // Get first 10 Attendances
     * const attendances = await prisma.attendance.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const attendanceWithIdOnly = await prisma.attendance.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AttendanceFindManyArgs>(args?: SelectSubset<T, AttendanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Attendance.
     * @param {AttendanceCreateArgs} args - Arguments to create a Attendance.
     * @example
     * // Create one Attendance
     * const Attendance = await prisma.attendance.create({
     *   data: {
     *     // ... data to create a Attendance
     *   }
     * })
     * 
     */
    create<T extends AttendanceCreateArgs>(args: SelectSubset<T, AttendanceCreateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Attendances.
     * @param {AttendanceCreateManyArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AttendanceCreateManyArgs>(args?: SelectSubset<T, AttendanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Attendances and returns the data saved in the database.
     * @param {AttendanceCreateManyAndReturnArgs} args - Arguments to create many Attendances.
     * @example
     * // Create many Attendances
     * const attendance = await prisma.attendance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AttendanceCreateManyAndReturnArgs>(args?: SelectSubset<T, AttendanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Attendance.
     * @param {AttendanceDeleteArgs} args - Arguments to delete one Attendance.
     * @example
     * // Delete one Attendance
     * const Attendance = await prisma.attendance.delete({
     *   where: {
     *     // ... filter to delete one Attendance
     *   }
     * })
     * 
     */
    delete<T extends AttendanceDeleteArgs>(args: SelectSubset<T, AttendanceDeleteArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Attendance.
     * @param {AttendanceUpdateArgs} args - Arguments to update one Attendance.
     * @example
     * // Update one Attendance
     * const attendance = await prisma.attendance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AttendanceUpdateArgs>(args: SelectSubset<T, AttendanceUpdateArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Attendances.
     * @param {AttendanceDeleteManyArgs} args - Arguments to filter Attendances to delete.
     * @example
     * // Delete a few Attendances
     * const { count } = await prisma.attendance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AttendanceDeleteManyArgs>(args?: SelectSubset<T, AttendanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AttendanceUpdateManyArgs>(args: SelectSubset<T, AttendanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Attendances and returns the data updated in the database.
     * @param {AttendanceUpdateManyAndReturnArgs} args - Arguments to update many Attendances.
     * @example
     * // Update many Attendances
     * const attendance = await prisma.attendance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Attendances and only return the `id`
     * const attendanceWithIdOnly = await prisma.attendance.updateManyAndReturn({
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
    updateManyAndReturn<T extends AttendanceUpdateManyAndReturnArgs>(args: SelectSubset<T, AttendanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Attendance.
     * @param {AttendanceUpsertArgs} args - Arguments to update or create a Attendance.
     * @example
     * // Update or create a Attendance
     * const attendance = await prisma.attendance.upsert({
     *   create: {
     *     // ... data to create a Attendance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Attendance we want to update
     *   }
     * })
     */
    upsert<T extends AttendanceUpsertArgs>(args: SelectSubset<T, AttendanceUpsertArgs<ExtArgs>>): Prisma__AttendanceClient<$Result.GetResult<Prisma.$AttendancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Attendances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceCountArgs} args - Arguments to filter Attendances to count.
     * @example
     * // Count the number of Attendances
     * const count = await prisma.attendance.count({
     *   where: {
     *     // ... the filter for the Attendances we want to count
     *   }
     * })
    **/
    count<T extends AttendanceCountArgs>(
      args?: Subset<T, AttendanceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AttendanceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AttendanceAggregateArgs>(args: Subset<T, AttendanceAggregateArgs>): Prisma.PrismaPromise<GetAttendanceAggregateType<T>>

    /**
     * Group by Attendance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AttendanceGroupByArgs} args - Group by arguments.
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
      T extends AttendanceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AttendanceGroupByArgs['orderBy'] }
        : { orderBy?: AttendanceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AttendanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAttendanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Attendance model
   */
  readonly fields: AttendanceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Attendance.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AttendanceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Attendance model
   */
  interface AttendanceFieldRefs {
    readonly id: FieldRef<"Attendance", 'String'>
    readonly userId: FieldRef<"Attendance", 'String'>
    readonly date: FieldRef<"Attendance", 'DateTime'>
    readonly checkIn: FieldRef<"Attendance", 'DateTime'>
    readonly checkOut: FieldRef<"Attendance", 'DateTime'>
    readonly status: FieldRef<"Attendance", 'String'>
    readonly createdAt: FieldRef<"Attendance", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Attendance findUnique
   */
  export type AttendanceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findUniqueOrThrow
   */
  export type AttendanceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance findFirst
   */
  export type AttendanceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findFirstOrThrow
   */
  export type AttendanceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendance to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Attendances.
     */
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance findMany
   */
  export type AttendanceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter, which Attendances to fetch.
     */
    where?: AttendanceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Attendances to fetch.
     */
    orderBy?: AttendanceOrderByWithRelationInput | AttendanceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Attendances.
     */
    cursor?: AttendanceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Attendances from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Attendances.
     */
    skip?: number
    distinct?: AttendanceScalarFieldEnum | AttendanceScalarFieldEnum[]
  }

  /**
   * Attendance create
   */
  export type AttendanceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to create a Attendance.
     */
    data: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
  }

  /**
   * Attendance createMany
   */
  export type AttendanceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Attendance createManyAndReturn
   */
  export type AttendanceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to create many Attendances.
     */
    data: AttendanceCreateManyInput | AttendanceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance update
   */
  export type AttendanceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The data needed to update a Attendance.
     */
    data: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
    /**
     * Choose, which Attendance to update.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance updateMany
   */
  export type AttendanceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
  }

  /**
   * Attendance updateManyAndReturn
   */
  export type AttendanceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * The data used to update Attendances.
     */
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyInput>
    /**
     * Filter which Attendances to update
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Attendance upsert
   */
  export type AttendanceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * The filter to search for the Attendance to update in case it exists.
     */
    where: AttendanceWhereUniqueInput
    /**
     * In case the Attendance found by the `where` argument doesn't exist, create a new Attendance with this data.
     */
    create: XOR<AttendanceCreateInput, AttendanceUncheckedCreateInput>
    /**
     * In case the Attendance was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AttendanceUpdateInput, AttendanceUncheckedUpdateInput>
  }

  /**
   * Attendance delete
   */
  export type AttendanceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
    /**
     * Filter which Attendance to delete.
     */
    where: AttendanceWhereUniqueInput
  }

  /**
   * Attendance deleteMany
   */
  export type AttendanceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Attendances to delete
     */
    where?: AttendanceWhereInput
    /**
     * Limit how many Attendances to delete.
     */
    limit?: number
  }

  /**
   * Attendance without action
   */
  export type AttendanceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Attendance
     */
    select?: AttendanceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Attendance
     */
    omit?: AttendanceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AttendanceInclude<ExtArgs> | null
  }


  /**
   * Model Salary
   */

  export type AggregateSalary = {
    _count: SalaryCountAggregateOutputType | null
    _avg: SalaryAvgAggregateOutputType | null
    _sum: SalarySumAggregateOutputType | null
    _min: SalaryMinAggregateOutputType | null
    _max: SalaryMaxAggregateOutputType | null
  }

  export type SalaryAvgAggregateOutputType = {
    baseAmount: number | null
  }

  export type SalarySumAggregateOutputType = {
    baseAmount: number | null
  }

  export type SalaryMinAggregateOutputType = {
    id: string | null
    userId: string | null
    baseAmount: number | null
    effectiveFrom: Date | null
  }

  export type SalaryMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    baseAmount: number | null
    effectiveFrom: Date | null
  }

  export type SalaryCountAggregateOutputType = {
    id: number
    userId: number
    baseAmount: number
    effectiveFrom: number
    _all: number
  }


  export type SalaryAvgAggregateInputType = {
    baseAmount?: true
  }

  export type SalarySumAggregateInputType = {
    baseAmount?: true
  }

  export type SalaryMinAggregateInputType = {
    id?: true
    userId?: true
    baseAmount?: true
    effectiveFrom?: true
  }

  export type SalaryMaxAggregateInputType = {
    id?: true
    userId?: true
    baseAmount?: true
    effectiveFrom?: true
  }

  export type SalaryCountAggregateInputType = {
    id?: true
    userId?: true
    baseAmount?: true
    effectiveFrom?: true
    _all?: true
  }

  export type SalaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salary to aggregate.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Salaries
    **/
    _count?: true | SalaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SalaryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SalarySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalaryMaxAggregateInputType
  }

  export type GetSalaryAggregateType<T extends SalaryAggregateArgs> = {
        [P in keyof T & keyof AggregateSalary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalary[P]>
      : GetScalarType<T[P], AggregateSalary[P]>
  }




  export type SalaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalaryWhereInput
    orderBy?: SalaryOrderByWithAggregationInput | SalaryOrderByWithAggregationInput[]
    by: SalaryScalarFieldEnum[] | SalaryScalarFieldEnum
    having?: SalaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalaryCountAggregateInputType | true
    _avg?: SalaryAvgAggregateInputType
    _sum?: SalarySumAggregateInputType
    _min?: SalaryMinAggregateInputType
    _max?: SalaryMaxAggregateInputType
  }

  export type SalaryGroupByOutputType = {
    id: string
    userId: string
    baseAmount: number
    effectiveFrom: Date
    _count: SalaryCountAggregateOutputType | null
    _avg: SalaryAvgAggregateOutputType | null
    _sum: SalarySumAggregateOutputType | null
    _min: SalaryMinAggregateOutputType | null
    _max: SalaryMaxAggregateOutputType | null
  }

  type GetSalaryGroupByPayload<T extends SalaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalaryGroupByOutputType[P]>
            : GetScalarType<T[P], SalaryGroupByOutputType[P]>
        }
      >
    >


  export type SalarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    baseAmount?: boolean
    effectiveFrom?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salary"]>

  export type SalarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    baseAmount?: boolean
    effectiveFrom?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salary"]>

  export type SalarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    baseAmount?: boolean
    effectiveFrom?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salary"]>

  export type SalarySelectScalar = {
    id?: boolean
    userId?: boolean
    baseAmount?: boolean
    effectiveFrom?: boolean
  }

  export type SalaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "baseAmount" | "effectiveFrom", ExtArgs["result"]["salary"]>
  export type SalaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SalaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SalaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SalaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Salary"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      baseAmount: number
      effectiveFrom: Date
    }, ExtArgs["result"]["salary"]>
    composites: {}
  }

  type SalaryGetPayload<S extends boolean | null | undefined | SalaryDefaultArgs> = $Result.GetResult<Prisma.$SalaryPayload, S>

  type SalaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalaryCountAggregateInputType | true
    }

  export interface SalaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Salary'], meta: { name: 'Salary' } }
    /**
     * Find zero or one Salary that matches the filter.
     * @param {SalaryFindUniqueArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalaryFindUniqueArgs>(args: SelectSubset<T, SalaryFindUniqueArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Salary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalaryFindUniqueOrThrowArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalaryFindUniqueOrThrowArgs>(args: SelectSubset<T, SalaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFindFirstArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalaryFindFirstArgs>(args?: SelectSubset<T, SalaryFindFirstArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Salary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFindFirstOrThrowArgs} args - Arguments to find a Salary
     * @example
     * // Get one Salary
     * const salary = await prisma.salary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalaryFindFirstOrThrowArgs>(args?: SelectSubset<T, SalaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Salaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Salaries
     * const salaries = await prisma.salary.findMany()
     * 
     * // Get first 10 Salaries
     * const salaries = await prisma.salary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salaryWithIdOnly = await prisma.salary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalaryFindManyArgs>(args?: SelectSubset<T, SalaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Salary.
     * @param {SalaryCreateArgs} args - Arguments to create a Salary.
     * @example
     * // Create one Salary
     * const Salary = await prisma.salary.create({
     *   data: {
     *     // ... data to create a Salary
     *   }
     * })
     * 
     */
    create<T extends SalaryCreateArgs>(args: SelectSubset<T, SalaryCreateArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Salaries.
     * @param {SalaryCreateManyArgs} args - Arguments to create many Salaries.
     * @example
     * // Create many Salaries
     * const salary = await prisma.salary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalaryCreateManyArgs>(args?: SelectSubset<T, SalaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Salaries and returns the data saved in the database.
     * @param {SalaryCreateManyAndReturnArgs} args - Arguments to create many Salaries.
     * @example
     * // Create many Salaries
     * const salary = await prisma.salary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Salaries and only return the `id`
     * const salaryWithIdOnly = await prisma.salary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalaryCreateManyAndReturnArgs>(args?: SelectSubset<T, SalaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Salary.
     * @param {SalaryDeleteArgs} args - Arguments to delete one Salary.
     * @example
     * // Delete one Salary
     * const Salary = await prisma.salary.delete({
     *   where: {
     *     // ... filter to delete one Salary
     *   }
     * })
     * 
     */
    delete<T extends SalaryDeleteArgs>(args: SelectSubset<T, SalaryDeleteArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Salary.
     * @param {SalaryUpdateArgs} args - Arguments to update one Salary.
     * @example
     * // Update one Salary
     * const salary = await prisma.salary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalaryUpdateArgs>(args: SelectSubset<T, SalaryUpdateArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Salaries.
     * @param {SalaryDeleteManyArgs} args - Arguments to filter Salaries to delete.
     * @example
     * // Delete a few Salaries
     * const { count } = await prisma.salary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalaryDeleteManyArgs>(args?: SelectSubset<T, SalaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Salaries
     * const salary = await prisma.salary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalaryUpdateManyArgs>(args: SelectSubset<T, SalaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Salaries and returns the data updated in the database.
     * @param {SalaryUpdateManyAndReturnArgs} args - Arguments to update many Salaries.
     * @example
     * // Update many Salaries
     * const salary = await prisma.salary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Salaries and only return the `id`
     * const salaryWithIdOnly = await prisma.salary.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalaryUpdateManyAndReturnArgs>(args: SelectSubset<T, SalaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Salary.
     * @param {SalaryUpsertArgs} args - Arguments to update or create a Salary.
     * @example
     * // Update or create a Salary
     * const salary = await prisma.salary.upsert({
     *   create: {
     *     // ... data to create a Salary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Salary we want to update
     *   }
     * })
     */
    upsert<T extends SalaryUpsertArgs>(args: SelectSubset<T, SalaryUpsertArgs<ExtArgs>>): Prisma__SalaryClient<$Result.GetResult<Prisma.$SalaryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Salaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryCountArgs} args - Arguments to filter Salaries to count.
     * @example
     * // Count the number of Salaries
     * const count = await prisma.salary.count({
     *   where: {
     *     // ... the filter for the Salaries we want to count
     *   }
     * })
    **/
    count<T extends SalaryCountArgs>(
      args?: Subset<T, SalaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Salary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalaryAggregateArgs>(args: Subset<T, SalaryAggregateArgs>): Prisma.PrismaPromise<GetSalaryAggregateType<T>>

    /**
     * Group by Salary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalaryGroupByArgs} args - Group by arguments.
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
      T extends SalaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalaryGroupByArgs['orderBy'] }
        : { orderBy?: SalaryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Salary model
   */
  readonly fields: SalaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Salary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Salary model
   */
  interface SalaryFieldRefs {
    readonly id: FieldRef<"Salary", 'String'>
    readonly userId: FieldRef<"Salary", 'String'>
    readonly baseAmount: FieldRef<"Salary", 'Float'>
    readonly effectiveFrom: FieldRef<"Salary", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Salary findUnique
   */
  export type SalaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary findUniqueOrThrow
   */
  export type SalaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary findFirst
   */
  export type SalaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salaries.
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salaries.
     */
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[]
  }

  /**
   * Salary findFirstOrThrow
   */
  export type SalaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter, which Salary to fetch.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Salaries.
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Salaries.
     */
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[]
  }

  /**
   * Salary findMany
   */
  export type SalaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter, which Salaries to fetch.
     */
    where?: SalaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Salaries to fetch.
     */
    orderBy?: SalaryOrderByWithRelationInput | SalaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Salaries.
     */
    cursor?: SalaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Salaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Salaries.
     */
    skip?: number
    distinct?: SalaryScalarFieldEnum | SalaryScalarFieldEnum[]
  }

  /**
   * Salary create
   */
  export type SalaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Salary.
     */
    data: XOR<SalaryCreateInput, SalaryUncheckedCreateInput>
  }

  /**
   * Salary createMany
   */
  export type SalaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Salaries.
     */
    data: SalaryCreateManyInput | SalaryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Salary createManyAndReturn
   */
  export type SalaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * The data used to create many Salaries.
     */
    data: SalaryCreateManyInput | SalaryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Salary update
   */
  export type SalaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Salary.
     */
    data: XOR<SalaryUpdateInput, SalaryUncheckedUpdateInput>
    /**
     * Choose, which Salary to update.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary updateMany
   */
  export type SalaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Salaries.
     */
    data: XOR<SalaryUpdateManyMutationInput, SalaryUncheckedUpdateManyInput>
    /**
     * Filter which Salaries to update
     */
    where?: SalaryWhereInput
    /**
     * Limit how many Salaries to update.
     */
    limit?: number
  }

  /**
   * Salary updateManyAndReturn
   */
  export type SalaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * The data used to update Salaries.
     */
    data: XOR<SalaryUpdateManyMutationInput, SalaryUncheckedUpdateManyInput>
    /**
     * Filter which Salaries to update
     */
    where?: SalaryWhereInput
    /**
     * Limit how many Salaries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Salary upsert
   */
  export type SalaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Salary to update in case it exists.
     */
    where: SalaryWhereUniqueInput
    /**
     * In case the Salary found by the `where` argument doesn't exist, create a new Salary with this data.
     */
    create: XOR<SalaryCreateInput, SalaryUncheckedCreateInput>
    /**
     * In case the Salary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalaryUpdateInput, SalaryUncheckedUpdateInput>
  }

  /**
   * Salary delete
   */
  export type SalaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
    /**
     * Filter which Salary to delete.
     */
    where: SalaryWhereUniqueInput
  }

  /**
   * Salary deleteMany
   */
  export type SalaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Salaries to delete
     */
    where?: SalaryWhereInput
    /**
     * Limit how many Salaries to delete.
     */
    limit?: number
  }

  /**
   * Salary without action
   */
  export type SalaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Salary
     */
    select?: SalarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Salary
     */
    omit?: SalaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalaryInclude<ExtArgs> | null
  }


  /**
   * Model PayrollRecord
   */

  export type AggregatePayrollRecord = {
    _count: PayrollRecordCountAggregateOutputType | null
    _avg: PayrollRecordAvgAggregateOutputType | null
    _sum: PayrollRecordSumAggregateOutputType | null
    _min: PayrollRecordMinAggregateOutputType | null
    _max: PayrollRecordMaxAggregateOutputType | null
  }

  export type PayrollRecordAvgAggregateOutputType = {
    periodYear: number | null
    periodMonth: number | null
    gross: number | null
    net: number | null
  }

  export type PayrollRecordSumAggregateOutputType = {
    periodYear: number | null
    periodMonth: number | null
    gross: number | null
    net: number | null
  }

  export type PayrollRecordMinAggregateOutputType = {
    id: string | null
    userId: string | null
    periodYear: number | null
    periodMonth: number | null
    gross: number | null
    net: number | null
    createdAt: Date | null
  }

  export type PayrollRecordMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    periodYear: number | null
    periodMonth: number | null
    gross: number | null
    net: number | null
    createdAt: Date | null
  }

  export type PayrollRecordCountAggregateOutputType = {
    id: number
    userId: number
    periodYear: number
    periodMonth: number
    gross: number
    net: number
    createdAt: number
    _all: number
  }


  export type PayrollRecordAvgAggregateInputType = {
    periodYear?: true
    periodMonth?: true
    gross?: true
    net?: true
  }

  export type PayrollRecordSumAggregateInputType = {
    periodYear?: true
    periodMonth?: true
    gross?: true
    net?: true
  }

  export type PayrollRecordMinAggregateInputType = {
    id?: true
    userId?: true
    periodYear?: true
    periodMonth?: true
    gross?: true
    net?: true
    createdAt?: true
  }

  export type PayrollRecordMaxAggregateInputType = {
    id?: true
    userId?: true
    periodYear?: true
    periodMonth?: true
    gross?: true
    net?: true
    createdAt?: true
  }

  export type PayrollRecordCountAggregateInputType = {
    id?: true
    userId?: true
    periodYear?: true
    periodMonth?: true
    gross?: true
    net?: true
    createdAt?: true
    _all?: true
  }

  export type PayrollRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollRecord to aggregate.
     */
    where?: PayrollRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollRecords to fetch.
     */
    orderBy?: PayrollRecordOrderByWithRelationInput | PayrollRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayrollRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PayrollRecords
    **/
    _count?: true | PayrollRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayrollRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayrollRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayrollRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayrollRecordMaxAggregateInputType
  }

  export type GetPayrollRecordAggregateType<T extends PayrollRecordAggregateArgs> = {
        [P in keyof T & keyof AggregatePayrollRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayrollRecord[P]>
      : GetScalarType<T[P], AggregatePayrollRecord[P]>
  }




  export type PayrollRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayrollRecordWhereInput
    orderBy?: PayrollRecordOrderByWithAggregationInput | PayrollRecordOrderByWithAggregationInput[]
    by: PayrollRecordScalarFieldEnum[] | PayrollRecordScalarFieldEnum
    having?: PayrollRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayrollRecordCountAggregateInputType | true
    _avg?: PayrollRecordAvgAggregateInputType
    _sum?: PayrollRecordSumAggregateInputType
    _min?: PayrollRecordMinAggregateInputType
    _max?: PayrollRecordMaxAggregateInputType
  }

  export type PayrollRecordGroupByOutputType = {
    id: string
    userId: string
    periodYear: number
    periodMonth: number
    gross: number
    net: number
    createdAt: Date
    _count: PayrollRecordCountAggregateOutputType | null
    _avg: PayrollRecordAvgAggregateOutputType | null
    _sum: PayrollRecordSumAggregateOutputType | null
    _min: PayrollRecordMinAggregateOutputType | null
    _max: PayrollRecordMaxAggregateOutputType | null
  }

  type GetPayrollRecordGroupByPayload<T extends PayrollRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayrollRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayrollRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayrollRecordGroupByOutputType[P]>
            : GetScalarType<T[P], PayrollRecordGroupByOutputType[P]>
        }
      >
    >


  export type PayrollRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    periodYear?: boolean
    periodMonth?: boolean
    gross?: boolean
    net?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollRecord"]>

  export type PayrollRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    periodYear?: boolean
    periodMonth?: boolean
    gross?: boolean
    net?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollRecord"]>

  export type PayrollRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    periodYear?: boolean
    periodMonth?: boolean
    gross?: boolean
    net?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payrollRecord"]>

  export type PayrollRecordSelectScalar = {
    id?: boolean
    userId?: boolean
    periodYear?: boolean
    periodMonth?: boolean
    gross?: boolean
    net?: boolean
    createdAt?: boolean
  }

  export type PayrollRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "periodYear" | "periodMonth" | "gross" | "net" | "createdAt", ExtArgs["result"]["payrollRecord"]>
  export type PayrollRecordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayrollRecordIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PayrollRecordIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PayrollRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PayrollRecord"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      periodYear: number
      periodMonth: number
      gross: number
      net: number
      createdAt: Date
    }, ExtArgs["result"]["payrollRecord"]>
    composites: {}
  }

  type PayrollRecordGetPayload<S extends boolean | null | undefined | PayrollRecordDefaultArgs> = $Result.GetResult<Prisma.$PayrollRecordPayload, S>

  type PayrollRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayrollRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayrollRecordCountAggregateInputType | true
    }

  export interface PayrollRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PayrollRecord'], meta: { name: 'PayrollRecord' } }
    /**
     * Find zero or one PayrollRecord that matches the filter.
     * @param {PayrollRecordFindUniqueArgs} args - Arguments to find a PayrollRecord
     * @example
     * // Get one PayrollRecord
     * const payrollRecord = await prisma.payrollRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayrollRecordFindUniqueArgs>(args: SelectSubset<T, PayrollRecordFindUniqueArgs<ExtArgs>>): Prisma__PayrollRecordClient<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PayrollRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayrollRecordFindUniqueOrThrowArgs} args - Arguments to find a PayrollRecord
     * @example
     * // Get one PayrollRecord
     * const payrollRecord = await prisma.payrollRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayrollRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, PayrollRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayrollRecordClient<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollRecordFindFirstArgs} args - Arguments to find a PayrollRecord
     * @example
     * // Get one PayrollRecord
     * const payrollRecord = await prisma.payrollRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayrollRecordFindFirstArgs>(args?: SelectSubset<T, PayrollRecordFindFirstArgs<ExtArgs>>): Prisma__PayrollRecordClient<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PayrollRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollRecordFindFirstOrThrowArgs} args - Arguments to find a PayrollRecord
     * @example
     * // Get one PayrollRecord
     * const payrollRecord = await prisma.payrollRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayrollRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, PayrollRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayrollRecordClient<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PayrollRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PayrollRecords
     * const payrollRecords = await prisma.payrollRecord.findMany()
     * 
     * // Get first 10 PayrollRecords
     * const payrollRecords = await prisma.payrollRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payrollRecordWithIdOnly = await prisma.payrollRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayrollRecordFindManyArgs>(args?: SelectSubset<T, PayrollRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PayrollRecord.
     * @param {PayrollRecordCreateArgs} args - Arguments to create a PayrollRecord.
     * @example
     * // Create one PayrollRecord
     * const PayrollRecord = await prisma.payrollRecord.create({
     *   data: {
     *     // ... data to create a PayrollRecord
     *   }
     * })
     * 
     */
    create<T extends PayrollRecordCreateArgs>(args: SelectSubset<T, PayrollRecordCreateArgs<ExtArgs>>): Prisma__PayrollRecordClient<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PayrollRecords.
     * @param {PayrollRecordCreateManyArgs} args - Arguments to create many PayrollRecords.
     * @example
     * // Create many PayrollRecords
     * const payrollRecord = await prisma.payrollRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayrollRecordCreateManyArgs>(args?: SelectSubset<T, PayrollRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PayrollRecords and returns the data saved in the database.
     * @param {PayrollRecordCreateManyAndReturnArgs} args - Arguments to create many PayrollRecords.
     * @example
     * // Create many PayrollRecords
     * const payrollRecord = await prisma.payrollRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PayrollRecords and only return the `id`
     * const payrollRecordWithIdOnly = await prisma.payrollRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PayrollRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, PayrollRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PayrollRecord.
     * @param {PayrollRecordDeleteArgs} args - Arguments to delete one PayrollRecord.
     * @example
     * // Delete one PayrollRecord
     * const PayrollRecord = await prisma.payrollRecord.delete({
     *   where: {
     *     // ... filter to delete one PayrollRecord
     *   }
     * })
     * 
     */
    delete<T extends PayrollRecordDeleteArgs>(args: SelectSubset<T, PayrollRecordDeleteArgs<ExtArgs>>): Prisma__PayrollRecordClient<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PayrollRecord.
     * @param {PayrollRecordUpdateArgs} args - Arguments to update one PayrollRecord.
     * @example
     * // Update one PayrollRecord
     * const payrollRecord = await prisma.payrollRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayrollRecordUpdateArgs>(args: SelectSubset<T, PayrollRecordUpdateArgs<ExtArgs>>): Prisma__PayrollRecordClient<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PayrollRecords.
     * @param {PayrollRecordDeleteManyArgs} args - Arguments to filter PayrollRecords to delete.
     * @example
     * // Delete a few PayrollRecords
     * const { count } = await prisma.payrollRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayrollRecordDeleteManyArgs>(args?: SelectSubset<T, PayrollRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PayrollRecords
     * const payrollRecord = await prisma.payrollRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayrollRecordUpdateManyArgs>(args: SelectSubset<T, PayrollRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PayrollRecords and returns the data updated in the database.
     * @param {PayrollRecordUpdateManyAndReturnArgs} args - Arguments to update many PayrollRecords.
     * @example
     * // Update many PayrollRecords
     * const payrollRecord = await prisma.payrollRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PayrollRecords and only return the `id`
     * const payrollRecordWithIdOnly = await prisma.payrollRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends PayrollRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, PayrollRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PayrollRecord.
     * @param {PayrollRecordUpsertArgs} args - Arguments to update or create a PayrollRecord.
     * @example
     * // Update or create a PayrollRecord
     * const payrollRecord = await prisma.payrollRecord.upsert({
     *   create: {
     *     // ... data to create a PayrollRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PayrollRecord we want to update
     *   }
     * })
     */
    upsert<T extends PayrollRecordUpsertArgs>(args: SelectSubset<T, PayrollRecordUpsertArgs<ExtArgs>>): Prisma__PayrollRecordClient<$Result.GetResult<Prisma.$PayrollRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PayrollRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollRecordCountArgs} args - Arguments to filter PayrollRecords to count.
     * @example
     * // Count the number of PayrollRecords
     * const count = await prisma.payrollRecord.count({
     *   where: {
     *     // ... the filter for the PayrollRecords we want to count
     *   }
     * })
    **/
    count<T extends PayrollRecordCountArgs>(
      args?: Subset<T, PayrollRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayrollRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PayrollRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayrollRecordAggregateArgs>(args: Subset<T, PayrollRecordAggregateArgs>): Prisma.PrismaPromise<GetPayrollRecordAggregateType<T>>

    /**
     * Group by PayrollRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayrollRecordGroupByArgs} args - Group by arguments.
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
      T extends PayrollRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayrollRecordGroupByArgs['orderBy'] }
        : { orderBy?: PayrollRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayrollRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayrollRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PayrollRecord model
   */
  readonly fields: PayrollRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PayrollRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayrollRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the PayrollRecord model
   */
  interface PayrollRecordFieldRefs {
    readonly id: FieldRef<"PayrollRecord", 'String'>
    readonly userId: FieldRef<"PayrollRecord", 'String'>
    readonly periodYear: FieldRef<"PayrollRecord", 'Int'>
    readonly periodMonth: FieldRef<"PayrollRecord", 'Int'>
    readonly gross: FieldRef<"PayrollRecord", 'Float'>
    readonly net: FieldRef<"PayrollRecord", 'Float'>
    readonly createdAt: FieldRef<"PayrollRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PayrollRecord findUnique
   */
  export type PayrollRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
    /**
     * Filter, which PayrollRecord to fetch.
     */
    where: PayrollRecordWhereUniqueInput
  }

  /**
   * PayrollRecord findUniqueOrThrow
   */
  export type PayrollRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
    /**
     * Filter, which PayrollRecord to fetch.
     */
    where: PayrollRecordWhereUniqueInput
  }

  /**
   * PayrollRecord findFirst
   */
  export type PayrollRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
    /**
     * Filter, which PayrollRecord to fetch.
     */
    where?: PayrollRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollRecords to fetch.
     */
    orderBy?: PayrollRecordOrderByWithRelationInput | PayrollRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollRecords.
     */
    cursor?: PayrollRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollRecords.
     */
    distinct?: PayrollRecordScalarFieldEnum | PayrollRecordScalarFieldEnum[]
  }

  /**
   * PayrollRecord findFirstOrThrow
   */
  export type PayrollRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
    /**
     * Filter, which PayrollRecord to fetch.
     */
    where?: PayrollRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollRecords to fetch.
     */
    orderBy?: PayrollRecordOrderByWithRelationInput | PayrollRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PayrollRecords.
     */
    cursor?: PayrollRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PayrollRecords.
     */
    distinct?: PayrollRecordScalarFieldEnum | PayrollRecordScalarFieldEnum[]
  }

  /**
   * PayrollRecord findMany
   */
  export type PayrollRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
    /**
     * Filter, which PayrollRecords to fetch.
     */
    where?: PayrollRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PayrollRecords to fetch.
     */
    orderBy?: PayrollRecordOrderByWithRelationInput | PayrollRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PayrollRecords.
     */
    cursor?: PayrollRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PayrollRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PayrollRecords.
     */
    skip?: number
    distinct?: PayrollRecordScalarFieldEnum | PayrollRecordScalarFieldEnum[]
  }

  /**
   * PayrollRecord create
   */
  export type PayrollRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
    /**
     * The data needed to create a PayrollRecord.
     */
    data: XOR<PayrollRecordCreateInput, PayrollRecordUncheckedCreateInput>
  }

  /**
   * PayrollRecord createMany
   */
  export type PayrollRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PayrollRecords.
     */
    data: PayrollRecordCreateManyInput | PayrollRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PayrollRecord createManyAndReturn
   */
  export type PayrollRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * The data used to create many PayrollRecords.
     */
    data: PayrollRecordCreateManyInput | PayrollRecordCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollRecord update
   */
  export type PayrollRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
    /**
     * The data needed to update a PayrollRecord.
     */
    data: XOR<PayrollRecordUpdateInput, PayrollRecordUncheckedUpdateInput>
    /**
     * Choose, which PayrollRecord to update.
     */
    where: PayrollRecordWhereUniqueInput
  }

  /**
   * PayrollRecord updateMany
   */
  export type PayrollRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PayrollRecords.
     */
    data: XOR<PayrollRecordUpdateManyMutationInput, PayrollRecordUncheckedUpdateManyInput>
    /**
     * Filter which PayrollRecords to update
     */
    where?: PayrollRecordWhereInput
    /**
     * Limit how many PayrollRecords to update.
     */
    limit?: number
  }

  /**
   * PayrollRecord updateManyAndReturn
   */
  export type PayrollRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * The data used to update PayrollRecords.
     */
    data: XOR<PayrollRecordUpdateManyMutationInput, PayrollRecordUncheckedUpdateManyInput>
    /**
     * Filter which PayrollRecords to update
     */
    where?: PayrollRecordWhereInput
    /**
     * Limit how many PayrollRecords to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PayrollRecord upsert
   */
  export type PayrollRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
    /**
     * The filter to search for the PayrollRecord to update in case it exists.
     */
    where: PayrollRecordWhereUniqueInput
    /**
     * In case the PayrollRecord found by the `where` argument doesn't exist, create a new PayrollRecord with this data.
     */
    create: XOR<PayrollRecordCreateInput, PayrollRecordUncheckedCreateInput>
    /**
     * In case the PayrollRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayrollRecordUpdateInput, PayrollRecordUncheckedUpdateInput>
  }

  /**
   * PayrollRecord delete
   */
  export type PayrollRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
    /**
     * Filter which PayrollRecord to delete.
     */
    where: PayrollRecordWhereUniqueInput
  }

  /**
   * PayrollRecord deleteMany
   */
  export type PayrollRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PayrollRecords to delete
     */
    where?: PayrollRecordWhereInput
    /**
     * Limit how many PayrollRecords to delete.
     */
    limit?: number
  }

  /**
   * PayrollRecord without action
   */
  export type PayrollRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PayrollRecord
     */
    select?: PayrollRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PayrollRecord
     */
    omit?: PayrollRecordOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayrollRecordInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    firstName: 'firstName',
    middleName: 'middleName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    marriageStatus: 'marriageStatus',
    photo: 'photo',
    aadharNumber: 'aadharNumber',
    bankAccount: 'bankAccount',
    panNumber: 'panNumber',
    passportNumber: 'passportNumber',
    dlNumber: 'dlNumber',
    addressHNo: 'addressHNo',
    city: 'city',
    state: 'state',
    pincode: 'pincode',
    phoneNumber: 'phoneNumber',
    emergencyContactNumber: 'emergencyContactNumber',
    emergencyContactWhose: 'emergencyContactWhose',
    emergencyContactRelation: 'emergencyContactRelation',
    native: 'native',
    fatherName: 'fatherName',
    fatherOccupation: 'fatherOccupation',
    motherName: 'motherName',
    motherOccupation: 'motherOccupation',
    motherTongue: 'motherTongue',
    qualification: 'qualification',
    experience: 'experience',
    previousDesignation: 'previousDesignation',
    currentDesignation: 'currentDesignation',
    role: 'role',
    status: 'status',
    departmentId: 'departmentId',
    joiningDate: 'joiningDate',
    relievingDate: 'relievingDate'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    level: 'level',
    collegeName: 'collegeName',
    rollNumber: 'rollNumber',
    yearPassout: 'yearPassout',
    marksScored: 'marksScored',
    marksOutOf: 'marksOutOf',
    cgpaScored: 'cgpaScored',
    cgpaOutOf: 'cgpaOutOf',
    currentBacklogs: 'currentBacklogs',
    historyBacklogs: 'historyBacklogs',
    breaksInAcademics: 'breaksInAcademics'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const ResignationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userName: 'userName',
    explanation: 'explanation',
    status: 'status',
    createdAt: 'createdAt',
    approvedById: 'approvedById',
    approvedAt: 'approvedAt'
  };

  export type ResignationScalarFieldEnum = (typeof ResignationScalarFieldEnum)[keyof typeof ResignationScalarFieldEnum]


  export const LeaveRequestScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    userName: 'userName',
    type: 'type',
    startDate: 'startDate',
    endDate: 'endDate',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt',
    approvedById: 'approvedById',
    approvedAt: 'approvedAt',
    rejectedAt: 'rejectedAt'
  };

  export type LeaveRequestScalarFieldEnum = (typeof LeaveRequestScalarFieldEnum)[keyof typeof LeaveRequestScalarFieldEnum]


  export const AttendanceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    checkIn: 'checkIn',
    checkOut: 'checkOut',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type AttendanceScalarFieldEnum = (typeof AttendanceScalarFieldEnum)[keyof typeof AttendanceScalarFieldEnum]


  export const SalaryScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    baseAmount: 'baseAmount',
    effectiveFrom: 'effectiveFrom'
  };

  export type SalaryScalarFieldEnum = (typeof SalaryScalarFieldEnum)[keyof typeof SalaryScalarFieldEnum]


  export const PayrollRecordScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    periodYear: 'periodYear',
    periodMonth: 'periodMonth',
    gross: 'gross',
    net: 'net',
    createdAt: 'createdAt'
  };

  export type PayrollRecordScalarFieldEnum = (typeof PayrollRecordScalarFieldEnum)[keyof typeof PayrollRecordScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    users?: UserListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    name?: StringFilter<"Department"> | string
    users?: UserListRelationFilter
  }, "id">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    marriageStatus?: StringNullableFilter<"User"> | string | null
    photo?: StringNullableFilter<"User"> | string | null
    aadharNumber?: StringNullableFilter<"User"> | string | null
    bankAccount?: StringNullableFilter<"User"> | string | null
    panNumber?: StringNullableFilter<"User"> | string | null
    passportNumber?: StringNullableFilter<"User"> | string | null
    dlNumber?: StringNullableFilter<"User"> | string | null
    addressHNo?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    emergencyContactNumber?: StringNullableFilter<"User"> | string | null
    emergencyContactWhose?: StringNullableFilter<"User"> | string | null
    emergencyContactRelation?: StringNullableFilter<"User"> | string | null
    native?: StringNullableFilter<"User"> | string | null
    fatherName?: StringNullableFilter<"User"> | string | null
    fatherOccupation?: StringNullableFilter<"User"> | string | null
    motherName?: StringNullableFilter<"User"> | string | null
    motherOccupation?: StringNullableFilter<"User"> | string | null
    motherTongue?: StringNullableFilter<"User"> | string | null
    qualification?: StringNullableFilter<"User"> | string | null
    experience?: StringNullableFilter<"User"> | string | null
    previousDesignation?: StringNullableFilter<"User"> | string | null
    currentDesignation?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    departmentId?: StringNullableFilter<"User"> | string | null
    joiningDate?: DateTimeNullableFilter<"User"> | Date | string | null
    relievingDate?: DateTimeNullableFilter<"User"> | Date | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    leaveRequests?: LeaveRequestListRelationFilter
    approvedLeaves?: LeaveRequestListRelationFilter
    attendances?: AttendanceListRelationFilter
    salaries?: SalaryListRelationFilter
    payrolls?: PayrollRecordListRelationFilter
    resignations?: ResignationListRelationFilter
    educations?: EducationListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    marriageStatus?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    aadharNumber?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    panNumber?: SortOrderInput | SortOrder
    passportNumber?: SortOrderInput | SortOrder
    dlNumber?: SortOrderInput | SortOrder
    addressHNo?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    emergencyContactNumber?: SortOrderInput | SortOrder
    emergencyContactWhose?: SortOrderInput | SortOrder
    emergencyContactRelation?: SortOrderInput | SortOrder
    native?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    fatherOccupation?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    motherOccupation?: SortOrderInput | SortOrder
    motherTongue?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    previousDesignation?: SortOrderInput | SortOrder
    currentDesignation?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    joiningDate?: SortOrderInput | SortOrder
    relievingDate?: SortOrderInput | SortOrder
    department?: DepartmentOrderByWithRelationInput
    leaveRequests?: LeaveRequestOrderByRelationAggregateInput
    approvedLeaves?: LeaveRequestOrderByRelationAggregateInput
    attendances?: AttendanceOrderByRelationAggregateInput
    salaries?: SalaryOrderByRelationAggregateInput
    payrolls?: PayrollRecordOrderByRelationAggregateInput
    resignations?: ResignationOrderByRelationAggregateInput
    educations?: EducationOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    marriageStatus?: StringNullableFilter<"User"> | string | null
    photo?: StringNullableFilter<"User"> | string | null
    aadharNumber?: StringNullableFilter<"User"> | string | null
    bankAccount?: StringNullableFilter<"User"> | string | null
    panNumber?: StringNullableFilter<"User"> | string | null
    passportNumber?: StringNullableFilter<"User"> | string | null
    dlNumber?: StringNullableFilter<"User"> | string | null
    addressHNo?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    emergencyContactNumber?: StringNullableFilter<"User"> | string | null
    emergencyContactWhose?: StringNullableFilter<"User"> | string | null
    emergencyContactRelation?: StringNullableFilter<"User"> | string | null
    native?: StringNullableFilter<"User"> | string | null
    fatherName?: StringNullableFilter<"User"> | string | null
    fatherOccupation?: StringNullableFilter<"User"> | string | null
    motherName?: StringNullableFilter<"User"> | string | null
    motherOccupation?: StringNullableFilter<"User"> | string | null
    motherTongue?: StringNullableFilter<"User"> | string | null
    qualification?: StringNullableFilter<"User"> | string | null
    experience?: StringNullableFilter<"User"> | string | null
    previousDesignation?: StringNullableFilter<"User"> | string | null
    currentDesignation?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    departmentId?: StringNullableFilter<"User"> | string | null
    joiningDate?: DateTimeNullableFilter<"User"> | Date | string | null
    relievingDate?: DateTimeNullableFilter<"User"> | Date | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    leaveRequests?: LeaveRequestListRelationFilter
    approvedLeaves?: LeaveRequestListRelationFilter
    attendances?: AttendanceListRelationFilter
    salaries?: SalaryListRelationFilter
    payrolls?: PayrollRecordListRelationFilter
    resignations?: ResignationListRelationFilter
    educations?: EducationListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    middleName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    dateOfBirth?: SortOrderInput | SortOrder
    marriageStatus?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    aadharNumber?: SortOrderInput | SortOrder
    bankAccount?: SortOrderInput | SortOrder
    panNumber?: SortOrderInput | SortOrder
    passportNumber?: SortOrderInput | SortOrder
    dlNumber?: SortOrderInput | SortOrder
    addressHNo?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    pincode?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    emergencyContactNumber?: SortOrderInput | SortOrder
    emergencyContactWhose?: SortOrderInput | SortOrder
    emergencyContactRelation?: SortOrderInput | SortOrder
    native?: SortOrderInput | SortOrder
    fatherName?: SortOrderInput | SortOrder
    fatherOccupation?: SortOrderInput | SortOrder
    motherName?: SortOrderInput | SortOrder
    motherOccupation?: SortOrderInput | SortOrder
    motherTongue?: SortOrderInput | SortOrder
    qualification?: SortOrderInput | SortOrder
    experience?: SortOrderInput | SortOrder
    previousDesignation?: SortOrderInput | SortOrder
    currentDesignation?: SortOrderInput | SortOrder
    role?: SortOrder
    status?: SortOrder
    departmentId?: SortOrderInput | SortOrder
    joiningDate?: SortOrderInput | SortOrder
    relievingDate?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    middleName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    marriageStatus?: StringNullableWithAggregatesFilter<"User"> | string | null
    photo?: StringNullableWithAggregatesFilter<"User"> | string | null
    aadharNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    bankAccount?: StringNullableWithAggregatesFilter<"User"> | string | null
    panNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    passportNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    dlNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    addressHNo?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    state?: StringNullableWithAggregatesFilter<"User"> | string | null
    pincode?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    emergencyContactNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    emergencyContactWhose?: StringNullableWithAggregatesFilter<"User"> | string | null
    emergencyContactRelation?: StringNullableWithAggregatesFilter<"User"> | string | null
    native?: StringNullableWithAggregatesFilter<"User"> | string | null
    fatherName?: StringNullableWithAggregatesFilter<"User"> | string | null
    fatherOccupation?: StringNullableWithAggregatesFilter<"User"> | string | null
    motherName?: StringNullableWithAggregatesFilter<"User"> | string | null
    motherOccupation?: StringNullableWithAggregatesFilter<"User"> | string | null
    motherTongue?: StringNullableWithAggregatesFilter<"User"> | string | null
    qualification?: StringNullableWithAggregatesFilter<"User"> | string | null
    experience?: StringNullableWithAggregatesFilter<"User"> | string | null
    previousDesignation?: StringNullableWithAggregatesFilter<"User"> | string | null
    currentDesignation?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    departmentId?: StringNullableWithAggregatesFilter<"User"> | string | null
    joiningDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    relievingDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    userId?: StringFilter<"Education"> | string
    level?: StringFilter<"Education"> | string
    collegeName?: StringNullableFilter<"Education"> | string | null
    rollNumber?: StringNullableFilter<"Education"> | string | null
    yearPassout?: StringNullableFilter<"Education"> | string | null
    marksScored?: StringNullableFilter<"Education"> | string | null
    marksOutOf?: StringNullableFilter<"Education"> | string | null
    cgpaScored?: StringNullableFilter<"Education"> | string | null
    cgpaOutOf?: StringNullableFilter<"Education"> | string | null
    currentBacklogs?: StringNullableFilter<"Education"> | string | null
    historyBacklogs?: StringNullableFilter<"Education"> | string | null
    breaksInAcademics?: StringNullableFilter<"Education"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    collegeName?: SortOrderInput | SortOrder
    rollNumber?: SortOrderInput | SortOrder
    yearPassout?: SortOrderInput | SortOrder
    marksScored?: SortOrderInput | SortOrder
    marksOutOf?: SortOrderInput | SortOrder
    cgpaScored?: SortOrderInput | SortOrder
    cgpaOutOf?: SortOrderInput | SortOrder
    currentBacklogs?: SortOrderInput | SortOrder
    historyBacklogs?: SortOrderInput | SortOrder
    breaksInAcademics?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    userId?: StringFilter<"Education"> | string
    level?: StringFilter<"Education"> | string
    collegeName?: StringNullableFilter<"Education"> | string | null
    rollNumber?: StringNullableFilter<"Education"> | string | null
    yearPassout?: StringNullableFilter<"Education"> | string | null
    marksScored?: StringNullableFilter<"Education"> | string | null
    marksOutOf?: StringNullableFilter<"Education"> | string | null
    cgpaScored?: StringNullableFilter<"Education"> | string | null
    cgpaOutOf?: StringNullableFilter<"Education"> | string | null
    currentBacklogs?: StringNullableFilter<"Education"> | string | null
    historyBacklogs?: StringNullableFilter<"Education"> | string | null
    breaksInAcademics?: StringNullableFilter<"Education"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    collegeName?: SortOrderInput | SortOrder
    rollNumber?: SortOrderInput | SortOrder
    yearPassout?: SortOrderInput | SortOrder
    marksScored?: SortOrderInput | SortOrder
    marksOutOf?: SortOrderInput | SortOrder
    cgpaScored?: SortOrderInput | SortOrder
    cgpaOutOf?: SortOrderInput | SortOrder
    currentBacklogs?: SortOrderInput | SortOrder
    historyBacklogs?: SortOrderInput | SortOrder
    breaksInAcademics?: SortOrderInput | SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    userId?: StringWithAggregatesFilter<"Education"> | string
    level?: StringWithAggregatesFilter<"Education"> | string
    collegeName?: StringNullableWithAggregatesFilter<"Education"> | string | null
    rollNumber?: StringNullableWithAggregatesFilter<"Education"> | string | null
    yearPassout?: StringNullableWithAggregatesFilter<"Education"> | string | null
    marksScored?: StringNullableWithAggregatesFilter<"Education"> | string | null
    marksOutOf?: StringNullableWithAggregatesFilter<"Education"> | string | null
    cgpaScored?: StringNullableWithAggregatesFilter<"Education"> | string | null
    cgpaOutOf?: StringNullableWithAggregatesFilter<"Education"> | string | null
    currentBacklogs?: StringNullableWithAggregatesFilter<"Education"> | string | null
    historyBacklogs?: StringNullableWithAggregatesFilter<"Education"> | string | null
    breaksInAcademics?: StringNullableWithAggregatesFilter<"Education"> | string | null
  }

  export type ResignationWhereInput = {
    AND?: ResignationWhereInput | ResignationWhereInput[]
    OR?: ResignationWhereInput[]
    NOT?: ResignationWhereInput | ResignationWhereInput[]
    id?: StringFilter<"Resignation"> | string
    userId?: StringFilter<"Resignation"> | string
    userName?: StringFilter<"Resignation"> | string
    explanation?: StringFilter<"Resignation"> | string
    status?: StringFilter<"Resignation"> | string
    createdAt?: DateTimeFilter<"Resignation"> | Date | string
    approvedById?: StringNullableFilter<"Resignation"> | string | null
    approvedAt?: DateTimeNullableFilter<"Resignation"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResignationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    explanation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ResignationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResignationWhereInput | ResignationWhereInput[]
    OR?: ResignationWhereInput[]
    NOT?: ResignationWhereInput | ResignationWhereInput[]
    userId?: StringFilter<"Resignation"> | string
    userName?: StringFilter<"Resignation"> | string
    explanation?: StringFilter<"Resignation"> | string
    status?: StringFilter<"Resignation"> | string
    createdAt?: DateTimeFilter<"Resignation"> | Date | string
    approvedById?: StringNullableFilter<"Resignation"> | string | null
    approvedAt?: DateTimeNullableFilter<"Resignation"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ResignationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    explanation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    _count?: ResignationCountOrderByAggregateInput
    _max?: ResignationMaxOrderByAggregateInput
    _min?: ResignationMinOrderByAggregateInput
  }

  export type ResignationScalarWhereWithAggregatesInput = {
    AND?: ResignationScalarWhereWithAggregatesInput | ResignationScalarWhereWithAggregatesInput[]
    OR?: ResignationScalarWhereWithAggregatesInput[]
    NOT?: ResignationScalarWhereWithAggregatesInput | ResignationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Resignation"> | string
    userId?: StringWithAggregatesFilter<"Resignation"> | string
    userName?: StringWithAggregatesFilter<"Resignation"> | string
    explanation?: StringWithAggregatesFilter<"Resignation"> | string
    status?: StringWithAggregatesFilter<"Resignation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Resignation"> | Date | string
    approvedById?: StringNullableWithAggregatesFilter<"Resignation"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"Resignation"> | Date | string | null
  }

  export type LeaveRequestWhereInput = {
    AND?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    OR?: LeaveRequestWhereInput[]
    NOT?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    id?: StringFilter<"LeaveRequest"> | string
    userId?: StringFilter<"LeaveRequest"> | string
    userName?: StringFilter<"LeaveRequest"> | string
    type?: StringFilter<"LeaveRequest"> | string
    startDate?: StringFilter<"LeaveRequest"> | string
    endDate?: StringFilter<"LeaveRequest"> | string
    reason?: StringFilter<"LeaveRequest"> | string
    status?: StringFilter<"LeaveRequest"> | string
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    approvedById?: StringNullableFilter<"LeaveRequest"> | string | null
    approvedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    rejectedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LeaveRequestOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    approvedBy?: UserOrderByWithRelationInput
  }

  export type LeaveRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    OR?: LeaveRequestWhereInput[]
    NOT?: LeaveRequestWhereInput | LeaveRequestWhereInput[]
    userId?: StringFilter<"LeaveRequest"> | string
    userName?: StringFilter<"LeaveRequest"> | string
    type?: StringFilter<"LeaveRequest"> | string
    startDate?: StringFilter<"LeaveRequest"> | string
    endDate?: StringFilter<"LeaveRequest"> | string
    reason?: StringFilter<"LeaveRequest"> | string
    status?: StringFilter<"LeaveRequest"> | string
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    approvedById?: StringNullableFilter<"LeaveRequest"> | string | null
    approvedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    rejectedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    approvedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type LeaveRequestOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    approvedAt?: SortOrderInput | SortOrder
    rejectedAt?: SortOrderInput | SortOrder
    _count?: LeaveRequestCountOrderByAggregateInput
    _max?: LeaveRequestMaxOrderByAggregateInput
    _min?: LeaveRequestMinOrderByAggregateInput
  }

  export type LeaveRequestScalarWhereWithAggregatesInput = {
    AND?: LeaveRequestScalarWhereWithAggregatesInput | LeaveRequestScalarWhereWithAggregatesInput[]
    OR?: LeaveRequestScalarWhereWithAggregatesInput[]
    NOT?: LeaveRequestScalarWhereWithAggregatesInput | LeaveRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaveRequest"> | string
    userId?: StringWithAggregatesFilter<"LeaveRequest"> | string
    userName?: StringWithAggregatesFilter<"LeaveRequest"> | string
    type?: StringWithAggregatesFilter<"LeaveRequest"> | string
    startDate?: StringWithAggregatesFilter<"LeaveRequest"> | string
    endDate?: StringWithAggregatesFilter<"LeaveRequest"> | string
    reason?: StringWithAggregatesFilter<"LeaveRequest"> | string
    status?: StringWithAggregatesFilter<"LeaveRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeaveRequest"> | Date | string
    approvedById?: StringNullableWithAggregatesFilter<"LeaveRequest"> | string | null
    approvedAt?: DateTimeNullableWithAggregatesFilter<"LeaveRequest"> | Date | string | null
    rejectedAt?: DateTimeNullableWithAggregatesFilter<"LeaveRequest"> | Date | string | null
  }

  export type AttendanceWhereInput = {
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    id?: StringFilter<"Attendance"> | string
    userId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AttendanceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrderInput | SortOrder
    checkOut?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AttendanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AttendanceWhereInput | AttendanceWhereInput[]
    OR?: AttendanceWhereInput[]
    NOT?: AttendanceWhereInput | AttendanceWhereInput[]
    userId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AttendanceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrderInput | SortOrder
    checkOut?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: AttendanceCountOrderByAggregateInput
    _max?: AttendanceMaxOrderByAggregateInput
    _min?: AttendanceMinOrderByAggregateInput
  }

  export type AttendanceScalarWhereWithAggregatesInput = {
    AND?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    OR?: AttendanceScalarWhereWithAggregatesInput[]
    NOT?: AttendanceScalarWhereWithAggregatesInput | AttendanceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Attendance"> | string
    userId?: StringWithAggregatesFilter<"Attendance"> | string
    date?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
    checkIn?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    checkOut?: DateTimeNullableWithAggregatesFilter<"Attendance"> | Date | string | null
    status?: StringWithAggregatesFilter<"Attendance"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Attendance"> | Date | string
  }

  export type SalaryWhereInput = {
    AND?: SalaryWhereInput | SalaryWhereInput[]
    OR?: SalaryWhereInput[]
    NOT?: SalaryWhereInput | SalaryWhereInput[]
    id?: StringFilter<"Salary"> | string
    userId?: StringFilter<"Salary"> | string
    baseAmount?: FloatFilter<"Salary"> | number
    effectiveFrom?: DateTimeFilter<"Salary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SalaryOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    baseAmount?: SortOrder
    effectiveFrom?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SalaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalaryWhereInput | SalaryWhereInput[]
    OR?: SalaryWhereInput[]
    NOT?: SalaryWhereInput | SalaryWhereInput[]
    userId?: StringFilter<"Salary"> | string
    baseAmount?: FloatFilter<"Salary"> | number
    effectiveFrom?: DateTimeFilter<"Salary"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SalaryOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    baseAmount?: SortOrder
    effectiveFrom?: SortOrder
    _count?: SalaryCountOrderByAggregateInput
    _avg?: SalaryAvgOrderByAggregateInput
    _max?: SalaryMaxOrderByAggregateInput
    _min?: SalaryMinOrderByAggregateInput
    _sum?: SalarySumOrderByAggregateInput
  }

  export type SalaryScalarWhereWithAggregatesInput = {
    AND?: SalaryScalarWhereWithAggregatesInput | SalaryScalarWhereWithAggregatesInput[]
    OR?: SalaryScalarWhereWithAggregatesInput[]
    NOT?: SalaryScalarWhereWithAggregatesInput | SalaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Salary"> | string
    userId?: StringWithAggregatesFilter<"Salary"> | string
    baseAmount?: FloatWithAggregatesFilter<"Salary"> | number
    effectiveFrom?: DateTimeWithAggregatesFilter<"Salary"> | Date | string
  }

  export type PayrollRecordWhereInput = {
    AND?: PayrollRecordWhereInput | PayrollRecordWhereInput[]
    OR?: PayrollRecordWhereInput[]
    NOT?: PayrollRecordWhereInput | PayrollRecordWhereInput[]
    id?: StringFilter<"PayrollRecord"> | string
    userId?: StringFilter<"PayrollRecord"> | string
    periodYear?: IntFilter<"PayrollRecord"> | number
    periodMonth?: IntFilter<"PayrollRecord"> | number
    gross?: FloatFilter<"PayrollRecord"> | number
    net?: FloatFilter<"PayrollRecord"> | number
    createdAt?: DateTimeFilter<"PayrollRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PayrollRecordOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    periodYear?: SortOrder
    periodMonth?: SortOrder
    gross?: SortOrder
    net?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PayrollRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayrollRecordWhereInput | PayrollRecordWhereInput[]
    OR?: PayrollRecordWhereInput[]
    NOT?: PayrollRecordWhereInput | PayrollRecordWhereInput[]
    userId?: StringFilter<"PayrollRecord"> | string
    periodYear?: IntFilter<"PayrollRecord"> | number
    periodMonth?: IntFilter<"PayrollRecord"> | number
    gross?: FloatFilter<"PayrollRecord"> | number
    net?: FloatFilter<"PayrollRecord"> | number
    createdAt?: DateTimeFilter<"PayrollRecord"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PayrollRecordOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    periodYear?: SortOrder
    periodMonth?: SortOrder
    gross?: SortOrder
    net?: SortOrder
    createdAt?: SortOrder
    _count?: PayrollRecordCountOrderByAggregateInput
    _avg?: PayrollRecordAvgOrderByAggregateInput
    _max?: PayrollRecordMaxOrderByAggregateInput
    _min?: PayrollRecordMinOrderByAggregateInput
    _sum?: PayrollRecordSumOrderByAggregateInput
  }

  export type PayrollRecordScalarWhereWithAggregatesInput = {
    AND?: PayrollRecordScalarWhereWithAggregatesInput | PayrollRecordScalarWhereWithAggregatesInput[]
    OR?: PayrollRecordScalarWhereWithAggregatesInput[]
    NOT?: PayrollRecordScalarWhereWithAggregatesInput | PayrollRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PayrollRecord"> | string
    userId?: StringWithAggregatesFilter<"PayrollRecord"> | string
    periodYear?: IntWithAggregatesFilter<"PayrollRecord"> | number
    periodMonth?: IntWithAggregatesFilter<"PayrollRecord"> | number
    gross?: FloatWithAggregatesFilter<"PayrollRecord"> | number
    net?: FloatWithAggregatesFilter<"PayrollRecord"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PayrollRecord"> | Date | string
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    salaries?: SalaryCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordCreateNestedManyWithoutUserInput
    resignations?: ResignationCreateNestedManyWithoutUserInput
    educations?: EducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    departmentId?: string | null
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    salaries?: SalaryUncheckedCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordUncheckedCreateNestedManyWithoutUserInput
    resignations?: ResignationUncheckedCreateNestedManyWithoutUserInput
    educations?: EducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    salaries?: SalaryUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUpdateManyWithoutUserNestedInput
    resignations?: ResignationUpdateManyWithoutUserNestedInput
    educations?: EducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    salaries?: SalaryUncheckedUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUncheckedUpdateManyWithoutUserNestedInput
    resignations?: ResignationUncheckedUpdateManyWithoutUserNestedInput
    educations?: EducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    departmentId?: string | null
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EducationCreateInput = {
    id?: string
    level: string
    collegeName?: string | null
    rollNumber?: string | null
    yearPassout?: string | null
    marksScored?: string | null
    marksOutOf?: string | null
    cgpaScored?: string | null
    cgpaOutOf?: string | null
    currentBacklogs?: string | null
    historyBacklogs?: string | null
    breaksInAcademics?: string | null
    user: UserCreateNestedOneWithoutEducationsInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    userId: string
    level: string
    collegeName?: string | null
    rollNumber?: string | null
    yearPassout?: string | null
    marksScored?: string | null
    marksOutOf?: string | null
    cgpaScored?: string | null
    cgpaOutOf?: string | null
    currentBacklogs?: string | null
    historyBacklogs?: string | null
    breaksInAcademics?: string | null
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    yearPassout?: NullableStringFieldUpdateOperationsInput | string | null
    marksScored?: NullableStringFieldUpdateOperationsInput | string | null
    marksOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaScored?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    currentBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    historyBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    breaksInAcademics?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutEducationsNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    yearPassout?: NullableStringFieldUpdateOperationsInput | string | null
    marksScored?: NullableStringFieldUpdateOperationsInput | string | null
    marksOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaScored?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    currentBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    historyBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    breaksInAcademics?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationCreateManyInput = {
    id?: string
    userId: string
    level: string
    collegeName?: string | null
    rollNumber?: string | null
    yearPassout?: string | null
    marksScored?: string | null
    marksOutOf?: string | null
    cgpaScored?: string | null
    cgpaOutOf?: string | null
    currentBacklogs?: string | null
    historyBacklogs?: string | null
    breaksInAcademics?: string | null
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    yearPassout?: NullableStringFieldUpdateOperationsInput | string | null
    marksScored?: NullableStringFieldUpdateOperationsInput | string | null
    marksOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaScored?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    currentBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    historyBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    breaksInAcademics?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    yearPassout?: NullableStringFieldUpdateOperationsInput | string | null
    marksScored?: NullableStringFieldUpdateOperationsInput | string | null
    marksOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaScored?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    currentBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    historyBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    breaksInAcademics?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ResignationCreateInput = {
    id?: string
    userName: string
    explanation: string
    status?: string
    createdAt?: Date | string
    approvedById?: string | null
    approvedAt?: Date | string | null
    user: UserCreateNestedOneWithoutResignationsInput
  }

  export type ResignationUncheckedCreateInput = {
    id?: string
    userId: string
    userName: string
    explanation: string
    status?: string
    createdAt?: Date | string
    approvedById?: string | null
    approvedAt?: Date | string | null
  }

  export type ResignationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutResignationsNestedInput
  }

  export type ResignationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResignationCreateManyInput = {
    id?: string
    userId: string
    userName: string
    explanation: string
    status?: string
    createdAt?: Date | string
    approvedById?: string | null
    approvedAt?: Date | string | null
  }

  export type ResignationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResignationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaveRequestCreateInput = {
    id?: string
    userName: string
    type: string
    startDate: string
    endDate: string
    reason?: string
    status?: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    rejectedAt?: Date | string | null
    user: UserCreateNestedOneWithoutLeaveRequestsInput
    approvedBy?: UserCreateNestedOneWithoutApprovedLeavesInput
  }

  export type LeaveRequestUncheckedCreateInput = {
    id?: string
    userId: string
    userName: string
    type: string
    startDate: string
    endDate: string
    reason?: string
    status?: string
    createdAt?: Date | string
    approvedById?: string | null
    approvedAt?: Date | string | null
    rejectedAt?: Date | string | null
  }

  export type LeaveRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutLeaveRequestsNestedInput
    approvedBy?: UserUpdateOneWithoutApprovedLeavesNestedInput
  }

  export type LeaveRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaveRequestCreateManyInput = {
    id?: string
    userId: string
    userName: string
    type: string
    startDate: string
    endDate: string
    reason?: string
    status?: string
    createdAt?: Date | string
    approvedById?: string | null
    approvedAt?: Date | string | null
    rejectedAt?: Date | string | null
  }

  export type LeaveRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaveRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceCreateInput = {
    id?: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAttendancesInput
  }

  export type AttendanceUncheckedCreateInput = {
    id?: string
    userId: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: string
    createdAt?: Date | string
  }

  export type AttendanceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAttendancesNestedInput
  }

  export type AttendanceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceCreateManyInput = {
    id?: string
    userId: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: string
    createdAt?: Date | string
  }

  export type AttendanceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryCreateInput = {
    id?: string
    baseAmount: number
    effectiveFrom: Date | string
    user: UserCreateNestedOneWithoutSalariesInput
  }

  export type SalaryUncheckedCreateInput = {
    id?: string
    userId: string
    baseAmount: number
    effectiveFrom: Date | string
  }

  export type SalaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseAmount?: FloatFieldUpdateOperationsInput | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSalariesNestedInput
  }

  export type SalaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    baseAmount?: FloatFieldUpdateOperationsInput | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryCreateManyInput = {
    id?: string
    userId: string
    baseAmount: number
    effectiveFrom: Date | string
  }

  export type SalaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseAmount?: FloatFieldUpdateOperationsInput | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    baseAmount?: FloatFieldUpdateOperationsInput | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollRecordCreateInput = {
    id?: string
    periodYear: number
    periodMonth: number
    gross: number
    net: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutPayrollsInput
  }

  export type PayrollRecordUncheckedCreateInput = {
    id?: string
    userId: string
    periodYear: number
    periodMonth: number
    gross: number
    net: number
    createdAt?: Date | string
  }

  export type PayrollRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodYear?: IntFieldUpdateOperationsInput | number
    periodMonth?: IntFieldUpdateOperationsInput | number
    gross?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPayrollsNestedInput
  }

  export type PayrollRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodYear?: IntFieldUpdateOperationsInput | number
    periodMonth?: IntFieldUpdateOperationsInput | number
    gross?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollRecordCreateManyInput = {
    id?: string
    userId: string
    periodYear: number
    periodMonth: number
    gross: number
    net: number
    createdAt?: Date | string
  }

  export type PayrollRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodYear?: IntFieldUpdateOperationsInput | number
    periodMonth?: IntFieldUpdateOperationsInput | number
    gross?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    periodYear?: IntFieldUpdateOperationsInput | number
    periodMonth?: IntFieldUpdateOperationsInput | number
    gross?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type LeaveRequestListRelationFilter = {
    every?: LeaveRequestWhereInput
    some?: LeaveRequestWhereInput
    none?: LeaveRequestWhereInput
  }

  export type AttendanceListRelationFilter = {
    every?: AttendanceWhereInput
    some?: AttendanceWhereInput
    none?: AttendanceWhereInput
  }

  export type SalaryListRelationFilter = {
    every?: SalaryWhereInput
    some?: SalaryWhereInput
    none?: SalaryWhereInput
  }

  export type PayrollRecordListRelationFilter = {
    every?: PayrollRecordWhereInput
    some?: PayrollRecordWhereInput
    none?: PayrollRecordWhereInput
  }

  export type ResignationListRelationFilter = {
    every?: ResignationWhereInput
    some?: ResignationWhereInput
    none?: ResignationWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeaveRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AttendanceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SalaryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayrollRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResignationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    marriageStatus?: SortOrder
    photo?: SortOrder
    aadharNumber?: SortOrder
    bankAccount?: SortOrder
    panNumber?: SortOrder
    passportNumber?: SortOrder
    dlNumber?: SortOrder
    addressHNo?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    phoneNumber?: SortOrder
    emergencyContactNumber?: SortOrder
    emergencyContactWhose?: SortOrder
    emergencyContactRelation?: SortOrder
    native?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrder
    motherTongue?: SortOrder
    qualification?: SortOrder
    experience?: SortOrder
    previousDesignation?: SortOrder
    currentDesignation?: SortOrder
    role?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    joiningDate?: SortOrder
    relievingDate?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    marriageStatus?: SortOrder
    photo?: SortOrder
    aadharNumber?: SortOrder
    bankAccount?: SortOrder
    panNumber?: SortOrder
    passportNumber?: SortOrder
    dlNumber?: SortOrder
    addressHNo?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    phoneNumber?: SortOrder
    emergencyContactNumber?: SortOrder
    emergencyContactWhose?: SortOrder
    emergencyContactRelation?: SortOrder
    native?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrder
    motherTongue?: SortOrder
    qualification?: SortOrder
    experience?: SortOrder
    previousDesignation?: SortOrder
    currentDesignation?: SortOrder
    role?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    joiningDate?: SortOrder
    relievingDate?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    middleName?: SortOrder
    lastName?: SortOrder
    dateOfBirth?: SortOrder
    marriageStatus?: SortOrder
    photo?: SortOrder
    aadharNumber?: SortOrder
    bankAccount?: SortOrder
    panNumber?: SortOrder
    passportNumber?: SortOrder
    dlNumber?: SortOrder
    addressHNo?: SortOrder
    city?: SortOrder
    state?: SortOrder
    pincode?: SortOrder
    phoneNumber?: SortOrder
    emergencyContactNumber?: SortOrder
    emergencyContactWhose?: SortOrder
    emergencyContactRelation?: SortOrder
    native?: SortOrder
    fatherName?: SortOrder
    fatherOccupation?: SortOrder
    motherName?: SortOrder
    motherOccupation?: SortOrder
    motherTongue?: SortOrder
    qualification?: SortOrder
    experience?: SortOrder
    previousDesignation?: SortOrder
    currentDesignation?: SortOrder
    role?: SortOrder
    status?: SortOrder
    departmentId?: SortOrder
    joiningDate?: SortOrder
    relievingDate?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    collegeName?: SortOrder
    rollNumber?: SortOrder
    yearPassout?: SortOrder
    marksScored?: SortOrder
    marksOutOf?: SortOrder
    cgpaScored?: SortOrder
    cgpaOutOf?: SortOrder
    currentBacklogs?: SortOrder
    historyBacklogs?: SortOrder
    breaksInAcademics?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    collegeName?: SortOrder
    rollNumber?: SortOrder
    yearPassout?: SortOrder
    marksScored?: SortOrder
    marksOutOf?: SortOrder
    cgpaScored?: SortOrder
    cgpaOutOf?: SortOrder
    currentBacklogs?: SortOrder
    historyBacklogs?: SortOrder
    breaksInAcademics?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    level?: SortOrder
    collegeName?: SortOrder
    rollNumber?: SortOrder
    yearPassout?: SortOrder
    marksScored?: SortOrder
    marksOutOf?: SortOrder
    cgpaScored?: SortOrder
    cgpaOutOf?: SortOrder
    currentBacklogs?: SortOrder
    historyBacklogs?: SortOrder
    breaksInAcademics?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ResignationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    explanation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
  }

  export type ResignationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    explanation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
  }

  export type ResignationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    explanation?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LeaveRequestCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    rejectedAt?: SortOrder
  }

  export type LeaveRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    rejectedAt?: SortOrder
  }

  export type LeaveRequestMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    userName?: SortOrder
    type?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    approvedById?: SortOrder
    approvedAt?: SortOrder
    rejectedAt?: SortOrder
  }

  export type AttendanceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type AttendanceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    checkIn?: SortOrder
    checkOut?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type SalaryCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    baseAmount?: SortOrder
    effectiveFrom?: SortOrder
  }

  export type SalaryAvgOrderByAggregateInput = {
    baseAmount?: SortOrder
  }

  export type SalaryMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    baseAmount?: SortOrder
    effectiveFrom?: SortOrder
  }

  export type SalaryMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    baseAmount?: SortOrder
    effectiveFrom?: SortOrder
  }

  export type SalarySumOrderByAggregateInput = {
    baseAmount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PayrollRecordCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    periodYear?: SortOrder
    periodMonth?: SortOrder
    gross?: SortOrder
    net?: SortOrder
    createdAt?: SortOrder
  }

  export type PayrollRecordAvgOrderByAggregateInput = {
    periodYear?: SortOrder
    periodMonth?: SortOrder
    gross?: SortOrder
    net?: SortOrder
  }

  export type PayrollRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    periodYear?: SortOrder
    periodMonth?: SortOrder
    gross?: SortOrder
    net?: SortOrder
    createdAt?: SortOrder
  }

  export type PayrollRecordMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    periodYear?: SortOrder
    periodMonth?: SortOrder
    gross?: SortOrder
    net?: SortOrder
    createdAt?: SortOrder
  }

  export type PayrollRecordSumOrderByAggregateInput = {
    periodYear?: SortOrder
    periodMonth?: SortOrder
    gross?: SortOrder
    net?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type LeaveRequestCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveRequestCreateWithoutUserInput, LeaveRequestUncheckedCreateWithoutUserInput> | LeaveRequestCreateWithoutUserInput[] | LeaveRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutUserInput | LeaveRequestCreateOrConnectWithoutUserInput[]
    createMany?: LeaveRequestCreateManyUserInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type LeaveRequestCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput> | LeaveRequestCreateWithoutApprovedByInput[] | LeaveRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApprovedByInput | LeaveRequestCreateOrConnectWithoutApprovedByInput[]
    createMany?: LeaveRequestCreateManyApprovedByInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type AttendanceCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type SalaryCreateNestedManyWithoutUserInput = {
    create?: XOR<SalaryCreateWithoutUserInput, SalaryUncheckedCreateWithoutUserInput> | SalaryCreateWithoutUserInput[] | SalaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaryCreateOrConnectWithoutUserInput | SalaryCreateOrConnectWithoutUserInput[]
    createMany?: SalaryCreateManyUserInputEnvelope
    connect?: SalaryWhereUniqueInput | SalaryWhereUniqueInput[]
  }

  export type PayrollRecordCreateNestedManyWithoutUserInput = {
    create?: XOR<PayrollRecordCreateWithoutUserInput, PayrollRecordUncheckedCreateWithoutUserInput> | PayrollRecordCreateWithoutUserInput[] | PayrollRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayrollRecordCreateOrConnectWithoutUserInput | PayrollRecordCreateOrConnectWithoutUserInput[]
    createMany?: PayrollRecordCreateManyUserInputEnvelope
    connect?: PayrollRecordWhereUniqueInput | PayrollRecordWhereUniqueInput[]
  }

  export type ResignationCreateNestedManyWithoutUserInput = {
    create?: XOR<ResignationCreateWithoutUserInput, ResignationUncheckedCreateWithoutUserInput> | ResignationCreateWithoutUserInput[] | ResignationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResignationCreateOrConnectWithoutUserInput | ResignationCreateOrConnectWithoutUserInput[]
    createMany?: ResignationCreateManyUserInputEnvelope
    connect?: ResignationWhereUniqueInput | ResignationWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutUserInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type LeaveRequestUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveRequestCreateWithoutUserInput, LeaveRequestUncheckedCreateWithoutUserInput> | LeaveRequestCreateWithoutUserInput[] | LeaveRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutUserInput | LeaveRequestCreateOrConnectWithoutUserInput[]
    createMany?: LeaveRequestCreateManyUserInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput = {
    create?: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput> | LeaveRequestCreateWithoutApprovedByInput[] | LeaveRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApprovedByInput | LeaveRequestCreateOrConnectWithoutApprovedByInput[]
    createMany?: LeaveRequestCreateManyApprovedByInputEnvelope
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
  }

  export type AttendanceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
  }

  export type SalaryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SalaryCreateWithoutUserInput, SalaryUncheckedCreateWithoutUserInput> | SalaryCreateWithoutUserInput[] | SalaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaryCreateOrConnectWithoutUserInput | SalaryCreateOrConnectWithoutUserInput[]
    createMany?: SalaryCreateManyUserInputEnvelope
    connect?: SalaryWhereUniqueInput | SalaryWhereUniqueInput[]
  }

  export type PayrollRecordUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PayrollRecordCreateWithoutUserInput, PayrollRecordUncheckedCreateWithoutUserInput> | PayrollRecordCreateWithoutUserInput[] | PayrollRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayrollRecordCreateOrConnectWithoutUserInput | PayrollRecordCreateOrConnectWithoutUserInput[]
    createMany?: PayrollRecordCreateManyUserInputEnvelope
    connect?: PayrollRecordWhereUniqueInput | PayrollRecordWhereUniqueInput[]
  }

  export type ResignationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ResignationCreateWithoutUserInput, ResignationUncheckedCreateWithoutUserInput> | ResignationCreateWithoutUserInput[] | ResignationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResignationCreateOrConnectWithoutUserInput | ResignationCreateOrConnectWithoutUserInput[]
    createMany?: ResignationCreateManyUserInputEnvelope
    connect?: ResignationWhereUniqueInput | ResignationWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DepartmentUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type LeaveRequestUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutUserInput, LeaveRequestUncheckedCreateWithoutUserInput> | LeaveRequestCreateWithoutUserInput[] | LeaveRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutUserInput | LeaveRequestCreateOrConnectWithoutUserInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutUserInput | LeaveRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveRequestCreateManyUserInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutUserInput | LeaveRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutUserInput | LeaveRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type LeaveRequestUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput> | LeaveRequestCreateWithoutApprovedByInput[] | LeaveRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApprovedByInput | LeaveRequestCreateOrConnectWithoutApprovedByInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput | LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: LeaveRequestCreateManyApprovedByInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput | LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutApprovedByInput | LeaveRequestUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type AttendanceUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type SalaryUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalaryCreateWithoutUserInput, SalaryUncheckedCreateWithoutUserInput> | SalaryCreateWithoutUserInput[] | SalaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaryCreateOrConnectWithoutUserInput | SalaryCreateOrConnectWithoutUserInput[]
    upsert?: SalaryUpsertWithWhereUniqueWithoutUserInput | SalaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalaryCreateManyUserInputEnvelope
    set?: SalaryWhereUniqueInput | SalaryWhereUniqueInput[]
    disconnect?: SalaryWhereUniqueInput | SalaryWhereUniqueInput[]
    delete?: SalaryWhereUniqueInput | SalaryWhereUniqueInput[]
    connect?: SalaryWhereUniqueInput | SalaryWhereUniqueInput[]
    update?: SalaryUpdateWithWhereUniqueWithoutUserInput | SalaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalaryUpdateManyWithWhereWithoutUserInput | SalaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalaryScalarWhereInput | SalaryScalarWhereInput[]
  }

  export type PayrollRecordUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayrollRecordCreateWithoutUserInput, PayrollRecordUncheckedCreateWithoutUserInput> | PayrollRecordCreateWithoutUserInput[] | PayrollRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayrollRecordCreateOrConnectWithoutUserInput | PayrollRecordCreateOrConnectWithoutUserInput[]
    upsert?: PayrollRecordUpsertWithWhereUniqueWithoutUserInput | PayrollRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayrollRecordCreateManyUserInputEnvelope
    set?: PayrollRecordWhereUniqueInput | PayrollRecordWhereUniqueInput[]
    disconnect?: PayrollRecordWhereUniqueInput | PayrollRecordWhereUniqueInput[]
    delete?: PayrollRecordWhereUniqueInput | PayrollRecordWhereUniqueInput[]
    connect?: PayrollRecordWhereUniqueInput | PayrollRecordWhereUniqueInput[]
    update?: PayrollRecordUpdateWithWhereUniqueWithoutUserInput | PayrollRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayrollRecordUpdateManyWithWhereWithoutUserInput | PayrollRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayrollRecordScalarWhereInput | PayrollRecordScalarWhereInput[]
  }

  export type ResignationUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResignationCreateWithoutUserInput, ResignationUncheckedCreateWithoutUserInput> | ResignationCreateWithoutUserInput[] | ResignationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResignationCreateOrConnectWithoutUserInput | ResignationCreateOrConnectWithoutUserInput[]
    upsert?: ResignationUpsertWithWhereUniqueWithoutUserInput | ResignationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResignationCreateManyUserInputEnvelope
    set?: ResignationWhereUniqueInput | ResignationWhereUniqueInput[]
    disconnect?: ResignationWhereUniqueInput | ResignationWhereUniqueInput[]
    delete?: ResignationWhereUniqueInput | ResignationWhereUniqueInput[]
    connect?: ResignationWhereUniqueInput | ResignationWhereUniqueInput[]
    update?: ResignationUpdateWithWhereUniqueWithoutUserInput | ResignationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResignationUpdateManyWithWhereWithoutUserInput | ResignationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResignationScalarWhereInput | ResignationScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutUserNestedInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserInput | EducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserInput | EducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserInput | EducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type LeaveRequestUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutUserInput, LeaveRequestUncheckedCreateWithoutUserInput> | LeaveRequestCreateWithoutUserInput[] | LeaveRequestUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutUserInput | LeaveRequestCreateOrConnectWithoutUserInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutUserInput | LeaveRequestUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveRequestCreateManyUserInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutUserInput | LeaveRequestUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutUserInput | LeaveRequestUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput = {
    create?: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput> | LeaveRequestCreateWithoutApprovedByInput[] | LeaveRequestUncheckedCreateWithoutApprovedByInput[]
    connectOrCreate?: LeaveRequestCreateOrConnectWithoutApprovedByInput | LeaveRequestCreateOrConnectWithoutApprovedByInput[]
    upsert?: LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput | LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput[]
    createMany?: LeaveRequestCreateManyApprovedByInputEnvelope
    set?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    disconnect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    delete?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    connect?: LeaveRequestWhereUniqueInput | LeaveRequestWhereUniqueInput[]
    update?: LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput | LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput[]
    updateMany?: LeaveRequestUpdateManyWithWhereWithoutApprovedByInput | LeaveRequestUpdateManyWithWhereWithoutApprovedByInput[]
    deleteMany?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
  }

  export type AttendanceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput> | AttendanceCreateWithoutUserInput[] | AttendanceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AttendanceCreateOrConnectWithoutUserInput | AttendanceCreateOrConnectWithoutUserInput[]
    upsert?: AttendanceUpsertWithWhereUniqueWithoutUserInput | AttendanceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AttendanceCreateManyUserInputEnvelope
    set?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    disconnect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    delete?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    connect?: AttendanceWhereUniqueInput | AttendanceWhereUniqueInput[]
    update?: AttendanceUpdateWithWhereUniqueWithoutUserInput | AttendanceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AttendanceUpdateManyWithWhereWithoutUserInput | AttendanceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
  }

  export type SalaryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SalaryCreateWithoutUserInput, SalaryUncheckedCreateWithoutUserInput> | SalaryCreateWithoutUserInput[] | SalaryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SalaryCreateOrConnectWithoutUserInput | SalaryCreateOrConnectWithoutUserInput[]
    upsert?: SalaryUpsertWithWhereUniqueWithoutUserInput | SalaryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SalaryCreateManyUserInputEnvelope
    set?: SalaryWhereUniqueInput | SalaryWhereUniqueInput[]
    disconnect?: SalaryWhereUniqueInput | SalaryWhereUniqueInput[]
    delete?: SalaryWhereUniqueInput | SalaryWhereUniqueInput[]
    connect?: SalaryWhereUniqueInput | SalaryWhereUniqueInput[]
    update?: SalaryUpdateWithWhereUniqueWithoutUserInput | SalaryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SalaryUpdateManyWithWhereWithoutUserInput | SalaryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SalaryScalarWhereInput | SalaryScalarWhereInput[]
  }

  export type PayrollRecordUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PayrollRecordCreateWithoutUserInput, PayrollRecordUncheckedCreateWithoutUserInput> | PayrollRecordCreateWithoutUserInput[] | PayrollRecordUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PayrollRecordCreateOrConnectWithoutUserInput | PayrollRecordCreateOrConnectWithoutUserInput[]
    upsert?: PayrollRecordUpsertWithWhereUniqueWithoutUserInput | PayrollRecordUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PayrollRecordCreateManyUserInputEnvelope
    set?: PayrollRecordWhereUniqueInput | PayrollRecordWhereUniqueInput[]
    disconnect?: PayrollRecordWhereUniqueInput | PayrollRecordWhereUniqueInput[]
    delete?: PayrollRecordWhereUniqueInput | PayrollRecordWhereUniqueInput[]
    connect?: PayrollRecordWhereUniqueInput | PayrollRecordWhereUniqueInput[]
    update?: PayrollRecordUpdateWithWhereUniqueWithoutUserInput | PayrollRecordUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PayrollRecordUpdateManyWithWhereWithoutUserInput | PayrollRecordUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PayrollRecordScalarWhereInput | PayrollRecordScalarWhereInput[]
  }

  export type ResignationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ResignationCreateWithoutUserInput, ResignationUncheckedCreateWithoutUserInput> | ResignationCreateWithoutUserInput[] | ResignationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ResignationCreateOrConnectWithoutUserInput | ResignationCreateOrConnectWithoutUserInput[]
    upsert?: ResignationUpsertWithWhereUniqueWithoutUserInput | ResignationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ResignationCreateManyUserInputEnvelope
    set?: ResignationWhereUniqueInput | ResignationWhereUniqueInput[]
    disconnect?: ResignationWhereUniqueInput | ResignationWhereUniqueInput[]
    delete?: ResignationWhereUniqueInput | ResignationWhereUniqueInput[]
    connect?: ResignationWhereUniqueInput | ResignationWhereUniqueInput[]
    update?: ResignationUpdateWithWhereUniqueWithoutUserInput | ResignationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ResignationUpdateManyWithWhereWithoutUserInput | ResignationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ResignationScalarWhereInput | ResignationScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput> | EducationCreateWithoutUserInput[] | EducationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutUserInput | EducationCreateOrConnectWithoutUserInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutUserInput | EducationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EducationCreateManyUserInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutUserInput | EducationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutUserInput | EducationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEducationsInput = {
    create?: XOR<UserCreateWithoutEducationsInput, UserUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEducationsNestedInput = {
    create?: XOR<UserCreateWithoutEducationsInput, UserUncheckedCreateWithoutEducationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEducationsInput
    upsert?: UserUpsertWithoutEducationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEducationsInput, UserUpdateWithoutEducationsInput>, UserUncheckedUpdateWithoutEducationsInput>
  }

  export type UserCreateNestedOneWithoutResignationsInput = {
    create?: XOR<UserCreateWithoutResignationsInput, UserUncheckedCreateWithoutResignationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResignationsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutResignationsNestedInput = {
    create?: XOR<UserCreateWithoutResignationsInput, UserUncheckedCreateWithoutResignationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResignationsInput
    upsert?: UserUpsertWithoutResignationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResignationsInput, UserUpdateWithoutResignationsInput>, UserUncheckedUpdateWithoutResignationsInput>
  }

  export type UserCreateNestedOneWithoutLeaveRequestsInput = {
    create?: XOR<UserCreateWithoutLeaveRequestsInput, UserUncheckedCreateWithoutLeaveRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutApprovedLeavesInput = {
    create?: XOR<UserCreateWithoutApprovedLeavesInput, UserUncheckedCreateWithoutApprovedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedLeavesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLeaveRequestsNestedInput = {
    create?: XOR<UserCreateWithoutLeaveRequestsInput, UserUncheckedCreateWithoutLeaveRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveRequestsInput
    upsert?: UserUpsertWithoutLeaveRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaveRequestsInput, UserUpdateWithoutLeaveRequestsInput>, UserUncheckedUpdateWithoutLeaveRequestsInput>
  }

  export type UserUpdateOneWithoutApprovedLeavesNestedInput = {
    create?: XOR<UserCreateWithoutApprovedLeavesInput, UserUncheckedCreateWithoutApprovedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedLeavesInput
    upsert?: UserUpsertWithoutApprovedLeavesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedLeavesInput, UserUpdateWithoutApprovedLeavesInput>, UserUncheckedUpdateWithoutApprovedLeavesInput>
  }

  export type UserCreateNestedOneWithoutAttendancesInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAttendancesNestedInput = {
    create?: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAttendancesInput
    upsert?: UserUpsertWithoutAttendancesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAttendancesInput, UserUpdateWithoutAttendancesInput>, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserCreateNestedOneWithoutSalariesInput = {
    create?: XOR<UserCreateWithoutSalariesInput, UserUncheckedCreateWithoutSalariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalariesInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSalariesNestedInput = {
    create?: XOR<UserCreateWithoutSalariesInput, UserUncheckedCreateWithoutSalariesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalariesInput
    upsert?: UserUpsertWithoutSalariesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalariesInput, UserUpdateWithoutSalariesInput>, UserUncheckedUpdateWithoutSalariesInput>
  }

  export type UserCreateNestedOneWithoutPayrollsInput = {
    create?: XOR<UserCreateWithoutPayrollsInput, UserUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayrollsInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutPayrollsNestedInput = {
    create?: XOR<UserCreateWithoutPayrollsInput, UserUncheckedCreateWithoutPayrollsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPayrollsInput
    upsert?: UserUpsertWithoutPayrollsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPayrollsInput, UserUpdateWithoutPayrollsInput>, UserUncheckedUpdateWithoutPayrollsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type UserCreateWithoutDepartmentInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    leaveRequests?: LeaveRequestCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    salaries?: SalaryCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordCreateNestedManyWithoutUserInput
    resignations?: ResignationCreateNestedManyWithoutUserInput
    educations?: EducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    salaries?: SalaryUncheckedCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordUncheckedCreateNestedManyWithoutUserInput
    resignations?: ResignationUncheckedCreateNestedManyWithoutUserInput
    educations?: EducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    middleName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    dateOfBirth?: DateTimeNullableFilter<"User"> | Date | string | null
    marriageStatus?: StringNullableFilter<"User"> | string | null
    photo?: StringNullableFilter<"User"> | string | null
    aadharNumber?: StringNullableFilter<"User"> | string | null
    bankAccount?: StringNullableFilter<"User"> | string | null
    panNumber?: StringNullableFilter<"User"> | string | null
    passportNumber?: StringNullableFilter<"User"> | string | null
    dlNumber?: StringNullableFilter<"User"> | string | null
    addressHNo?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    state?: StringNullableFilter<"User"> | string | null
    pincode?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    emergencyContactNumber?: StringNullableFilter<"User"> | string | null
    emergencyContactWhose?: StringNullableFilter<"User"> | string | null
    emergencyContactRelation?: StringNullableFilter<"User"> | string | null
    native?: StringNullableFilter<"User"> | string | null
    fatherName?: StringNullableFilter<"User"> | string | null
    fatherOccupation?: StringNullableFilter<"User"> | string | null
    motherName?: StringNullableFilter<"User"> | string | null
    motherOccupation?: StringNullableFilter<"User"> | string | null
    motherTongue?: StringNullableFilter<"User"> | string | null
    qualification?: StringNullableFilter<"User"> | string | null
    experience?: StringNullableFilter<"User"> | string | null
    previousDesignation?: StringNullableFilter<"User"> | string | null
    currentDesignation?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    departmentId?: StringNullableFilter<"User"> | string | null
    joiningDate?: DateTimeNullableFilter<"User"> | Date | string | null
    relievingDate?: DateTimeNullableFilter<"User"> | Date | string | null
  }

  export type DepartmentCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type LeaveRequestCreateWithoutUserInput = {
    id?: string
    userName: string
    type: string
    startDate: string
    endDate: string
    reason?: string
    status?: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    rejectedAt?: Date | string | null
    approvedBy?: UserCreateNestedOneWithoutApprovedLeavesInput
  }

  export type LeaveRequestUncheckedCreateWithoutUserInput = {
    id?: string
    userName: string
    type: string
    startDate: string
    endDate: string
    reason?: string
    status?: string
    createdAt?: Date | string
    approvedById?: string | null
    approvedAt?: Date | string | null
    rejectedAt?: Date | string | null
  }

  export type LeaveRequestCreateOrConnectWithoutUserInput = {
    where: LeaveRequestWhereUniqueInput
    create: XOR<LeaveRequestCreateWithoutUserInput, LeaveRequestUncheckedCreateWithoutUserInput>
  }

  export type LeaveRequestCreateManyUserInputEnvelope = {
    data: LeaveRequestCreateManyUserInput | LeaveRequestCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaveRequestCreateWithoutApprovedByInput = {
    id?: string
    userName: string
    type: string
    startDate: string
    endDate: string
    reason?: string
    status?: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    rejectedAt?: Date | string | null
    user: UserCreateNestedOneWithoutLeaveRequestsInput
  }

  export type LeaveRequestUncheckedCreateWithoutApprovedByInput = {
    id?: string
    userId: string
    userName: string
    type: string
    startDate: string
    endDate: string
    reason?: string
    status?: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    rejectedAt?: Date | string | null
  }

  export type LeaveRequestCreateOrConnectWithoutApprovedByInput = {
    where: LeaveRequestWhereUniqueInput
    create: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput>
  }

  export type LeaveRequestCreateManyApprovedByInputEnvelope = {
    data: LeaveRequestCreateManyApprovedByInput | LeaveRequestCreateManyApprovedByInput[]
    skipDuplicates?: boolean
  }

  export type AttendanceCreateWithoutUserInput = {
    id?: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: string
    createdAt?: Date | string
  }

  export type AttendanceUncheckedCreateWithoutUserInput = {
    id?: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: string
    createdAt?: Date | string
  }

  export type AttendanceCreateOrConnectWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceCreateManyUserInputEnvelope = {
    data: AttendanceCreateManyUserInput | AttendanceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SalaryCreateWithoutUserInput = {
    id?: string
    baseAmount: number
    effectiveFrom: Date | string
  }

  export type SalaryUncheckedCreateWithoutUserInput = {
    id?: string
    baseAmount: number
    effectiveFrom: Date | string
  }

  export type SalaryCreateOrConnectWithoutUserInput = {
    where: SalaryWhereUniqueInput
    create: XOR<SalaryCreateWithoutUserInput, SalaryUncheckedCreateWithoutUserInput>
  }

  export type SalaryCreateManyUserInputEnvelope = {
    data: SalaryCreateManyUserInput | SalaryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PayrollRecordCreateWithoutUserInput = {
    id?: string
    periodYear: number
    periodMonth: number
    gross: number
    net: number
    createdAt?: Date | string
  }

  export type PayrollRecordUncheckedCreateWithoutUserInput = {
    id?: string
    periodYear: number
    periodMonth: number
    gross: number
    net: number
    createdAt?: Date | string
  }

  export type PayrollRecordCreateOrConnectWithoutUserInput = {
    where: PayrollRecordWhereUniqueInput
    create: XOR<PayrollRecordCreateWithoutUserInput, PayrollRecordUncheckedCreateWithoutUserInput>
  }

  export type PayrollRecordCreateManyUserInputEnvelope = {
    data: PayrollRecordCreateManyUserInput | PayrollRecordCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ResignationCreateWithoutUserInput = {
    id?: string
    userName: string
    explanation: string
    status?: string
    createdAt?: Date | string
    approvedById?: string | null
    approvedAt?: Date | string | null
  }

  export type ResignationUncheckedCreateWithoutUserInput = {
    id?: string
    userName: string
    explanation: string
    status?: string
    createdAt?: Date | string
    approvedById?: string | null
    approvedAt?: Date | string | null
  }

  export type ResignationCreateOrConnectWithoutUserInput = {
    where: ResignationWhereUniqueInput
    create: XOR<ResignationCreateWithoutUserInput, ResignationUncheckedCreateWithoutUserInput>
  }

  export type ResignationCreateManyUserInputEnvelope = {
    data: ResignationCreateManyUserInput | ResignationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EducationCreateWithoutUserInput = {
    id?: string
    level: string
    collegeName?: string | null
    rollNumber?: string | null
    yearPassout?: string | null
    marksScored?: string | null
    marksOutOf?: string | null
    cgpaScored?: string | null
    cgpaOutOf?: string | null
    currentBacklogs?: string | null
    historyBacklogs?: string | null
    breaksInAcademics?: string | null
  }

  export type EducationUncheckedCreateWithoutUserInput = {
    id?: string
    level: string
    collegeName?: string | null
    rollNumber?: string | null
    yearPassout?: string | null
    marksScored?: string | null
    marksOutOf?: string | null
    cgpaScored?: string | null
    cgpaOutOf?: string | null
    currentBacklogs?: string | null
    historyBacklogs?: string | null
    breaksInAcademics?: string | null
  }

  export type EducationCreateOrConnectWithoutUserInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationCreateManyUserInputEnvelope = {
    data: EducationCreateManyUserInput | EducationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveRequestUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaveRequestWhereUniqueInput
    update: XOR<LeaveRequestUpdateWithoutUserInput, LeaveRequestUncheckedUpdateWithoutUserInput>
    create: XOR<LeaveRequestCreateWithoutUserInput, LeaveRequestUncheckedCreateWithoutUserInput>
  }

  export type LeaveRequestUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaveRequestWhereUniqueInput
    data: XOR<LeaveRequestUpdateWithoutUserInput, LeaveRequestUncheckedUpdateWithoutUserInput>
  }

  export type LeaveRequestUpdateManyWithWhereWithoutUserInput = {
    where: LeaveRequestScalarWhereInput
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaveRequestScalarWhereInput = {
    AND?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
    OR?: LeaveRequestScalarWhereInput[]
    NOT?: LeaveRequestScalarWhereInput | LeaveRequestScalarWhereInput[]
    id?: StringFilter<"LeaveRequest"> | string
    userId?: StringFilter<"LeaveRequest"> | string
    userName?: StringFilter<"LeaveRequest"> | string
    type?: StringFilter<"LeaveRequest"> | string
    startDate?: StringFilter<"LeaveRequest"> | string
    endDate?: StringFilter<"LeaveRequest"> | string
    reason?: StringFilter<"LeaveRequest"> | string
    status?: StringFilter<"LeaveRequest"> | string
    createdAt?: DateTimeFilter<"LeaveRequest"> | Date | string
    approvedById?: StringNullableFilter<"LeaveRequest"> | string | null
    approvedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
    rejectedAt?: DateTimeNullableFilter<"LeaveRequest"> | Date | string | null
  }

  export type LeaveRequestUpsertWithWhereUniqueWithoutApprovedByInput = {
    where: LeaveRequestWhereUniqueInput
    update: XOR<LeaveRequestUpdateWithoutApprovedByInput, LeaveRequestUncheckedUpdateWithoutApprovedByInput>
    create: XOR<LeaveRequestCreateWithoutApprovedByInput, LeaveRequestUncheckedCreateWithoutApprovedByInput>
  }

  export type LeaveRequestUpdateWithWhereUniqueWithoutApprovedByInput = {
    where: LeaveRequestWhereUniqueInput
    data: XOR<LeaveRequestUpdateWithoutApprovedByInput, LeaveRequestUncheckedUpdateWithoutApprovedByInput>
  }

  export type LeaveRequestUpdateManyWithWhereWithoutApprovedByInput = {
    where: LeaveRequestScalarWhereInput
    data: XOR<LeaveRequestUpdateManyMutationInput, LeaveRequestUncheckedUpdateManyWithoutApprovedByInput>
  }

  export type AttendanceUpsertWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    update: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
    create: XOR<AttendanceCreateWithoutUserInput, AttendanceUncheckedCreateWithoutUserInput>
  }

  export type AttendanceUpdateWithWhereUniqueWithoutUserInput = {
    where: AttendanceWhereUniqueInput
    data: XOR<AttendanceUpdateWithoutUserInput, AttendanceUncheckedUpdateWithoutUserInput>
  }

  export type AttendanceUpdateManyWithWhereWithoutUserInput = {
    where: AttendanceScalarWhereInput
    data: XOR<AttendanceUpdateManyMutationInput, AttendanceUncheckedUpdateManyWithoutUserInput>
  }

  export type AttendanceScalarWhereInput = {
    AND?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    OR?: AttendanceScalarWhereInput[]
    NOT?: AttendanceScalarWhereInput | AttendanceScalarWhereInput[]
    id?: StringFilter<"Attendance"> | string
    userId?: StringFilter<"Attendance"> | string
    date?: DateTimeFilter<"Attendance"> | Date | string
    checkIn?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    checkOut?: DateTimeNullableFilter<"Attendance"> | Date | string | null
    status?: StringFilter<"Attendance"> | string
    createdAt?: DateTimeFilter<"Attendance"> | Date | string
  }

  export type SalaryUpsertWithWhereUniqueWithoutUserInput = {
    where: SalaryWhereUniqueInput
    update: XOR<SalaryUpdateWithoutUserInput, SalaryUncheckedUpdateWithoutUserInput>
    create: XOR<SalaryCreateWithoutUserInput, SalaryUncheckedCreateWithoutUserInput>
  }

  export type SalaryUpdateWithWhereUniqueWithoutUserInput = {
    where: SalaryWhereUniqueInput
    data: XOR<SalaryUpdateWithoutUserInput, SalaryUncheckedUpdateWithoutUserInput>
  }

  export type SalaryUpdateManyWithWhereWithoutUserInput = {
    where: SalaryScalarWhereInput
    data: XOR<SalaryUpdateManyMutationInput, SalaryUncheckedUpdateManyWithoutUserInput>
  }

  export type SalaryScalarWhereInput = {
    AND?: SalaryScalarWhereInput | SalaryScalarWhereInput[]
    OR?: SalaryScalarWhereInput[]
    NOT?: SalaryScalarWhereInput | SalaryScalarWhereInput[]
    id?: StringFilter<"Salary"> | string
    userId?: StringFilter<"Salary"> | string
    baseAmount?: FloatFilter<"Salary"> | number
    effectiveFrom?: DateTimeFilter<"Salary"> | Date | string
  }

  export type PayrollRecordUpsertWithWhereUniqueWithoutUserInput = {
    where: PayrollRecordWhereUniqueInput
    update: XOR<PayrollRecordUpdateWithoutUserInput, PayrollRecordUncheckedUpdateWithoutUserInput>
    create: XOR<PayrollRecordCreateWithoutUserInput, PayrollRecordUncheckedCreateWithoutUserInput>
  }

  export type PayrollRecordUpdateWithWhereUniqueWithoutUserInput = {
    where: PayrollRecordWhereUniqueInput
    data: XOR<PayrollRecordUpdateWithoutUserInput, PayrollRecordUncheckedUpdateWithoutUserInput>
  }

  export type PayrollRecordUpdateManyWithWhereWithoutUserInput = {
    where: PayrollRecordScalarWhereInput
    data: XOR<PayrollRecordUpdateManyMutationInput, PayrollRecordUncheckedUpdateManyWithoutUserInput>
  }

  export type PayrollRecordScalarWhereInput = {
    AND?: PayrollRecordScalarWhereInput | PayrollRecordScalarWhereInput[]
    OR?: PayrollRecordScalarWhereInput[]
    NOT?: PayrollRecordScalarWhereInput | PayrollRecordScalarWhereInput[]
    id?: StringFilter<"PayrollRecord"> | string
    userId?: StringFilter<"PayrollRecord"> | string
    periodYear?: IntFilter<"PayrollRecord"> | number
    periodMonth?: IntFilter<"PayrollRecord"> | number
    gross?: FloatFilter<"PayrollRecord"> | number
    net?: FloatFilter<"PayrollRecord"> | number
    createdAt?: DateTimeFilter<"PayrollRecord"> | Date | string
  }

  export type ResignationUpsertWithWhereUniqueWithoutUserInput = {
    where: ResignationWhereUniqueInput
    update: XOR<ResignationUpdateWithoutUserInput, ResignationUncheckedUpdateWithoutUserInput>
    create: XOR<ResignationCreateWithoutUserInput, ResignationUncheckedCreateWithoutUserInput>
  }

  export type ResignationUpdateWithWhereUniqueWithoutUserInput = {
    where: ResignationWhereUniqueInput
    data: XOR<ResignationUpdateWithoutUserInput, ResignationUncheckedUpdateWithoutUserInput>
  }

  export type ResignationUpdateManyWithWhereWithoutUserInput = {
    where: ResignationScalarWhereInput
    data: XOR<ResignationUpdateManyMutationInput, ResignationUncheckedUpdateManyWithoutUserInput>
  }

  export type ResignationScalarWhereInput = {
    AND?: ResignationScalarWhereInput | ResignationScalarWhereInput[]
    OR?: ResignationScalarWhereInput[]
    NOT?: ResignationScalarWhereInput | ResignationScalarWhereInput[]
    id?: StringFilter<"Resignation"> | string
    userId?: StringFilter<"Resignation"> | string
    userName?: StringFilter<"Resignation"> | string
    explanation?: StringFilter<"Resignation"> | string
    status?: StringFilter<"Resignation"> | string
    createdAt?: DateTimeFilter<"Resignation"> | Date | string
    approvedById?: StringNullableFilter<"Resignation"> | string | null
    approvedAt?: DateTimeNullableFilter<"Resignation"> | Date | string | null
  }

  export type EducationUpsertWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
    create: XOR<EducationCreateWithoutUserInput, EducationUncheckedCreateWithoutUserInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutUserInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutUserInput, EducationUncheckedUpdateWithoutUserInput>
  }

  export type EducationUpdateManyWithWhereWithoutUserInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutUserInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    userId?: StringFilter<"Education"> | string
    level?: StringFilter<"Education"> | string
    collegeName?: StringNullableFilter<"Education"> | string | null
    rollNumber?: StringNullableFilter<"Education"> | string | null
    yearPassout?: StringNullableFilter<"Education"> | string | null
    marksScored?: StringNullableFilter<"Education"> | string | null
    marksOutOf?: StringNullableFilter<"Education"> | string | null
    cgpaScored?: StringNullableFilter<"Education"> | string | null
    cgpaOutOf?: StringNullableFilter<"Education"> | string | null
    currentBacklogs?: StringNullableFilter<"Education"> | string | null
    historyBacklogs?: StringNullableFilter<"Education"> | string | null
    breaksInAcademics?: StringNullableFilter<"Education"> | string | null
  }

  export type UserCreateWithoutEducationsInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    salaries?: SalaryCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordCreateNestedManyWithoutUserInput
    resignations?: ResignationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutEducationsInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    departmentId?: string | null
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    salaries?: SalaryUncheckedCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordUncheckedCreateNestedManyWithoutUserInput
    resignations?: ResignationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutEducationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEducationsInput, UserUncheckedCreateWithoutEducationsInput>
  }

  export type UserUpsertWithoutEducationsInput = {
    update: XOR<UserUpdateWithoutEducationsInput, UserUncheckedUpdateWithoutEducationsInput>
    create: XOR<UserCreateWithoutEducationsInput, UserUncheckedCreateWithoutEducationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEducationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEducationsInput, UserUncheckedUpdateWithoutEducationsInput>
  }

  export type UserUpdateWithoutEducationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    salaries?: SalaryUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUpdateManyWithoutUserNestedInput
    resignations?: ResignationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutEducationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    salaries?: SalaryUncheckedUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUncheckedUpdateManyWithoutUserNestedInput
    resignations?: ResignationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutResignationsInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    salaries?: SalaryCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordCreateNestedManyWithoutUserInput
    educations?: EducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutResignationsInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    departmentId?: string | null
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    salaries?: SalaryUncheckedCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordUncheckedCreateNestedManyWithoutUserInput
    educations?: EducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutResignationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResignationsInput, UserUncheckedCreateWithoutResignationsInput>
  }

  export type UserUpsertWithoutResignationsInput = {
    update: XOR<UserUpdateWithoutResignationsInput, UserUncheckedUpdateWithoutResignationsInput>
    create: XOR<UserCreateWithoutResignationsInput, UserUncheckedCreateWithoutResignationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResignationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResignationsInput, UserUncheckedUpdateWithoutResignationsInput>
  }

  export type UserUpdateWithoutResignationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    salaries?: SalaryUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUpdateManyWithoutUserNestedInput
    educations?: EducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutResignationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    salaries?: SalaryUncheckedUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUncheckedUpdateManyWithoutUserNestedInput
    educations?: EducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutLeaveRequestsInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    salaries?: SalaryCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordCreateNestedManyWithoutUserInput
    resignations?: ResignationCreateNestedManyWithoutUserInput
    educations?: EducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLeaveRequestsInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    departmentId?: string | null
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    salaries?: SalaryUncheckedCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordUncheckedCreateNestedManyWithoutUserInput
    resignations?: ResignationUncheckedCreateNestedManyWithoutUserInput
    educations?: EducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLeaveRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaveRequestsInput, UserUncheckedCreateWithoutLeaveRequestsInput>
  }

  export type UserCreateWithoutApprovedLeavesInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutUserInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    salaries?: SalaryCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordCreateNestedManyWithoutUserInput
    resignations?: ResignationCreateNestedManyWithoutUserInput
    educations?: EducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutApprovedLeavesInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    departmentId?: string | null
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutUserInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    salaries?: SalaryUncheckedCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordUncheckedCreateNestedManyWithoutUserInput
    resignations?: ResignationUncheckedCreateNestedManyWithoutUserInput
    educations?: EducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutApprovedLeavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedLeavesInput, UserUncheckedCreateWithoutApprovedLeavesInput>
  }

  export type UserUpsertWithoutLeaveRequestsInput = {
    update: XOR<UserUpdateWithoutLeaveRequestsInput, UserUncheckedUpdateWithoutLeaveRequestsInput>
    create: XOR<UserCreateWithoutLeaveRequestsInput, UserUncheckedCreateWithoutLeaveRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaveRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaveRequestsInput, UserUncheckedUpdateWithoutLeaveRequestsInput>
  }

  export type UserUpdateWithoutLeaveRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    salaries?: SalaryUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUpdateManyWithoutUserNestedInput
    resignations?: ResignationUpdateManyWithoutUserNestedInput
    educations?: EducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaveRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    salaries?: SalaryUncheckedUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUncheckedUpdateManyWithoutUserNestedInput
    resignations?: ResignationUncheckedUpdateManyWithoutUserNestedInput
    educations?: EducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUpsertWithoutApprovedLeavesInput = {
    update: XOR<UserUpdateWithoutApprovedLeavesInput, UserUncheckedUpdateWithoutApprovedLeavesInput>
    create: XOR<UserCreateWithoutApprovedLeavesInput, UserUncheckedCreateWithoutApprovedLeavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedLeavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedLeavesInput, UserUncheckedUpdateWithoutApprovedLeavesInput>
  }

  export type UserUpdateWithoutApprovedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    salaries?: SalaryUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUpdateManyWithoutUserNestedInput
    resignations?: ResignationUpdateManyWithoutUserNestedInput
    educations?: EducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutUserNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    salaries?: SalaryUncheckedUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUncheckedUpdateManyWithoutUserNestedInput
    resignations?: ResignationUncheckedUpdateManyWithoutUserNestedInput
    educations?: EducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAttendancesInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    salaries?: SalaryCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordCreateNestedManyWithoutUserInput
    resignations?: ResignationCreateNestedManyWithoutUserInput
    educations?: EducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAttendancesInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    departmentId?: string | null
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    salaries?: SalaryUncheckedCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordUncheckedCreateNestedManyWithoutUserInput
    resignations?: ResignationUncheckedCreateNestedManyWithoutUserInput
    educations?: EducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAttendancesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
  }

  export type UserUpsertWithoutAttendancesInput = {
    update: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
    create: XOR<UserCreateWithoutAttendancesInput, UserUncheckedCreateWithoutAttendancesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAttendancesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAttendancesInput, UserUncheckedUpdateWithoutAttendancesInput>
  }

  export type UserUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    salaries?: SalaryUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUpdateManyWithoutUserNestedInput
    resignations?: ResignationUpdateManyWithoutUserNestedInput
    educations?: EducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAttendancesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    salaries?: SalaryUncheckedUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUncheckedUpdateManyWithoutUserNestedInput
    resignations?: ResignationUncheckedUpdateManyWithoutUserNestedInput
    educations?: EducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSalariesInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordCreateNestedManyWithoutUserInput
    resignations?: ResignationCreateNestedManyWithoutUserInput
    educations?: EducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSalariesInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    departmentId?: string | null
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    payrolls?: PayrollRecordUncheckedCreateNestedManyWithoutUserInput
    resignations?: ResignationUncheckedCreateNestedManyWithoutUserInput
    educations?: EducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSalariesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalariesInput, UserUncheckedCreateWithoutSalariesInput>
  }

  export type UserUpsertWithoutSalariesInput = {
    update: XOR<UserUpdateWithoutSalariesInput, UserUncheckedUpdateWithoutSalariesInput>
    create: XOR<UserCreateWithoutSalariesInput, UserUncheckedCreateWithoutSalariesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalariesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalariesInput, UserUncheckedUpdateWithoutSalariesInput>
  }

  export type UserUpdateWithoutSalariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUpdateManyWithoutUserNestedInput
    resignations?: ResignationUpdateManyWithoutUserNestedInput
    educations?: EducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSalariesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUncheckedUpdateManyWithoutUserNestedInput
    resignations?: ResignationUncheckedUpdateManyWithoutUserNestedInput
    educations?: EducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPayrollsInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    leaveRequests?: LeaveRequestCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceCreateNestedManyWithoutUserInput
    salaries?: SalaryCreateNestedManyWithoutUserInput
    resignations?: ResignationCreateNestedManyWithoutUserInput
    educations?: EducationCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPayrollsInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    departmentId?: string | null
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
    leaveRequests?: LeaveRequestUncheckedCreateNestedManyWithoutUserInput
    approvedLeaves?: LeaveRequestUncheckedCreateNestedManyWithoutApprovedByInput
    attendances?: AttendanceUncheckedCreateNestedManyWithoutUserInput
    salaries?: SalaryUncheckedCreateNestedManyWithoutUserInput
    resignations?: ResignationUncheckedCreateNestedManyWithoutUserInput
    educations?: EducationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPayrollsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPayrollsInput, UserUncheckedCreateWithoutPayrollsInput>
  }

  export type UserUpsertWithoutPayrollsInput = {
    update: XOR<UserUpdateWithoutPayrollsInput, UserUncheckedUpdateWithoutPayrollsInput>
    create: XOR<UserCreateWithoutPayrollsInput, UserUncheckedCreateWithoutPayrollsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPayrollsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPayrollsInput, UserUncheckedUpdateWithoutPayrollsInput>
  }

  export type UserUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    leaveRequests?: LeaveRequestUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    salaries?: SalaryUpdateManyWithoutUserNestedInput
    resignations?: ResignationUpdateManyWithoutUserNestedInput
    educations?: EducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPayrollsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    salaries?: SalaryUncheckedUpdateManyWithoutUserNestedInput
    resignations?: ResignationUncheckedUpdateManyWithoutUserNestedInput
    educations?: EducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyDepartmentInput = {
    id?: string
    email: string
    name: string
    password: string
    firstName?: string | null
    middleName?: string | null
    lastName?: string | null
    dateOfBirth?: Date | string | null
    marriageStatus?: string | null
    photo?: string | null
    aadharNumber?: string | null
    bankAccount?: string | null
    panNumber?: string | null
    passportNumber?: string | null
    dlNumber?: string | null
    addressHNo?: string | null
    city?: string | null
    state?: string | null
    pincode?: string | null
    phoneNumber?: string | null
    emergencyContactNumber?: string | null
    emergencyContactWhose?: string | null
    emergencyContactRelation?: string | null
    native?: string | null
    fatherName?: string | null
    fatherOccupation?: string | null
    motherName?: string | null
    motherOccupation?: string | null
    motherTongue?: string | null
    qualification?: string | null
    experience?: string | null
    previousDesignation?: string | null
    currentDesignation?: string | null
    role?: string
    status?: string
    joiningDate?: Date | string | null
    relievingDate?: Date | string | null
  }

  export type UserUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveRequests?: LeaveRequestUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUpdateManyWithoutUserNestedInput
    salaries?: SalaryUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUpdateManyWithoutUserNestedInput
    resignations?: ResignationUpdateManyWithoutUserNestedInput
    educations?: EducationUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveRequests?: LeaveRequestUncheckedUpdateManyWithoutUserNestedInput
    approvedLeaves?: LeaveRequestUncheckedUpdateManyWithoutApprovedByNestedInput
    attendances?: AttendanceUncheckedUpdateManyWithoutUserNestedInput
    salaries?: SalaryUncheckedUpdateManyWithoutUserNestedInput
    payrolls?: PayrollRecordUncheckedUpdateManyWithoutUserNestedInput
    resignations?: ResignationUncheckedUpdateManyWithoutUserNestedInput
    educations?: EducationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    middleName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    dateOfBirth?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    marriageStatus?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    aadharNumber?: NullableStringFieldUpdateOperationsInput | string | null
    bankAccount?: NullableStringFieldUpdateOperationsInput | string | null
    panNumber?: NullableStringFieldUpdateOperationsInput | string | null
    passportNumber?: NullableStringFieldUpdateOperationsInput | string | null
    dlNumber?: NullableStringFieldUpdateOperationsInput | string | null
    addressHNo?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    pincode?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactNumber?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactWhose?: NullableStringFieldUpdateOperationsInput | string | null
    emergencyContactRelation?: NullableStringFieldUpdateOperationsInput | string | null
    native?: NullableStringFieldUpdateOperationsInput | string | null
    fatherName?: NullableStringFieldUpdateOperationsInput | string | null
    fatherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherName?: NullableStringFieldUpdateOperationsInput | string | null
    motherOccupation?: NullableStringFieldUpdateOperationsInput | string | null
    motherTongue?: NullableStringFieldUpdateOperationsInput | string | null
    qualification?: NullableStringFieldUpdateOperationsInput | string | null
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    previousDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    currentDesignation?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    joiningDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    relievingDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaveRequestCreateManyUserInput = {
    id?: string
    userName: string
    type: string
    startDate: string
    endDate: string
    reason?: string
    status?: string
    createdAt?: Date | string
    approvedById?: string | null
    approvedAt?: Date | string | null
    rejectedAt?: Date | string | null
  }

  export type LeaveRequestCreateManyApprovedByInput = {
    id?: string
    userId: string
    userName: string
    type: string
    startDate: string
    endDate: string
    reason?: string
    status?: string
    createdAt?: Date | string
    approvedAt?: Date | string | null
    rejectedAt?: Date | string | null
  }

  export type AttendanceCreateManyUserInput = {
    id?: string
    date: Date | string
    checkIn?: Date | string | null
    checkOut?: Date | string | null
    status?: string
    createdAt?: Date | string
  }

  export type SalaryCreateManyUserInput = {
    id?: string
    baseAmount: number
    effectiveFrom: Date | string
  }

  export type PayrollRecordCreateManyUserInput = {
    id?: string
    periodYear: number
    periodMonth: number
    gross: number
    net: number
    createdAt?: Date | string
  }

  export type ResignationCreateManyUserInput = {
    id?: string
    userName: string
    explanation: string
    status?: string
    createdAt?: Date | string
    approvedById?: string | null
    approvedAt?: Date | string | null
  }

  export type EducationCreateManyUserInput = {
    id?: string
    level: string
    collegeName?: string | null
    rollNumber?: string | null
    yearPassout?: string | null
    marksScored?: string | null
    marksOutOf?: string | null
    cgpaScored?: string | null
    cgpaOutOf?: string | null
    currentBacklogs?: string | null
    historyBacklogs?: string | null
    breaksInAcademics?: string | null
  }

  export type LeaveRequestUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    approvedBy?: UserUpdateOneWithoutApprovedLeavesNestedInput
  }

  export type LeaveRequestUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaveRequestUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaveRequestUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutLeaveRequestsNestedInput
  }

  export type LeaveRequestUncheckedUpdateWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type LeaveRequestUncheckedUpdateManyWithoutApprovedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    startDate?: StringFieldUpdateOperationsInput | string
    endDate?: StringFieldUpdateOperationsInput | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rejectedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AttendanceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AttendanceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    checkIn?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    checkOut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseAmount?: FloatFieldUpdateOperationsInput | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseAmount?: FloatFieldUpdateOperationsInput | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalaryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    baseAmount?: FloatFieldUpdateOperationsInput | number
    effectiveFrom?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollRecordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodYear?: IntFieldUpdateOperationsInput | number
    periodMonth?: IntFieldUpdateOperationsInput | number
    gross?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollRecordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodYear?: IntFieldUpdateOperationsInput | number
    periodMonth?: IntFieldUpdateOperationsInput | number
    gross?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayrollRecordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    periodYear?: IntFieldUpdateOperationsInput | number
    periodMonth?: IntFieldUpdateOperationsInput | number
    gross?: FloatFieldUpdateOperationsInput | number
    net?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResignationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResignationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ResignationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    userName?: StringFieldUpdateOperationsInput | string
    explanation?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    approvedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EducationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    yearPassout?: NullableStringFieldUpdateOperationsInput | string | null
    marksScored?: NullableStringFieldUpdateOperationsInput | string | null
    marksOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaScored?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    currentBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    historyBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    breaksInAcademics?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    yearPassout?: NullableStringFieldUpdateOperationsInput | string | null
    marksScored?: NullableStringFieldUpdateOperationsInput | string | null
    marksOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaScored?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    currentBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    historyBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    breaksInAcademics?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    level?: StringFieldUpdateOperationsInput | string
    collegeName?: NullableStringFieldUpdateOperationsInput | string | null
    rollNumber?: NullableStringFieldUpdateOperationsInput | string | null
    yearPassout?: NullableStringFieldUpdateOperationsInput | string | null
    marksScored?: NullableStringFieldUpdateOperationsInput | string | null
    marksOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaScored?: NullableStringFieldUpdateOperationsInput | string | null
    cgpaOutOf?: NullableStringFieldUpdateOperationsInput | string | null
    currentBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    historyBacklogs?: NullableStringFieldUpdateOperationsInput | string | null
    breaksInAcademics?: NullableStringFieldUpdateOperationsInput | string | null
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