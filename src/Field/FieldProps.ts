import {ValueSelector} from './ValueSelector';
import {FieldValidator} from '../Services/Protocol/FieldValidator';
import {ChangeHandler} from '../Services/Protocol/ChangeHandler';
import {FieldValue, State} from '../Data/State';
import {ServiceFactory} from '../Services/ServiceFactory/ServiceFactory';
import {DispatchFunction} from 'wb-core-provider';

export type ServiceCallback<TService> = (dispatch: DispatchFunction, state: State, serviceFactory: ServiceFactory) => TService

export interface FieldProps {
    name: string;
    initialValue?: string;
    initialValid?: boolean;
    onValueChange?: (newValue: FieldValue, dispatch: DispatchFunction) => void;
    options?: Record<string, unknown>;
}

export interface FieldConfiguration {
    validationRules?: unknown;
    skipValidation?: boolean;
    clearValue?: unknown;
    fieldValidator?: ServiceCallback<FieldValidator> | undefined;
    changeHandler?: ServiceCallback<ChangeHandler> | undefined;
    valueSelector?: ValueSelector;
    hidden?: boolean;
    readonly?: boolean;
    validateOnChange?: boolean;
}
