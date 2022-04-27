import HeaderTitleText from "../../components/HeaderTitleText";

const defaultHeaderOptions = {
  headerStyle: {
    backgroundColor: "#0000FF",
  },
  headerTintColor: "#FFFFFF",
  headerTitle: ({ tintColor, children }) => (
    <HeaderTitleText style={{ color: tintColor }}>{children}</HeaderTitleText>
  ),
};

export default defaultHeaderOptions
