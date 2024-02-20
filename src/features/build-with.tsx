import { ComboBoxResponsive } from '@/components/ui/combobox'

export function BuildWith() {
  return (
    <div>
      <div>
        <label htmlFor="">Technologies</label>
        <ComboBoxResponsive />

        <select name="" id="">
          <option value="react">react</option>
          <option value="tailwind">tailwind</option>
        </select>
      </div>

      <div>
        <label htmlFor="">Other technology</label>
        <input type="text" />
        <button type="button">Add technology</button>
      </div>
    </div>
  )
}
