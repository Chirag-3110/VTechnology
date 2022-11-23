import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Pressable,
    Modal,
    FlatList,
    TouchableWithoutFeedback,
    TouchableWithoutFeedbackBase,
  } from "react-native";
  import React, { useState } from "react";
  import { useRef } from "react";
  import { useEffect } from "react";
  import { memo } from "react";
  
  /*********************Params****************************/
  
  //        data : the data used to build the list
  //        Eg: - const data = [
  //            { label: 'One', value: '1' },
  //            { label: 'Two', value: '2' },
  //            { label: 'Three', value: '3' },
  //            { label: 'Four', value: '4' },
  //            { label: 'Five', value: '5' },
  //          ];
  //        label : label of the drop DropDown (text to show when nothing is selected)
  //        onSelectValue : calls the function with selected value as the params
  //        labelStyle : style of label
  //        dropDownStyle: style of dropDown Container
  //        itemStyle : style of individual dropDown item
  //        value : value to be given at the time of initialization
  
  /********************************************************/
  
  const CustomDropDown = ({
    data,
    label,
    onSelectValue,
    labelStyle,
    dropDownStyle,
    itemStyle,
    value,
  }) => {
    const TAG = "CUSTOM_DROP_DOWN";
  
    const [selected, setSelected] = useState();
  
    // useState(()=>{
    //     console.log(TAG, "Value changed", value, selected);
    //     if(value!== selected){
    //         console.log(TAG, "inside loop", )
    //         setSelected(value);
    //     }
    // },[value]);
  
    if (value && value !== selected) {
      setSelected(value);
    }
  
    // console.log(TAG, "value", value, "Selected", selected);
  
    const [visible, setVisible] = useState(false);
    const dropDownRef = useRef();
    const [layoutDropDown, setLayoutDropDown] = useState({
      fx: 0,
      fy: 0,
      w: 0,
      h: 0,
      px: 0,
      py: 0,
    });
  
    const toggleDropdown = () => {
      if (visible) {
        setVisible(visible);
      } else {
        dropDownRef.current.measure((fx, fy, w, h, px, py) => {
          setLayoutDropDown({
            fx: fx,
            fy: fy,
            w: w,
            h: h,
            px: px,
            py: py,
          });
        });
  
        setVisible(true);
      }
    };
  
    const renderItem = ({ item, index }) => {
      return (
        <TouchableOpacity
          style={itemStyle}
          onPress={() => {
            setSelected(item);
            setVisible(false);
            onSelectValue(item);
          }}
        >
          <Text customStyle={{color: "black"}}>{item.label}</Text>
        </TouchableOpacity>
      );
    };
  
    //   const renderDropdown = () => {
    //     if (visible) {
    //       return (
    //       );
    //     }
    //   };
  
    return (
      <TouchableOpacity
        style={labelStyle}
        onPress={toggleDropdown}
        ref={dropDownRef}
        onLayout={(layoutEvent) => {
          dropDownRef.current.measure((fx, fy, w, h, px, py) => {
            setLayoutDropDown({
              fx: fx,
              fy: fy,
              w: w,
              h: h,
              px: px,
              py: py,
            });
          });
        }}
      >
        {visible ? (
          <Modal visible={visible} transparent animationType="none">
            <TouchableOpacity
              style={{
                height: "100%",
                width: "100%",
              }}
              onPress={() => setVisible(false)}
            >
              <View
                style={[
                  styles.dropdown,
                  {
                    top: layoutDropDown.py + layoutDropDown.h + 5,
                    left: layoutDropDown.px,
                    width: layoutDropDown.w,
                  },
                  dropDownStyle,
                ]}
              >
                <FlatList
                  persistentScrollbar={true}
                  data={data}
                  renderItem={renderItem}
                  keyExtractor={(item, index) => index.toString()}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        ) : null}
        <Text customStyle={styles.labelText}>
          {(selected && selected.label) || label}
        </Text>
        {visible ? <Text>&#x25B2;</Text> : <Text>&#x25BC;</Text>}
      </TouchableOpacity>
    );
  };
  
  export default memo(CustomDropDown);
  
  const styles = StyleSheet.create({
    button: {},
    labelText: {
      flex: 1,
      textAlign: "center",
    },
    dropdown: {
      position: "absolute",
    },
  });
  