// @flow
import React, { useCallback, useMemo } from "react";
import { supportedCountervalues } from "~/renderer/reducers/settings";
import Box from "~/renderer/components/Box";
import DropDownSelector from "~/renderer/components/DropDownSelector";
import Ellipsis from "~/renderer/components/Ellipsis";
import { AngleDown, Check, Item, TextLink } from "~/renderer/components/Breadcrumb/common";
import IconCheck from "~/renderer/icons/Check";
import IconAngleDown from "~/renderer/icons/AngleDown";
import IconAngleUp from "~/renderer/icons/AngleUp";
import Button from "~/renderer/components/Button";
import { setMarketCounterValue } from "~/renderer/actions/market";
import { useSelector, useDispatch } from "react-redux";

export const MarketCounterValueSelect = () => {
  const counterValue = useSelector(state => state.market.counterValue);

  const dispatch = useDispatch();
  const onCounterValueSelected = useCallback(
    item => {
      dispatch(setMarketCounterValue(item.value));
    },
    [dispatch],
  );

  const renderItem = useCallback(({ item, isActive }) => {
    return (
      <Item key={item.key} isActive={isActive}>
        <Ellipsis ff={`Inter|${isActive ? "SemiBold" : "Regular"}`} fontSize={4}>
          {item.label}
        </Ellipsis>
        {isActive && (
          <Check>
            <IconCheck size={14} />
          </Check>
        )}
      </Item>
    );
  }, []);

  const items = useMemo(
    () =>
      supportedCountervalues.map(item => {
        item.key = item.value;
        return item;
      }),
    [],
  );

  return (
    <Box horizontal flow={2} alignItems="center" justifyContent="flex-end">
      <DropDownSelector
        border
        horizontal
        items={items}
        renderItem={renderItem}
        onChange={onCounterValueSelected}
        controlled
        value={items.find(a => a.value === counterValue.value)}
      >
        {({ isOpen, value }) =>
          value ? (
            <Box flex={1} horizontal>
              <TextLink shrink>
                <Button>
                  <Ellipsis>{value.label}</Ellipsis>
                </Button>
                <AngleDown>
                  {isOpen ? <IconAngleUp size={16} /> : <IconAngleDown size={16} />}
                </AngleDown>
              </TextLink>
            </Box>
          ) : null
        }
      </DropDownSelector>
    </Box>
  );
};