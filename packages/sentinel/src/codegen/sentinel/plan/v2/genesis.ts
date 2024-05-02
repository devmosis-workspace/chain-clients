import { Plan, PlanAmino, PlanSDKType } from "./plan";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GenesisPlan {
  plan: Plan;
  nodes: string[];
}
export interface GenesisPlanProtoMsg {
  typeUrl: "/sentinel.plan.v2.GenesisPlan";
  value: Uint8Array;
}
export interface GenesisPlanAmino {
  plan?: PlanAmino;
  nodes?: string[];
}
export interface GenesisPlanAminoMsg {
  type: "/sentinel.plan.v2.GenesisPlan";
  value: GenesisPlanAmino;
}
export interface GenesisPlanSDKType {
  plan: PlanSDKType;
  nodes: string[];
}
function createBaseGenesisPlan(): GenesisPlan {
  return {
    plan: Plan.fromPartial({}),
    nodes: []
  };
}
export const GenesisPlan = {
  typeUrl: "/sentinel.plan.v2.GenesisPlan",
  encode(message: GenesisPlan, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nodes) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): GenesisPlan {
    return {
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined,
      nodes: Array.isArray(object?.nodes) ? object.nodes.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<GenesisPlan>): GenesisPlan {
    const message = createBaseGenesisPlan();
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    message.nodes = object.nodes?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GenesisPlanAmino): GenesisPlan {
    const message = createBaseGenesisPlan();
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromAmino(object.plan);
    }
    message.nodes = object.nodes?.map(e => e) || [];
    return message;
  },
  toAmino(message: GenesisPlan): GenesisPlanAmino {
    const obj: any = {};
    obj.plan = message.plan ? Plan.toAmino(message.plan) : undefined;
    if (message.nodes) {
      obj.nodes = message.nodes.map(e => e);
    } else {
      obj.nodes = message.nodes;
    }
    return obj;
  },
  fromAminoMsg(object: GenesisPlanAminoMsg): GenesisPlan {
    return GenesisPlan.fromAmino(object.value);
  },
  fromProtoMsg(message: GenesisPlanProtoMsg): GenesisPlan {
    return GenesisPlan.decode(message.value);
  },
  toProto(message: GenesisPlan): Uint8Array {
    return GenesisPlan.encode(message).finish();
  },
  toProtoMsg(message: GenesisPlan): GenesisPlanProtoMsg {
    return {
      typeUrl: "/sentinel.plan.v2.GenesisPlan",
      value: GenesisPlan.encode(message).finish()
    };
  }
};