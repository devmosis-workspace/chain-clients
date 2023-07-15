import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface Params {
  /**
   * code_ide_whitelist contains the list of code ids that are allowed to be
   * instantiated.
   */
  codeIdWhitelist: Long[];
  /**
   * pool_migration_limit is the maximum number of pools that can be migrated
   * at once via governance proposal. This is to have a constant bound on the
   * number of pools that can be migrated at once and remove the possibility
   * of an unlikely scenario of causing a chain halt due to a large migration.
   */
  poolMigrationLimit: Long;
}
export interface ParamsSDKType {
  code_id_whitelist: Long[];
  pool_migration_limit: Long;
}
function createBaseParams(): Params {
  return {
    codeIdWhitelist: [],
    poolMigrationLimit: Long.UZERO
  };
}
export const Params = {
  encode(message: Params, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    writer.uint32(10).fork();
    for (const v of message.codeIdWhitelist) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (!message.poolMigrationLimit.isZero()) {
      writer.uint32(16).uint64(message.poolMigrationLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      codeIdWhitelist: Array.isArray(object?.codeIdWhitelist) ? object.codeIdWhitelist.map((e: any) => Long.fromValue(e)) : [],
      poolMigrationLimit: isSet(object.poolMigrationLimit) ? Long.fromValue(object.poolMigrationLimit) : Long.UZERO
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.codeIdWhitelist = object.codeIdWhitelist?.map(e => Long.fromValue(e)) || [];
    message.poolMigrationLimit = object.poolMigrationLimit !== undefined && object.poolMigrationLimit !== null ? Long.fromValue(object.poolMigrationLimit) : Long.UZERO;
    return message;
  }
};