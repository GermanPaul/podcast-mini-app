import { useIntl } from "react-intl";

export const useI18n = () => {
  const { formatMessage } = useIntl();
  const t = (
    key: string,
    defaultValue?: string
  ) =>
    formatMessage({
      id: key,
      defaultMessage: defaultValue
    });

  return { t };
};
