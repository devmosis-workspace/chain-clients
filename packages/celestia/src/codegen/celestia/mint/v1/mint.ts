import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
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
  previousBlockTime?: Timestamp;
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
  inflation_rate?: string;
  /**
   * AnnualProvisions is the total number of tokens to be minted in the current
   * year due to inflation.
   */
  annual_provisions?: string;
  /** PreviousBlockTime is the timestamp of the previous block. */
  previous_block_time?: string;
  /** BondDenom is the denomination of the token that should be minted. */
  bond_denom?: string;
}
export interface MinterAminoMsg {
  type: "/celestia.mint.v1.Minter";
  value: MinterAmino;
}
/** Minter represents the mint state. */
export interface MinterSDKType {
  inflation_rate: string;
  annual_provisions: string;
  previous_block_time?: TimestampSDKType;
  bond_denom: string;
}
/** GenesisTime contains the timestamp of the genesis block. */
export interface GenesisTime {
  /** GenesisTime is the timestamp of the genesis block. */
  genesisTime?: Timestamp;
}
export interface GenesisTimeProtoMsg {
  typeUrl: "/celestia.mint.v1.GenesisTime";
  value: Uint8Array;
}
/** GenesisTime contains the timestamp of the genesis block. */
export interface GenesisTimeAmino {
  /** GenesisTime is the timestamp of the genesis block. */
  genesis_time?: string;
}
export interface GenesisTimeAminoMsg {
  type: "/celestia.mint.v1.GenesisTime";
  value: GenesisTimeAmino;
}
/** GenesisTime contains the timestamp of the genesis block. */
export interface GenesisTimeSDKType {
  genesis_time?: TimestampSDKType;
}
function createBaseMinter(): Minter {
  return {
    inflationRate: "",
    annualProvisions: "",
    previousBlockTime: undefined,
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
    const message = createBaseMinter();
    if (object.inflation_rate !== undefined && object.inflation_rate !== null) {
      message.inflationRate = object.inflation_rate;
    }
    if (object.annual_provisions !== undefined && object.annual_provisions !== null) {
      message.annualProvisions = object.annual_provisions;
    }
    if (object.previous_block_time !== undefined && object.previous_block_time !== null) {
      message.previousBlockTime = Timestamp.fromAmino(object.previous_block_time);
    }
    if (object.bond_denom !== undefined && object.bond_denom !== null) {
      message.bondDenom = object.bond_denom;
    }
    return message;
  },
  toAmino(message: Minter): MinterAmino {
    const obj: any = {};
    obj.inflation_rate = message.inflationRate;
    obj.annual_provisions = message.annualProvisions;
    obj.previous_block_time = message.previousBlockTime ? Timestamp.toAmino(message.previousBlockTime) : undefined;
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
    genesisTime: undefined
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
    const message = createBaseGenesisTime();
    if (object.genesis_time !== undefined && object.genesis_time !== null) {
      message.genesisTime = Timestamp.fromAmino(object.genesis_time);
    }
    return message;
  },
  toAmino(message: GenesisTime): GenesisTimeAmino {
    const obj: any = {};
    obj.genesis_time = message.genesisTime ? Timestamp.toAmino(message.genesisTime) : undefined;
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