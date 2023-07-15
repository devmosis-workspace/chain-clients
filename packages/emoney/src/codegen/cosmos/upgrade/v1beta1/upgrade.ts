import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Any, AnySDKType } from "../../../google/protobuf/any";
import { Long, isSet, fromJsonTimestamp } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name: string;
  /**
   * The time after which the upgrade must be performed.
   * Leave set to its zero value to use a pre-defined Height instead.
   */
  time?: Timestamp;
  /**
   * The height at which the upgrade must be performed.
   * Only used if Time is not set.
   */
  height: Long;
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info: string;
  /**
   * IBC-enabled chains can opt-in to including the upgraded client state in its upgrade plan
   * This will make the chain commit to the correct upgraded (self) client state before the upgrade occurs,
   * so that connecting chains can verify that the new upgraded client is valid by verifying a proof on the
   * previous version of the chain.
   * This will allow IBC connections to persist smoothly across planned chain upgrades
   */
  upgradedClientState?: Any;
}
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface PlanSDKType {
  name: string;
  time?: TimestampSDKType;
  height: Long;
  info: string;
  upgraded_client_state?: AnySDKType;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposal {
  title: string;
  description: string;
  plan?: Plan;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposalSDKType {
  title: string;
  description: string;
  plan?: PlanSDKType;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposal {
  title: string;
  description: string;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposalSDKType {
  title: string;
  description: string;
}
function createBasePlan(): Plan {
  return {
    name: "",
    time: undefined,
    height: Long.ZERO,
    info: "",
    upgradedClientState: undefined
  };
}
export const Plan = {
  encode(message: Plan, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.time !== undefined) {
      Timestamp.encode(message.time, writer.uint32(18).fork()).ldelim();
    }
    if (!message.height.isZero()) {
      writer.uint32(24).int64(message.height);
    }
    if (message.info !== "") {
      writer.uint32(34).string(message.info);
    }
    if (message.upgradedClientState !== undefined) {
      Any.encode(message.upgradedClientState, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): Plan {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      time: isSet(object.time) ? fromJsonTimestamp(object.time) : undefined,
      height: isSet(object.height) ? Long.fromValue(object.height) : Long.ZERO,
      info: isSet(object.info) ? String(object.info) : "",
      upgradedClientState: isSet(object.upgradedClientState) ? Any.fromJSON(object.upgradedClientState) : undefined
    };
  },
  fromPartial(object: Partial<Plan>): Plan {
    const message = createBasePlan();
    message.name = object.name ?? "";
    message.time = object.time !== undefined && object.time !== null ? Timestamp.fromPartial(object.time) : undefined;
    message.height = object.height !== undefined && object.height !== null ? Long.fromValue(object.height) : Long.ZERO;
    message.info = object.info ?? "";
    message.upgradedClientState = object.upgradedClientState !== undefined && object.upgradedClientState !== null ? Any.fromPartial(object.upgradedClientState) : undefined;
    return message;
  }
};
function createBaseSoftwareUpgradeProposal(): SoftwareUpgradeProposal {
  return {
    title: "",
    description: "",
    plan: undefined
  };
}
export const SoftwareUpgradeProposal = {
  encode(message: SoftwareUpgradeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): SoftwareUpgradeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined
    };
  },
  fromPartial(object: Partial<SoftwareUpgradeProposal>): SoftwareUpgradeProposal {
    const message = createBaseSoftwareUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  }
};
function createBaseCancelSoftwareUpgradeProposal(): CancelSoftwareUpgradeProposal {
  return {
    title: "",
    description: ""
  };
}
export const CancelSoftwareUpgradeProposal = {
  encode(message: CancelSoftwareUpgradeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): CancelSoftwareUpgradeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<CancelSoftwareUpgradeProposal>): CancelSoftwareUpgradeProposal {
    const message = createBaseCancelSoftwareUpgradeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    return message;
  }
};