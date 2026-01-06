import { useState } from "react";
import Button from "../Button";
import PurchaseDetailItem from "./PurchaseDetailItem";
import Input from "../ContactUs/Input";
const PRICE_PER_LITER = 1.5;
const ITEM_LIST = [];
const DEFAULT_ITEMS = [{ label: "Delevery in", value: 20, type: "JD" }];
function DieselCalculation() {
  const style = {
    base:
      "flex flex-col gap-3 [font-family:var(--font-second)] leading-16  font-[500] font-medium w-full",
    main: "flex flex-col gap-8",
    title: "font-semibold text-[1.6rem] capitalize",
    checkBoxLabel: "text-[#737373] text-[1.2rem]",
    checkBox:
      "ring-1 ring-[#c3c3c3] cursor-pointer transition-colors rounded-full  w-5 h-5 checked:bg-[#D8D8D8] appearance-none",
    checkBoxContainer: "flex  gap-5 w-100 items-center",
    checkBoxContainerBase: "flex justify-between"
  };
  // controlled elements
  const [cb1, setCb1] = useState(true);
  const [cb2, setCb2] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // state variables accessable localy
  const [isCalculated, setIsCalculated] = useState(false);
  const [itemList, setItemList] = useState(ITEM_LIST);

  // derived variables
  const total = [...itemList, ...DEFAULT_ITEMS].reduce(
    (prev, cur) =>
      (prev += cur.type.toLowerCase() === "jd" ? Number(cur.value) : 0),
    0
  );
  const finalList = [
    ...DEFAULT_ITEMS,
    ...itemList,
    { label: "total in", value: total.toFixed(2), type: "JD" }
  ];
  function reset() {
    setIsCalculated(false);
    setItemList(ITEM_LIST);
  }

  function calculateDiesel(price, diesel) {
    let result = 0;
    switch (true) {
      case price: {
        result = inputValue / PRICE_PER_LITER;
        break;
      }
      case diesel: {
        result = inputValue * PRICE_PER_LITER;

        break;
      }
      default: {
        console.error("No case matched");
      }
    }
    return result;
  }

  function onCb1ChangeHandler() {
    //handle price
    if (cb2) {
      setCb2(false);
    }
    reset();
    setCb1(true);
  }
  function onCb2ChangeHandler() {
    // handle diesel
    if (cb1) {
      setCb1(false);
    }
    reset();
    setCb2(true);
  }
  function onCalculateHandler() {
    const inputQuantity = Number(inputValue).toFixed(2);
    const result = calculateDiesel(cb1, cb2).toFixed(2);

    // early return statment if any of the follwing conditions meet .
    if (!inputValue || inputQuantity <= 0 || isCalculated) {
      return;
    }

    // push created object into items list

    setItemList(list => [
      ...list,
      {
        label: "Quantity in ",
        value: inputQuantity,
        type: cb1 ? "JD" : "L"
      }
    ]);
    // change type so it reflects how much can i get with 'inputvalue' pointing to choosen 'cb' type .

    setItemList(list => [
      ...list,
      {
        label: "Quantity in ",
        value: result,
        type: !cb1 ? "JD" : "L"
      }
    ]);
    setIsCalculated(() => true);
  }
  function onChangeHandler(value) {
    setInputValue(value);
    reset();
  }
  function onSubmitOrderHandler() {
    // handle moving items to cart
  }
  return (
    <div className={style.base}>
      <h1 className={style.title}>You can Order Diesel Online now! </h1>
      <div className={style.main}>
        <div>
          <Input
            label={"Purchase price"}
            onchange={onChangeHandler}
            value={inputValue}
            type="number"
            placeholder={"50JD"}
          />
          <div className={style.checkBoxContainerBase}>
            <div className={style.checkBoxContainer}>
              <input
                className={style.checkBox}
                onChange={onCb1ChangeHandler}
                checked={cb1}
                name="cb1"
                type="radio"
              />
              <label className={style.checkBoxLabel}>Quantity in JD</label>
            </div>
            <div className={style.checkBoxContainer}>
              <input
                className={style.checkBox}
                onChange={onCb2ChangeHandler}
                checked={cb2}
                name="cb2"
                type="radio"
              />
              <label className={style.checkBoxLabel}>Quantity in Liter</label>
            </div>
          </div>
          <div />
        </div>
        <div className="">
          {isCalculated &&
            <div className="flex flex-col gap-4">
              {itemList.map((item, i) =>
                <div key={i} className="w-full h-10">
                  <PurchaseDetailItem
                    result={item.value}
                    label={item.label}
                    unit={item.type}
                  />
                </div>
              )}
            </div>}
          <div className="w-30 h-15 mt-4">
            <Button
              callback={onCalculateHandler}
              fontFamily="second_l"
              textSize="md"
              radius="xlg"
              text={"Calculate"}
            />
          </div>
        </div>

        {isCalculated &&
          <div className="flex flex-col gap-3">
            {finalList.map((item, i) =>
              <div key={i} className="w-full h-10">
                <PurchaseDetailItem
                  label={item.label}
                  result={item.value}
                  key={i}
                  unit={item.type}
                />
              </div>
            )}

            <div className="w-fit h-15 mt-4">
              <Button
                callback={onSubmitOrderHandler}
                fontFamily="second_l"
                textSize="md"
                radius="xlg"
                text={"Order Now"}
              />
            </div>
          </div>}
      </div>
    </div>
  );
}
export default DieselCalculation;
