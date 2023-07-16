import { IdentifiedPacketFees, IdentifiedPacketFeesSDKType } from "./fee";
import { PacketId, PacketIdSDKType } from "../../../core/channel/v1/channel";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../../helpers";
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisState {
  /** list of identified packet fees */
  identifiedFees: IdentifiedPacketFees[];
  /** list of fee enabled channels */
  feeEnabledChannels: FeeEnabledChannel[];
  /** list of registered payees */
  registeredPayees: RegisteredPayee[];
  /** list of registered counterparty payees */
  registeredCounterpartyPayees: RegisteredCounterpartyPayee[];
  /** list of forward relayer addresses */
  forwardRelayers: ForwardRelayerAddress[];
}
/** GenesisState defines the ICS29 fee middleware genesis state */
export interface GenesisStateSDKType {
  identified_fees: IdentifiedPacketFeesSDKType[];
  fee_enabled_channels: FeeEnabledChannelSDKType[];
  registered_payees: RegisteredPayeeSDKType[];
  registered_counterparty_payees: RegisteredCounterpartyPayeeSDKType[];
  forward_relayers: ForwardRelayerAddressSDKType[];
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannel {
  /** unique port identifier */
  portId: string;
  /** unique channel identifier */
  channelId: string;
}
/** FeeEnabledChannel contains the PortID & ChannelID for a fee enabled channel */
export interface FeeEnabledChannelSDKType {
  port_id: string;
  channel_id: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the payee address */
  payee: string;
}
/** RegisteredPayee contains the relayer address and payee address for a specific channel */
export interface RegisteredPayeeSDKType {
  channel_id: string;
  relayer: string;
  payee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayee {
  /** unique channel identifier */
  channelId: string;
  /** the relayer address */
  relayer: string;
  /** the counterparty payee address */
  counterpartyPayee: string;
}
/**
 * RegisteredCounterpartyPayee contains the relayer address and counterparty payee address for a specific channel (used
 * for recv fee distribution)
 */
export interface RegisteredCounterpartyPayeeSDKType {
  channel_id: string;
  relayer: string;
  counterparty_payee: string;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddress {
  /** the forward relayer address */
  address: string;
  /** unique packet identifer comprised of the channel ID, port ID and sequence */
  packetId?: PacketId;
}
/** ForwardRelayerAddress contains the forward relayer address and PacketId used for async acknowledgements */
export interface ForwardRelayerAddressSDKType {
  address: string;
  packet_id?: PacketIdSDKType;
}
function createBaseGenesisState(): GenesisState {
  return {
    identifiedFees: [],
    feeEnabledChannels: [],
    registeredPayees: [],
    registeredCounterpartyPayees: [],
    forwardRelayers: []
  };
}
export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.identifiedFees) {
      IdentifiedPacketFees.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.feeEnabledChannels) {
      FeeEnabledChannel.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.registeredPayees) {
      RegisteredPayee.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.registeredCounterpartyPayees) {
      RegisteredCounterpartyPayee.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    for (const v of message.forwardRelayers) {
      ForwardRelayerAddress.encode(v!, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): GenesisState {
    return {
      identifiedFees: Array.isArray(object?.identifiedFees) ? object.identifiedFees.map((e: any) => IdentifiedPacketFees.fromJSON(e)) : [],
      feeEnabledChannels: Array.isArray(object?.feeEnabledChannels) ? object.feeEnabledChannels.map((e: any) => FeeEnabledChannel.fromJSON(e)) : [],
      registeredPayees: Array.isArray(object?.registeredPayees) ? object.registeredPayees.map((e: any) => RegisteredPayee.fromJSON(e)) : [],
      registeredCounterpartyPayees: Array.isArray(object?.registeredCounterpartyPayees) ? object.registeredCounterpartyPayees.map((e: any) => RegisteredCounterpartyPayee.fromJSON(e)) : [],
      forwardRelayers: Array.isArray(object?.forwardRelayers) ? object.forwardRelayers.map((e: any) => ForwardRelayerAddress.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisState>): GenesisState {
    const message = createBaseGenesisState();
    message.identifiedFees = object.identifiedFees?.map(e => IdentifiedPacketFees.fromPartial(e)) || [];
    message.feeEnabledChannels = object.feeEnabledChannels?.map(e => FeeEnabledChannel.fromPartial(e)) || [];
    message.registeredPayees = object.registeredPayees?.map(e => RegisteredPayee.fromPartial(e)) || [];
    message.registeredCounterpartyPayees = object.registeredCounterpartyPayees?.map(e => RegisteredCounterpartyPayee.fromPartial(e)) || [];
    message.forwardRelayers = object.forwardRelayers?.map(e => ForwardRelayerAddress.fromPartial(e)) || [];
    return message;
  }
};
function createBaseFeeEnabledChannel(): FeeEnabledChannel {
  return {
    portId: "",
    channelId: ""
  };
}
export const FeeEnabledChannel = {
  encode(message: FeeEnabledChannel, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.portId !== "") {
      writer.uint32(10).string(message.portId);
    }
    if (message.channelId !== "") {
      writer.uint32(18).string(message.channelId);
    }
    return writer;
  },
  fromJSON(object: any): FeeEnabledChannel {
    return {
      portId: isSet(object.portId) ? String(object.portId) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : ""
    };
  },
  fromPartial(object: Partial<FeeEnabledChannel>): FeeEnabledChannel {
    const message = createBaseFeeEnabledChannel();
    message.portId = object.portId ?? "";
    message.channelId = object.channelId ?? "";
    return message;
  }
};
function createBaseRegisteredPayee(): RegisteredPayee {
  return {
    channelId: "",
    relayer: "",
    payee: ""
  };
}
export const RegisteredPayee = {
  encode(message: RegisteredPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.payee !== "") {
      writer.uint32(26).string(message.payee);
    }
    return writer;
  },
  fromJSON(object: any): RegisteredPayee {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      payee: isSet(object.payee) ? String(object.payee) : ""
    };
  },
  fromPartial(object: Partial<RegisteredPayee>): RegisteredPayee {
    const message = createBaseRegisteredPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.payee = object.payee ?? "";
    return message;
  }
};
function createBaseRegisteredCounterpartyPayee(): RegisteredCounterpartyPayee {
  return {
    channelId: "",
    relayer: "",
    counterpartyPayee: ""
  };
}
export const RegisteredCounterpartyPayee = {
  encode(message: RegisteredCounterpartyPayee, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.channelId !== "") {
      writer.uint32(10).string(message.channelId);
    }
    if (message.relayer !== "") {
      writer.uint32(18).string(message.relayer);
    }
    if (message.counterpartyPayee !== "") {
      writer.uint32(26).string(message.counterpartyPayee);
    }
    return writer;
  },
  fromJSON(object: any): RegisteredCounterpartyPayee {
    return {
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      relayer: isSet(object.relayer) ? String(object.relayer) : "",
      counterpartyPayee: isSet(object.counterpartyPayee) ? String(object.counterpartyPayee) : ""
    };
  },
  fromPartial(object: Partial<RegisteredCounterpartyPayee>): RegisteredCounterpartyPayee {
    const message = createBaseRegisteredCounterpartyPayee();
    message.channelId = object.channelId ?? "";
    message.relayer = object.relayer ?? "";
    message.counterpartyPayee = object.counterpartyPayee ?? "";
    return message;
  }
};
function createBaseForwardRelayerAddress(): ForwardRelayerAddress {
  return {
    address: "",
    packetId: undefined
  };
}
export const ForwardRelayerAddress = {
  encode(message: ForwardRelayerAddress, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.packetId !== undefined) {
      PacketId.encode(message.packetId, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): ForwardRelayerAddress {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      packetId: isSet(object.packetId) ? PacketId.fromJSON(object.packetId) : undefined
    };
  },
  fromPartial(object: Partial<ForwardRelayerAddress>): ForwardRelayerAddress {
    const message = createBaseForwardRelayerAddress();
    message.address = object.address ?? "";
    message.packetId = object.packetId !== undefined && object.packetId !== null ? PacketId.fromPartial(object.packetId) : undefined;
    return message;
  }
};