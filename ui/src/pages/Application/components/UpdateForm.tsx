import React from 'react';
import ProForm, { ProFormText, ModalForm } from '@ant-design/pro-form';
import { useIntl } from 'umi';

export type FormTitleType = {
  id?: string;
  defaultMessage?: string;
};

export type UpdateFormProps = {
  title: FormTitleType;
  visible: boolean;
  onFinish: any;
  onVisibleChange: (visible: boolean) => void;
  initialValues?: API.ApplicationType;
};

const UpdateForm: React.FC<UpdateFormProps> = (props) => {
  const intl = useIntl();

  return (
    <ModalForm
      title={intl.formatMessage({
        id: props.title.id,
        defaultMessage: props.title.defaultMessage,
      })}
      visible={props.visible}
      onFinish={props.onFinish}
      onVisibleChange={props.onVisibleChange}
    >
      <ProForm.Group>
        <ProFormText
          width="md"
          name="name"
          label="Name"
          tooltip="最长为 24 位"
          placeholder="请输入名称"
          initialValue={props.initialValues?.name}
          rules={[{ required: true, message: 'Missing name' }]}
        />
        <ProFormText
          width="md"
          name="desc"
          label="Description"
          placeholder="请输入名称"
          initialValue={props.initialValues?.desc}
        />
      </ProForm.Group>
    </ModalForm>
  );
};

export default UpdateForm;
