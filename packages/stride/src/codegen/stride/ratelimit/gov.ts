import { Long, isSet } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface AddRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: Long;
  deposit: string;
}
export interface AddRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: Long;
  deposit: string;
}
export interface UpdateRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  maxPercentSend: string;
  maxPercentRecv: string;
  durationHours: Long;
  deposit: string;
}
export interface UpdateRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  max_percent_send: string;
  max_percent_recv: string;
  duration_hours: Long;
  deposit: string;
}
export interface RemoveRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  deposit: string;
}
export interface RemoveRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  deposit: string;
}
export interface ResetRateLimitProposal {
  title: string;
  description: string;
  denom: string;
  channelId: string;
  deposit: string;
}
export interface ResetRateLimitProposalSDKType {
  title: string;
  description: string;
  denom: string;
  channel_id: string;
  deposit: string;
}
function createBaseAddRateLimitProposal(): AddRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: Long.UZERO,
    deposit: ""
  };
}
export const AddRateLimitProposal = {
  encode(message: AddRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(42).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(50).string(message.maxPercentRecv);
    }
    if (!message.durationHours.isZero()) {
      writer.uint32(56).uint64(message.durationHours);
    }
    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): AddRateLimitProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      maxPercentSend: isSet(object.maxPercentSend) ? String(object.maxPercentSend) : "",
      maxPercentRecv: isSet(object.maxPercentRecv) ? String(object.maxPercentRecv) : "",
      durationHours: isSet(object.durationHours) ? Long.fromValue(object.durationHours) : Long.UZERO,
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<AddRateLimitProposal>): AddRateLimitProposal {
    const message = createBaseAddRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? Long.fromValue(object.durationHours) : Long.UZERO;
    message.deposit = object.deposit ?? "";
    return message;
  }
};
function createBaseUpdateRateLimitProposal(): UpdateRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    maxPercentSend: "",
    maxPercentRecv: "",
    durationHours: Long.UZERO,
    deposit: ""
  };
}
export const UpdateRateLimitProposal = {
  encode(message: UpdateRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.maxPercentSend !== "") {
      writer.uint32(42).string(message.maxPercentSend);
    }
    if (message.maxPercentRecv !== "") {
      writer.uint32(50).string(message.maxPercentRecv);
    }
    if (!message.durationHours.isZero()) {
      writer.uint32(56).uint64(message.durationHours);
    }
    if (message.deposit !== "") {
      writer.uint32(66).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): UpdateRateLimitProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      maxPercentSend: isSet(object.maxPercentSend) ? String(object.maxPercentSend) : "",
      maxPercentRecv: isSet(object.maxPercentRecv) ? String(object.maxPercentRecv) : "",
      durationHours: isSet(object.durationHours) ? Long.fromValue(object.durationHours) : Long.UZERO,
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<UpdateRateLimitProposal>): UpdateRateLimitProposal {
    const message = createBaseUpdateRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.maxPercentSend = object.maxPercentSend ?? "";
    message.maxPercentRecv = object.maxPercentRecv ?? "";
    message.durationHours = object.durationHours !== undefined && object.durationHours !== null ? Long.fromValue(object.durationHours) : Long.UZERO;
    message.deposit = object.deposit ?? "";
    return message;
  }
};
function createBaseRemoveRateLimitProposal(): RemoveRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    deposit: ""
  };
}
export const RemoveRateLimitProposal = {
  encode(message: RemoveRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): RemoveRateLimitProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<RemoveRateLimitProposal>): RemoveRateLimitProposal {
    const message = createBaseRemoveRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  }
};
function createBaseResetRateLimitProposal(): ResetRateLimitProposal {
  return {
    title: "",
    description: "",
    denom: "",
    channelId: "",
    deposit: ""
  };
}
export const ResetRateLimitProposal = {
  encode(message: ResetRateLimitProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.denom !== "") {
      writer.uint32(26).string(message.denom);
    }
    if (message.channelId !== "") {
      writer.uint32(34).string(message.channelId);
    }
    if (message.deposit !== "") {
      writer.uint32(42).string(message.deposit);
    }
    return writer;
  },
  fromJSON(object: any): ResetRateLimitProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      channelId: isSet(object.channelId) ? String(object.channelId) : "",
      deposit: isSet(object.deposit) ? String(object.deposit) : ""
    };
  },
  fromPartial(object: Partial<ResetRateLimitProposal>): ResetRateLimitProposal {
    const message = createBaseResetRateLimitProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.denom = object.denom ?? "";
    message.channelId = object.channelId ?? "";
    message.deposit = object.deposit ?? "";
    return message;
  }
};