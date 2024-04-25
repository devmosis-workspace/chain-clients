import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** Funder is the object which holds info about a single pool funder */
export interface Funder {
  /** address ... */
  address: string;
  /** moniker ... */
  moniker: string;
  /** identity is the 64 bit keybase.io identity string */
  identity: string;
  /** website ... */
  website: string;
  /** contact ... */
  contact: string;
  /** description are some additional notes the funder finds important */
  description: string;
}
export interface FunderProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.Funder";
  value: Uint8Array;
}
/** Funder is the object which holds info about a single pool funder */
export interface FunderAmino {
  /** address ... */
  address?: string;
  /** moniker ... */
  moniker?: string;
  /** identity is the 64 bit keybase.io identity string */
  identity?: string;
  /** website ... */
  website?: string;
  /** contact ... */
  contact?: string;
  /** description are some additional notes the funder finds important */
  description?: string;
}
export interface FunderAminoMsg {
  type: "/kyve.funders.v1beta1.Funder";
  value: FunderAmino;
}
/** Funder is the object which holds info about a single pool funder */
export interface FunderSDKType {
  address: string;
  moniker: string;
  identity: string;
  website: string;
  contact: string;
  description: string;
}
/**
 * Funding is the object which holds info about the current funding
 * funder_address and pool_id (m2m) are unique together which means that
 * a funder can only fund each pool once and a pool can only be funded
 * by each funder once. However, a funder can update the amount of funds.
 */
export interface Funding {
  /** funder_id is the id of the funder */
  funderAddress: string;
  /** pool_id is the id of the pool this funding is for */
  poolId: bigint;
  /** amount is the amount of funds in ukyve the funder has left */
  amount: bigint;
  /** amount_per_bundle is the amount of funds in ukyve the funder pays per bundle */
  amountPerBundle: bigint;
  /** total_funded is the total amount of funds in ukyve the funder has funded */
  totalFunded: bigint;
}
export interface FundingProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.Funding";
  value: Uint8Array;
}
/**
 * Funding is the object which holds info about the current funding
 * funder_address and pool_id (m2m) are unique together which means that
 * a funder can only fund each pool once and a pool can only be funded
 * by each funder once. However, a funder can update the amount of funds.
 */
export interface FundingAmino {
  /** funder_id is the id of the funder */
  funder_address?: string;
  /** pool_id is the id of the pool this funding is for */
  pool_id?: string;
  /** amount is the amount of funds in ukyve the funder has left */
  amount?: string;
  /** amount_per_bundle is the amount of funds in ukyve the funder pays per bundle */
  amount_per_bundle?: string;
  /** total_funded is the total amount of funds in ukyve the funder has funded */
  total_funded?: string;
}
export interface FundingAminoMsg {
  type: "/kyve.funders.v1beta1.Funding";
  value: FundingAmino;
}
/**
 * Funding is the object which holds info about the current funding
 * funder_address and pool_id (m2m) are unique together which means that
 * a funder can only fund each pool once and a pool can only be funded
 * by each funder once. However, a funder can update the amount of funds.
 */
