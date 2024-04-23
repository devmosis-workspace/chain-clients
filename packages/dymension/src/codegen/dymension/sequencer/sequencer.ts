import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../google/protobuf/any";
import { Description, DescriptionAmino, DescriptionSDKType } from "./description";
import { BinaryReader, BinaryWriter } from "../../binary";
import { isSet } from "../../helpers";
import { encodePubkey, decodePubkey } from "@cosmjs/proto-signing";
import { Pubkey } from "@cosmjs/amino";
/**
 * Sequencer defines a sequencer identified by its' address (sequencerAddress).
 * The sequencer could be attached to only one rollapp (rollappId).
 */
export interface Sequencer {
  /** sequencerAddress is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
  sequencerAddress: string;
  /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
  dymintPubKey?: (Any) | undefined;
  /** rollappId defines the rollapp to which the sequencer belongs. */
  rollappIDs: string[];
  /** description defines the descriptive terms for the sequencer. */
  description: Description;
}
export interface SequencerProtoMsg {
  typeUrl: "/dymensionxyz.dymension.sequencer.Sequencer";
  value: Uint8Array;
}
export type SequencerEncoded = Omit<Sequencer, "dymintPubKey"> & {
  /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */dymintPubKey?: AnyProtoMsg | undefined;
};
/**
 * Sequencer defines a sequencer identified by its' address (sequencerAddress).
 * The sequencer could be attached to only one rollapp (rollappId).
 */
export interface SequencerAmino {
  /** sequencerAddress is the bech32-encoded address of the sequencer account which is the account that the message was sent from. */
  sequencerAddress?: string;
  /** pubkey is the public key of the sequencers' dymint client, as a Protobuf Any. */
  dymintPubKey?: AnyAmino;
  /** rollappId defines the rollapp to which the sequencer belongs. */
  rollappIDs?: string[];
  /** description defines the descriptive terms for the sequencer. */
  description?: DescriptionAmino;
}
export interface SequencerAminoMsg {
  type: "/dymensionxyz.dymension.sequencer.Sequencer";
  value: SequencerAmino;
}
/**
 * Sequencer defines a sequencer identified by its' address (sequencerAddress).
 * The sequencer could be attached to only one rollapp (rollappId).
 */
export interface SequencerSDKType {
  sequencerAddress: string;
  dymintPubKey?: AnySDKType | undefined;
  rollappIDs: string[];
  description: DescriptionSDKType;
}
function createBaseSequencer(): Sequencer {
  return {
    sequencerAddress: "",
    dymintPubKey: undefined,
    rollappIDs: [],
    description: Description.fromPartial({})
  };
}
export const Sequencer = {
  typeUrl: "/dymensionxyz.dymension.sequencer.Sequencer",
  encode(message: Sequencer, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sequencerAddress !== "") {
      writer.uint32(10).string(message.sequencerAddress);
    }
    if (message.dymintPubKey !== undefined) {
      Any.encode((message.dymintPubKey as Any), writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.rollappIDs) {
      writer.uint32(26).string(v!);
    }
    if (message.description !== undefined) {
      Description.encode(message.description, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Sequencer {
    return {
      sequencerAddress: isSet(object.sequencerAddress) ? String(object.sequencerAddress) : "",
      dymintPubKey: isSet(object.dymintPubKey) ? Any.fromJSON(object.dymintPubKey) : undefined,
      rollappIDs: Array.isArray(object?.rollappIDs) ? object.rollappIDs.map((e: any) => String(e)) : [],
      description: isSet(object.description) ? Description.fromJSON(object.description) : undefined
    };
  },
  fromPartial(object: Partial<Sequencer>): Sequencer {
    const message = createBaseSequencer();
    message.sequencerAddress = object.sequencerAddress ?? "";
    message.dymintPubKey = object.dymintPubKey !== undefined && object.dymintPubKey !== null ? Any.fromPartial(object.dymintPubKey) : undefined;
    message.rollappIDs = object.rollappIDs?.map(e => e) || [];
    message.description = object.description !== undefined && object.description !== null ? Description.fromPartial(object.description) : undefined;
    return message;
  },
  fromAmino(object: SequencerAmino): Sequencer {
    const message = createBaseSequencer();
    if (object.sequencerAddress !== undefined && object.sequencerAddress !== null) {
      message.sequencerAddress = object.sequencerAddress;
    }
    if (object.dymintPubKey !== undefined && object.dymintPubKey !== null) {
      message.dymintPubKey = encodePubkey(object.dymintPubKey);
    }
    message.rollappIDs = object.rollappIDs?.map(e => e) || [];
    if (object.description !== undefined && object.description !== null) {
      message.description = Description.fromAmino(object.description);
    }
    return message;
  },
  toAmino(message: Sequencer): SequencerAmino {
    const obj: any = {};
    obj.sequencerAddress = message.sequencerAddress;
    obj.dymintPubKey = message.dymintPubKey ? decodePubkey(message.dymintPubKey) : undefined;
    if (message.rollappIDs) {
      obj.rollappIDs = message.rollappIDs.map(e => e);
    } else {
      obj.rollappIDs = [];
    }
    obj.description = message.description ? Description.toAmino(message.description) : undefined;
    return obj;
  },
  fromAminoMsg(object: SequencerAminoMsg): Sequencer {
    return Sequencer.fromAmino(object.value);
  },
  fromProtoMsg(message: SequencerProtoMsg): Sequencer {
    return Sequencer.decode(message.value);
  },
  toProto(message: Sequencer): Uint8Array {
    return Sequencer.encode(message).finish();
  },
  toProtoMsg(message: Sequencer): SequencerProtoMsg {
    return {
      typeUrl: "/dymensionxyz.dymension.sequencer.Sequencer",
      value: Sequencer.encode(message).finish()
    };
  }
};
export const Cosmos_cryptoPubKey_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Cosmos_cryptoPubKey_FromAmino = (content: AnyAmino) => {
  return encodePubkey(content);
};
export const Cosmos_cryptoPubKey_ToAmino = (content: Any): Pubkey | null => {
  return decodePubkey(content);
};