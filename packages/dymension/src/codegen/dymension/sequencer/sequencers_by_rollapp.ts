import { BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
/**
 * SequencersByRollapp defines an map between rollappId to a list of
 * all sequencers that belongs to it.
 */
export interface SequencersByRollapp {
  /**
   * rollappId is the unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id.
   */
  rollappId: string;
  /**
   * list of sequencers' account address
   * repeated string sequencers = 2;
   */
  sequencers: Sequencers;
}
export interface SequencersByRollappProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.SequencersByRollapp";
  value: Uint8Array;
}
/**
 * SequencersByRollapp defines an map between rollappId to a list of
 * all sequencers that belongs to it.
 */
export interface SequencersByRollappAmino {
  /**
   * rollappId is the unique identifier of the rollapp chain.
   * The rollappId follows the same standard as cosmos chain_id.
   */
  rollappId?: string;
  /**
   * list of sequencers' account address
   * repeated string sequencers = 2;
   */
  sequencers?: SequencersAmino;
}
export interface SequencersByRollappAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.SequencersByRollapp";
  value: SequencersByRollappAmino;
}
/**
 * SequencersByRollapp defines an map between rollappId to a list of
 * all sequencers that belongs to it.
 */
export interface SequencersByRollappSDKType {
  rollappId: string;
  sequencers: SequencersSDKType;
}
/** Sequencers defines list of sequencers addresses. */
export interface Sequencers {
  addresses: string[];
}
export interface SequencersProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.Sequencers";
  value: Uint8Array;
}
/** Sequencers defines list of sequencers addresses. */
export interface SequencersAmino {
  addresses?: string[];
}
export interface SequencersAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.Sequencers";
  value: SequencersAmino;
}
/** Sequencers defines list of sequencers addresses. */
export interface SequencersSDKType {
  addresses: string[];
}
function createBaseSequencersByRollapp(): SequencersByRollapp {
  return {
    rollappId: "",
    sequencers: Sequencers.fromPartial({})
  };
}
export const SequencersByRollapp = {
  typeUrl: "/dymensionxyz.dymension.sequencer.SequencersByRollapp",
  encode(message: SequencersByRollapp, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.rollappId !== "") {
      writer.uint32(10).string(message.rollappId);
    }
    if (message.sequencers !== undefined) {
      Sequencers.encode(message.sequencers, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SequencersByRollapp {
    return {
      rollappId: isSet(object.rollappId) ? String(object.rollappId) : "",
      sequencers: isSet(object.sequencers) ? Sequencers.fromJSON(object.sequencers) : undefined
    };
  },
  fromPartial(object: Partial<SequencersByRollapp>): SequencersByRollapp {
    const message = createBaseSequencersByRollapp();
    message.rollappId = object.rollappId ?? "";
    message.sequencers = object.sequencers !== undefined && object.sequencers !== null ? Sequencers.fromPartial(object.sequencers) : undefined;
    return message;
  },
  fromAmino(object: SequencersByRollappAmino): SequencersByRollapp {
    const message = createBaseSequencersByRollapp();
    if (object.rollappId !== undefined && object.rollappId !== null) {
      message.rollappId = object.rollappId;
    }
    if (object.sequencers !== undefined && object.sequencers !== null) {
      message.sequencers = Sequencers.fromAmino(object.sequencers);
    }
    return message;
  },
  toAmino(message: SequencersByRollapp): SequencersByRollappAmino {
    const obj: any = {};
    obj.rollappId = message.rollappId;
    obj.sequencers = message.sequencers ? Sequencers.toAmino(message.sequencers) : undefined;
    return obj;
  },
  fromAminoMsg(object: SequencersByRollappAminoMsg): SequencersByRollapp {
    return SequencersByRollapp.fromAmino(object.value);
  },
  fromProtoMsg(message: SequencersByRollappProtoMsg): SequencersByRollapp {
    return SequencersByRollapp.decode(message.value);
  },
  toProto(message: SequencersByRollapp): Uint8Array {
    return SequencersByRollapp.encode(message).finish();
  },
  toProtoMsg(message: SequencersByRollapp): SequencersByRollappProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.SequencersByRollapp",
      value: SequencersByRollapp.encode(message).finish()
    };
  }
};
function createBaseSequencers(): Sequencers {
  return {
    addresses: []
  };
}
export const Sequencers = {
  typeUrl: "/dymensionxyz.dymension.sequencer.Sequencers",
  encode(message: Sequencers, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    for (const v of message.addresses) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): Sequencers {
    return {
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<Sequencers>): Sequencers {
    const message = createBaseSequencers();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  fromAmino(object: SequencersAmino): Sequencers {
    const message = createBaseSequencers();
    message.addresses = object.addresses?.map(e => e) || [];
    return message;
  },
  toAmino(message: Sequencers): SequencersAmino {
    const obj: any = {};
    if (message.addresses) {
      obj.addresses = message.addresses.map(e => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },
  fromAminoMsg(object: SequencersAminoMsg): Sequencers {
    return Sequencers.fromAmino(object.value);
  },
  fromProtoMsg(message: SequencersProtoMsg): Sequencers {
    return Sequencers.decode(message.value);
  },
  toProto(message: Sequencers): Uint8Array {
    return Sequencers.encode(message).finish();
  },
  toProtoMsg(message: Sequencers): SequencersProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.Sequencers",
      value: Sequencers.encode(message).finish()
    };
  }
};