export interface FundingSDKType {
  funder_address: string;
  pool_id: bigint;
  amount: bigint;
  amount_per_bundle: bigint;
  total_funded: bigint;
}
/** FundingState is the object which holds info about the funding state of a pool */
export interface FundingState {
  /** pool_id is the id of the pool this funding is for */
  poolId: bigint;
  /** active_funder_addresses is the list of all active fundings */
  activeFunderAddresses: string[];
}
export interface FundingStateProtoMsg {
  typeUrl: "/kyve.funders.v1beta1.FundingState";
  value: Uint8Array;
}
/** FundingState is the object which holds info about the funding state of a pool */
export interface FundingStateAmino {
  /** pool_id is the id of the pool this funding is for */
  pool_id?: string;
  /** active_funder_addresses is the list of all active fundings */
  active_funder_addresses?: string[];
}
export interface FundingStateAminoMsg {
  type: "/kyve.funders.v1beta1.FundingState";
  value: FundingStateAmino;
}
/** FundingState is the object which holds info about the funding state of a pool */
export interface FundingStateSDKType {
  pool_id: bigint;
  active_funder_addresses: string[];
}
function createBaseFunder(): Funder {
  return {
    address: "",
    moniker: "",
    identity: "",
    website: "",
    contact: "",
    description: ""
  };
}
export const Funder = {
  typeUrl: "/kyve.funders.v1beta1.Funder",
  encode(message: Funder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.moniker !== "") {
      writer.uint32(18).string(message.moniker);
    }
    if (message.identity !== "") {
      writer.uint32(26).string(message.identity);
    }
    if (message.website !== "") {
      writer.uint32(34).string(message.website);
    }
    if (message.contact !== "") {
      writer.uint32(42).string(message.contact);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): Funder {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      moniker: isSet(object.moniker) ? String(object.moniker) : "",
      identity: isSet(object.identity) ? String(object.identity) : "",
      website: isSet(object.website) ? String(object.website) : "",
      contact: isSet(object.contact) ? String(object.contact) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<Funder>): Funder {
    const message = createBaseFunder();
    message.address = object.address ?? "";
    message.moniker = object.moniker ?? "";
    message.identity = object.identity ?? "";
    message.website = object.website ?? "";
    message.contact = object.contact ?? "";
    message.description = object.description ?? "";
    return message;
  },
  fromAmino(object: FunderAmino): Funder {
    const message = createBaseFunder();
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    }
    if (object.moniker !== undefined && object.moniker !== null) {
      message.moniker = object.moniker;
    }
    if (object.identity !== undefined && object.identity !== null) {
      message.identity = object.identity;
    }
    if (object.website !== undefined && object.website !== null) {
      message.website = object.website;
    }
    if (object.contact !== undefined && object.contact !== null) {
      message.contact = object.contact;
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    return message;
  },
  toAmino(message: Funder): FunderAmino {
    const obj: any = {};
    obj.address = message.address;
    obj.moniker = message.moniker;
    obj.identity = message.identity;
    obj.website = message.website;
    obj.contact = message.contact;
    obj.description = message.description;
    return obj;
  },
  fromAminoMsg(object: FunderAminoMsg): Funder {
    return Funder.fromAmino(object.value);
  },
  fromProtoMsg(message: FunderProtoMsg): Funder {
    return Funder.decode(message.value);
  },
  toProto(message: Funder): Uint8Array {
    return Funder.encode(message).finish();
  },
  toProtoMsg(message: Funder): FunderProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.Funder",
      value: Funder.encode(message).finish()
    };
  }
};
function createBaseFunding(): Funding {
  return {
    funderAddress: "",
    poolId: BigInt(0),
    amount: BigInt(0),
    amountPerBundle: BigInt(0),
    totalFunded: BigInt(0)
  };
}
export const Funding = {
  typeUrl: "/kyve.funders.v1beta1.Funding",
  encode(message: Funding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funderAddress !== "") {
      writer.uint32(10).string(message.funderAddress);
    }
    if (message.poolId !== BigInt(0)) {
      writer.uint32(16).uint64(message.poolId);
    }
    if (message.amount !== BigInt(0)) {
      writer.uint32(24).uint64(message.amount);
    }
    if (message.amountPerBundle !== BigInt(0)) {
      writer.uint32(32).uint64(message.amountPerBundle);
    }
    if (message.totalFunded !== BigInt(0)) {
      writer.uint32(40).uint64(message.totalFunded);
    }
    return writer;
  },
  fromJSON(object: any): Funding {
    return {
      funderAddress: isSet(object.funderAddress) ? String(object.funderAddress) : "",
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      amount: isSet(object.amount) ? BigInt(object.amount.toString()) : BigInt(0),
      amountPerBundle: isSet(object.amountPerBundle) ? BigInt(object.amountPerBundle.toString()) : BigInt(0),
      totalFunded: isSet(object.totalFunded) ? BigInt(object.totalFunded.toString()) : BigInt(0)
    };
  },
  fromPartial(object: Partial<Funding>): Funding {
    const message = createBaseFunding();
    message.funderAddress = object.funderAddress ?? "";
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.amount = object.amount !== undefined && object.amount !== null ? BigInt(object.amount.toString()) : BigInt(0);
    message.amountPerBundle = object.amountPerBundle !== undefined && object.amountPerBundle !== null ? BigInt(object.amountPerBundle.toString()) : BigInt(0);
    message.totalFunded = object.totalFunded !== undefined && object.totalFunded !== null ? BigInt(object.totalFunded.toString()) : BigInt(0);
    return message;
  },
  fromAmino(object: FundingAmino): Funding {
    const message = createBaseFunding();
    if (object.funder_address !== undefined && object.funder_address !== null) {
      message.funderAddress = object.funder_address;
    }
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = BigInt(object.amount);
    }
    if (object.amount_per_bundle !== undefined && object.amount_per_bundle !== null) {
      message.amountPerBundle = BigInt(object.amount_per_bundle);
    }
    if (object.total_funded !== undefined && object.total_funded !== null) {
      message.totalFunded = BigInt(object.total_funded);
    }
    return message;
  },
  toAmino(message: Funding): FundingAmino {
    const obj: any = {};
    obj.funder_address = message.funderAddress;
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    obj.amount = message.amount ? message.amount.toString() : undefined;
    obj.amount_per_bundle = message.amountPerBundle ? message.amountPerBundle.toString() : undefined;
    obj.total_funded = message.totalFunded ? message.totalFunded.toString() : undefined;
    return obj;
  },
  fromAminoMsg(object: FundingAminoMsg): Funding {
    return Funding.fromAmino(object.value);
  },
  fromProtoMsg(message: FundingProtoMsg): Funding {
    return Funding.decode(message.value);
  },
  toProto(message: Funding): Uint8Array {
    return Funding.encode(message).finish();
  },
  toProtoMsg(message: Funding): FundingProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.Funding",
      value: Funding.encode(message).finish()
    };
  }
};
function createBaseFundingState(): FundingState {
  return {
    poolId: BigInt(0),
    activeFunderAddresses: []
  };
}
export const FundingState = {
  typeUrl: "/kyve.funders.v1beta1.FundingState",
  encode(message: FundingState, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.poolId !== BigInt(0)) {
      writer.uint32(8).uint64(message.poolId);
    }
    for (const v of message.activeFunderAddresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): FundingState {
    return {
      poolId: isSet(object.poolId) ? BigInt(object.poolId.toString()) : BigInt(0),
      activeFunderAddresses: Array.isArray(object?.activeFunderAddresses) ? object.activeFunderAddresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<FundingState>): FundingState {
    const message = createBaseFundingState();
    message.poolId = object.poolId !== undefined && object.poolId !== null ? BigInt(object.poolId.toString()) : BigInt(0);
    message.activeFunderAddresses = object.activeFunderAddresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: FundingStateAmino): FundingState {
    const message = createBaseFundingState();
    if (object.pool_id !== undefined && object.pool_id !== null) {
      message.poolId = BigInt(object.pool_id);
    }
    message.activeFunderAddresses = object.active_funder_addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: FundingState): FundingStateAmino {
    const obj: any = {};
    obj.pool_id = message.poolId ? message.poolId.toString() : undefined;
    if (message.activeFunderAddresses) {
      obj.active_funder_addresses = message.activeFunderAddresses.map(e => e);
    } else {
      obj.active_funder_addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: FundingStateAminoMsg): FundingState {
    return FundingState.fromAmino(object.value);
  },
  fromProtoMsg(message: FundingStateProtoMsg): FundingState {
    return FundingState.decode(message.value);
  },
  toProto(message: FundingState): Uint8Array {
    return FundingState.encode(message).finish();
  },
  toProtoMsg(message: FundingState): FundingStateProtoMsg {
    return {
      typeUrl: "/kyve.funders.v1beta1.FundingState",
      value: FundingState.encode(message).finish()
    };
  }
};