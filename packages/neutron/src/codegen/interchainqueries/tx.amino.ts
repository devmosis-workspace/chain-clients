import { AminoMsg } from "@cosmjs/amino";
import { Long } from "../helpers";
import { MsgRegisterInterchainQuery, MsgSubmitQueryResult, MsgRemoveInterchainQueryRequest, MsgUpdateInterchainQueryRequest } from "./tx";
export interface MsgRegisterInterchainQueryAminoType extends AminoMsg {
  type: "/neutron.interchainqueries.MsgRegisterInterchainQuery";
  value: {
    query_type: string;
    keys: {
      path: string;
      key: Uint8Array;
    }[];
    transactions_filter: string;
    connection_id: string;
    update_period: string;
    sender: string;
  };
}
export interface MsgSubmitQueryResultAminoType extends AminoMsg {
  type: "/neutron.interchainqueries.MsgSubmitQueryResult";
  value: {
    query_id: string;
    sender: string;
    client_id: string;
    result: {
      kv_results: {
        storage_prefix: string;
        key: Uint8Array;
        value: Uint8Array;
        Proof: {
          ops: {
            type: string;
            key: Uint8Array;
            data: Uint8Array;
          }[];
        };
      }[];
      block: {
        next_block_header: {
          type_url: string;
          value: Uint8Array;
        };
        header: {
          type_url: string;
          value: Uint8Array;
        };
        tx: {
          response: {
            code: number;
            data: Uint8Array;
            log: string;
            info: string;
            gas_wanted: string;
            gas_used: string;
            events: {
              type: string;
              attributes: {
                key: Uint8Array;
                value: Uint8Array;
                index: boolean;
              }[];
            }[];
            codespace: string;
          };
          delivery_proof: {
            total: string;
            index: string;
            leaf_hash: Uint8Array;
            aunts: Uint8Array[];
          };
          inclusion_proof: {
            total: string;
            index: string;
            leaf_hash: Uint8Array;
            aunts: Uint8Array[];
          };
          data: Uint8Array;
        };
      };
      height: string;
      revision: string;
      allow_kv_callbacks: boolean;
    };
  };
}
export interface MsgRemoveInterchainQueryRequestAminoType extends AminoMsg {
  type: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest";
  value: {
    query_id: string;
    sender: string;
  };
}
export interface MsgUpdateInterchainQueryRequestAminoType extends AminoMsg {
  type: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest";
  value: {
    query_id: string;
    new_keys: {
      path: string;
      key: Uint8Array;
    }[];
    new_update_period: string;
    new_transactions_filter: string;
    sender: string;
  };
}
export const AminoConverter = {
  "/neutron.interchainqueries.MsgRegisterInterchainQuery": {
    aminoType: "/neutron.interchainqueries.MsgRegisterInterchainQuery",
    toAmino: ({
      queryType,
      keys,
      transactionsFilter,
      connectionId,
      updatePeriod,
      sender
    }: MsgRegisterInterchainQuery): MsgRegisterInterchainQueryAminoType["value"] => {
      return {
        query_type: queryType,
        keys: keys.map(el0 => ({
          path: el0.path,
          key: el0.key
        })),
        transactions_filter: transactionsFilter,
        connection_id: connectionId,
        update_period: updatePeriod.toString(),
        sender
      };
    },
    fromAmino: ({
      query_type,
      keys,
      transactions_filter,
      connection_id,
      update_period,
      sender
    }: MsgRegisterInterchainQueryAminoType["value"]): MsgRegisterInterchainQuery => {
      return {
        queryType: query_type,
        keys: keys.map(el0 => ({
          path: el0.path,
          key: el0.key
        })),
        transactionsFilter: transactions_filter,
        connectionId: connection_id,
        updatePeriod: Long.fromString(update_period),
        sender
      };
    }
  },
  "/neutron.interchainqueries.MsgSubmitQueryResult": {
    aminoType: "/neutron.interchainqueries.MsgSubmitQueryResult",
    toAmino: ({
      queryId,
      sender,
      clientId,
      result
    }: MsgSubmitQueryResult): MsgSubmitQueryResultAminoType["value"] => {
      return {
        query_id: queryId.toString(),
        sender,
        client_id: clientId,
        result: {
          kv_results: result.kvResults.map(el0 => ({
            storage_prefix: el0.storagePrefix,
            key: el0.key,
            value: el0.value,
            Proof: {
              ops: el0.Proof.ops.map(el1 => ({
                type: el1.type,
                key: el1.key,
                data: el1.data
              }))
            }
          })),
          block: {
            next_block_header: {
              type_url: result.block.nextBlockHeader.typeUrl,
              value: result.block.nextBlockHeader.value
            },
            header: {
              type_url: result.block.header.typeUrl,
              value: result.block.header.value
            },
            tx: {
              response: {
                code: result.block.tx.response.code,
                data: result.block.tx.response.data,
                log: result.block.tx.response.log,
                info: result.block.tx.response.info,
                gas_wanted: result.block.tx.response.gasWanted.toString(),
                gas_used: result.block.tx.response.gasUsed.toString(),
                events: result.block.tx.response.events.map(el0 => ({
                  type: el0.type,
                  attributes: el0.attributes.map(el1 => ({
                    key: el1.key,
                    value: el1.value,
                    index: el1.index
                  }))
                })),
                codespace: result.block.tx.response.codespace
              },
              delivery_proof: {
                total: result.block.tx.deliveryProof.total.toString(),
                index: result.block.tx.deliveryProof.index.toString(),
                leaf_hash: result.block.tx.deliveryProof.leafHash,
                aunts: result.block.tx.deliveryProof.aunts
              },
              inclusion_proof: {
                total: result.block.tx.inclusionProof.total.toString(),
                index: result.block.tx.inclusionProof.index.toString(),
                leaf_hash: result.block.tx.inclusionProof.leafHash,
                aunts: result.block.tx.inclusionProof.aunts
              },
              data: result.block.tx.data
            }
          },
          height: result.height.toString(),
          revision: result.revision.toString(),
          allow_kv_callbacks: result.allowKvCallbacks
        }
      };
    },
    fromAmino: ({
      query_id,
      sender,
      client_id,
      result
    }: MsgSubmitQueryResultAminoType["value"]): MsgSubmitQueryResult => {
      return {
        queryId: Long.fromString(query_id),
        sender,
        clientId: client_id,
        result: {
          kvResults: result.kv_results.map(el1 => ({
            storagePrefix: el1.storage_prefix,
            key: el1.key,
            value: el1.value,
            Proof: {
              ops: el1.Proof.ops.map(el3 => ({
                type: el3.type,
                key: el3.key,
                data: el3.data
              }))
            }
          })),
          block: {
            nextBlockHeader: {
              typeUrl: result.block.next_block_header.type_url,
              value: result.block.next_block_header.value
            },
            header: {
              typeUrl: result.block.header.type_url,
              value: result.block.header.value
            },
            tx: {
              response: {
                code: result.block.tx.response.code,
                data: result.block.tx.response.data,
                log: result.block.tx.response.log,
                info: result.block.tx.response.info,
                gasWanted: Long.fromString(result.block.tx.response.gas_wanted),
                gasUsed: Long.fromString(result.block.tx.response.gas_used),
                events: result.block.tx.response.events.map(el4 => ({
                  type: el4.type,
                  attributes: el4.attributes.map(el5 => ({
                    key: el5.key,
                    value: el5.value,
                    index: el5.index
                  }))
                })),
                codespace: result.block.tx.response.codespace
              },
              deliveryProof: {
                total: Long.fromString(result.block.tx.delivery_proof.total),
                index: Long.fromString(result.block.tx.delivery_proof.index),
                leafHash: result.block.tx.delivery_proof.leaf_hash,
                aunts: result.block.tx.delivery_proof.aunts
              },
              inclusionProof: {
                total: Long.fromString(result.block.tx.inclusion_proof.total),
                index: Long.fromString(result.block.tx.inclusion_proof.index),
                leafHash: result.block.tx.inclusion_proof.leaf_hash,
                aunts: result.block.tx.inclusion_proof.aunts
              },
              data: result.block.tx.data
            }
          },
          height: Long.fromString(result.height),
          revision: Long.fromString(result.revision),
          allowKvCallbacks: result.allow_kv_callbacks
        }
      };
    }
  },
  "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest": {
    aminoType: "/neutron.interchainqueries.MsgRemoveInterchainQueryRequest",
    toAmino: ({
      queryId,
      sender
    }: MsgRemoveInterchainQueryRequest): MsgRemoveInterchainQueryRequestAminoType["value"] => {
      return {
        query_id: queryId.toString(),
        sender
      };
    },
    fromAmino: ({
      query_id,
      sender
    }: MsgRemoveInterchainQueryRequestAminoType["value"]): MsgRemoveInterchainQueryRequest => {
      return {
        queryId: Long.fromString(query_id),
        sender
      };
    }
  },
  "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest": {
    aminoType: "/neutron.interchainqueries.MsgUpdateInterchainQueryRequest",
    toAmino: ({
      queryId,
      newKeys,
      newUpdatePeriod,
      newTransactionsFilter,
      sender
    }: MsgUpdateInterchainQueryRequest): MsgUpdateInterchainQueryRequestAminoType["value"] => {
      return {
        query_id: queryId.toString(),
        new_keys: newKeys.map(el0 => ({
          path: el0.path,
          key: el0.key
        })),
        new_update_period: newUpdatePeriod.toString(),
        new_transactions_filter: newTransactionsFilter,
        sender
      };
    },
    fromAmino: ({
      query_id,
      new_keys,
      new_update_period,
      new_transactions_filter,
      sender
    }: MsgUpdateInterchainQueryRequestAminoType["value"]): MsgUpdateInterchainQueryRequest => {
      return {
        queryId: Long.fromString(query_id),
        newKeys: new_keys.map(el0 => ({
          path: el0.path,
          key: el0.key
        })),
        newUpdatePeriod: Long.fromString(new_update_period),
        newTransactionsFilter: new_transactions_filter,
        sender
      };
    }
  }
};