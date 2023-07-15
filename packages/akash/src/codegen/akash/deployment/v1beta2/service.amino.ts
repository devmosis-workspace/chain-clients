import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../../../helpers";
import { endpoint_KindFromJSON } from "../../base/v1beta2/endpoint";
import { MsgCreateDeployment, MsgDepositDeployment, MsgUpdateDeployment, MsgCloseDeployment } from "./deploymentmsg";
import { MsgCloseGroup, MsgPauseGroup, MsgStartGroup } from "./groupmsg";
export interface MsgCreateDeploymentAminoType extends AminoMsg {
  type: "/akash.deployment.v1beta2.MsgCreateDeployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
    groups: {
      name: string;
      requirements: {
        signed_by: {
          all_of: string[];
          any_of: string[];
        };
        attributes: {
          key: string;
          value: string;
        }[];
      };
      resources: {
        resources: {
          cpu: {
            units: {
              val: Uint8Array;
            };
            attributes: {
              key: string;
              value: string;
            }[];
          };
          memory: {
            quantity: {
              val: Uint8Array;
            };
            attributes: {
              key: string;
              value: string;
            }[];
          };
          storage: {
            name: string;
            quantity: {
              val: Uint8Array;
            };
            attributes: {
              key: string;
              value: string;
            }[];
          }[];
          endpoints: {
            kind: number;
            sequence_number: number;
          }[];
        };
        count: number;
        price: {
          denom: string;
          amount: string;
        };
      }[];
    }[];
    version: Uint8Array;
    deposit: {
      denom: string;
      amount: string;
    };
    depositor: string;
  };
}
export interface MsgDepositDeploymentAminoType extends AminoMsg {
  type: "/akash.deployment.v1beta2.MsgDepositDeployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
    amount: {
      denom: string;
      amount: string;
    };
    depositor: string;
  };
}
export interface MsgUpdateDeploymentAminoType extends AminoMsg {
  type: "/akash.deployment.v1beta2.MsgUpdateDeployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
    version: Uint8Array;
  };
}
export interface MsgCloseDeploymentAminoType extends AminoMsg {
  type: "/akash.deployment.v1beta2.MsgCloseDeployment";
  value: {
    id: {
      owner: string;
      dseq: string;
    };
  };
}
export interface MsgCloseGroupAminoType extends AminoMsg {
  type: "/akash.deployment.v1beta2.MsgCloseGroup";
  value: {
    id: {
      owner: string;
      dseq: string;
      gseq: number;
    };
  };
}
export interface MsgPauseGroupAminoType extends AminoMsg {
  type: "/akash.deployment.v1beta2.MsgPauseGroup";
  value: {
    id: {
      owner: string;
      dseq: string;
      gseq: number;
    };
  };
}
export interface MsgStartGroupAminoType extends AminoMsg {
  type: "/akash.deployment.v1beta2.MsgStartGroup";
  value: {
    id: {
      owner: string;
      dseq: string;
      gseq: number;
    };
  };
}
export const AminoConverter = {
  "/akash.deployment.v1beta2.MsgCreateDeployment": {
    aminoType: "/akash.deployment.v1beta2.MsgCreateDeployment",
    toAmino: ({
      id,
      groups,
      version,
      deposit,
      depositor
    }: MsgCreateDeployment): MsgCreateDeploymentAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        },
        groups: groups.map(el0 => ({
          name: el0.name,
          requirements: {
            signed_by: {
              all_of: el0.requirements.signedBy.allOf,
              any_of: el0.requirements.signedBy.anyOf
            },
            attributes: el0.requirements.attributes.map(el1 => ({
              key: el1.key,
              value: el1.value
            }))
          },
          resources: el0.resources.map(el1 => ({
            resources: {
              cpu: {
                units: {
                  val: el1.resources.cpu.units.val
                },
                attributes: el1.resources.cpu.attributes.map(el2 => ({
                  key: el2.key,
                  value: el2.value
                }))
              },
              memory: {
                quantity: {
                  val: el1.resources.memory.quantity.val
                },
                attributes: el1.resources.memory.attributes.map(el2 => ({
                  key: el2.key,
                  value: el2.value
                }))
              },
              storage: el1.resources.storage.map(el2 => ({
                name: el2.name,
                quantity: {
                  val: el2.quantity.val
                },
                attributes: el2.attributes.map(el3 => ({
                  key: el3.key,
                  value: el3.value
                }))
              })),
              endpoints: el1.resources.endpoints.map(el2 => ({
                kind: el2.kind,
                sequence_number: el2.sequenceNumber
              }))
            },
            count: el1.count,
            price: {
              denom: el1.price.denom,
              amount: el1.price.amount
            }
          }))
        })),
        version,
        deposit: {
          denom: deposit.denom,
          amount: Long.fromValue(deposit.amount).toString()
        },
        depositor
      };
    },
    fromAmino: ({
      id,
      groups,
      version,
      deposit,
      depositor
    }: MsgCreateDeploymentAminoType["value"]): MsgCreateDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq)
        },
        groups: groups.map(el0 => ({
          name: el0.name,
          requirements: {
            signedBy: {
              allOf: el0.requirements.signed_by.all_of,
              anyOf: el0.requirements.signed_by.any_of
            },
            attributes: el0.requirements.attributes.map(el2 => ({
              key: el2.key,
              value: el2.value
            }))
          },
          resources: el0.resources.map(el1 => ({
            resources: {
              cpu: {
                units: {
                  val: el1.resources.cpu.units.val
                },
                attributes: el1.resources.cpu.attributes.map(el4 => ({
                  key: el4.key,
                  value: el4.value
                }))
              },
              memory: {
                quantity: {
                  val: el1.resources.memory.quantity.val
                },
                attributes: el1.resources.memory.attributes.map(el4 => ({
                  key: el4.key,
                  value: el4.value
                }))
              },
              storage: el1.resources.storage.map(el3 => ({
                name: el3.name,
                quantity: {
                  val: el3.quantity.val
                },
                attributes: el3.attributes.map(el4 => ({
                  key: el4.key,
                  value: el4.value
                }))
              })),
              endpoints: el1.resources.endpoints.map(el3 => ({
                kind: endpoint_KindFromJSON(el3.kind),
                sequenceNumber: el3.sequence_number
              }))
            },
            count: el1.count,
            price: {
              denom: el1.price.denom,
              amount: el1.price.amount
            }
          }))
        })),
        version,
        deposit: {
          denom: deposit.denom,
          amount: deposit.amount
        },
        depositor
      };
    }
  },
  "/akash.deployment.v1beta2.MsgDepositDeployment": {
    aminoType: "/akash.deployment.v1beta2.MsgDepositDeployment",
    toAmino: ({
      id,
      amount,
      depositor
    }: MsgDepositDeployment): MsgDepositDeploymentAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        },
        amount: {
          denom: amount.denom,
          amount: Long.fromValue(amount.amount).toString()
        },
        depositor
      };
    },
    fromAmino: ({
      id,
      amount,
      depositor
    }: MsgDepositDeploymentAminoType["value"]): MsgDepositDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq)
        },
        amount: {
          denom: amount.denom,
          amount: amount.amount
        },
        depositor
      };
    }
  },
  "/akash.deployment.v1beta2.MsgUpdateDeployment": {
    aminoType: "/akash.deployment.v1beta2.MsgUpdateDeployment",
    toAmino: ({
      id,
      version
    }: MsgUpdateDeployment): MsgUpdateDeploymentAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        },
        version
      };
    },
    fromAmino: ({
      id,
      version
    }: MsgUpdateDeploymentAminoType["value"]): MsgUpdateDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq)
        },
        version
      };
    }
  },
  "/akash.deployment.v1beta2.MsgCloseDeployment": {
    aminoType: "/akash.deployment.v1beta2.MsgCloseDeployment",
    toAmino: ({
      id
    }: MsgCloseDeployment): MsgCloseDeploymentAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString()
        }
      };
    },
    fromAmino: ({
      id
    }: MsgCloseDeploymentAminoType["value"]): MsgCloseDeployment => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq)
        }
      };
    }
  },
  "/akash.deployment.v1beta2.MsgCloseGroup": {
    aminoType: "/akash.deployment.v1beta2.MsgCloseGroup",
    toAmino: ({
      id
    }: MsgCloseGroup): MsgCloseGroupAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString(),
          gseq: id.gseq
        }
      };
    },
    fromAmino: ({
      id
    }: MsgCloseGroupAminoType["value"]): MsgCloseGroup => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq),
          gseq: id.gseq
        }
      };
    }
  },
  "/akash.deployment.v1beta2.MsgPauseGroup": {
    aminoType: "/akash.deployment.v1beta2.MsgPauseGroup",
    toAmino: ({
      id
    }: MsgPauseGroup): MsgPauseGroupAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString(),
          gseq: id.gseq
        }
      };
    },
    fromAmino: ({
      id
    }: MsgPauseGroupAminoType["value"]): MsgPauseGroup => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq),
          gseq: id.gseq
        }
      };
    }
  },
  "/akash.deployment.v1beta2.MsgStartGroup": {
    aminoType: "/akash.deployment.v1beta2.MsgStartGroup",
    toAmino: ({
      id
    }: MsgStartGroup): MsgStartGroupAminoType["value"] => {
      return {
        id: {
          owner: id.owner,
          dseq: id.dseq.toString(),
          gseq: id.gseq
        }
      };
    },
    fromAmino: ({
      id
    }: MsgStartGroupAminoType["value"]): MsgStartGroup => {
      return {
        id: {
          owner: id.owner,
          dseq: Long.fromString(id.dseq),
          gseq: id.gseq
        }
      };
    }
  }
};