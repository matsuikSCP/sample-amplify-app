import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";





type EagerPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly age?: number | null;
  readonly tel?: string | null;
  readonly Boards?: (Board | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPerson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Person, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly age?: number | null;
  readonly tel?: string | null;
  readonly Boards: AsyncCollection<Board>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Person = LazyLoading extends LazyLoadingDisabled ? EagerPerson : LazyPerson

export declare const Person: (new (init: ModelInit<Person>) => Person) & {
  copyOf(source: Person, mutator: (draft: MutableModel<Person>) => MutableModel<Person> | void): Person;
}

type EagerBoard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Board, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly personID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBoard = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Board, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly message: string;
  readonly name?: string | null;
  readonly image?: string | null;
  readonly personID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Board = LazyLoading extends LazyLoadingDisabled ? EagerBoard : LazyBoard

export declare const Board: (new (init: ModelInit<Board>) => Board) & {
  copyOf(source: Board, mutator: (draft: MutableModel<Board>) => MutableModel<Board> | void): Board;
}