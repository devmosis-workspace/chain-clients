import { GeneratedType, Registry, OfflineSigner } from "@cosmjs/proto-signing";
import { defaultRegistryTypes, AminoTypes, SigningStargateClient } from "@cosmjs/stargate";
import { HttpEndpoint } from "@cosmjs/tendermint-rpc";
import * as iovEscrowV1beta1TxRegistry from "../iov/escrow/v1beta1/tx.registry";
import * as iovStarnameV1beta1TxRegistry from "../iov/starname/v1beta1/tx.registry";
import * as iovEscrowV1beta1TxAmino from "../iov/escrow/v1beta1/tx.amino";
import * as iovStarnameV1beta1TxAmino from "../iov/starname/v1beta1/tx.amino";
export const starnamedAminoConverters = {
  ...iovEscrowV1beta1TxAmino.AminoConverter,
  ...iovStarnameV1beta1TxAmino.AminoConverter
};
export const starnamedProtoRegistry: ReadonlyArray<[string, GeneratedType]> = [...iovEscrowV1beta1TxRegistry.registry, ...iovStarnameV1beta1TxRegistry.registry];
export const getSigningStarnamedClientOptions = ({
  defaultTypes = defaultRegistryTypes
}: {
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
} = {}): {
  registry: Registry;
  aminoTypes: AminoTypes;
} => {
  const registry = new Registry([...defaultTypes, ...starnamedProtoRegistry]);
  const aminoTypes = new AminoTypes({
    ...starnamedAminoConverters
  });
  return {
    registry,
    aminoTypes
  };
};
export const getSigningStarnamedClient = async ({
  rpcEndpoint,
  signer,
  defaultTypes = defaultRegistryTypes
}: {
  rpcEndpoint: string | HttpEndpoint;
  signer: OfflineSigner;
  defaultTypes?: ReadonlyArray<[string, GeneratedType]>;
}) => {
  const {
    registry,
    aminoTypes
  } = getSigningStarnamedClientOptions({
    defaultTypes
  });
  const client = await SigningStargateClient.connectWithSigner(rpcEndpoint, signer, {
    registry,
    aminoTypes
  });
  return client;
};