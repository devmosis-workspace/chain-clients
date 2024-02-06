import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface Params {
  /**
   * code_ide_whitelist contains the list of code ids that are allowed to be
   * instantiated.
   */
  codeIdWhitelist: bigint[];
  /**
   * pool_migration_limit is the maximum number of pools that can be migrated
   * at once via governance proposal. This is to have a constant bound on the
   * number of pools that can be migrated at once and remove the possibility
   * of an unlikely scenario of causing a chain halt due to a large migration.
   */
  poolMigrationLimit: bigint;
}
export interface ParamsProtoMsg {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.Params";
  value: Uint8Array;
}
export interface ParamsAmino {
  /**
   * code_ide_whitelist contains the list of code ids that are allowed to be
   * instantiated.
   */
  code_id_whitelist?: string[];
  /**
   * pool_migration_limit is the maximum number of pools that can be migrated
   * at once via governance proposal. This is to have a constant bound on the
   * number of pools that can be migrated at once and remove the possibility
   * of an unlikely scenario of causing a chain halt due to a large migration.
   */
  pool_migration_limit?: string;
}
export interface ParamsAminoMsg {
  type: "osmosis/cosmwasmpool/params";
  value: ParamsAmino;
}
export interface ParamsSDKType {
  code_id_whitelist: bigint[];
  pool_migration_limit: bigint;
}
function createBaseParams(): Params {
  return {
    codeIdWhitelist: [],
    poolMigrationLimit: BigInt(0)
  };
}
export const Params = {
  typeUrl: "/osmosis.cosmwasmpool.v1beta1.Params",
  encode(message: Params, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    writer.uint32(10).fork();
    for (const v of message.codeIdWhitelist) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.poolMigrationLimit !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolMigrationLimit);
    }
    return writer;
  },
  fromJSON(object: any): Params {
    return {
      codeIdWhitelist: Array.isArray(object?.codeIdWhitelist) ? object.codeIdWhitelist.map((e: any) => BigInt(e.toString())) : [],
      poolMigrationLimit: isSet(object.poolMigrationLimit) ? BigInt(object.poolMigrationLimit.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Params>): Params {
    const message = createBaseParams();
    message.codeIdWhitelist = object.codeIdWhitelist?.map(e => BigInt(e.toString())) || [];
    message.poolMigrationLimit = object.poolMigrationLimit !== undefined && object.poolMigrationLimit !== null ? BigInt(object.poolMigrationLimit.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: ParamsAmino): Params {
    const message = createBaseParams();
    message.codeIdWhitelist = object.code_id_whitelist?.map(e => BigInt(e)) || [];
    if (object.pool_migration_limit !== undefined && object.pool_migration_limit !== null) {
      message.poolMigrationLimit = BigInt(object.pool_migration_limit);
    }
    return message;
  },
  toAmino(message: Params): ParamsAmino {
    const obj: any = {};
    if (message.codeIdWhitelist) {
      obj.code_id_whitelist = message.codeIdWhitelist.map(e => e.toString());
    } else {
      obj.code_id_whitelist = [];
    }
    obj.pool_migration_limit = message.poolMigrationLimit ? message.poolMigrationLimit.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: ParamsAminoMsg): Params {
    return Params.fromAmino(object.value);
  },
  toAminoMsg(message: Params): ParamsAminoMsg {
    return {
      type: "osmosis/cosmwasmpool/params",
      value: Params.toAmino(message)
    };
  },
  fromProtoMsg(message: ParamsProtoMsg): Params {
    return Params.decode(message.value);
  },
  toProto(message: Params): Uint8Array {
    return Params.encode(message).finish();
  },
  toProtoMsg(message: Params): ParamsProtoMsg {
    return {
      typeUrl: "/osmosis.cosmwasmpool.v1beta1.Params",
      value: Params.encode(message).finish()
    };
  }
};