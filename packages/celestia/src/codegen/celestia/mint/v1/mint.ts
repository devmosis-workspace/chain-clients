import { Timestamp, TimestampAmino, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, fromJsonTimestamp } from "../../../helpers";
/** Minter represents the mint state. */
export interface Minter {
  /**
   * InflationRate is the rate at which new tokens should be minted for the
   * current year. For example if InflationRate=0.1, then 10% of the total
   * supply will be minted over the course of the year.
   */
  inflationRate: string;
  /**
   * AnnualProvisions is the total number of tokens to be minted in the current
   * year due to inflation.
   */
  annualProvisions: string;
  /** PreviousBlockTime is the timestamp of the previous block. */
  previousBlockTime: Timestamp;
  /** BondDenom is the denomination of the token that should be minted. */
  bondDenom: string;
}
export interface MinterProtoMsg {
  typeUrl: "/celestia.mint.v1.Minter";
  value: Uint8Array;
}
/** Minter represents the mint state. */
export interface MinterAmino {
  /**
   * InflationRate is the rate at which new tokens should be minted for the
   * current year. For example if InflationRate=0.1, then 10% of the total
   * supply will be minted over the course of the year.
   */
  inflation_rate: string;
  /**
   * AnnualProvisions is the total number of tokens to be minted in the current
   * year due to inflation.
   */
  annual_provisions: string;
  /** PreviousBlockTime is the timestamp of the previous block. */
  previous_block_time?: TimestampAmino;
  /** BondDenom is the denomination of the token that should be minted. */
  bond_denom: string;
}
export interface MinterAminoMsg {
  type: "/celestia.mint.v1.Minter";
  value: MinterAmino;
}
/** Minter represents the mint state. */
export interface MinterSDKType {
  inflation_rate: string;
  annual_provisions: string;
  previous_block_time: TimestampSDKType;
  bond_denom: string;
}
/** GenesisTime contains the timestamp of the genesis block. */
export interface GenesisTime {
  /** GenesisTime is the timestamp of the genesis block. */
  genesisTime: Timestamp;
}
export interface GenesisTimeProtoMsg {
  typeUrl: "/celestia.mint.v1.GenesisTime";
  value: Uint8Array;
}
/** GenesisTime contains the timestamp of the genesis block. */
export interface GenesisTimeAmino {
  /** GenesisTime is the timestamp of the genesis block. */
  genesis_time?: TimestampAmino;
}
export interface GenesisTimeAminoMsg {
  type: "/celestia.mint.v1.GenesisTime";
  value: GenesisTimeAmino;
}
/** GenesisTime contains the timestamp of the genesis block. */
export interface GenesisTimeSDKType {
  genesis_time: TimestampSDKType;
}
function createBaseMinter(): Minter {
  return {
    inflationRate: "",
    annualProvisions: "",
    previousBlockTime: Timestamp.fromPartial({}),
    bondDenom: ""
  };
}
export const Minter = {
  typeUrl: "/celestia.mint.v1.Minter",
  encode(message: Minter, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.inflationRate !== "") {
      writer.uint32(10).string(Decimal.fromUserInput(message.inflationRate, 18).atomics);
    }
    if (message.annualProvisions !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.annualProvisions, 18).atomics);
    }
    if (message.previousBlockTime !== undefined) {
      Timestamp.encode(message.previousBlockTime, writer.uint32(34).fork()).ldelim();
    }
    if (message.bondDenom !== "") {
      writer.uint32(42).string(message.bondDenom);
    }
    return writer;
  },
  fromJSON(object: any): Minter {
    return {
      inflationRate: isSet(object.inflationRate) ? String(object.inflationRate) : "",
      annualProvisions: isSet(object.annualProvisions) ? String(object.annualProvisions) : "",
      previousBlockTime: isSet(object.previousBlockTime) ? fromJsonTimestamp(object.previousBlockTime) : undefined,
      bondDenom: isSet(object.bondDenom) ? String(object.bondDenom) : ""
    };
  },
  fromPartial(object: Partial<Minter>): Minter {
    const message = createBaseMinter();
    message.inflationRate = object.inflationRate ?? "";
    message.annualProvisions = object.annualProvisions ?? "";
    message.previousBlockTime = object.previousBlockTime !== undefined && object.previousBlockTime !== null ? Timestamp.fromPartial(object.previousBlockTime) : undefined;
    message.bondDenom = object.bondDenom ?? "";
    return message;
  },
  fromAmino(object: MinterAmino): Minter {
    return {
      inflationRate: object.inflation_rate,
      annualProvisions: object.annual_provisions,
      previousBlockTime: object.previous_block_time,
      bondDenom: object.bond_denom
    };
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.inflation_rate = message.inflationRate;
    obj.annual_provisions = message.annualProvisions;
    obj.previous_block_time = message.previousBlockTime;
    obj.bond_denom = message.bondDenom;
    return obj;
  },
  fromAminoMsg(object: MinterAminoMsg): Minter {
    return Minter.fromAmino(object.value);
  },
  fromProtoMsg(message: MinterProtoMsg): Minter {
    return Minter.decode(message.value);
  },
  toProto(message: Minter): Uint8Array {
    return Minter.encode(message).finish();
  },
  toProtoMsg(message: Minter): MinterProtoMsg {
    return {
      typeUrl: "/celestia.mint.v1.Minter",
      value: Minter.encode(message).finish()
    };
  }
};
function createBaseGenesisTime(): GenesisTime {
  return {
    genesisTime: Timestamp.fromPartial({})
  };
}
export const GenesisTime = {
  typeUrl: "/celestia.mint.v1.GenesisTime",
  encode(message: GenesisTime, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.genesisTime !== undefined) {
      Timestamp.encode(message.genesisTime, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisTime {
    return {
      genesisTime: isSet(object.genesisTime) ? fromJsonTimestamp(object.genesisTime) : undefined
    };
  },
  fromPartial(object: Partial<GenesisTime>): GenesisTime {
    const message = createBaseGenesisTime();
    message.genesisTime = object.genesisTime !== undefined && object.genesisTime !== null ? Timestamp.fromPartial(object.genesisTime) : undefined;
    return message;
  },
  fromAmino(object: GenesisTimeAmino): GenesisTime {
    return {
      genesisTime: object.genesis_time
    };
  },
  toAmino(message: GenesisTime): GenesisTimeAmino {
    const obj: any = {};
    obj.genesis_time = message.genesisTime;
    return obj;
  },
  fromAminoMsg(object: GenesisTimeAminoMsg): GenesisTime {
    return GenesisTime.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisTimeProtoMsg): GenesisTime {
    return GenesisTime.decode(message.value);
  },
  toProto(message: GenesisTime): Uint8Array {
    return GenesisTime.encode(message).finish();
  },
  toProtoMsg(message: GenesisTime): GenesisTimeProtoMsg {
    return {
      typeUrl: "/celestia.mint.v1.GenesisTime",
      value: GenesisTime.encode(message).finish()
    };
  }
};